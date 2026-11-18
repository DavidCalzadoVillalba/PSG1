import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  MapPin, 
  Clock, 
  Code2, 
  ArrowRight, 
  Sparkles, 
  Server, 
  CheckCircle2, 
  Layers,
  Database
} from 'lucide-react';

export default function Hero({ onOpenAuditModal }) {
  const canvasRef = useRef(null);

  // Interactive Geo-Spatial Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width, height;
    let nodes = [];
    let mouse = { x: null, y: null, radius: 140 };

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      initNodes();
    };

    const initNodes = () => {
      nodes = [];
      const count = Math.min(Math.floor(width / 32), 65);
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 2 + 1.2,
          baseX: Math.random() * width,
          baseY: Math.random() * height
        });
      }
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connecting lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(42, 139, 86, ${0.22 * (1 - dist / 125)})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // Draw and update nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Interaction with mouse
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = mouse.x - n.x;
          const mdy = mouse.y - n.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < mouse.radius) {
            const force = (mouse.radius - mDist) / mouse.radius;
            n.x -= (mdx / mDist) * force * 2.5;
            n.y -= (mdy / mDist) * force * 2.5;
          }
        }

        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(74, 222, 128, 0.75)';
        ctx.shadowColor = 'rgba(74, 222, 128, 0.5)';
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const stats = [
    { value: '100%', label: 'Sede en Sevilla', sub: 'Calle Tarfia 7', icon: MapPin },
    { value: '+200h', label: 'Estudio DEGA', sub: 'A coste cero', icon: Clock, highlight: true },
    { value: 'ENS', label: 'Seguridad Alta', sub: 'Esquema Nacional', icon: Shield },
    { value: 'Drupal', label: 'Núcleo Especialista', sub: 'Multisite & APIs', icon: Code2 },
  ];

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden hero-gradient-mesh text-white flex items-center"
    >
      {/* Background Geo Grid & Animated Canvas */}
      <div className="absolute inset-0 geo-grid-pattern opacity-60 pointer-events-none" />
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-auto cursor-crosshair opacity-60" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Institutional Pill Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium text-emerald-200 mb-8 shadow-sm"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Socio Tecnológico Especializado · Andalucía</span>
          <span className="text-white/40">|</span>
          <span className="text-[#D9A74A] font-semibold flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            Alineado al PCAP del IECA
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy (Impacto directo, Cero Texto Denso) */}
          <div className="lg:col-span-7 space-y-7">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white"
            >
              FimoSoft S.L. – <br />
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
                Ingeniería de Software
              </span>{' '}
              para el Sector Público.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-200 font-light max-w-2xl leading-relaxed"
            >
              Transformación digital, portales de datos masivos y soluciones geoespaciales de alto rendimiento en Andalucía.
            </motion.p>

            {/* Quick Stats Grid with Framer Motion Hover */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2"
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`rounded-2xl p-4 text-center backdrop-blur-md border transition-all ${
                      stat.highlight
                        ? 'bg-amber-500/15 border-amber-400/40 text-amber-200 shadow-lg shadow-amber-950/20'
                        : 'bg-white/10 border-white/10 text-white'
                    }`}
                  >
                    <Icon className={`w-4 h-4 mx-auto mb-1.5 opacity-80 ${stat.highlight ? 'text-amber-300' : 'text-emerald-300'}`} />
                    <span className={`block text-2xl font-extrabold tracking-tight ${stat.highlight ? 'text-amber-300' : 'text-emerald-300'}`}>
                      {stat.value}
                    </span>
                    <span className="text-[11px] text-slate-200 uppercase tracking-wider font-semibold block mt-0.5">
                      {stat.label}
                    </span>
                    <span className="text-[10px] text-slate-300/80 block mt-0.5 font-light">
                      {stat.sub}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Visual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-3"
            >
              <a
                href="#compromiso-dega"
                className="px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-[#1A5C38] to-[#0F3B23] text-white font-semibold text-sm shadow-xl shadow-emerald-950/50 hover:from-emerald-400 hover:to-[#0A2617] transition-all transform hover:-translate-y-0.5 flex items-center gap-2 border border-emerald-400/30 group"
              >
                <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
                <span>Ver nuestra propuesta para el IECA</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contacto"
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm backdrop-blur-md border border-white/20 transition-all flex items-center gap-2 hover:border-white/40"
              >
                <span>Contactar</span>
              </a>

              <button
                onClick={onOpenAuditModal}
                className="text-xs text-amber-300 hover:text-amber-200 font-semibold underline underline-offset-4 flex items-center gap-1.5 cursor-pointer ml-1"
              >
                <span>Ver alcance de 200h gratis</span>
              </button>
            </motion.div>

          </div>

          {/* Floating High-Tech Interactive Dashboard Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="glass-panel-dark rounded-3xl p-6 sm:p-7 shadow-2xl relative border border-emerald-400/30 overflow-hidden"
            >
              {/* Top Bar with glowing status */}
              <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-400 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
                  <span className="text-[11px] font-mono text-emerald-300 font-semibold ml-2">
                    fimosoft // ieca-dega-ready
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-400/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  EN LÍNEA
                </span>
              </div>

              {/* Dynamic Metrics */}
              <div className="space-y-4 pt-5">
                
                {/* Metric 1: ANS Availability */}
                <div className="bg-black/35 rounded-2xl p-4 border border-white/5 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 flex items-center gap-1.5">
                      <Server className="w-3.5 h-3.5 text-emerald-400" />
                      Disponibilidad Objetivo ANS:
                    </span>
                    <span className="text-emerald-400 font-bold font-mono text-sm">99.95%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden p-0.5">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '99.95%' }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                      className="bg-gradient-to-r from-emerald-500 to-teal-300 h-full rounded-full"
                    />
                  </div>
                </div>

                {/* Metric 2: Stack Match */}
                <div className="bg-black/35 rounded-2xl p-4 border border-white/5 space-y-3">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold block flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                    Arquitectura Exigida por el PCAP del IECA
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { name: 'Drupal 10 Core', tag: 'CMS' },
                      { name: 'PostGIS / Spatial', tag: 'Geo' },
                      { name: 'Docker / Swarm', tag: 'Ops' },
                      { name: 'SonarQube / Cypress', tag: 'QA' },
                      { name: 'WCAG 2.1 AA', tag: 'A11y' },
                      { name: 'OpenAPI REST', tag: 'API' }
                    ].map((item, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 font-mono text-[11px] flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metric 3: Value Add Highlight */}
                <div 
                  onClick={onOpenAuditModal}
                  className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 to-emerald-900/30 border border-amber-400/30 flex items-center justify-between cursor-pointer hover:border-amber-400/60 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 font-bold">
                      <Sparkles className="w-5 h-5 text-amber-300 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">Mejora Ofertada Sin Cargo</span>
                      <span className="text-[11px] text-amber-200/90">200h de Administrador de Sistemas para el Portal DEGA</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
                </div>

              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
