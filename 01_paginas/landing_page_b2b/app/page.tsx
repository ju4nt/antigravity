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
        <section className="max-w-6xl mx-auto text-center mb-24 mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-sm border border-mint/30 bg-mint/5 text-[10px] font-black text-mint tracking-[0.3em] uppercase mb-12"
          >
            <ShieldCheck className="w-3.5 h-3.5" /> High-Performance Infrastructure
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-tech text-6xl md:text-[8rem] font-black mb-12 leading-[0.85] tracking-tighter uppercase italic"
          >
            Optimizar. Escalar. <br /> <span className="text-mint-glow italic">Blindar.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-400 text-xl md:text-2xl mb-16 max-w-4xl mx-auto font-medium tracking-tight leading-snug"
          >
            Ingeniería de precisión aplicada a la rentabilidad corporativa. 
            Soluciones de arquitectura de datos y automatización para operaciones de alto nivel.
          </motion.p>
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

        {/* --- Video Section --- */}
        <section className="max-w-6xl mx-auto mb-32 relative px-4 text-center">
          <div className="absolute inset-0 bg-copper/5 blur-[120px] -z-10" />
          <div className="aspect-video w-full rounded-sm overflow-hidden border border-white/10 bg-black shadow-2xl">
             <iframe 
              className="w-full h-full grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Colconexus Tech Hub - Ingeniería de Precisión"
              allowFullScreen
            />
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
      <footer className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] text-slate-600 uppercase tracking-widest font-black">
        <div className="flex flex-col">
          <span className="font-tech text-white text-lg">COLCONEXUS</span>
          <span className="text-copper italic">Global Engineering Hub</span>
        </div>
        <div className="flex gap-16 font-black uppercase text-[10px]">
          <a href="https://www.linkedin.com/company/colconexus-datacenter-sas/" target="_blank" rel="noopener noreferrer" className="hover:text-mint transition-colors flex items-center gap-2">
            LinkedIn
          </a>
          <a href="https://tiktok.com/@colconexus" target="_blank" rel="noopener noreferrer" className="hover:text-mint transition-colors flex items-center gap-2">
            TikTok
          </a>
          <a href="https://instagram.com/colconexusdatacenter" target="_blank" rel="noopener noreferrer" className="hover:text-mint transition-colors flex items-center gap-2">
            Instagram
          </a>
          <span className="text-slate-800">Status: Terminal Active</span>
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
    </div>
  );
}
