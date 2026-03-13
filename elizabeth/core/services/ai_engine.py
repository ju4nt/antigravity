"""
elizabeth/core/services/ai_engine.py
Motor IA con fallback automático Groq → Gemini → OpenRouter → Ollama
"""
import os
from openai import AsyncOpenAI

MODELOS = [
    {"nombre": "Groq Llama 3.3 70B",  "url": "https://api.groq.com/openai/v1",
     "model": "llama-3.3-70b-versatile", "key_env": "GROQ_API_KEY"},
    {"nombre": "Groq Llama 3.1 8B",   "url": "https://api.groq.com/openai/v1",
     "model": "llama-3.1-8b-instant",   "key_env": "GROQ_API_KEY"},
    {"nombre": "Gemini Flash",         "url": "https://generativelanguage.googleapis.com/v1beta",
     "model": "gemini-2.0-flash",       "key_env": "GEMINI_API_KEY"},
    {"nombre": "OpenRouter Llama",     "url": "https://openrouter.ai/api/v1",
     "model": "meta-llama/llama-3.3-70b-instruct", "key_env": "OPENROUTER_API_KEY"},
    {"nombre": "Ollama Local",         "url": "http://localhost:11434/v1",
     "model": "llama3.2",              "key_env": None},
]

SYSTEM_ELIZABETH = """
Eres Elizabeth, asistente IA de un contact center omnicanal.
Tu misión: ayudar a los agentes con información del cliente en tiempo real.
Responde siempre en español. Sé concisa, precisa y profesional.
Cuando generes resúmenes de interacción, incluye: motivo, sentimiento del cliente y acción sugerida.
"""

class AiEngine:
    async def chat(self, mensajes: list[dict], system: str = SYSTEM_ELIZABETH) -> str:
        for cfg in MODELOS:
            try:
                api_key = os.getenv(cfg["key_env"]) if cfg["key_env"] else "ollama"
                client = AsyncOpenAI(api_key=api_key, base_url=cfg["url"])
                msgs = [{"role": "system", "content": system}] + mensajes
                resp = await client.chat.completions.create(
                    model=cfg["model"], messages=msgs, max_tokens=1000, timeout=25
                )
                print(f"[AI] OK → {cfg['nombre']}")
                return resp.choices[0].message.content
            except Exception as e:
                print(f"[AI] FALLO {cfg['nombre']}: {e}")
        return "❌ Elizabeth: sin modelos disponibles ahora mismo."

    async def resumir_interaccion(self, transcripcion: str) -> dict:
        prompt = f"Resume esta interacción de contact center:\n\n{transcripcion}\n\n"
        prompt += "Devuelve JSON con: resumen (str), sentimiento (enojado/feliz/neutral), accion_sugerida (str)"
        texto = await self.chat([{"role": "user", "content": prompt}])
        import json, re
        try:
            data = json.loads(re.search(r'\{.*\}', texto, re.DOTALL).group())
        except Exception:
            data = {"resumen": texto, "sentimiento": "neutral", "accion_sugerida": ""}
        return data
