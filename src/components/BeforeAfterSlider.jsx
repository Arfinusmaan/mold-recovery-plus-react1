import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

export const BeforeAfterSlider = ({
  beforeImage = "/assets/images/attic-beams-before.jpg",
  afterImage = "/assets/images/mold-sealer-application.jpg",
  beforeLabel = "Active Mold Colonization (Before)",
  afterLabel = "Treated & Polymer Sealed (After)",
  title = "Attic Rafters & Roof Decking Restoration",
  location = "Cherry Hill, NJ"
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
      {/* Header Info */}
      <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
              Verified Project Transformation • {location}
            </span>
          </div>
          <h4 className="font-display font-bold text-lg text-white">
            {title}
          </h4>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-xs font-semibold text-slate-300 border border-slate-700">
          <MoveHorizontal className="w-3.5 h-3.5 text-[#0066FF]" />
          <span>Drag Slider to Compare</span>
        </div>
      </div>

      {/* Interactive Slider Frame */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] select-none overflow-hidden cursor-ew-resize"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* After Tag */}
        <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-600/60 backdrop-blur-md text-emerald-300 font-bold text-xs flex items-center gap-1.5 shadow-lg">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{afterLabel}</span>
        </div>

        {/* Before Image (Clipped Overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
          />

          {/* Before Tag */}
          <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-rose-950/80 border border-rose-600/60 backdrop-blur-md text-rose-300 font-bold text-xs shadow-lg">
            <span>{beforeLabel}</span>
          </div>
        </div>

        {/* Slider Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 cursor-ew-resize"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
        >
          {/* Thumb Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-white shadow-xl flex items-center justify-center text-white hover:scale-110 transition-transform">
            <MoveHorizontal className="w-5 h-5 text-[#0066FF]" />
          </div>
        </div>
      </div>

      {/* Caption footer */}
      <div className="p-4 bg-slate-900/60 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
        <span>Remediated using TAVS Dry-Vapor & Hospital-Grade Polymer Barrier Coating.</span>
        <span className="text-emerald-400 font-semibold">100% Spore Clearance</span>
      </div>
    </div>
  );
};
