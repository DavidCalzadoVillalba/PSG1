import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  MapPin, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  GitBranch, 
  Clock, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function Solvencia() {
  const [activeStandard, setActiveStandard] = useState(0);

  const standards = [
    {
      id: 'scrum',
      name: 'Scrum Ágil',
      badge: 'Iterativo',
      desc: 'Sprints de 2 a 3 semanas con entregables funcionales continuos y demos directas al equipo técnico del IECA.',
      kpis: ['Sprints quincenales', 'Retrospectivas continuas', 'Gestión visual en Jira/GitLab']
    },
    {
      id: 'metrica',
      name: 'Métrica V3',
      badge: 'Administración Pública',
      desc: 'Estructuración documental formal de requisitos, análisis, diseño y pruebas exigida por la Administración.',
      kpis: ['Trazabilidad de requisitos', 'Modelado DFD y ER', 'Planes de pruebas formales']
    },
    {
      id: 'cmmi',
      name: 'CMMI V3',
      badge: 'Madurez Software',
      desc: 'Procesos de ingeniería y gestión de proyectos optimizados y medibles para garantizar cero desviaciones.',
      kpis: ['Control cuantitativo de calidad', 'Mitigación proactiva de riesgos', 'Revisión por pares']
    },
    {
      id: 'msd',
      name: 'Marco MSD Junta',
      badge: 'Corporativo Andaluz',
      desc: 'Alineación estricta con el Marco de Servicios Digitales y las guías de diseño institucional de la Junta de Andalucía.',
      kpis: ['Arquitectura corporativa', 'Pautas gráficas oficiales', 'Directivas de interoperabilidad']
    },
    {
      id: 'ens',
      name: 'ENS (Nivel Alto)',
      badge: 'Seguridad Nacional',
      desc: 'Garantía de confidencialidad, integridad, trazabilidad, autenticidad y disponibilidad de los datos públicos.',
      kpis: ['Cifrado integral TLS 1.3', 'Copias inmutables y BCP', 'Auditorías de vulnerabilidades']
    }
  ];

  return (
    <section id="quienes-somos" className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-[#1A5C38] bg-[#EDF7F1] px-4 py-1.5 rounded-full border border-[#1A5C38]/20 inline-block shadow-xs"
          >
            Solvencia & Garantía Operativa
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight"
          >
            Quiénes Somos y Rigor Metodológico
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base mt-3 max-w-2xl mx-auto"
          >
            Capacidad técnica comprobada, proximidad institucional inmediata y marcos de gobernanza pública estandarizados.
          </motion.p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Sede y Raíz Andaluza */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 hover:bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/90 hover:border-[#1A5C38]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1A5C38] to-[#0F3B23] text-white flex items-center justify-center shadow-lg shadow-[#1A5C38]/20">
                  <Building2 className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#1A5C38]" />
                  Sevilla (Sede Central)
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Sede y Raíz Andaluza
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Empresa andaluza con sede física permanente en <strong className="text-slate-900">Calle Tarfia, 7 (41012 Sevilla)</strong>. Especializados exclusivamente en el impulso, modernización y evolución continua de plataformas de la Administración Pública.
              </p>

              {/* Seville Location Map Graphic / Visual representation */}
              <div className="bg-emerald-950/5 rounded-2xl p-5 border border-emerald-800/10 mb-6 relative overflow-hidden">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-800 mb-2">
                  <span className="flex items-center gap-1.5 text-[#1A5C38]">
                    <MapPin className="w-4 h-4" />
                    Calle Tarfia, 7 — Sevilla
                  </span>
                  <span className="font-mono text-[11px] text-slate-500">37.3629° N, 5.9869° W</span>
                </div>
                <p className="text-xs text-slate-500 leading-normal">
                  Proximidad geográfica estratégica con la sede del Instituto de Estadística y Cartografía de Andalucía (IECA) en el Pabellón de Nueva Zelanda (Isla de la Cartuja).
                </p>
              </div>

              {/* Bullets de Proximidad */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#1A5C38] shrink-0" />
                  <span className="font-medium">Respuesta in situ en &lt; 2 horas</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#1A5C38] shrink-0" />
                  <span className="font-medium">100% equipo propio en Sevilla</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#1A5C38] shrink-0" />
                  <span className="font-medium">Sin intermediarios ni subcontratación</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#1A5C38] shrink-0" />
                  <span className="font-medium">Compromiso con el empleo local</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Régimen jurídico: Sociedad Limitada</span>
              <span className="text-[#1A5C38] font-semibold">Proveedor Tecnológico Homologado</span>
            </div>
          </motion.div>

          {/* Card 2: Garantía y Modelos de Calidad (Interactivo con Selector) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 hover:bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/90 hover:border-[#1A5C38]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-[#1A5C38] text-white flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <Award className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                  Estándares Exigidos
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Garantía y Estándares Públicos
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                Rigor técnico estandarizado bajo los marcos oficiales de la Junta de Andalucía y la normativa técnica estatal para entrega de software trazable y libre de errores.
              </p>

              {/* Interactive Standards Pills Selector */}
              <div className="flex flex-wrap gap-2 mb-5">
                {standards.map((std, idx) => (
                  <button
                    key={std.id}
                    onClick={() => setActiveStandard(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeStandard === idx
                        ? 'bg-[#1A5C38] text-white shadow-md shadow-[#1A5C38]/20 scale-105'
                        : 'bg-white border border-slate-200 text-slate-700 hover:border-[#1A5C38]/50'
                    }`}
                  >
                    {std.name}
                  </button>
                ))}
              </div>

              {/* Dynamic Standard Detail Panel */}
              <motion.div
                key={activeStandard}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#1A5C38]" />
                    {standards[activeStandard].name}
                  </h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EDF7F1] text-[#1A5C38]">
                    {standards[activeStandard].badge}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {standards[activeStandard].desc}
                </p>
                <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-2">
                  {standards[activeStandard].kpis.map((kpi, kIdx) => (
                    <span 
                      key={kIdx} 
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {kpi}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Marco metodológico: Híbrido Ágil / Métrica V3</span>
              <span className="text-amber-700 font-semibold">ENS Nivel Alto Garantizado</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
