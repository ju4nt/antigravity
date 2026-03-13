# 🧠 ERP-IA Proyect — Colconexus Datacenter SAS

Repositorio principal del ecosistema de Inteligencia Artificial y automatización empresarial de **Colconexus Datacenter SAS**.

## 📦 Módulos del Proyecto

| Módulo | Descripción | Estado |
|---|---|---|
| [`01_paginas/`](./01_paginas/) | Landing Page B2B con Next.js, slider de servicios y link a WhatsApp | ✅ Activo |
| [`elizabeth/`](./elizabeth/) | Contact Center Omnicanal con IA: FastAPI + MySQL + Redis + Next.js | ✅ Activo |
| [`MiAi_develop_Asist/`](./MiAi_develop_Asist/) | Agente IA Guardian (Lupe) — Asistente de desarrollo con IA | ✅ Activo |
| [`python_code/`](./python_code/) | Scripts y bots Python de automatización | 🔧 En desarrollo |
| [`isabell/`](./isabell/) | Bot de automatización (en construcción) | 🚧 Vacío |
| [`prompts_simples/`](./prompts_simples/) | Colección de prompts para IAs y automatizaciones | 📝 En uso |

## 🛠️ Infraestructura General (Docker)

El archivo `docker-compose.yaml` en la raíz levanta los servicios de infraestructura compartida:

```bash
docker-compose up -d
```

| Servicio | Puerto | Descripción |
|---|---|---|
| PostgreSQL 15 | 5432 | Base de datos de registros de nómina y turnos |
| Appsmith CE | 8080 | Constructor visual de ERP y formularios |
| N8N | 5678 | Motor de automatizaciones y conexión de bots |

> **Credenciales N8N por defecto:** admin / admin (¡cambiar en producción!)

## 🚀 Cómo Empezar

```bash
# 1. Clonar el repositorio
git clone https://github.com/ju4nt/antigravity.git
cd antigravity

# 2. Levantar la infraestructura base
docker-compose up -d

# 3. Navegar al módulo que necesitas
cd elizabeth          # Para el Contact Center con IA
cd 01_paginas/landing_page_b2b   # Para la Landing Page
cd MiAi_develop_Asist            # Para el agente Lupe
```

## 📞 Contacto

**Colconexus Datacenter SAS**
- 📱 WhatsApp: [+57 321 437 8318](https://wa.me/573214378318)
- ✉️ Email: colconexus_datacenter_sas@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/company/colconexus-datacenter-sas/)
- 👤 [Facebook @Colconexus_Datacenter_sas](https://facebook.com/Colconexus_Datacenter_sas)

## 📄 Licencia

Proyecto privado — Colconexus Datacenter SAS © 2025. Todos los derechos reservados.
