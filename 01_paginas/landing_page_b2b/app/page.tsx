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
import CircuitBackground from "./components/CircuitBackground";

export default function Home() {
  const WHATSAPP_NUMBER = "573214378318";
  
  const handleWhatsAppRedirect = (service = "") => {
    const text = service 
      ? `Hola equipo de Colconexus Datacenter SAS. Mi nombre es [Tu nombre] y estoy interesado en el servicio: *${service}*. Me gustaría agendar una conversación o conocer más detalles. ¡Gracias!`
      : "Hola equipo de Colconexus Datacenter SAS. Estoy interesado en conocer más sobre sus servicios de Inteligencia Artificial y Agentes IA. ¡Gracias!";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const services = [
    {
      title: "Data Business — IA & Agentes",
      description: "Agencia de IA con profesionales virtuales trabajando en tu empresa 24/7. Automatizamos ventas, soporte y atención al cliente con agentes hiper-inteligentes.",
      icon: <Bot className="w-10 h-10 text-blue-400" />,
      borderColor: "hover:border-blue-500/60",
      glowColor: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]",
      popular: true
    },
    {
      title: "Data Master Business — Telefonía",
      description: "Plantas Telefónicas IP y Centrales en la Nube (VoIP). Unifica todas las comunicaciones de tu empresa con tecnología de clase mundial.",
      icon: <PhoneCall className="w-10 h-10 text-purple-400" />,
      borderColor: "hover:border-purple-500/60",
      glowColor: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]",
      popular: false
    },
    {
      title: "Desarrollo de Apps Móviles & Web",
      description: "Creamos aplicaciones móviles (iOS/Android) y sitios web a tu medida con CRM y ERP integrados para escalar tu negocio.",
      icon: <Code2 className="w-10 h-10 text-emerald-400" />,
      borderColor: "hover:border-emerald-500/60",
      glowColor: "group-hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]",
      popular: false
    },
    {
      title: "Integraciones Empresariales B2B",
      description: "Conectamos Meta, Facebook, WhatsApp Business, Sistemas de Videollamada y más para que tu empresa opere como un ecosistema centralizado.",
      icon: <Share2 className="w-10 h-10 text-pink-400" />,
      borderColor: "hover:border-pink-500/60",
      glowColor: "group-hover:shadow-[0_0_40px_rgba(244,114,182,0.25)]",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#020617]">
      {/* === Animated Circuit Background === */}
      <CircuitBackground />

      {/* Deep overlay for readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#020617]/60 via-transparent to-[#020617]/80 pointer-events-none z-[1]" />

      {/* === Navbar === */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5" style={{ background: "rgba(2,6,23,0.85)", backdropFilter: "blur(16px)" }}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 blur-sm opacity-70" />
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Bot className="text-white w-6 h-6" />
              </div>
            </div>
            <div>
              <span className="text-base font-bold tracking-tight text-white">Colconexus</span>
              <span className="text-base font-bold tracking-tight text-gradient"> Datacenter</span>
              <div className="text-[10px] text-gray-500 leading-none">SAS</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</a>
            <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a>
            <button 
              onClick={() => handleWhatsAppRedirect()}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(99,102,241,0.4)]"
            >
              Hablar con un Asesor
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20">
        {/* === Hero Section === */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm font-medium text-purple-300 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
            </span>
            Agencia de IA — Profesionales Virtuales
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1] max-w-5xl"
          >
            Profesionales de IA&nbsp;
            <br className="hidden md:block" />
            trabajando en tu empresa&nbsp;
            <span className="text-gradient">24/7</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed"
          >
            Especializados en <strong className="text-white">Data Business</strong> (Agentes IA), <strong className="text-white">Data Master Business</strong> (Telefonía VoIP), desarrollo de Apps y automatizaciones empresariales B2B.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleWhatsAppRedirect()}
              className="group px-9 py-4 bg-white text-black rounded-xl font-black text-lg transition-all flex items-center justify-center gap-2.5 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            >
              <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform text-green-600" />
              Agendar Demo por WhatsApp
            </motion.button>
            <motion.a 
              whileHover={{ scale: 1.03, y: -2 }}
              href="#servicios"
              className="px-9 py-4 border border-white/15 hover:border-white/30 bg-white/5 rounded-xl font-bold text-lg transition-all text-white flex items-center justify-center"
            >
              Ver Soluciones <ChevronRight className="w-5 h-5 ml-1" />
            </motion.a>
          </motion.div>
        </section>

        {/* === Services Section === */}
        <section id="servicios" className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Nuestros Servicios Core</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">Tecnología de primer nivel para empresas que no se conforman con lo ordinario</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, rotateX: 2, scale: 1.01 }}
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                className={`group relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 ${service.borderColor} ${service.glowColor} overflow-hidden cursor-pointer transition-all duration-300`}
                onClick={() => handleWhatsAppRedirect(service.title)}
              >
                {service.popular && (
                  <div className="absolute top-6 right-6 px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-black rounded-full border border-blue-500/30 tracking-widest uppercase">
                    Más solicitado
                  </div>
                )}
                
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:border-white/20 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-black mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6 text-base">{service.description}</p>
                
                <div className="flex items-center gap-2 text-sm font-bold text-gray-500 group-hover:text-white transition-colors duration-300">
                  Solicitar este servicio <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* === Contact Section === */}
        <section id="contacto" className="max-w-5xl mx-auto px-6 py-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-px rounded-3xl overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.5), rgba(168,85,247,0.5))" }}
          >
            <div className="bg-[#080d1e] rounded-[22px] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1">
                <p className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-3">¿Listo para crecer?</p>
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight">
                  Un asesor te espera<br />en WhatsApp
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Respuesta garantizada en menos de 5 minutos. Cuéntanos tu proyecto y empezamos hoy.
                </p>
                
                <div className="flex flex-col gap-3 mb-8 text-gray-400 text-sm">
                  <a href="mailto:colconexus_datacenter_sas@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                    <Mail className="w-4 h-4 text-purple-400" /> colconexus_datacenter_sas@gmail.com
                  </a>
                  <div className="flex items-center gap-3">
                    <PhoneCall className="w-4 h-4 text-blue-400" /> +57 321 437 8318
                  </div>
                </div>

                <div className="flex gap-3">
                  <motion.a 
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="https://www.linkedin.com/company/colconexus-datacenter-sas/about/?viewAsMember=true" 
                    target="_blank" rel="noreferrer" 
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10 transition-all"
                  >
                    <Linkedin className="w-5 h-5 text-[#0077b5]" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="https://facebook.com/Colconexus_Datacenter_sas" 
                    target="_blank" rel="noreferrer" 
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-[#1877f2]/50 hover:bg-[#1877f2]/10 transition-all"
                  >
                    <Facebook className="w-5 h-5 text-[#1877f2]" />
                  </motion.a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleWhatsAppRedirect()}
                  className="px-10 py-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl font-black text-xl transition-all shadow-[0_0_40px_rgba(16,185,129,0.35)] flex items-center gap-3 whitespace-nowrap"
                >
                  <MessageSquare className="w-6 h-6" />
                  Escribir en WhatsApp
                </motion.button>
                <p className="text-gray-600 text-xs">Respuesta en menos de 5 minutos</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="max-w-7xl mx-auto px-6 py-8 border-t border-white/5 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Colconexus Data Center SAS. Todos los derechos reservados.
        </footer>
      </main>
    </div>
  );
}
