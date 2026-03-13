# 🤖 Elizabeth ERP-IA — Contact Center Omnicanal Inteligente

> **Versión:** 1.0.0 | **Stack:** FastAPI · MySQL · Redis · Next.js · Docker  
> **Ruta:** `D:\erp-ia-proyect\elizabeth\`

---

## 🏗️ Estructura del Proyecto

```
elizabeth/
├── core/                    ← FastAPI: cerebro principal
│   ├── main.py              ← App + WebSocket manager
│   ├── database/
│   │   └── connection.py    ← Async MySQL con SQLAlchemy
│   ├── models/
│   │   └── orm.py           ← Modelo Estrella (dim + fact)
│   ├── routers/
│   │   ├── webhook.py       ← Recibe eventos de todos los canales
│   │   ├── clientes.py      ← CRUD clientes
│   │   ├── interacciones.py ← Registro + resumen IA automático
│   │   ├── agentes.py       ← CRUD agentes
│   │   └── canales.py       ← CRUD canales
│   └── services/
│       ├── ai_engine.py     ← Motor IA con fallback automático
│       ├── redis_bus.py     ← Bus de eventos tiempo real
│       ├── pbx_listener.py  ← Listener AMI Asterisk/Issabel
│       └── identificador.py ← Identifica cliente por phone/social
├── database/
│   └── init.sql             ← Esquema MySQL + datos iniciales
├── frontend/
│   └── components/
│       └── SmartPopup.jsx   ← Pop-up glassmorphism tiempo real
├── mcp/
│   ├── elizabeth_mcp_server.py  ← MCP para Claude Desktop
│   └── agregar_al_claude_config.json
├── docker-compose.yml       ← Todos los servicios
├── .env.example             ← Plantilla de variables
└── INICIAR_ELIZABETH.bat    ← Instalador 1 clic Windows
```

---

## 🚀 Inicio Rápido

```bash
# 1. Copia el .env y rellena tus claves
copy .env.example .env

# 2. Arranca todo (Docker requerido)
INICIAR_ELIZABETH.bat

# 3. Accede
#    API Docs:  http://localhost:8000/docs
#    Frontend:  http://localhost:3000
#    Bridge:    http://localhost:8080
```

---

## 🌐 Flujo Omnicanal

```
WhatsApp / Instagram / Facebook / TikTok
           ↓ webhook
     elizabeth-bridge (Node.js)
           ↓ HTTP POST
     elizabeth-core (FastAPI)
           ↓ paralelo
   MySQL ←→ Redis ←→ Power BI
           ↓ WebSocket
     Smart Pop-up del agente (< 200ms)
```

---

## 🤖 Motor IA (Fallback automático)

| Orden | Modelo | Gratis |
|---|---|---|
| 1 | Groq Llama 3.3 70B | ~500k tokens/día |
| 2 | Groq Llama 3.1 8B | ~500k tokens/día |
| 3 | Gemini 2.0 Flash | 1M tokens/día |
| 4 | OpenRouter Llama | pago económico |
| 5 | Ollama local | ilimitado (sin internet) |

---

## 📊 Modelo Estrella (ERD)

```
dim_clientes ─┐
dim_agentes  ─┤
dim_canales  ─┼──→ fact_interacciones
dim_tipific. ─┘
```

---

## 🔧 MCP para Claude Desktop

Agrega al `claude_desktop_config.json`:

```json
"elizabeth-mcp": {
  "command": "python",
  "args": ["D:\\erp-ia-proyect\\elizabeth\\mcp\\elizabeth_mcp_server.py"],
  "env": {
    "PYTHONIOENCODING": "utf-8",
    "ELIZABETH_API_URL": "http://localhost:8000"
  }
}
```

### Herramientas disponibles desde Claude:
- `buscar_cliente` — busca por nombre, teléfono o documento
- `historial_cliente` — últimas interacciones de un cliente
- `registrar_interaccion` — registra + genera resumen IA automático
- `crear_cliente` — alta de nuevo cliente
- `listar_agentes` — agentes activos
- `listar_canales` — canales configurados
- `health` — estado del sistema

---

## ⚠️ Puertos utilizados

| Servicio | Puerto |
|---|---|
| elizabeth-core (FastAPI) | 8000 |
| elizabeth-ui (Next.js) | 3000 |
| elizabeth-bridge | 8080 |
| elizabeth-db (MySQL) | 3306 |
| elizabeth-redis | 6379 |
| Issabel SIP | 5060 |
| Issabel AMI | 5038 |

> **No mapear 5060 ni 5038 a otros contenedores.**
