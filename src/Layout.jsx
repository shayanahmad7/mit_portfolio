import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, Home, User, Folder, Target, FileText, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', page: 'Home', icon: Home },
    { name: 'About', page: 'About', icon: User },
    { name: 'Projects', page: 'Projects', icon: Folder },
    { name: 'Why PRG', page: 'WhyPRG', icon: Target },
    { name: 'Resume', page: 'Resume', icon: FileText },
  ];

  const isActive = (pageName) => {
    const currentPath = location.pathname;
    return currentPath === createPageUrl(pageName) || 
           (pageName === 'Home' && currentPath === '/');
  };

  return (
    <div className="min-h-screen bg-[#FAFAF5]">
      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-[#0D1B2A]/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              to={createPageUrl('Home')}
              className="text-lg font-medium text-[#0D1B2A] hover:text-[#E07A5F] transition-colors"
            >
              Shayan Ahmad
            </Link>

            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={createPageUrl(item.page)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    isActive(item.page)
                      ? 'bg-[#0D1B2A] text-white'
                      : 'text-[#0D1B2A]/70 hover:bg-[#0D1B2A]/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="mailto:sa6097@nyu.edu"
                className="ml-4 flex items-center gap-2 px-4 py-2 bg-[#E07A5F] text-white rounded-full hover:bg-[#E07A5F]/90 transition-all text-sm"
              >
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-[#0D1B2A]/5">
        <div className="flex items-center justify-between h-14 px-4">
          <Link 
            to={createPageUrl('Home')}
            className="text-lg font-medium text-[#0D1B2A]"
          >
            Shayan Ahmad
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0D1B2A]"
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
            className="lg:hidden fixed inset-0 z-40 bg-white"
          >
            <div className="pt-20 px-6">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={createPageUrl(item.page)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-lg transition-all ${
                      isActive(item.page)
                        ? 'bg-[#0D1B2A] text-white'
                        : 'text-[#0D1B2A]/70 hover:bg-[#0D1B2A]/5'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                ))}
                <a
                  href="mailto:sa6097@nyu.edu"
                  className="flex items-center gap-3 px-4 py-3 bg-[#E07A5F] text-white rounded-xl text-lg mt-4"
                >
                  <Mail className="w-5 h-5" />
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="lg:pt-16">
        {children}
      </main>
    </div>
  );
}