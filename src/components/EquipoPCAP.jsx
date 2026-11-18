import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users2, 
  ShieldCheck, 
  CheckCircle2, 
  Award, 
  Zap, 
  MapPin, 
  Layers, 
  Workflow
} from 'lucide-react';

export default function EquipoPCAP() {
  const pilaresGlobales = [
    {
      id: 'cobertura',
      title: 'Cobertura Integral de Perfiles Técnicos',
      badge: '5 de 5 Especialidades Cubiertas',
      icon: Layers,
      desc: 'Equipo multidisciplinar completo y dimensionado desde el día 1, cubriendo simultáneamente Dirección Ágil, Arquitectura de Sistemas, Análisis Funcional, Desarrollo Web y DevOps/QA.',
      kpis: ['Dirección Ágil (Scrum/PMP)', 'Arquitectura Drupal & Cloud', 'Analista Funcional Métrica V3', 'Desarrollo Frontend/Backend', 'DevOps & Quality Assurance']
    },
    {
      id: 'gobernanza',
      title: 'Gobernanza Unificada & Interlocución Directa',
      badge: 'Interlocutor Único',
      icon: Workflow,
      desc: 'Canal de comunicación directo y transparente con los responsables del organismo, eliminando burocracia mediante sprints quincenales, demos funcionales y seguimiento en tiempo real.',
      kpis: ['Reuniones periódicas de Sprint', 'Product Backlog compartido', 'Informes ejecutivos mensuales', 'Gestión proactiva de riesgos']
    },
    {
      id: 'calidad',
      title: 'Calidad Automatizada & Cero Regresiones',
      badge: 'Entrega Continua',
      icon: ShieldCheck,
      desc: 'Sincronización total entre desarrollo y aseguramiento de calidad: cada entrega supera análisis estático SonarQube, pruebas automatizadas Cypress y auditorías de accesibilidad universal.',
      kpis: ['Análisis estático de código SAST', 'Tests de regresión automatizados', 'Conformidad ENS Nivel Alto', 'Accesibilidad WCAG 2.1 AA']
    },
    {
      id: 'proximidad',
      title: 'Proximidad Física & Respuesta Inmediata',
      badge: '100% Sevilla',
      icon: MapPin,
      desc: 'Sede permanente en Calle Tarfia 7 (Sevilla). Capacidad de respuesta presencial inmediata en las instalaciones de la Administración Pública para comités de seguimiento o incidencias.',
      kpis: ['Atención presencial inmediata', 'Equipo 100% propio en Sevilla', 'Sin intermediarios externos', 'Compromiso con el empleo local']
    }
  ];

  const flujoEquipo = [
    { paso: '01', nombre: 'Requisitos & Backlog', rol: 'Analista de Negocio + Scrum Master' },
    { paso: '02', nombre: 'Diseño & Arquitectura', rol: 'Arquitecto de Sistemas' },
    { paso: '03', nombre: 'Desarrollo Drupal & Geo', rol: 'Desarrolladores Fullstack' },
    { paso: '04', nombre: 'QA & Seguridad ENS', rol: 'Especialista en Pruebas / DevOps' },
    { paso: '05', nombre: 'Entrega en Producción', rol: 'Equipo Unificado FimoSoft' }
  ];

  return (
    <section id="equipo-pcap" className="py-20 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado Directo */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-bold uppercase tracking-widest text-[#1A5C38] bg-[#EDF7F1] px-3.5 py-1 rounded-full border border-[#1A5C38]/20 inline-block"
          >
            Capacidad Global de Entrega
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2.5 tracking-tight"
          >
            Capacidades Globales de Nuestro Equipo
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-sm mt-2"
          >
            Un equipo multidisciplinar cohesionado que actúa como una unidad operativa integral para el sector público.
          </motion.p>
        </div>

        {/* 4 Métricas Globales de Alto Impacto */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <motion.div
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-2xs"
          >
            <span className="block text-3xl font-extrabold text-[#1A5C38] font-mono">100%</span>
            <span className="text-xs font-bold text-slate-800 block mt-1">Cobertura Técnica</span>
            <span className="text-[10px] text-slate-500">Gestión, Arquitectura, Dev y QA</span>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-2xs"
          >
            <span className="block text-3xl font-extrabold text-emerald-600 font-mono">0 Días</span>
            <span className="text-xs font-bold text-slate-800 block mt-1">Demora de Incorporación</span>
            <span className="text-[10px] text-slate-500">Equipo dimensionado y disponible</span>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-2xs"
          >
            <span className="block text-3xl font-extrabold text-[#1A5C38] font-mono">100%</span>
            <span className="text-xs font-bold text-slate-800 block mt-1">Sede en Sevilla</span>
            <span className="text-[10px] text-slate-500">Calle Tarfia 7 (atención in situ &lt; 2h)</span>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center shadow-2xs"
          >
            <span className="block text-3xl font-extrabold text-amber-600 font-mono">PMP / CMMI</span>
            <span className="text-xs font-bold text-slate-800 block mt-1">Gobernanza Certificada</span>
            <span className="text-[10px] text-slate-500">Scrum, Métrica V3 y ENS</span>
          </motion.div>
        </div>

        {/* 4 Pilares Globales que Ofrece Nuestro Equipo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pilaresGlobales.map((pilar, index) => {
            const Icon = pilar.icon;
            return (
              <motion.div
                key={pilar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-slate-50 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#1A5C38]/40 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1A5C38] to-[#0F3B23] text-white flex items-center justify-center shadow-md shadow-[#1A5C38]/15">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#1A5C38] bg-[#EDF7F1] px-3 py-1 rounded-full border border-[#1A5C38]/20">
                      {pilar.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {pilar.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {pilar.desc}
                  </p>
                </div>

                {/* Sub-capacidades en formato de etiquetas visuales */}
                <div className="pt-4 border-t border-slate-200/60">
                  <div className="flex flex-wrap gap-1.5">
                    {pilar.kpis.map((kpi, kIdx) => (
                      <span
                        key={kIdx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center gap-1 shadow-2xs"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#1A5C38]" />
                        {kpi}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Diagrama Visual del Flujo de Trabajo Integrado del Equipo */}
        <div className="bg-gradient-to-r from-slate-900 to-[#0F3B23] rounded-3xl p-6 sm:p-8 text-white shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block">
                Operativa Sin Fisuras
              </span>
              <h3 className="text-lg font-bold text-white">
                Flujo de Trabajo Colaborativo del Equipo FimoSoft
              </h3>
            </div>
            <span className="text-xs text-slate-300 font-medium">
              Entrega continua sin dependencias externas
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {flujoEquipo.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 relative text-center"
              >
                <span className="text-xs font-mono font-bold text-amber-300 block mb-1">
                  {item.paso}
                </span>
                <span className="text-xs font-bold text-white block mb-1">
                  {item.nombre}
                </span>
                <span className="text-[10px] text-slate-300 block">
                  {item.rol}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
