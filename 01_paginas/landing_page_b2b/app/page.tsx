"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, 
  PhoneCall, 
  Code2, 
  Share2, 
  ChevronRight, 
  MessageSquare,
  Mail,
  ArrowRight,
  Database,
  BarChart3,
  X,
  Zap,
  TrendingUp,
  Clock,
  Instagram,
  Settings,
  Users,
  PieChart,
  Repeat,
  Cloud,
  Headphones,
  Smartphone,
  Layers,
  Cpu,
  Globe,
  Lock,
  Mic2,
  ShieldCheck,
  Rocket
} from "lucide-react";

export default function Home() {
  const WHATSAPP_NUMBER = "573214378318";
  const [selectedRole, setSelectedRole] = useState<null | any>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'bot', text: 'SISTEMA INICIADO. Soy Colconexus Engineering Bot. ¿Deseas medir tu nivel de automatización hoy?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  
  const handleWhatsAppRedirect = (service = "") => {
    const text = service 
      ? `Hola equipo de Colconexus. He usado su herramienta de diagnóstico y me interesa: *${service}*. ¿Podemos agendar una sesión de ingeniería?`
      : "Hola Colconexus. Quisiera medir mi nivel de automatización y solicitar una auditoría técnica.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const simulateBotResponse = (userText: string) => {
    setIsTyping(true);
    setTimeout(() => {
      let response = "Entendido. Procesando requerimiento técnico...";
      if (userText.toLowerCase().includes("automatización")) {
        response = "La automatización B2B es nuestro fuerte. Podemos reducir costos operativos hasta un 40% mediante orquestación de datos.";
      } else if (userText.toLowerCase().includes("costo") || userText.toLowerCase().includes("ahorro")) {
        response = "Nuestras soluciones de WFM Strategic y AI Agency están diseñadas para blindar tu rentabilidad eliminando gastos perpetuos.";
      }
      setChatMessages(prev => [...prev, { role: 'bot', text: response }]);
      setIsTyping(false);
    }, 1500);
  };

  const IMPACT_SOLUTIONS = [
    { title: "Robot Industrial", desc: "Automatización de procesos en tiempo real.", icon: <Bot className="w-5 h-5" /> },
    { title: "Ingeniería Experta", desc: "Talento de alto nivel y Copilots de negocio.", icon: <Users className="w-5 h-5" /> },
    { title: "Speech Analytics", desc: "Análisis vocal industrial de alta precisión.", icon: <Mic2 className="w-5 h-5" /> },
    { title: "Auditores de Flujo", desc: "Calidad autónoma bajo estándares B2B.", icon: <ShieldCheck className="w-5 h-5" /> }
  ];

  const BUSINESS_UNITS = [
    {
      id: "ia_agency",
      title: "Agencia de IA",
      description: "Blindaje de procesos mediante ejecución autónoma sin margen de error.",
      icon: <Bot className="w-8 h-8 text-copper" strokeWidth={1.5} />,
      items: [
        {
          title: "Intelligent Analysts Pro",
          desc: "Optimización de flujo mediante asistencia experta aumentada.",
          skills: ["Speech Analytics industrial", "Auditores IA de flujo masivo", "Copilots de blindaje operativo", "Automatización de tareas críticas"]
        },
        {
          title: "Financial AI Architect",
          desc: "Escalabilidad rentable mediante ML predictivo.",
          skills: ["Modelos Early Warning de rentabilidad", "Recálculo automático de KPIs críticos", "Alertas de impacto financiero proactivo", "Estrategias de optimización de márgenes"]
        }
      ]
    },
    {
      id: "data_master",
      title: "Data Precision Hub",
      description: "Ingeniería de datos avanzada para la toma de decisiones basada en rentabilidad.",
      icon: <BarChart3 className="w-8 h-8 text-copper" strokeWidth={1.5} />,
      items: [
        {
          title: "Industrial Data Pipelines",
          desc: "Estructura Medallón para consistencia absoluta de datos.",
          skills: ["Arquitectura Delta Lake de alta fidelidad", "Diseño Entidad Relación industrial", "Integración de flujos SQL y NoSQL", "Reportes de precisión milimétrica"]
        },
        {
          title: "Predictive Engineering",
          desc: "Modelado matemático de alta precisión para eficiencia de recursos.",
          skills: ["Perfilamiento avanzado de eficiencia", "Feature Engineering industrial", "Testing de modelos bajo carga crítica", "Modelos de optimización de capital"]
        }
      ]
    },
    {
      id: "wfm_strategic",
      title: "WFM Operations",
      description: "Ingeniería de staff con enfoque en blindaje operativo y financiero.",
      icon: <Clock className="w-8 h-8 text-copper" strokeWidth={1.5} />,
      items: [
        {
          title: "Strategic Scheduler",
          desc: "Mallas de turno optimizadas para rentabilidad inmediata.",
          skills: ["Forecast de tráfico de alta precisión", "Alertas Over/Under de impacto directo", "Mallas de turno automatizadas", "Gestión de novedades en tiempo real"]
        },
        {
          title: "Financial Intelligence",
          desc: "Correlación de KPIs operativos con el P&L corporativo.",
          skills: ["Análisis de impacto en factura", "Sugerencias tácticas de gestión de costos", "Modelado de rentabilidad operativa", "Monitoreo de KPIs de alta criticidad"]
        }
      ]
    },
    {
      id: "erp_modular",
      title: "Enterprise Solutions",
      description: "Estructuras modulares escalables con gobierno corporativo de datos.",
      icon: <Cloud className="w-8 h-8 text-copper" strokeWidth={1.5} />,
      items: [
        {
          title: "Custom Functional Apps",
          desc: "Desarrollo de herramientas de precisión para gerencia.",
          skills: ["ERP Modular de flujo optimizado", "Webservices de alta disponibilidad", "Sistemas escalables en la nube", "Gobierno de datos multinivel"]
        },
        {
          title: "High-End Connectivity",
          desc: "Omnicanalidad robusta para operaciones de alto volumen.",
          skills: ["Telefonía VoIP de grado industrial", "Baja latencia en flujos masivos", "Bots multicanal de despliegue rápido", "Infraestructura en memoria"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen relative text-slate-200 bg-obsidian overflow-x-hidden">
      {/* Background System - Industrial Grid */}
      <div className="bg-grid-overlay" />

      {/* --- Navbar --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-obsidian/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col cursor-pointer">
            <span className="font-tech text-2xl font-black tracking-tighter text-white leading-none">COLCONEXUS</span>
            <span className="text-[10px] font-bold text-copper tracking-[0.4em] uppercase">Engineering Solutions</span>
          </div>
          <button 
            onClick={() => handleWhatsAppRedirect()}
            className="btn-copper px-8 py-3 text-[11px]"
          >
            Solicitar Auditoría de Rendimiento
          </button>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6">
        {/* --- Hero Section: Neon & Ice --- */}
        <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-32 mt-20 px-6">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm border border-neon/30 bg-neon/5 text-[9px] font-black text-neon tracking-[0.4em] uppercase mb-8"
            >
              <ShieldCheck className="w-3.5 h-3.5" /> Industrial AI Engineering 2026
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-tech text-4xl md:text-6xl font-black mb-8 leading-[1] tracking-tighter uppercase italic text-ice"
            >
              Mide tu Nivel de <br /> <span className="neon-glow italic">Automatización.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-slate-400 text-base md:text-lg mb-10 max-w-xl font-medium tracking-tight leading-relaxed"
            >
              No dejes la rentabilidad al azar. Nuestra ingeniería de precisión audita tus procesos y despliega robots autónomos que eliminan la inercia operativa de inmediato.
            </motion.p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button 
                onClick={() => handleWhatsAppRedirect()}
                className="btn-neon px-10 py-4 text-xs"
              >
                Mide tu Nivel Ahora
              </button>
              <a 
                href="#diagnostico"
                className="btn-outline px-10 py-4 text-xs"
              >
                Ver Demo Técnica
              </a>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 relative group"
          >
            <div className="absolute -inset-4 bg-neon/10 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative z-10 p-1 border border-white/10 rounded-sm bg-obsidian">
              <img 
                src="/assets/hero-ai.jpg" 
                alt="AI Strategic Hub" 
                className="w-full rounded-sm grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
              />
            </div>
          </motion.div>
        </section>

        {/* --- Comparison Section: Talento vs Inercia (Neon Fix) --- */}
        <section className="max-w-7xl mx-auto mb-32 px-6">
          <div className="glass-card overflow-hidden rounded-sm flex flex-col md:flex-row items-stretch border-neon/10">
            <div className="flex-1 p-12 md:p-16 flex flex-col justify-center bg-obsidian/60 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon/5 blur-3xl" />
              <h2 className="font-tech text-3xl md:text-5xl font-black text-ice mb-8 leading-[1.1] uppercase italic tracking-tighter">
                ¿Pagas por el <br /> <span className="neon-glow">Talento</span> o por la <span className="text-slate-600">Inercia</span>?
              </h2>
              <p className="electric-glow font-tech text-lg font-bold mb-8 uppercase tracking-tight">
                La IA es inversión única, el ejecutivo senior es gasto perpetuo.
              </p>
              <div className="space-y-5 mb-12">
                <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] font-black text-slate-400">
                  <div className="w-1.5 h-1.5 bg-neon rounded-full shadow-[0_0_10px_#ccff00]" /> Automatiza el rol, no el salario.
                </div>
                <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] font-black text-slate-400">
                  <div className="w-1.5 h-1.5 bg-neon rounded-full shadow-[0_0_10px_#ccff00]" /> Blindaje operativo 24/7 sin errores.
                </div>
              </div>
              <button 
                onClick={() => handleWhatsAppRedirect("Comparativa Rentabilidad")}
                className="btn-neon w-fit px-12 py-4"
              >
                Solicitar Business Case
              </button>
            </div>
            <div className="flex-1 min-h-[450px] relative border-l border-white/5">
              <img 
                src="/assets/comparison-ai.jpg" 
                alt="Talento vs Inercia" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-transparent opacity-40 md:opacity-20" />
            </div>
          </div>
        </section>

        {/* --- Impact Solutions Grid (Standardized) --- */}
        <section className="max-w-7xl mx-auto mb-32 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {IMPACT_SOLUTIONS.map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col p-8 bg-graphite/40 border border-white/5 rounded-sm hover:border-electric/40 transition-all group"
              >
                <div className="text-electric group-hover:text-neon mb-6 transition-colors group-hover:scale-110 duration-300">{item.icon}</div>
                <h4 className="font-tech text-base font-black text-ice uppercase tracking-tighter mb-2">{item.title}</h4>
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Services Grid --- */}
        <section id="servicios" className="max-w-7xl mx-auto mb-32 px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {BUSINESS_UNITS.map((unit, idx) => (
              <motion.div 
                key={unit.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-12 md:p-16 border border-white/5 rounded-sm bg-obsidian/40 relative group overflow-hidden"
              >
                <div className="flex items-center gap-6 mb-12">
                  <div className="p-4 bg-neon/5 rounded-sm border border-neon/20 group-hover:border-neon transition-colors">{unit.icon}</div>
                  <h2 className="font-tech text-4xl font-black uppercase tracking-tighter text-ice">{unit.title}</h2>
                </div>
                <p className="text-slate-500 text-[10px] mb-12 font-black uppercase tracking-[0.2em] leading-relaxed border-l-2 border-neon pl-6">{unit.description}</p>
                
                <div className="grid gap-3">
                  {unit.items.map((item) => (
                    <div 
                      key={item.title}
                      onClick={() => setSelectedRole(item)}
                      className="group/item flex items-center justify-between p-8 rounded-sm bg-obsidian border border-white/5 hover:border-electric/50 transition-all cursor-pointer"
                    >
                      <div className="pr-4">
                        <h4 className="font-tech font-black text-ice group-hover/item:text-neon transition-colors uppercase tracking-tight text-xl">{item.title}</h4>
                        <p className="text-[11px] text-slate-600 mt-2 font-bold uppercase tracking-wider">{item.desc}</p>
                      </div>
                      <ChevronRight className="text-slate-800 group-hover/item:text-neon transition-all w-6 h-6" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Data Master Technical Specs Summary --- */}
        <section className="max-w-7xl mx-auto py-24 px-4 grid md:grid-cols-4 gap-8 border-y border-white/5 my-32">
          <div className="text-center">
            <div className="font-tech text-4xl font-black text-white mb-2 uppercase tracking-tighter">Medallion</div>
            <h5 className="text-mint font-bold uppercase text-[10px] tracking-[0.4em] mb-4">Architecture</h5>
            <p className="text-slate-600 text-[10px] font-black uppercase">Industrial Precision</p>
          </div>
          <div className="text-center border-l border-white/5">
             <div className="font-tech text-4xl font-black text-white mb-2 uppercase tracking-tighter">Delta Lake</div>
            <h5 className="text-copper font-bold uppercase text-[10px] tracking-[0.4em] mb-4">Core Storage</h5>
            <p className="text-slate-600 text-[10px] font-black uppercase">High-Availability</p>
          </div>
          <div className="text-center border-l border-white/5">
            <div className="font-tech text-4xl font-black text-white mb-2 uppercase tracking-tighter">Efficiency</div>
            <h5 className="text-mint font-bold uppercase text-[10px] tracking-[0.4em] mb-4">Cost Reduction</h5>
            <p className="text-slate-600 text-[10px] font-black uppercase">Data Science Pro</p>
          </div>
          <div className="text-center border-l border-white/5">
            <div className="font-tech text-4xl font-black text-white mb-2 uppercase tracking-tighter">Scalability</div>
            <h5 className="text-copper font-bold uppercase text-[10px] tracking-[0.4em] mb-4">Global Reach</h5>
            <p className="text-slate-600 text-[10px] font-black uppercase">Cloud Native</p>
          </div>
        </section>

        {/* --- AI Industrial Demo: Neon Terminal --- */}
        <section className="max-w-7xl mx-auto mb-32 px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-[#0a0c10] border border-electric/20 rounded-sm p-8 shadow-[0_0_60px_rgba(0,240,255,0.03)] relative group">
                <div className="absolute top-0 right-10 w-px h-full bg-gradient-to-b from-transparent via-electric/10 to-transparent" />
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-neon/80 shadow-[0_0_10px_#ccff00]" />
                  </div>
                  <span className="text-[9px] font-tech text-electric/40 uppercase tracking-[0.3em]">Colconexus IA - Diagnostic_Engine.sh</span>
                </div>
                <div className="terminal-code space-y-3 font-mono">
                   <p className="opacity-40 text-[10px]">[SYSTEM] Initializing Neural Audit v2.6...</p>
                   <p className="text-white/80">[AUTH] Engineering_Admin_01 Verified.</p>
                   <p className="text-ice">&gt; audit --deep --target manufacturing_ops</p>
                   <p className="text-electric"> [PROCESSING] Analyzing Data Pipelines... 100%</p>
                   <p className="text-neon font-black"> [SUCCESS] 08 Fatal Inefficiencies Eliminated.</p>
                   <p className="text-ice"> [ROI] Performance Increase: +42.8% Est.</p>
                   <div className="flex items-center gap-2">
                     <span className="text-ice">&gt; Status: </span>
                     <span className="terminal-cursor" />
                   </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-tech text-4xl md:text-5xl font-black text-ice mb-8 leading-none uppercase italic tracking-tighter">
                Auditoría Autónoma <br /> <span className="neon-glow">Grado Industrial</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed font-medium">
                Nuestros agentes de ingeniería no solo observan, ejecutan. Blindamos la rentabilidad mediante una capa de inteligencia que recalcula la eficiencia operativa en milisegundos.
              </p>
              <div className="flex gap-12">
                <div>
                  <div className="font-tech text-3xl font-black text-neon mb-1 tracking-tighter">0.8ms</div>
                  <div className="text-[10px] text-electric font-black uppercase tracking-widest">Latencia de Red</div>
                </div>
                <div>
                  <div className="font-tech text-3xl font-black text-neon mb-1 tracking-tighter">99.9%</div>
                  <div className="text-[10px] text-electric font-black uppercase tracking-widest">Uptime Operativo</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Media Hub: YouTube Integration --- */}
        <section className="max-w-7xl mx-auto mb-32 px-6">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-8">
              <div className="relative aspect-video rounded-sm overflow-hidden border border-white/5 bg-obsidian group">
                <iframe 
                  className="w-full h-full grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                  src="https://www.youtube.com/embed/aW-6Zbc-Lyw?autoplay=0&mute=1" 
                  title="Colconexus Engineering Deep Dive"
                  allowFullScreen
                />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-obsidian to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-10">
              <div className="relative aspect-[9/16] rounded-sm overflow-hidden border border-neon/20 bg-obsidian group">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/ROrzZBpJUag" 
                  title="Colconexus Insights Reel"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- Orquestación Section (Neon Fix) --- */}
        <section className="max-w-7xl mx-auto mb-32 px-6">
           <div className="relative rounded-sm overflow-hidden border border-white/5 bg-obsidian group glass-card">
              <div className="grid md:grid-cols-2">
                <div className="p-12 md:p-20 flex flex-col justify-center gap-8 relative z-10">
                  <h3 className="font-tech text-4xl md:text-5xl font-black text-ice uppercase italic tracking-tighter">
                    La IA no es Código, <br /> es <span className="neon-glow">Orquestación</span>.
                  </h3>
                  <p className="text-slate-400 text-base font-medium tracking-tight">
                    Entiende las herramientas, nosotros las unimos por ti para crear un sistema de inteligencia cohesionado.
                  </p>
                  <button onClick={() => handleWhatsAppRedirect("Engine Orchestra")} className="btn-neon w-fit px-12 py-5">Ver Arquitectura</button>
                </div>
                <div className="relative min-h-[450px] border-l border-white/5">
                   <img 
                    src="/assets/orchestra-ai.jpg" 
                    alt="AI Orchestration Hub" 
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                   />
                   <div className="absolute inset-0 bg-gradient-to-l from-obsidian/40 to-transparent" />
                </div>
              </div>
           </div>
        </section>

        <section id="diagnostico" className="max-w-7xl mx-auto mb-32 relative px-4 text-center">
          <div className="absolute inset-0 bg-neon/5 blur-[120px] -z-10" />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-24 rounded-sm border-neon/20 bg-obsidian/40"
          >
            <h2 className="font-tech text-3xl md:text-5xl font-black mb-6 leading-tight tracking-[0.05em] text-ice uppercase italic">
              ¿Tu empresa tiene herramientas del
            </h2>
            <div className="xxi-glow mb-6">XXI</div>
            <h2 className="font-tech text-3xl md:text-5xl font-black mb-12 leading-tight tracking-[0.05em] text-slate-700 uppercase italic">
              o trabaja con herramientas del siglo XIX?
            </h2>
            <p className="text-neon/60 text-[10px] md:text-[12px] font-black mb-16 max-w-2xl mx-auto uppercase tracking-[0.6em] leading-relaxed">
              DESCÚBRELO CON NUESTRO TEST DE DIAGNÓSTICO DIGITAL PRO.
            </p>
            <a 
              href="https://forms.gle/6mRAKsnYVZowXiAD6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-8 px-16 py-8 btn-neon text-base md:text-xl group"
            >
              REALIZAR TEST DE DIAGNÓSTICO
              <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
            </a>
          </motion.div>
        </section>

        {/* --- Final CTA Section: Engineering Hub --- */}
        <section className="max-w-7xl mx-auto p-16 md:p-32 rounded-sm bg-obsidian border border-white/5 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-grid-overlay opacity-20" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric/20 to-transparent" />
          
          <h2 className="font-tech text-5xl md:text-[9rem] font-black mb-10 leading-[0.8] tracking-tighter italic uppercase text-ice relative z-10">
            COLCONEXUS <br /> <span className="electric-glow">TECH HUB</span>
          </h2>
          <p className="text-slate-500 mb-16 text-sm md:text-xl font-bold max-w-3xl mx-auto relative z-10 uppercase tracking-[0.3em] leading-relaxed">
            Eliminamos el techo de su productividad. <br />
            Auditoría estratégica y despliegue masivo de automatización.
          </p>
          
          <button 
            onClick={() => handleWhatsAppRedirect("Tech Hub Final Access")}
            className="px-16 py-8 btn-neon text-base md:text-xl mx-auto relative z-10 group"
          >
            SOLICITAR AUDITORÍA DE RENDIMIENTO
            <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
          </button>
        </section>
      </main>

      {/* --- Footer Lux (Neon Refresh) --- */}
      <footer className="max-w-7xl mx-auto px-6 py-40 border-t border-white/5 flex flex-col gap-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neon/20 to-transparent" />
        
        <div className="grid md:grid-cols-2 items-center gap-32">
          <div className="flex flex-col gap-6">
            <span className="font-tech text-ice text-4xl font-black tracking-tighter uppercase italic">COLCONEXUS</span>
            <span className="text-neon italic font-black text-[12px] uppercase tracking-[0.5em] neon-glow">Global Engineering Hub</span>
            <p className="max-w-md text-slate-600 text-[11px] font-black uppercase tracking-[0.15em] leading-[1.8] mt-4">
              Blindando la rentabilidad corporativa mediante orquestación de datos e inteligencia artificial de grado industrial.
            </p>
            <button 
              onClick={() => handleWhatsAppRedirect("Audit 2026")}
              className="btn-neon w-fit px-12 py-5 text-xs mt-4"
            >
              Iniciar Auditoría de Procesos
            </button>
          </div>
          <div className="rounded-sm overflow-hidden border border-white/10 bg-graphite/20 p-2">
             <img 
              src="/assets/footer-brand.png" 
              alt="Colconexus Brand Official" 
              className="w-full grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-1000 cursor-crosshair"
             />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-[10px] text-slate-700 uppercase tracking-[0.3em] font-black pt-12 border-t border-white/5">
          <div className="flex gap-20">
            <a href="https://www.linkedin.com/company/colconexus-datacenter-sas/" target="_blank" rel="noopener noreferrer" className="hover:text-neon transition-colors duration-300">
              LinkedIn // Network
            </a>
            <a href="https://tiktok.com/@colconexus" target="_blank" rel="noopener noreferrer" className="hover:text-neon transition-colors duration-300">
              TikTok // Lab
            </a>
            <a href="https://instagram.com/colconexusdatacenter" target="_blank" rel="noopener noreferrer" className="hover:text-neon transition-colors duration-300">
              Instagram // Visuals
            </a>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
             <span className="text-slate-800">System Status: Operative // v2.6.0-stable</span>
          </div>
        </div>
      </footer>

      {/* --- Dynamic Specifications Modal (Pop-up) --- */}
      <AnimatePresence>
        {selectedRole && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRole(null)}
              className="absolute inset-0 bg-black/98 backdrop-blur-[40px]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 50 }}
              className="relative w-full max-w-3xl bg-obsidian border border-copper/30 rounded-sm p-20 shadow-[0_0_150px_rgba(184,115,51,0.1)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-copper/10 blur-[80px] -z-10" />
              <button 
                onClick={() => setSelectedRole(null)}
                className="absolute top-12 right-12 p-4 rounded-full hover:bg-white/10 transition-all text-white/50 hover:text-white"
              >
                <X className="w-10 h-10" />
              </button>

              <div className="text-[11px] font-tech font-black text-mint tracking-[0.6em] uppercase mb-6 flex items-center gap-3">
                <div className="w-8 h-px bg-mint/30" /> Technical Payload
              </div>
              <h3 className="font-tech text-6xl font-black mb-10 leading-[0.9] text-white uppercase italic tracking-tighter">{selectedRole.title}</h3>
              
              <div className="grid gap-6 mb-16 max-h-[40vh] overflow-y-auto pr-6 custom-scrollbar">
                {selectedRole.skills.map((skill: string, index: number) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    key={skill} 
                    className="flex items-start gap-8 group/skill"
                  >
                    <div className="mt-1.5 min-w-[32px] h-[32px] p-2 rounded-sm bg-electric/5 flex items-center justify-center border border-electric/20 group-hover/skill:border-neon transition-all">
                      <Zap className="w-4 h-4 text-electric group-hover:text-neon" />
                    </div>
                    <span className="text-xl text-ice font-tech font-black uppercase tracking-tight leading-snug">{skill}</span>
                  </motion.div>
                ))}
              </div>

              <button 
                onClick={() => handleWhatsAppRedirect(`Industrial Audit: ${selectedRole.title}`)}
                className="w-full py-8 btn-neon group"
              >
                AUTORIZAR DESPLIEGUE TÉCNICO <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- Floating AI Chat Widget: Smarter Flow --- */}
      <div className="chat-widget">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="chat-bubble mb-6 p-8 rounded-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-neon" />
              
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm bg-neon/10 flex items-center justify-center border border-neon/30">
                    <Bot className="w-6 h-6 text-neon shadow-[0_0_10px_#ccff00]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h5 className="font-tech text-ice text-[12px] font-black uppercase tracking-tighter">Colconexus BOT v2.6</h5>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-neon animate-pulse" />
                      <span className="text-[9px] text-neon/60 font-black uppercase tracking-widest">Neural Link Active</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="text-white/20 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-6 max-h-[300px] overflow-y-auto mb-8 pr-2 scrollbar-hide">
                {chatMessages.map((msg, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: msg.role === 'bot' ? -10 : 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`p-4 rounded-sm text-[11px] font-bold uppercase tracking-widest leading-relaxed border ${
                      msg.role === 'bot' 
                        ? 'bg-white/5 border-white/5 text-slate-400' 
                        : 'bg-neon/10 border-neon/30 text-neon ml-8'
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                ))}
                {isTyping && (
                  <div className="flex gap-2 p-4 bg-white/5 border border-white/5 rounded-sm w-fit">
                    <div className="w-1.5 h-1.5 bg-neon rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-neon rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-neon rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                )}
              </div>
              
              <div className="grid gap-3">
                <button 
                  onClick={() => {
                    const txt = "¿Cómo mido mi nivel de automatización?";
                    setChatMessages(prev => [...prev, { role: 'user', text: txt }]);
                    simulateBotResponse(txt);
                  }}
                  className="w-full py-4 border border-white/10 hover:border-neon/50 text-slate-500 hover:text-neon transition-all rounded-sm text-[10px] font-black uppercase tracking-widest"
                >
                  ¿Cómo medir mi automatización?
                </button>
                <button 
                  onClick={() => handleWhatsAppRedirect("Consultoría IA")}
                  className="btn-neon w-full py-4 text-[10px]"
                >
                  Hablar con un Ingeniero
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="ml-auto w-24 h-24 rounded-sm bg-obsidian border border-neon/40 flex items-center justify-center text-neon shadow-[0_0_50px_rgba(204,255,0,0.1)] hover:border-neon hover:scale-105 transition-all relative group overflow-hidden"
        >
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <MessageSquare className="w-12 h-12 relative z-10" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
