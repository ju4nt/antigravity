import os
import json
import asyncio
import traceback
import logging
import subprocess
import sys
from pathlib import Path
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
from telegram import Update
import telegram
from telegram.ext import ApplicationBuilder, MessageHandler, filters, ContextTypes
from groq import Groq


def ensure_utf8_output():
    for stream in (sys.stdout, sys.stderr):
        try:
            stream.reconfigure(encoding="utf-8")
        except Exception:
            pass


ensure_utf8_output()


def configure_logging():
    dir_path = Path(__file__).resolve().parent
    log_dir = dir_path / "logs"
    log_dir.mkdir(exist_ok=True)
    log_file = log_dir / "lupe.log"
    handlers = [
        logging.StreamHandler(sys.stdout),
        logging.FileHandler(log_file, encoding="utf-8")
    ]
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s %(levelname)s %(message)s",
        handlers=handlers
    )
    return log_file


LOG_FILE_PATH = configure_logging()
logging.info("Logs se escriben en %s", LOG_FILE_PATH)

# --- AYUDANTES PARA REPORTES ---
def report_success(label: str, value):
    msg = f"✅ {label}: {value}"
    print(msg)
    logging.info(msg)


def report_failure(label: str, exc: Exception):
    exc_text = "".join(traceback.format_exception(type(exc), exc, exc.__traceback__))
    msg = f"❌ {label}: {exc}\n{exc_text}"
    print(msg)
    logging.error(msg)


def summarize(value, limit=200):
    text = str(value)
    return text if len(text) <= limit else text[:limit] + "…"


# --- CONFIGURACIÓN DE RUTAS ---
USER_HOME = os.path.expanduser("~")
PATH_CONFIG = os.path.join(USER_HOME, ".openclaw", "openclaw.json")

MODEL_CANDIDATES = []

def resolve_model_candidates(cfg: dict) -> list[str]:
    """Construye la secuencia de modelos que el bot puede probar."""
    defaults = cfg.get("agents", {}).get("defaults", {})
    model_cfg = defaults.get("model", {}) or {}
    primary = model_cfg.get("primary")
    fallbacks = model_cfg.get("candidates") or model_cfg.get("fallbacks") or []
    if isinstance(fallbacks, str):
        fallbacks = [fallbacks]

    candidates = []
    for option in ([primary] if primary else []) + list(fallbacks):
        if option and option not in candidates:
            candidates.append(option)

    if not candidates:
        candidates.append("llama-3.3-70b-versatile")

    return candidates


def normalize_windows_path(path: str) -> str:
    """Corrige rutas que usan nombres localizados o alias para el usuario."""
    if not isinstance(path, str):
        return path

    user_home = os.path.expanduser("~")
    user_name = os.path.basename(user_home)
    normalized = path.replace("/", "\\").strip()

    normalized = normalized.replace("\\Usuarios\\", "\\Users\\")
    normalized = normalized.replace("\\Usuarios", "\\Users")

    for alias in ("Lupe", "Usuario"):
        normalized = normalized.replace(f"\\{alias}\\", f"\\{user_name}\\")
        normalized = normalized.replace(f"\\{alias}", f"\\{user_name}")

    return os.path.normpath(normalized)


def normalize_mcp_args(args: dict) -> dict:
    normalized = {}
    for key, value in args.items():
        if isinstance(value, str) and key.lower() in ("path", "directory", "target"):
            corrected = normalize_windows_path(value)
            if corrected != value:
                print(f"🧭 Ajustando ruta MCP: {value} -> {corrected}")
            normalized[key] = corrected
        else:
            normalized[key] = value
    return normalized


def terminate_prior_lupe_processes():
    """Mata procesos de Lupe_Guardian.py que sigan ejecutándose y bloquean el polling."""
    print("🧹 Buscando instancias previas de Lupe_Guardian...")
    try:
        cmd = [
            "powershell",
            "-NoProfile",
            "-Command",
            "Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -match 'Lupe_Guardian\\.py' } | Select-Object -ExpandProperty ProcessId"
        ]
        output = subprocess.check_output(cmd, text=True, stderr=subprocess.DEVNULL)
        pids = [line.strip() for line in output.splitlines() if line.strip().isdigit()]
        if not pids:
            print("🧹 No se encontraron procesos previos.")
            return

        for pid in pids:
            print(f"🧹 Terminando proceso anterior PID={pid}...")
            subprocess.run(["taskkill", "/PID", pid, "/F"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        print("🧹 Limpieza completada.")
    except subprocess.CalledProcessError:
        print("🧹 No fue posible listar procesos; asegurate manualmente de cerrar instancias anteriores.")

# --- CARGA DE CONFIGURACIÓN ---
try:
    with open(PATH_CONFIG, 'r', encoding='utf-8') as f:
        config = json.load(f)
    GROQ_API_KEY = config.get("agents", {}).get("defaults", {}).get("apiKey", "")
    TELEGRAM_TOKEN = config.get("channels", {}).get("telegram", {}).get("botToken", "")
    MODEL_CANDIDATES = resolve_model_candidates(config)
    print(f"✅ Configuración cargada. Bot: @L4t0rr3Bot")
except Exception as e:
    print(f"❌ ERROR CRÍTICO AL LEER JSON: {e}")
    exit()

client = Groq(api_key=GROQ_API_KEY)

# --- FALLBACK DE MODELOS ---
def call_with_model_fallback(messages: list[dict], description: str, timeout: float = 30.0):
    last_error = None
    for model_name in MODEL_CANDIDATES:
        try:
            print(f"[IA] 📡 {description} con modelo {model_name}...")
            completion = client.chat.completions.create(
                model=model_name,
                messages=messages,
                timeout=timeout
            )
            content = completion.choices[0].message.content
            print(f"[IA] ✅ {description} completada con {model_name}.")
            report_success(f"{description} ({model_name})", summarize(content))
            return content, model_name
        except Exception as err:
            print(f"[IA] ⚠️ {description} falló con {model_name}: {err}")
            logging.error("Error en %s con %s: %s", description, model_name, err)
            last_error = err

    if last_error:
        traceback.print_exception(type(last_error), last_error, last_error.__traceback__)
    report_failure(f"{description} (todos los modelos)", last_error or RuntimeError("No se pudo obtener una respuesta de ningún modelo."))
    raise last_error or RuntimeError("No se pudo obtener una respuesta de ningún modelo.")

# --- EL ORQUESTADOR MCP (EL MOTOR) ---
async def ejecutar_mcp(tool_name: str, tool_args: dict):
    """Selecciona el servidor del JSON y ejecuta la herramienta."""
    try:
        # Recargar JSON para asegurar que leemos cambios en caliente
        with open(PATH_CONFIG, 'r', encoding='utf-8') as f:
            cfg = json.load(f)
        
        servers = cfg.get("mcpServers", {})
        
        # Lógica de enrutamiento: ¿A qué servidor pertenece esta herramienta?
        target = "erpia-mcp" # Por defecto
        if any(x in tool_name for x in ["list_directory", "read_file", "write_file", "search_files"]): 
            target = "filesystem"
        elif any(x in tool_name for x in ["browser", "navigate", "screenshot"]): 
            target = "browser"
        elif "fetch" in tool_name: 
            target = "fetch"

        if target not in servers:
            return f"❌ El servidor '{target}' no está en tu JSON de mcpServers."

        srv = servers[target]
        print(f"📡 Orquestador: Conectando a [{target}] para usar [{tool_name}]...")

        # Parámetros del proceso (npx, python, etc)
        normalized_args = normalize_mcp_args(tool_args)
        params = StdioServerParameters(
            command=srv["command"],
            args=srv["args"],
            env={**os.environ, **srv.get("env", {}), "PYTHONIOENCODING": "utf-8"}
        )

        async with asyncio.timeout(60): # Tiempo suficiente para que npx descargue si es necesario
            async with stdio_client(params) as (r, w):
                async with ClientSession(r, w) as sess:
                    await sess.initialize()
                    res = await sess.call_tool(tool_name, normalized_args)
                    result_text = res.content[0].text if res.content else "⚠️ El servidor respondió vacío."
                    report_success(f"MCP {tool_name}", summarize(result_text))
                    return result_text

    except Exception as e:
        print(f"🚨 ERROR EN ORQUESTADOR ({target}):")
        traceback.print_exc()
        report_failure(f"MCP {tool_name}", e)
        return f"Error técnico en el servidor {target}: {str(e)}"

# --- MANEJADOR DE MENSAJES (EL CEREBRO) ---
async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_text = update.message.text
    print(f"\n[CHAT] 👤 USUARIO: {user_text}")

    sys_prompt = (
        "Eres Lupe Guardian, Ingeniero de Sistemas en Windows.\n"
        "Si necesitas ver carpetas, leer archivos o navegar, usa herramientas.\n"
        "FORMATO OBLIGATORIO: EXEC_TOOL:nombre_herramienta|{\"arg\": \"valor\"}\n"
        "Si usas 'filesystem', recuerda que los nombres de herramientas son: list_directory, read_file, etc."
    )

    try:
        # 1. Consultar a la IA (respuesta resiliente)
        ans, used_model = call_with_model_fallback(
            [
                {"role": "system", "content": sys_prompt},
                {"role": "user", "content": user_text}
            ],
            "Respuesta inicial",
            timeout=30.0
        )
        print(f"[IA] 🤖 RESPONDE (modelo {used_model}): {ans}")

        # 2. ¿La IA quiere usar una herramienta?
        if "EXEC_TOOL:" in ans:
            try:
                raw_cmd = ans.split("EXEC_TOOL:")[1].split("|")
                tool = raw_cmd[0].strip()
                args = json.loads(raw_cmd[1].strip())
                
                print(f"🛠️ ACTIVANDO HERRAMIENTA: {tool}")
                resultado_mcp = await ejecutar_mcp(tool, args)
                print(f"📦 Resultado MCP crudo: {resultado_mcp}")

                explanation, explanation_model = call_with_model_fallback(
                    [
                        {"role": "system", "content": "Explica de forma humana y técnica este resultado."},
                        {"role": "user", "content": f"Resultado de {tool}: {resultado_mcp}"}
                    ],
                    "Explicación técnica del resultado",
                    timeout=20.0
                )

                response_text = (
                    f"Resultado crudo de {tool}:\n{resultado_mcp}\n\n"
                    f"Explicación humana del resultado (modelo {explanation_model}):\n{explanation}"
                )
                await update.message.reply_text(response_text)
            except Exception as tool_err:
                print(f"❌ Error parseando comando: {tool_err}")
                await update.message.reply_text(f"⚠️ Error al procesar comando: {ans}")
        else:
            await update.message.reply_text(ans)

    except Exception as e:
        exc_text = "".join(traceback.format_exception(type(e), e, e.__traceback__))
        print("\n🚨 ERROR EN PROCESAMIENTO:")
        print(exc_text)
        await update.message.reply_text(
            "❌ Se produjo un error mientras procesaba tu mensaje. "
            "Revisé el log interno y lo estoy registrando."
        )
        logging.error("Error en handle_message: %s", exc_text)

# --- INICIO DEL PROGRAMA ---
if __name__ == '__main__':
    print("==================================================")
    print("🚀 LUPE GUARDIAN: MODO ORQUESTADOR ACTIVO")
    print("==================================================")
    terminate_prior_lupe_processes()
    app = ApplicationBuilder().token(TELEGRAM_TOKEN).build()
    app.add_handler(MessageHandler(filters.TEXT & (~filters.COMMAND), handle_message))
    try:
        app.run_polling()
    except telegram.error.Conflict as conflict_exc:
        print("⚠️ Telegram detectó otra instancia usando este token.")
        print("   ⇒ Cierra procesos previos o reinicia el bot con un token diferente.")
        print(f"   Detalle: {conflict_exc}")
        sys.exit(1)
