import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Layers, 
  Briefcase, 
  Users2, 
  Sparkles, 
  Menu, 
  X, 
  PhoneCall, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function Navbar({ onOpenAuditModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solvencia', href: '#quienes-somos', icon: Building2 },
    { name: 'Especialización', href: '#especializacion', icon: Layers },
    { name: 'Referencias', href: '#proyectos', icon: Briefcase },
    { name: 'Perfiles PCAP', href: '#equipo-pcap', icon: Users2 },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo FimoSoft */}
        <a 
          href="#hero" 
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#1A5C38] rounded-xl p-1"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1A5C38] to-[#0F3B23] flex items-center justify-center text-white shadow-md shadow-[#1A5C38]/20 group-hover:scale-105 transition-all duration-300 border border-emerald-500/30">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H9v4h9c.6 0 1 .4 1 1v4c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V5c0-.6.4-1 1-1z"/>
              <circle cx="18" cy="6" r="1.5" fill="#D9A74A" stroke="none" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-bold tracking-tight flex items-center gap-1.5 transition-colors ${
              scrolled ? 'text-slate-900' : 'text-white'
            }`}>
              FimoSoft 
              <span className="text-[11px] px-1.5 py-0.5 rounded bg-[#EDF7F1] text-[#1A5C38] font-semibold border border-[#1A5C38]/20">
                S.L.
              </span>
            </span>
            <span className={`text-[10px] font-medium uppercase tracking-wider transition-colors ${
              scrolled ? 'text-slate-500' : 'text-emerald-200/80'
            }`}>
              Ingeniería Pública & GeoDatos
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-2 rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
                  scrolled 
                    ? 'text-slate-600 hover:text-[#1A5C38] hover:bg-slate-100/80' 
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4 opacity-70" />
                <span>{link.name}</span>
              </a>
            );
          })}

          <a
            href="#compromiso-dega"
            className="ml-2 px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 bg-[#EDF7F1] text-[#1A5C38] border border-[#1A5C38]/30 shadow-xs hover:bg-[#1A5C38] hover:text-white transition-all duration-200 group"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Propuesta IECA (DEGA)</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500 group-hover:text-amber-300 transition-colors" />
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:676974210"
            className={`text-xs font-semibold px-3.5 py-2 rounded-xl border transition-all flex items-center gap-1.5 ${
              scrolled
                ? 'border-slate-300 text-slate-700 hover:bg-slate-100'
                : 'border-white/20 text-white hover:bg-white/10 backdrop-blur-sm'
            }`}
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#1A5C38] group-hover:text-emerald-400" />
            <span>676 974 210</span>
          </a>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenAuditModal}
            className="text-xs font-semibold px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-[#1A5C38] text-white shadow-md shadow-[#1A5C38]/30 hover:from-emerald-500 hover:to-[#0F3B23] transition-all flex items-center gap-1.5 border border-emerald-400/30 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <span>Auditoría DEGA (200h)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-xl transition-colors ${
            scrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-xl text-slate-700 hover:bg-[#EDF7F1] hover:text-[#1A5C38] font-medium transition-colors text-sm"
                  >
                    <Icon className="w-5 h-5 text-[#1A5C38]" />
                    <span>{link.name}</span>
                  </a>
                );
              })}

              <a
                href="#compromiso-dega"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-[#EDF7F1] text-[#1A5C38] font-bold text-sm border border-[#1A5C38]/30 mt-1"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Propuesta IECA (DEGA)</span>
                </div>
                <span className="text-[11px] bg-[#1A5C38] text-white px-2 py-0.5 rounded-full font-semibold">200h Gratis</span>
              </a>

              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAuditModal();
                  }}
                  className="w-full py-3 rounded-xl bg-[#1A5C38] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
                >
                  <ShieldCheck className="w-4 h-4 text-amber-300" />
                  <span>Solicitar Plan de Auditoría (200h)</span>
                </button>
                <a
                  href="tel:676974210"
                  className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#1A5C38]" />
                  <span>Llamar: 676 974 210</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
