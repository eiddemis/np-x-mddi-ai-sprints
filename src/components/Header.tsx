import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, FolderOpen, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
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
    { name: 'Agenda', href: '#agenda' },
    { name: 'Resources', href: '#resources' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Main Nav */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#112240]/95 backdrop-blur-md shadow-xl border-b border-[#64FFDA]/20 py-3'
            : 'bg-[#0A192F]/85 backdrop-blur-sm py-4 border-b border-[#112240]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Title */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-[#64FFDA]/40 bg-[#020C1B] glow-cyan transition-transform group-hover:scale-105 shadow-inner">
              <Sparkles className="w-5 h-5 text-[#64FFDA]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold tracking-tight text-[#E6F1FF] group-hover:text-[#64FFDA] transition-colors">
                  NP x MDDI AI Sprints
                </span>
                <span className="bg-[#64FFDA]/10 text-[#64FFDA] text-[11px] font-semibold px-2 py-0.5 rounded border border-[#64FFDA]/30">
                  Course Portal
                </span>
              </div>
              <p className="text-[11px] text-[#8892B0] font-normal hidden sm:block">
                Ngee Ann Polytechnic & Ministry of Digital Development and Information
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-[#8892B0] hover:text-[#64FFDA] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#64FFDA] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Quick Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#agenda"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-[#112240] hover:bg-[#1b345d] text-[#E6F1FF] border border-[#64FFDA]/30 hover:border-[#64FFDA]/60 transition-all cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#64FFDA]" />
              <span>Agenda</span>
            </a>
            <a
              href="#resources"
              className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-lg bg-immersive-btn text-[#0A192F] shadow-md shadow-[#64FFDA]/20 hover:shadow-[#64FFDA]/40 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <FolderOpen className="w-3.5 h-3.5" />
              <span>Resources</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#112240] border border-[#64FFDA]/20 text-[#8892B0] hover:text-[#64FFDA]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A192F]/95 backdrop-blur-xl border-b border-[#64FFDA]/20 px-4 pt-3 pb-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-[#CCD6F6] hover:text-[#64FFDA] py-2 border-b border-[#112240]"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 space-y-2">
            <a
              href="#agenda"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-2.5 px-4 rounded-lg bg-[#112240] text-[#64FFDA] border border-[#64FFDA]/30"
            >
              <BookOpen className="w-4 h-4 text-[#64FFDA]" />
              <span>Programme Agenda</span>
            </a>
            <a
              href="#resources"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 text-xs font-bold py-2.5 px-4 rounded-lg bg-immersive-btn text-[#0A192F]"
            >
              <FolderOpen className="w-4 h-4" />
              <span>Access Course Resources</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
