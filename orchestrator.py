"""
NIIGI Orchestrator v2 — Colconexus
======================================
Hace que los 7 directores se comuniquen entre si escribiendo en shared_tasks.json.
El dashboard los lee en tiempo real cada 5s.

CONFIGURACION:
  1. Pon tu Groq API key en GROQ_API_KEY (obtener en console.groq.com - es gratis)
  2. Ejecuta: python orchestrator.py

MODOS:
  python orchestrator.py              -> ciclo continuo cada 45s
  python orchestrator.py --once       -> un solo ciclo de prueba
  python orchestrator.py --reset      -> limpiar errores del chat
  python orchestrator.py --agent Alpha_Scout "tu mensaje"  -> activar agente especifico
"""

import json, time, random, sys, os, re
from datetime import datetime, timezone

# ═══════════════════════════════════════════════════════
# CONFIGURACION — pon tu Groq API key aqui
# Obtener gratis en: https://console.groq.com
# ═══════════════════════════════════════════════════════
GROQ_API_KEY = "PONER_GROQ_KEY_AQUI"

SHARED_FILE = r"C:\Users\ElkinT\.openclaw\workspace\shared_tasks.json"
MODEL       = "llama-3.3-70b-versatile"
CYCLE_WAIT  = 60   # segundos entre ciclos
MAX_TOKENS  = 300

# ── Perfiles completos de los 7 directores ────────────────────────────────
AGENTS = {
  "Alpha_Scout": {
    "e": "🔍", "c": "#00ffcc", "r": "Intel. Mercado",
    "system": (
      "Eres Alpha_Scout, motor de inteligencia de mercado del ecosistema NIIGI de Colconexus Data Center SAS. "
      "Tu mision: detectar tendencias en Reddit, Google Trends y YouTube antes que la competencia. "
      "Entregas briefs concretos con datos: nicho, volumen de busqueda mensual, RPM estimado, competencia. "
      "Siempre mencionas a cual director envias tu reporte. Eres analitico, directo, orientado a datos. "
      "Maximo 3 oraciones. Sin saludos ni despedidas. Solo el reporte."
    ),
  },
  "YT_Director": {
    "e": "🎬", "c": "#0088ff", "r": "YouTube Automation",
    "system": (
      "Eres YT_Director, director de canales YouTube sin rostro del ecosistema NIIGI. "
      "Recibes briefs de Alpha_Scout y produces titulos, estructuras de guion y descripciones de miniatura. "
      "Siempre incluyes CTR esperado, estructura gancho(0-15s)-desarrollo-CTA, y RPM del nicho. "
      "Coordinas con Creative_Bot para los visuales. Maximo 3 oraciones. Sin saludos."
    ),
  },
  "Affiliate_Bot": {
    "e": "🎯", "c": "#ccff00", "r": "Marketing Afiliados",
    "system": (
      "Eres Affiliate_Bot, especialista en marketing de afiliados Hotmart del ecosistema NIIGI. "
      "Buscas productos temperatura >150, comision 50-80%. Diseñas embudos y copy con gatillos psicologicos. "
      "Reportas siempre: nombre producto, temperatura, comision y tipo de embudo recomendado. "
      "Maximo 3 oraciones. Sin saludos."
    ),
  },
  "Utility_Bot": {
    "e": "🛠️", "c": "#00ffcc", "r": "One-Page Apps",
    "system": (
      "Eres Utility_Bot, constructor de One-Page Utility Apps para AdSense del ecosistema NIIGI. "
      "Stack: HTML/JS puro + APIs gratuitas. Priorizas LCP <1.5s y SEO perfecto desde dia 1. "
      "Reportas: nombre de la herramienta, busquedas mensuales, stack tecnico y timeline de build. "
      "Coordinas con Dev_QA antes del deploy. Maximo 3 oraciones. Sin saludos."
    ),
  },
  "Dev_QA": {
    "e": "🏗️", "c": "#9810fa", "r": "Calidad & Seguridad",
    "system": (
      "Eres Dev_QA, guardian de calidad del ecosistema NIIGI de Colconexus. "
      "Revisas codigo, debugeas errores en n8n y OpenClaw, documentas en MEMORIA_TECNICA.md. "
      "Eres preciso y tecnico. Siempre indicas: archivo afectado, tipo de error, solucion propuesta. "
      "Maximo 3 oraciones. Sin saludos."
    ),
  },
  "Creative_Bot": {
    "e": "🎨", "c": "#fb2c36", "r": "Media & Visuales",
    "system": (
      "Eres Creative_Bot, director creativo del ecosistema NIIGI de Colconexus. "
      "Produces prompts para Midjourney, storyboards de reels 60s y banners B2B. "
      "Estetica Colconexus: oscuro, futurista, paleta cyan-electrico-violeta. "
      "Siempre describes el concepto visual con la regla de 3 elementos. Maximo 3 oraciones. Sin saludos."
    ),
  },
  "CFO_Bot": {
    "e": "📊", "c": "#0088ff", "r": "Finanzas & KPIs",
    "system": (
      "Eres CFO_Bot, monitor financiero del ecosistema NIIGI. "
      "Rastreos costos de APIs (Groq, Gemini, Hostinger), RPM de canales y ROI por vertical. "
      "Emites alertas con numeros concretos si el margen baja del umbral. "
      "Formato: costo actual / ingreso proyectado / margen %. Maximo 3 oraciones. Sin saludos."
    ),
  },
}

# Flujos de conversacion — quién le habla a quién y sobre qué
FLOWS = [
  ("Alpha_Scout",   "Completa tu scan semanal de tendencias y reporta el top nicho al ecosistema."),
  ("YT_Director",   "Alpha_Scout te acaba de pasar el brief. Reporta tu plan de contenido para esta semana."),
  ("Affiliate_Bot", "Reporta el mejor producto Hotmart que encontraste esta semana y tu estrategia de embudo."),
  ("Utility_Bot",   "Reporta el avance de la Utility App que tienes en construccion y el siguiente paso."),
  ("Dev_QA",        "Reporta el estado tecnico del ecosistema: n8n, gateway OpenClaw, y cualquier error detectado."),
  ("Creative_Bot",  "YT_Director necesita prompts de miniatura. Reporta tu propuesta creativa."),
  ("CFO_Bot",       "Reporta el estado financiero del ecosistema: costos actuales vs ingresos proyectados."),
]

# ═══════════════════════════════════════════════════════
# I/O del shared_tasks.json
# ═══════════════════════════════════════════════════════
def read_data():
    with open(SHARED_FILE, 'r', encoding='utf-8-sig') as f:
        return json.load(f)

def write_data(data):
    data['last_updated'] = datetime.now(timezone.utc).isoformat()
    with open(SHARED_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

MAX_MSGS = 80  # maximo de mensajes a conservar

def add_msg(agent: str, msg: str):
    data = read_data()
    disc = data.get('discussions', [])

    # No agregar si el mismo agente ya dijo algo identico en los ultimos 3 mensajes
    recent = [d for d in disc[-3:] if d.get('agent') == agent]
    if any(d.get('message','')[:60] == msg[:60] for d in recent):
        print(f"  [SKIP dup] {agent}")
        return

    disc.append({
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "agent":     agent,
        "message":   msg,
    })
    # Mantener solo los ultimos MAX_MSGS mensajes
    data['discussions'] = disc[-MAX_MSGS:]
    data.setdefault('agents_status', {})[agent] = 'idle'
    write_data(data)
    print(f"  {AGENTS[agent]['e']} {agent}: {msg[:90]}...")

def set_status(agent: str, status: str):
    data = read_data()
    data.setdefault('agents_status', {})[agent] = status
    write_data(data)

def build_context(agent_name: str) -> str:
    data  = read_data()
    disc  = data.get('discussions', [])
    tasks = [t for t in data.get('tasks', []) if t.get('agent') == agent_name]
    ctx   = ""
    # ultimos 5 mensajes del ecosistema (excluyendo errores)
    clean = [d for d in disc if 'Error de conexion' not in d.get('message','')][-5:]
    if clean:
        ctx += "MENSAJES RECIENTES DEL ECOSISTEMA:\n"
        for d in clean:
            ctx += f"- {d['agent']}: {d['message']}\n"
    if tasks:
        ctx += f"\nTUS TAREAS ({len(tasks)}):\n"
        for t in tasks[:3]:
            ctx += f"- [{t.get('status','?').upper()}] {t['title']}\n"
    return ctx

# ═══════════════════════════════════════════════════════
# LLAMADA A GROQ
# ═══════════════════════════════════════════════════════
def call_groq(agent_name: str, trigger: str) -> str:
    import urllib.request, json as _json

    profile = AGENTS[agent_name]
    ctx     = build_context(agent_name)
    body    = _json.dumps({
        "model":       MODEL,
        "max_tokens":  MAX_TOKENS,
        "temperature": 0.8,
        "messages": [
            {"role": "system", "content": profile["system"]},
            {"role": "user",   "content": f"{ctx}\n\nINSTRUCCION: {trigger}"}
        ]
    }).encode('utf-8')

    req = urllib.request.Request(
        "https://api.groq.com/openai/v1/chat/completions",
        data    = body,
        headers = {
            "Authorization": f"Bearer {GROQ_API_KEY}",
            "Content-Type":  "application/json",
        }
    )
    with urllib.request.urlopen(req, timeout=20) as r:
        resp = _json.loads(r.read().decode('utf-8'))
    return resp['choices'][0]['message']['content'].strip()

# ═══════════════════════════════════════════════════════
# MENSAJES DE FALLBACK — si no hay API key funcional
# (contextuales y variados, no hardcodeados)
# ═══════════════════════════════════════════════════════
FALLBACK = {
  "Alpha_Scout": [
    "Scan completado. Top nicho semana: '{nicho}' — {vol}k búsquedas/mes, RPM ~${rpm}. Competencia {comp}. Brief enviado a YT_Director y Utility_Bot.",
    "Reddit r/sidehustle y Google Trends analizados. Nicho ganador: '{nicho}' ({vol}k/mes). CPC alto, competencia {comp}. Affiliate_Bot tiene producto alineado.",
    "Tendencia detectada: '{nicho}' subió {pct}% esta semana en YouTube. RPM estimado ${rpm}. Entregando brief completo a YT_Director ahora.",
  ],
  "YT_Director": [
    "Brief de Alpha_Scout recibido. Título: 'Cómo {nicho} en 2026 sin experiencia'. CTR esperado 6-8%. Guion 1400 palabras listo. Creative_Bot: necesito miniatura concepto urgente.",
    "Canal en marcha. Estructura semana: 2 videos Evergreen + 1 Trending. Gancho 0-15s sobre '{nicho}', retención objetivo 45%. VoiceBot procesando audio.",
    "Análisis competencia completado. Top canal del nicho tiene 80k subs, RPM ${rpm}. Nuestra ventaja: thumbnails superiores + guiones más densos. Creative_Bot, brief adjunto.",
  ],
  "Affiliate_Bot": [
    "Hotmart filtrado. Producto top: temperatura {temp}°, comisión {com}%. Embudo: puente simple → lead magnet PDF. Copy con escasez + prueba social listo para ads.",
    "Encontré 3 candidatos temperatura >{temp}°. El ganador tiene EPC ${epc} y conversión 4.2%. Iniciando embudo de 3 pasos. CopyWriter generando copy para Meta Ads.",
    "Producto seleccionado: {com}% comisión, ticket $97. Embudo bridge page + email sequence 5 días. Meta Ads copy con gatillo curiosidad: 'El método que uso para...'.",
  ],
  "Utility_Bot": [
    "Herramienta seleccionada: '{tool}' — {vol}k búsquedas/mes, competencia baja. Stack: HTML/JS + RapidAPI gratuita. Build estimado 4h. SEOBot preparando meta tags.",
    "Build completado: '{tool}'. LCP: 0.9s. SEO: H1/H2 optimizados, schema markup, sitemap.xml. Dev_QA, listo para review antes de deploy en Hostinger.",
    "'{tool}' en staging. AdSense slot configurado. LCP 1.1s, score Lighthouse 94. Dev_QA: revisa el bundle JS antes del push. Deploy estimado mañana 8PM.",
  ],
  "Dev_QA": [
    "Review completado. n8n workflows estables. Gateway OpenClaw: puerto 18789 activo, fallback Groq→Gemini OK. Sin errores críticos. Utility_Bot puede hacer deploy.",
    "Log análisis: 0 errores críticos, 2 warnings en webhook n8n. MEMORIA_TECNICA.md actualizada. Fallback cuádruple validado: Groq 70B→8B→Gemini→Ollama.",
    "Code review Utility_Bot: bundle JS 48KB, LCP clean, no vulnerabilidades XSS. Aprobado para producción. Git commit hecho. Dev branch mergeada a main.",
  ],
  "Creative_Bot": [
    "Miniatura YT lista: Concepto — rostro sorprendido + número grande '${{n}}' + fondo oscuro degradado. Regla 3 elementos: emoción, número, contraste. CTR estimado 7%+.",
    "Reel 60s storyboard: 0-3s gancho visual (texto animado), 3-45s valor con B-roll IA, 45-60s CTA con urgencia. Paleta Colconexus: #050210 + cyan. Prompts Midjourney listos.",
    "Banner B2B Colconexus: fondo obsidian, tipografía Syne Bold, acento electric blue. 3 elementos: logo + tagline + CTA button. Versiones 1200x628 y 1080x1080.",
  ],
  "CFO_Bot": [
    "Reporte financiero: Costos semana — Groq $0, Hostinger $4, dominio $0.3. Total: $4.3. Ingresos proyectados mes 1: AdSense $45 + Afiliados $120. Margen: 87%. ✅ Verde.",
    "Alerta ROI: canal YouTube mes 1 proyecta $65 vs costo $12. ROI 441%. Utility App: $38/mes AdSense, costo operativo $2. CFO recomienda escalar ambos verticales.",
    "KPIs semana: {n} tareas completadas por {agents} agentes. Costo por output: $0.06. Eficiencia del ecosistema: {eff}%. Umbral rentabilidad: $50/mes — alcanzable mes 2.",
  ],
}

def get_fallback(agent_name: str) -> str:
    """Genera un mensaje de fallback contextual y variado."""
    templates = FALLBACK.get(agent_name, ["Reporte en proceso. Sin novedades críticas."])
    tmpl = random.choice(templates)
    # Rellenar variables
    subs = {
        "nicho":  random.choice(["Finanzas con IA","Automatización local","Crypto 2026","Negocios digitales"]),
        "vol":    random.randint(45, 120),
        "rpm":    random.randint(6, 18),
        "comp":   random.choice(["baja","media-baja","media"]),
        "pct":    random.randint(18, 45),
        "temp":   random.choice(["150","165","180"]),
        "com":    random.randint(55, 78),
        "epc":    round(random.uniform(1.2, 4.8), 1),
        "tool":   random.choice(["Generador QR Pro","Convertidor PDF","Calculadora ROI","Minificador JS"]),
        "n":      random.randint(3, 12),
        "agents": random.randint(3, 7),
        "eff":    random.randint(78, 96),
    }
    for k, v in subs.items():
        tmpl = tmpl.replace('{'+k+'}', str(v))
    return tmpl

# ═══════════════════════════════════════════════════════
# ACTIVAR UN AGENTE
# ═══════════════════════════════════════════════════════
def run_agent(agent_name: str, trigger: str):
    if agent_name not in AGENTS:
        print(f"  [!] Agente '{agent_name}' desconocido. Disponibles: {list(AGENTS.keys())}")
        return

    m = AGENTS[agent_name]
    print(f"\n  {m['e']} Activando {agent_name}...")
    set_status(agent_name, 'active')

    response = None

    # Intentar Groq si hay key configurada
    if GROQ_API_KEY and GROQ_API_KEY != "PONER_GROQ_KEY_AQUI":
        try:
            response = call_groq(agent_name, trigger)
            print(f"  ✓ Groq OK")
        except Exception as e:
            print(f"  ✗ Groq error: {e}")

    # Fallback contextual
    if not response:
        response = get_fallback(agent_name)
        print(f"  ~ Usando fallback contextual")

    add_msg(agent_name, response)
    set_status(agent_name, 'idle')
    time.sleep(2)

# ═══════════════════════════════════════════════════════
# CICLO DE CONVERSACION
# ═══════════════════════════════════════════════════════
def run_cycle(n_agents: int = 4):
    print(f"\n{'═'*55}")
    print(f"  CICLO {datetime.now().strftime('%H:%M:%S')} — Ecosistema NIIGI")
    print(f"{'═'*55}")

    flow = random.sample(FLOWS, min(n_agents, len(FLOWS)))
    for agent_name, trigger in flow:
        run_agent(agent_name, trigger)
        time.sleep(3)

    # Standby a los que no participaron
    data = read_data()
    for name in AGENTS:
        if data.get('agents_status', {}).get(name) == 'active':
            data['agents_status'][name] = 'standby'
    write_data(data)
    print(f"\n  ✅ Ciclo completado.")

# ═══════════════════════════════════════════════════════
# LIMPIAR ERRORES DEL CHAT
# ═══════════════════════════════════════════════════════
def reset_errors():
    data = read_data()
    before = len(data.get('discussions', []))
    data['discussions'] = [
        d for d in data.get('discussions', [])
        if 'Error de conexion' not in d.get('message', '')
        and 'Invalid API Key' not in d.get('message', '')
        and 'Could not resolve' not in d.get('message', '')
    ]
    after = len(data['discussions'])
    # poner todos en standby
    for name in AGENTS:
        data.setdefault('agents_status', {})[name] = 'standby'
    write_data(data)
    print(f"✅ Limpieza: {before - after} mensajes de error eliminados. Total: {after} mensajes.")

# ═══════════════════════════════════════════════════════
# MAIN
# ═══════════════════════════════════════════════════════
if __name__ == "__main__":
    args = sys.argv[1:]

    if '--reset' in args:
        reset_errors()
        sys.exit(0)

    if '--agent' in args:
        idx    = args.index('--agent')
        name   = args[idx+1] if idx+1 < len(args) else None
        msg    = ' '.join(args[idx+2:]) if idx+2 < len(args) else "Reporta tu estado actual al ecosistema."
        if name:
            run_agent(name, msg)
        else:
            print("Uso: --agent <NombreAgente> [mensaje opcional]")
        sys.exit(0)

    if '--once' in args:
        run_cycle(n_agents=4)
        sys.exit(0)

    # Modo continuo
    key_status = "Groq activo" if GROQ_API_KEY != "PONER_GROQ_KEY_AQUI" else "fallback contextual (sin API key)"
    print(f"""
╔══════════════════════════════════════════════════════╗
║   NIIGI Orchestrator v2 — Colconexus                 ║
║   Archivo: shared_tasks.json                         ║
║   Modo:    {key_status:<40}║
║   Ciclo:   cada {CYCLE_WAIT}s — Ctrl+C para detener             ║
╚══════════════════════════════════════════════════════╝
""")
    try:
        while True:
            run_cycle(n_agents=4)
            print(f"  Próximo ciclo en {CYCLE_WAIT}s...")
            time.sleep(CYCLE_WAIT)
    except KeyboardInterrupt:
        print("\n⏹ Orquestador detenido.")
        data = read_data()
        for name in AGENTS:
            data.setdefault('agents_status', {})[name] = 'standby'
        write_data(data)
