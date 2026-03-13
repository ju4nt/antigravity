import subprocess, sys

# Verificar instalacion pyadomd
try:
    import pyadomd
    print(f"pyadomd OK")
except ImportError:
    r = subprocess.run([sys.executable, "-m", "pip", "install", "pyadomd"], capture_output=True, text=True)
    print("Instalando pyadomd:", r.stdout[-200:], r.stderr[-200:])

# Test simple: solo primer puerto con timeout corto
from pyadomd import Pyadomd
import signal

puerto = 57410
conn_str = f"Provider=MSOLAP;Data Source=localhost:{puerto};Connect Timeout=5;"
print(f"Probando puerto {puerto}...")
try:
    with Pyadomd(conn_str) as conn:
        cur = conn.cursor()
        cur.execute("SELECT [CATALOG_NAME] FROM $SYSTEM.DBSCHEMA_CATALOGS")
        rows = cur.fetchall()
        print(f"Modelos encontrados: {[r[0] for r in rows]}")
except Exception as e:
    print(f"ERROR puerto {puerto}: {e}")
