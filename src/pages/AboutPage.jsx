import React, { useEffect, useRef } from 'react';
import { 
  ShieldCheck, Award, CheckCircle2, Phone, 
  ArrowRight, Users, Sparkles, MapPin, Target, Building,
  Star, Clock, Gem, Home, Check
} from 'lucide-react';
import gsap from 'gsap';
import { BUSINESS_INFO } from '../data/businessData';
import { GoogleRatingBadge } from '../components/GoogleRatingBadge';
import { YouTubeShowcase } from '../components/YouTubeShowcase';
import { GoogleReviewsGrid } from '../components/GoogleReviewsGrid';

export const AboutPage = ({ onNavigate, onOpenQuote }) => {
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
              <span className="gsap-reveal text-[#0066FF] font-bold tracking-widest text-xs uppercase block">
                About Mold Recovery Plus
              </span>
              
              <h1 className="gsap-reveal font-display font-black text-5xl sm:text-6xl lg:text-[4.75rem] text-slate-900 leading-[1.08] tracking-tight">
                Three Generations of <br />
                <span className="text-[#0066FF]">Remediation Excellence</span>
              </h1>
              
              <p className="gsap-reveal text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed font-normal">
                Founded and operated by Matt Jarnis, Mold Recovery Plus is dedicated to providing honest, scientifically grounded mold remediation, clean air restoration, and permanent barrier protection across New Jersey.
              </p>
              
              <div className="gsap-reveal pt-4 flex flex-wrap gap-4 items-center">
                <button
                  onClick={onOpenQuote}
                  className="px-8 py-4 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold rounded-full transition-all shadow-xl hover:shadow-2xl text-base flex items-center gap-2"
                >
                  Schedule Free Assessment
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

            {/* Right Card Bento */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60">
                <img 
                  src="/assets/images/matt-jarnis.jpg" 
                  alt="Matt Jarnis" 
                  className="w-full h-[400px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-[#0066FF] text-white text-xs font-bold rounded-full">
                      Owner & Lead Specialist
                    </span>
                    <span className="text-xs text-slate-300">10+ Years Experience</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">Matt Jarnis</h3>
                  <p className="text-xs text-slate-300 mt-1">
                    "I personally inspect and supervise our projects so you always get honest, direct answers."
                  </p>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 hidden sm:flex">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-black text-slate-900 text-lg leading-none">IICRC & PMII</p>
                  <p className="text-xs text-slate-500 mt-1">Double Certified Specialists</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          2. OUR STORY & PHILOSOPHY (Clean Light Section with Wide Team Photo)
      ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#0066FF] font-bold tracking-widest text-xs uppercase block">Our Philosophy</span>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
                Honest Diagnostics. <br />
                <span className="text-[#0066FF]">Zero Scare Tactics.</span>
              </h2>
              
              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                <p>
                  Many national restoration franchises treat property owners like numbers on a spreadsheet, sending junior salespeople trained to trigger panic over every speck of dust in order to sell tens of thousands of dollars in unnecessary demolition.
                </p>
                <p>
                  Matt Jarnis established <strong>Mold Recovery Plus</strong> on a fundamentally different standard: treat every customer's home with the respect, precision, and honesty we would expect in our own.
                </p>
                <p>
                  We diagnose the true source of water intrusion, recommend only what is genuinely required, and back every project with proven technologies and multi-year barrier sealers.
                </p>
              </div>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { icon: ShieldCheck, title: "IICRC S520 Certified", desc: "National structural standards" },
                  { icon: Target, title: "PMII Certified Inspector", desc: "Scientific sampling protocols" },
                  { icon: Building, title: "Fully Insured in NJ", desc: "Comprehensive liability coverage" },
                  { icon: CheckCircle2, title: "Price-Beat Policy", desc: "We match or beat formal competitor bids" }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200/80 flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066FF] flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panoramic Team Photo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <img 
                  src="/assets/images/team-sunset.jpg" 
                  alt="Dedicated Restoration Crew" 
                  className="w-full h-auto aspect-[16/10] object-cover transform group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-bold text-lg drop-shadow-md">Dedicated New Jersey Restoration Crew</p>
                  <p className="text-xs text-slate-200 drop-shadow-sm">Direct owner presence on every single residential and commercial site</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          3. OUR MISSION (3-Column Layout: Tall Tech Left, Mission Center, Stacked Right)
      ========================================================================= */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Large Vertical Portrait Image */}
            <div className="lg:col-span-4">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white h-[420px]">
                <img 
                  src="/assets/images/technician-inspecting.jpg" 
                  alt="Certified Inspection Specialist" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Center: Mission Statement Box */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl flex flex-col justify-center text-center items-center h-[420px]">
              <div className="w-14 h-14 rounded-2xl bg-[#0066FF] text-white flex items-center justify-center mb-6 shadow-md shadow-blue-500/20">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-display font-extrabold text-3xl text-slate-900 mb-4 tracking-tight">
                Our Mission
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                To protect what matters most to you by delivering exceptional mold remediation and indoor air restoration solutions that combine proven scientific containment with modern innovation. Every home we restore is treated with the care and integrity of our own family business.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <span>IICRC Certified</span>
                <span>•</span>
                <span>PMII Inspected</span>
                <span>•</span>
                <span>EPA Safe</span>
              </div>
            </div>

            {/* Right: Two Stacked Horizontal Images */}
            <div className="lg:col-span-4 flex flex-col gap-6 h-[420px] justify-between">
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 h-[195px] relative group">
                <img 
                  src="/assets/images/crawlspace-remediation.jpg" 
                  alt="Clean Crawlspace Barrier" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/30"></div>
                <span className="absolute bottom-3 left-4 text-xs font-bold text-white px-2.5 py-1 bg-slate-900/70 rounded-full backdrop-blur-sm">
                  Attic & Subfloor Containment
                </span>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 h-[195px] relative group">
                <img 
                  src="/assets/images/mold-sealer-application.jpg" 
                  alt="Technician Applying Sealer" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/30"></div>
                <span className="absolute bottom-3 left-4 text-xs font-bold text-white px-2.5 py-1 bg-slate-900/70 rounded-full backdrop-blur-sm">
                  EPA-Registered Botanical Barrier
                </span>
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


      {/* =========================================================================
          5. SERVICE AREAS
      ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#0066FF] font-bold tracking-widest uppercase text-xs mb-3 block">Regional Service Footprint</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-4">
              Serving Central & South New Jersey
            </h2>
            <p className="text-base text-slate-600">
              Direct mobile dispatch across all major counties and surrounding communities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {BUSINESS_INFO.serviceAreas.map((area, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-[#f8fafc] border border-slate-200/80 hover:border-[#0066FF]/40 transition-colors">
                <MapPin className="w-4 h-4 text-[#0066FF] shrink-0" />
                <span className="font-bold text-xs sm:text-sm text-slate-800">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
          6. FIELD VIDEO & REVIEWS
      ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#0066FF] font-bold text-xs uppercase tracking-wider block mb-2">Video Verification</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-4">
              Real Remediation In Action
            </h2>
            <p className="text-base text-slate-600">
              Watch owner Matt Jarnis in the field as we resolve difficult mold challenges.
            </p>
          </div>
          <YouTubeShowcase />
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
