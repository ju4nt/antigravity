import os
import subprocess
import json
import sys

def run_cmd(command):
    print(f">> Ejecutando: {command}")
    # shell=True es necesario en Windows para comandos de sistema
    return subprocess.run(command, shell=True)

def install_node_and_tools():
    print("--- 📦 Verificando Herramientas de Sistema ---")
    # Intentamos ver si Chocolatey está instalado
    choco_check = subprocess.run("choco -v", shell=True, capture_output=True)
    if choco_check.returncode != 0:
        print("Instalando Chocolatey para gestionar Node.js...")
        run_cmd('@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString(\'https://community.chocolatey.org/install.ps1\'))"')
    
    print("Instalando/Actualizando Node.js y Python dependencies...")
    run_cmd("choco install nodejs -y")
    run_cmd("pip install pandas openpyxl matplotlib")

def setup_local_openclaw():
    print("\n--- 🦞 CONFIGURADOR OPENCLAW + OLLAMA + TELEGRAM 🦞 ---")
    
    # 1. Instalar OpenClaw globalmente
    run_cmd("npm install -g openclaw@latest")

    # 2. Configurar el modelo ligero (1.5b) para evitar Timeouts en tu i3
    model_name = "qwen2.5-coder:1.5b" 
    print(f"Descargando {model_name} en Ollama...")
    run_cmd(f"ollama pull {model_name}")

    # 3. Pedir Token de Telegram
    tg_token = input("\nIntroduce tu BOT_TOKEN de Telegram: ")

    # 4. Estructura de Configuración CORREGIDA (Sintaxis 2026)
    config = {
        "models": {
            "providers": {
                "ollama": {
                    "baseUrl": "http://127.0.0.1:11434",
                    "apiKey": "ollama-local",
                    "api": "ollama",
                    "models": [
                        {
                            "id": model_name,
                            "name": "Qwen 2.5 Coder 1.5B"
                        }
                    ]
                }
            }
        },
        "agents": {
            "defaults": {
                "model": {
                    "primary": f"ollama/{model_name}"
                }
            }
        },
        "channels": {
            "telegram": {
                "enabled": True,
                "dmPolicy": "open",
                "groupPolicy": "open",
                "allowFrom": ["*"],
                "accounts": {
                    "default": {
                        "botToken": tg_token,
                        "dmPolicy": "open",
                        "groupPolicy": "open",
                        "allowFrom": ["*"]
                    }
                }
            }
        }
    }

    # Ruta estándar en Windows: %USERPROFILE%/.openclaw/openclaw.json
    config_path = os.path.expanduser("~/.openclaw/openclaw.json")
    
    # Asegurar que la carpeta existe
    if not os.path.exists(os.path.dirname(config_path)):
        os.makedirs(os.path.dirname(config_path), exist_ok=True)
    
    # Guardar el JSON
    with open(config_path, "w", encoding="utf-8") as f:
        json.dump(config, f, indent=2)
    
    print(f"\n✅ CONFIGURACIÓN EXITOSA.")
    print(f"Archivo guardado en: {config_path}")
    print("-" * 50)
    print("🚀 PASO FINAL: Abre una nueva terminal y escribe:")
    print("openclaw gateway --allow-unconfigured")
    print("-" * 50)

if __name__ == "__main__":
    # Ejecutar configuración
    try:
        install_node_and_tools()
        setup_local_openclaw()
    except Exception as e:
        print(f"❌ Ocurrió un error: {e}")