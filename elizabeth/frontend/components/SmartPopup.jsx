"use client";
/**
 * elizabeth/frontend/components/SmartPopup.jsx
 * Panel lateral glassmorphism con la ficha del cliente en tiempo real.
 * Se actualiza vía WebSocket cada vez que llega una interacción nueva.
 */
import { useEffect, useState } from "react";

const CANAL_ICONS = {
  voz: "📞", whatsapp: "💬", instagram: "📸", facebook: "🔵", tiktok: "🎵"
};
const SENTIMIENTO = {
  enojado: { emoji: "😡", color: "text-red-400" },
  feliz:   { emoji: "😊", color: "text-green-400" },
  neutral: { emoji: "😐", color: "text-yellow-400" },
};

export default function SmartPopup({ agenteId }) {
  const [popup, setPopup] = useState(null);
  const [conectado, setConectado] = useState(false);

  useEffect(() => {
    if (!agenteId) return;
    const wsUrl = `${process.env.NEXT_PUBLIC_WS_URL}/${agenteId}`;
    const ws = new WebSocket(wsUrl);

    ws.onopen  = () => setConectado(true);
    ws.onclose = () => setConectado(false);
    ws.onmessage = (e) => {
      try { setPopup(JSON.parse(e.data)); }
      catch { /* ignorar */ }
    };
    return () => ws.close();
  }, [agenteId]);

  if (!popup) return (
    <div className="flex items-center gap-2 p-4 text-gray-400 text-sm">
      <span className={`w-2 h-2 rounded-full ${conectado ? "bg-green-400" : "bg-gray-500"}`}/>
      {conectado ? "En espera de contacto..." : "Conectando..."}
    </div>
  );

  const { cliente, canal, mensaje_actual, historial = [] } = popup;
  const sent = SENTIMIENTO[historial[0]?.sentimiento] || SENTIMIENTO.neutral;

  return (
    <div className="
      fixed top-4 right-4 w-96 z-50
      bg-white/10 backdrop-blur-xl border border-white/20
      rounded-2xl shadow-2xl text-white p-5 space-y-4
      animate-slide-in
    ">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{CANAL_ICONS[canal] || "📡"}</span>
          <div>
            <p className="font-bold text-lg leading-tight">{cliente?.nombre || "Desconocido"}</p>
            <p className="text-xs text-gray-300">{cliente?.documento || cliente?.phone_id}</p>
          </div>
        </div>
        <span className={`text-2xl ${sent.color}`}>{sent.emoji}</span>
      </div>

      {/* Segmento badge */}
      {cliente?.segmento && (
        <span className={`
          inline-block px-3 py-1 rounded-full text-xs font-semibold
          ${cliente.segmento === "vip" ? "bg-yellow-500/30 text-yellow-300" :
            cliente.segmento === "deudor" ? "bg-red-500/30 text-red-300" :
            "bg-blue-500/20 text-blue-300"}
        `}>
          {cliente.segmento.toUpperCase()}
        </span>
      )}

      {/* Mensaje actual */}
      {mensaje_actual && (
        <div className="bg-white/10 rounded-xl p-3 text-sm italic">
          "{mensaje_actual}"
        </div>
      )}

      {/* Historial reciente */}
      {historial.length > 0 && (
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Últimas interacciones</p>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {historial.map((h, i) => (
              <div key={i} className="bg-white/5 rounded-lg p-2 text-xs">
                <p className="text-gray-300">{h.fecha?.slice(0,10)}</p>
                <p className="text-white/80">{h.resumen || "Sin resumen"}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Canales disponibles del cliente */}
      {cliente?.social_handles && (
        <div className="flex gap-2 flex-wrap">
          {Object.entries(cliente.social_handles).map(([red, id]) => (
            <span key={red} className="bg-white/10 px-2 py-1 rounded-lg text-xs">
              {CANAL_ICONS[red]} {red}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
