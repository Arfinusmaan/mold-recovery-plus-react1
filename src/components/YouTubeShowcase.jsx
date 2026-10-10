import React from 'react';
import { Play, ShieldCheck, CheckCircle2, ArrowUpRight, Youtube } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

export const YouTubeShowcase = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-900/60 border-y border-slate-800">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-900/10 blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text / Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/60 text-red-400 text-xs font-bold">
              <Youtube className="w-4 h-4 text-red-500" />
              <span>Official Jobsite Documentation</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              See How We Remediate Real New Jersey Properties.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Watch Mold Recovery Plus on actual job sites in South & Central New Jersey. Owner Matt Jarnis walks through how our non-destructive containment, TAVS dry-fogging, and protective sealers restore clean indoor air.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Zero guesswork: Watch the physical removal and antimicrobial barrier application.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Transparent containment protocols that prevent mold spores from drifting into living spaces.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Direct accountability from the certified technician performing your work.</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="https://www.youtube.com/watch?v=8bl6xXmY_KE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm shadow-lg shadow-red-900/40 transition-all hover:scale-[1.02]"
              >
                <Youtube className="w-4 h-4" />
                <span>Watch on YouTube</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <span className="text-xs text-slate-400">
                Official Channel: <strong>Mold Recovery Plus</strong>
              </span>
            </div>
          </div>

          {/* Right Video Embed Frame */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl shadow-black/80 aspect-video group">
              <iframe
                src="https://www.youtube.com/embed/8bl6xXmY_KE?rel=0"
                title="Mold Removal New Jersey - Mold Recovery Plus"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="mt-3 flex items-center justify-between text-xs text-slate-400 px-2">
              <span>Title: "Mold Removal New Jersey"</span>
              <span className="text-emerald-400 font-medium">Verified Official Video</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
