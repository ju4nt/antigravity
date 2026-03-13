# --- CONFIGURACIÓN DE RUTAS ---
$rutaProyecto = "D:\erp-ia-proyect\MiAi_develop_Asist"
$rutaConfig = "$env:USERPROFILE\.openclaw\agents\main\agent"

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "   🚀 INSTALADOR MAESTRO - LUPE ASISTENTE" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

# 1. Verificar Python
if (!(Get-Command python -ErrorAction SilentlyContinue)) {
  Write-Host "❌ ERROR: Python no está instalado. Instálalo antes de continuar." -ForegroundColor Red
  pause
  exit
}

# 2. Instalar Bibliotecas Requeridas (SILENCIOSAMENTE)
Write-Host "[1/4] Instalando librerías de diseño (CustomTkinter)..." -ForegroundColor Yellow
python -m pip install --upgrade pip
python -m pip install customtkinter --quiet
python -m pip install packaging --quiet

Write-Host "[2/4] Instalando motor OpenClaw..." -ForegroundColor Yellow
npm install -g openclaw --quiet

# 3. Crear Estructura de Carpetas
Write-Host "[3/4] Creando infraestructura de carpetas..." -ForegroundColor Yellow
if (!(Test-Path $rutaProyecto)) { New-Item -ItemType Directory -Path $rutaProyecto -Force }
if (!(Test-Path $rutaConfig)) { New-Item -ItemType Directory -Path $rutaConfig -Force }

# 4. Crear el JSON de Servidores MCP por defecto
Write-Host "[4/4] Configurando mcp-servers.json..." -ForegroundColor Yellow
$mcpJson = @'
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "C:\\Users\\ElkinT"]
    }
  }
}
'@
$mcpJson | Out-File -FilePath "$rutaConfig\mcp-servers.json" -Encoding utf8 -Force

Write-Host "==========================================" -ForegroundColor Green
Write-Host "   ✅ ¡INSTALACIÓN COMPLETADA EXITOSAMENTE!" -ForegroundColor Green
Write-Host "   Ya puedes usar el menú vanguardista."
Write-Host "==========================================" -ForegroundColor Green
pause