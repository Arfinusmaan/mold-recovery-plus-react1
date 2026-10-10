import React, { useEffect, useRef } from 'react';
import { 
  ShieldAlert, CheckCircle2, ShieldCheck, ArrowRight, Phone, 
  Award, Sparkles, Layers, FileCheck, Clock, Gem
} from 'lucide-react';
import gsap from 'gsap';
import { BUSINESS_INFO, SERVICES } from '../../data/businessData';
import { BeforeAfterSlider } from '../../components/BeforeAfterSlider';
import { InquiryForm } from '../../components/InquiryForm';
import { GoogleReviewsGrid } from '../../components/GoogleReviewsGrid';

export const MoldRemovalPage = ({ onNavigate, onOpenQuote }) => {
  const service = SERVICES.find(s => s.id === 'mold-removal') || SERVICES[2];
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
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="gsap-reveal flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <button onClick={() => onNavigate('/')} className="hover:text-[#0066FF]">Home</button>
                <span>/</span>
                <button onClick={() => onNavigate('/services')} className="hover:text-[#0066FF]">Services</button>
                <span>/</span>
                <span className="text-[#0066FF]">Mold Removal</span>
              </div>
              
              <h1 className="gsap-reveal font-display font-black text-5xl sm:text-6xl lg:text-[4.75rem] text-slate-900 leading-[1.08] tracking-tight">
                Certified Mold Removal & <br />
                <span className="text-[#0066FF]">Guaranteed Clearance</span>
              </h1>
              
              <p className="gsap-reveal text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed font-normal">
                We combine physical HEPA removal with hospital-grade antimicrobial wash, proprietary TAVS dry fogging, and heavy-duty polymer sealers to eliminate colonies permanently.
              </p>
              
              <div className="gsap-reveal pt-4 flex flex-wrap gap-4 items-center">
                <button
                  onClick={onOpenQuote}
                  className="px-8 py-4 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold rounded-full transition-all shadow-xl hover:shadow-2xl text-base flex items-center gap-2"
                >
                  Get a Free Estimate
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

            {/* Right Image Bento */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60">
                <img 
                  src={service.heroImage} 
                  alt="Certified Mold Removal" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 bg-[#0066FF] text-white text-xs font-bold rounded-full mb-2 inline-block">
                    IICRC S520 Compliant
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white">Permanent Framing Defense</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Multi-year warranty against microbial recurrence on treated subsurfaces.
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
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <span className="text-[#0066FF] font-bold tracking-widest uppercase text-xs mb-3 block">Warning Symptoms</span>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 mb-6 leading-tight">
                  Recognizing the Signs of Active Growth
                </h2>
                <div className="space-y-3">
                  {service.whenNeeded.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                      <ShieldAlert className="w-5 h-5 text-[#0066FF] shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-semibold text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual 4-Step Protocol with Real Field Photos */}
              <div>
                <span className="text-[#0066FF] font-bold tracking-widest uppercase text-xs mb-3 block">Scientific Protocol</span>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 mb-6 leading-tight">
                  The 4-Step Remediation Process in Action
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      step: '01',
                      title: 'Containment & HEPA Scrubbing',
                      desc: 'Negative air pressure containment zones with commercial HEPA scrubbers to isolate microscopic spores.',
                      img: '/assets/images/crawlspace-remediation.jpg'
                    },
                    {
                      step: '02',
                      title: 'Physical Extraction & Wash',
                      desc: 'Hospital-grade botanical antimicrobial treatment paired with physical mechanical scrubbing on wood framing.',
                      img: '/assets/images/attic-mold-removal.jpg'
                    },
                    {
                      step: '03',
                      title: 'TAVS Micro-Vapor Fogging',
                      desc: 'Ultra-fine non-toxic dry mist reaches hidden structural cavities and kills airborne spores on contact.',
                      img: '/assets/images/wet-fogging-vapor.jpg'
                    },
                    {
                      step: '04',
                      title: 'Polymer Barrier Sealer',
                      desc: 'Elastomeric protective polymer sealer applied to subsurfaces, guaranteed against future mold recurrence.',
                      img: '/assets/images/mold-sealer-application.jpg'
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

              {/* Photo Showcase: Real Remediation Projects */}
              <div>
                <span className="text-[#0066FF] font-bold tracking-widest uppercase text-xs mb-3 block">Field Evidence</span>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 mb-6 leading-tight">
                  Recent New Jersey Field Restorations
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img 
                      src="/assets/images/basement-wall-clean.jpg" 
                      alt="Basement Wall Cleaning" 
                      className="w-full h-44 object-cover"
                    />
                    <div className="p-4">
                      <h5 className="font-bold text-sm text-slate-900">Basement Masonry</h5>
                      <p className="text-xs text-slate-500 mt-1">Full sanitization & moisture seal</p>
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img 
                      src="/assets/images/crawlspace-sealer-worker.jpg" 
                      alt="Crawlspace Barrier Sealing" 
                      className="w-full h-44 object-cover"
                    />
                    <div className="p-4">
                      <h5 className="font-bold text-sm text-slate-900">Crawlspace Framing</h5>
                      <p className="text-xs text-slate-500 mt-1">Antimicrobial polymer barrier</p>
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img 
                      src="/assets/images/basement-renovation-after.jpg" 
                      alt="Finished Property Post Remediation" 
                      className="w-full h-44 object-cover"
                    />
                    <div className="p-4">
                      <h5 className="font-bold text-sm text-slate-900">Restored Living Space</h5>
                      <p className="text-xs text-slate-500 mt-1">100% clean lab clearance passed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Discount Card in Dark Navy */}
              <div className="bg-[#111827] p-8 rounded-3xl shadow-xl text-white border border-slate-700/60">
                <span className="text-[#0066FF] font-bold tracking-widest text-xs uppercase block mb-1">
                  Exclusive Savings
                </span>
                <h3 className="font-display font-black text-2xl text-white mb-2">
                  $250 OFF Complete Remediation
                </h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  We match or beat any formal competitor bid in South and Central New Jersey. Claim your discount now.
                </p>
                <button
                  onClick={onOpenQuote}
                  className="w-full py-4 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-sm rounded-full transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Claim Offer & Request Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Before & After Interactive Showcase */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-lg">
                <h3 className="font-display font-bold text-xl text-slate-900 mb-4">Before & After Results</h3>
                <BeforeAfterSlider />
              </div>

              {/* Inquiry Form */}
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">Have Questions?</h3>
                <InquiryForm />
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          3. UNMATCHED BENEFITS (Dark Navy Section matching Home)
      ========================================================================= */}
      <section className="py-24 bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-7">
              <span className="text-[#0066FF] font-bold tracking-widest text-xs uppercase mb-3 block">
                Why Choose Mold Recovery Plus
              </span>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight">
                Unmatched Benefits for <br />
                Your Peace of Mind
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                When you choose Mold Recovery Plus you're not just getting remediation — you're investing in decades of health protection, backed by our family's commitment to excellence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-8 hover:bg-slate-800/90 transition-all shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#0066FF] mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                Lifetime Warranty Protection
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Industry-leading warranties on botanical barrier sealants and workmanship. Your property is protected for decades, not just years.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-8 hover:bg-slate-800/90 transition-all shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#0066FF] mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                Fast & Reliable 24/7 Service
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Rapid emergency response times for severe mold discoveries and active moisture leaks, with efficient project completion without compromising safety.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-8 hover:bg-slate-800/90 transition-all shadow-lg">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#0066FF] mb-6">
                <Gem className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                Quality Lab Guaranteed
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Rigorous multi-stage containment checks and independent third-party lab clearance testing. We don't consider a job complete until you're 100% satisfied.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GoogleReviewsGrid />
        </div>
      </section>

    </div>
  );
};
