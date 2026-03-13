import subprocess, sys

# Test pyadomd
try:
    import pyadomd
    print(f"pyadomd instalado: {pyadomd.__version__}")
except ImportError as e:
    print(f"pyadomd NO instalado: {e}")
    r = subprocess.run([sys.executable, "-m", "pip", "install", "pyadomd"], capture_output=True, text=True)
    print(r.stdout, r.stderr)
    import pyadomd

# Test conexion Power BI con los puertos detectados
from pyadomd import Pyadomd

puertos = [57410, 51787, 50215, 50206, 50205, 50170]

for puerto in puertos:
    conn_str = f"Provider=MSOLAP;Data Source=localhost:{puerto};"
    try:
        with Pyadomd(conn_str) as conn:
            with conn.cursor().execute("SELECT [CATALOG_NAME] FROM $SYSTEM.DBSCHEMA_CATALOGS") as cur:
                rows = cur.fetchall()
                print(f"Puerto {puerto} CONECTADO - Modelos: {[r[0] for r in rows]}")
    except Exception as e:
        print(f"Puerto {puerto} ERROR: {str(e)[:120]}")
