import React, { useState, useEffect, useRef } from 'react';
import { 
  Maximize2, ArrowRight, Phone, ShieldCheck, Sparkles, Filter
} from 'lucide-react';
import gsap from 'gsap';
import { GALLERY_PROJECTS, BUSINESS_INFO } from '../data/businessData';
import { LightboxModal } from '../components/LightboxModal';
import { GoogleRatingBadge } from '../components/GoogleRatingBadge';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { GoogleReviewsGrid } from '../components/GoogleReviewsGrid';

export const GalleryPage = ({ onNavigate, onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
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

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'mold-removal', label: 'Mold Remediation' },
    { id: 'basements', label: 'Basements & Crawlspaces' },
    { id: 'inspections', label: 'Moisture Surveys' },
    { id: 'air-ducts', label: 'Air Ducts' },
    { id: 'odor', label: 'Smoke Odor' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? GALLERY_PROJECTS
    : GALLERY_PROJECTS.filter(p => p.category === activeCategory);

  const activeProject = selectedProjectIndex !== null ? filteredProjects[selectedProjectIndex] : null;

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
              Our Latest Projects
            </span>
            
            <h1 className="gsap-reveal font-display font-black text-5xl sm:text-6xl lg:text-[4.75rem] text-slate-900 leading-[1.08] tracking-tight">
              Craftsmanship That <br />
              <span className="text-[#0066FF]">Speaks for Itself</span>
            </h1>
            
            <p className="gsap-reveal text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Explore authentic field photographs captured across crawlspaces, attics, basements, and residential interiors throughout New Jersey.
            </p>
            
            <div className="gsap-reveal pt-4 flex flex-wrap justify-center gap-4 items-center">
              <button
                onClick={onOpenQuote}
                className="px-8 py-4 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold rounded-full transition-all shadow-xl hover:shadow-2xl text-base flex items-center gap-2"
              >
                Schedule an Assessment
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
        </div>
      </section>


      {/* =========================================================================
          2. FEATURED ESTATE BEFORE & AFTER TRANSFORMATION
      ========================================================================= */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#0066FF] font-bold text-xs uppercase tracking-wider block mb-2">Featured Project Showcase</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Interactive Remediation Results
            </h2>
            <p className="text-slate-600 text-sm mt-2">Slide to inspect actual framing decontamination results in an active New Jersey property.</p>
          </div>
          
          <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] border border-slate-200 shadow-xl max-w-5xl mx-auto">
            <BeforeAfterSlider />
          </div>
        </div>
      </section>


      {/* =========================================================================
          3. FULL PROJECT GALLERY GRID
      ========================================================================= */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === c.id
                    ? 'bg-[#0066FF] text-white shadow-lg shadow-blue-500/25 scale-105'
                    : 'bg-[#f8fafc] text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div 
                key={project.id} 
                className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 bg-white border border-slate-200/80 flex flex-col justify-between"
                onClick={() => setSelectedProjectIndex(idx)}
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-slate-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-[#0066FF] flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <span className="text-[11px] font-bold text-[#0066FF] uppercase tracking-wider block mb-1">
                    {project.location}
                  </span>
                  <h3 className="font-bold text-lg text-slate-900 mb-2 leading-snug">{project.title}</h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GoogleReviewsGrid />
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProjectIndex !== null && (
        <LightboxModal 
          isOpen={true} 
          onClose={() => setSelectedProjectIndex(null)}
          onNext={() => setSelectedProjectIndex((selectedProjectIndex + 1) % filteredProjects.length)}
          onPrev={() => setSelectedProjectIndex((selectedProjectIndex - 1 + filteredProjects.length) % filteredProjects.length)}
          imageSrc={activeProject.image}
          title={activeProject.title}
          description={activeProject.description}
          location={activeProject.location}
          currentIndex={selectedProjectIndex + 1}
          totalItems={filteredProjects.length}
        />
      )}

    </div>
  );
};
