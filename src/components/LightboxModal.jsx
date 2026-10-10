import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from 'lucide-react';

export const LightboxModal = ({ project, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, onNext, onPrev]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Background click */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 p-3 rounded-full bg-slate-900/80 text-white hover:bg-brand-600 transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/80 text-white hover:bg-brand-600 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-900/80 text-white hover:bg-brand-600 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content Card */}
      <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center z-10">
        <div className="w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-[70vh] w-auto max-w-full object-contain"
          />
        </div>

        {/* Caption bar */}
        <div className="w-full mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-brand-400 bg-brand-950/80 border border-brand-800/60 px-2.5 py-0.5 rounded-full">
                <Tag className="w-3 h-3" />
                <span>{project.categoryLabel}</span>
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{project.location}</span>
              </span>
            </div>
            <h4 className="font-display font-bold text-lg text-white">
              {project.title}
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              {project.desc}
            </p>
          </div>
          <span className="text-xs text-slate-500 shrink-0">
            Use Left / Right arrow keys to browse
          </span>
        </div>

      </div>

    </div>
  );
};
