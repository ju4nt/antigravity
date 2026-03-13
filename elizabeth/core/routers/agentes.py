"""
elizabeth/core/routers/agentes.py + canales.py combinado
"""
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from pydantic import BaseModel
from typing import Optional
from database.connection import get_db
from models.orm import DimAgente, DimCanal

# ─── Agentes ────────────────────────────────────────────────────────────────
router = APIRouter()

class AgenteIn(BaseModel):
    nombre: str
    documento: str
    rol: str = "agente"
    extension: Optional[str] = None

@router.get("/")
async def listar_agentes(db: AsyncSession = Depends(get_db)):
    r = await db.execute(select(DimAgente).where(DimAgente.activo == True))
    return r.scalars().all()

@router.post("/")
async def crear_agente(data: AgenteIn, db: AsyncSession = Depends(get_db)):
    agente = DimAgente(**data.dict())
    db.add(agente)
    await db.commit()
    await db.refresh(agente)
    return agente
