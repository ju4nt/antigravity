"""
elizabeth/core/routers/clientes.py
CRUD de clientes + búsqueda por teléfono / red social
"""
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from pydantic import BaseModel
from typing import Optional
from database.connection import get_db
from models.orm import DimCliente

router = APIRouter()

class ClienteIn(BaseModel):
    documento: str
    nombre: str
    email: Optional[str] = None
    phone_id: Optional[str] = None
    social_handles: Optional[dict] = None
    segmento: str = "normal"

@router.get("/")
async def listar(db: AsyncSession = Depends(get_db)):
    r = await db.execute(select(DimCliente).limit(100))
    return r.scalars().all()

@router.get("/buscar")
async def buscar(q: str, db: AsyncSession = Depends(get_db)):
    r = await db.execute(
        select(DimCliente).where(
            DimCliente.phone_id.contains(q) |
            DimCliente.documento.contains(q) |
            DimCliente.nombre.contains(q)
        )
    )
    return r.scalars().all()

@router.post("/")
async def crear(data: ClienteIn, db: AsyncSession = Depends(get_db)):
    cliente = DimCliente(**data.dict())
    db.add(cliente)
    await db.commit()
    await db.refresh(cliente)
    return cliente

@router.put("/{id}")
async def actualizar(id: int, data: ClienteIn, db: AsyncSession = Depends(get_db)):
    r = await db.execute(select(DimCliente).where(DimCliente.id == id))
    c = r.scalar_one_or_none()
    if not c:
        raise HTTPException(404, "Cliente no encontrado")
    for k, v in data.dict().items():
        setattr(c, k, v)
    await db.commit()
    return c
