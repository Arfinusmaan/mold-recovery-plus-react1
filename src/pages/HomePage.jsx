import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, ArrowRight, ShieldCheck, FlaskConical, Search, 
  ShieldAlert, Wind, Fan, Star, Users, CheckCircle2,
  ChevronRight, Award, Clock, Sparkles, Home, Building2,
  FileCheck, Zap, Gem, Wrench, ChevronLeft
} from 'lucide-react';
import gsap from 'gsap';
import { BUSINESS_INFO, SERVICES } from '../data/businessData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { GoogleReviewsGrid } from '../components/GoogleReviewsGrid';
import { YouTubeShowcase } from '../components/YouTubeShowcase';

const FEATURED_PROJECTS = [
  {
    num: "01",
    title: "Modern Family Estate Restoration",
    desc: "Complete attic & basement mold elimination featuring botanical antimicrobial sealing and negative-air HEPA scrubbing.",
    image: "/assets/images/modern-family-estate.jpg",
    tag: "Bergen County, NJ"
  },
  {
    num: "02",
    title: "Finished Basement Moisture Remediation",
    desc: "Full structural drying, non-toxic mold encapsulation, and preventive moisture barrier installation after severe water intrusion.",
    image: "/assets/images/basement-renovation-after.jpg",
    tag: "Morris County, NJ"
  },
  {
    num: "03",
    title: "Sub-Floor & Crawlspace Encapsulation",
    desc: "Complete crawlspace deep cleaning, fungal sterilization, and high-performance 20-mil vapor barrier membrane installation.",
    image: "/assets/images/crawlspace-remediation.jpg",
    tag: "Essex County, NJ"
  },
  {
    num: "04",
    title: "Historic Residence Attic Restoration",
    desc: "Precision dry-ice blasting, roof sheathing treatment, and commercial HEPA air scrubbing for restored indoor air quality.",
    image: "/assets/images/attic-mold-removal.jpg",
    tag: "Passaic County, NJ"
  }
];

export const HomePage = ({ onNavigate, onOpenQuote }) => {
  const containerRef = useRef(null);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  const handlePrevProject = (e) => {
    e?.stopPropagation();
    setActiveProjectIdx((prev) => (prev === 0 ? FEATURED_PROJECTS.length - 1 : prev - 1));
  };

  const handleNextProject = (e) => {
    e?.stopPropagation();
    setActiveProjectIdx((prev) => (prev === FEATURED_PROJECTS.length - 1 ? 0 : prev + 1));
  };

  const currentProject = FEATURED_PROJECTS[activeProjectIdx];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gentle entry animation that ends with full opacity
      const tl = gsap.timeline();
      tl.fromTo('.hero-text-anim', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out' }
      )
      .fromTo('.hero-card-anim', 
        { x: 30, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: 'power3.out' }, 
        "-=0.5"
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white font-sans overflow-hidden" ref={containerRef}>
      
      {/* =========================================================================
          1. HERO SECTION (Full House & Sky as Section Background)
      ========================================================================= */}
      <section 
        className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-20 overflow-hidden min-h-[700px] lg:min-h-[780px] flex flex-col justify-between"
      >
        {/* Full-Bleed Background Scene: Sky at Top, House at Bottom */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img 
            src="/assets/images/hero_house_bg.jpg" 
            alt="Restored Beautiful Residential Home" 
            className="w-full h-full object-cover object-[center_60%] sm:object-[center_62%]"
          />
          {/* Seamless Fade into Section 2 Dark Navy */}
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between">
          
          {/* Top Half: Headline on Left, Floating Glass Cards on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-2">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <h1 className="hero-text-anim font-display font-black text-3xl sm:text-5xl lg:text-[4.75rem] text-slate-900 leading-[1.08] sm:leading-[1.05] tracking-tight">
                Superior Restoration <br className="hidden lg:block" />
                Solutions
              </h1>
              
              <p className="hero-text-anim text-base sm:text-lg lg:text-xl text-slate-700 max-w-xl leading-relaxed font-medium">
                Protect your most valuable investment with our certified mold remediation, eco-friendly antimicrobial barriers, and hospital-grade air purification backed by industry-leading warranties.
              </p>
              
              <div className="hero-text-anim pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
                <button
                  onClick={onOpenQuote}
                  className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold rounded-full transition-all shadow-xl hover:shadow-2xl text-base sm:text-lg flex items-center justify-center gap-3 hover:scale-[1.02]"
                >
                  Get a Free Estimate
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href={BUSINESS_INFO.phoneRaw}
                  className="px-5 sm:px-6 py-3.5 sm:py-4 bg-white/95 hover:bg-white text-slate-800 font-bold rounded-full transition-all border border-slate-200/90 shadow-md text-base flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#0066FF]" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Content - Floating Glass Cards in the Sky */}
            <div className="lg:col-span-5 relative flex flex-col gap-4 lg:ml-6 lg:mt-2">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:justify-end">
                
                {/* Card 1: Warranty Badge */}
                <div className="hero-card-anim bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] border border-white/80 w-full sm:w-[220px]">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-4 shadow-inner">
                    <ShieldCheck className="w-8 h-8 text-amber-500 drop-shadow-sm" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base lg:text-lg leading-snug">
                    Lifetime Warranty<br />Protection
                  </h4>
                </div>

                {/* Card 2: Happy Clients */}
                <div className="hero-card-anim bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] border border-white/80 w-full sm:w-[250px] transform sm:translate-y-6">
                  <div className="flex items-center gap-[-10px] mb-3">
                    <img 
                      src="/assets/images/matt-jarnis.jpg" 
                      className="w-11 h-11 rounded-full border-2 border-white object-cover relative z-30 shadow-md" 
                      alt="Matt Jarnis" 
                    />
                    <div className="w-11 h-11 rounded-full bg-slate-200 border-2 border-white relative z-20 -ml-2.5 flex items-center justify-center shadow-md">
                      <Users className="w-5 h-5 text-slate-600" />
                    </div>
                    <div className="w-11 h-11 rounded-full bg-blue-50 border-2 border-white relative z-10 -ml-2.5 flex items-center justify-center shadow-sm text-[#0066FF] font-bold text-sm">
                      +
                    </div>
                  </div>
                  <div className="flex gap-1 mb-2 text-amber-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <p className="font-bold text-slate-900 text-sm leading-snug">
                    Happy clients love our<br />Restoration Services!
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Area: Stats Badge Floating over the House Background */}
          <div className="mt-16 sm:mt-24 lg:mt-32 flex justify-end">
            <div className="hero-card-anim bg-[#111827]/95 backdrop-blur-xl border border-slate-700/60 p-5 sm:p-6 rounded-3xl flex items-center gap-6 sm:gap-8 shadow-2xl">
              <div>
                <p className="font-display font-black text-3xl sm:text-4xl text-white mb-0.5">2,800+</p>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">Properties Restored</p>
              </div>
              <div className="w-px h-12 bg-slate-700"></div>
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <p className="font-display font-black text-3xl sm:text-4xl text-white">4.9</p>
                  <Star className="w-5 h-5 text-amber-400 fill-current mb-0.5" />
                </div>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">Customer Rating</p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          2. OUR SERVICES (Dark Navy Bento Section with 4 Cards in a Row - GUARANTEED VISIBLE)
      ========================================================================= */}
      <section className="bg-[#111827] pt-12 pb-28 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#0066FF] font-bold tracking-widest text-xs uppercase mb-3 block">Our Services</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight mb-5">
              Complete Restoration Solutions
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
              From residential inspections to commercial containment, we deliver exceptional restoration services that protect what matters most to you.
            </p>
          </div>

          {/* 4 Cards Row matching Dribbble layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Residential Remediation */}
            <div 
              onClick={() => onNavigate('/services/mold-removal')}
              className="group bg-slate-800/80 border border-slate-700/80 rounded-3xl p-7 flex flex-col justify-between hover:bg-slate-800 transition-all cursor-pointer shadow-xl"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#0066FF] mb-6 group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white transition-all">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2.5">
                  Residential Remediation
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Complete mold removal, attic fogging, basement remediation, and eco-friendly antimicrobial barriers for your home.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-2 text-xs font-bold text-[#0066FF] group-hover:text-blue-400 transition-colors">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: Commercial Containment */}
            <div 
              onClick={() => onNavigate('/services/mold-inspection')}
              className="group bg-slate-800/80 border border-slate-700/80 rounded-3xl p-7 flex flex-col justify-between hover:bg-slate-800 transition-all cursor-pointer shadow-xl"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#0066FF] mb-6 group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white transition-all">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2.5">
                  Commercial Containment
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Durable and efficient containment solutions, OSHA compliance, and rapid turnaround for commercial properties.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-2 text-xs font-bold text-[#0066FF] group-hover:text-blue-400 transition-colors">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: Smoke Odor & Air Quality */}
            <div 
              onClick={() => onNavigate('/services/smoke-odor-removal')}
              className="group bg-slate-800/80 border border-slate-700/80 rounded-3xl p-7 flex flex-col justify-between hover:bg-slate-800 transition-all cursor-pointer shadow-xl"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#0066FF] mb-6 group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:text-white transition-all">
                  <Wind className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2.5">
                  Smoke Odor Removal
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Rapid response and molecular gas oxidation for lingering smoke odors, musty dampness, and severe bio-contaminants.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-2 text-xs font-bold text-[#0066FF] group-hover:text-blue-400 transition-colors">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 4: Vibrant Blue CTA Card */}
            <div 
              onClick={onOpenQuote}
              className="bg-[#0066FF] hover:bg-[#0052cc] rounded-3xl p-7 flex flex-col justify-between text-white transition-all cursor-pointer shadow-2xl shadow-blue-600/30 group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-2xl text-white mb-3 leading-snug">
                  Schedule your mold consultation
                </h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Direct owner assessment with Matt Jarnis. Zero obligation, honest diagnostics, and $250 off complete jobs.
                </p>
              </div>
              <div className="pt-6 flex items-center gap-2 text-sm font-bold text-white group-hover:translate-x-1 transition-transform">
                <span>Book Free Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('/services')}
              className="px-8 py-3.5 bg-transparent border-2 border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-white font-bold rounded-full transition-all text-sm"
            >
              View All 5 Specialized Services
            </button>
          </div>

        </div>
      </section>


      {/* =========================================================================
          3. OUR ABOUT (Light Editorial Section: Text on Left, Wide Team Image on Right)
      ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#0066FF] font-bold tracking-widest text-xs uppercase block">Our About</span>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight leading-[1.1]">
                Over 15 Years of <br />
                <span className="text-[#0066FF]">Remediation Excellence</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Since our founding, Mold Recovery Plus has been protecting homes and businesses across New Jersey with certified restoration craftsmanship. What started as an owner-operated local mission has grown into the area's most trusted remediation contractor.
              </p>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                We combine time-tested containment techniques with cutting-edge HEPA negative air purification and botanical antimicrobials. Our team of certified professionals doesn't just treat symptoms — we build lasting relationships with our clients through exceptional service and guaranteed clearance.
              </p>
              
              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('/about')}
                  className="px-8 py-4 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl text-base flex items-center gap-2"
                >
                  Read Our Story
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
                    ✓
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-slate-900">Direct Owner Oversight</p>
                    <p className="text-slate-500">Matt Jarnis on every job</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panoramic Team Photo */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group">
                <img 
                  src="/assets/images/team-sunset.jpg" 
                  alt="Mold Recovery Plus Team at Sunset" 
                  className="w-full h-auto aspect-[16/10] object-cover transform group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-bold text-lg drop-shadow-md">Dedicated New Jersey Restoration Crew</p>
                  <p className="text-sm text-slate-200 drop-shadow-sm">Serving Burlington, Camden, Mercer, and South NJ</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          4. OUR MISSION (3-Column Layout: Tall Tech Left, Mission Center, Stacked Right)
      ========================================================================= */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Large Vertical Portrait Image */}
            <div className="lg:col-span-4">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-white h-[420px]">
                <img 
                  src="/assets/images/technician-inspecting.jpg" 
                  alt="Certified Inspection Specialist" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Center: Mission Statement Box */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xl flex flex-col justify-center text-center items-center h-[420px]">
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
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200/80 h-[195px] relative group">
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

              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200/80 h-[195px] relative group">
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
          5. UNMATCHED BENEFITS FOR YOUR PEACE OF MIND (Dark Navy Section with 3 Cards)
      ========================================================================= */}
      <section className="py-24 bg-[#111827] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
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

          {/* 3 Bento Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-8 hover:bg-slate-800 transition-all shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#0066FF] mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                Lifetime Warranty Protection
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Industry-leading warranties on botanical barrier sealants and workmanship. Your home's structural framing is protected for years, not just days.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-8 hover:bg-slate-800 transition-all shadow-xl">
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

            {/* Card 3 */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-8 hover:bg-slate-800 transition-all shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-[#0066FF] mb-6">
                <Gem className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">
                Clearance Lab Guaranteed
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Rigorous multi-stage containment checks and independent third-party lab clearance testing. We don't consider a job complete until you're 100% satisfied.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          6. CRAFTSMANSHIP THAT SPEAKS FOR ITSELF / OUR LATEST PROJECTS
      ========================================================================= */}
      <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7">
              <span className="text-[#0066FF] font-bold tracking-widest text-xs uppercase mb-3 block">
                Our Latest Projects
              </span>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight">
                Craftsmanship That Speaks for Itself
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-slate-600 text-base leading-relaxed">
                Every project tells a story of quality, dedication, and attention to detail. Explore our recent work and see why homeowners trust Mold Recovery Plus.
              </p>
            </div>
          </div>

          {/* Featured Large Project Card matching Dribbble layout */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 bg-white transition-all">
            <div className="relative aspect-[16/9] w-full overflow-hidden group bg-slate-900">
              <img 
                key={currentProject.image}
                src={currentProject.image} 
                alt={currentProject.title} 
                className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700 animate-in fade-in"
              />
              {/* Location Badge */}
              <div className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wide shadow-lg">
                📍 {currentProject.tag}
              </div>

              {/* Slide Counter Overlay */}
              <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-xs font-semibold tracking-wider">
                {activeProjectIdx + 1} / {FEATURED_PROJECTS.length}
              </div>
            </div>
            
            {/* Bottom Bar matching Dribbble reference */}
            <div className="p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-slate-100">
              <div className="flex items-start gap-5">
                <span className="font-display font-black text-4xl sm:text-5xl text-[#0066FF]/35 tracking-tight shrink-0">
                  {currentProject.num}
                </span>
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-slate-900 mb-1">
                    {currentProject.title}
                  </h3>
                  <p className="text-sm text-slate-500 max-w-xl">
                    {currentProject.desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 shrink-0">
                <button
                  onClick={() => onNavigate('/gallery')}
                  className="px-6 py-3 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold rounded-full transition-all text-sm flex items-center gap-2 shadow-md cursor-pointer active:scale-95"
                >
                  Explore Project
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handlePrevProject}
                    aria-label="Previous Showcase Project"
                    title="Previous Project"
                    className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={handleNextProject}
                    aria-label="Next Showcase Project"
                    title="Next Project"
                    className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] transition-all cursor-pointer shadow-sm active:scale-95"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Before & After Slider */}
          <div className="mt-16 bg-white p-8 sm:p-12 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <div className="text-center mb-8">
              <span className="text-[#0066FF] font-bold text-xs uppercase tracking-wider block mb-2">Verified Real-World Transformation</span>
              <h3 className="font-display font-extrabold text-3xl text-slate-900 mb-2">Before & After Restoration</h3>
              <p className="text-slate-600 text-sm">Slide horizontally to inspect actual framing decontamination results.</p>
            </div>
            <BeforeAfterSlider />
          </div>

        </div>
      </section>


      {/* =========================================================================
          7. VIDEO SHOWCASE & GOOGLE REVIEWS
      ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#0066FF] font-bold text-xs uppercase tracking-wider block mb-2">Field Video Documentation</span>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight mb-4">
              Watch Our Process in Action
            </h2>
            <p className="text-base text-slate-600">
              See how owner Matt Jarnis inspects, seals, and restores New Jersey attics and crawlspaces without toxic fumigation or scare tactics.
            </p>
          </div>
          
          <div className="mb-24">
            <YouTubeShowcase />
          </div>
        </div>
      </section>

      {/* Google Reviews in Dark Navy Footer Anchor */}
      <section className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GoogleReviewsGrid />
        </div>
      </section>

    </div>
  );
};
