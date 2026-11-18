import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solvencia from './components/Solvencia';
import Especializacion from './components/Especializacion';
import Proyectos from './components/Proyectos';
import EquipoPCAP from './components/EquipoPCAP';
import CompromisoDEGA from './components/CompromisoDEGA';
import Footer from './components/Footer';
import AuditModal from './components/AuditModal';
import LegalModal from './components/LegalModal';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-[#1A5C38] selection:text-white">
      
      {/* Fixed Sticky Header Navbar */}
      <Navbar onOpenAuditModal={() => setAuditModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section (Pantalla Completa & Impacto) */}
        <Hero onOpenAuditModal={() => setAuditModalOpen(true)} />

        {/* 2. Quiénes Somos y Rigor Metodológico (2 columnas) */}
        <Solvencia />

        {/* 3. Áreas de Especialización Clave (Grid 3 columnas) */}
        <Especializacion />

        {/* 4. Proyectos de Referencia (Galería con Presupuestos) */}
        <Proyectos />

        {/* 5. Equipo Multidisciplinar PCAP (Sin nombres físicos) */}
        <EquipoPCAP />

        {/* 6. Compromiso de Valor para el Portal DEGA (IECA) */}
        <CompromisoDEGA onOpenAuditModal={() => setAuditModalOpen(true)} />
      </main>

      {/* 7. Footer / Contacto Rápido */}
      <Footer onOpenLegalModal={(type) => setLegalModalType(type)} />

      {/* Modals */}
      <AuditModal 
        isOpen={auditModalOpen} 
        onClose={() => setAuditModalOpen(false)} 
      />

      <LegalModal 
        type={legalModalType} 
        onClose={() => setLegalModalType(null)} 
      />

      {/* Floating Scroll-to-Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-[#1A5C38] text-white shadow-xl shadow-[#1A5C38]/30 hover:bg-[#0F3B23] transition-all cursor-pointer border border-emerald-400/30"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
