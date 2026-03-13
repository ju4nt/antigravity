# 🤖 MiAi_develop_Asist — Agente IA Guardian (Lupe)

Agente de IA autónomo para asistencia de desarrollo y monitoreo de sistemas. Lupe actúa como un guardian inteligente que puede configurarse, iniciarse y monitorear procesos del sistema.

## 📁 Estructura

```
MiAi_develop_Asist/
├── Lupe_Guardian.py        ← Agente IA principal (Guardian)
├── Configurador_Lupe.py    ← Configurador interactivo de Lupe
├── Arrancar_Lupe.bat       ← Script de inicio rápido en Windows
├── instalar_lupe.ps1       ← Instalador PowerShell
├── erpia_bot_server.py     ← Servidor bot ERP-IA
├── cofig/                  ← Archivos de configuración
└── logs/                   ← Logs generados por el agente
```

## 🚀 Inicio Rápido

### En Windows (recomendado)
```batch
# Doble clic en:
Arrancar_Lupe.bat
```

### Manual con Python
```bash
# Instalar dependencias
powershell -ExecutionPolicy Bypass -File instalar_lupe.ps1

# Configurar el agente
python Configurador_Lupe.py

# Iniciar el Guardian
python Lupe_Guardian.py
```

## ⚙️ Configuración

Ejecuta `Configurador_Lupe.py` para definir:
- Nombre del agente
- Claves API de IA (OpenAI, Groq, Gemini)
- Puertos de escucha
- Tareas de monitoreo

## 📋 Requisitos

- Python 3.10+
- Windows 10/11
- Conexión a internet (para modelos en la nube)
