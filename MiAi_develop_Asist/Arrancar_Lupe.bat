@echo off
cd /d "%~dp0"
title TERMINAL LUPE AI

:menu
cls
echo ==========================================
echo    🦞 MENU DE CONTROL LUPE 🦞
echo ==========================================
echo 1. CONFIGURAR API KEYS (VENTANA NEON)
echo 2. ARRANCAR ASISTENTE (MODO RESILIENTE)
echo 3. SALIR
echo ==========================================
set /p opt="Selecciona una opcion: "

if "%opt%"=="1" (
    python Configurador_Lupe.py
    goto menu
)
if "%opt%"=="2" (
    echo [SISTEMA] Lanzando Guardian...
    python Lupe_Guardian.py
    pause
    goto menu
)
exit