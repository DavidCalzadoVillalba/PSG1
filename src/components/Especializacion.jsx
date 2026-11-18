import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe2, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Map, 
  Terminal, 
  Code, 
  Zap, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function Especializacion() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const areas = [
    {
      id: 'web-opendata',
      title: 'Desarrollo Web & Datos Abiertos',
      subtitle: 'Portales Masivos & Visores Geoespaciales',
      icon: Globe2,
      gradient: 'from-[#1A5C38] to-emerald-700',
      description: 'Expertos en Drupal 9/10 multisite, gestores de contenidos abiertos, arquitecturas desacopladas y visores cartográficos de alto rendimiento para miles de usuarios concurrentes.',
      tags: ['Drupal 10 Core', 'Leaflet / OpenLayers', 'GeoJSON / OGC', 'CKAN Integration', 'UX/UI Accesible'],
      metrics: { primary: 'Drupal 10', label: 'Especialización Máxima' },
      features: [
        'Desarrollo de módulos a medida y taxonomías complejas',
        'Integración con capas cartográficas WMS/WFS/WMTS',
        'Diseño responsive y componentes accesibles WCAG 2.1 AA',
        'Optimización de tiempos de carga en mapas masivos'
      ]
    },
    {
      id: 'arquitectura-apis',
      title: 'Arquitectura Escalable & APIs',
      subtitle: 'Microservicios Contenerizados & CI/CD',
      icon: Cpu,
      gradient: 'from-teal-800 to-emerald-900',
      description: 'Ingeniería orientada a microservicios contenerizados con Docker, despliegue continuo automatizado y especificaciones abiertas OpenAPI para una interoperabilidad absoluta.',
      tags: ['Docker Contenedores', 'GitLab CI/CD', 'OpenAPI / Swagger', 'Varnish & Redis', 'REST & GraphQL'],
      metrics: { primary: '< 80ms', label: 'Latencia Media en APIs' },
      features: [
        'Pipelines de integración y entrega continua (CI/CD)',
        'Contenerización con Docker y orquestación resiliente',
        'Caché distribuido con Redis y aceleración Varnish',
        'Interoperabilidad según Guías Corporativas de la Junta'
      ]
    },
    {
      id: 'calidad-seguridad',
      title: 'Calidad, Seguridad & Accesibilidad',
      subtitle: 'Conformidad ENS & ANS Contractuales',
      icon: ShieldCheck,
      gradient: 'from-[#0F3B23] to-slate-900',
      description: 'Cumplimiento estricto de Acuerdos de Nivel de Servicio (ANS), Esquema Nacional de Seguridad (ENS) y directrices universales de accesibilidad legal (RD 1112/2018).',
      tags: ['ANS > 99.8%', 'ENS Nivel Alto', 'WCAG 2.1 AA', 'SonarQube SAST', 'Cypress e2e'],
      metrics: { primary: '99.95%', label: 'Disponibilidad Objetivo' },
      features: [
        'Auditorías de código estático y dinámico (SAST/DAST)',
        'Pruebas automatizadas de regresión y cobertura > 85%',
        'Supervisión 24/7 y planes de recuperación ante desastres',
        'Informes periódicos de accesibilidad UNE-EN 301 549'
      ]
    }
  ];

  return (
    <section id="especializacion" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-[#1A5C38] bg-[#EDF7F1] px-4 py-1.5 rounded-full border border-[#1A5C38]/20 inline-block shadow-xs"
          >
            Capacidades Técnicas Especializadas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight"
          >
            Áreas de Especialización Clave
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base mt-3 max-w-2xl mx-auto"
          >
            Soluciones de alta ingeniería adaptadas a las exigencias operativas y regulatorias de los servicios públicos andaluces.
          </motion.p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {areas.map((area, index) => {
            const Icon = area.icon;
            const isHovered = hoveredCard === area.id;

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredCard(area.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-[#1A5C38] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Glow accent on hover */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${area.gradient}`} />

                <div>
                  {/* Icon & Metrics badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${area.gradient} text-white flex items-center justify-center shadow-lg shadow-emerald-950/15 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-extrabold text-[#1A5C38] font-mono block">
                        {area.metrics.primary}
                      </span>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                        {area.metrics.label}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    {area.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#1A5C38] transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {area.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 mb-6 text-xs text-slate-600">
                    {area.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1A5C38] mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills at bottom */}
                <div className="pt-5 border-t border-slate-100 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {area.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 group-hover:bg-[#EDF7F1] group-hover:text-[#1A5C38] transition-colors font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
