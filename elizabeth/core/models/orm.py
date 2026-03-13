"""
elizabeth/core/models/orm.py
Modelos SQLAlchemy — Modelo Estrella de Elizabeth
"""
from sqlalchemy import Column, Integer, String, Float, DateTime, Text, JSON, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from datetime import datetime
from database.connection import Base


class DimCliente(Base):
    __tablename__ = "dim_clientes"
    id            = Column(Integer, primary_key=True, autoincrement=True)
    documento     = Column(String(20), unique=True, nullable=False, index=True)
    nombre        = Column(String(120), nullable=False)
    email         = Column(String(120))
    phone_id      = Column(String(30), index=True)           # número WhatsApp
    social_handles = Column(JSON)                             # {"ig": "id", "fb": "id", "tiktok": "id"}
    segmento      = Column(String(30), default="normal")     # vip / deudor / normal
    creado_en     = Column(DateTime, default=datetime.utcnow)
    interacciones = relationship("FactInteraccion", back_populates="cliente")


class DimAgente(Base):
    __tablename__ = "dim_agentes"
    id            = Column(Integer, primary_key=True, autoincrement=True)
    nombre        = Column(String(120), nullable=False)
    documento     = Column(String(20), unique=True, nullable=False)
    rol           = Column(String(20), default="agente")     # admin / agente / supervisor
    extension     = Column(String(10))                       # extensión PBX
    activo        = Column(Boolean, default=True)
    interacciones = relationship("FactInteraccion", back_populates="agente")


class DimCanal(Base):
    __tablename__ = "dim_canales"
    id            = Column(Integer, primary_key=True, autoincrement=True)
    tipo          = Column(String(30), nullable=False)       # voz / whatsapp / instagram / facebook / tiktok
    credenciales  = Column(JSON)                             # tokens, webhooks, etc.
    activo        = Column(Boolean, default=True)
    interacciones = relationship("FactInteraccion", back_populates="canal")


class DimTipificacion(Base):
    __tablename__ = "dim_tipificaciones"
    id            = Column(Integer, primary_key=True, autoincrement=True)
    categoria     = Column(String(60), nullable=False)       # Venta / Soporte / Reclamo
    subcategoria  = Column(String(60))                       # Interesado / Cierre / etc.
    accion_auto   = Column(String(120))                      # "enviar_email_cierre"
    interacciones = relationship("FactInteraccion", back_populates="tipificacion")

class FactInteraccion(Base):
    __tablename__ = "fact_interacciones"
    id               = Column(Integer, primary_key=True, autoincrement=True)
    fk_cliente       = Column(Integer, ForeignKey("dim_clientes.id"), index=True)
    fk_agente        = Column(Integer, ForeignKey("dim_agentes.id"), index=True)
    fk_canal         = Column(Integer, ForeignKey("dim_canales.id"))
    fk_tipificacion  = Column(Integer, ForeignKey("dim_tipificaciones.id"))
    transcripcion_ia = Column(Text)
    resumen_ia       = Column(Text)
    sentimiento      = Column(String(20))                   # enojado / feliz / neutral
    ruta_multimedia  = Column(String(255))                  # .wav / captura de chat
    duracion_seg     = Column(Integer, default=0)
    timestamp        = Column(DateTime, default=datetime.utcnow, index=True)
    cliente          = relationship("DimCliente",    back_populates="interacciones")
    agente           = relationship("DimAgente",     back_populates="interacciones")
    canal            = relationship("DimCanal",      back_populates="interacciones")
    tipificacion     = relationship("DimTipificacion", back_populates="interacciones")
