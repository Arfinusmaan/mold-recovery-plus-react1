import React, { useEffect, useRef } from 'react';
import { 
  FlaskConical, CheckCircle2, ArrowRight, Phone, 
  Award, Sparkles, Layers, FileCheck, ShieldCheck, Clock, Gem
} from 'lucide-react';
import gsap from 'gsap';
import { BUSINESS_INFO, SERVICES } from '../../data/businessData';
import { InquiryForm } from '../../components/InquiryForm';
import { GoogleReviewsGrid } from '../../components/GoogleReviewsGrid';

export const MoldTestingPage = ({ onNavigate, onOpenQuote }) => {
  const service = SERVICES.find(s => s.id === 'mold-testing') || SERVICES[0];
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
                <span className="text-[#0066FF]">Mold Testing</span>
              </div>
              
              <h1 className="gsap-reveal font-display font-black text-5xl sm:text-6xl lg:text-[4.75rem] text-slate-900 leading-[1.08] tracking-tight">
                Accredited Mold Testing & <br />
                <span className="text-[#0066FF]">Certified Lab Analysis</span>
              </h1>
              
              <p className="gsap-reveal text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed font-normal">
                Scientific spore trap air cassettes and surface lift samples sent directly to AIHA-accredited third-party laboratories with full chain-of-custody documentation.
              </p>
              
              <div className="gsap-reveal pt-4 flex flex-wrap gap-4 items-center">
                <button
                  onClick={onOpenQuote}
                  className="px-8 py-4 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold rounded-full transition-all shadow-xl hover:shadow-2xl text-base flex items-center gap-2"
                >
                  Order Testing & Analysis
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
                  src="/assets/images/crawlspace-remediation.jpg" 
                  alt="Laboratory Sample Extraction" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 bg-[#0066FF] text-white text-xs font-bold rounded-full mb-2 inline-block">
                    AIHA-Accredited Third-Party Lab
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white">Unbiased Scientific Data</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Independent laboratory reports accepted by real estate attorneys and insurance carriers.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          2. THE DETAILS & 4-STEP LAB PROTOCOL
      ========================================================================= */}
      <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-7 space-y-12">
              <div>
                <span className="text-[#0066FF] font-bold tracking-widest uppercase text-xs mb-3 block">When Testing Is Essential</span>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 mb-6 leading-tight">
                  Common Reasons for Certified Testing
                </h2>
                <div className="space-y-3">
                  {service.whenNeeded.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                      <FlaskConical className="w-5 h-5 text-[#0066FF] shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-semibold text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Testing Protocol with Real Lab & Field Photos */}
              <div>
                <span className="text-[#0066FF] font-bold tracking-widest uppercase text-xs mb-3 block">Scientific Protocol</span>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 mb-6 leading-tight">
                  The Testing & Chain of Custody Protocol
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      step: '01',
                      title: 'Indoor & Baseline Air Sampling',
                      desc: 'Calibrated vacuum pumps draw uniform liters of air across Z5 cassettes to compare indoor vs baseline outdoor air.',
                      img: '/assets/images/technician-inspecting.jpg'
                    },
                    {
                      step: '02',
                      title: 'Direct Surface Tape-Lifts',
                      desc: 'Adhesive optical tape-lifts collect direct spore matrix samples from framing, subflooring, and masonry surfaces.',
                      img: '/assets/images/attic-beams-before.jpg'
                    },
                    {
                      step: '03',
                      title: 'AIHA-Accredited Lab Analysis',
                      desc: 'Independent third-party microscopic identification specifying exact fungal genus, species, and spore count/m³.',
                      img: '/assets/images/mold-cert.png'
                    },
                    {
                      step: '04',
                      title: 'Post-Remediation Clearance',
                      desc: 'PRV (Post-Remediation Verification) testing ensuring air spore levels are equal to or cleaner than outdoor air.',
                      img: '/assets/images/wet-fogging-vapor.jpg'
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

              {/* Photo Showcase: Real Laboratory Verification */}
              <div>
                <span className="text-[#0066FF] font-bold tracking-widest uppercase text-xs mb-3 block">Third-Party Evidence</span>
                <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 mb-6 leading-tight">
                  Independent Laboratory Documentation
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img 
                      src="/assets/images/mold-cert.png" 
                      alt="AIHA Lab Accreditation" 
                      className="w-full h-44 object-cover object-top"
                    />
                    <div className="p-4">
                      <h5 className="font-bold text-sm text-slate-900">Lab Accreditation</h5>
                      <p className="text-xs text-slate-500 mt-1">Court-defensible certification</p>
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img 
                      src="/assets/images/basement-wall-removal.jpg" 
                      alt="Physical Specimen Collection" 
                      className="w-full h-44 object-cover"
                    />
                    <div className="p-4">
                      <h5 className="font-bold text-sm text-slate-900">Subsurface Sample</h5>
                      <p className="text-xs text-slate-500 mt-1">Direct mycelial identification</p>
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                    <img 
                      src="/assets/images/modern-family-estate.jpg" 
                      alt="Certified Safe Home" 
                      className="w-full h-44 object-cover"
                    />
                    <div className="p-4">
                      <h5 className="font-bold text-sm text-slate-900">Clearance Verified</h5>
                      <p className="text-xs text-slate-500 mt-1">100% safe biological air profile</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#111827] p-8 rounded-3xl shadow-xl text-white border border-slate-700/60">
                <span className="text-[#0066FF] font-bold tracking-widest text-xs uppercase block mb-1">
                  100% Independent
                </span>
                <h3 className="font-display font-black text-2xl text-white mb-2">
                  No Biased In-House Lab Conflicts
                </h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Your samples are analyzed by certified external laboratories so you receive completely objective, verifiable spore counts and genus breakdown.
                </p>
                <button
                  onClick={onOpenQuote}
                  className="w-full py-4 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-sm rounded-full transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Book Lab Testing Appointment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200">
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">Request Testing</h3>
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
              <h3 className="font-display font-bold text-xl text-white mb-2">Outdoor vs Indoor Ratio</h3>
              <p className="text-sm text-slate-400">Baseline comparison guarantees accurate health assessment.</p>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-8">
              <Clock className="w-8 h-8 text-[#0066FF] mb-4" />
              <h3 className="font-display font-bold text-xl text-white mb-2">Fast Lab Turnaround</h3>
              <p className="text-sm text-slate-400">Direct courier delivery for expedited 24-48h analysis.</p>
            </div>
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-3xl p-8">
              <Gem className="w-8 h-8 text-[#0066FF] mb-4" />
              <h3 className="font-display font-bold text-xl text-white mb-2">Owner Walkthrough</h3>
              <p className="text-sm text-slate-400">Matt reviews your lab results line-by-line in plain English.</p>
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
