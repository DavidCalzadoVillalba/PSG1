import React from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Clock, 
  FileCheck, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Layers,
  ChevronRight
} from 'lucide-react';

export default function CompromisoDEGA({ onOpenAuditModal }) {

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#1A5C38', '#D9A74A', '#2A8B56', '#4ADE80']
    });
    onOpenAuditModal();
  };

  const valores = [
    {
      number: '01',
      badge: '200 Horas a Coste Cero',
      title: 'Estudio Inicial de Rendimiento',
      icon: Clock,
      color: 'amber',
      description: 'Auditoría exhaustiva inicial del Portal DEGA actual (200 horas de administrador de sistemas ofertadas sin cargo): profiling de Drupal, caché Varnish/Redis, optimización de consultas espaciales y reducción drástica de la latencia en peticiones masivas.',
      bullets: [
        'Profiling de cuellos de botella en Drupal y PHP 8.x',
        'Ajuste fino de índices espaciales en PostgreSQL/PostGIS',
        'Configuración de políticas agresivas de caché en Varnish y Redis',
        'Informe ejecutivo con plan de aceleración de entrega inmediata'
      ],
      tagline: 'Entrega en los primeros 30 días de contrato'
    },
    {
      number: '02',
      badge: 'Conformidad RD 1112/2018',
      title: 'Informes Anuales de Accesibilidad',
      icon: FileCheck,
      color: 'emerald',
      description: 'Elaboración periódica y sistemática de Informes de Revisión de Accesibilidad anuales bajo estándar WCAG 2.1 AA y norma UNE-EN 301 549, garantizando que cada componente y visor del Portal DEGA sea plenamente inclusivo.',
      bullets: [
        'Auditorías automáticas y revisión manual con lectores de pantalla',
        'Comprobación de contraste, navegación por teclado y etiquetas WAI-ARIA',
        'Declaración de Accesibilidad actualizada para publicación oficial',
        'Soporte a la Unidad Responsable de Accesibilidad (URA)'
      ],
      tagline: 'Garantía legal ante la Junta y la UE'
    },
    {
      number: '03',
      badge: 'Capacitación Continua',
      title: 'Transferencia de Conocimiento',
      icon: GraduationCap,
      color: 'teal',
      description: 'Bolsa de horas destinadas a formación técnica especializada y transferencia metodológica para empoderar y afianzar las capacidades de los medios propios del IECA, facilitando su total autonomía operativa.',
      bullets: [
        'Workshops técnicos en administración avanzada de Drupal',
        'Pautas para publicación de nuevas capas cartográficas',
        'Documentación técnica viva en Markdown y repositorio común',
        'Sesiones de resolución de dudas técnicas con el equipo de FimoSoft'
      ],
      tagline: 'Afianzamiento y autonomía de medios propios'
    }
  ];

  return (
    <section 
      id="compromiso-dega" 
      className="py-28 bg-gradient-to-b from-[#0B2416] via-[#103E25] to-[#081A10] text-white relative overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -left-40 -bottom-40 w-[500px] h-[500px] rounded-full bg-[#D9A74A]/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Propuesta Diferencial Ganadora para el IECA</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            Nuestro Compromiso de Valor para el Portal DEGA
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-emerald-100 text-base sm:text-lg mt-4 max-w-2xl mx-auto font-light leading-relaxed"
          >
            FimoSoft se posiciona como el <strong className="text-white font-semibold">socio tecnológico idóneo</strong> para consolidar, evolucionar y optimizar el Portal DEGA, plenamente alineado al Plan Estadístico y Cartográfico de Andalucía 2023–2029.
          </motion.p>
        </div>

        {/* Master Alignment Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel-dark rounded-3xl p-8 lg:p-10 border border-emerald-400/30 shadow-2xl mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase tracking-wider font-bold text-emerald-300 flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                Marco Estratégico Oficial de la Junta de Andalucía
              </span>
              <h3 className="text-2xl font-bold text-white">
                Plan Estadístico y Cartográfico de Andalucía 2023–2029
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Garantizamos la estricta concordancia técnica con el <strong className="text-white">Modelo de Presencia en Internet</strong> de la Junta, facilitando el acceso unificado, ágil y transparente a las estadísticas y cartografías oficiales para la ciudadanía, investigadores y empresas.
              </p>
            </div>

            <div className="lg:col-span-4 bg-emerald-950/70 rounded-2xl p-6 border border-emerald-500/30 text-center">
              <span className="block text-4xl font-extrabold text-[#D9A74A] font-mono">
                100%
              </span>
              <span className="text-xs text-emerald-200 uppercase tracking-wider font-bold block mt-1">
                Conformidad con Guías Corporativas Junta
              </span>
              <button
                onClick={triggerConfetti}
                className="mt-4 w-full py-2.5 rounded-xl bg-[#D9A74A] hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Solicitar Desglose 200h</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* 3 Value Adds Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {valores.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-emerald-400/20 hover:border-emerald-400/60 hover:bg-white/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-black text-lg border border-amber-400/30">
                      {item.number}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/15 text-emerald-200 border border-white/20">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-200 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 pb-6">
                    {item.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-emerald-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-emerald-300 font-semibold">
                  <span>{item.tagline}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Big Action Callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-emerald-950/80 to-[#0F3B23]/80 rounded-3xl p-8 border border-emerald-400/30 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-left space-y-1">
            <h4 className="text-lg font-bold text-white">
              ¿Desea revisar la metodología del Estudio de Rendimiento?
            </h4>
            <p className="text-xs text-emerald-200">
              Disponemos del cronograma de 200 horas desglosado fase por fase para su incorporación al contrato.
            </p>
          </div>

          <button
            onClick={triggerConfetti}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm shadow-xl shadow-amber-950/40 transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>Consultar Plan de Auditoría (200h)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
