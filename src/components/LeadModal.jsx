import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { InquiryForm } from './InquiryForm';

export const LeadModal = ({ isOpen, onClose, defaultService = "" }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div 
        className="fixed inset-0 cursor-pointer" 
        onClick={onClose}
        aria-label="Close modal backdrop"
      ></div>

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl shadow-black z-10 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Persistent Sticky Top Header with Prominent Close Button */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-5 py-3.5 bg-slate-900/98 backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Free Assessment & Quote
            </span>
          </div>

          {/* Highly Visible Exit / Close Button */}
          <button
            onClick={onClose}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-red-950 text-white hover:text-red-300 border border-slate-600 hover:border-red-500/80 transition-all text-xs font-bold shadow-lg active:scale-95 cursor-pointer"
            aria-label="Close estimate form"
          >
            <span>Close</span>
            <X className="w-4 h-4 text-red-400 font-bold" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="overflow-y-auto flex-1 overscroll-contain">
          <InquiryForm 
            defaultService={defaultService} 
            onSuccess={() => {}} 
            onClose={onClose}
          />
        </div>

      </div>
    </div>
  );
};
