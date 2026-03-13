"""
elizabeth/core/routers/interacciones.py
Registro y consulta de interacciones + resumen IA automático
"""
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from pydantic import BaseModel
from typing import Optional
from datetime import datetime
from database.connection import get_db
from models.orm import FactInteraccion
from services.ai_engine import AiEngine

router = APIRouter()
ai = AiEngine()

class InteraccionIn(BaseModel):
    fk_cliente: int
    fk_agente: int
    fk_canal: int
    fk_tipificacion: Optional[int] = None
    transcripcion_ia: Optional[str] = None
    ruta_multimedia: Optional[str] = None
    duracion_seg: int = 0

@router.post("/")
async def crear(data: InteraccionIn, db: AsyncSession = Depends(get_db)):
    interaccion = FactInteraccion(**data.dict())
    # Generar resumen y sentimiento con IA si hay transcripción
    if data.transcripcion_ia:
        resultado = await ai.resumir_interaccion(data.transcripcion_ia)
        interaccion.resumen_ia  = resultado.get("resumen", "")
        interaccion.sentimiento = resultado.get("sentimiento", "neutral")
    db.add(interaccion)
    await db.commit()
    await db.refresh(interaccion)
    return interaccion

@router.get("/cliente/{cliente_id}")
async def por_cliente(cliente_id: int, limite: int = 20, db: AsyncSession = Depends(get_db)):
    r = await db.execute(
        select(FactInteraccion)
        .where(FactInteraccion.fk_cliente == cliente_id)
        .order_by(FactInteraccion.timestamp.desc())
        .limit(limite)
    )
    return r.scalars().all()

@router.get("/agente/{agente_id}/hoy")
async def hoy_por_agente(agente_id: int, db: AsyncSession = Depends(get_db)):
    hoy = datetime.utcnow().date()
    r = await db.execute(
        select(FactInteraccion)
        .where(FactInteraccion.fk_agente == agente_id)
        .where(FactInteraccion.timestamp >= hoy)
        .order_by(FactInteraccion.timestamp.desc())
    )
    return r.scalars().all()
