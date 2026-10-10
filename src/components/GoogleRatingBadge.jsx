import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessData';

// Official multi-colored Google 'G' icon SVG
export const GoogleGIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

export const GoogleRatingBadge = ({ size = "normal", className = "" }) => {
  return (
    <a
      href={BUSINESS_INFO.googleProfileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-slate-900/90 border border-slate-700/80 hover:border-slate-500 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-[1.02] group ${className}`}
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-sm shrink-0">
        <GoogleGIcon className="w-5 h-5" />
      </div>
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5">
          <span className="font-display font-bold text-white text-base tracking-tight">
            {BUSINESS_INFO.rating}
          </span>
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
            ))}
          </div>
          <span className="text-xs text-slate-400 font-medium">
            ({BUSINESS_INFO.reviewCount}+ reviews)
          </span>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
          <ShieldCheck className="w-3 h-3 text-emerald-400" />
          <span>Verified Google Reviews</span>
        </div>
      </div>
    </a>
  );
};
