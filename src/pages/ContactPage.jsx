import React, { useEffect, useRef } from 'react';
import { 
  Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, ArrowRight, Sparkles 
} from 'lucide-react';
import gsap from 'gsap';
import { BUSINESS_INFO } from '../data/businessData';
import { InquiryForm } from '../components/InquiryForm';
import { GoogleRatingBadge } from '../components/GoogleRatingBadge';
import { GoogleReviewsGrid } from '../components/GoogleReviewsGrid';

export const ContactPage = () => {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="gsap-reveal text-[#0066FF] font-bold tracking-widest text-xs uppercase block">
              Direct Owner Consultation
            </span>
            
            <h1 className="gsap-reveal font-display font-black text-5xl sm:text-6xl lg:text-[4.75rem] text-slate-900 leading-[1.08] tracking-tight">
              Schedule Your Free <br />
              <span className="text-[#0066FF]">Mold & Odor Consultation</span>
            </h1>
            
            <p className="gsap-reveal text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Tell us about your property's symptoms. Whether you need immediate emergency dispatch or an honest, transparent second opinion, we're ready.
            </p>
            
            <div className="gsap-reveal pt-2 flex flex-wrap justify-center gap-4 items-center">
              <a
                href={BUSINESS_INFO.phoneRaw}
                className="px-8 py-4 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold rounded-full transition-all shadow-xl hover:shadow-2xl text-base flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (609) 255-6499 Anytime</span>
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          2. CONTACT FORM & DIRECT INFO BENTO
      ========================================================================= */}
      <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Interactive Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-xl border border-slate-200">
              <div className="mb-8">
                <span className="text-[#0066FF] font-bold text-xs uppercase tracking-wider block mb-1">Online Estimate Request</span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 mb-2">
                  Request an Inspection & Estimate
                </h3>
                <p className="text-slate-600 text-sm">
                  Fill out the form below. Owner Matt Jarnis will review your request and contact you directly.
                </p>
              </div>
              <InquiryForm />
            </div>

            {/* Right: Verified Info & Trust Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Dark Navy Card matching Home design */}
              <div className="bg-[#111827] p-8 sm:p-10 rounded-[2.5rem] shadow-xl text-white border border-slate-700/60">
                <span className="text-[#0066FF] font-bold tracking-widest uppercase text-xs mb-2 block">
                  Direct Line
                </span>
                <h3 className="font-display font-bold text-2xl text-white mb-6 pb-4 border-b border-slate-800">
                  Verified Contact Information
                </h3>

                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-[#0066FF] flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider mb-0.5">Phone / Text</span>
                      <a href={BUSINESS_INFO.phoneRaw} className="text-white font-extrabold text-xl hover:text-blue-400 transition-colors">
                        {BUSINESS_INFO.phone}
                      </a>
                      <span className="text-xs text-slate-400 block mt-0.5">Available 24/7 for active leaks & emergencies</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-[#0066FF] flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider mb-0.5">Email</span>
                      <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white font-bold text-base hover:text-blue-400 transition-colors break-all">
                        {BUSINESS_INFO.email}
                      </a>
                      <span className="text-xs text-slate-400 block mt-0.5">Fast email responses for estimates & reports</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-[#0066FF] flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider mb-0.5">Service Center</span>
                      <span className="text-white font-bold text-base block">{BUSINESS_INFO.address}</span>
                      <span className="text-xs text-slate-400 block mt-0.5">Mobile dispatch across Central & South NJ</span>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-[#0066FF] flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider mb-0.5">Operating Hours</span>
                      <span className="text-white font-bold text-base block">{BUSINESS_INFO.hours}</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Owner Trust Callout Card */}
              <div className="bg-blue-50/80 border border-blue-200/80 p-8 rounded-[2rem] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#0066FF] text-white flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Direct Owner Communication</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  When you submit an inquiry, it goes directly to Matt Jarnis. No automated switchboards, junior telemarketers, or high-pressure sales reps. Just honest advice.
                </p>
              </div>

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
