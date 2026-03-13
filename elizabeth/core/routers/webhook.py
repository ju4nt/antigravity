"""
elizabeth/core/routers/webhook.py
Recibe eventos de todos los canales (WhatsApp, IG, FB, TikTok, PBX)
y dispara el flujo de identificación + Smart Pop-up
"""
from fastapi import APIRouter, Request, BackgroundTasks
from services.identificador import identificar_por_telefono, identificar_por_social, historial_reciente
from services.redis_bus import RedisBus
from services.ai_engine import AiEngine

router = APIRouter()
redis  = RedisBus()
ai     = AiEngine()

@router.post("/whatsapp")
async def webhook_whatsapp(req: Request, bg: BackgroundTasks):
    body = await req.json()
    try:
        msg   = body["data"]["message"]
        phone = msg["key"]["remoteJid"].split("@")[0]
        texto = msg.get("message", {}).get("conversation", "")
        bg.add_task(_procesar_evento, phone=phone, canal="whatsapp", texto=texto, agente_id="general")
    except Exception as e:
        print(f"[WH:WA] parse error: {e}")
    return {"status": "ok"}

@router.post("/meta")
async def webhook_meta(req: Request, bg: BackgroundTasks):
    body = await req.json()
    try:
        entry   = body["entry"][0]["messaging"][0]
        sender  = entry["sender"]["id"]
        texto   = entry.get("message", {}).get("text", "")
        bg.add_task(_procesar_evento, phone=sender, canal="facebook", texto=texto, agente_id="general")
    except Exception as e:
        print(f"[WH:META] parse error: {e}")
    return {"status": "ok"}

@router.get("/meta")
async def verificar_meta(hub_mode: str = "", hub_verify_token: str = "", hub_challenge: str = ""):
    import os
    if hub_verify_token == os.getenv("META_VERIFY_TOKEN"):
        return int(hub_challenge)
    return {"error": "token inválido"}

@router.post("/tiktok")
async def webhook_tiktok(req: Request, bg: BackgroundTasks):
    body = await req.json()
    sender = body.get("from_user_id", "")
    texto  = body.get("content", "")
    bg.add_task(_procesar_evento, phone=sender, canal="tiktok", texto=texto, agente_id="general")
    return {"status": "ok"}

async def _procesar_evento(phone: str, canal: str, texto: str, agente_id: str):
    """Flujo completo: identificar → historial → construir pop-up → publicar en Redis"""
    cliente = await identificar_por_telefono(phone)
    if not cliente:
        cliente = await identificar_por_social(phone, canal)

    historial = []
    if cliente:
        historial = await historial_reciente(cliente["id"])

    popup = {
        "tipo": "nuevo_contacto",
        "canal": canal,
        "cliente": cliente or {"nombre": "Desconocido", "phone_id": phone},
        "historial": historial,
        "mensaje_actual": texto,
    }
    await redis.publicar("popup_channel", agente_id, popup)
