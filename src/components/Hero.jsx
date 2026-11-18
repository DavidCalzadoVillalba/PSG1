import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  MapPin,
  Code2,
  ArrowRight,
  Mail
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
    { value: 'ENS', label: 'Seguridad Alta', sub: 'Esquema Nacional', icon: Shield },
    { value: 'Drupal', label: 'Núcleo Especialista', sub: 'Multisite & APIs', icon: Code2 },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] pt-36 pb-24 md:pt-48 md:pb-32 overflow-hidden hero-gradient-mesh text-white flex items-center justify-center"
    >
      {/* Background Geo Grid & Animated Canvas */}
      <div className="absolute inset-0 geo-grid-pattern opacity-60 pointer-events-none" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-auto cursor-crosshair opacity-60"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col items-center text-center">

        {/* Main Centered Title - Brand & Purpose */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.12] text-white"
        >
          FimoSoft S.L.
          <span className="block mt-3 text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
            Ingeniería de Software para el Sector Público
          </span>
        </motion.h1>

        {/* Quick Key Stats Grid - Centered 3 items */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mt-10"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="rounded-2xl p-4 text-center backdrop-blur-md border border-white/10 bg-white/10 text-white transition-all shadow-sm"
              >
                <Icon className="w-5 h-5 mx-auto mb-2 opacity-90 text-emerald-300" />
                <span className="block text-2xl sm:text-3xl font-extrabold tracking-tight text-emerald-300">
                  {stat.value}
                </span>
                <span className="text-[11px] text-slate-200 uppercase tracking-wider font-semibold block mt-1">
                  {stat.label}
                </span>
                <span className="text-[10px] text-slate-300/80 block mt-0.5 font-light">
                  {stat.sub}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Call to Action - Centered Eye-catching "Contactar" */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex items-center justify-center mt-10"
        >
          <a
            href="#contacto"
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-[#1A5C38] to-[#0F3B23] text-white font-bold text-base shadow-xl shadow-emerald-950/50 hover:from-emerald-400 hover:to-[#0A2617] transition-all transform hover:-translate-y-0.5 flex items-center gap-3 border border-emerald-400/40 group cursor-pointer"
          >
            <Mail className="w-5 h-5 text-emerald-300 group-hover:scale-110 transition-transform" />
            <span>Contactar</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
