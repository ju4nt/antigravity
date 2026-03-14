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
  Layers
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
      description: "Robots profesionales que ejecutan tareas complejas sin error humano.",
      icon: <Bot className="w-8 h-8 text-cyan-400" />,
      items: [
        {
          title: "Financial Officer IA",
          desc: "Machine Learning predictivo para utilidad y KPIs.",
          skills: ["Modelos Early Warning para tendencias", "Recálculo automático de KPIs financieros", "Estrategias de gestión frente a alertas de utilidad", "Proyecciones basadas en Machine Learning"]
        },
        {
          title: "Robot Profesional Personalizado",
          desc: "Automatización de tareas repetitivas 24/7.",
          skills: ["Procesamiento de pre-nómina", "Mantenimiento proactivo", "Ejecución de procesos B2B", "Cero error humano garantizado"]
        }
      ]
    },
    {
      id: "data_science",
      title: "Ciencia de Datos & ETL",
      description: "Infraestructura de datos de despliegue ultra-rápido.",
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      items: [
        {
          title: "Pipelines en 48 Horas",
          desc: "Servidores y reportes automáticos en tiempo récord.",
          skills: ["Despliegue de ETL en 2 días", "Servidores de datos optimizados", "Reportes automáticos sin intervención", "Streaming masivo de información"]
        },
        {
          title: "Data Analysis & ML",
          desc: "Ciencia de datos aplicada a la rentabilidad.",
          skills: ["Ciencia de datos sin interpretaciones humanas", "Modelado de comportamiento de usuario", "Optimización matemática de procesos", "Insights accionables inmediatos"]
        }
      ]
    },
    {
      id: "communications",
      title: "Omnicanalidad & Cloud",
      description: "Comunicaciones unificadas con infraestructura en memoria.",
      icon: <PhoneCall className="w-8 h-8 text-blue-400" />,
      items: [
        {
          title: "Plantas Telefónicas VoIP",
          desc: "Telefonía IP de alta disponibilidad.",
          skills: ["Configuración Cloud instantánea", "Grabación y análisis de voz", "IVR inteligente con Voicebots", "Infraestructura en memoria para baja latencia"]
        },
        {
          title: "Centro de Omnicanalidad",
          desc: "WhatsApp, FB, Instagram y Video llamadas.",
          skills: ["Chatbots & Voicebots integrados", "Video llamadas de asesoría rápida", "Gestión centralizada de canales", "Despliegue rápido en la nube"]
        }
      ]
    },
    {
      id: "consulting",
      title: "Asesoría & WFM",
      description: "Optimización de recursos y gestión de fuerza de trabajo.",
      icon: <Layers className="w-8 h-8 text-orange-400" />,
      items: [
        {
          title: "Workforce Management (WFM)",
          desc: "Gestión inteligente de turnos y forecast.",
          skills: ["Dimensionamiento de personal", "Mallas de turnos automatizadas", "Forecast de tráfico y alertas en tiempo real", "Optimización de Ocupación"]
        },
        {
          title: "Optimización de Procesos",
          desc: "Asesoramiento costo-beneficio profesional.",
          skills: ["Optimización de tecnología y recursos", "Automatización de flujos de trabajo", "Reducción de costos operativos", "Consultoría estratégica tecnológica"]
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
            className="text-[10px] font-black uppercase tracking-widest text-cyan-400 border border-cyan-400/30 px-5 py-2.5 rounded-full hover:bg-cyan-400/10 transition-all"
          >
            Hablar con un Experto
          </button>
        </div>
      </nav>

      <main className="pt-40 pb-20 px-6">
        {/* --- Hero Section --- */}
        <section className="max-w-6xl mx-auto text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs font-black text-cyan-400 mb-10 tracking-widest"
          >
            HUB DE TECNOLOGÍA PROFESIONAL
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black mb-8 leading-[0.95] tracking-tight"
          >
            Impulsa tu <br /> <span className="text-gradient">Futuro Digital</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-xl md:text-2xl mb-14 max-w-4xl mx-auto font-medium"
          >
            Colconexus Data Center SAS: Líderes en <strong>Ciencia de Datos</strong>, <strong>Omnicanalidad Cloud</strong> y <strong>Automatización con IA</strong>. 
            Soluciones robustas para empresas que no esperan.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button 
              onClick={() => handleWhatsAppRedirect()}
              className="px-12 py-6 bg-cyan-500 text-black rounded-full font-black text-sm hover:scale-105 transition-all shadow-2xl"
            >
              ESTRATEGIA PROFESIONAL <ArrowRight className="w-5 h-5 inline ml-2" />
            </button>
            <a 
              href="#servicios"
              className="px-12 py-6 border border-white/20 rounded-full font-black text-sm hover:bg-white/5 transition-all"
            >
              PORTAFOLIO COMPLETO
            </a>
          </motion.div>
        </section>

        {/* --- Services Categories --- */}
        <section id="servicios" className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {BUSINESS_UNITS.map((unit, idx) => (
              <motion.div 
                key={unit.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-10 rounded-[3rem] border-white/10"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-white/5 rounded-2xl">{unit.icon}</div>
                  <h2 className="text-3xl font-black uppercase italic tracking-tighter">{unit.title}</h2>
                </div>
                <p className="text-slate-500 text-sm mb-10 font-bold uppercase tracking-widest">{unit.description}</p>
                
                <div className="grid gap-4">
                  {unit.items.map((item) => (
                    <div 
                      key={item.title}
                      onClick={() => setSelectedRole(item)}
                      className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:bg-white/10 cursor-pointer transition-all"
                    >
                      <div>
                        <h4 className="font-black text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{item.title}</h4>
                        <p className="text-xs text-slate-500 mt-1 font-medium">{item.desc}</p>
                      </div>
                      <ChevronRight className="text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Value Proposition Banner --- */}
        <section className="max-w-7xl mx-auto py-32 grid md:grid-cols-3 gap-12 border-t border-white/5 mt-32">
          <div className="text-center">
            <div className="text-5xl font-black text-white mb-4">48h</div>
            <h5 className="text-cyan-500 font-black uppercase text-xs tracking-[0.3em] mb-4">Pipeline Speed</h5>
            <p className="text-slate-500 text-sm leading-relaxed">Despliegue de servidores y reportes automatizados en solo 2 días. Sin excusas.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-white mb-4">0%</div>
            <h5 className="text-purple-500 font-black uppercase text-xs tracking-[0.3em] mb-4">Human Bias</h5>
            <p className="text-slate-500 text-sm leading-relaxed">Reportes basados en pura inteligencia de datos. Sin interpretaciones erróneas.</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-black text-white mb-4">24/7</div>
            <h5 className="text-blue-500 font-black uppercase text-xs tracking-[0.3em] mb-4">Cloud Native</h5>
            <p className="text-slate-500 text-sm leading-relaxed">Infraestructura en memoria de alta disponibilidad para omnicanalidad total.</p>
          </div>
        </section>

        {/* --- Custom Video Placeholder (Rick Astley Example) --- */}
        <section className="max-w-5xl mx-auto mb-32 group">
          <div className="aspect-video w-full rounded-[3.5rem] overflow-hidden border border-white/10 bg-black/50 shadow-2xl relative">
             <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Colconexus Hub"
              allowFullScreen
            />
          </div>
        </section>

        {/* --- Final CTA --- */}
        <section className="max-w-5xl mx-auto p-20 rounded-[4rem] bg-gradient-to-br from-cyan-950/40 via-[#020617] to-purple-950/40 border border-white/10 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter italic uppercase text-white">COLCONEXUS <br /> TECH HUB</h2>
          <p className="text-slate-400 mb-14 text-xl font-medium max-w-2xl mx-auto">Asesoramiento tecnológico profesional para la optimización de recursos y maximización de utilidad.</p>
          
          <button 
            onClick={() => handleWhatsAppRedirect()}
            className="px-14 py-7 bg-white text-black rounded-full font-black text-lg shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:scale-105 transition-all flex items-center justify-center gap-4 mx-auto"
          >
            AGENDAR CONSULTORÍA PROFESIONAL
            <ArrowRight className="w-6 h-6" />
          </button>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] text-slate-600 uppercase tracking-widest font-black">
        <div className="flex items-center gap-4">
           <img src="/logo.png" alt="Logo" className="h-6 opacity-30 brightness-0 invert" />
           <span>COLCONEXUS DATA CENTER SAS — INNOVACIÓN TECNOLÓGICA</span>
        </div>
        <div className="flex gap-12">
          <a href="#" className="hover:text-cyan-400">LinkedIn</a>
          <a href="#" className="hover:text-cyan-400">Company Portal</a>
          <a href="#" className="hover:text-cyan-400">Status 24/7</a>
        </div>
      </footer>

      {/* --- Service Detail Modal --- */}
      <AnimatePresence>
        {selectedRole && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRole(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-2xl bg-[#0a1120] border border-white/10 rounded-[4rem] p-16 shadow-[0_0_100px_rgba(34,211,238,0.1)] overflow-hidden"
            >
              <button 
                onClick={() => setSelectedRole(null)}
                className="absolute top-10 right-10 p-3 rounded-full hover:bg-white/5 transition-all text-slate-500"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="text-[10px] font-black text-cyan-400 tracking-[0.5em] uppercase mb-4">ESPECIFICACIONES TÉCNICAS</div>
              <h3 className="text-5xl font-black mb-8 leading-tight text-white uppercase italic tracking-tighter">{selectedRole.title}</h3>
              
              <div className="space-y-6 mb-16">
                {selectedRole.skills.map((skill: string, index: number) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={skill} 
                    className="flex items-start gap-6"
                  >
                    <div className="mt-1 w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30">
                      <Zap className="w-3 h-3 text-cyan-400" />
                    </div>
                    <span className="text-lg text-slate-300 font-bold tracking-tight">{skill}</span>
                  </motion.div>
                ))}
              </div>

              <button 
                onClick={() => handleWhatsAppRedirect(`Servicio: ${selectedRole.title}`)}
                className="w-full py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black uppercase tracking-widest text-sm rounded-3xl hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all"
              >
                HABLAR CON EL RESPONSABLE TÉCNICO
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
