import os
import json
import sys

# --- CARGA MODO CABALLO DE TROYA ---
path_config = os.path.expanduser("~/.openclaw/openclaw.json")
path_keys = os.path.expanduser("~/.openclaw/keys.safe")

try:
    # Force UTF-8 console output to avoid cp1252 issues on Windows
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except AttributeError:
        pass
    with open(path_config, 'r', encoding='utf-8') as f:
        config_data = json.load(f)
    with open(path_keys, 'r', encoding='utf-8') as f:
        keys_data = json.load(f)

    # Extraemos el Token de la estructura compleja que guardó el configurador
    TOKEN = config_data["channels"]["telegram"]["botToken"].strip()
    GEMINI_API_KEY = keys_data["G"].strip()
    GROQ_API_KEY = keys_data["X"].strip()
    
    print(f"✅ Lupe ha extraído las llaves del sistema seguro.")
except Exception as e:
    print(f"❌ Error: No se pudo leer la configuración en ~/.openclaw/ ({e})")
    exit()
# -----------------------------------
