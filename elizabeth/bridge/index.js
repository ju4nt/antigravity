/**
 * elizabeth/bridge/index.js
 * Hub omnicanal Elizabeth — recibe webhooks de Evolution API (WhatsApp)
 * y los reenvía al Core de Elizabeth (FastAPI)
 */
import express from "express";
import axios   from "axios";
import "dotenv/config";

const app      = express();
const CORE_URL = process.env.CORE_URL || "http://localhost:8000";
const PORT     = process.env.PORT     || 8080;

app.use(express.json());

// ─── Health ─────────────────────────────────────────────────────────────────
app.get("/health", (_req, res) => {
  res.json({ status: "ok", app: "elizabeth-bridge v1.0" });
});

// ─── WhatsApp (Evolution API) ────────────────────────────────────────────────
app.post("/webhook/whatsapp", async (req, res) => {
  try {
    const { event, data } = req.body;
    if (event !== "messages.upsert") return res.sendStatus(200);

    const msg   = data?.message;
    const phone = msg?.key?.remoteJid?.replace("@s.whatsapp.net", "");
    const texto = msg?.message?.conversation
               || msg?.message?.extendedTextMessage?.text
               || "";

    if (phone && texto) {
      await axios.post(`${CORE_URL}/webhook/whatsapp`, {
        data: { message: { key: { remoteJid: `${phone}@s.whatsapp.net` },
                           message: { conversation: texto } } }
      });
      console.log(`[WA] ${phone}: ${texto.slice(0, 60)}`);
    }
  } catch (e) {
    console.error("[WA] Error:", e.message);
  }
  res.sendStatus(200);
});

// ─── Meta (Instagram / Facebook) ─────────────────────────────────────────────
app.post("/webhook/meta", async (req, res) => {
  try {
    await axios.post(`${CORE_URL}/webhook/meta`, req.body);
    console.log("[META] Evento recibido");
  } catch (e) {
    console.error("[META] Error:", e.message);
  }
  res.sendStatus(200);
});

// Verificación de webhook Meta
app.get("/webhook/meta", (req, res) => {
  const { "hub.mode": mode, "hub.verify_token": token, "hub.challenge": challenge } = req.query;
  if (mode === "subscribe" && token === process.env.META_VERIFY_TOKEN) {
    console.log("[META] Webhook verificado");
    return res.send(challenge);
  }
  res.sendStatus(403);
});

// ─── TikTok ──────────────────────────────────────────────────────────────────
app.post("/webhook/tiktok", async (req, res) => {
  try {
    await axios.post(`${CORE_URL}/webhook/tiktok`, req.body);
    console.log("[TIKTOK] Evento recibido");
  } catch (e) {
    console.error("[TIKTOK] Error:", e.message);
  }
  res.sendStatus(200);
});

// ─── Telegram ────────────────────────────────────────────────────────────────
app.post("/webhook/telegram", async (req, res) => {
  try {
    await axios.post(`${CORE_URL}/webhook/telegram`, req.body);
  } catch (e) {
    console.error("[TG] Error:", e.message);
  }
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`\n🌉 Elizabeth Bridge corriendo en puerto ${PORT}`);
  console.log(`   Core URL: ${CORE_URL}`);
});
