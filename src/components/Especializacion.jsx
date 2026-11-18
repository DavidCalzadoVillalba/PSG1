import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe2,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Zap,
  GitCommit,
  Server,
  Gauge
} from 'lucide-react';

export default function Especializacion() {
  return (
    <section
      id="especializacion"
      className="py-20 bg-gradient-to-b from-slate-900 via-[#122e20] to-slate-900 text-white relative overflow-hidden border-y border-slate-700/60"
    >
      {/* Background Subtle Pattern & Glow */}
      <div className="absolute inset-0 geo-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Encabezado Conciso y Directo */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Áreas de Especialización Clave
          </motion.h2>
        </div>

        {/* 3 Tarjetas en Blanco con Máximo Contraste y Legibilidad */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">

          {/* Tarjeta 1: Web & Datos Abiertos */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-[#1A5C38] shadow-2xl hover:shadow-emerald-950/20 transition-all duration-300 flex flex-col justify-between group text-slate-800"
          >
            <div>
              {/* Header con Icono y Badge Métrico */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1A5C38] to-emerald-700 text-white flex items-center justify-center shadow-md shadow-[#1A5C38]/20 group-hover:scale-105 transition-transform">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-[#1A5C38] bg-[#EDF7F1] px-2.5 py-1 rounded-lg border border-[#1A5C38]/20 block">
                    Drupal 10 Core
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#1A5C38] transition-colors">
                Desarrollo Web & Datos Abiertos
              </h3>
              <span className="text-xs font-semibold text-slate-500 block mb-5">
                Portales Masivos & Visores Geoespaciales
              </span>

              {/* Esquema Visual de Capas de Datos */}
              <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 mb-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                  Pila Geoespacial Integrada
                </span>

                {/* Capa 3: Frontend Visor */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 text-xs shadow-2xs">
                  <span className="font-semibold text-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Visores Cartográficos
                  </span>
                  <span className="text-[10px] font-mono text-[#1A5C38] font-bold">Leaflet / OpenLayers</span>
                </div>

                {/* Capa 2: Motor Espacial */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 text-xs shadow-2xs">
                  <span className="font-semibold text-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                    Capa de Datos Geo
                  </span>
                  <span className="text-[10px] font-mono text-teal-700 font-bold">PostGIS / GeoJSON</span>
                </div>

                {/* Capa 1: CMS Base */}
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 text-xs shadow-2xs">
                  <span className="font-semibold text-slate-800 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1A5C38]"></span>
                    Gestor de Contenidos
                  </span>
                  <span className="text-[10px] font-mono text-slate-700 font-bold">Drupal 10 Multisite</span>
                </div>
              </div>

              {/* Indicadores Gráficos de Alto Rendimiento */}
              <div className="grid grid-cols-2 gap-2.5 text-center text-xs mb-4">
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                  <span className="block text-base font-extrabold text-[#1A5C38] font-mono">&lt; 1.0s</span>
                  <span className="text-[10px] text-slate-600 font-medium">Velocidad FCP</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100">
                  <span className="block text-base font-extrabold text-[#1A5C38] font-mono">100%</span>
                  <span className="text-[10px] text-slate-600 font-medium">WCAG 2.1 AA</span>
                </div>
              </div>
            </div>

            {/* Chips Tecnológicos */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
              {['Drupal 10', 'PostGIS', 'GeoJSON', 'Leaflet', 'CKAN'].map((tag, i) => (
                <span key={i} className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tarjeta 2: Arquitectura Escalable & APIs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-[#1A5C38] shadow-2xl hover:shadow-emerald-950/20 transition-all duration-300 flex flex-col justify-between group text-slate-800"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-800 to-emerald-900 text-white flex items-center justify-center shadow-md shadow-teal-950/20 group-hover:scale-105 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-200 block">
                    Microservicios
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#1A5C38] transition-colors">
                Arquitectura Escalable & APIs
              </h3>
              <span className="text-xs font-semibold text-slate-500 block mb-5">
                Contenedores Docker & Despliegues CI/CD
              </span>

              {/* Pipeline Visual Automatizado */}
              <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 mb-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                  Pipeline Automatizado GitLab CI/CD
                </span>

                <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
                  <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <GitCommit className="w-3.5 h-3.5 text-slate-600 mx-auto mb-1" />
                    <span className="font-bold text-slate-800 block">Commit</span>
                    <span className="text-[9px] text-slate-400">GitLab</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 mx-auto mb-1" />
                    <span className="font-bold text-slate-800 block">Test SAST</span>
                    <span className="text-[9px] text-slate-400">SonarQube</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <Server className="w-3.5 h-3.5 text-teal-600 mx-auto mb-1" />
                    <span className="font-bold text-slate-800 block">Build</span>
                    <span className="text-[9px] text-slate-400">Docker</span>
                  </div>
                  <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 shadow-2xs">
                    <Zap className="w-3.5 h-3.5 text-emerald-600 mx-auto mb-1" />
                    <span className="font-bold text-[#1A5C38] block">Deploy</span>
                    <span className="text-[9px] text-emerald-600">Zero-Down</span>
                  </div>
                </div>
              </div>

              {/* Indicadores Gráficos */}
              <div className="grid grid-cols-2 gap-2.5 text-center text-xs mb-4">
                <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-100">
                  <span className="block text-base font-extrabold text-teal-800 font-mono">&lt; 80ms</span>
                  <span className="text-[10px] text-slate-600 font-medium">Latencia Media API</span>
                </div>
                <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-100">
                  <span className="block text-base font-extrabold text-teal-800 font-mono">OpenAPI</span>
                  <span className="text-[10px] text-slate-600 font-medium">Estándar Abierto</span>
                </div>
              </div>
            </div>

            {/* Chips Tecnológicos */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
              {['Docker', 'GitLab CI/CD', 'OpenAPI', 'Varnish', 'Redis'].map((tag, i) => (
                <span key={i} className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tarjeta 3: Calidad, Seguridad & ANS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl p-7 border border-slate-200/90 hover:border-[#1A5C38] shadow-2xl hover:shadow-emerald-950/20 transition-all duration-300 flex flex-col justify-between group text-slate-800"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0F3B23] to-slate-900 text-white flex items-center justify-center shadow-md shadow-slate-950/20 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-amber-400" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200 block">
                    ENS Nivel Alto
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#1A5C38] transition-colors">
                Calidad, Seguridad & ANS
              </h3>
              <span className="text-xs font-semibold text-slate-500 block mb-5">
                Acuerdos de Nivel de Servicio & Auditorías
              </span>

              {/* Barra de Nivel de Servicio ANS */}
              <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 mb-5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-700 flex items-center gap-1.5 text-[11px]">
                    <Gauge className="w-3.5 h-3.5 text-[#1A5C38]" />
                    Disponibilidad ANS Contractual
                  </span>
                  <span className="text-emerald-700 font-extrabold font-mono text-xs">99.95%</span>
                </div>

                {/* Barra Gráfica de Progreso */}
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden p-0.5">
                  <div className="bg-gradient-to-r from-emerald-500 to-[#1A5C38] h-full rounded-full w-[99.95%]"></div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 text-[10px]">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <CheckCircle2 className="w-3 h-3 text-[#1A5C38]" />
                    <span>Resolución P1 &lt; 2h</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <CheckCircle2 className="w-3 h-3 text-[#1A5C38]" />
                    <span>Backups Inmutables</span>
                  </div>
                </div>
              </div>

              {/* Indicadores Gráficos */}
              <div className="grid grid-cols-2 gap-2.5 text-center text-xs mb-4">
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100">
                  <span className="block text-base font-extrabold text-amber-800 font-mono">A+</span>
                  <span className="text-[10px] text-slate-600 font-medium">Quality Gate Sonar</span>
                </div>
                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-100">
                  <span className="block text-base font-extrabold text-amber-800 font-mono">RD 1112</span>
                  <span className="text-[10px] text-slate-600 font-medium">Accesibilidad Legal</span>
                </div>
              </div>
            </div>

            {/* Chips Tecnológicos */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
              {['ANS > 99.8%', 'ENS Alto', 'SonarQube', 'Cypress e2e', 'UNE-EN 301 549'].map((tag, i) => (
                <span key={i} className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/60">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
