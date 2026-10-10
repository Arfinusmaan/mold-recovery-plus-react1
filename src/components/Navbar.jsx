import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, 
  ChevronDown, 
  Menu, 
  X, 
  FlaskConical, 
  Search, 
  ShieldAlert, 
  Wind, 
  Fan, 
  ArrowRight, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/businessData';

const SERVICE_ICONS = {
  'mold-testing': FlaskConical,
  'mold-inspection': Search,
  'mold-removal': ShieldAlert,
  'smoke-odor-removal': Wind,
  'air-duct-cleaning': Fan
};

export const Navbar = ({ currentPath, onNavigate, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (path) => {
    onNavigate(path);
    setServicesOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-3' 
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-6 w-full">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-2 sm:gap-3 text-left group min-w-0 max-w-[calc(100%-86px)] sm:max-w-none"
          >
            <div className="relative flex items-center justify-center p-1 rounded-xl bg-white border border-slate-200 shadow-sm group-hover:border-[#0066FF]/40 transition-all shrink-0">
              <img 
                src="/assets/images/logo.png" 
                alt="Mold Recovery Plus Logo" 
                className="h-8 sm:h-9 md:h-10 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-display font-black text-sm sm:text-lg md:text-xl tracking-tight text-slate-900 group-hover:text-[#0066FF] transition-colors leading-tight truncate">
                MOLD RECOVERY <span className="text-[#0066FF]">PLUS</span>
              </span>
              <span className="text-[8px] sm:text-[10px] uppercase tracking-wider text-slate-500 font-bold mt-0.5 truncate hidden min-[360px]:block">
                Remediation & Odor Solutions NJ
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            {/* Home */}
            <button
              onClick={() => handleNavClick('/')}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                currentPath === '/' 
                  ? 'text-[#0066FF] bg-blue-50 font-bold' 
                  : 'text-slate-700 hover:text-[#0066FF] hover:bg-slate-100/70'
              }`}
            >
              Home
            </button>

            {/* About Us */}
            <button
              onClick={() => handleNavClick('/about')}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                currentPath === '/about' 
                  ? 'text-[#0066FF] bg-blue-50 font-bold' 
                  : 'text-slate-700 hover:text-[#0066FF] hover:bg-slate-100/70'
              }`}
            >
              About Us
            </button>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                  currentPath.startsWith('/services') 
                    ? 'text-[#0066FF] bg-blue-50 font-bold' 
                    : 'text-slate-700 hover:text-[#0066FF] hover:bg-slate-100/70'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-[#0066FF]' : ''}`} />
              </button>

              {/* Clean Opaque Solid Dropdown Menu */}
              {servicesOpen && (
                <div 
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 top-full mt-2 w-[380px] p-2.5 bg-white rounded-2xl border border-slate-200 shadow-2xl z-[100] animate-in fade-in-0 zoom-in-95 duration-150"
                  style={{ backgroundColor: '#ffffff' }}
                >
                  <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 mb-1">
                    <span className="text-xs uppercase tracking-wider font-extrabold text-slate-500">
                      Our Specialties
                    </span>
                    <button
                      onClick={() => handleNavClick('/services')}
                      className="text-xs font-bold text-[#0066FF] hover:underline flex items-center gap-1"
                    >
                      <span>View All</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  <div className="space-y-1">
                    {SERVICES.map((s) => {
                      const Icon = SERVICE_ICONS[s.id] || ShieldAlert;
                      const isActive = currentPath === s.path;
                      return (
                        <button
                          key={s.id}
                          onClick={() => handleNavClick(s.path)}
                          className={`w-full flex items-center gap-3 p-2.5 rounded-xl text-left transition-all group ${
                            isActive 
                              ? 'bg-blue-50 border border-blue-200' 
                              : 'hover:bg-slate-50'
                          }`}
                        >
                          <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0 group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-sm text-slate-900 group-hover:text-[#0066FF] transition-colors">
                                {s.title}
                              </span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                                {s.badge}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 truncate mt-0.5">
                              {s.summary}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Gallery */}
            <button
              onClick={() => handleNavClick('/gallery')}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                currentPath === '/gallery' 
                  ? 'text-[#0066FF] bg-blue-50 font-bold' 
                  : 'text-slate-700 hover:text-[#0066FF] hover:bg-slate-100/70'
              }`}
            >
              Project Gallery
            </button>

            {/* Contact */}
            <button
              onClick={() => handleNavClick('/contact')}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                currentPath === '/contact' 
                  ? 'text-[#0066FF] bg-blue-50 font-bold' 
                  : 'text-slate-700 hover:text-[#0066FF] hover:bg-slate-100/70'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.phoneRaw}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold rounded-full text-slate-800 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <Phone className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="px-6 py-2.5 rounded-full text-sm font-bold text-white bg-[#0066FF] hover:bg-[#0052cc] shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-[1.02] flex items-center gap-2"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2 shrink-0 ml-auto">
            <a
              href={BUSINESS_INFO.phoneRaw}
              className="flex items-center justify-center w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-[#0066FF] hover:bg-[#0066FF] hover:text-white transition-all shadow-sm shrink-0 active:scale-95"
              aria-label={`Call Mold Recovery Plus directly at ${BUSINESS_INFO.phone}`}
              title="Call Mold Recovery Plus"
            >
              <Phone className="w-5 h-5" strokeWidth={2.25} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center w-11 h-11 rounded-xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 transition-colors shadow-sm shrink-0 active:scale-95"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1">
            
            <button
              onClick={() => handleNavClick('/')}
              className="text-left px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('/about')}
              className="text-left px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
            >
              About Us
            </button>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileServicesOpen && (
                <div className="pl-4 pr-2 py-1 flex flex-col gap-1 border-l-2 border-[#0066FF] ml-3 my-1">
                  <button
                    onClick={() => handleNavClick('/services')}
                    className="text-left py-2 px-2 text-xs font-bold text-[#0066FF]"
                  >
                    → Services Overview
                  </button>
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => handleNavClick(s.path)}
                      className="text-left py-2 px-2 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded"
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('/gallery')}
              className="text-left px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
            >
              Project Gallery
            </button>

            <button
              onClick={() => handleNavClick('/contact')}
              className="text-left px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50"
            >
              Contact
            </button>

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <a
                href={BUSINESS_INFO.phoneRaw}
                className="w-full py-3 rounded-full bg-slate-900 text-center font-bold text-sm text-white flex items-center justify-center gap-2 shadow"
              >
                <Phone className="w-4 h-4 text-[#0066FF]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-full bg-[#0066FF] text-center font-bold text-sm text-white shadow-lg"
              >
                Get a Free Estimate
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
