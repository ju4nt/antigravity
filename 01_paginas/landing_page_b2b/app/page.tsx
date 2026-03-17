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
  
  const handleWhatsAppRedirect = (service = "") => {
    const text = service 
      ? `Hola equipo de Colconexus. Me interesa el servicio institucional: *${service}*. ¿Podrían darme más información técnica?`
      : "Hola Colconexus. Quisiera solicitar una auditoría de rendimiento técnica.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
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
        {/* --- Hero Section (Optimized Position) --- */}
        <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 mb-24 mt-20 px-6">
          <div className="flex-1 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-tech text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter uppercase italic"
            >
              Optimizar. Escalar. <br /> <span className="text-mint-glow italic">Blindar.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl font-medium tracking-tight leading-relaxed"
            >
              Ingeniería de precisión aplicada a la rentabilidad corporativa. <br />
              Soluciones de arquitectura de datos y automatización para operaciones de alto nivel.
            </motion.p>
            
            <button 
              onClick={() => handleWhatsAppRedirect()}
              className="btn-copper px-12 py-5 text-sm"
            >
              Iniciar Auditoría Técnica
            </button>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 relative group"
          >
            <div className="absolute -inset-4 bg-mint/10 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
            <img 
              src="file:///C:/Users/ElkinT/.gemini/antigravity/brain/e83d6572-be87-4c99-af26-f208e8550752/media__1773772390709.jpg" 
              alt="IA Strategic Leap" 
              className="rounded-sm border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl relative z-10"
            />
          </motion.div>
        </section>

        {/* --- Comparison Section: Talento vs Inercia --- */}
        <section className="max-w-7xl mx-auto mb-32 px-6">
          <div className="glass-card overflow-hidden rounded-sm flex flex-col md:flex-row items-stretch border-copper/10">
            <div className="flex-1 p-16 flex flex-col justify-center bg-obsidian/50">
              <h2 className="font-tech text-4xl md:text-5xl font-black text-white mb-8 leading-none uppercase italic tracking-tighter">
                ¿Estás pagando por el <br /> <span className="text-copper">Talento</span> o por la <span className="text-slate-600">Inercia</span>?
              </h2>
              <p className="text-mint-glow font-tech text-xl font-bold mb-8 uppercase tracking-tight">
                La IA es inversión única, el ejecutivo senior es gasto perpetuo.
              </p>
              <div className="space-y-4 mb-12">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-black text-slate-500">
                  <span className="w-2 h-2 bg-copper rounded-full" /> Automatiza el rol, no el salario.
                </div>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-black text-slate-500">
                  <span className="w-2 h-2 bg-copper rounded-full" /> Elimina riesgos operativos de inmediato.
                </div>
              </div>
            </div>
            <div className="flex-1 min-h-[400px]">
              <img 
                src="file:///C:/Users/ElkinT/.gemini/antigravity/brain/e83d6572-be87-4c99-af26-f208e8550752/media__1773772390787.jpg" 
                alt="Talento vs Inercia Comparison" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* --- NEW: IMPACT SOLUTIONS PANEL --- */}
        <section className="max-w-7xl mx-auto mb-32 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {IMPACT_SOLUTIONS.map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col p-8 bg-graphite/40 border border-copper/10 rounded-sm hover:border-mint/40 transition-all group"
              >
                <div className="text-copper group-hover:text-mint mb-6 transition-colors">{item.icon}</div>
                <h4 className="font-tech text-lg font-black text-white uppercase tracking-tighter mb-2">{item.title}</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{item.desc}</p>
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-12 rounded-sm border-white/5 hover:border-copper/40 transition-all duration-500 relative overflow-hidden group"
              >
                <div className="flex items-center gap-6 mb-12">
                  <div className="p-4 bg-copper/5 rounded-sm border border-copper/20">{unit.icon}</div>
                  <h2 className="font-tech text-4xl font-black uppercase tracking-tighter text-white">{unit.title}</h2>
                </div>
                <p className="text-slate-400 text-[10px] mb-12 font-black uppercase tracking-[0.2em] leading-relaxed border-l border-copper pl-6">{unit.description}</p>
                
                <div className="grid gap-3">
                  {unit.items.map((item) => (
                    <div 
                      key={item.title}
                      onClick={() => setSelectedRole(item)}
                      className="group/item flex items-center justify-between p-8 rounded-sm bg-obsidian border border-white/5 hover:border-mint/50 transition-all cursor-pointer"
                    >
                      <div className="pr-4">
                        <h4 className="font-tech font-black text-white group-hover/item:text-mint transition-colors uppercase tracking-tight text-xl">{item.title}</h4>
                        <p className="text-[11px] text-slate-500 mt-2 font-bold uppercase tracking-wider">{item.desc}</p>
                      </div>
                      <ChevronRight className="text-slate-800 group-hover/item:text-mint transition-all w-6 h-6" />
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

        {/* --- AI Industrial Demo: Terminal Simulation --- */}
        <section className="max-w-7xl mx-auto mb-32 px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-[#0a0c10] border border-mint/20 rounded-sm p-6 shadow-[0_0_50px_rgba(46,229,157,0.05)]">
                <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-mint" />
                  </div>
                  <span className="text-[9px] font-tech text-mint/50 uppercase tracking-widest">Colconexus IA - Agent_Audit.sh</span>
                </div>
                <div className="terminal-code space-y-2">
                   <p className="opacity-50">[SYSTEM] Initializing Neural Audit Engine...</p>
                   <p>[AUTH] Identity: Engineering_Admin_01</p>
                   <p className="text-white">&gt; Run audit --deep --target global_ops</p>
                   <p className="text-mint"> [PROCESSING] Analyzing Data Pipelines... 98%</p>
                   <p className="text-mint"> [SUCCESS] 42 Potential Inefficiencies Fixed.</p>
                   <p className="text-copper"> [ROI] Efficiency Gain: +34.2% Estimated.</p>
                   <p className="text-white">&gt; Status: <span className="terminal-cursor"></span></p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-tech text-4xl md:text-5xl font-black text-white mb-8 leading-none uppercase italic tracking-tighter">
                Auditoría Autónoma <br /> en <span className="text-mint">Tiempo Real</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Nuestros agentes de ingeniería no solo observan, ejecutan. Blindamos sus operaciones mediante una capa de inteligencia que recalcula la rentabilidad cada segundo.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="font-tech text-3xl font-black text-white mb-1 tracking-tighter">1.2ms</div>
                  <div className="text-[9px] text-copper font-black uppercase tracking-widest">Latencia de Decisión</div>
                </div>
                <div>
                  <div className="font-tech text-3xl font-black text-white mb-1 tracking-tighter">100%</div>
                  <div className="text-[9px] text-mint font-black uppercase tracking-widest">Ejecución sin Error</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Media Hub: YouTube Integration --- */}
        <section className="max-w-7xl mx-auto mb-32 px-6">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="relative aspect-video rounded-sm overflow-hidden border border-white/10 shadow-2xl group">
                <iframe 
                  className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                  src="https://www.youtube.com/embed/aW-6Zbc-Lyw" 
                  title="Colconexus Technical Overview"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-8">
              <div className="relative aspect-[9/16] rounded-sm overflow-hidden border border-mint/20 shadow-2xl group">
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

        {/* --- Orquestación Section --- */}
        <section className="max-w-7xl mx-auto mb-32 px-6">
           <div className="relative rounded-sm overflow-hidden border border-white/5 bg-obsidian group">
              <div className="grid md:grid-cols-2">
                <div className="p-16 flex flex-col justify-center gap-6">
                  <h3 className="font-tech text-4xl font-black text-white uppercase italic tracking-tighter">
                    La IA no es Código, <br /> es <span className="text-mint">Orquestación</span>.
                  </h3>
                  <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">
                    Entiende las herramientas, nosotros las unimos por ti.
                  </p>
                  <button onClick={() => handleWhatsAppRedirect("Engine Orchestra")} className="btn-copper w-fit px-12 py-4">Saber Más</button>
                </div>
                <div className="relative min-h-[400px]">
                   <img 
                    src="file:///C:/Users/ElkinT/.gemini/antigravity/brain/e83d6572-be87-4c99-af26-f208e8550752/media__1773772390708.jpg" 
                    alt="AI Orchestration" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                   />
                </div>
              </div>
           </div>
        </section>

        <section className="max-w-7xl mx-auto mb-32 relative px-4 text-center">
          <div className="absolute inset-0 bg-mint/5 blur-[120px] -z-10" />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-20 rounded-sm border-mint/20"
          >
            <h2 className="font-tech text-4xl md:text-5xl font-black mb-4 leading-tight tracking-[0.1em] text-white uppercase italic">
              ¿Tu empresa tiene herramientas del
            </h2>
            <div className="xxi-glow siglo-title mb-4">XXI</div>
            <h2 className="font-tech text-4xl md:text-5xl font-black mb-12 leading-tight tracking-[0.1em] text-slate-800 uppercase italic">
              o trabaja con herramientas del siglo XIX?
            </h2>
            <p className="text-slate-500 text-[11px] font-black mb-16 max-w-2xl mx-auto uppercase tracking-[0.5em]">
              DESCÚBRELO CON NUESTRO TEST DE DIAGNÓSTICO DIGITAL PRO.
            </p>
            <a 
              href="https://forms.gle/6mRAKsnYVZowXiAD6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-6 px-16 py-8 btn-copper text-lg group"
            >
              REALIZAR TEST DE DIAGNÓSTICO
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </motion.div>
        </section>

        {/* --- Final CTA Section --- */}
        <section className="max-w-6xl mx-auto p-24 rounded-sm bg-obsidian border border-copper/20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-overlay opacity-30" />
          <h2 className="font-tech text-7xl md:text-[8rem] font-black mb-10 leading-[0.8] tracking-tighter italic uppercase text-white relative z-10">
            COLCONEXUS <br /> <span className="text-mint">TECH HUB</span>
          </h2>
          <p className="text-slate-400 mb-16 text-xl font-bold max-w-3xl mx-auto relative z-10 uppercase tracking-widest">
            Eliminamos el techo de su productividad. <br />
            Auditoría estratégica y despliegue masivo de rentabilidad.
          </p>
          
          <button 
            onClick={() => handleWhatsAppRedirect()}
            className="px-16 py-8 btn-copper text-xl mx-auto relative z-10 group"
          >
            SOLICITAR AUDITORÍA DE RENDIMIENTO
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </button>
        </section>
      </main>

      {/* --- Footer Lux --- */}
      <footer className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5 flex flex-col gap-20">
        <div className="grid md:grid-cols-2 items-center gap-20">
          <div className="flex flex-col gap-3">
            <span className="font-tech text-white text-3xl font-black tracking-tighter uppercase italic">COLCONEXUS</span>
            <span className="text-copper italic font-black text-[11px] uppercase tracking-[0.4em]">Global Engineering Hub</span>
            <p className="max-w-md text-slate-600 text-[10px] font-black uppercase tracking-widest leading-relaxed mt-4">
              Blindando la rentabilidad corporativa mediante orquestación de datos e inteligencia artificial de grado industrial.
            </p>
          </div>
          <div className="rounded-sm overflow-hidden border border-white/5">
             <img 
              src="file:///C:/Users/ElkinT/.gemini/antigravity/brain/e83d6572-be87-4c99-af26-f208e8550752/media__1773772390738.png" 
              alt="Colconexus Brand" 
              className="w-full grayscale opacity-40 hover:opacity-100 transition-all duration-700"
             />
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] text-slate-600 uppercase tracking-widest font-black pt-10 border-t border-white/5">
          <div className="flex gap-16">
            <a href="https://www.linkedin.com/company/colconexus-datacenter-sas/" target="_blank" rel="noopener noreferrer" className="hover:text-mint transition-colors">
              LinkedIn
            </a>
            <a href="https://tiktok.com/@colconexus" target="_blank" rel="noopener noreferrer" className="hover:text-mint transition-colors">
              TikTok
            </a>
            <a href="https://instagram.com/colconexusdatacenter" target="_blank" rel="noopener noreferrer" className="hover:text-mint transition-colors">
              Instagram
            </a>
          </div>
          <span className="text-slate-800">Status: Terminal Active // session_id: b2b_2026</span>
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
                    <div className="mt-1.5 min-w-[32px] h-[32px] p-2 rounded-sm bg-mint/5 flex items-center justify-center border border-mint/20 group-hover/skill:border-mint transition-all">
                      <Zap className="w-4 h-4 text-mint" />
                    </div>
                    <span className="text-xl text-slate-100 font-tech font-black uppercase tracking-tight leading-snug">{skill}</span>
                  </motion.div>
                ))}
              </div>

              <button 
                onClick={() => handleWhatsAppRedirect(`Industrial Audit: ${selectedRole.title}`)}
                className="w-full py-8 btn-copper group"
              >
                AUTORIZAR DESPLIEGUE TÉCNICO <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- Floating AI Chat Widget --- */}
      <div className="chat-widget">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="chat-bubble mb-6 p-8 rounded-sm"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-mint/10 flex items-center justify-center border border-mint/30">
                    <Bot className="w-5 h-5 text-mint" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h5 className="font-tech text-white text-[11px] font-black uppercase tracking-tighter">Colconexus BOT</h5>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
                      <span className="text-[9px] text-mint/50 font-bold uppercase tracking-widest">Active System</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="text-white/30 hover:text-white transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
                <p className="bg-white/5 p-4 rounded-sm border-l-2 border-mint">
                  Saludos. Soy el asistente de ingeniería de Colconexus. ¿Desea optimizar su flujo de datos o automatizar procesos críticos?
                </p>
                <div className="grid gap-3">
                  <button 
                    onClick={() => handleWhatsAppRedirect("Consultoría IA")}
                    className="w-full py-4 bg-copper/10 border border-copper/30 text-copper hover:bg-copper hover:text-white transition-all rounded-sm uppercase tracking-widest"
                  >
                    Hablar con un Humano
                  </button>
                  <button 
                    onClick={() => setIsChatOpen(false)}
                    className="w-full py-4 border border-white/5 hover:border-mint/50 transition-all rounded-sm uppercase tracking-widest"
                  >
                    Seguir Navegando
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="ml-auto w-20 h-20 rounded-sm bg-obsidian border border-copper/40 flex items-center justify-center text-copper shadow-2xl hover:border-mint hover:text-mint transition-all relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-copper/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <MessageSquare className="w-10 h-10 relative z-10" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
