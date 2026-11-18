import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export default function LegalModal({ type, onClose }) {
  if (!type) return null;

  const contentMap = {
    aviso: {
      title: 'Aviso Legal y Datos Registrales',
      text: 'FimoSoft S.L. es una sociedad mercantil de responsabilidad limitada constituida en España, con domicilio social en Calle Tarfia 7, 41012 Sevilla. Inscrita en el Registro Mercantil de Sevilla. Especializada en servicios informáticos de consultoría, desarrollo de software y servicios de tecnologías de la información para el sector público andaluz.'
    },
    privacidad: {
      title: 'Política de Privacidad y RGPD',
      text: 'En cumplimiento del Reglamento General de Protección de Datos (RGPD UE 2016/679) y la Ley Orgánica 3/2018 (LOPDGDD), FimoSoft S.L. garantiza el tratamiento lícito, transparente y seguro de los datos de contacto recabados, utilizándolos únicamente para la tramitación de propuestas y relaciones técnico-comerciales con las entidades públicas requirentes.'
    },
    transparencia: {
      title: 'Portal de Transparencia y Contratación',
      text: 'FimoSoft S.L. cumple con los principios de publicidad activa y transparencia regulados en la Ley 19/2013 de Transparencia y la Ley 1/2014 de Andalucía. Todos los contratos formalizados con la Administración Pública se encuentran auditados y ejecutados bajo los más estrictos estándares de integridad y cumplimiento fiscal.'
    },
    ens: {
      title: 'Declaración de Conformidad ENS',
      text: 'FimoSoft S.L. dispone de medidas técnicas y organizativas conformes al Real Decreto 311/2022 que regula el Esquema Nacional de Seguridad (ENS) en categoría Alta para la salvaguarda de sistemas de información que manejan datos del sector público, implementando cifrado de extremo a extremo, trazabilidad de logs y auditorías periódicas de vulnerabilidades.'
    }
  };

  const item = contentMap[type] || contentMap.aviso;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 space-y-4"
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#1A5C38]" />
            <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-slate-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed">
          {item.text}
        </p>

        <div className="pt-3 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#1A5C38] text-white font-bold text-xs hover:bg-[#0F3B23] transition-colors"
          >
            Entendido
          </button>
        </div>
      </motion.div>
    </div>
  );
}
