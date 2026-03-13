"""
elizabeth/core/routers/telegram.py
Control de Elizabeth vía Telegram Bot
Comandos: /estado /cliente /popup /modelo
"""
import os, asyncio, json, httpx
from fastapi import APIRouter, Request

router = APIRouter()
TELEGRAM_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN", "")
TELEGRAM_API   = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}"

async def enviar_mensaje(chat_id: int, texto: str):
    async with httpx.AsyncClient() as client:
        await client.post(f"{TELEGRAM_API}/sendMessage", json={
            "chat_id": chat_id, "text": texto, "parse_mode": "Markdown"
        })

@router.post("/telegram")
async def webhook_telegram(req: Request):
    body = await req.json()
    msg  = body.get("message", {})
    chat_id = msg.get("chat", {}).get("id")
    texto   = msg.get("text", "").strip()

    if not chat_id or not texto:
        return {"ok": True}

    if texto.startswith("/estado"):
        resp = "✅ *Elizabeth ERP-IA* está activa\n`Core API: http://localhost:8000`"

    elif texto.startswith("/cliente "):
        q = texto.replace("/cliente ", "").strip()
        async with httpx.AsyncClient(base_url="http://localhost:8000") as c:
            r = await c.get("/api/clientes/buscar", params={"q": q})
            clientes = r.json()
        if clientes:
            lines = [f"👤 *{c['nombre']}* — {c['segmento'].upper()}\n📞 {c.get('phone_id','')}" for c in clientes[:3]]
            resp = "\n\n".join(lines)
        else:
            resp = f"❌ No se encontró cliente con: `{q}`"

    elif texto.startswith("/modelo "):
        modelo = texto.replace("/modelo ", "").strip()
        resp = f"🤖 Modelo cambiado a: `{modelo}`\n_(reinicia el core para aplicar)_"

    elif texto == "/help" or texto == "/start":
        resp = (
            "🤖 *Elizabeth ERP-IA — Comandos*\n\n"
            "/estado — Ver estado del sistema\n"
            "/cliente `<nombre o doc>` — Buscar cliente\n"
            "/modelo `<nombre>` — Cambiar modelo IA\n"
            "/help — Esta ayuda"
        )
    else:
        resp = "No entendí ese comando. Usa /help para ver los disponibles."

    await enviar_mensaje(chat_id, resp)
    return {"ok": True}
