import React, { useState } from 'react';
import { 
  Send, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle, 
  Clock, 
  Sparkles,
  Lock,
  X
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/businessData';

export const InquiryForm = ({ defaultService = "", onSuccess = () => {}, onClose = null }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    zipCode: '',
    propertyType: 'single-family',
    service: defaultService || 'mold-removal',
    message: '',
    isEmergency: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number so Matt can contact you.');
      return;
    }
    setError('');
    setLoading(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      onSuccess(formData);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-emerald-500/50 text-center space-y-6 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
            Request Received • Immediate Priority
          </span>
          <h3 className="font-display font-extrabold text-2xl text-white mt-1">
            Thank You, {formData.fullName}!
          </h3>
          <p className="text-slate-300 text-sm max-w-md mx-auto mt-2">
            Owner Matt Jarnis has been notified of your inquiry for <strong>{formData.zipCode || 'New Jersey'}</strong>. Expect a phone call or text shortly to discuss your property.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-2">
          <div className="flex items-center justify-center gap-2 text-white font-semibold">
            <Clock className="w-4 h-4 text-[#0066FF]" />
            <span>Need Immediate Assistance Right Now?</span>
          </div>
          <p>You can connect directly with our emergency line:</p>
          <a
            href={BUSINESS_INFO.phoneRaw}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-sm shadow-lg transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>Call Matt at {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          {onClose && (
            <button
              onClick={onClose}
              type="button"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-all shadow"
            >
              Close Window
            </button>
          )}
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs text-slate-400 hover:text-slate-200 underline py-1.5"
          >
            Submit another property request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-5">
      
      {/* Form Header */}
      <div className="border-b border-slate-800 pb-4">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-xs uppercase font-bold tracking-wider text-[#0066FF] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Lead Dispatch</span>
          </span>
          <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-700/60 px-2.5 py-0.5 rounded-full">
            $250 Off Promo Applied
          </span>
        </div>
        <h3 className="font-display font-extrabold text-2xl text-white">
          Request a Free Assessment & Quote
        </h3>
        <p className="text-slate-400 text-xs mt-1">
          No obligation. Transparent pricing with our Written Price-Beat Guarantee.
        </p>
      </div>

      {error && (
        <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
          <span>{error}</span>
        </div>
      )}

      {/* Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. John Miller"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="(609) 000-0000"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
          />
        </div>
      </div>

      {/* Email & ZIP */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
            Property ZIP Code (NJ)
          </label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="e.g. 08016, 08002..."
            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
          />
        </div>
      </div>

      {/* Service Selection */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
          Service Needed
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
        >
          {SERVICES.map(s => (
            <option key={s.id} value={s.id}>
              {s.title} — {s.tagline}
            </option>
          ))}
          <option value="not-sure">Not Sure — Help Me Choose During Assessment</option>
        </select>
      </div>

      {/* Property Type */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
          Property Type
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { id: 'single-family', label: 'Single-Family' },
            { id: 'townhouse', label: 'Townhouse/Condo' },
            { id: 'commercial', label: 'Commercial' },
            { id: 'real-estate', label: 'Real Estate Sale' }
          ].map((pt) => (
            <button
              type="button"
              key={pt.id}
              onClick={() => setFormData(prev => ({ ...prev, propertyType: pt.id }))}
              className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                formData.propertyType === pt.id
                  ? 'bg-[#0066FF] text-white border-blue-500 shadow-md'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
              }`}
            >
              {pt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Notes / Details */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
          Describe The Issue (Location, Odors, Visible Mold...)
        </label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="e.g. Musty smell in basement, visible dark spots on attic rafters, need air duct cleaning after move-in..."
          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
        ></textarea>
      </div>

      {/* Emergency Toggle */}
      <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800">
        <input
          type="checkbox"
          id="isEmergency"
          name="isEmergency"
          checked={formData.isEmergency}
          onChange={handleChange}
          className="w-4 h-4 rounded text-[#0066FF] focus:ring-[#0066FF] border-slate-700 bg-slate-900"
        />
        <label htmlFor="isEmergency" className="text-xs text-slate-300 select-none cursor-pointer">
          <strong className="text-white">Active emergency / leak:</strong> Prioritize for same-day dispatch
        </label>
      </div>

      {/* Submit CTA */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 px-6 rounded-full bg-[#0066FF] hover:bg-[#0052cc] text-white font-black text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] disabled:opacity-50 cursor-pointer"
      >
        {loading ? (
          <span>Dispatching Request...</span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Assessment Request</span>
          </>
        )}
      </button>

      {/* Optional Cancel/Close Button for Modal */}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="w-full py-2.5 px-4 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-400 hover:text-white text-xs font-semibold border border-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <X className="w-3.5 h-3.5 text-slate-400" />
          <span>Close & Return to Page</span>
        </button>
      )}

      {/* Trust & Privacy Guarantee */}
      <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-slate-400" />
          <span>Strict Privacy • Never Sold</span>
        </span>
        <span className="flex items-center gap-1.5 text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Zero-Pressure Honest Advice</span>
        </span>
      </div>

    </form>
  );
};
