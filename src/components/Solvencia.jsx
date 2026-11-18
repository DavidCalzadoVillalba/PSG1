import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  MapPin,
  Award,
  CheckCircle2,
  ShieldCheck,
  Clock,
  ChevronRight
} from 'lucide-react';

export default function Solvencia() {
  const [activeStandard, setActiveStandard] = useState(0);

  const standards = [
    {
      id: 'scrum',
      name: 'Scrum Ágil',
      badge: 'Iterativo',
      desc: 'Sprints quincenales, entregables funcionales continuos y demos directas al equipo del IECA.',
      kpis: ['Sprints quincenales', 'Demos periódicas', 'Jira / GitLab']
    },
    {
      id: 'metrica',
      name: 'Métrica V3',
      badge: 'Admón. Pública',
      desc: 'Estructuración documental formal de requisitos, análisis, diseño y planes de prueba.',
      kpis: ['Trazabilidad total', 'Modelado DFD y ER', 'Pruebas formales']
    },
    {
      id: 'cmmi',
      name: 'CMMI V3',
      badge: 'Madurez',
      desc: 'Procesos de ingeniería y gestión de proyectos medibles para evitar cualquier desviación de plazo.',
      kpis: ['Control cuantitativo', 'Mitigación de riesgos', 'Revisión por pares']
    },
    {
      id: 'msd',
      name: 'Marco MSD Junta',
      badge: 'Corporativo',
      desc: 'Conformidad con el Marco de Servicios Digitales y guías de diseño de la Junta de Andalucía.',
      kpis: ['Arquitectura corporativa', 'Pautas oficiales', 'Interoperabilidad']
    },
    {
      id: 'ens',
      name: 'ENS (Nivel Alto)',
      badge: 'Seguridad',
      desc: 'Garantía de confidencialidad, trazabilidad, autenticidad y alta disponibilidad de los datos.',
      kpis: ['TLS 1.3', 'Copias inmutables', 'Auditorías periódicas']
    }
  ];

  return (
    <section id="quienes-somos" className="py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Encabezado Conciso */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-widest text-[#1A5C38] bg-[#EDF7F1] px-3.5 py-1 rounded-full border border-[#1A5C38]/20 inline-block"
          >
            Solvencia & Garantía Operativa
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2.5 tracking-tight"
          >
            Quiénes Somos y Rigor Metodológico
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-sm mt-2"
          >
            Proximidad geográfica inmediata en Sevilla y estándares de calidad para la Administración Pública.
          </motion.p>
        </div>

        {/* Grid de 2 Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-stretch">

          {/* Tarjeta 1: Sede y Raíz Andaluza */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-[#1A5C38]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1A5C38] to-[#0F3B23] text-white flex items-center justify-center shadow-md shadow-[#1A5C38]/20">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#1A5C38]" />
                  Sevilla (Sede Central)
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Sede y Raíz Andaluza
              </h3>

              <p className="text-slate-600 text-xs leading-relaxed mb-5">
                Sede central en <strong className="text-slate-900">Calle Tarfia 7 (Sevilla)</strong>. Especializados en ingeniería de software para el sector público andaluz.
              </p>

              {/* Ubicación Visual */}
              <div className="bg-emerald-950/5 rounded-2xl p-4 border border-emerald-800/10 mb-5 text-xs text-slate-700">
                <div className="flex items-center justify-between font-semibold mb-1 text-[#1A5C38]">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    Calle Tarfia, 7 — Sevilla
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">37.3629° N, 5.9869° W</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  A 10 minutos de la sede central del IECA (Pabellón de Nueva Zelanda, Isla de la Cartuja).
                </p>
              </div>

              {/* 4 Indicadores Rápidos */}
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1A5C38] shrink-0" />
                  <span className="font-medium text-[11px]">Respuesta in situ &lt; 2h</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1A5C38] shrink-0" />
                  <span className="font-medium text-[11px]">100% equipo en Sevilla</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1A5C38] shrink-0" />
                  <span className="font-medium text-[11px]">Sin subcontratación</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1A5C38] shrink-0" />
                  <span className="font-medium text-[11px]">Compromiso local</span>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>Sociedad Limitada</span>
              <span className="text-[#1A5C38] font-bold">Proveedor Tecnológico Homologado</span>
            </div>
          </motion.div>

          {/* Tarjeta 2: Garantía y Modelos de Calidad */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 hover:bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-[#1A5C38]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-[#1A5C38] text-white flex items-center justify-center shadow-md shadow-amber-500/20">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                  Estándares Exigidos
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Garantía y Estándares Públicos
              </h3>

              <p className="text-slate-600 text-xs leading-relaxed mb-4">
                Marcos técnicos oficiales para entrega de software trazable, auditado y sin desviaciones.
              </p>

              {/* Selector Interactivo de Estándares */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {standards.map((std, idx) => (
                  <button
                    key={std.id}
                    onClick={() => setActiveStandard(idx)}
                    className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeStandard === idx
                        ? 'bg-[#1A5C38] text-white shadow-sm scale-105'
                        : 'bg-white border border-slate-200 text-slate-700 hover:border-[#1A5C38]/50'
                      }`}
                  >
                    {std.name}
                  </button>
                ))}
              </div>

              {/* Detalle Dinámico del Estándar */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#1A5C38]" />
                    {standards[activeStandard].name}
                  </h4>
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EDF7F1] text-[#1A5C38]">
                    {standards[activeStandard].badge}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {standards[activeStandard].desc}
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {standards[activeStandard].kpis.map((kpi, kIdx) => (
                    <span
                      key={kIdx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {kpi}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>Metodología Híbrida Ágil / Métrica V3</span>
              <span className="text-amber-700 font-bold">ENS Nivel Alto</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
