import React from 'react';
import {
  Building2,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  FileText,
  Lock,
  ExternalLink,
  Heart
} from 'lucide-react';

export default function Footer({ onOpenLegalModal }) {
  return (
    <footer id="contacto" className="bg-slate-950 text-white pt-20 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">

          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1A5C38] to-[#0F3B23] text-white flex items-center justify-center font-bold text-lg shadow-md border border-emerald-500/30">
                F
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  FimoSoft <span className="text-xs px-1.5 py-0.5 rounded bg-[#EDF7F1] text-[#1A5C38] font-semibold">S.L.</span>
                </span>
                <span className="block text-xs text-slate-400">Ingeniería de Software para el Sector Público Andaluz</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Socio tecnológico especializado en portales de datos abiertos masivos, visores cartográficos y soluciones de misión crítica para la Junta de Andalucía y sus agencias públicas.
            </p>

            <div className="flex items-center gap-2.5 text-xs text-slate-400 pt-1">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                Sevilla, España
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300">
                CIF B-41XXXXXX
              </span>
            </div>
          </div>

          {/* Sede y Contacto Directo */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Sede Operativa & Contacto Inmediato
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Calle Tarfia 7</strong>, 41012 Sevilla (España)
                  <span className="block text-[11px] text-slate-500 mt-0.5">A 10 min de la sede central del IECA</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="mailto:contactofimo@gmail.com"
                  className="hover:text-emerald-400 transition-colors font-medium"
                >
                  contactofimo@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="tel:637786575"
                  className="hover:text-emerald-400 transition-colors font-medium font-mono"
                >
                  637 78 65 75
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Legal Links */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Garantías & Transparencia
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onOpenLegalModal('aviso')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Aviso Legal y Datos Registrales
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegalModal('privacidad')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Política de Privacidad y RGPD
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegalModal('transparencia')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Portal de Transparencia y Contratación
                </button>
              </li>
              <li>
                <button onClick={() => onOpenLegalModal('ens')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Declaración de Conformidad ENS
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} FimoSoft S.L. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Guías Corporativas Junta de Andalucía</span>
            <span>·</span>
            <span>WCAG 2.1 AA / UNE-EN 301 549</span>
            <span>·</span>
            <span>Métrica V3 & CMMI</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
