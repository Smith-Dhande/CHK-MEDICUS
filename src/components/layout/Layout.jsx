import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loading, setLoading] = useState(true);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate minor route transition load
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Monitor scroll for Back-to-Top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg-light text-slate-800 relative selection:bg-medical selection:text-white">
      {/* Dynamic Route Loading overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center pointer-events-none"
          >
            <div className="flex items-center space-x-2 mb-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-primary to-medical flex items-center justify-center text-white font-serif font-bold text-xl animate-pulse">
                C
              </div>
              <div className="text-left">
                <span className="font-serif text-lg font-bold tracking-tight text-primary block">CHK MEDICUS</span>
                <span className="block text-[8px] tracking-[0.2em] font-semibold text-slate-400 uppercase -mt-1">CARE • CURE • COMPASSION</span>
              </div>
            </div>
            <div className="w-40 h-[2px] bg-slate-100 rounded-full overflow-hidden relative">
              <div className="h-full bg-medical w-1/2 absolute left-0 top-0 rounded-full animate-[reveal-left_1s_infinite_linear]" style={{animationDuration: '1.2s'}}></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Navigation */}
      <Header />

      {/* Spacer to push content down because navbar is fixed (omitted on Home route for transparent background overlay) */}
      {pathname !== '/' && <div className="h-[76px] lg:h-[116px]"></div>}

      {/* Main Pages Container */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Global Corporate Footer */}
      <Footer />

      {/* Floating Action Elements */}
      <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-3 z-40">
        {/* WhatsApp Floating Button */}
        <motion.a
          href="https://wa.me/917122345678" // Replace with corporate WhatsApp
          target="_blank"
          rel="noopener noreferrer"
              className="h-12 w-12 rounded-full bg-medical text-white flex items-center justify-center shadow-lg hover:bg-medical-hover hover:scale-105 active:scale-95 transition-all group relative"
          aria-label="Contact on WhatsApp"
          whileHover={{ y: -2 }}
        >
          <i className="fa-brands fa-whatsapp text-2xl"></i>
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[10px] font-bold py-1 px-2.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            WhatsApp Inquiry
          </span>
        </motion.a>

        {/* Back to Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              onClick={scrollToTop}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-hover hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
