import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users2, 
  Briefcase, 
  Cpu, 
  FileSpreadsheet, 
  Code2, 
  CheckCircle2, 
  ShieldAlert, 
  Award, 
  ChevronRight,
  Terminal,
  Layers
} from 'lucide-react';

export default function EquipoPCAP() {
  const [selectedProfile, setSelectedProfile] = useState(0);

  const perfiles = [
    {
      code: 'JP',
      title: 'Jefe de Proyecto / Scrum Master',
      category: 'Gobernanza & Plazos',
      color: 'emerald',
      badge: 'Dirección Técnica',
      icon: Briefcase,
      summary: 'Responsable de la interlocución directa con el IECA, aseguramiento de plazos, control presupuestario y gestión de riesgos según Métrica V3 y Scrum.',
      certifications: ['Scrum Master (PSM-II)', 'PMP Certified', 'Métrica V3 Oficial'],
      stack: ['Jira Software', 'GitLab Project Management', 'Diagramas Gantt/BPMN', 'Informes de Seguimiento'],
      responsibilities: [
        'Interlocución semanal con el Responsable del Contrato del IECA',
        'Planificación y priorización del Product Backlog del Portal DEGA',
        'Elaboración de actas, informes de avance mensual y gestión de ANS',
        'Mitigación temprana de bloqueos técnicos o dependencias operativas'
      ]
    },
    {
      code: 'AS',
      title: 'Arquitecto de Sistemas',
      category: 'Infraestructura & Escalabilidad',
      color: 'blue',
      badge: 'Arquitectura Core',
      icon: Cpu,
      summary: 'Diseño y optimización de arquitecturas basadas en Drupal 10, microservicios, seguridad perimetral, bases de datos geoespaciales y aceleración de peticiones.',
      certifications: ['Drupal Grand Master', 'Docker Certified Associate', 'Arquitecturas Cloud'],
      stack: ['Drupal 10 Core', 'Docker & Kubernetes', 'PostGIS & PostgreSQL', 'Varnish Cache & Redis', 'OpenAPI'],
      responsibilities: [
        'Optimización del rendimiento y latencia del Portal DEGA',
        'Definición del modelo de caché Varnish/Redis y profiling PHP',
        'Garantía de cumplimiento del Esquema Nacional de Seguridad (ENS)',
        'Diseño de contratos OpenAPI para consumo de datos abiertos'
      ]
    },
    {
      code: 'AN',
      title: 'Analista de Negocio',
      category: 'Requisitos & Datos Abiertos',
      color: 'amber',
      badge: 'Definición Funcional',
      icon: FileSpreadsheet,
      summary: 'Toma y refinamiento de requisitos funcionales, modelado conceptual y diseño de la experiencia de usuario orientada a estadísticas y visores cartográficos.',
      certifications: ['IREB Certified Professional for Requirements Engineering', 'BPMN 2.0'],
      stack: ['Métrica V3 Catálogo Requisitos', 'UML / BPMN', 'Modelos GeoJSON/OGC', 'CKAN Metadatos'],
      responsibilities: [
        'Traducción de necesidades del IECA a especificaciones técnicas ágiles',
        'Modelado de estructuras de metadatos estadísticos y geoespaciales',
        'Diseño de flujos de navegación sencillos y visualizadores intuitivos',
        'Validación funcional de entregables antes de cada paso a producción'
      ]
    },
    {
      code: 'DEV',
      title: 'Desarrollador / Medios Digitales',
      category: 'Frontend & Backend',
      color: 'purple',
      badge: 'Implementación Web',
      icon: Code2,
      summary: 'Desarrollo fullstack en Drupal, maquetación responsive moderna, componentes interactivos de visualización y accesibilidad web universal (WCAG 2.1 AA).',
      certifications: ['Drupal Developer Certified', 'W3C Accessibility Specialist'],
      stack: ['PHP 8.2 / Twig', 'JavaScript ES6+ / TypeScript', 'Leaflet / OpenLayers', 'HTML5 Semántico / WAI-ARIA'],
      responsibilities: [
        'Construcción y refactorización de módulos Drupal para el DEGA',
        'Maquetación responsive según las Guías de Diseño de la Junta',
        'Integración de visores cartográficos interactivos de alto rendimiento',
        'Garantía del 100% de cumplimiento de accesibilidad universal'
      ]
    },
    {
      code: 'QA',
      title: 'Especialista en Pruebas y DevOps',
      category: 'Calidad & Automatización',
      color: 'rose',
      badge: 'Control de Calidad',
      icon: CheckCircle2,
      summary: 'Automatización de pipelines CI/CD, pruebas de regresión, análisis estático de código con SonarQube, auditorías de seguridad y despliegues sin interrupción.',
      certifications: ['ISTQB Test Automation Engineer', 'GitLab CI/CD Specialist'],
      stack: ['SonarQube Quality Gate', 'Cypress / Selenium e2e', 'GitLab CI/CD Pipelines', 'Trivy / OWASP ZAP'],
      responsibilities: [
        'Implementación de Quality Gates automáticos con SonarQube',
        'Pruebas automatizadas de rendimiento, estrés y concurrencia',
        'Despliegues continuos automatizados sin parada de servicio (zero-downtime)',
        'Auditorías continuas de vulnerabilidades de dependencias y contenedores'
      ]
    }
  ];

  return (
    <section id="equipo-pcap" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-[#1A5C38] bg-[#EDF7F1] px-4 py-1.5 rounded-full border border-[#1A5C38]/20 inline-block shadow-xs"
          >
            Estructura Humana del Pliego
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight"
          >
            Equipo Multidisciplinar Alineado con el PCAP
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base mt-3 max-w-2xl mx-auto"
          >
            Asignación exacta y sin demoras de los perfiles exigidos por el pliego del IECA, garantizando cobertura técnica completa y dedicación contrastada.
          </motion.p>
        </div>

        {/* Interactive Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: List of Compact Profiles */}
          <div className="lg:col-span-5 space-y-3">
            {perfiles.map((p, index) => {
              const isSelected = selectedProfile === index;
              return (
                <motion.div
                  key={p.code}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => setSelectedProfile(index)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-white border-[#1A5C38] shadow-lg shadow-[#1A5C38]/10 ring-2 ring-[#1A5C38]/20'
                      : 'bg-white/70 hover:bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm text-white shrink-0 shadow-xs ${
                      isSelected ? 'bg-[#1A5C38]' : 'bg-slate-700'
                    }`}>
                      {p.code}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-slate-900">
                          {p.title}
                        </h3>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-500 block">
                        {p.category}
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <ChevronRight className={`w-5 h-5 transition-transform ${
                      isSelected ? 'text-[#1A5C38] translate-x-1' : 'text-slate-400'
                    }`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Detailed Animated Profile Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProfile}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-xl"
              >
                {/* Header Profile Detail */}
                <div className="flex items-start justify-between pb-6 border-b border-slate-100 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#EDF7F1] text-[#1A5C38] flex items-center justify-center font-black text-lg border border-[#1A5C38]/30">
                      {perfiles[selectedProfile].code}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#1A5C38] uppercase tracking-wider block">
                        {perfiles[selectedProfile].category}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900">
                        {perfiles[selectedProfile].title}
                      </h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EDF7F1] text-[#1A5C38] border border-[#1A5C38]/20 shrink-0">
                    {perfiles[selectedProfile].badge}
                  </span>
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-600 leading-relaxed py-5">
                  {perfiles[selectedProfile].summary}
                </p>

                {/* Responsibilities */}
                <div className="space-y-2.5 pb-6 border-b border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Funciones Clave Asignadas en el PCAP
                  </span>
                  {perfiles[selectedProfile].responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#1A5C38] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Certifications and Tools */}
                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      Certificaciones Requeridas
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {perfiles[selectedProfile].certifications.map((cert, cIdx) => (
                        <span key={cIdx} className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-emerald-600" />
                      Tecnologías & Entornos
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {perfiles[selectedProfile].stack.map((stk, sIdx) => (
                        <span key={sIdx} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800">
                          {stk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
