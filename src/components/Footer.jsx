import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowUpRight, 
  Award,
  HeartHandshake
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/businessData';
import { GoogleRatingBadge, GoogleGIcon } from './GoogleRatingBadge';

export const Footer = ({ onNavigate, onOpenQuote }) => {
  return (
    <footer className="bg-[#0b1329] text-slate-300 border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      
      {/* Decorative subtle blue glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Callout Box */}
        <div className="p-8 sm:p-10 rounded-[2.5rem] bg-slate-900/90 border border-slate-800 shadow-2xl mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#0066FF] text-xs font-bold mb-3">
              <Award className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>Written Price-Beat Guarantee on Competitor Estimates</span>
            </div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
              Concerned About Mold, Smoke Odor, or Air Ducts?
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Speak directly with owner Matt Jarnis. We provide prompt, honest diagnostics without fear-based sales pitches across Central & South New Jersey.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <a
              href={BUSINESS_INFO.phoneRaw}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#0066FF]" />
              <span>(609) 255-6499</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <span>Get Free Estimate</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Google Rating */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-xl bg-white border border-slate-700">
                <img 
                  src="/assets/images/logo.png" 
                  alt="Mold Recovery Plus" 
                  className="h-9 w-auto object-contain"
                />
              </div>
              <span className="font-display font-black text-lg text-white">
                MOLD RECOVERY <span className="text-[#0066FF]">PLUS</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Professional mold remediation, accredited mold testing, thermal moisture inspection, molecular chlorine dioxide smoke odor removal, and RamAir duct cleaning.
            </p>
            <div className="pt-2">
              <GoogleRatingBadge />
            </div>
            <div className="flex items-center gap-2 pt-1 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>IICRC & PMII Certified • Licensed & Insured NJ</span>
            </div>
          </div>

          {/* Col 2: Services Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Restoration Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/services')}
                  className="hover:text-[#0066FF] transition-colors flex items-center gap-1.5"
                >
                  <span>Services Overview</span>
                </button>
              </li>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate(s.path)}
                    className="hover:text-[#0066FF] transition-colors flex items-center gap-1.5 text-left"
                  >
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company & Direct Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company & Media
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-[#0066FF] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-[#0066FF] transition-colors"
                >
                  About Matt Jarnis & Credentials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/gallery')}
                  className="hover:text-[#0066FF] transition-colors"
                >
                  Project Photography Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-[#0066FF] transition-colors"
                >
                  Contact & Free Estimate
                </button>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=8bl6xXmY_KE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0066FF] transition-colors flex items-center gap-1.5"
                >
                  <span>Featured YouTube Video</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.googleProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0066FF] transition-colors flex items-center gap-1.5"
                >
                  <span>Google Business Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact & Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Direct Contact & Hours
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#0066FF] shrink-0 mt-1" />
                <div>
                  <span className="block text-white font-bold">{BUSINESS_INFO.phone}</span>
                  <span className="text-xs text-slate-500">Call or Text Anytime</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0066FF] shrink-0 mt-1" />
                <div>
                  <span className="block text-white">{BUSINESS_INFO.address}</span>
                  <span className="text-xs text-slate-500">Central & South New Jersey</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#0066FF] shrink-0 mt-1" />
                <div>
                  <span className="block text-white">{BUSINESS_INFO.hours}</span>
                  <span className="text-xs text-slate-500">Emergency Appointments Available</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HeartHandshake className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <span className="block text-white">Locally Owned & Operated</span>
                  <span className="text-xs text-slate-500">Zero Corporate Middlemen</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Service Area Badges */}
        <div className="py-8 border-b border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
              Verified New Jersey Service Areas & Municipalities:
            </span>
            <span className="text-xs text-emerald-400 font-medium">
              Same-Day Emergency Dispatch Ready
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {BUSINESS_INFO.serviceAreas.map((area, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Google Attributions */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <GoogleGIcon className="w-4 h-4" />
            <span>
              © {new Date().getFullYear()} Mold Recovery Plus. All Rights Reserved. Rated 4.9/5 from 146+ Real Google Reviews.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Licensed & Insured New Jersey</span>
            <span>•</span>
            <span className="text-slate-400">IICRC & PMII Certified</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
