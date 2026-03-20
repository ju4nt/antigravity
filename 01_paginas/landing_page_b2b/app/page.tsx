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
  const [chatMessages, setChatMessages] = useState<any[]>([
    { role: 'bot', text: "[SISTEMA INICIADO] Conectando con Neural Link... ¿Qué proceso de tu operación deseas blindar hoy?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeUnit, setActiveUnit] = useState(0);
  
  const handleWhatsAppRedirect = (service = "") => {
    const text = service 
      ? `Hola equipo de Colconexus. He usado su herramienta de diagnóstico y me interesa: *${service}*. ¿Podemos agendar una sesión de ingeniería?`
      : "Hola Colconexus. Me gustaría medir mi nivel de automatización y solicitar una auditoría técnica.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const simulateBotResponse = (userText: string) => {
    setIsTyping(true);
    setTimeout(() => {
      let response = "Entendido. Procesando requerimiento técnico...";
      if (userText.toLowerCase().includes("automation") || userText.toLowerCase().includes("automatización")) {
        response = "La automatización B2B es nuestra mayor fortaleza. Podemos reducir costos operativos hasta un 40% mediante orquestación de datos y Claude Gravity.";
      } else if (userText.toLowerCase().includes("cost") || userText.toLowerCase().includes("precio") || userText.toLowerCase().includes("ahorro")) {
        response = "Nuestras soluciones de WFM Estratégico y Agencia de IA (con Google ML) están diseñadas para blindar tu rentabilidad eliminando gastos perpetuos.";
      }
      setChatMessages(prev => [...prev, { role: 'bot', text: response }]);
      setIsTyping(false);
    }, 1500);
  };

  const IMPACT_SOLUTIONS = [
    { title: "Robot Industrial", desc: "Swarms de agentes ejecutando auditorías de procesos en tiempo real con Claude Gravity.", val: "99.9% Eficiencia" },
    { title: "Data Precision", desc: "Ingeniería de datos avanzada mediante Google ML Notebooks y arquitecturas Medallion.", val: "100% Integridad" },
    { title: "WFM Teams", desc: "Orquestación masiva de fuerzas de trabajo y cumplimiento operativo inteligente.", val: "-40% Costos" }
  ];

  const BUSINESS_UNITS = [
    {
      id: "agencia-ia",
      title: "1. AGENCIA DE IA",
      description: "Desarrollo de agentes inteligentes especializados que automatizan flujos corporativos usando Claude Gravity y modelos de contexto Google ML.",
      icon: <Bot className="w-8 h-8" />,
      items: [
        {
          title: "AI Voice Agents (Equipos)",
          desc: "Agentes de voz capaces de atención al cliente, call center automatizado, agendamiento y seguimiento mediante Protocolos de Contexto.",
          features: ["Swarms de Atención al Cliente", "Equipos de Call Center Automatizados", "Encuestas Automáticas (Skills)", "Agendamiento de Citas", "Agentes de Seguimiento"]
        },
        {
          title: "AI Chat & Skill Agents",
          desc: "Asistentes inteligentes para canales digitales con Skills extensibles y Registro de Agentes.",
          features: ["Chatbots para Web", "Agentes de WhatsApp Business", "Asistentes Corporativos", "Skills de Automatización de Soporte"]
        },
        {
          title: "OCR Intelligent Processing",
          desc: "Procesamiento automático de documentos y extracción cognitiva de datos.",
          features: ["Lectura de Facturas", "Protocolos de Extracción de Datos", "Digitalización Documental", "Agentes de Validación de Formularios"]
        },
        {
          title: "Computer Vision Agents",
          desc: "Sistemas avanzados de inteligencia visual para identificación segura y seguimiento.",
          features: ["Equipos de Reconocimiento Facial", "Validación de Identidad", "Inteligencia de Imágenes", "Skills de Detección de Objetos"]
        },
        {
          title: "AI Security Protocols",
          desc: "Agentes de seguridad inteligente y vigilancia proactiva de infraestructura.",
          features: ["Agentes de Detección de Movimiento", "Equipos de Vigilancia Automatizada", "Skills de Monitoreo de Cámaras", "Protocolos de Alertas de Seguridad"]
        }
      ]
    },
    {
      id: "data-hub",
      title: "2. DATA PRECISION HUB",
      description: "Infraestructura industrial para transformar datos crudos en Inteligencia de Negocio especializada usando Google ML Notebooks.",
      icon: <Database className="w-8 h-8" />,
      items: [
        {
          title: "Industrial Data Pipelines",
          desc: "Flujos de datos automatizados en tiempo real bajo arquitectura Medallion.",
          features: ["Protocolos ETL / ELT", "Agentes de Integración de Datos", "Pipelines Automatizados", "Skills de Ingestión en Tiempo Real"]
        },
        {
          title: "Data Warehouse & Lake",
          desc: "Arquitecturas modernas de almacenamiento para modelos de contexto de Alta Disponibilidad.",
          features: ["Diseño de Data Warehouse", "Arquitectura Data Lake", "Optimización Lakehouse"]
        },
        {
          title: "Business Intelligence",
          desc: "Dashboards automatizados y reportes operativos ejecutivos.",
          features: ["Dashboards Ejecutivos", "Equipos de Reportes Automatizados", "Agentes de Monitoreo de KPIs", "Analítica Empresarial"]
        },
        {
          title: "Advanced Data Analytics",
          desc: "Analítica estadística y detección industrial de anomalías.",
          features: ["Skills de Análisis Estadístico", "Modelos de Correlación", "Analítica de Comportamiento", "Agentes de Detección de Anomalías"]
        },
        {
          title: "Predictive Engineering",
          desc: "Modelos de predicción de demanda y scoring basados en Google ML Notebooks.",
          features: ["Agentes de Predicción de Demanda", "Skills de Forecasting de Ventas", "Sistemas de Scoring de Clientes", "Protocolos de Detección de Fraude"]
        }
      ]
    },
    {
      id: "wfm-ops",
      title: "3. WFM OPERATIONS",
      description: "Optimización de operaciones intensivas en personal mediante Workforce Management y Strategic Scheduling.",
      icon: <BarChart className="w-8 h-8" />,
      items: [
        {
          title: "Forecasting Agents",
          desc: "Modelos predictivos de demanda para centros de contacto.",
          features: ["Llamadas", "Chats", "Emails", "Equipos de Redes Sociales"]
        },
        {
          title: "Capacity Planning",
          desc: "Cálculo de requerimiento de personal y planeación escalable.",
          features: [
            "Largo plazo: Planeación estratégica, Expansión de operaciones", 
            "Mediano plazo: Planeación mensual, Ajustes de capacidad", 
            "Corto plazo: Seguimiento semanal, Redistribución operativa"
          ]
        },
        {
          title: "Automated Rostering",
          desc: "Generación automática de mallas horarias y cumplimiento legal.",
          features: ["Agentes de Asignación de Turnos", "Skills de Cumplimiento Normativo", "Optimización de Cobertura"]
        },
        {
          title: "Strategic Scheduler",
          desc: "Optimización matemática de mallas de turnos.",
          features: ["Mallas de Turnos Optimizadas", "Reducción de Tiempos Muertos", "Protocolos de Maximización de Productividad"]
        },
        {
          title: "Workforce Analytics",
          desc: "Análisis de desempeño operativo y seguimiento en tiempo real.",
          features: ["Agentes de AHT", "Skills de Nivel de Servicio", "Métricas de Ocupación", "Equipos de Productividad", "Análisis de Abandono"]
        },
        {
          title: "Pricing Operativo",
          desc: "Modelos financieros para operaciones de alta intensidad.",
          features: ["Costo por Agente", "Costo por Contacto", "Protocolos de Rentabilidad por Campaña"]
        },
        {
          title: "Outbound Optimization",
          desc: "Gestión estratégica de campañas salientes y tuning de marcadores.",
          features: [
            "Diseño de Campañas: Segmentación, Targets, Estrategias de contacto", 
            "Marcación Inteligente: Predictive, Power, Preview dialing", 
            "Optimización de Conversión: Análisis de Scripts, Protocolos de Cierre"
          ]
        }
      ]
    },
    {
      id: "consultoria",
      title: "4. CONSULTORÍA OPERATIVA",
      description: "Asesoría estratégica y auditoría operativa de alto nivel.",
      icon: <Briefcase className="w-8 h-8" />,
      items: [
        {
          title: "Diagnóstico de Operaciones",
          desc: "Evaluación integral de infraestructura de centros de contacto.",
          features: ["Análisis de KPIs", "Skills de Mapeo de Procesos", "Auditorías de Eficiencia"]
        },
        {
          title: "Diseño de Contact Center",
          desc: "Creación de operaciones desde cero (Greenfield).",
          features: ["Estructura Organizacional", "Agentes de Definición de Procesos", "Skills de Arquitectura Tecnológica"]
        },
        {
          title: "Optimización Operativa",
          desc: "Rediseño para mejorar la productividad de alto impacto.",
          features: ["Equipos de Productividad y Eficiencia", "Reducción Estructural de Costos"]
        },
        {
          title: "Auditoría de Desempeño",
          desc: "Revisiones independientes de desempeño y cumplimiento.",
          features: ["Agentes de Auditoría de KPIs", "Skills de Correlación Financiera", "Auditorías de Productividad"]
        }
      ]
    },
    {
      id: "bpo-services",
      title: "5. SERVICIOS BPO",
      description: "Externalización completa de procesos empresariales usando Equipos de IA.",
      icon: <Users className="w-8 h-8" />,
      items: [
        {
          title: "BPO Contact Center",
          desc: "Operaciones de centros de contacto omnicanal gestionadas por Equipos de IA.",
          features: [
            "Customer Support: Multicanal, Gestión de Reclamos", 
            "Sales Operations: Telemarketing, Agentes de Generación de Leads", 
            "Campaign Management: Inbound/Outbound, Protocolos de Bases de Datos"
          ]
        },
        {
          title: "BPO Back Office",
          desc: "Procesos administrativos y validación especializada.",
          features: ["Agentes de Procesamiento de Documentos", "Skills de Gestión de Datos", "Digitalización", "Validación Documental"]
        },
        {
          title: "BPO Data Operations",
          desc: "Operación, limpieza y etiquetado de datos para Google ML.",
          features: ["Protocolos de Limpieza de Datos", "Agentes de Clasificación", "Equipos de Etiquetado para IA"]
        },
        {
          title: "BPO Analítico",
          desc: "Analítica operativa y servicios de reporteo.",
          features: ["Monitoreo de KPIs", "Agentes de Análisis de Desempeño", "Skills de Reporting Operativo"]
        }
      ]
    },
    {
      id: "enterprise-sol",
      title: "6. ENTERPRISE SOLUTIONS",
      description: "Desarrollo tecnológico y software a medida de alta gama.",
      icon: <Cpu className="w-8 h-8" />,
      items: [
        {
          title: "Custom Functional Apps",
          desc: "Aplicaciones internas y plataformas de grado empresarial.",
          features: ["Aplicaciones Empresariales", "Plataformas de Gestión", "Sistemas Operativos Internos"]
        },
        {
          title: "Integración de Sistemas",
          desc: "Integración de ecosistemas corporativos y sincronía cloud.",
          features: ["Protocolos de Integración CRM", "Skills de Integración ERP", "APIs Empresariales"]
        },
        {
          title: "Automatización Empresarial",
          desc: "Flujos RPA y procesos industriales automatizados.",
          features: ["Agentes RPA", "Workflows Automatizados", "Equipos de Orquestación de Sistemas"]
        }
      ]
    },
    {
      id: "smart-systems",
      title: "7. SMART SYSTEMS",
      description: "Automatización avanzada de espacios e infraestructura inteligente (IoT).",
      icon: <HomeIcon className="w-8 h-8" />,
      items: [
        {
          title: "Smart Commercial Spaces",
          desc: "Automatización avanzada para áreas industriales y comerciales.",
          features: ["Agentes de Control de Iluminación", "Skills de Control de Clima", "Domótica Industrial"]
        },
        {
          title: "Seguridad Inteligente",
          desc: "Seguridad electrónica inteligente e IA de vigilancia.",
          features: ["Cámaras Inteligentes", "Equipos de Sensores de Movimiento", "Protocolos de Reconocimiento Facial"]
        },
        {
          title: "Gestión de Edificios Inteligentes",
          desc: "Eficiencia energética y protocolos de gestión IoT.",
          features: ["Agentes de Auditoría Energética", "Monitoreo de Infraestructura", "Skills de Gestión IoT"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen relative text-slate-200 bg-obsidian overflow-x-hidden">
      {/* Background System - Industrial Grid & Watermark */}
      <div className="bg-grid-overlay" />
      <div className="bg-watermark">COLCONEXUS DATACENTER</div>
      
      {/* Background Glows */}
      <div className="glow-blob w-[500px] h-[500px] bg-neon top-[-10%] right-[-10%] opacity-10" />
      <div className="glow-blob w-[600px] h-[600px] bg-electric bottom-[20%] left-[-10%] opacity-10" />

      {/* --- Mint Navbar --- */}
      <nav className="navbar-mint">
        <div className="flex items-center gap-4">
          <span className="text-xl font-tech font-black italic tracking-tighter">COLCONEXUS</span>
        </div>
        
        {/* Navigation Dropdown Desktop */}
        <div className="hidden lg:flex gap-6 items-center">
          {BUSINESS_UNITS.map(unit => (
            <a 
              key={unit.id} 
              href={`#${unit.id}`} 
              className="text-[#080315] font-tech font-black text-[8px] uppercase tracking-widest hover:opacity-100 opacity-70 transition-all border-b border-transparent hover:border-[#080315] pb-1"
            >
              {unit.title.split('. ')[1]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => handleWhatsAppRedirect("Solicitud de Ingeniería")}
            className="hidden sm:block bg-[#080315] text-neon px-4 py-1 text-[9px] font-tech font-black uppercase tracking-tighter hover:scale-105 transition-transform"
          >
            Iniciar Proyecto
          </button>
          
          <button 
            className="lg:hidden text-[#080315]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Layers className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-neon p-6 flex flex-col gap-4 border-t border-[#080315]/10 lg:hidden shadow-2xl"
            >
              {BUSINESS_UNITS.map(unit => (
                <a 
                  key={unit.id} 
                  href={`#${unit.id}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#080315] font-tech font-black text-xs uppercase tracking-widest border-b border-[#080315]/5 pb-2"
                >
                  {unit.title}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  handleWhatsAppRedirect("Mobile Nav Inquiry");
                }}
                className="bg-[#080315] text-neon p-4 text-xs font-tech font-black uppercase"
              >
                Solicitar Ingeniería
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-20">
        {/* --- Hero Section Refined --- */}
        <section className="max-w-7xl mx-auto px-6 mb-12">
          <div className="grid md:grid-cols-12 gap-6 items-center bg-purple-deep/20 border border-white/5 rounded-sm overflow-hidden">
            <div className="md:col-span-8 p-6 md:p-8 flex flex-col justify-center gap-3">
              <div className="flex items-center gap-3 px-3 py-1 bg-neon/10 border border-neon/30 w-fit">
                 <div className="w-2 h-2 bg-neon rounded-full animate-pulse shadow-[0_0_10px_#00ffcc]" />
                 <span className="text-neon font-tech text-[9px] uppercase font-black tracking-[0.3em]">COLCONEXUS DATACENTER SAS</span>
              </div>
              
              <h1 className="font-tech text-3xl md:text-5xl lg:text-6xl font-black text-ice leading-[1.0] uppercase italic tracking-tighter">
                Mide tu nivel de <br /> <span className="neon-glow text-neon">Automatización</span>.
              </h1>
              
              <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed max-w-lg">
                No dejes la rentabilidad al azar. Nuestra ingeniería de precisión audita tus procesos y despliega robots autónomos que eliminan la inercia operativa de inmediato.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => {
                    const el = document.getElementById('diagnostico');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-neon text-[10px] py-3.5"
                >
                  Mide tu Nivel Ahora
                </button>
                <button 
                  onClick={() => window.open('/calculadora.html', '_blank')}
                  className="btn-roi text-[10px] py-3.5"
                >
                  Calculadora ROI Pro
                </button>
                <button 
                  onClick={() => handleWhatsAppRedirect("Tech Demo")}
                  className="btn-purple text-[10px] py-3.5"
                >
                  Ver Demo Técnica
                </button>
              </div>
            </div>
            
            <div className="md:col-span-4 p-4 flex items-center justify-center">
              <div className="relative group/img w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon/20 to-electric/20 blur opacity-25 group-hover/img:opacity-50 transition duration-1000" />
                <div className="relative bg-obsidian border border-white/10 rounded-sm overflow-hidden">
                  <img 
                    src="/assets/hero-ai.jpg" 
                    alt="Industrial Intelligence Hub" 
                    className="w-full h-auto object-contain brightness-105 contrast-105 group-hover/img:scale-105 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Comparison Section Refined --- */}
        <section className="max-w-7xl mx-auto mb-16 px-6">
          <div className="glass-card overflow-hidden rounded-sm flex flex-col md:flex-row items-stretch border-neon/10 h-auto md:h-[400px]">
            <div className="flex-[1.5] p-8 md:p-10 flex flex-col justify-center bg-purple-deep/60 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon/10 blur-3xl opacity-20" />
              <h2 className="font-tech text-2xl md:text-3xl font-black text-ice mb-2 leading-[1.0] uppercase italic tracking-tighter">
                ¿Pagas por el <br /> <span className="neon-glow">Talento</span> o por la <span className="text-slate-700 font-extrabold text-shadow-sm">Inercia</span>?
              </h2>
              <p className="electric-glow font-tech text-[10px] font-bold mb-4 uppercase tracking-tighter">
                IA = Inversión Única // Humano = Gasto Perpetuo
              </p>
              <div className="space-y-1 mb-6 text-[9px] uppercase font-black text-slate-400">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-neon rounded-full" /> Automate the role, not the salary.
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-neon rounded-full" /> 24/7 Operational shielding without errors.
                </div>
              </div>
              <button
                onClick={() => handleWhatsAppRedirect("Profitability Comparison")}
                className="btn-neon w-fit px-8 py-3 text-[10px]"
              >
                Request Business Case
              </button>
            </div>
            <div className="flex-1 p-6 flex items-center justify-center border-l border-white/10">
              <div className="relative group/img2 w-full max-w-[400px]">
                <div className="absolute -inset-1 bg-gradient-to-r from-electric/20 to-purple-600/20 blur opacity-25 group-hover/img2:opacity-50 transition duration-1000" />
                <div className="relative bg-obsidian border border-white/10 rounded-sm overflow-hidden">
                  <img 
                    src="/assets/comparison-ai.jpg" 
                    alt="Talento vs Inercia" 
                    className="w-full h-auto object-contain brightness-105 group-hover/img2:scale-105 transition-all duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Services Header --- */}
        <section id="servicios" className="max-w-7xl mx-auto mb-12 px-6">
           <div className="flex flex-col gap-2">
              <h2 className="font-tech text-4xl font-black text-ice uppercase italic tracking-tighter">Portafolio de Servicios</h2>
              <div className="flex items-center gap-4 text-neon font-bold text-[9px] uppercase tracking-[0.5em]">
                <span>DATA</span> <span className="opacity-30">•</span> <span>IA</span> <span className="opacity-30">•</span> <span>CONTACT CENTER</span> <span className="opacity-30">•</span> <span>BPO</span> <span className="opacity-30">•</span> <span>SMART SYSTEMS</span>
              </div>
           </div>
        </section>

        {/* --- Business Units Slider --- */}
        <section className="max-w-7xl mx-auto mb-20 px-6 overflow-hidden">
          {/* Unit Selector */}
          <div className="flex overflow-x-auto gap-3 mb-10 pb-4 no-scrollbar border-b border-white/5">
            {BUSINESS_UNITS.map((unit, idx) => (
              <button
                key={unit.id}
                onClick={() => {
                  setActiveUnit(idx);
                  // Optional: scroll the unit display into view if needed
                  document.getElementById('servicios-display')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`flex-shrink-0 px-6 py-4 font-tech font-black uppercase text-[10px] tracking-[0.2em] border-t border-x transition-all duration-300 rounded-t-sm outline-none ${
                  activeUnit === idx 
                  ? "bg-neon text-obsidian border-neon shadow-[0_-8px_20px_rgba(0,255,204,0.3)] z-10 translate-y-[-2px]" 
                  : "bg-purple-deep/40 text-ice/40 border-white/5 hover:border-neon/40 hover:text-neon"
                }`}
              >
                {unit.title.split('. ')[1]}
              </button>
            ))}
          </div>

          {/* Active Unit Display */}
          <div id="servicios-display">
            <AnimatePresence mode="wait">
              <motion.div
                key={BUSINESS_UNITS[activeUnit].id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-12 md:p-16 border border-white/5 relative bg-purple-deep/30"
            >
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-neon/10 blur-[100px] pointer-events-none" />
              
              <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
                <div className="p-6 bg-neon/10 rounded-sm border border-neon/30 text-neon shadow-[0_0_20px_rgba(0,255,204,0.1)] w-fit">
                  {BUSINESS_UNITS[activeUnit].icon}
                </div>
                <div>
                  <h3 className="font-tech text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-neon leading-none mb-4">
                    {BUSINESS_UNITS[activeUnit].title}
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-[0.2em] leading-relaxed max-w-2xl border-l-2 border-neon/50 pl-6">
                    {BUSINESS_UNITS[activeUnit].description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {BUSINESS_UNITS[activeUnit].items.map((item) => (
                  <div
                    key={item.title}
                    className="p-8 rounded-sm bg-[#0a0518]/60 border border-white/5 hover:border-neon/40 transition-all hover:bg-[#0a0518]/90 group"
                  >
                    <h4 className="font-tech font-black text-ice uppercase tracking-tight text-xl mb-4 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-electric rounded-full group-hover:bg-neon transition-colors" />
                      {item.title}
                    </h4>
                    
                    <p className="text-[10px] text-slate-500 mb-6 font-medium uppercase tracking-wider leading-relaxed">
                      {item.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.features.map(f => (
                        <span key={f} className="text-[8px] bg-white/5 text-slate-400 border border-white/10 px-3 py-1 rounded-sm uppercase font-black tracking-tighter hover:border-neon/50 hover:text-neon transition-colors">
                          • {f}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-4">
                 <button 
                  onClick={() => handleWhatsAppRedirect(BUSINESS_UNITS[activeUnit].title)}
                  className="btn-neon text-[10px] py-4 px-10"
                 >
                   Consultoría en {BUSINESS_UNITS[activeUnit].title.split('. ')[1]}
                 </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>


        {/* --- Re-Formate Profesional: Producto Estrella --- */}
        <section id="re-formate" className="max-w-7xl mx-auto mb-20 px-6">
          <div className="glass-card p-12 md:p-20 border-neon/30 bg-purple-deep/40 relative overflow-hidden group">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon/5 blur-[120px] -z-10 group-hover:bg-neon/10 transition-all duration-1000" />
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-8">
                  <div className="logo-reformate text-4xl md:text-5xl lg:text-6xl mb-2">Re-Formate</div>
                  <div className="flex items-center gap-4">
                    <span className="text-neon font-tech text-[10px] font-black uppercase tracking-[0.4em]">Actualizar tu Perfil con IA</span>
                    <div className="loading-bar-container max-w-[200px]">
                      <div className="loading-bar-fill" />
                    </div>
                  </div>
                </div>

                <h2 className="font-tech text-3xl md:text-5xl font-black text-ice leading-[1.0] uppercase italic tracking-tighter mb-6">
                   Borra lo obsoleto. <br /> <span className="neon-glow text-neon">Orquesta tu futuro</span>.
                </h2>
                
                <p className="text-ice font-bold text-lg mb-8 border-l-4 border-neon pl-6">
                  "Limpia tus procesos lentos, elimina las tareas manuales y actualiza tu perfil con IA. Pasa de ser un ejecutor a un profesional orquestando IAs."
                </p>

                <div className="space-y-6 text-slate-400 text-sm font-medium leading-relaxed max-w-lg mb-10">
                  <p>
                    Tu experiencia es el hardware, pero tu sistema operativo necesita un <span className="text-neon">Re-Formate</span>.
                  </p>
                  <p>
                    En el mundo actual, saber dar instrucciones no es suficiente; hay que saber orquestar. Re-Formate Profesional es el programa de Colconexus diseñado para que analistas, jefes y gerentes actualicen su perfil con IA.
                  </p>
                  <p>
                    Aprende a diseñar agentes personalizados, delega la carga operativa y optimiza costos reales. Deja de trabajar para el sistema y haz que la IA trabaje para ti.
                  </p>
                </div>

                <button 
                  onClick={() => handleWhatsAppRedirect("Iniciar Re-Formate Profesional")}
                  className="btn-roi text-[12px] py-5 px-12 group"
                >
                  INICIAR RE-FORMATE <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform ml-2 inline-block" />
                </button>
                <p className="text-[10px] text-slate-500 mt-4 uppercase font-black tracking-widest italic">
                  Actualiza tu perfil y empieza a orquestar hoy.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-obsidian/60 border border-white/5 p-8 rounded-sm">
                   <h4 className="font-tech text-xl font-black text-ice uppercase tracking-tight mb-8 flex items-center gap-3">
                     <Settings className="w-5 h-5 text-neon" /> Niveles de Instalación
                   </h4>
                   
                   <div className="space-y-4">
                     {[
                       { level: "Core Update", target: "Analistas", goal: "Automatizar reportes y limpieza de datos con agentes.", icon: <Cpu className="w-4 h-4" /> },
                       { level: "System Upgrade", target: "Coordinadores", goal: "Orquestar flujos de trabajo y comunicación entre IAs.", icon: <Layers className="w-4 h-4" /> },
                       { level: "Enterprise OS", target: "Jefes y Gerentes", goal: "Optimización de costos masiva delegando procesos a agentes.", icon: <Globe className="w-4 h-4" /> }
                     ].map((item) => (
                       <div key={item.level} className="p-6 bg-white/5 border border-white/5 hover:border-neon/30 transition-all rounded-sm group/item">
                         <div className="flex justify-between items-start mb-2">
                           <div className="flex items-center gap-3">
                             <div className="text-neon">{item.icon}</div>
                             <span className="font-tech font-black text-ice uppercase text-sm tracking-wide">{item.level}</span>
                           </div>
                           <span className="text-[9px] bg-neon/10 text-neon px-2 py-0.5 rounded-sm font-black uppercase tracking-tighter">{item.target}</span>
                         </div>
                         <p className="text-[11px] text-slate-500 font-medium leading-relaxed group-hover/item:text-slate-300 transition-colors">
                           {item.goal}
                         </p>
                       </div>
                     ))}
                   </div>

                   <div className="mt-10 p-6 bg-electric/5 border border-electric/20 rounded-sm">
                      <div className="text-electric font-tech text-[10px] font-black uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                        <BarChart3 className="w-4 h-4" /> Material Exclusivo
                      </div>
                      <p className="text-ice font-bold text-sm leading-tight uppercase tracking-tight">
                        "Re-Formate Profesional: El Manual para Orquestar IAs y Recuperar tu Tiempo."
                      </p>
                   </div>
                </div>
              </div>
            </div>
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
                Nuestros agentes de ingeniería ejecutan. Blindamos la rentabilidad mediante inteligencia que recalcula la eficiencia operativa en tiempo real usando Claude Gravity.
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

        {/* --- Calculadora ROI Section --- */}
        <section id="calculadora-roi" className="max-w-7xl mx-auto mb-20 px-6">
          <div className="glass-card overflow-hidden border-electric/30 bg-purple-deep/30">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center gap-6">
                <div className="flex items-center gap-3 px-3 py-1 bg-electric/10 border border-electric/30 w-fit">
                   <div className="w-2 h-2 bg-electric rounded-full animate-pulse shadow-[0_0_10px_#0088ff]" />
                   <span className="text-electric font-tech text-[9px] uppercase font-black tracking-[0.3em]">HERRAMIENTA DE INGENIERÍA</span>
                </div>
                <h2 className="font-tech text-3xl md:text-5xl font-black text-ice leading-[1.0] uppercase italic tracking-tighter">
                  Calcula tu <br /> <span className="electric-glow">Retorno de Inversión</span>.
                </h2>
                <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed max-w-lg">
                  Nuestra calculadora ROI permite proyectar el ahorro masivo al transicionar de fuerza humana a agentes de IA. Descubre cuánto estás pagando por la inercia operativa.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button 
                    onClick={() => window.open('/calculadora.html', '_blank')}
                    className="btn-roi text-[10px] py-3.5"
                  >
                    Abrir en Pantalla Completa
                  </button>
                </div>
              </div>
              <div className="bg-[#03030a] relative h-[400px] md:h-auto border-l border-white/5 overflow-hidden group">
                <div className="absolute inset-0 z-10 pointer-events-none border-[12px] border-[#03030a]" />
                <iframe 
                  src="/calculadora.html" 
                  className="w-full h-full border-none grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                  title="Calculadora ROI"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- Orquestación Refined --- */}
        <section className="max-w-7xl mx-auto mb-16 px-6">
           <div className="relative rounded-sm overflow-hidden border border-white/5 bg-purple-deep/20 group">
              <div className="grid md:grid-cols-12 h-full items-stretch">
                <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-center gap-4 relative z-10">
                  <h3 className="font-tech text-2xl md:text-4xl font-black text-ice uppercase italic tracking-tighter leading-[1.0]">
                    La IA no es Código, <br /> es <span className="neon-glow">Orquestación</span>.
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm font-medium tracking-tight max-w-md">
                    Entiende las herramientas; nosotros las unimos para ti creando un sistema cohesivo y escalable que responde a tu demanda industrial usando Protocolos de Contexto.
                  </p>
                  <button onClick={() => handleWhatsAppRedirect("Engine Orchestra")} className="btn-neon w-fit px-10 py-3 text-[10px]">Explorar Arquitectura</button>
                </div>
                <div className="md:col-span-5 relative min-h-[300px] border-l border-white/10 bg-obsidian flex items-center justify-center p-4">
                   <img 
                    src="/assets/orchestra-ai.jpg" 
                    alt="Orquestación" 
                    className="w-full h-full object-contain mix-blend-multiply brightness-110 group-hover:scale-105 transition-all duration-1000"
                   />
                </div>
              </div>
           </div>
        </section>

        {/* --- Diagnostic Refined --- */}
        <section id="diagnostico" className="max-w-7xl mx-auto mb-20 px-6">
           <div className="glass-card p-12 md:p-20 border-neon/20 relative overflow-hidden bg-purple-deep/40">
              <div className="absolute top-0 right-0 w-64 h-64 bg-neon/10 blur-[120px]" />
              <div className="max-w-3xl flex flex-col gap-6 relative z-10">
                <h2 className="font-tech text-4xl md:text-5xl font-black text-ice uppercase italic tracking-tighter leading-none">
                  Auditoría <span className="neon-glow text-neon">Final</span>.
                </h2>
                <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed uppercase tracking-wide">
                  ¿Tu operación está blindada o es un colador de dólares? Diagnóstico Colconexus Datacenter.
                </p>
                <button onClick={() => handleWhatsAppRedirect("Auditoría Final")} className="btn-neon w-fit mt-4">Iniciar Diagnóstico de Ingeniería</button>
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
              Blindando la rentabilidad corporativa mediante orquestación de datos e inteligencia artificial de grado industrial Claude Gravity.
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
                onClick={() => handleWhatsAppRedirect(`Auditoría Industrial: ${selectedRole.title}`)}
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
                      <span className="text-[9px] text-neon/60 font-black uppercase tracking-widest">Neural Link Activo</span>
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
