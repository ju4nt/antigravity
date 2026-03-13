"""
elizabeth/core/services/identificador.py
Identifica al cliente y construye la ficha completa para el Smart Pop-up.
Consulta MySQL (datos maestros) en paralelo.
"""
import asyncio
from sqlalchemy import select
from database.connection import AsyncSessionLocal
from models.orm import DimCliente, FactInteraccion, DimCanal
from services.redis_bus import RedisBus

redis = RedisBus()

async def identificar_por_telefono(phone: str) -> dict | None:
    # 1. Buscar en caché Redis primero (< 1ms)
    cached = await redis.get_cliente_cache(f"phone:{phone}")
    if cached:
        return cached

    # 2. Buscar en MySQL
    async with AsyncSessionLocal() as db:
        result = await db.execute(
            select(DimCliente).where(DimCliente.phone_id == phone)
        )
        cliente = result.scalar_one_or_none()
        if not cliente:
            return None
        ficha = _construir_ficha(cliente)

    # 3. Guardar en caché 5 min
    await redis.cachear_cliente(f"phone:{phone}", ficha, ttl=300)
    return ficha

async def identificar_por_social(handle_id: str, red: str) -> dict | None:
    async with AsyncSessionLocal() as db:
        result = await db.execute(select(DimCliente))
        clientes = result.scalars().all()
        for c in clientes:
            handles = c.social_handles or {}
            if handles.get(red) == handle_id:
                return _construir_ficha(c)
    return None

async def historial_reciente(cliente_id: int, limite: int = 5) -> list:
    async with AsyncSessionLocal() as db:
        result = await db.execute(
            select(FactInteraccion)
            .where(FactInteraccion.fk_cliente == cliente_id)
            .order_by(FactInteraccion.timestamp.desc())
            .limit(limite)
        )
        rows = result.scalars().all()
        return [
            {"fecha": str(r.timestamp), "canal": r.fk_canal,
             "resumen": r.resumen_ia, "sentimiento": r.sentimiento}
            for r in rows
        ]

def _construir_ficha(c: DimCliente) -> dict:
    return {
        "id": c.id, "nombre": c.nombre, "documento": c.documento,
        "phone_id": c.phone_id, "social_handles": c.social_handles,
        "segmento": c.segmento,
    }
