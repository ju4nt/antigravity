"use client";

import { motion } from "framer-motion";
import { 
  Bot, 
  PhoneCall, 
  Code2, 
  Share2, 
  ChevronRight, 
  MessageSquare,
  Facebook,
  Linkedin,
  Mail
} from "lucide-react";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(() => import("./components/ParticleBackground"), { ssr: false });

export default function Home() {
  const WHATSAPP_NUMBER = "573214378318";
  
  const handleWhatsAppRedirect = (service = "") => {
    const text = service 
      ? `Hola equipo de Colconexus. Estoy interesado en el servicio de ${service}. Me gustaría agendar una reunión o conocer más detalles.`
      : "Hola equipo de Colconexus. Me gustaría conocer más sobre sus servicios de Data Business e Inteligencia artificial.";
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const services = [
    {
      title: "Data Business (IA & Agentes)",
      description: "Agencia de IA con profesionales virtuales en tu PC. Automatizamos ventas, atención al cliente y soporte 24/7 con bots hiper-realistas.",
      icon: <Bot className="w-10 h-10 text-primary" />,
      color: "from-blue-500/20 to-transparent",
      popular: true
    },
    {
      title: "Data Master Business",
      description: "Plantas Telefónicas IP, Telefonía en la Nube y Centrales Virtuales. Unifica todas las comunicaciones de tu empresa sin cortes.",
      icon: <PhoneCall className="w-10 h-10 text-accent" />,
      color: "from-purple-500/20 to-transparent",
      popular: false
    },
    {
      title: "Desarrollo a Medida",
      description: "Desarrollo de Aplicaciones Móviles, Páginas Web y Software (CRM/ERP) ajustado exactamente a tus reglas de negocio.",
      icon: <Code2 className="w-10 h-10 text-emerald-400" />,
      color: "from-emerald-500/20 to-transparent",
      popular: false
    },
    {
      title: "Integraciones B2B",
      description: "Conectamos todo tu ecosistema: Meta, Facebook, Videollamadas, CRMs e IA para que trabajen como un solo sistema centralizado.",
      icon: <Share2 className="w-10 h-10 text-pink-400" />,
      color: "from-pink-500/20 to-transparent",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950">
      {/* Interactive 3D Particle Canvas */}
      <ParticleBackground />
      
      {/* Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/15 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/15 blur-[120px] pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-card-border/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <Bot className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-gradient">Colconexus Datacenter</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#servicios" className="text-gray-300 hover:text-white transition-colors">Servicios</a>
            <a href="#contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</a>
            <button 
              onClick={() => handleWhatsAppRedirect()}
              className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              Hablar con un Asesor
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-sm font-medium text-blue-300 mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            Agencia de IA Profesionales
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight max-w-4xl"
          >
            Profesionales de IA trabajando en tu PC <br className="hidden md:block" />
            <span className="text-gradient">24/7 Ininterrumpido</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
          >
            Especialistas en Data Business, Plantas Telefónicas y Desarrollo a Medida. Transformamos operaciones ordinarias en ecosistemas híper-productivos.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={() => handleWhatsAppRedirect()}
              className="group px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-xl font-bold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Agendar Demo por WhatsApp
              <MessageSquare className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="#servicios"
              className="px-8 py-4 glass-effect hover:bg-white/5 rounded-xl font-bold text-lg transition-all text-white flex items-center justify-center"
            >
              Ver Soluciones
            </a>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios Core</h2>
            <p className="text-gray-400">Soluciones de alto rendimiento para empresas exigentes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-8 rounded-3xl glass-effect overflow-hidden cursor-pointer"
                onClick={() => handleWhatsAppRedirect(service.title)}
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${service.color} -z-10 blur-3xl`} />
                
                {service.popular && (
                  <div className="absolute top-6 right-8 px-3 py-1 bg-primary/20 text-blue-400 text-xs font-bold rounded-full border border-primary/30">
                    MÁS SOLICITADO
                  </div>
                )}
                
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:border-white/20 transition-colors">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                
                <div className="flex items-center gap-2 text-sm font-bold text-white/70 group-hover:text-white transition-colors">
                  Solicitar este servicio <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact/Action Section */}
        <section id="contacto" className="max-w-5xl mx-auto px-6 py-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-1 rounded-3xl bg-gradient-to-br from-primary/50 to-accent/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10" />
            
            <div className="bg-[#0f172a] rounded-[22px] p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
              <div className="flex-1">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Listo para evolucionar?</h2>
                <p className="text-xl text-gray-400 mb-8">
                  Escríbenos directamente a nuestro WhatsApp oficial y un especialista evaluará tu caso hoy mismo.
                </p>
                
                <div className="flex flex-col gap-4 mb-8 text-gray-300">
                  <a href="mailto:colconexus_datacenter_sas@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                    <Mail className="w-5 h-5" /> colconexus_datacenter_sas@gmail.com
                  </a>
                  <div className="flex items-center gap-3">
                    <PhoneCall className="w-5 h-5" /> +57 321 437 8318
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/company/colconexus-datacenter-sas/about/?viewAsMember=true" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Linkedin className="w-5 h-5 text-[#0077b5]" />
                  </a>
                  <a href="https://facebook.com/Colconexus_Datacenter_sas" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Facebook className="w-5 h-5 text-[#1877f2]" />
                  </a>
                </div>
              </div>

              <div className="w-full md:w-auto">
                <button 
                  onClick={() => handleWhatsAppRedirect()}
                  className="w-full md:w-auto px-10 py-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white rounded-2xl font-bold text-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center justify-center gap-3"
                >
                  <MessageSquare className="w-6 h-6" />
                  Chatear en WhatsApp
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">Respuesta en menos de 5 minutos</p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
