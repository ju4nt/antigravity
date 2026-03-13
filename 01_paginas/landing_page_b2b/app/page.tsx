"use client";

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
      icon: <Bot className="w-10 h-10 text-blue-400" />,
      popular: true
    },
    {
      title: "Data Master Business",
      description: "Plantas Telefónicas IP, Telefonía en la Nube y Centrales Virtuales. Unifica todas las comunicaciones de tu empresa sin cortes.",
      icon: <PhoneCall className="w-10 h-10 text-purple-400" />,
      popular: false
    },
    {
      title: "Desarrollo a Medida",
      description: "Aplicaciones Móviles, Páginas Web y Software (CRM/ERP) ajustado exactamente a tus reglas de negocio.",
      icon: <Code2 className="w-10 h-10 text-emerald-400" />,
      popular: false
    },
    {
      title: "Integraciones B2B",
      description: "Conectamos tu ecosistema: Meta, Facebook, Videollamadas, CRMs e IA para que funcionen como un solo sistema.",
      icon: <Share2 className="w-10 h-10 text-pink-400" />,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Orbs — CSS only, zero JS */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Bot className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Colconexus Datacenter
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#servicios" className="text-gray-400 hover:text-white transition-colors">Servicios</a>
            <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</a>
            <button 
              onClick={() => handleWhatsAppRedirect()}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-blue-500/25"
            >
              Hablar con un Asesor
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-sm font-medium text-blue-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Agencia de IA Profesionales
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Profesionales de IA <br className="hidden md:block" />
            trabajando en tu PC{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              24/7 Ininterrumpido
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Especialistas en Data Business, Plantas Telefónicas y Desarrollo a Medida. Transformamos operaciones ordinarias en ecosistemas hiper-productivos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleWhatsAppRedirect()}
              className="group px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2"
            >
              Agendar Demo por WhatsApp
              <MessageSquare className="w-5 h-5" />
            </button>
            <a 
              href="#servicios"
              className="px-8 py-4 glass-effect hover:bg-white/5 rounded-xl font-bold text-lg transition-colors text-white text-center"
            >
              Ver Soluciones
            </a>
          </div>
        </section>

        {/* Services */}
        <section id="servicios" className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios Core</h2>
            <p className="text-gray-400">Soluciones de alto rendimiento para empresas exigentes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                onClick={() => handleWhatsAppRedirect(service.title)}
                className="group relative p-8 rounded-3xl glass-effect cursor-pointer hover:-translate-y-1 transition-transform duration-200"
              >
                {service.popular && (
                  <div className="absolute top-6 right-8 px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30">
                    MÁS SOLICITADO
                  </div>
                )}
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                <div className="flex items-center gap-2 text-sm font-bold text-white/60 group-hover:text-white transition-colors">
                  Solicitar este servicio <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contacto" className="max-w-5xl mx-auto px-6 py-20">
          <div className="p-1 rounded-3xl bg-gradient-to-br from-blue-500/40 to-purple-500/40">
            <div className="bg-slate-900 rounded-[22px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para evolucionar?</h2>
                <p className="text-gray-400 mb-8">
                  Un especialista evaluará tu caso hoy mismo.
                </p>
                <div className="flex flex-col gap-3 text-gray-300 mb-8">
                  <a href="mailto:colconexus_datacenter_sas@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                    <Mail className="w-5 h-5 shrink-0" /> colconexus_datacenter_sas@gmail.com
                  </a>
                  <div className="flex items-center gap-3">
                    <PhoneCall className="w-5 h-5 shrink-0" /> +57 321 437 8318
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/company/colconexus-datacenter-sas/" target="_blank" rel="noreferrer"
                    className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Linkedin className="w-5 h-5 text-[#0077b5]" />
                  </a>
                  <a href="https://facebook.com/Colconexus_Datacenter_sas" target="_blank" rel="noreferrer"
                    className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-colors">
                    <Facebook className="w-5 h-5 text-[#1877f2]" />
                  </a>
                </div>
              </div>
              <button 
                onClick={() => handleWhatsAppRedirect()}
                className="w-full md:w-auto px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl font-bold text-xl transition-colors flex items-center justify-center gap-3 shrink-0"
              >
                <MessageSquare className="w-6 h-6" />
                Chatear en WhatsApp
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
