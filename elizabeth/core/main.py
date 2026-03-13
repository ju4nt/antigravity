"""
elizabeth/core/main.py — VERSIÓN COMPLETA
Orquestador principal de Elizabeth ERP-IA
FastAPI + WebSocket para Smart Pop-up en tiempo real
"""
import os, asyncio
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from routers import clientes, interacciones, canales, agentes, webhook, telegram
from services.ai_engine import AiEngine
from services.redis_bus import RedisBus
from services.pbx_listener import PbxListener
from database.connection import init_db

load_dotenv()

app = FastAPI(
    title="Elizabeth ERP-IA",
    description="Asistente omnicanal inteligente para contact center",
    version="2.0.0"
)

app.add_middleware(CORSMiddleware,
    allow_origins=["*"], allow_credentials=True,
    allow_methods=["*"], allow_headers=["*"])

# ─── Routers ────────────────────────────────────────────────────────────────
app.include_router(clientes.router,       prefix="/api/clientes",      tags=["Clientes"])
app.include_router(interacciones.router,  prefix="/api/interacciones", tags=["Interacciones"])
app.include_router(canales.router,        prefix="/api/canales",       tags=["Canales"])
app.include_router(agentes.router,        prefix="/api/agentes",       tags=["Agentes"])
app.include_router(webhook.router,        prefix="/webhook",           tags=["Webhooks"])
app.include_router(telegram.router,       prefix="/webhook",           tags=["Telegram"])

# ─── WebSocket Manager: Smart Pop-up ────────────────────────────────────────
class ConnectionManager:
    def __init__(self):
        self.active: dict[str, WebSocket] = {}

    async def connect(self, agente_id: str, ws: WebSocket):
        await ws.accept()
        self.active[agente_id] = ws
        print(f"[WS] Agente conectado: {agente_id}")

    def disconnect(self, agente_id: str):
        self.active.pop(agente_id, None)
        print(f"[WS] Agente desconectado: {agente_id}")

    async def enviar_popup(self, agente_id: str, data: dict):
        ws = self.active.get(agente_id)
        if ws:
            try:
                await ws.send_json(data)
            except Exception as e:
                print(f"[WS] Error enviando popup a {agente_id}: {e}")
                self.disconnect(agente_id)

    async def broadcast(self, data: dict):
        """Envía pop-up a todos los agentes conectados"""
        for agente_id, ws in list(self.active.items()):
            await self.enviar_popup(agente_id, data)

manager = ConnectionManager()

@app.websocket("/ws/{agente_id}")
async def websocket_endpoint(ws: WebSocket, agente_id: str):
    await manager.connect(agente_id, ws)
    try:
        while True:
            await ws.receive_text()
    except WebSocketDisconnect:
        manager.disconnect(agente_id)

# ─── Startup / Shutdown ─────────────────────────────────────────────────────
@app.on_event("startup")
async def startup():
    await init_db()
    print("[STARTUP] Base de datos inicializada")
    redis = RedisBus()
    await redis.subscribe("popup_channel", manager.enviar_popup)
    print("[STARTUP] Redis bus activo")
    pbx = PbxListener()
    pbx.on_llamada = _manejar_llamada
    asyncio.create_task(pbx.escuchar())
    print("[STARTUP] PBX listener activo")

async def _manejar_llamada(callerid: str, agente: str):
    from services.identificador import identificar_por_telefono, historial_reciente
    from services.redis_bus import RedisBus
    redis = RedisBus()
    cliente = await identificar_por_telefono(callerid)
    historial = await historial_reciente(cliente["id"]) if cliente else []
    popup = {
        "tipo": "llamada_entrante",
        "canal": "voz",
        "cliente": cliente or {"nombre": "Desconocido", "phone_id": callerid},
        "historial": historial,
        "mensaje_actual": f"📞 Llamada de {callerid}",
    }
    await redis.publicar("popup_channel", "general", popup)

@app.get("/health", tags=["Sistema"])
async def health():
    return {"status": "ok", "app": "Elizabeth ERP-IA v2.0"}

@app.get("/api/stats", tags=["Sistema"])
async def stats():
    return {
        "agentes_conectados": len(manager.active),
        "agentes": list(manager.active.keys())
    }
