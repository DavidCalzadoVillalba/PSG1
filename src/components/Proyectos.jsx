import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, 
  Map, 
  Bus, 
  Server, 
  Calendar, 
  Euro, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Filter
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
      description: 'Implantación integral de gestor de contenidos Drupal con visor cartográfico avanzado conectado a bases de datos espaciales masivas (PostgreSQL / PostGIS). Soporte para miles de consultas concurrentes de datos cartográficos oficiales.',
      stack: ['Drupal 10 Core', 'PostgreSQL / PostGIS', 'OpenLayers', 'GeoJSON', 'WCAG 2.1 AA'],
      results: [
        'Migración de más de 40 capas vectoriales complejas',
        'Tiempo de respuesta en consultas espaciales < 120ms',
        'Cumplimiento estricto del Modelo de Presencia de la Junta'
      ]
    },
    {
      id: 'p2',
      title: 'Plataforma de Datos de Movilidad',
      client: 'Consorcio Metropolitano de Transportes',
      period: '2023 – 2024',
      budget: '98.400 €',
      scope: 'Metropolitano',
      icon: Bus,
      gradient: 'from-teal-800 via-emerald-900 to-slate-900',
      description: 'Arquitectura desacoplada basada en microservicios contenerizados con Docker y scripts de análisis en Python para el procesamiento y visualización de rutas, flotas y horarios en tiempo real sobre cartografía web interactiva.',
      stack: ['Microservicios Docker', 'Python GeoPandas', 'Leaflet', 'APIs REST', 'CI/CD GitLab'],
      results: [
        'Ingesta y refresco de datos en tiempo real cada 15 segundos',
        'Alta disponibilidad 99.9% durante picos de servicio',
        'Estandarización de APIs abiertas bajo especificación OpenAPI'
      ]
    },
    {
      id: 'p3',
      title: 'Mantenimiento y Soporte Web',
      client: 'INPRO – Diputación Provincial de Sevilla',
      period: '2023 – 2024',
      budget: '144.000 €',
      scope: 'Provincial',
      icon: Server,
      gradient: 'from-slate-800 via-[#1A5C38] to-[#0A2617]',
      description: 'Servicio de mantenimiento correctivo, evolutivo y preventivo bajo metodología Scrum para la red de sedes electrónicas municipales. Cumplimiento de Acuerdos de Nivel de Servicio (ANS) y parches críticos de seguridad ENS.',
      stack: ['Metodología Scrum', 'ANS > 99.8%', 'Soporte 24/7', 'Métrica V3', 'Cypress QA'],
      results: [
        'Resolución de incidencias críticas en menos de 2 horas',
        '100% de conformidad en auditorías del ENS',
        'Despliegues semanales continuos sin cortes de servicio'
      ]
    }
  ];

  const filteredProyectos = selectedFilter === 'todos' 
    ? proyectos 
    : proyectos.filter(p => p.scope.toLowerCase() === selectedFilter.toLowerCase());

  return (
    <section id="proyectos" className="py-24 bg-white border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-widest text-[#1A5C38] bg-[#EDF7F1] px-4 py-1.5 rounded-full border border-[#1A5C38]/20 inline-block shadow-xs"
            >
              Solvencia Técnica Demostrada
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight"
            >
              Proyectos de Referencia en el Sector Público
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-base mt-2 max-w-2xl"
            >
              Soluciones auditables ejecutadas con éxito en organismos andaluces con tecnología Drupal, bases de datos espaciales y microservicios.
            </motion.p>
          </div>

          {/* Scope Filters */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-2xl border border-slate-200 self-start md:self-end">
            {['todos', 'autonómico', 'metropolitano', 'provincial'].map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                className={`text-xs font-bold px-3 py-1.5 rounded-xl capitalize transition-all cursor-pointer ${
                  selectedFilter === f
                    ? 'bg-white text-[#1A5C38] shadow-xs border border-slate-200'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Project Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProyectos.map((proyecto) => {
              const Icon = proyecto.icon;
              return (
                <motion.div
                  key={proyecto.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#1A5C38]/40 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Card Hero Header */}
                    <div className={`p-6 bg-gradient-to-br ${proyecto.gradient} text-white relative overflow-hidden`}>
                      <div className="flex items-center justify-between mb-4 relative z-10">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {proyecto.period}
                        </span>
                        <span className="text-xs font-mono font-bold text-amber-300 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/30 flex items-center gap-1">
                          <Euro className="w-3.5 h-3.5" />
                          {proyecto.budget}
                        </span>
                      </div>

                      <div className="relative z-10">
                        <span className="text-[11px] font-bold text-emerald-200 uppercase tracking-wider block mb-1">
                          {proyecto.client}
                        </span>
                        <h3 className="text-lg font-bold text-white leading-snug">
                          {proyecto.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-5">
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {proyecto.description}
                      </p>

                      {/* Results bullets */}
                      <div className="space-y-2 pt-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                          Resultados Clave
                        </span>
                        {proyecto.results.map((res, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-[#1A5C38] shrink-0 mt-0.5" />
                            <span>{res}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stack Tags */}
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {proyecto.stack.map((item, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Status */}
                  <div className="px-6 py-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="capitalize">Ámbito: {proyecto.scope}</span>
                    <span className="text-[#1A5C38] font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" />
                      Ejecutado con Éxito
                    </span>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Informative Note for Committee */}
        <div className="mt-12 p-4 rounded-2xl bg-[#EDF7F1]/80 border border-[#1A5C38]/20 flex items-center justify-between flex-wrap gap-4 text-xs text-slate-700">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1A5C38]"></span>
            <span>
              <strong>Garantía de Solvencia:</strong> Todos los contratos citados cuentan con actas de recepción de conformidad favorables emitidas por la Administración Pública.
            </span>
          </div>
          <a href="#contacto" className="text-[#1A5C38] font-bold hover:underline flex items-center gap-1">
            <span>Solicitar certificados de buena ejecución</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
