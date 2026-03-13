"""
elizabeth/core/routers/canales.py
CRUD de canales de comunicación
"""
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from pydantic import BaseModel
from typing import Optional
from database.connection import get_db
from models.orm import DimCanal

router = APIRouter()

class CanalIn(BaseModel):
    tipo: str
    credenciales: Optional[dict] = None
    activo: bool = True

@router.get("/")
async def listar_canales(db: AsyncSession = Depends(get_db)):
    r = await db.execute(select(DimCanal).where(DimCanal.activo == True))
    return r.scalars().all()

@router.post("/")
async def crear_canal(data: CanalIn, db: AsyncSession = Depends(get_db)):
    canal = DimCanal(**data.dict())
    db.add(canal)
    await db.commit()
    await db.refresh(canal)
    return canal

@router.put("/{id}/toggle")
async def toggle_canal(id: int, db: AsyncSession = Depends(get_db)):
    r = await db.execute(select(DimCanal).where(DimCanal.id == id))
    canal = r.scalar_one_or_none()
    if canal:
        canal.activo = not canal.activo
        await db.commit()
    return canal
