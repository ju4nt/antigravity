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
  CheckCircle2,
  TrendingDown,
  Clock
} from "lucide-react";

export default function Home() {
  const WHATSAPP_NUMBER = "573214378318";
  const [selectedRole, setSelectedRole] = useState<null | typeof ROLES_DATA[0]>(null);
  
  const handleWhatsAppRedirect = (service = "") => {
    const text = service 
      ? `Hola equipo de Colconexus. Me interesa el servicio: *${service}*. ¿Podrían darme más información?`
      : "Hola Colconexus. Quisiera solicitar una demostración de sus servicios de IA y Tecnología.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const ROLES_DATA = [
    {
      id: "robot_pro",
      title: "Robot Profesional Personalizado",
      popular: true,
      description: "Agentes de Inteligencia Artificial que trabajan 24/7 en tu empresa de forma autónoma.",
      skills: [
        "Procesamiento de pre-nómina en tiempo real",
        "Atención al cliente multilingüe sin espera",
        "Ejecución de tareas administrativas complejas",
        "Sincronización de datos entre departamentos",
        "Cero error humano garantizado"
      ],
      icon: <Bot className="w-8 h-8 text-cyan-400" />,
      tag: "Más popular"
    },
    {
      id: "data_science",
      title: "Ciencia de Datos & Reportes",
      popular: false,
      description: "Análisis predictivo y reportes inteligentes sin depender de interpretaciones humanas.",
      skills: [
        "Creación instantánea de ETL y Pipelines",
        "Modelos predictivos de mercado y ventas",
        "Cero reuniones eternas para entrega de reportes",
        "Interpretación matemática exacta de datos",
        "Dashboards interactivos automatizados"
      ],
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      tag: "Ciencia Avanzada"
    },
    {
      id: "erp_nomina",
      title: "ERP Nómina en Tiempo Real",
      popular: false,
      description: "Gestión financiera y de recursos humanos automatizada al 100%.",
      skills: [
        "Liquidación automática de nómina",
        "Streaming de datos financieros en vivo",
        "Gestión de pre-nómina sin intervención",
        "Cumplimiento legal automatizado",
        "Reportes de costos operativos al instante"
      ],
      icon: <Database className="w-8 h-8 text-blue-400" />,
      tag: "Infraestructura"
    },
    {
      id: "apps_b2b",
      title: "Desarrollo & Integración B2B",
      description: "Plataformas web y móviles conectadas a todo tu ecosistema.",
      skills: [
        "Desarrollo acelerado de aplicaciones",
        "Integración con Meta, WhatsApp y CRM",
        "Pasarelas de pago y streaming de datos",
        "Sistemas escalables en la nube",
        "Mantenimiento proactivo preventivo"
      ],
      icon: <Code2 className="w-8 h-8 text-pink-400" />,
      tag: "A medida"
    }
  ];

  return (
    <div className="min-h-screen relative text-slate-200 bg-[#020617]">
      {/* Background System - Pure CSS */}
      <div className="bg-grid-overlay" />
      <div className="bg-grid-animate" />
      <div className="bg-orb -top-20 -left-20 bg-cyan-600/10" />
      <div className="bg-orb -bottom-20 -right-20 bg-purple-600/10" />

      {/* --- Navbar --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020617]/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Bot className="text-white w-5 h-5" />
            </div>
            <span className="font-bold tracking-tight text-white uppercase">COLCONEXUS</span>
          </div>
          <button 
            onClick={() => handleWhatsAppRedirect()}
            className="text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-400/30 px-5 py-2.5 rounded-full hover:bg-cyan-400/10 transition-all shadow-[0_0_15px_rgba(34,211,238,0.1)]"
          >
            Agendar Demo
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        {/* --- Hero Section --- */}
        <section className="max-w-5xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-[10px] uppercase tracking-[0.2em] font-black text-cyan-400 mb-8"
          >
            <Zap className="w-3 h-3 animate-pulse" /> Migración a IA Empresarial
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-8 leading-[1.1]"
          >
            Ahorra Dinero con Roles de <br /> <span className="text-gradient">IA Profesionales</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Elimina el error humano, las reuniones eternas y la espera de días. 
            Nuestros Robots IA ejecutan tareas, analizan datos y generan reportes en <strong className="text-white">tiempo real</strong> las 24 horas del día.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <button 
              onClick={() => handleWhatsAppRedirect()}
              className="px-10 py-5 bg-white text-black rounded-full font-black text-sm hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-2"
            >
              INICIAR DEMO GRATIS <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="#servicios"
              className="px-10 py-5 border border-white/10 rounded-full font-bold text-sm hover:bg-white/5 transition-all backdrop-blur-sm"
            >
              VER CAPACIDADES
            </a>
          </motion.div>
        </section>

        {/* --- Value Proposition Banner --- */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-32">
          <div className="glass-card p-8 rounded-3xl border-cyan-500/10">
            <TrendingDown className="w-10 h-10 text-cyan-400 mb-4" />
            <h4 className="text-xl font-bold mb-2">Ahorro Extremo</h4>
            <p className="text-sm text-slate-400">Reduce costos al migrar tareas humanas repetitivas a procesos de IA 100% precisos.</p>
          </div>
          <div className="glass-card p-8 rounded-3xl border-purple-500/10 text-center">
            <Clock className="w-10 h-10 text-purple-400 mb-4 mx-auto" />
            <h4 className="text-xl font-bold mb-2">Sin Esperas</h4>
            <p className="text-sm text-slate-400">Reportes de nómina y pipelines de datos entregados al instante. Cero reuniones innecesarias.</p>
          </div>
          <div className="glass-card p-8 rounded-3xl border-blue-500/10 text-right">
            <CheckCircle2 className="w-10 h-10 text-blue-400 mb-4 ml-auto" />
            <h4 className="text-xl font-bold mb-2">Funcionalidad 24/7</h4>
            <p className="text-sm text-slate-400">Tus robots profesionales nunca descansan, operando su empresa sin errores los 365 días.</p>
          </div>
        </section>

        {/* --- Video Section --- */}
        <section className="max-w-5xl mx-auto mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4 italic uppercase">IA En Acción</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto" />
          </div>
          <div className="aspect-video w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black/40">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0" 
              title="Colconexus AI Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </section>

        {/* --- Services Grid --- */}
        <section id="servicios" className="max-w-7xl mx-auto mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black mb-4">Catálogo de Robots Profesionales</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Haz clic en cada robot para ver sus habilidades y capacidades técnicas.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ROLES_DATA.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setSelectedRole(s)}
                className={`glass-card p-8 rounded-[2rem] cursor-pointer group hover:bg-white/[0.05] relative overflow-hidden ${s.popular ? 'border-cyan-500/40' : ''}`}
              >
                {s.popular && (
                  <div className="absolute -right-12 top-6 rotate-45 bg-cyan-500 text-black text-[9px] font-black px-12 py-1 shadow-lg">
                    RECOMENDADO
                  </div>
                )}
                <div className="mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-3">
                  {s.tag}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white leading-tight">{s.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6 line-clamp-2">{s.description}</p>
                <div className="flex items-center text-xs font-bold text-cyan-500 group-hover:gap-2 transition-all">
                  VER SKILLS <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Final CTA --- */}
        <section className="max-w-4xl mx-auto py-24 px-10 rounded-[3rem] bg-gradient-to-br from-cyan-900/20 via-[#020617] to-purple-900/20 border border-white/5 text-center shadow-inner">
          <h2 className="text-4xl font-black mb-8 leading-tight">¿Estás listo para migrar a la <br /> <span className="text-gradient">Fuerza Empresarial del Futuro?</span></h2>
          <p className="text-slate-400 mb-12 text-lg">Hablemos ahora. Un equipo técnico experto te atenderá por WhatsApp para diseñar tu primer robot a medida.</p>
          
          <button 
            onClick={() => handleWhatsAppRedirect()}
            className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-black text-xl shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 mx-auto"
          >
            <MessageSquare className="w-7 h-7" />
            SOLICITAR CONSULTORÍA IA
          </button>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-600 uppercase tracking-widest font-black">
        <div>© {new Date().getFullYear()} COLCONEXUS DATA CENTER SAS</div>
        <div className="flex gap-10">
          <a href="https://linkedin.com" target="_blank" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
          <a href="https://facebook.com" target="_blank" className="hover:text-cyan-400 transition-colors">Facebook</a>
          <a href="mailto:colconexus_datacenter_sas@gmail.com" className="hover:text-cyan-400 transition-colors">Email</a>
        </div>
      </footer>

      {/* --- Role Modal (Pop-up) --- */}
      <AnimatePresence>
        {selectedRole && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRole(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-[#0a1120] border border-cyan-500/20 rounded-[2.5rem] p-10 shadow-[0_0_50px_rgba(34,211,238,0.15)] overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-600" />
              <button 
                onClick={() => setSelectedRole(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/5 transition-all"
              >
                <X className="w-6 h-6 text-slate-500" />
              </button>

              <div className="mb-8">{selectedRole.icon}</div>
              <div className="text-[10px] font-black text-cyan-500 tracking-[0.3em] uppercase mb-2">IA ROBOT SKILLS</div>
              <h3 className="text-3xl font-black mb-6 leading-tight text-white">{selectedRole.title}</h3>
              
              <div className="space-y-4 mb-10">
                {selectedRole.skills.map((skill, index) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={skill} 
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 transition-all">
                      <Zap className="w-3 h-3 text-cyan-400" />
                    </div>
                    <span className="text-sm md:text-base text-slate-300 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>

              <button 
                onClick={() => handleWhatsAppRedirect(`Robot: ${selectedRole.title}`)}
                className="w-full py-5 bg-cyan-500 text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all flex items-center justify-center gap-2"
              >
                Contratar este Robot <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
