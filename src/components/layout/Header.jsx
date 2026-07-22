import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Mail, Phone, MapPin, Award, Building, Activity, ShieldCheck, HeartPulse } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const location = useLocation();

  // Close menus on page change
  useEffect(() => {
    setIsOpen(false);
    setActiveMega(null);
  }, [location]);

  // Handle scroll events for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Company',
      mega: true,
      id: 'company',
      items: [
        { name: 'About Us', path: '/about', desc: 'Our legacy, mission, and vision.', icon: Building },
        { name: 'Quality Assurance', path: '/quality-assurance', desc: 'Strict guidelines and compliance standards.', icon: ShieldCheck },
        { name: 'Certifications', path: '/certifications', desc: 'WHO-GMP, ISO, FSSAI accreditations.', icon: Award }
      ]
    },
    {
      name: 'Capabilities',
      mega: true,
      id: 'capabilities',
      items: [
        { name: 'Manufacturing Facility', path: '/manufacturing', desc: 'Cleanrooms, systems, and production lines.', icon: Activity },
        { name: 'Research & Development', path: '/research-development', desc: 'Formulation discovery and laboratory excellence.', icon: HeartPulse },
        { name: 'Photo Gallery', path: '/gallery', desc: 'Inside our world-class plant.', icon: Building }
      ]
    },
    { name: 'Products', path: '/products' },
    { name: 'Careers', path: '/careers' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top Banner (Info bar) */}
      <div className="w-full bg-primary text-white/80 py-2 px-4 border-b border-white/10 text-xs hidden lg:block font-sans">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-accent" />
              Amravati, Maharashtra, India
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={13} className="text-accent" />
              info@chkmedicus.com
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-semibold tracking-wider text-[10px] bg-medical px-2.5 py-0.5 rounded-full text-white">
              ESTD. 2024
            </span>
            <span>Care • Cure • Compassion</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed top-0 lg:top-[33px] left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 lg:top-0'
            : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center">
          {/* Logo Brand */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-serif font-bold text-xl shadow-inner group-hover:scale-105 transition-transform duration-300">
              C
            </div>
            <div>
              <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-primary flex items-center gap-1">
                CHK MEDICUS
              </span>
              <span className="block text-[9px] tracking-[0.2em] font-sans font-semibold uppercase text-slate-500 -mt-1">
                CARE • CURE • COMPASSION
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              if (link.mega) {
                return (
                  <div
                    key={link.name}
                    className="relative px-3 py-2"
                    onMouseEnter={() => setActiveMega(link.id)}
                    onMouseLeave={() => setActiveMega(null)}
                  >
                    <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-primary transition-colors cursor-pointer">
                      {link.name}
                      <ChevronDown size={14} className={`transition-transform duration-200 ${activeMega === link.id ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {activeMega === link.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-100 p-4 z-50"
                        >
                          <div className="grid gap-2">
                            {link.items.map((subItem) => {
                              const Icon = subItem.icon;
                              return (
                                <NavLink
                                  key={subItem.name}
                                  to={subItem.path}
                                  className={({ isActive }) => `flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors ${
                                    isActive ? 'bg-slate-50/80 border-l-2 border-medical' : ''
                                  }`}
                                >
                                  <div className="p-2 rounded bg-primary/5 text-primary">
                                    <Icon size={18} />
                                  </div>
                                  <div>
                                    <div className="text-xs font-semibold text-primary">{subItem.name}</div>
                                    <div className="text-[10px] text-slate-500 mt-0.5">{subItem.desc}</div>
                                  </div>
                                </NavLink>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => `px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                    isActive
                      ? 'text-white bg-primary'
                      : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Quick Inquiry CTA button */}
          <div className="hidden lg:block">
            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-medical rounded-md hover:bg-medical-hover shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              Business Inquiry
            </NavLink>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-primary hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[64px] left-0 w-full bg-white border-b border-slate-200 shadow-xl z-30 lg:hidden overflow-y-auto max-h-[calc(100vh-64px)]"
          >
            <div className="p-4 space-y-4">
              {navLinks.map((link) => {
                if (link.mega) {
                  return (
                    <div key={link.name} className="space-y-1">
                      <div className="text-[10px] font-bold tracking-wider text-slate-400 uppercase px-3 py-1">
                        {link.name}
                      </div>
                      <div className="pl-3 border-l border-slate-100 space-y-1">
                        {link.items.map((subItem) => (
                          <NavLink
                            key={subItem.name}
                            to={subItem.path}
                            className={({ isActive }) => `block px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                              isActive ? 'bg-primary/5 text-primary' : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                            }`}
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) => `block px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                      isActive ? 'bg-primary/5 text-primary' : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </NavLink>
                );
              })}
              <div className="pt-4 border-t border-slate-100">
                <NavLink
                  to="/contact"
                  className="block w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white bg-medical rounded-md hover:bg-medical-hover shadow-sm"
                >
                  Distributor Inquiry
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
