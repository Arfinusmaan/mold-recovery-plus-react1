import React from 'react';
import { Star, ShieldCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GOOGLE_REVIEWS, BUSINESS_INFO } from '../data/businessData';
import { GoogleGIcon } from './GoogleRatingBadge';

export const GoogleReviewsGrid = ({ limit = 6, showHeader = true }) => {
  const reviewsToDisplay = limit ? GOOGLE_REVIEWS.slice(0, limit) : GOOGLE_REVIEWS;

  return (
    <section className="py-20 relative">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full bg-gradient-to-b from-brand-950/20 via-transparent to-transparent pointer-events-none rounded-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {showHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/50 border border-amber-600/40 text-amber-300 text-xs font-bold mb-3">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>Verified Google Business Profile Reviews</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                Real Customer Experiences.
              </h2>
              <p className="text-slate-400 text-base max-w-2xl mt-3">
                Unfiltered feedback from New Jersey property owners who trusted Matt Jarnis and Mold Recovery Plus with their homes.
              </p>
            </div>

            {/* Google Aggregate Score Pill */}
            <a
              href={BUSINESS_INFO.googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-700/80 hover:border-slate-500 shadow-xl transition-all duration-300 hover:scale-[1.02] group shrink-0"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-md shrink-0">
                <GoogleGIcon className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-black text-2xl text-white">
                    4.9
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mt-0.5">
                  <span>Based on 146+ Google Reviews</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </div>
              </div>
            </a>
          </div>
        )}

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsToDisplay.map((r, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Card Header: Stars & Service Pill */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(r.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/80">
                    {r.service}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{r.quote}"
                </p>
              </div>

              {/* Card Footer: Reviewer Info & Official Google Attribution */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0066FF] to-blue-400 text-white font-bold text-sm flex items-center justify-center shadow-md">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">
                      {r.name}
                    </h4>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Homeowner Verified</span>
                    </span>
                  </div>
                </div>

                {/* Google Logo & Attribution at the bottom of the card */}
                <a
                  href={BUSINESS_INFO.googleProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 hover:bg-slate-700 border border-slate-700/60 transition-colors shrink-0"
                  title="View this review on Google"
                >
                  <GoogleGIcon className="w-4 h-4" />
                  <span className="text-[11px] font-medium text-slate-300">
                    Review on Google
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Reviews Button */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_INFO.googleProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-slate-900 border border-slate-700 hover:border-slate-500 text-white font-bold text-sm transition-all duration-300 hover:scale-[1.02]"
          >
            <GoogleGIcon className="w-5 h-5" />
            <span>Read All 146+ Reviews on Google Business Profile</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
