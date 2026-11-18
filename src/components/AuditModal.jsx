import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Zap, 
  Server, 
  Database, 
  Layers,
  Send
} from 'lucide-react';

export default function AuditModal({ isOpen, onClose }) {
  const [formSent, setFormSent] = useState(false);
  const [contactEmail, setContactEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      onClose();
    }, 2800);
  };

  const fases = [
    {
      fase: 'Fase 1 (Días 1-7)',
      horas: '50h',
      title: 'Profiling de Drupal y PHP',
      icon: Layers,
      items: ['Análisis de llamadas a base de datos y cuellos de botella', 'Revisión de módulos custom y dependencias obsoletas', 'Auditoría de logs de errores y consumo de memoria']
    },
    {
      fase: 'Fase 2 (Días 8-14)',
      horas: '50h',
      title: 'Optimización de Consultas Espaciales',
      icon: Database,
      items: ['Ajuste fino de índices GiST/SP-GiST en PostgreSQL/PostGIS', 'Optimización de respuestas GeoJSON/WFS en visores', 'Normalización de capas vectoriales pesadas']
    },
    {
      fase: 'Fase 3 (Días 15-21)',
      horas: '50h',
      title: 'Aceleración Varnish & Redis',
      icon: Zap,
      items: ['Configuración de políticas de purga inteligente por tags', 'Caché de consultas estadísticas frecuentes en Redis', 'Compresión Brotli y optimización de assets estáticos']
    },
    {
      fase: 'Fase 4 (Días 22-30)',
      horas: '50h',
      title: 'Pruebas de Estrés e Informe Ejecutivo',
      icon: Server,
      items: ['Test de carga simulando 5.000 usuarios concurrentes', 'Elaboración del informe de hallazgos y plan de mejoras', 'Presentación presencial en la sede del IECA']
    }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-[#0F3B23] via-[#1A5C38] to-[#0A2617] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-bold border border-amber-400/30">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block">
                  Mejora Ofertada Sin Cargo · IECA
                </span>
                <h3 className="text-xl font-bold text-white">
                  Estudio Inicial de Rendimiento (200h)
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700">
            
            <div className="bg-[#EDF7F1] rounded-2xl p-4 border border-[#1A5C38]/20 text-xs text-[#1A5C38] leading-relaxed">
              <strong>Compromiso Contractual Firme:</strong> FimoSoft S.L. pone a disposición del IECA a su Arquitecto de Sistemas senior durante 200 horas efectivas sin facturación adicional en el primer mes de servicio para garantizar la máxima velocidad del Portal DEGA.
            </div>

            {/* Fases Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fases.map((fase, idx) => {
                const Icon = fase.icon;
                return (
                  <div key={idx} className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        {fase.fase}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#1A5C38] bg-white px-2 py-0.5 rounded border border-slate-200">
                        {fase.horas}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 text-[#1A5C38]" />
                      {fase.title}
                    </h4>
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      {fase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#1A5C38] mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Quick Contact Form inside modal */}
            {formSent ? (
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center text-emerald-900 font-semibold text-xs flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Solicitud registrada. El equipo técnico de FimoSoft contactará de inmediato con el organismo.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 rounded-2xl bg-slate-100 border border-slate-200 space-y-3">
                <label className="text-xs font-bold text-slate-800 block">
                  ¿Desea recibir el pliego de especificaciones técnicas del Estudio de Rendimiento?
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="correo.institucional@juntadeandalucia.es"
                    className="flex-1 px-4 py-2 rounded-xl text-xs bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#1A5C38]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#1A5C38] text-white font-bold text-xs hover:bg-[#0F3B23] transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Dossier</span>
                  </button>
                </div>
              </form>
            )}

          </div>

          {/* Footer */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Sede Sevilla · Calle Tarfia 7</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-200 font-medium text-slate-700 transition-colors"
            >
              Cerrar
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
