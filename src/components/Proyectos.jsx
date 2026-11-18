import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Map,
  Bus,
  Server,
  Calendar,
  CheckCircle2,
  Zap,
  Layers,
  Gauge,
  ShieldCheck,
  Euro
} from 'lucide-react';

export default function Proyectos() {
  const [selectedFilter, setSelectedFilter] = useState('todos');

  const proyectos = [
    {
      id: 'p1',
      title: 'Portal Web y Mapas Ambientales',
      client: 'Junta de Andalucía',
      period: '2023 – 2024',
      budget: '185.000 €',
      scope: 'Autonómico',
      icon: Map,
      gradient: 'from-[#1A5C38] via-emerald-800 to-[#0F3B23]',
      kpis: [
        { value: '+40', label: 'Capas Geoespaciales', sub: 'PostGIS / Vectoriales', icon: Layers },
        { value: '< 120ms', label: 'Velocidad de Respuesta', sub: 'Visor OpenLayers', icon: Zap }
      ],
      tags: ['Drupal 10 Core', 'PostGIS', 'OpenLayers', 'WCAG 2.1 AA']
    },
    {
      id: 'p2',
      title: 'Plataforma de Datos de Movilidad',
      client: 'Consorcio de Transportes',
      period: '2023 – 2024',
      budget: '98.400 €',
      scope: 'Metropolitano',
      icon: Bus,
      gradient: 'from-teal-800 via-emerald-900 to-slate-900',
      kpis: [
        { value: '15s', label: 'Refresco en Tiempo Real', sub: 'Telemetría de Flotas', icon: Gauge },
        { value: '99.9%', label: 'Disponibilidad Continua', sub: 'Microservicios Docker', icon: Server }
      ],
      tags: ['Microservicios', 'Python Geo', 'Docker', 'OpenAPI REST']
    },
    {
      id: 'p3',
      title: 'Mantenimiento y Soporte Web',
      client: 'Diputación de Sevilla (INPRO)',
      period: '2023 – 2024',
      budget: '144.000 €',
      scope: 'Provincial',
      icon: Server,
      gradient: 'from-slate-800 via-[#1A5C38] to-[#0A2617]',
      kpis: [
        { value: '< 2h', label: 'Resolución Incidencias P1', sub: 'Acuerdo ANS Estricto', icon: Zap },
        { value: '100%', label: 'Conformidad Seguridad', sub: 'Auditorías ENS / SAST', icon: ShieldCheck }
      ],
      tags: ['Scrum Ágil', 'ANS > 99.8%', 'SonarQube', 'ENS Nivel Alto']
    }
  ];

  const filteredProyectos = selectedFilter === 'todos'
    ? proyectos
    : proyectos.filter(p => p.scope.toLowerCase() === selectedFilter.toLowerCase());

  return (
      <section id="proyectos" className="py-20 bg-white border-y border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Encabezado Conciso y Directo */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-5">
              <div>
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-[11px] font-bold uppercase tracking-widest text-[#1A5C38] bg-[#EDF7F1] px-3.5 py-1 rounded-full border border-[#1A5C38]/20 inline-block"
                >
                  Solvencia Técnica Demostrada
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2.5 tracking-tight"
                >
                  Proyectos de Referencia
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-slate-500 text-sm mt-1"
                >
                  Contratos públicos ejecutados con acta de recepción y plena conformidad.
                </motion.p>
              </div>

              {/* Filtros Visuales */}
              <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-2xl border border-slate-200 self-start md:self-end">
                {['todos', 'autonómico', 'metropolitano', 'provincial'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setSelectedFilter(f)}
                    className={`text-xs font-bold px-3 py-1.5 rounded-xl capitalize transition-all cursor-pointer ${selectedFilter === f
                        ? 'bg-white text-[#1A5C38] shadow-xs border border-slate-200'
                        : 'text-slate-600 hover:text-slate-900'
                      }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

              {/* Grid de Tarjetas Visuales con Textos Grandes y Módulos Gráficos */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
                <AnimatePresence mode="popLayout">
                  {filteredProyectos.map((proyecto) => {
                    const Icon = proyecto.icon;
                    return (
                      <motion.div
                        key={proyecto.id}
                        layout
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ y: -6 }}
                        className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#1A5C38]/40 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                      >
                        <div>
                          {/* Componente Visual 1: Banner Superior con Cliente, Periodo y Presupuesto Gigante */}
                          <div className={`p-6 bg-gradient-to-br ${proyecto.gradient} text-white relative overflow-hidden`}>
                            <div className="flex items-center justify-between mb-4 relative z-10">
                                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20">
                                  {proyecto.client}
                                </span>
                                <span className="text-xs font-semibold text-emerald-200 flex items-center gap-1">
                                  <Calendar className="w-3.5 h-3.5" />
                                  {proyecto.period}
                                </span>
                            </div>

                                {/* Título de Proyecto */}
                                <h3 className="text-lg font-bold text-white leading-snug mb-4 relative z-10">
                                  {proyecto.title}
                                </h3>

                                {/* Bloque Gráfico de Presupuesto Gigante */}
                                <div className="p-3.5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-between relative z-10">
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-200/80">
                                    Presupuesto
                                  </span>
                                  <span className="text-2xl sm:text-3xl font-black font-mono text-amber-300 tracking-tight">
                                    {proyecto.budget}
                                  </span>
                                </div>
                            </div>

                                {/* Componente Visual 2: Dos Bloques de Métricas de Gran Tamaño */}
                                <div className="p-5 space-y-4">
                                  <div className="grid grid-cols-2 gap-3">
                                    {proyecto.kpis.map((kpi, kIdx) => {
                                      const KpiIcon = kpi.icon;
                                      return (
                                        <div
                                          key={kIdx}
                                          className="p-3.5 rounded-2xl bg-white border border-slate-200/80 text-center shadow-2xs group-hover:border-[#1A5C38]/30 transition-colors"
                                        >
                                          <KpiIcon className="w-4 h-4 text-[#1A5C38] mx-auto mb-1 opacity-80" />
                                          <span className="block text-2xl font-black font-mono text-slate-900 tracking-tight">
                                            {kpi.value}
                                          </span>
                                          <span className="text-[11px] font-bold text-slate-800 block mt-0.5 leading-tight">
                                            {kpi.label}
                                          </span>
                                          <span className="text-[9px] text-slate-400 block mt-0.5">
                                            {kpi.sub}
                                          </span>
                                        </div>
                                      );
                                    })}
                                  </div>

                                  {/* Componente Visual 3: Chips Tecnológicos */}
                                  <div className="pt-2 flex flex-wrap gap-1.5">
                                      {
                                        proyecto.tags.map((tag, tIdx) => (
                                          <span
                                            key={tIdx}
                                            className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs"
                                          >
                                            {tag}
                                          </span>
                                        ))
                                      }
                      </div>
                                </div>
                              </div>

                                  {/* Componente Visual 4: Barra de Estado Inferior */}
                                  <div className="px-6 py-3.5 bg-white border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-600 font-semibold">
                                    <span className="text-[11px] text-slate-400 uppercase tracking-wider">
                                      Ámbito {proyecto.scope}
                                    </span>
                                    <span className="text-[#1A5C38] font-bold flex items-center gap-1.5 text-xs">
                                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                      100% Conformidad
                                    </span>
                                  </div>

                                </motion.div>
                                );
            })}
                              </AnimatePresence>
                            </div>

                          </div>
                        </section>
                        );
}
