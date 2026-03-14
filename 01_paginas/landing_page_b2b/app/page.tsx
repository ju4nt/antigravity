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
      ? `Hola equipo de Colconexus. Me interesa el servicio: *${service}*. ¿Podrían darme más información?`
      : "Hola Colconexus. Quisiera solicitar una asesoría técnica profesional.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const IMPACT_SOLUTIONS = [
    { title: "Robot Personalizado", desc: "Automatización de tareas en tiempo récord.", icon: <Bot className="w-5 h-5" /> },
    { title: "Analistas Profesionales", desc: "Talento experto y Copilots de negocio.", icon: <Users className="w-5 h-5" /> },
    { title: "Speech Analytics", desc: "Análisis vocal y sentimientos en tiempo real.", icon: <Mic2 className="w-5 h-5" /> },
    { title: "Auditores IA", desc: "Calidad automática en llamadas y mensajes.", icon: <ShieldCheck className="w-5 h-5" /> }
  ];

  const BUSINESS_UNITS = [
    {
      id: "ia_agency",
      title: "Agencia de IA",
      description: "Robots profesionales diseñados a su medida para ejecución autónoma sin error humano.",
      icon: <Bot className="w-8 h-8 text-cyan-400" />,
      items: [
        {
          title: "Intelligent Analysts & Copilots",
          desc: "Asistencia experta para optimización de flujo de trabajo.",
          skills: ["Speech Analytics en tiempo real", "Auditores IA de calidad (Voz y Texto)", "Copilots personalizados por industria", "Automatización de tareas diarias en récord"]
        },
        {
          title: "Financial Officer IA",
          desc: "Modelos predictivos de utilidad y gestión estratégica.",
          skills: ["Tendencias Early Warning con ML", "Recálculo automático de KPIs financieros", "Alertas de impacto en indicadores de factura", "Estrategias de optimización de rentabilidad"]
        }
      ]
    },
    {
      id: "data_master",
      title: "Data Master Business",
      description: "Arquitectura de datos avanzada: de la ingesta masiva a la utilidad real.",
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      items: [
        {
          title: "Pipelines & Reportes 48h (Automáticos)",
          desc: "Arquitectura Medallón y Lakehousing en tiempo récord.",
          skills: ["Arquitectura Oro/Plata/Bronce & Delta Lake", "Diseño de Entidad Relación (Dimm & Fact)", "Lectura de APIs, JSON, Parquet, CSV y SQL", "Consumo de hojas online y bases NoSQL", "Reportes en Tiempo Real e Históricos"]
        },
        {
          title: "Data Science & Predictivo",
          desc: "Ciclo completo de ciencia de datos aplicada al negocio.",
          skills: ["Perfilamiento poblacional inteligente", "Análisis Exploratorio (EDA) & Feature Engineering", "Entrenamiento y Testing de alta precisión", "Modelos de Eficiencia de Recursos"]
        }
      ]
    },
    {
      id: "wfm_strategic",
      title: "WFM Planning & Scheduler",
      description: "Ingeniería de personal con visión financiera y operativa en vivo.",
      icon: <Clock className="w-8 h-8 text-orange-400" />,
      items: [
        {
          title: "Scheduler & Dimensionamiento IA",
          desc: "El staff gestiona novedades, la IA hace el resto.",
          skills: ["Pronóstico (Forecast) de tráfico exacto", "Alertas Over/Under de personal en tiempo real", "Gestión de mallas de turno automatizada", "Rostering inteligente por novedades de staff"]
        },
        {
          title: "Insights Operativos & Factura",
          desc: "Seguimiento de KPIs correlacionados a la utilidad.",
          skills: ["Sugerencias estratégicas de gestión en KPIs", "Reportes periódicos con análisis de negocio", "Correlación KPI operativo vs Indicador Factura", "Alertas financieras proactivas"]
        }
      ]
    },
    {
      id: "erp_modular",
      title: "ERP Modular & Omnicanalidad",
      description: "Infraestructura robusta y aplicaciones con gobierno de datos total.",
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      items: [
        {
          title: "Aplicaciones Modulares Pro",
          desc: "Gobernanza de información y roles definidos.",
          skills: ["ERP diseñado a medida de la operación", "Webservices y automatizaciones de flujo", "Estructura modular escalable", "Gobierno de datos corporativo"]
        },
        {
          title: "Omnicanalidad Cloud",
          desc: "Voz, WhatsApp, FB, Instagram y Video Bots.",
          skills: ["Plantas Telefónicas VoIP High-End", "Infraestructura en memoria para baja latencia", "Voicebots & Chatbots multicanal", "Despliegue rápido de servicios cloud"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen relative text-slate-200 bg-[#020617] overflow-x-hidden">
      {/* Background System - Pure CSS */}
      <div className="bg-grid-overlay" />
      <div className="bg-grid-animate" />
      <div className="bg-orb -top-20 -left-20 bg-cyan-600/5 pulsate" />
      <div className="bg-orb -bottom-20 -right-20 bg-purple-600/5 pulsate" />

      {/* --- Navbar --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center p-1 group-hover:rotate-6 transition-transform">
              <img src="/logo.png" alt="Colconexus Logo" className="w-full h-full object-contain brightness-0 invert" />
            </div>
            <div className="flex flex-col">
              <span className="font-black tracking-tighter text-white leading-none">COLCONEXUS</span>
              <span className="text-[8px] font-bold text-cyan-500 tracking-[0.2em] uppercase">Data Center SAS</span>
            </div>
          </div>
          <button 
            onClick={() => handleWhatsAppRedirect()}
            className="text-[10px] font-black uppercase tracking-widest text-[#020617] bg-cyan-400 px-6 py-2.5 rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          >
            Hablar con un Experto
          </button>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-6">
        {/* --- Hero Section (Optimized Position) --- */}
        <section className="max-w-6xl mx-auto text-center mb-16 mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-[10px] font-black text-cyan-400 mb-8 tracking-[0.3em] uppercase animate-pulse"
          >
            <Rocket className="w-3.5 h-3.5" /> Innovación Tecnológica B2B
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[8.5rem] font-black mb-8 leading-[0.8] tracking-tighter"
          >
            Impulsa tu compañía <br /> a la era del <span className="text-gradient">futuro digital</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-slate-400 text-xl md:text-3xl mb-12 max-w-4xl mx-auto font-bold tracking-tight leading-tight"
          >
            <strong>Colconexus</strong>: Expertos en Arquitecturas de Datos, WFM y Automatización IA. 
            Soluciones reales para la era de la precisión.
          </motion.p>
        </section>

        {/* --- NEW: IMPACT SOLUTIONS PANEL --- */}
        <section className="max-w-7xl mx-auto mb-20 relative px-4">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-[3rem] blur opacity-20" />
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-1 p-1 bg-white/5 rounded-[3rem] backdrop-blur-2xl border border-white/10">
            {IMPACT_SOLUTIONS.map((item, idx) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 p-8 hover:bg-white/5 transition-all cursor-default first:rounded-l-[2.8rem] last:rounded-r-[2.8rem]"
              >
                <div className="p-3 bg-cyan-500/20 rounded-xl text-cyan-400">{item.icon}</div>
                <div>
                  <h4 className="text-sm font-black text-white uppercase tracking-tighter">{item.title}</h4>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Services Grid --- */}
        <section id="servicios" className="max-w-7xl mx-auto mb-32">
          <div className="grid md:grid-cols-2 gap-10">
            {BUSINESS_UNITS.map((unit, idx) => (
              <motion.div 
                key={unit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-12 rounded-[4rem] border-white/5 hover:border-cyan-500/30 transition-all duration-700 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  {unit.icon}
                </div>
                
                <div className="flex items-center gap-6 mb-10">
                  <div className="p-4 bg-white/5 rounded-3xl shadow-inner group-hover:shadow-cyan-500/20 transition-all">{unit.icon}</div>
                  <h2 className="text-4xl font-black uppercase italic tracking-tighter leading-none text-white">{unit.title}</h2>
                </div>
                <p className="text-slate-500 text-xs mb-12 font-black uppercase tracking-widest leading-relaxed border-l-2 border-cyan-500/30 pl-6">{unit.description}</p>
                
                <div className="grid gap-4">
                  {unit.items.map((item) => (
                    <div 
                      key={item.title}
                      onClick={() => setSelectedRole(item)}
                      className="group/item flex items-center justify-between p-8 rounded-[2.5rem] bg-[#0a1120]/60 border border-white/5 hover:border-purple-500/40 hover:bg-white/5 cursor-pointer transition-all shadow-xl"
                    >
                      <div className="pr-4">
                        <h4 className="font-black text-white group-hover/item:text-cyan-400 transition-colors uppercase tracking-tight text-xl">{item.title}</h4>
                        <p className="text-sm text-slate-500 mt-2 font-bold leading-snug">{item.desc}</p>
                      </div>
                      <ChevronRight className="text-slate-700 group-hover/item:text-cyan-400 group-hover/item:translate-x-2 transition-all w-8 h-8" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Data Master Technical Specs Summary --- */}
        <section className="max-w-7xl mx-auto py-24 grid md:grid-cols-4 gap-8 border-y border-white/5 my-32">
          <div className="text-center">
            <div className="text-4xl font-black text-white mb-2 uppercase italic tracking-tighter">Medallion</div>
            <h5 className="text-cyan-500 font-bold uppercase text-[10px] tracking-[0.4em] mb-4">Architecture</h5>
            <p className="text-slate-600 text-[10px] font-black uppercase">Oro · Plata · Bronce</p>
          </div>
          <div className="text-center border-l border-white/5">
             <div className="text-4xl font-black text-white mb-2 uppercase italic tracking-tighter">Delta Lake</div>
            <h5 className="text-purple-500 font-bold uppercase text-[10px] tracking-[0.4em] mb-4">Storage</h5>
            <p className="text-slate-600 text-[10px] font-black uppercase">Lakehousing Pro</p>
          </div>
          <div className="text-center border-l border-white/5">
            <div className="text-4xl font-black text-white mb-2 uppercase italic tracking-tighter">Over/Under</div>
            <h5 className="text-orange-500 font-bold uppercase text-[10px] tracking-[0.4em] mb-4">WFM Alertas</h5>
            <p className="text-slate-600 text-[10px] font-black uppercase">Staff Real-Time</p>
          </div>
          <div className="text-center border-l border-white/5">
            <div className="text-4xl font-black text-white mb-2 uppercase italic tracking-tighter">Financial</div>
            <h5 className="text-blue-500 font-bold uppercase text-[10px] tracking-[0.4em] mb-4">Correlation</h5>
            <p className="text-slate-600 text-[10px] font-black uppercase">KPI vs Factura</p>
          </div>
        </section>

        {/* --- Video Section --- */}
        <section className="max-w-6xl mx-auto mb-32 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/10 blur-[100px]" />
          <div className="aspect-video w-full rounded-[4.5rem] overflow-hidden border border-white/10 bg-black shadow-2xl">
             <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Colconexus Center Video"
              allowFullScreen
            />
          </div>
        </section>

        {/* --- Final CTA Section --- */}
        <section className="max-w-6xl mx-auto p-24 rounded-[5rem] bg-gradient-to-br from-[#0c1a33] via-[#020617] to-[#1a0c33] border border-white/10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-overlay opacity-30 animate-pulse" />
          <h2 className="text-7xl md:text-[8rem] font-black mb-10 leading-[0.8] tracking-tighter italic uppercase text-white relative z-10">
            COLCONEXUS <br /> <span className="text-cyan-500">TECH HUB</span>
          </h2>
          <p className="text-slate-400 mb-16 text-2xl font-bold max-w-3xl mx-auto relative z-10">Asesoría tecnológica, optimización de recursos y despliegue masivo de datos para su rentabilidad.</p>
          
          <button 
            onClick={() => handleWhatsAppRedirect()}
            className="px-16 py-8 bg-white text-black rounded-full font-black text-xl shadow-[0_0_60px_rgba(255,255,255,0.1)] hover:scale-105 transition-all flex items-center justify-center gap-6 mx-auto relative z-10 group"
          >
            AGENDAR CONSULTORÍA ELITE
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </button>
        </section>
      </main>

      {/* --- Footer Lux --- */}
      <footer className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] text-slate-500 uppercase tracking-widest font-black">
        <div className="flex items-center gap-5">
           <img src="/logo.png" alt="Logo" className="h-8 opacity-40 brightness-0 invert" />
           <div className="flex flex-col">
             <span>COLCONEXUS DATA CENTER SAS</span>
             <span className="text-cyan-600 italic">Global Tech Innovation</span>
           </div>
        </div>
        <div className="flex gap-16 font-black">
          <a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">WhatsApp Portal</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Status: Online</a>
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
              className="relative w-full max-w-3xl bg-[#0a1120] border border-white/10 rounded-[5rem] p-20 shadow-[0_0_150px_rgba(34,211,238,0.2)] overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 blur-[80px] -z-10" />
              <button 
                onClick={() => setSelectedRole(null)}
                className="absolute top-12 right-12 p-4 rounded-full hover:bg-white/10 transition-all text-white/50 hover:text-white"
              >
                <X className="w-10 h-10" />
              </button>

              <div className="text-[11px] font-black text-cyan-400 tracking-[0.6em] uppercase mb-6 flex items-center gap-3">
                <div className="w-8 h-px bg-cyan-400/30" /> Hub Technical Specs
              </div>
              <h3 className="text-6xl font-black mb-10 leading-[0.9] text-white uppercase italic tracking-tighter">{selectedRole.title}</h3>
              
              <div className="grid gap-6 mb-16 max-h-[40vh] overflow-y-auto pr-6 custom-scrollbar">
                {selectedRole.skills.map((skill: string, index: number) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    key={skill} 
                    className="flex items-start gap-8 group/skill"
                  >
                    <div className="mt-1.5 min-w-[32px] h-32px p-2 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover/skill:border-cyan-400 transition-all">
                      <Zap className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-xl text-slate-100 font-bold tracking-tight leading-snug">{skill}</span>
                  </motion.div>
                ))}
              </div>

              <button 
                onClick={() => handleWhatsAppRedirect(`Servicio Elite: ${selectedRole.title}`)}
                className="w-full py-8 bg-white text-[#020617] font-black uppercase tracking-widest text-sm rounded-[2rem] hover:bg-cyan-400 transition-all flex items-center justify-center gap-4 group"
              >
                CONSULTAR DISPONIBILIDAD TÉCNICA <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
