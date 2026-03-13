"""
elizabeth/mcp/elizabeth_mcp_server.py
MCP Server de Elizabeth — expone herramientas para que Claude
pueda controlar el sistema ERP-IA en tiempo real.
"""
import asyncio, json, httpx, os
from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import Tool, TextContent

API_URL = os.getenv("ELIZABETH_API_URL", "http://localhost:8000")
app = Server("elizabeth-mcp")

# ─── HERRAMIENTAS ───────────────────────────────────────────────────────────

@app.list_tools()
async def listar_herramientas() -> list[Tool]:
    return [
        Tool(name="buscar_cliente",
             description="Busca un cliente por nombre, teléfono o documento",
             inputSchema={"type": "object", "properties": {
                 "q": {"type": "string", "description": "Texto a buscar"}
             }, "required": ["q"]}),

        Tool(name="historial_cliente",
             description="Obtiene las últimas interacciones de un cliente",
             inputSchema={"type": "object", "properties": {
                 "cliente_id": {"type": "integer"},
                 "limite": {"type": "integer", "default": 10}
             }, "required": ["cliente_id"]}),

        Tool(name="registrar_interaccion",
             description="Registra una nueva interacción. IA genera resumen y sentimiento automáticamente.",
             inputSchema={"type": "object", "properties": {
                 "fk_cliente": {"type": "integer"},
                 "fk_agente":  {"type": "integer"},
                 "fk_canal":   {"type": "integer"},
                 "transcripcion_ia": {"type": "string"},
                 "duracion_seg": {"type": "integer"}
             }, "required": ["fk_cliente", "fk_agente", "fk_canal"]}),

        Tool(name="crear_cliente",
             description="Crea un nuevo cliente en la base de datos",
             inputSchema={"type": "object", "properties": {
                 "documento": {"type": "string"},
                 "nombre":    {"type": "string"},
                 "phone_id":  {"type": "string"},
                 "segmento":  {"type": "string", "enum": ["normal", "vip", "deudor"]}
             }, "required": ["documento", "nombre"]}),

        Tool(name="listar_agentes",
             description="Lista todos los agentes activos",
             inputSchema={"type": "object", "properties": {}}),

        Tool(name="listar_canales",
             description="Lista los canales configurados (voz, whatsapp, etc.)",
             inputSchema={"type": "object", "properties": {}}),

        Tool(name="health",
             description="Verifica el estado del sistema Elizabeth",
             inputSchema={"type": "object", "properties": {}}),
    ]

# ─── EJECUTOR DE HERRAMIENTAS ────────────────────────────────────────────────

@app.call_tool()
async def ejecutar(name: str, arguments: dict) -> list[TextContent]:
    async with httpx.AsyncClient(base_url=API_URL, timeout=15) as client:
        try:
            if name == "health":
                r = await client.get("/health")
                return [TextContent(type="text", text=json.dumps(r.json(), ensure_ascii=False))]

            elif name == "buscar_cliente":
                r = await client.get("/api/clientes/buscar", params={"q": arguments["q"]})
                return [TextContent(type="text", text=json.dumps(r.json(), ensure_ascii=False, indent=2))]

            elif name == "historial_cliente":
                cid   = arguments["cliente_id"]
                limit = arguments.get("limite", 10)
                r = await client.get(f"/api/interacciones/cliente/{cid}", params={"limite": limit})
                return [TextContent(type="text", text=json.dumps(r.json(), ensure_ascii=False, indent=2))]

            elif name == "registrar_interaccion":
                r = await client.post("/api/interacciones/", json=arguments)
                return [TextContent(type="text", text=json.dumps(r.json(), ensure_ascii=False, indent=2))]

            elif name == "crear_cliente":
                r = await client.post("/api/clientes/", json=arguments)
                return [TextContent(type="text", text=json.dumps(r.json(), ensure_ascii=False, indent=2))]

            elif name == "listar_agentes":
                r = await client.get("/api/agentes/")
                return [TextContent(type="text", text=json.dumps(r.json(), ensure_ascii=False, indent=2))]

            elif name == "listar_canales":
                r = await client.get("/api/canales/")
                return [TextContent(type="text", text=json.dumps(r.json(), ensure_ascii=False, indent=2))]

            else:
                return [TextContent(type="text", text=f"Herramienta desconocida: {name}")]

        except Exception as e:
            return [TextContent(type="text", text=f"Error: {e}")]

# ─── PUNTO DE ENTRADA ────────────────────────────────────────────────────────
if __name__ == "__main__":
    asyncio.run(stdio_server(app))
