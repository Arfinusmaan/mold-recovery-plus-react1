import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, FlaskConical, Search, ShieldAlert, Wind, Fan, 
  CheckCircle2, Phone, ChevronRight, ShieldCheck, Clock, Gem, Award
} from 'lucide-react';
import gsap from 'gsap';
import { SERVICES, BUSINESS_INFO } from '../data/businessData';
import { GoogleRatingBadge } from '../components/GoogleRatingBadge';
import { GoogleReviewsGrid } from '../components/GoogleReviewsGrid';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

const SERVICE_ICONS = {
  'mold-testing': FlaskConical,
  'mold-inspection': Search,
  'mold-removal': ShieldAlert,
  'smoke-odor-removal': Wind,
  'air-duct-cleaning': Fan
};

export const ServicesPage = ({ onNavigate, onOpenQuote }) => {
  const [selectedIssue, setSelectedIssue] = useState('visible-mold');
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

  const DIAGNOSTIC_OPTIONS = [
    {
      id: 'visible-mold',
      title: 'Visible black or white mold growth',
      recommendation: 'Mold Removal & Remediation',
      path: '/services/mold-removal',
      reason: 'Physical microbial colonies require isolation, HEPA air scrubbers, botanical antimicrobial wash, and barrier sealers.'
    },
    {
      id: 'musty-odor',
      title: 'Persistent musty smell, no visible growth',
      recommendation: 'Inspection & Thermal Survey',
      path: '/services/mold-inspection',
      reason: 'Hidden leaks behind walls or under subflooring are diagnosed using FLIR infrared thermal imaging and moisture meters.'
    },
    {
      id: 'real-estate',
      title: 'Real estate transaction or lab clearance',
      recommendation: 'Third-Party Mold Testing',
      path: '/services/mold-testing',
      reason: 'Calibrated air cassettes and surface lift samples sent to AIHA-accredited third-party laboratories with chain of custody.'
    },
    {
      id: 'smoke-smell',
      title: 'Lingering fire or tobacco smoke odors',
      recommendation: 'Smoke Odor Gas Oxidation',
      path: '/services/smoke-odor-removal',
      reason: 'Pure Chlorine Dioxide gas oxidizes volatile nicotine tars and soot hydrocarbons at the deep molecular level.'
    },
    {
      id: 'dust-allergies',
      title: 'Excess dust or foul HVAC vent smell',
      recommendation: 'Negative-Air Duct Cleaning',
      path: '/services/air-duct-cleaning',
      reason: 'High-vacuum RamAir extraction with rotary brushes clears duct walls, paired with SaniJet botanical sanitizer.'
    }
  ];

  const currentRecommendation = DIAGNOSTIC_OPTIONS.find(d => d.id === selectedIssue) || DIAGNOSTIC_OPTIONS[0];

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
              <span className="gsap-reveal text-[#0066FF] font-bold tracking-widest text-xs uppercase block">
                Our Services
              </span>
              
              <h1 className="gsap-reveal font-display font-black text-5xl sm:text-6xl lg:text-[4.75rem] text-slate-900 leading-[1.08] tracking-tight">
                Complete Restoration <br />
                <span className="text-[#0066FF]">Solutions for Every Home</span>
              </h1>
              
              <p className="gsap-reveal text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed font-normal">
                We do not treat testing, inspection, and removal as interchangeable. Explore our five certified service specialties, backed by scientific protocols and guaranteed clearance.
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

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60">
                <img 
                  src="/assets/images/technician-inspecting.jpg" 
                  alt="Certified Remediation Specialist" 
                  className="w-full h-[400px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 bg-[#0066FF] text-white text-xs font-bold rounded-full mb-2 inline-block">
                    IICRC Certified Field Protocols
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white">Direct Owner Oversight</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Every assessment conducted with calibrated moisture meters and lab-grade tools.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          2. DIAGNOSTIC NAVIGATOR (Bento Interactive Section)
      ========================================================================= */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#0066FF] font-bold tracking-widest uppercase text-xs mb-3 block">Property Symptom Guide</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
              What are you experiencing?
            </h2>
            <p className="text-slate-600 text-sm mt-2">Select your symptom to see the recommended scientific approach.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
            
            {/* Options List */}
            <div className="lg:col-span-6 space-y-3">
              {DIAGNOSTIC_OPTIONS.map(opt => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedIssue(opt.id)}
                  className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center justify-between group ${
                    selectedIssue === opt.id 
                      ? 'border-[#0066FF] bg-blue-50/60 shadow-md' 
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <span className={`font-bold text-base ${selectedIssue === opt.id ? 'text-[#0066FF]' : 'text-slate-800'}`}>
                    {opt.title}
                  </span>
                  <ChevronRight className={`w-5 h-5 ${selectedIssue === opt.id ? 'text-[#0066FF]' : 'text-slate-400 group-hover:text-slate-600'}`} />
                </button>
              ))}
            </div>

            {/* Recommendation Panel */}
            <div className="lg:col-span-6 bg-[#111827] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col justify-between border border-slate-700/60">
              <div>
                <span className="text-[#0066FF] font-bold tracking-widest uppercase text-xs mb-3 block">
                  Recommended Solution
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl mb-4 text-white">
                  {currentRecommendation.recommendation}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {currentRecommendation.reason}
                </p>
              </div>
              
              <button
                onClick={() => onNavigate(currentRecommendation.path)}
                className="px-7 py-3.5 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-sm rounded-full transition-all shadow-lg flex items-center justify-center gap-2 self-start"
              >
                <span>View Full Service Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          3. FULL SERVICES CATALOG (Rich Images & Bento Layout)
      ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#0066FF] font-bold tracking-widest uppercase text-xs mb-3 block">Comprehensive Catalog</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-4">
              Our 5 Dedicated Service Specialties
            </h2>
            <p className="text-base text-slate-600">
              All services adhere strictly to IICRC S520 and EPA safety protocols.
            </p>
          </div>

          <div className="space-y-24">
            {SERVICES.map((service, index) => {
              const Icon = SERVICE_ICONS[service.id] || ShieldAlert;
              const isEven = index % 2 === 1;

              return (
                <div 
                  key={service.id} 
                  className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16 p-8 sm:p-12 rounded-[2.5rem] bg-[#f8fafc] border border-slate-200/90 shadow-sm`}
                >
                  {/* Dual Images Bento on One Side */}
                  <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
                      <img 
                        src={service.heroImage} 
                        alt={service.title} 
                        className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 px-3.5 py-1.5 bg-[#111827]/90 text-white font-bold text-xs tracking-wide shadow-lg backdrop-blur-md rounded-full border border-slate-700">
                        {service.badge}
                      </div>
                    </div>
                    {service.previewImage && (
                      <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-md border border-slate-200 hidden sm:block">
                        <img 
                          src={service.previewImage} 
                          alt={`${service.title} preview`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Narrative & Details on the Other Side */}
                  <div className="w-full lg:w-1/2 space-y-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066FF] flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    <h3 className="font-display font-black text-3xl sm:text-4xl text-slate-900 leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-base text-[#0066FF] font-bold">
                      {service.tagline}
                    </p>
                    
                    <p className="text-base text-slate-600 leading-relaxed font-normal">
                      {service.summary}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                          <span className="text-xs sm:text-sm text-slate-700 font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 flex flex-wrap gap-4 items-center">
                      <button 
                        onClick={() => onNavigate(service.path)}
                        className="px-7 py-3.5 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-sm rounded-full transition-all shadow-md flex items-center gap-2"
                      >
                        View Full Details <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={onOpenQuote}
                        className="px-6 py-3.5 bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm rounded-full transition-all border border-slate-200 shadow-sm"
                      >
                        Request Quote
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          3B. BEFORE & AFTER PROOF SHOWCASE
      ========================================================================= */}
      <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#0066FF] font-bold tracking-widest uppercase text-xs block">
                Visual Proof
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Real Remediations. <br />
                Undeniable Results.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Drag the interactive slider to inspect our botanical deep-clean and antimicrobial polymer sealers in action on South Jersey subfloors and framing.
              </p>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-[#0066FF] font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>100% Spore Eradication Guarantee</span>
                </div>
                <p className="text-xs text-slate-500">
                  Third-party AIHA lab verification ensures microscopic spores are removed from ambient air.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="p-4 sm:p-6 bg-white rounded-3xl border border-slate-200 shadow-xl">
                <BeforeAfterSlider />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          4. UNMATCHED BENEFITS (Dark Navy Section matching Home)
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
