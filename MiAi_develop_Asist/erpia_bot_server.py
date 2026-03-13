import os
import sys
from mcp.server.fastmcp import FastMCP

# Forzamos la codificación UTF-8 para evitar errores de caracteres en Windows
sys.stdout.reconfigure(encoding='utf-8')

mcp = FastMCP("Lupe-Guardian-Server")

@mcp.tool()
def listar_directorio(path: str) -> str:
    """Lista archivos y carpetas de forma segura."""
    try:
        # Limpiamos la ruta por si viene con comillas o espacios extra
        p = os.path.abspath(os.path.expanduser(path.strip()))
        if not os.path.exists(p):
            return f"❌ La ruta no existe: {p}"
            
        items = os.listdir(p)
        resultado = []
        for i in items:
            full_path = os.path.join(p, i)
            icono = "📁" if os.path.isdir(full_path) else "📄"
            resultado.append(f"{icono} {i}")
            
        return "\n".join(resultado) if resultado else "Carpeta vacía."
    except Exception as e:
        return f"❌ Error al leer carpeta: {str(e)}"

if __name__ == "__main__":
    # Importante: No añadas prints aquí, porque el protocolo MCP 
    # usa la consola para enviar los datos. Un print extra ensucia el JSON.
    mcp.run()