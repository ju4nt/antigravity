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
  Lock
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

  const BUSINESS_UNITS = [
    {
      id: "ia_agency",
      title: "Agencia de IA",
      description: "Robots profesionales que ejecutan tareas complejas sin error humano diseñados a su medida.",
      icon: <Bot className="w-8 h-8 text-cyan-400" />,
      items: [
        {
          title: "Robot Profesional Personalizado",
          desc: "Ejecución de tareas complejas sin error humano.",
          skills: ["Diseño de tareas a medida", "Eliminación total del error humano", "Operación autónoma 24/7", "Integración nativa con procesos B2B"]
        },
        {
          title: "Financial Officer IA",
          desc: "Machine Learning predictivo para utilidad y KPIs.",
          skills: ["Modelos Early Warning para tendencias", "Recálculo automático de KPIs financieros", "Estrategias de gestión frente a alertas de utilidad", "Proyecciones basadas en Machine Learning"]
        },
        {
          title: "Analista de Nómina IA",
          desc: "Automatización total de flujos financieros.",
          skills: ["Liquidación en tiempo real", "Cero discrepancias en cobros", "Gestión de pre-nómina inteligente", "Reportes de costos inmediatos"]
        }
      ]
    },
    {
      id: "data_master",
      title: "Data Master Business",
      description: "Infraestructura de datos de despliegue ultra-rápido y precisión matemática.",
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      items: [
        {
          title: "Pipelines & Reportes 48h",
          desc: "Despliegue de servidores y reportes en 48 horas.",
          skills: ["ETL Pipelines listos en 2 días", "Servidores optimizados en 48 horas", "Reportes automáticos garantizados", "Despliegue de infraestructura cloud rápida"]
        },
        {
          title: "Analytics & Forecasting",
          desc: "Big Data, Streaming y predicción de datos.",
          skills: ["Streaming de datos en tiempo real", "Arquitecturas de Big Data", "Modelos de Forecasting avanzado", "Sin interpretaciones humanas: resultados exactos"]
        }
      ]
    },
    {
      id: "communications",
      title: "Omnicanalidad & Cloud",
      description: "Comunicaciones unificadas con infraestructura en memoria y despliegue rápido.",
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      items: [
        {
          title: "Plantas Telefónicas VoIP",
          desc: "Telefonía IP cloud de alta disponibilidad.",
          skills: ["Despliegue rápido de infraestructura", "Configuración en memoria para baja latencia", "Grabación y análisis de voz", "IVR inteligente avanzado"]
        },
        {
          title: "Omnicanalidad Hub",
          desc: "Teléfono, Chat, WhatsApp, FB, Instagram, Video.",
          skills: ["Chatbots & Voicebots inteligentes", "Gestión unificada de canales", "Video llamadas de asesoría", "Sincronización total de mensajes"]
        }
      ]
    },
    {
      id: "erp_modular",
      title: "ERP Modular & WFM",
      description: "Desarrollo a medida con gobernanza y planificación inteligente.",
      icon: <Layers className="w-8 h-8 text-orange-400" />,
      items: [
        {
          title: "ERP Modular Personalizado",
          desc: "Aplicaciones modulares con gobernanza total.",
          skills: ["Gobernanza de información por roles", "Webservices y automatizaciones nativas", "Módulos escalables", "Reportes integrados de gestión"]
        },
        {
          title: "WFM Planning & Scheduller",
          desc: "La IA gestiona, el supervisor solo ingresa novedades.",
          skills: ["Ingeniería de mallas de turnos automática", "Forecast de tráfico y alertas en tiempo real", "Dimensionamiento profesional", "Supervisor solo gestiona novedades y nombres"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen relative text-slate-200 bg-[#020617]">
      {/* Background System - Pure CSS */}
      <div className="bg-grid-overlay" />
      <div className="bg-grid-animate" />
      <div className="bg-orb -top-20 -left-20 bg-cyan-600/5" />
      <div className="bg-orb -bottom-20 -right-20 bg-purple-600/5" />

      {/* --- Navbar --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center p-1">
              <img src="/logo.png" alt="Colconexus Logo" className="w-full h-full object-contain brightness-0 invert" />
            </div>
            <div className="flex flex-col">
              <span className="font-black tracking-tighter text-white leading-none">COLCONEXUS</span>
              <span className="text-[8px] font-bold text-cyan-500 tracking-[0.2em]">DATA CENTER SAS</span>
            </div>
          </div>
          <button 
            onClick={() => handleWhatsAppRedirect()}
            className="text-[10px] font-black uppercase tracking-widest text-cyan-400 border border-cyan-400/30 px-5 py-2.5 rounded-full hover:bg-cyan-400/10 transition-all shadow-[0_0_15px_rgba(34,211,238,0.1)]"
          >
            Hablar con un Experto
          </button>
        </div>
      </nav>

      {/* --- REFINED HERO SECTION (Higher position) --- */}
      <main className="pt-24 pb-20 px-6">
        <section className="max-w-6xl mx-auto text-center mb-24 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-[10px] font-black text-cyan-500 mb-6 tracking-[0.2em] uppercase"
          >
            <Cpu className="w-3 h-3" /> Hub de soluciones tecnológicas empresariales
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-[7rem] font-black mb-6 leading-[0.85] tracking-tighter"
          >
            Impulsa tu <br /> <span className="text-gradient">Futuro Digital</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-xl md:text-2xl mb-10 max-w-4xl mx-auto font-bold tracking-tight"
          >
            Colconexus Data Center SAS: Expertos en <strong>Data Master Business</strong>, <strong>Omnicanalidad Cloud</strong> y <strong>Agencia de IA</strong>. 
            Soluciones modulares diseñadas para la optimización de recursos.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <button 
              onClick={() => handleWhatsAppRedirect()}
              className="px-12 py-5 bg-white text-black rounded-full font-black text-sm hover:scale-105 transition-all shadow-2xl flex items-center gap-2"
            >
              ESTRATEGIA PROFESIONAL <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="#servicios"
              className="px-12 py-5 border border-white/20 rounded-full font-black text-sm hover:bg-white/5 transition-all backdrop-blur-sm"
            >
              PORTAFOLIO DE SERVICIOS
            </a>
          </motion.div>
        </section>

        {/* --- Services Categories Grid --- */}
        <section id="servicios" className="max-w-7xl mx-auto mb-32">
          <div className="grid md:grid-cols-2 gap-8">
            {BUSINESS_UNITS.map((unit, idx) => (
              <motion.div 
                key={unit.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-10 rounded-[3rem] border-white/5 group hover:border-cyan-500/20 transition-all duration-500"
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className="p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">{unit.icon}</div>
                  <h2 className="text-3xl font-black uppercase italic tracking-tighter leading-none">{unit.title}</h2>
                </div>
                <p className="text-slate-500 text-xs mb-10 font-black uppercase tracking-widest leading-relaxed">{unit.description}</p>
                
                <div className="grid gap-3">
                  {unit.items.map((item) => (
                    <div 
                      key={item.title}
                      onClick={() => setSelectedRole(item)}
                      className="group/item flex items-center justify-between p-6 rounded-3xl bg-[#0a1120]/50 border border-white/5 hover:border-cyan-500/40 hover:bg-white/5 cursor-pointer transition-all"
                    >
                      <div className="pr-4">
                        <h4 className="font-black text-white group-hover/item:text-cyan-400 transition-colors uppercase tracking-tight text-lg">{item.title}</h4>
                        <p className="text-xs text-slate-500 mt-1 font-bold">{item.desc}</p>
                      </div>
                      <div className="min-w-[40px] flex justify-end">
                        <ChevronRight className="text-slate-700 group-hover/item:text-cyan-400 group-hover/item:translate-x-1 transition-all" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Value Proposition Banner --- */}
        <section className="max-w-7xl mx-auto py-24 grid md:grid-cols-4 gap-8 border-t border-white/5 mt-32">
          <div className="text-center group">
            <div className="text-5xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">48h</div>
            <h5 className="text-cyan-500 font-black uppercase text-[10px] tracking-[0.3em] mb-3">Delivery Model</h5>
            <p className="text-slate-500 text-xs font-bold leading-relaxed px-4">Pipelines y Reportes listos en 2 días hábiles.</p>
          </div>
          <div className="text-center group">
            <div className="text-5xl font-black text-white mb-2 group-hover:text-purple-400 transition-colors">0%</div>
            <h5 className="text-purple-500 font-black uppercase text-[10px] tracking-[0.3em] mb-3">Error Human</h5>
            <p className="text-slate-500 text-xs font-bold leading-relaxed px-4">Resultados matemáticos sin sesgo de interpretación.</p>
          </div>
          <div className="text-center group">
             <div className="text-5xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">24/7</div>
            <h5 className="text-blue-500 font-black uppercase text-[10px] tracking-[0.3em] mb-3">Cloud Memory</h5>
            <p className="text-slate-500 text-xs font-bold leading-relaxed px-4">Infraestructura en memoria para omnicanalidad total.</p>
          </div>
          <div className="text-center group">
             <div className="text-5xl font-black text-white mb-2 group-hover:text-orange-400 transition-colors">ML</div>
            <h5 className="text-orange-500 font-black uppercase text-[10px] tracking-[0.3em] mb-3">Early Warning</h5>
            <p className="text-slate-500 text-xs font-bold leading-relaxed px-4">Predicción inteligente de utilidad y KPIs críticos.</p>
          </div>
        </section>

        {/* --- Video Section --- */}
        <section className="max-w-5xl mx-auto mb-32 group">
          <div className="aspect-video w-full rounded-[4rem] overflow-hidden border border-white/5 bg-black/50 shadow-2xl relative">
             <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Colconexus Center"
              allowFullScreen
            />
          </div>
        </section>

        {/* --- Final CTA Section --- */}
        <section className="max-w-5xl mx-auto p-20 rounded-[4rem] bg-gradient-to-br from-cyan-900/20 via-[#020617] to-purple-900/20 border border-white/5 text-center shadow-inner relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-overlay opacity-20" />
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter italic uppercase text-white relative z-10">COLCONEXUS <br /> DATA MASTER</h2>
          <p className="text-slate-400 mb-12 text-xl font-bold max-w-2xl mx-auto relative z-10">Optimización de recursos y tecnología para la máxima rentabilidad de su empresa.</p>
          
          <button 
            onClick={() => handleWhatsAppRedirect()}
            className="px-14 py-7 bg-white text-black rounded-full font-black text-sm shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:scale-105 transition-all flex items-center justify-center gap-4 mx-auto relative z-10"
          >
            AGENDAR CONSULTORÍA PROFESIONAL
            <ArrowRight className="w-6 h-6" />
          </button>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] text-slate-600 uppercase tracking-widest font-black">
        <div className="flex items-center gap-4">
           <img src="/logo.png" alt="Logo" className="h-6 opacity-30 brightness-0 invert" />
           <span>COLCONEXUS DATA CENTER SAS — INNOVACIÓN TECNOLÓGICA B2B</span>
        </div>
        <div className="flex gap-12 font-bold">
          <a href="#" className="hover:text-cyan-400">LinkedIn</a>
          <a href="#" className="hover:text-cyan-400">WhatsApp Team</a>
          <a href="#" className="hover:text-cyan-400">Project Status</a>
        </div>
      </footer>

      {/* --- Service Dynamics Detail Modal (Pop-up) --- */}
      <AnimatePresence>
        {selectedRole && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRole(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 40 }}
              className="relative w-full max-w-2xl bg-[#0a1120] border border-white/10 rounded-[4.5rem] p-16 shadow-[0_0_120px_rgba(34,211,238,0.15)] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600" />
              <button 
                onClick={() => setSelectedRole(null)}
                className="absolute top-10 right-10 p-3 rounded-full hover:bg-white/5 transition-all text-slate-500"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="text-[10px] font-black text-cyan-500 tracking-[0.5em] uppercase mb-4">Live Hub Specifications</div>
              <h3 className="text-5xl font-black mb-8 leading-tight text-white uppercase italic tracking-tighter">{selectedRole.title}</h3>
              
              <div className="space-y-6 mb-16">
                {selectedRole.skills.map((skill: string, index: number) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={skill} 
                    className="flex items-start gap-6 group"
                  >
                    <div className="mt-1 w-7 h-7 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 transition-transform">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <span className="text-xl text-slate-200 font-bold tracking-tight">{skill}</span>
                  </motion.div>
                ))}
              </div>

              <button 
                onClick={() => handleWhatsAppRedirect(`Especificación: ${selectedRole.title}`)}
                className="w-full py-7 bg-white text-black font-black uppercase tracking-widest text-xs rounded-3xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-2"
              >
                SOLICITAR ESTE SERVICIO <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
