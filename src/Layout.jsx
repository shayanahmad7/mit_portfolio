import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Smooth scroll behavior
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navItems = [
    { name: 'HOME', page: 'Home' },
    { name: 'ABOUT', page: 'About' },
    { name: 'PROJECTS', page: 'Projects' },
    { name: 'WHY PRG', page: 'WhyPRG' },
    { name: 'RESUME', page: 'Resume' },
  ];

  const isActive = (pageName) => {
    const currentPath = location.pathname;
    return currentPath === createPageUrl(pageName) || 
           (pageName === 'Home' && currentPath === '/');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Desktop Navigation - Brutalist */}
      <nav className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b-2 border-white/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            <Link 
              to={createPageUrl('Home')}
              className="text-xl font-black hover:text-[#FF6B35] transition-colors tracking-tight"
            >
              SHAYAN_AHMAD
            </Link>

            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={createPageUrl(item.page)}
                  className={`px-5 py-3 font-bold text-sm transition-all border-2 ${
                    isActive(item.page)
                      ? 'bg-[#FF6B35] text-black border-[#FF6B35]'
                      : 'text-white border-transparent hover:border-white/20'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b-2 border-white/10">
        <div className="flex items-center justify-between h-16 px-4">
          <Link 
            to={createPageUrl('Home')}
            className="text-lg font-black"
          >
            SHAYAN_A
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border-2 border-white/20 hover:border-[#FF6B35] transition-all"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40 bg-black"
          >
            <div className="pt-24 px-6">
              <div className="space-y-4">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={createPageUrl(item.page)}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-6 py-4 font-black text-2xl transition-all border-l-4 ${
                        isActive(item.page)
                          ? 'bg-[#FF6B35]/20 border-[#FF6B35] text-[#FF6B35]'
                          : 'border-transparent hover:border-white/20 hover:pl-8'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content with Page Transitions */}
      <main className="lg:pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.4,
              ease: [0.43, 0.13, 0.23, 0.96]
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}