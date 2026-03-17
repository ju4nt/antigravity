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
  Briefcase,
  Home as HomeIcon,
  ShieldCheck,
  Search,
  CheckCircle2,
  Activity,
  BarChart,
  HardDrive,
  Mic2
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
      id: "ia-agency",
      title: "1. AGENCIA DE IA",
      description: "Desarrollo de agentes inteligentes especializados que automatizan tareas empresariales.",
      icon: <Bot className="w-8 h-8" />,
      items: [
        {
          title: "AI Voice Agents",
          desc: "Atención al cliente, call center automatizado, encuestas, agendamiento y seguimiento.",
          features: ["Atención al cliente", "Call center automatizado", "Encuestas automáticas", "Agendamiento de citas", "Seguimiento de clientes"]
        },
        {
          title: "AI Chat Agents",
          desc: "Chatbots para Web y WhatsApp, asistentes corporativos y automatización de soporte.",
          features: ["Chatbots para web", "Chatbots para WhatsApp", "Asistentes corporativos", "Automatización de soporte"]
        },
        {
          title: "OCR Intelligent Processing",
          desc: "Procesamiento automático: facturas, extracción de datos, digitalización y validación.",
          features: ["Lectura de facturas", "Extracción de datos", "Digitalización documental", "Validación de formularios"]
        },
        {
          title: "AI Vision",
          desc: "Sistemas de visión: reconocimiento facial, validación de identidad y detección de objetos.",
          features: ["Reconocimiento facial", "Validación de identidad", "Análisis de imágenes", "Detección de objetos"]
        },
        {
          title: "AI Security Systems",
          desc: "Agentes de seguridad: detección de movimiento, vigilancia y monitoreo automatizado.",
          features: ["Detección de movimiento", "Vigilancia automatizada", "Monitoreo de cámaras", "Alertas de seguridad"]
        }
      ]
    },
    {
      id: "data-hub",
      title: "2. DATA PRECISION HUB",
      description: "Infraestructura para transformar datos en inteligencia de negocio.",
      icon: <Database className="w-8 h-8" />,
      items: [
        {
          title: "Industrial Data Pipelines",
          desc: "ETL / ELT, integración de datos y pipelines automatizados en tiempo real.",
          features: ["ETL / ELT", "Integración de datos", "Pipelines automatizados", "Ingestión en tiempo real"]
        },
        {
          title: "Data Warehouse & Lake",
          desc: "Diseño de arquitecturas Data Warehouse, Data Lake y Lakehouse.",
          features: ["Diseño de Data Warehouse", "Arquitectura Data Lake", "Arquitectura Lakehouse"]
        },
        {
          title: "Business Intelligence",
          desc: "Dashboards ejecutivos, reportes automatizados y monitoreo de KPIs.",
          features: ["Dashboards ejecutivos", "Reportes automatizados", "Monitoreo de KPIs", "Análisis empresarial"]
        },
        {
          title: "Advanced Data Analytics",
          desc: "Análisis estadístico, correlaciones y detección de anomalías.",
          features: ["Análisis estadístico", "Correlaciones", "Análisis de comportamiento", "Detección de anomalías"]
        },
        {
          title: "Predictive Engineering",
          desc: "Predicción de demanda y ventas, scoring de clientes y detección de fraude.",
          features: ["Predicción de demanda", "Predicción de ventas", "Scoring de clientes", "Detección de fraude"]
        }
      ]
    },
    {
      id: "wfm-ops",
      title: "3. WFM OPERATIONS",
      description: "Optimización de operaciones intensivas en personal.",
      icon: <Users className="w-8 h-8" />,
      items: [
        {
          title: "Forecasting",
          desc: "Predicción de demanda para llamadas, chats, emails y redes sociales.",
          features: ["Llamadas", "Chats", "Emails", "Redes sociales"]
        },
        {
          title: "Dimensionamiento",
          desc: "Cálculo de personal requerido a largo, mediano y corto plazo.",
          features: ["Largo plazo (Estratégico)", "Mediano plazo (Mensual)", "Corto plazo (Semanal)"]
        },
        {
          title: "Rostering & Scheduling",
          desc: "Generación automática y optimización matemática de turnos.",
          features: ["Asignación de turnos", "Cumplimiento normativo", "Mallas optimizadas", "Reducción de tiempos muertos"]
        },
        {
          title: "Workforce Analytics",
          desc: "Análisis de AHT, Nivel de Servicio, Ocupación y Productividad.",
          features: ["AHT", "Nivel de servicio", "Ocupación", "Productividad", "Abandono"]
        },
        {
          title: "Gestión Outbound",
          desc: "Diseño de campañas, marcación inteligente y optimización comercial.",
          features: ["Segmentación y targets", "Predictive dialing", "Análisis de conversión"]
        }
      ]
    },
    {
      id: "consultoria",
      title: "4. CONSULTORÍA OPERATIVA",
      description: "Servicios de asesoría estratégica para empresas.",
      icon: <BarChart3 className="w-8 h-8" />,
      items: [
        {
          title: "Diagnóstico de Operaciones",
          desc: "Evaluación completa de KPIs, procesos y eficiencia de contact centers.",
          features: ["Análisis de KPIs", "Análisis de procesos", "Análisis de eficiencia"]
        },
        {
          title: "Diseño de Contact Center",
          desc: "Creación de operaciones desde cero: estructura, procesos y tecnología.",
          features: ["Estructura organizacional", "Definición de procesos", "Arquitectura tecnológica"]
        },
        {
          title: "Optimización & Auditoría",
          desc: "Rediseño de procesos y revisión independiente de desempeño financiero.",
          features: ["Productividad y eficiencia", "Reducción de costos", "Auditoría de KPIs", "Auditoría financiera"]
        }
      ]
    },
    {
      id: "bpo-services",
      title: "5. SERVICIOS BPO",
      description: "Externalización completa de procesos empresariales.",
      icon: <Briefcase className="w-8 h-8" />,
      items: [
        {
          title: "BPO Contact Center",
          desc: "Customer Support, Sales Operations y Campaign Management omnicanal.",
          features: ["Atención omnicanal", "Telemarketing", "Generación de leads", "Gestión de bases de datos"]
        },
        {
          title: "BPO Back Office",
          desc: "Procesamiento de documentos, gestión de datos y validación documental.",
          features: ["Procesamiento de docs", "Gestión de datos", "Digitación", "Validación"]
        },
        {
          title: "BPO Data & Analytics",
          desc: "Limpieza y etiquetado de datos para IA y reporting operativo.",
          features: ["Limpieza de datos", "Etiquetado para IA", "Monitoreo de KPIs", "Análisis de desempeño"]
        }
      ]
    },
    {
      id: "enterprise-sol",
      title: "6. ENTERPRISE SOLUTIONS",
      description: "Creación de software empresarial y desarrollo tecnológico personalizado.",
      icon: <Cpu className="w-8 h-8" />,
      items: [
        {
          title: "Custom Functional Apps",
          desc: "Aplicaciones empresariales, plataformas de gestión y sistemas internos.",
          features: ["Aplicaciones a medida", "Plataformas de gestión", "Sistemas operativos internos"]
        },
        {
          title: "Integración de Sistemas",
          desc: "Integración CRM, ERP y desarrollo de APIs empresariales.",
          features: ["Integración CRM", "Integración ERP", "APIs empresariales"]
        },
        {
          title: "Automatización Empresarial",
          desc: "RPA y flujos automatizados para integración de sistemas.",
          features: ["RPA", "Flujos automatizados", "Integración de procesos"]
        }
      ]
    },
    {
      id: "smart-systems",
      title: "7. SMART SYSTEMS",
      description: "Automatización de espacios y domótica inteligente.",
      icon: <HomeIcon className="w-8 h-8" />,
      items: [
        {
          title: "Smart Home",
          desc: "Control de iluminación, clima y automatización doméstica.",
          features: ["Iluminación", "Clima", "Domótica"]
        },
        {
          title: "Smart Security",
          desc: "Cámaras inteligentes, sensores e identificación facial.",
          features: ["Cámaras inteligentes", "Sensores de movimiento", "Reconocimiento facial"]
        },
        {
          title: "Smart Buildings",
          desc: "Edificios inteligentes, sensores IoT y eficiencia energética.",
          features: ["Edificios inteligentes", "Sensores IoT", "Eficiencia energética"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen relative text-slate-200 bg-obsidian overflow-x-hidden">
      {/* Background System - Industrial Grid */}
      <div className="bg-grid-overlay" />

      {/* --- Mint Navbar --- */}
      <nav className="navbar-mint">
        <div className="flex items-center gap-4">
          <span className="text-xl">COLCONEXUS</span>
        </div>
        <div className="hidden md:flex gap-8">
          <a href="#servicios" className="text-[#080315] font-tech font-black text-[10px] uppercase tracking-widest hover:opacity-60 transition-opacity">Servicios</a>
          <a href="#diagnostico" className="text-[#080315] font-tech font-black text-[10px] uppercase tracking-widest hover:opacity-60 transition-opacity">Diagnóstico</a>
          <a href="#" onClick={() => handleWhatsAppRedirect()} className="text-[#080315] font-tech font-black text-[10px] uppercase tracking-widest hover:opacity-60 transition-opacity">Contacto</a>
        </div>
        <button
          onClick={() => handleWhatsAppRedirect("Solicitud de Ingeniería")}
          className="bg-[#080315] text-neon px-4 py-1 text-[9px] font-tech font-black uppercase tracking-tighter"
        >
          Iniciar Proyecto
        </button>
      </nav>

      <main className="pt-20">
        {/* --- Hero Section Refined --- */}
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="grid md:grid-cols-12 gap-6 items-center bg-purple-deep/20 border border-white/5 rounded-sm overflow-hidden">
            <div className="md:col-span-7 p-8 md:p-14 flex flex-col gap-6">
              <div className="flex items-center gap-3 px-3 py-1 bg-neon/10 border border-neon/30 w-fit">
                 <div className="w-2 h-2 bg-neon rounded-full animate-pulse shadow-[0_0_10px_#00ffcc]" />
                 <span className="text-neon font-tech text-[10px] uppercase font-black tracking-[0.3em]">Industrial AI Engineering 2026</span>
              </div>
              
              <h1 className="font-tech text-4xl md:text-5xl lg:text-6xl font-black text-ice leading-[1.1] uppercase italic tracking-tighter">
                MIDE TU NIVEL DE <br /> <span className="neon-glow">AUTOMATIZACIÓN.</span>
              </h1>
              
              <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed max-w-lg">
                No dejes la rentabilidad al azar. Nuestra ingeniería de precisión audita tus procesos y despliega robots autónomos que eliminan la inercia operativa de inmediato.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={() => {
                    const el = document.getElementById('diagnostico');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-neon text-xs"
                >
                  Mide tu Nivel Ahora
                </button>
                <button 
                  onClick={() => handleWhatsAppRedirect("Demo Técnica")}
                  className="btn-outline text-xs"
                >
                  Ver Demo Técnica
                </button>
              </div>
            </div>
            
            <div className="md:col-span-5 h-[300px] md:h-full relative overflow-hidden">
              <img 
                src="/assets/hero-ai.jpg" 
                alt="Industrial Intelligence Hub" 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-purple-deep/40" />
            </div>
          </div>
        </section>

        {/* --- Comparison Section Refined --- */}
        <section className="max-w-7xl mx-auto mb-16 px-6">
          <div className="glass-card overflow-hidden rounded-sm flex flex-col md:flex-row items-stretch border-neon/10 h-auto md:h-[400px]">
            <div className="flex-1 p-10 md:p-12 flex flex-col justify-center bg-purple-deep/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon/5 blur-3xl" />
              <h2 className="font-tech text-2xl md:text-4xl font-black text-ice mb-6 leading-[1.1] uppercase italic tracking-tighter">
                ¿Pagas por el <br /> <span className="neon-glow">Talento</span> o por la <span className="text-slate-700">Inercia</span>?
              </h2>
              <p className="electric-glow font-tech text-base font-bold mb-6 uppercase tracking-tight">
                La IA es inversión única, el ejecutivo senior es gasto perpetuo.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">
                  <div className="w-1.5 h-1.5 bg-neon rounded-full" /> Automatiza el rol, no el salario.
                </div>
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">
                  <div className="w-1.5 h-1.5 bg-neon rounded-full" /> Blindaje operativo 24/7 sin errores.
                </div>
              </div>
              <button
                onClick={() => handleWhatsAppRedirect("Comparativa Rentabilidad")}
                className="btn-neon w-fit px-8 py-3 text-xs"
              >
                Solicitar Business Case
              </button>
            </div>
            <div className="flex-1 relative border-l border-white/5 overflow-hidden">
              <img
                src="/assets/comparison-ai.jpg"
                alt="Talento vs Inercia"
                className="w-full h-full object-cover grayscale-0 hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* --- Services Header --- */}
        <section id="servicios" className="max-w-7xl mx-auto mb-12 px-6">
           <div className="flex flex-col gap-2">
              <h2 className="font-tech text-4xl font-black text-ice uppercase italic tracking-tighter">Portafolio de Servicios</h2>
              <div className="flex items-center gap-4 text-neon font-bold text-[9px] uppercase tracking-[0.5em]">
                <span>DATA</span> <span className="opacity-30">•</span> <span>AI</span> <span className="opacity-30">•</span> <span>CONTACT CENTER</span> <span className="opacity-30">•</span> <span>BPO</span> <span className="opacity-30">•</span> <span>SMART SYSTEMS</span>
              </div>
           </div>
        </section>

        {/* --- Business Units Expansion --- */}
        <section className="max-w-7xl mx-auto mb-16 px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {BUSINESS_UNITS.map((unit, idx) => (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-10 border border-white/5 hover:border-neon/30 transition-all group"
              >
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-3 bg-neon/10 rounded-sm border border-neon/20 group-hover:border-neon transition-colors text-neon">{unit.icon}</div>
                  <h3 className="font-tech text-2xl font-black uppercase italic tracking-tight text-ice">{unit.title}</h3>
                </div>
                <p className="text-slate-500 text-[10px] mb-8 font-black uppercase tracking-widest leading-relaxed border-l-2 border-neon pl-4">{unit.description}</p>

                <div className="grid gap-4">
                  {unit.items.map((item) => (
                    <div
                      key={item.title}
                      className="p-6 rounded-sm bg-obsidian/60 border border-white/5 hover:border-electric/30 transition-all"
                    >
                      <h4 className="font-tech font-black text-ice uppercase tracking-tight text-lg mb-2">{item.title}</h4>
                      <p className="text-[10px] text-slate-500 mb-4 font-bold uppercase tracking-wider">{item.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.features.map(f => (
                          <span key={f} className="text-[8px] bg-electric/10 text-electric border border-electric/20 px-2 py-0.5 rounded-full uppercase font-black tracking-tighter">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>


        {/* --- Data Master Technical Specs Summary --- */}
        <section className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-4 gap-8 border-y border-white/5 my-16">
          <div className="text-center">
            <div className="font-tech text-3xl font-black text-white mb-2 uppercase tracking-tighter italic">Medallion</div>
            <h5 className="text-neon font-bold uppercase text-[9px] tracking-[0.4em] mb-4">Architecture</h5>
            <p className="text-slate-600 text-[9px] font-black uppercase tracking-widest">Industrial Precision</p>
          </div>
          <div className="text-center border-l border-white/5">
             <div className="font-tech text-3xl font-black text-white mb-2 uppercase tracking-tighter italic">Delta Lake</div>
            <h5 className="text-electric font-bold uppercase text-[9px] tracking-[0.4em] mb-4">Core Storage</h5>
            <p className="text-slate-600 text-[9px] font-black uppercase tracking-widest">High-Availability</p>
          </div>
          <div className="text-center border-l border-white/5">
            <div className="font-tech text-3xl font-black text-white mb-2 uppercase tracking-tighter italic">Efficiency</div>
            <h5 className="text-neon font-bold uppercase text-[9px] tracking-[0.4em] mb-4">Cost Reduction</h5>
            <p className="text-slate-600 text-[9px] font-black uppercase tracking-widest">Data Science Pro</p>
          </div>
          <div className="text-center border-l border-white/5">
            <div className="font-tech text-3xl font-black text-white mb-2 uppercase tracking-tighter italic">Scalability</div>
            <h5 className="text-electric font-bold uppercase text-[9px] tracking-[0.4em] mb-4">Global Reach</h5>
            <p className="text-slate-600 text-[9px] font-black uppercase tracking-widest">Cloud Native</p>
          </div>
        </section>

        {/* --- AI Industrial Demo: Terminal --- */}
        <section className="max-w-7xl mx-auto mb-16 px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-[#050210] border border-neon/10 rounded-sm p-8 shadow-2xl relative">
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                    <div className="w-2.5 h-2.5 rounded-full bg-neon/80" />
                  </div>
                  <span className="text-[7px] font-tech text-neon/30 uppercase tracking-[0.4em]">Audit_Engine_2.7.sh</span>
                </div>
                <div className="terminal-code space-y-2 font-mono text-[10px]">
                   <p className="text-electric opacity-60">[BOOT] Engineering_Kernel_v2.7_Loaded</p>
                   <p className="text-ice">&gt; analyze --depth exhaustive --target global_ops</p>
                   <p className="text-neon"> [OK] 12 Inefficiencies Remapped.</p>
                   <p className="text-electric"> [DATA] Medallion Pipeline Sync: 100%</p>
                   <div className="flex items-center gap-1">
                     <span className="text-ice">&gt; </span>
                     <span className="terminal-cursor w-2 h-4 bg-neon animate-pulse" />
                   </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-tech text-3xl md:text-5xl font-black text-ice mb-6 leading-none uppercase italic tracking-tighter">
                Auditoría <span className="neon-glow">Autónoma</span>
              </h2>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">
                Nuestros agentes de ingeniería ejecutan. Blindamos la rentabilidad mediante inteligencia que recalcula la eficiencia operativa en tiempo real.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="font-tech text-2xl font-black text-neon mb-1 tracking-tighter">0.8ms</div>
                  <div className="text-[8px] text-electric font-black uppercase tracking-widest">Latencia</div>
                </div>
                <div>
                  <div className="font-tech text-2xl font-black text-neon mb-1 tracking-tighter">99.9%</div>
                  <div className="text-[8px] text-electric font-black uppercase tracking-widest">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Media Hub --- */}
        <section className="max-w-7xl mx-auto mb-16 px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 relative aspect-video rounded-sm overflow-hidden border border-white/5 group">
              <iframe
                className="w-full h-full opacity-90 group-hover:opacity-100 transition-all duration-700"
                src="https://www.youtube.com/embed/aW-6Zbc-Lyw?autoplay=0&mute=1"
                title="Deep Dive"
                allowFullScreen
              />
            </div>
            <div className="relative aspect-[9/16] rounded-sm overflow-hidden border border-neon/20 group hidden md:block">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ROrzZBpJUag"
                title="Shorts"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* --- Orquestación Refined --- */}
        <section className="max-w-7xl mx-auto mb-16 px-6">
           <div className="relative rounded-sm overflow-hidden border border-white/5 bg-purple-deep/20 group">
              <div className="grid md:grid-cols-12 h-full items-stretch">
                <div className="md:col-span-7 p-10 md:p-14 flex flex-col justify-center gap-6 relative z-10">
                  <h3 className="font-tech text-3xl md:text-4xl font-black text-ice uppercase italic tracking-tighter">
                    La IA no es Código, <br /> es <span className="neon-glow">Orquestación</span>.
                  </h3>
                  <p className="text-slate-500 text-sm font-medium tracking-tight max-w-md">
                    Entiende las herramientas, nosotros las unimos por ti para crear un sistema cohesionado y escalable que responda a su demanda industrial.
                  </p>
                  <button onClick={() => handleWhatsAppRedirect("Engine Orchestra")} className="btn-neon w-fit px-10 py-4 text-xs">Ver Arquitectura</button>
                </div>
                <div className="md:col-span-5 relative min-h-[300px] border-l border-white/5">
                   <img 
                    src="/assets/orchestra-ai.jpg" 
                    alt="Orchestration" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                   />
                </div>
              </div>
           </div>
        </section>

        <section id="diagnostico" className="max-w-7xl mx-auto mb-16 relative px-4 text-center">
          <div className="absolute inset-0 bg-neon/5 blur-[120px] -z-10" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-20 rounded-sm border-neon/10 bg-purple-deep/30"
          >
            <h2 className="font-tech text-2xl md:text-4xl font-black mb-4 leading-tight tracking-[0.05em] text-ice uppercase italic">
              ¿Tu empresa tiene herramientas del
            </h2>
            <div className="xxi-glow mb-4 text-6xl md:text-8xl">XXI</div>
            <h2 className="font-tech text-2xl md:text-4xl font-black mb-10 leading-tight tracking-[0.05em] text-slate-700 uppercase italic">
              o trabaja con herramientas del siglo XIX?
            </h2>
            <p className="text-neon/60 text-[9px] md:text-[11px] font-black mb-12 max-w-2xl mx-auto uppercase tracking-[0.5em] leading-relaxed">
              DESCÚBRELO CON NUESTRO TEST DE DIAGNÓSTICO DIGITAL PRO.
            </p>
            <a
              href="https://forms.gle/6mRAKsnYVZowXiAD6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-6 px-12 py-6 btn-neon text-sm md:text-lg group"
            >
              REALIZAR TEST DE DIAGNÓSTICO
              <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
            </a>
          </motion.div>
        </section>

        {/* --- Final CTA Section --- */}
        <section className="max-w-7xl mx-auto p-12 md:p-24 rounded-sm bg-obsidian border border-white/5 text-center relative overflow-hidden group mb-16">
          <div className="absolute inset-0 bg-grid-overlay opacity-10" />

          <h2 className="font-tech text-4xl md:text-[6rem] font-black mb-8 leading-[0.8] tracking-tighter italic uppercase text-ice relative z-10">
            COLCONEXUS <br /> <span className="electric-glow">TECH HUB</span>
          </h2>
          <p className="text-slate-500 mb-12 text-xs md:text-base font-bold max-w-3xl mx-auto relative z-10 uppercase tracking-[0.3em] leading-relaxed">
            Eliminamos el techo de su productividad. <br />
            Auditoría estratégica y despliegue masivo de automatización.
          </p>

          <button
            onClick={() => handleWhatsAppRedirect("Tech Hub Finish")}
            className="px-12 py-6 btn-neon text-sm md:text-base mx-auto relative z-10 group"
          >
            SOLICITAR AUDITORÍA DE RENDIMIENTO
            <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
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
