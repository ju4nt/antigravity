"""
elizabeth/core/database/connection.py
Conexión async a MySQL con SQLAlchemy
"""
import os
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker, declarative_base

Base = declarative_base()

DATABASE_URL = (
    f"mysql+aiomysql://{os.getenv('MYSQL_USER')}:{os.getenv('MYSQL_PASSWORD')}"
    f"@{os.getenv('MYSQL_HOST','localhost')}:{os.getenv('MYSQL_PORT',3306)}"
    f"/{os.getenv('MYSQL_DB')}"
)

engine = create_async_engine(DATABASE_URL, echo=False, pool_recycle=3600)
AsyncSessionLocal = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)

async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

async def get_db():
    async with AsyncSessionLocal() as session:
        yield session
