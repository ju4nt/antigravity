"""
elizabeth/core/services/redis_bus.py
Bus de eventos Redis para Smart Pop-up en tiempo real
"""
import os, json, asyncio
import redis.asyncio as aioredis

REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379/0")

class RedisBus:
    def __init__(self):
        self.r = aioredis.from_url(REDIS_URL, decode_responses=True)

    async def publicar(self, canal: str, agente_id: str, data: dict):
        payload = json.dumps({"agente_id": agente_id, **data})
        await self.r.publish(canal, payload)

    async def subscribe(self, canal: str, callback):
        pubsub = self.r.pubsub()
        await pubsub.subscribe(canal)
        async def _escuchar():
            async for msg in pubsub.listen():
                if msg["type"] == "message":
                    data = json.loads(msg["data"])
                    agente_id = data.pop("agente_id", None)
                    if agente_id:
                        await callback(agente_id, data)
        asyncio.create_task(_escuchar())

    async def cachear_cliente(self, cliente_id: int, data: dict, ttl: int = 300):
        await self.r.setex(f"cliente:{cliente_id}", ttl, json.dumps(data))

    async def get_cliente_cache(self, cliente_id: int) -> dict | None:
        val = await self.r.get(f"cliente:{cliente_id}")
        return json.loads(val) if val else None
