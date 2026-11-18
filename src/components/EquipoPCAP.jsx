import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Layers, 
  Workflow
} from 'lucide-react';

export default function EquipoPCAP() {
  const pilaresGlobales = [
    {
      id: 'cobertura',
      title: 'Cobertura Integral de Perfiles Técnicos',
      badge: '5 de 5 Especialidades',
      icon: Layers,
      desc: 'Equipo multidisciplinar para cubrir Dirección Ágil, Arquitectura, Análisis, Desarrollo Web y DevOps/QA.',
      kpis: ['Dirección Ágil Scrum', 'Arquitectura Drupal & Cloud', 'Desarrollo Web & Geo', 'DevOps & QA Continuo']
    },
    {
      id: 'gobernanza',
      title: 'Gobernanza Unificada & Interlocución Directa',
      badge: 'Interlocutor Único',
      icon: Workflow,
      desc: 'Canal de comunicación directo y transparente con los responsables del organismo.',
      kpis: ['Reuniones periódicas de Sprint', 'Product Backlog compartido', 'Informes ejecutivos mensuales', 'Gestión proactiva de riesgos']
    },
    {
      id: 'calidad',
      title: 'Calidad Automatizada & Cero Regresiones',
      badge: 'Entrega Continua',
      icon: ShieldCheck,
      desc: 'Sincronización total entre desarrollo software y aseguramiento continuo de calidad.',
      kpis: ['Análisis estático SAST', 'Tests automatizados Cypress', 'Conformidad ENS Nivel Alto', 'Accesibilidad WCAG 2.1 AA']
    },
    {
      id: 'proximidad',
      title: 'Proximidad Física & Respuesta Inmediata',
      badge: '100% Sevilla',
      icon: MapPin,
      desc: 'Capacidad de respuesta presencial inmediata en las instalaciones de la Administración.',
      kpis: ['Atención presencial inmediata', 'Equipo 100% propio en Sevilla', 'Sin intermediarios externos', 'Compromiso con el empleo local']
    }
  ];

  return (
    <section id="equipo-pcap" className="py-20 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Encabezado Directo */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Capacidades Globales de Nuestro Equipo
          </motion.h2>
        </div>

        {/* 3 Métricas Globales Balanceadas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
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
        </div>

        {/* 4 Pilares Globales Compactos y Ajustados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className="bg-slate-50 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#1A5C38]/40 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1A5C38] to-[#0F3B23] text-white flex items-center justify-center shadow-md shadow-[#1A5C38]/15">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-[#1A5C38] bg-[#EDF7F1] px-3 py-1 rounded-full border border-[#1A5C38]/20">
                    {pilar.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {pilar.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {pilar.desc}
                </p>

                {/* Sub-capacidades en formato de etiquetas visuales con margen justo */}
                <div className="mt-4 pt-4 border-t border-slate-200/70">
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

      </div>
    </section>
  );
}
