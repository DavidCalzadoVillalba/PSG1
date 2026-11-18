import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solvencia from './components/Solvencia';
import Especializacion from './components/Especializacion';
import Proyectos from './components/Proyectos';
import EquipoPCAP from './components/EquipoPCAP';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
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
      
      {/* Barra de Navegación Flotante */}
      <Navbar />

      {/* Secciones Corporativas de FimoSoft */}
      <main>
        {/* 1. Hero Section (Presentación de Empresa & Propósito) */}
        <Hero />

        {/* 2. Quiénes Somos y Rigor Metodológico */}
        <Solvencia />

        {/* 3. Áreas de Especialización Clave (Esquemas Gráficos) */}
        <Especializacion />

        {/* 4. Proyectos de Referencia en el Sector Público */}
        <Proyectos />

        {/* 5. Capacidades Globales de Nuestro Equipo */}
        <EquipoPCAP />
      </main>

      {/* 6. Pie de Página y Contacto Rápido */}
      <Footer onOpenLegalModal={(type) => setLegalModalType(type)} />

      {/* Modal Legal y Transparencia */}
      <LegalModal 
        type={legalModalType} 
        onClose={() => setLegalModalType(null)} 
      />

      {/* Botón Flotante para Volver Arriba */}
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
