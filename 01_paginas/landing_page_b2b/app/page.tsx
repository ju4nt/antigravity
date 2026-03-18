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
    { role: 'bot', text: 'SYSTEM INITIALIZED. I am Colconexus Engineering Bot. Would you like to measure your automation level today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeUnit, setActiveUnit] = useState(0);
  
  const handleWhatsAppRedirect = (service = "") => {
    const text = service 
      ? `Hello Colconexus Team. I've used your diagnostic tool and I'm interested in: *${service}*. Can we schedule an engineering session?`
      : "Hello Colconexus. I would like to measure my automation level and request a technical audit.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const simulateBotResponse = (userText: string) => {
    setIsTyping(true);
    setTimeout(() => {
      let response = "Understood. Processing technical requirement...";
      if (userText.toLowerCase().includes("automation") || userText.toLowerCase().includes("automatización")) {
        response = "B2B automation is our core strength. We can reduce operational costs by up to 40% through data orchestration.";
      } else if (userText.toLowerCase().includes("cost") || userText.toLowerCase().includes("saving")) {
        response = "Our WFM Strategic and AI Agency solutions are designed to shield your profitability by eliminating perpetual expenses.";
      }
      setChatMessages(prev => [...prev, { role: 'bot', text: response }]);
      setIsTyping(false);
    }, 1500);
  };

  const IMPACT_SOLUTIONS = [
    { title: "Industrial Robot", desc: "Real-time process automation.", icon: <Bot className="w-5 h-5" /> },
    { title: "Expert Engineering", desc: "High-level talent and business Copilots.", icon: <Users className="w-5 h-5" /> },
    { title: "Speech Analytics", desc: "High-precision industrial vocal analysis.", icon: <Mic2 className="w-5 h-5" /> },
    { title: "Flow Auditors", desc: "Autonomous quality under B2B standards.", icon: <ShieldCheck className="w-5 h-5" /> }
  ];

  const BUSINESS_UNITS = [
    {
      id: "ai-agency",
      title: "1. AI AGENCY",
      description: "Development of specialized intelligent agents that automate corporate workflows using Claude Gravity & Google ML context models.",
      icon: <Bot className="w-8 h-8" />,
      items: [
        {
          title: "AI Voice Agents (Teams)",
          desc: "Voice agents capable of customer service, automated call centers, scheduling, and follow-ups through Context Protocols.",
          features: ["Customer Service Swarms", "Automated Call Center Teams", "Auto-Surveys", "Appointment Scheduling", "Client Follow-up Agents"]
        },
        {
          title: "AI Chat & Skill Agents",
          desc: "Intelligent assistants for digital channels with extensible Skills and Agent Registry.",
          features: ["Web Chatbots", "WhatsApp Business Agents", "Corporate Assistants", "Support Automation Skills"]
        },
        {
          title: "OCR Intelligent Processing",
          desc: "Automated document processing and cognitive data extraction.",
          features: ["Invoice Reading", "Data Extraction Protocols", "Document Digitalization", "Form Validation Agents"]
        },
        {
          title: "Computer Vision Agents",
          desc: "Advanced visual intelligence systems for secure identification and tracking.",
          features: ["Facial Recognition Teams", "Identity Validation", "Image Intelligence", "Object Detection Skills"]
        },
        {
          title: "AI Security Protocols",
          desc: "Smart security agents and proactive infrastructure surveillance.",
          features: ["Motion Detection Agents", "Automated Surveillance Teams", "Camera Monitoring Skills", "Security Alert Protocols"]
        }
      ]
    },
    {
      id: "data-hub",
      title: "2. DATA PRECISION HUB",
      description: "Industrial-grade infrastructure to transform raw data into specialized Business Intelligence using Google ML Notebooks.",
      icon: <Database className="w-8 h-8" />,
      items: [
        {
          title: "Industrial Data Pipelines",
          desc: "Real-time automated data flows using Medallion architecture.",
          features: ["ETL / ELT Protocols", "Data Integration Agents", "Automated Pipelines", "Real-time Ingestion Skills"]
        },
        {
          title: "Data Warehouse & Lake",
          desc: "Modern storage architectures for High-Availability context models.",
          features: ["Data Warehouse Design", "Data Lake Architecture", "Lakehouse Optimization"]
        },
        {
          title: "Business Intelligence",
          desc: "Automated dashboards and executive operational reporting.",
          features: ["Executive Dashboards", "Automated Reporting Teams", "KPI Monitoring Agents", "Enterprise Analytics"]
        },
        {
          title: "Advanced Data Analytics",
          desc: "Statistical analytics and industrial anomaly detection.",
          features: ["Statistical Analysis Skills", "Correlation Models", "Behavioral Analytics", "Anomaly Detection Agents"]
        },
        {
          title: "Predictive Engineering",
          desc: "Demand prediction and scoring models based on Google ML Notebooks.",
          features: ["Demand Prediction Agents", "Sales Forecasting Skills", "Client Scoring Systems", "Fraud Detection Protocols"]
        }
      ]
    },
    {
      id: "wfm-ops",
      title: "3. WFM OPERATIONS",
      description: "Optimization of personnel-intensive operations through Workforce Management and Strategic Scheduling.",
      icon: <BarChart className="w-8 h-8" />,
      items: [
        {
          title: "Forecasting Agents",
          desc: "Predictive demand models for contact centers.",
          features: ["Calls", "Chats", "Emails", "Social Media Teams"]
        },
        {
          title: "Capacity Planning",
          desc: "Personnel requirement calculation and scalable planning.",
          features: [
            "Long-term: Strategic Planning, Operation Expansion", 
            "Mid-term: Monthly Planning, Capacity Adjustments", 
            "Short-term: Weekly Tracking, Operational Redistribution"
          ]
        },
        {
          title: "Automated Rostering",
          desc: "Automatic shift generation and legal compliance.",
          features: ["Shift Assignment Agents", "Regulatory Compliance Skills", "Coverage Optimization"]
        },
        {
          title: "Strategic Scheduler",
          desc: "Mathematical optimization of shift patterns.",
          features: ["Optimized Shift Grids", "Dead-time Reduction", "Productivity Maximization Protocols"]
        },
        {
          title: "Workforce Analytics",
          desc: "Operational performance analysis and real-time tracking.",
          features: ["AHT Agents", "Service Level Skills", "Occupancy Metrics", "Productivity Teams", "Abandonment Analysis"]
        },
        {
          title: "Operational Pricing",
          desc: "Financial models for high-intensity operations.",
          features: ["Cost per Agent", "Cost per Contact", "Campaign Profitability Protocols"]
        },
        {
          title: "Outbound Optimization",
          desc: "Strategic outbound campaign management and dialer tuning.",
          features: [
            "Campaign Design: Segmentation, Targets, Contact Strategies", 
            "Intelligent Dialing: Predictive, Power, Preview dialing", 
            "Conversion Optimization: Script Analysis, Closing Protocols"
          ]
        }
      ]
    },
    {
      id: "consulting",
      title: "4. OPERATIONAL CONSULTING",
      description: "Strategic advisory and high-level operational auditing.",
      icon: <Briefcase className="w-8 h-8" />,
      items: [
        {
          title: "Operations Diagnosis",
          desc: "Integral evaluation of contact center infrastructure.",
          features: ["KPI Analysis", "Process Mapping Skills", "Efficiency Audits"]
        },
        {
          title: "Contact Center Design",
          desc: "Creation of greenfield operations from scratch.",
          features: ["Organizational Structure", "Process Definition Agents", "Technological Architecture Skills"]
        },
        {
          title: "Operational Optimization",
          desc: "Redesign to improve high-impact productivity.",
          features: ["Productivity & Efficiency Teams", "Structural Cost Reduction"]
        },
        {
          title: "Performance Auditing",
          desc: "Independent performance reviews and compliance checks.",
          features: ["KPI Auditing Agents", "Financial Correlation Skills", "Productivity Audits"]
        }
      ]
    },
    {
      id: "bpo-services",
      title: "5. BPO SERVICES",
      description: "Full-scale Business Process Outsourcing using AI Teams.",
      icon: <Users className="w-8 h-8" />,
      items: [
        {
          title: "BPO Contact Center",
          desc: "Omnichannel contact center operations managed by AI Teams.",
          features: [
            "Customer Support: Multichannel, Claims Management", 
            "Sales Operations: Telemarketing, Lead Generation Agents", 
            "Campaign Management: Inbound/Outbound, Database Protocols"
          ]
        },
        {
          title: "BPO Back Office",
          desc: "Administrative processes and specialized validation.",
          features: ["Document Processing Agents", "Data Management Skills", "Digitalization", "Document Validation"]
        },
        {
          title: "BPO Data Operations",
          desc: "Data operation, cleaning, and labeling for Google ML.",
          features: ["Data Cleaning Protocols", "Classification Agents", "AI Labeling Teams"]
        },
        {
          title: "Analytical BPO",
          desc: "Operational analytics and reporting services.",
          features: ["KPI Monitoring", "Performance Analysis Agents", "Operational Reporting Skills"]
        }
      ]
    },
    {
      id: "enterprise-sol",
      title: "6. ENTERPRISE SOLUTIONS",
      description: "Technological development and customized high-end software.",
      icon: <Cpu className="w-8 h-8" />,
      items: [
        {
          title: "Custom Functional Apps",
          desc: "Internal applications and enterprise-grade platforms.",
          features: ["Business Applications", "Management Platforms", "Internal Operating Systems"]
        },
        {
          title: "System Integration",
          desc: "Corporate ecosystem integration and cloud sync.",
          features: ["CRM Integration Protocols", "ERP Integration Skills", "Enterprise APIs"]
        },
        {
          title: "Business Automation",
          desc: "RPA flows and automated industrial processes.",
          features: ["RPA Agents", "Automated Workflows", "System Orchestration Teams"]
        }
      ]
    },
    {
      id: "smart-systems",
      title: "7. SMART SYSTEMS",
      description: "Advanced space automation and intelligent infrastructure (IoT).",
      icon: <HomeIcon className="w-8 h-8" />,
      items: [
        {
          title: "Smart Commercial Spaces",
          desc: "Advanced automation for industrial and commercial areas.",
          features: ["Lighting Control Agents", "Climate Control Skills", "Industrial Domotics"]
        },
        {
          title: "Intelligent Security",
          desc: "Smart electronic security and surveillance AI.",
          features: ["Smart Cameras", "Motion Sensor Teams", "Facial Recognition Protocols"]
        },
        {
          title: "Smart Building Management",
          desc: "Energy efficiency and IoT management protocols.",
          features: ["Energy Auditing Agents", "Infrastructure Monitoring", "IoT Management Skills"]
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
            onClick={() => handleWhatsAppRedirect("Engineering Inquiry")}
            className="hidden sm:block bg-[#080315] text-neon px-4 py-1 text-[9px] font-tech font-black uppercase tracking-tighter hover:scale-105 transition-transform"
          >
            Start Project
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
                Request Engineering
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
                MEASURE YOUR <br /> <span className="neon-glow">AUTOMATION LEVEL.</span>
              </h1>
              
              <p className="text-slate-400 text-xs md:text-sm font-medium leading-relaxed max-w-lg">
                Don't leave profitability to chance. Our precision engineering audits your processes and deploys autonomous robots that eliminate operational inertia immediately.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => {
                    const el = document.getElementById('diagnostico');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-neon text-[10px] py-3.5"
                >
                  Audit Your Level Now
                </button>
                <button 
                  onClick={() => handleWhatsAppRedirect("Tech Demo")}
                  className="btn-purple text-[10px] py-3.5"
                >
                  Watch Tech Demo
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
                Paying for <br /> <span className="neon-glow">Talent</span> or for <span className="text-slate-700 font-extrabold text-shadow-sm">Inertia</span>?
              </h2>
              <p className="electric-glow font-tech text-[10px] font-bold mb-4 uppercase tracking-tighter">
                AI = One-time Investment // Human = Perpetual Expense
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
                    alt="Talent vs Inertia" 
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
              <h2 className="font-tech text-4xl font-black text-ice uppercase italic tracking-tighter">Service Portfolio</h2>
              <div className="flex items-center gap-4 text-neon font-bold text-[9px] uppercase tracking-[0.5em]">
                <span>DATA</span> <span className="opacity-30">•</span> <span>AI</span> <span className="opacity-30">•</span> <span>CONTACT CENTER</span> <span className="opacity-30">•</span> <span>BPO</span> <span className="opacity-30">•</span> <span>SMART SYSTEMS</span>
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
                   Consulting in {BUSINESS_UNITS[activeUnit].title.split('. ')[1]}
                 </button>
              </div>
            </motion.div>
          </AnimatePresence>
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
                Autonomous <span className="neon-glow">Audit</span>
              </h2>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">
                Our engineering agents execute. We shield profitability through intelligence that recalculates operational efficiency in real-time.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="font-tech text-2xl font-black text-neon mb-1 tracking-tighter">0.8ms</div>
                  <div className="text-[8px] text-electric font-black uppercase tracking-widest">Latency</div>
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
                <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-center gap-4 relative z-10">
                  <h3 className="font-tech text-2xl md:text-4xl font-black text-ice uppercase italic tracking-tighter leading-[1.0]">
                    AI is not Code, <br /> it's <span className="neon-glow">Orchestration</span>.
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm font-medium tracking-tight max-w-md">
                    Understand the tools; we unite them for you to create a cohesive and scalable system that meets your industrial demand using Context Protocols.
                  </p>
                  <button onClick={() => handleWhatsAppRedirect("Engine Orchestra")} className="btn-neon w-fit px-10 py-3 text-[10px]">Explore Architecture</button>
                </div>
                <div className="md:col-span-5 relative min-h-[300px] border-l border-white/10 bg-obsidian flex items-center justify-center p-4">
                   <img 
                    src="/assets/orchestra-ai.jpg" 
                    alt="Orchestration" 
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
                  Final <span className="neon-glow text-neon">Audit</span>.
                </h2>
                <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed uppercase tracking-wide">
                  Is your operation shielded or a money sieve? Colconexus Datacenter Diagnostic.
                </p>
                <button onClick={() => handleWhatsAppRedirect("Final Audit")} className="btn-neon w-fit mt-4">Start Engineering Diagnostic</button>
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
              Does your company use 
            </h2>
            <div className="xxi-glow mb-4 text-6xl md:text-8xl">21ST</div>
            <h2 className="font-tech text-2xl md:text-4xl font-black mb-10 leading-tight tracking-[0.05em] text-slate-700 uppercase italic">
              Century tools or 19th Century methods?
            </h2>
            <p className="text-neon/60 text-[9px] md:text-[11px] font-black mb-12 max-w-2xl mx-auto uppercase tracking-[0.5em] leading-relaxed">
              DISCOVER IT WITH OUR PRO DIGITAL DIAGNOSTIC TEST.
            </p>
            <a
              href="https://forms.gle/6mRAKsnYVZowXiAD6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-6 px-12 py-6 btn-neon text-sm md:text-lg group"
            >
              TAKE DIAGNOSTIC TEST
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
            We eliminate the ceiling on your productivity. <br />
            Strategic auditing and massive automation deployment.
          </p>

          <button
            onClick={() => handleWhatsAppRedirect("Tech Hub Finish")}
            className="px-12 py-6 btn-neon text-sm md:text-base mx-auto relative z-10 group"
          >
            REQUEST PERFORMANCE AUDIT
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
              Shielding corporate profitability through data orchestration and industrial-grade Claude Gravity AI Agents.
            </p>
            <button
              onClick={() => handleWhatsAppRedirect("Audit 2026")}
              className="btn-neon w-fit px-12 py-5 text-xs mt-4"
            >
              Start Process Audit
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
                AUTHORIZE TECHNICAL DEPLOYMENT <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
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
                    const txt = "How do I measure my automation level?";
                    setChatMessages(prev => [...prev, { role: 'user', text: txt }]);
                    simulateBotResponse(txt);
                  }}
                  className="w-full py-4 border border-white/10 hover:border-neon/50 text-slate-500 hover:text-neon transition-all rounded-sm text-[10px] font-black uppercase tracking-widest"
                >
                  How to measure my automation?
                </button>
                <button 
                  onClick={() => handleWhatsAppRedirect("AI Consulting")}
                  className="btn-neon w-full py-4 text-[10px]"
                >
                  Talk to an Engineer
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
