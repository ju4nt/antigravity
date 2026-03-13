@echo off
echo ============================================
echo   Elizabeth ERP-IA — Instalador
echo ============================================

echo [1/4] Copiando .env.example a .env...
if not exist .env (
    copy .env.example .env
    echo    .env creado. Edita las claves antes de continuar.
    pause
)

echo [2/4] Levantando contenedores Docker...
docker-compose up -d --build

echo [3/4] Esperando que MySQL esté listo (20s)...
timeout /t 20 /nobreak > nul

echo [4/4] Verificando health del core...
curl -s http://localhost:8000/health

echo.
echo ✅ Elizabeth está corriendo en:
echo    Core API:  http://localhost:8000
echo    Docs API:  http://localhost:8000/docs
echo    Frontend:  http://localhost:3000
echo    Bridge:    http://localhost:8080
echo.
pause
