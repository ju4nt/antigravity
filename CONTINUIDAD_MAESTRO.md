# 📋 DOCUMENTO MAESTRO DE CONTINUIDAD — erp-ia-proyect
# Colconexus Data Center SAS | Generado: 2026-03-22
# Propósito: Retomar contexto completo si se agotan tokens o se inicia nueva sesión

---

## 1. UBICACIÓN DEL PROYECTO
- Ruta principal: D:\erp-ia-proyect\
- MCP Server erpia: C:\Users\ElkinT\servers\erpia_mcp_server.py
- Config Claude Desktop: C:\Users\ElkinT\AppData\Roaming\Claude\claude_desktop_config.json
- Workspace OpenClaw: C:\Users\ElkinT\.openclaw\
- Config OpenClaw activa: C:\Users\ElkinT\.openclaw\openclaw.json
- Tasks compartidas agentes: C:\Users\ElkinT\.openclaw\workspace\shared_tasks.json

---

## 2. MCPs ACTIVOS EN CLAUDE DESKTOP
- filesystem → acceso C:\ y D:\
- erpia-mcp → PowerShell, Power BI, listar D:\, leer DOCX, logs bot
- powerbi-modeling-mcp → modelos semánticos Power BI Service/XMLA
- github → repos, issues, PRs, commits
- browser (puppeteer) → navegar, click, screenshot, fill forms
- video-editor → extraer audio, acelerar video
- telegram → enviar mensajes, info canales
- fetch → peticiones HTTP directas

---

## 3. ESTRUCTURA DE DIRECTORIOS D:\erp-ia-proyect\
.agents/workflows/protocolo_entrega_final.md  ← protocolo QA obligatorio para agentes
.git/                                          ← repositorio git activo
01_paginas/                                    ← páginas web (pendiente revisar)
dashboard_mision/
  index.html                                   ← dashboard HTML multi-agente existente
  server.py                                    ← servidor Python localhost:8000 + /api/tasks
debug/                                         ← logs de debug por sesión
elizabeth/                                     ← (pendiente revisar contenido)
frontend/                                      ← Next.js 16 + React 19 + Tailwind 4 (scaffold vacío)
isabell/                                       ← (pendiente revisar contenido)
MiAi_develop_Asist/                            ← (pendiente revisar contenido)
prompts_simples/                               ← (pendiente revisar contenido)
python_code/
  claw_bot.py                                  ← script setup Chocolatey + OpenClaw + Telegram config
  prueba/                                      ← (pendiente revisar)
sistema_agentes/                               ← prompts profundos de los 7 agentes (ver sección 4)
DEPLOYMENT_DEBUG.md                            ← historial errores y soluciones técnicas
MEMORIA_TECNICA.md                             ← specs completas Colconexus landing + unidades negocio
plan_ejecucion_maestro.md                      ← roadmap 90 días, modelos negocio, recomendaciones
README.md                                      ← descripción ecosistema OpenClaw + estructura
docker-compose.yaml                            ← Postgres 15 + Appsmith + n8n (stack ERP base)
openclaw.json.example                          ← plantilla config OpenClaw (sin API keys reales)

---

## 4. LOS 7 AGENTES DEL ECOSISTEMA (OpenClaw + Groq)
Motor: OpenClaw v2026.3.8 | LLM: Groq llama-3.3-70b-versatile | Fallback: llama-3.1-8b-instant
Gateway local: http://localhost:18789 | Canal: Telegram (bot configurado)

| Agente          | Archivo                    | Rol Principal                              |
|-----------------|----------------------------|--------------------------------------------|
| YT_Director     | DIRECTOR_YOUTUBE.md        | Canal YouTube automático finanzas/negocios |
| Alpha_Scout     | ALPHA_RESEARCHER.md        | Scouting tendencias Reddit/Google Trends   |
| Affiliate_Bot   | AFFILIATE_MASTER.md        | Marketing afiliados Hotmart, copywriting   |
| Utility_Bot     | UTILITY_BUILDER.md         | One-page apps web generadoras de ingresos  |
| Dev_QA          | DEV_QA_COLCONEXUS.md       | Code review, debugging, docs técnica       |
| Creative_Bot    | CREATIVE_STUDIO.md         | Creativos, reels, miniaturas, branding     |
| CFO_Bot         | CFO_MONITOR.md             | ROI, KPIs financieros, alertas rentabilidad|

---

## 5. SISTEMA DE FALLBACK DE MODELOS (Antigravity)
1. Local:   Ollama → Qwen 2.5 (sin internet, crítico)
2. Free:    Groq → Llama 3.3 70B Versatile (velocidad gratuita)
3. Router:  OpenRouter → rotación masiva de APIs
4. Premium: Google Gemini 3.1 Pro (respaldo alta fidelidad)
NOTA: Gemini 1.5 retirado en Marzo 2026 → usar serie 3.1 con baseUrl /v1beta

---

## 6. DASHBOARD EXISTENTE (dashboard_mision/)
- index.html: Dashboard glassmorphism oscuro, cards por agente, auto-refresh 10s
- server.py: HTTP server Python puerto 8000, ruta GET /api/tasks → lee shared_tasks.json
- Iniciar: cd D:\erp-ia-proyect\dashboard_mision && python server.py
- Ver en: http://localhost:8000
- Formato shared_tasks.json esperado:
  { "tasks": [{agent, title, status, priority, description, subtasks:[{task}]}],
    "agents_status": { "NombreAgente": "estado" } }

---

## 7. FRONTEND NEXT.JS (frontend/)
- Estado: scaffold vacío (solo página default Next.js), NO desarrollado aún
- Stack: Next.js 16.1.6, React 19.2.3, Tailwind 4, TypeScript 5
- Iniciar dev: cd D:\erp-ia-proyect\frontend && npm run dev
- Puerto default: 3000

---

## 8. INFRAESTRUCTURA DOCKER (docker-compose.yaml)
- PostgreSQL 15: datos ERP nómina/turnos → volumen ./data
- Appsmith CE: constructor visual ERP → puerto 8080
- n8n: automatización workflows agentes → puerto 5678 (admin/admin)
- Iniciar: cd D:\erp-ia-proyect && docker-compose up -d

---

## 9. CONFIGURACIÓN OPENCLAW (openclaw.json.example como referencia)
Puerto gateway: 18789 | Modo: local loopback | Auth: token
Telegram: streaming partial, dmPolicy pairing, groupPolicy allowlist
Workspace agents: C:\Users\YOUR_USER\.openclaw\workspace
compaction mode: safeguard

---

## 10. PROTOCOLO QA OBLIGATORIO (.agents/workflows/protocolo_entrega_final.md)
Todo agente ANTES de declarar tarea completa debe:
1. Probar end-to-end con curl o browser (cero errores críticos)
2. Documentar todos los errores/logs en carpeta /debug del proyecto
3. Solo marcar como "Estable" tras pruebas pasadas
4. git add . && git commit -m "feat/fix: Despliegue validado" && git push

---

## 11. ERRORES RESUELTOS DOCUMENTADOS (DEPLOYMENT_DEBUG.md)
- Groq API key no detectada → solución: limpiar models.json en ~/.openclaw/agents/main/agent/
- Modelo con prefijo anthropic/ → corregir a groq/llama-3.3-70b-versatile
- "Session send visibility restricted" → agregar tools.sessions.visibility = "tree" en openclaw.json
- "Failed to call a function" → simplificar prompts + openclaw doctor --fix
- Rate limit Groq 70B → fallback dual a llama-3.1-8b-instant
- Telegram 401 Unauthorized → configurar botToken + pairing policy
- Gemini 1.5 404 en Marzo 2026 → migrar a Gemini 3.1 con /v1beta

---

## 12. TAREA PENDIENTE AL MOMENTO DE ESTA DOCUMENTACIÓN
El usuario (Juan José Tavera — ElkinT, CEO Colconexus) solicitó:
- Ver qué TAREAS se planificaron en el sistema de agentes
- Que cada director/agente GUARDE sus propias tareas
- Una VISUALIZACIÓN de lo que están discutiendo los agentes y las tareas creadas
- Se estaba construyendo un dashboard mejorado con storage persistente y logs de conversación
PRÓXIMO PASO: Crear archivo shared_tasks.json inicial con tareas de los 7 agentes
y construir dashboard mejorado que integre logs de conversación + kanban visual

---

## 13. SKILLS DISPONIBLES EN CLAUDE (este entorno)
- docx: crear/editar documentos Word .docx
- pdf / pdf-reading: crear y leer PDFs
- pptx: presentaciones PowerPoint
- xlsx: hojas de cálculo Excel
- frontend-design: interfaces web premium
- file-reading: leer archivos subidos
- skill-creator: crear nuevas skills

---

## 14. IDENTIDAD Y CONTEXTO DEL PROYECTO
Empresa: Colconexus Data Center SAS
CEO/Founder: Juan José Tavera Gutiérrez (username ElkinT)
También: Data Engineer en Customer Operations Success
Stack principal: Python, Power BI, Next.js, Node.js, Docker, PostgreSQL, OpenClaw, n8n
Objetivo ecosistema: Solopreneur 2.0 — múltiples flujos de ingresos automatizados por agentes IA
Modelos negocio activos: YouTube automation, Marketing afiliados Hotmart, One-page apps, ERP/Data B2B
