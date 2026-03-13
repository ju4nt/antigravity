# Resumen: Sesion - Automatizar apertura de Power BI con MCP
Fecha: 2026-03-10

## Objetivo
Abrir Power BI Desktop desde Claude usando el MCP erpia-mcp y seleccionar automaticamente "Informe en blanco".

---

## Problema 1: PBIDesktop.exe no encontrado
- Al ejecutar abrir_powerbi, Windows lanzaba error: No se puede encontrar el archivo PBIDesktop.exe
- Causa: Power BI esta instalado desde la Tienda de Microsoft (Store), no como instalacion tradicional.
  No existe en rutas estandar como C:\Program Files.
- Solucion: Lanzar via AppID de la Tienda:
    Start-Process "shell:AppsFolder\Microsoft.MicrosoftPowerBIDesktop_8wekyb3d8bbwe!Microsoft.MicrosoftPowerBIDesktop"

---

## Problema 2: Error activando ventana en seleccionar_informe_en_blanco
- pygetwindow.activate() fallaba con codigo de error 0 (sin efecto real).
- Causa: Las apps de la Tienda de Windows tienen restricciones de foco que bloquean SetForegroundWindow desde procesos externos.
- Solucion: Reemplazar win.activate() por activacion via PowerShell usando WScript.Shell.AppActivate():
    ps_cmd con  = New-Object -ComObject wscript.shell y .AppActivate(titulo)
- Ademas: si falla la activacion, el codigo continua en lugar de abortar.

---

## Archivos modificados
- C:\Users\ElkinT\servers\erpia_mcp_server.py
  * Funcion abrir_powerbi: usa AppID de la Tienda como fallback.
  * Funcion seleccionar_informe_en_blanco: activa ventana via WScript.Shell en lugar de pygetwindow.

---

## Pendiente
- Reiniciar Claude Desktop para que el MCP recargue los cambios.
- Probar flujo completo: abrir_powerbi -> seleccionar_informe_en_blanco.
