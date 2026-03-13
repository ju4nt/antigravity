"use client";

import { useState, useEffect, useCallback } from "react";
import { 
  Bot, 
  PhoneCall, 
  Code2, 
  Share2, 
  MessageSquare,
  Facebook,
  Linkedin,
  Mail,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const services = [
  {
    title: "Data Business",
    subtitle: "IA & Agentes Virtuales",
    description: "Profesionales de IA trabajando en tu PC 24/7. Automatizamos ventas, soporte y atención al cliente con bots hiper-realistas que nunca descansan.",
    icon: <Bot className="w-14 h-14 text-blue-400" />,
    color: "from-blue-600/30 to-blue-900/10",
    accent: "#3B82F6",
    popular: true,
    whatsappService: "Data Business (IA & Agentes)"
  },
  {
    title: "Data Master Business",
    subtitle: "Plantas Telefónicas VoIP",
    description: "Centrales Telefónicas IP en la Nube, Telefonía sin cortes y Comunicaciones Unificadas para toda tu empresa desde un solo panel.",
    icon: <PhoneCall className="w-14 h-14 text-purple-400" />,
    color: "from-purple-600/30 to-purple-900/10",
    accent: "#8B5CF6",
    popular: false,
    whatsappService: "Data Master Business (Planta Telefónica)"
  },
  {
    title: "Desarrollo a Medida",
    subtitle: "Apps Móviles & Web",
    description: "CRMs, ERPs, Aplicaciones Móviles y Páginas Web diseñadas exactamente para tus reglas de negocio. Sin plantillas genéricas.",
    icon: <Code2 className="w-14 h-14 text-emerald-400" />,
    color: "from-emerald-600/30 to-emerald-900/10",
    accent: "#10B981",
    popular: false,
    whatsappService: "Desarrollo de Apps y Software a Medida"
  },
  {
    title: "Integraciones B2B",
    subtitle: "Meta · WhatsApp · CRMs",
    description: "Conectamos tu ecosistema completo: Meta, Facebook, Videollamadas, APIs externas y herramientas IA para que funcionen como un solo sistema centralizado.",
    icon: <Share2 className="w-14 h-14 text-pink-400" />,
    color: "from-pink-600/30 to-pink-900/10",
    accent: "#EC4899",
    popular: false,
    whatsappService: "Integraciones B2B y Meta"
  }
];

export default function Home() {
  const WHATSAPP_NUMBER = "573214378318";
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handleWhatsAppRedirect = (service = "") => {
    const text = service 
      ? `Hola equipo de Colconexus. Estoy interesado en el servicio de ${service}. Me gustaría agendar una reunión o conocer más detalles.`
      : "Hola equipo de Colconexus. Me gustaría conocer más sobre sus servicios de Data Business e Inteligencia artificial.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 400);
  }, [animating]);

  const next = useCallback(() => goTo((current + 1) % services.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + services.length) % services.length), [current, goTo]);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const svc = services[current];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Orbs */}
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
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-20 text-center">
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
            Especialistas en Data Business, Plantas Telefónicas y Desarrollo a Medida. Transformamos operaciones en ecosistemas hiper-productivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleWhatsAppRedirect()}
              className="px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2"
            >
              Agendar Demo <MessageSquare className="w-5 h-5" />
            </button>
            <a href="#servicios" className="px-8 py-4 glass-effect hover:bg-white/5 rounded-xl font-bold text-lg transition-colors text-white text-center">
              Ver Soluciones
            </a>
          </div>
        </section>

        {/* Services Slider */}
        <section id="servicios" className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Nuestros Servicios</h2>
            <p className="text-gray-400">Soluciones de alto rendimiento para empresas exigentes</p>
          </div>

          {/* Main Slider Card */}
          <div
            className={`relative rounded-3xl glass-effect overflow-hidden transition-opacity duration-300 ${animating ? "opacity-0" : "opacity-100"}`}
          >
            {/* Gradient background from service color */}
            <div className={`absolute inset-0 bg-gradient-to-br ${svc.color} pointer-events-none`} />
            
            <div className="relative p-10 md:p-14">
              {svc.popular && (
                <div className="absolute top-6 right-8 px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold rounded-full border border-blue-500/30">
                  MÁS SOLICITADO
                </div>
              )}

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Icon */}
                <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  {svc.icon}
                </div>

                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-sm font-semibold uppercase tracking-widest mb-1" style={{ color: svc.accent }}>
                    {svc.subtitle}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{svc.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">{svc.description}</p>
                  <button
                    onClick={() => handleWhatsAppRedirect(svc.whatsappService)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-colors"
                    style={{ backgroundColor: svc.accent + "33", border: `1px solid ${svc.accent}55` }}
                  >
                    <MessageSquare className="w-4 h-4" />
                    Consultar por WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-3">
              {services.map((s, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "32px" : "8px",
                    backgroundColor: i === current ? s.accent : "#ffffff33"
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-3 mt-6">
            {services.map((s, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`p-4 rounded-2xl glass-effect text-center transition-all duration-200 ${i === current ? "ring-1" : "opacity-50 hover:opacity-80"}`}
                style={{ ringColor: s.accent }}
              >
                <div className="flex justify-center mb-2 scale-75">{s.icon}</div>
                <p className="text-xs font-semibold leading-tight">{s.title}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contacto" className="max-w-5xl mx-auto px-6 py-20">
          <div className="p-1 rounded-3xl bg-gradient-to-br from-blue-500/40 to-purple-500/40">
            <div className="bg-slate-900 rounded-[22px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para evolucionar?</h2>
                <p className="text-gray-400 mb-8">Un especialista evaluará tu caso hoy mismo.</p>
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
