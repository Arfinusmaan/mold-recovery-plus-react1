import React, { useEffect, useRef } from 'react';
import { 
  Wind, CheckCircle2, ArrowRight, Phone, 
  Award, Sparkles, Layers, FileCheck, ShieldCheck, Clock, Gem
} from 'lucide-react';
import gsap from 'gsap';
import { BUSINESS_INFO, SERVICES } from '../../data/businessData';
import { InquiryForm } from '../../components/InquiryForm';
import { GoogleReviewsGrid } from '../../components/GoogleReviewsGrid';

export const SmokeOdorPage = ({ onNavigate, onOpenQuote }) => {
  const service = SERVICES.find(s => s.id === 'smoke-odor-removal') || SERVICES[3];
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gsap-reveal', { 
        y: 40, 
        opacity: 0, 
        duration: 0.8, 
        stagger: 0.12, 
        ease: 'power3.out' 
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white text-slate-900 font-sans" ref={heroRef}>
      
      {/* =========================================================================
          1. HERO SECTION (Continuous sky & property background)
      ========================================================================= */}
      <section 
        className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-slate-200"
        style={{
          backgroundImage: "linear-gradient(to bottom, #edf4fa 0%, #f7fafc 60%, #ffffff 100%)"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="gsap-reveal flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <button onClick={() => onNavigate('/')} className="hover:text-[#0066FF]">Home</button>
                <span>/</span>
                <button onClick={() => onNavigate('/services')} className="hover:text-[#0066FF]">Services</button>
                <span>/</span>
                <span className="text-[#0066FF]">Smoke Odor Removal</span>
              </div>
              
              <h1 className="gsap-reveal font-display font-black text-5xl sm:text-6xl lg:text-[4.75rem] text-slate-900 leading-[1.08] tracking-tight">
                Permanent Smoke Odor <br />
                <span className="text-[#0066FF]">Removal & Gas Oxidation</span>
              </h1>
              
              <p className="gsap-reveal text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed font-normal">
                Safe, deep-penetrating Chlorine Dioxide (ClO2) vapor technology that permanently neutralizes tobacco smoke, fire soot, and severe biological odors at the molecular level.
              </p>
              
              <div className="gsap-reveal pt-4 flex flex-wrap gap-4 items-center">
                <button
                  onClick={onOpenQuote}
                  className="px-8 py-4 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold rounded-full transition-all shadow-xl hover:shadow-2xl text-base flex items-center gap-2"
                >
                  Schedule Odor Elimination
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={BUSINESS_INFO.phoneRaw}
                  className="px-7 py-4 bg-white text-slate-800 font-bold rounded-full transition-all border border-slate-200 shadow-sm text-base flex items-center gap-2 hover:bg-slate-50"
                >
                  <Phone className="w-4 h-4 text-[#0066FF]" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60">
                <img 
                  src={service.heroImage} 
                  alt="Chlorine Dioxide Gas Treatment" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 bg-[#0066FF] text-white text-xs font-bold rounded-full mb-2 inline-block">
                    True Molecular Oxidation
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white">Zero Masking Agents</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Destroys volatile organic compounds within drywall, subfloors, and framing permanently.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          2. THE DETAILS & 4-STEP PROTOCOL
      ========================================================================= */}
      <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-7 space-y-12">
              <div>
                <span className="text-[#0066FF] font-bold tracking-widest uppercase text-xs mb-3 block">Application Scenarios</span>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 mb-6 leading-tight">
                  When Is Gas Oxidation Required?
                </h2>
                <div className="space-y-3">
                  {service.whenNeeded.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                      <Wind className="w-5 h-5 text-[#0066FF] shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-semibold text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Odor Oxidation Protocol with Real Photos */}
              <div>
                <span className="text-[#0066FF] font-bold tracking-widest uppercase text-xs mb-3 block">Scientific Oxidation</span>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 mb-6 leading-tight">
                  The Molecular Odor Eradication Protocol
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      step: '01',
                      title: 'Surface Wash & Source Decontamination',
                      desc: 'Initial wipe-down of structural framing, walls, and trim to remove visible soot deposits and nicotine tar films.',
                      img: '/assets/images/bathroom-remediation.jpg'
                    },
                    {
                      step: '02',
                      title: 'Pure ClO2 Gas Generation',
                      desc: 'Deploying high-output Chlorine Dioxide generators that produce gas smaller than air molecules to penetrate drywall.',
                      img: '/assets/images/odor-chlorine-dioxide.jpg'
                    },
                    {
                      step: '03',
                      title: 'Subsurface Vapor Saturation',
                      desc: 'Deep oxidation breaks carbon bonds of lingering smoke, nicotine, sewage, and chemical volatile compounds.',
                      img: '/assets/images/wet-fogging-vapor.jpg'
                    },
                    {
                      step: '04',
                      title: 'Rapid Clean Air Evacuation',
                      desc: 'Industrial negative-air exhaust fans vent the property, leaving zero chemical fragrance and 100% clean, fresh air.',
                      img: '/assets/images/modern-family-estate.jpg'
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm flex flex-col">
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                        <img 
                          src={step.img} 
                          alt={step.title} 
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-[#0066FF] text-white font-black text-xs flex items-center justify-center shadow-md">
                          {step.step}
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <h4 className="font-bold text-lg text-slate-900 mb-1.5">{step.title}</h4>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo Showcase: Real Odor Projects */}
              <div>
                <span className="text-[#0066FF] font-bold tracking-widest uppercase text-xs mb-3 block">Field Restorations</span>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 mb-6 leading-tight">
                  Permanent Odor Elimination in South Jersey
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img 
                      src="/assets/images/odor-chlorine-dioxide.jpg" 
                      alt="Chlorine Dioxide Gas Generation" 
                      className="w-full h-44 object-cover"
                    />
                    <div className="p-4">
                      <h5 className="font-bold text-sm text-slate-900">Molecular Gas Treatment</h5>
                      <p className="text-xs text-slate-500 mt-1">Penetrates concrete & subfloors</p>
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img 
                      src="/assets/images/wet-fogging-vapor.jpg" 
                      alt="Micro-Vapor Neutralization" 
                      className="w-full h-44 object-cover"
                    />
                    <div className="p-4">
                      <h5 className="font-bold text-sm text-slate-900">Dry Vapor Dispersion</h5>
                      <p className="text-xs text-slate-500 mt-1">Leaves no toxic residues behind</p>
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img 
                      src="/assets/images/modern-family-estate.jpg" 
                      alt="Odor-Free Property" 
                      className="w-full h-44 object-cover"
                    />
                    <div className="p-4">
                      <h5 className="font-bold text-sm text-slate-900">100% Odor-Free Finish</h5>
                      <p className="text-xs text-slate-500 mt-1">Clean natural air restored</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#111827] p-8 rounded-3xl shadow-xl text-white border border-slate-700/60">
                <span className="text-[#0066FF] font-bold tracking-widest text-xs uppercase block mb-1">
                  Proven Science
                </span>
                <h3 className="font-display font-black text-2xl text-white mb-2">
                  No Perfumes. No Ozone Damage.
                </h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Chlorine Dioxide gas breaks down cleanly into harmless saline salts, leaving zero harmful residues while eliminating stubborn smoke odors completely.
                </p>
                <button
                  onClick={onOpenQuote}
                  className="w-full py-4 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-sm rounded-full transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Request Odor Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">Request Assessment</h3>
                <InquiryForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-8">
              <ShieldCheck className="w-8 h-8 text-[#0066FF] mb-4" />
              <h3 className="font-display font-bold text-xl text-white mb-2">Subsurface Penetration</h3>
              <p className="text-sm text-slate-400">Gas permeates fabrics, floor joists, and wall cavities.</p>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-8">
              <Clock className="w-8 h-8 text-[#0066FF] mb-4" />
              <h3 className="font-display font-bold text-xl text-white mb-2">Rapid 24-Hour Treatment</h3>
              <p className="text-sm text-slate-400">Fast clearance cycle allows rapid re-entry into the home.</p>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-8">
              <Gem className="w-8 h-8 text-[#0066FF] mb-4" />
              <h3 className="font-display font-bold text-xl text-white mb-2">Permanent Guarantee</h3>
              <p className="text-sm text-slate-400">Odors do not resurface when environmental humidity changes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GoogleReviewsGrid />
        </div>
      </section>

    </div>
  );
};
