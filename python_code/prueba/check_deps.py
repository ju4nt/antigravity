import sys
print("Python:", sys.executable)
try:
    import pyadomd
    print("pyadomd INSTALADO")
except ImportError as e:
    print("pyadomd NO instalado:", e)

# Verificar si ADOMD.NET esta disponible (requerido por pyadomd)
try:
    import clr
    print("pythonnet/clr OK")
except ImportError as e:
    print("pythonnet NO instalado:", e)
