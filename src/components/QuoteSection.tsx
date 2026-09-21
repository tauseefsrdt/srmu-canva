import React from 'react';
import { Quote } from 'lucide-react';

export const QuoteSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#050608]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#FF3154]/10 via-[#8B3DFF]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
        <div className="relative p-8 md:p-16 rounded-3xl bg-[#0D1014]/60 border border-white/10 backdrop-blur-md">
          {/* Top Quote Icon & Brush Mark */}
          <div className="flex items-center justify-between mb-8">
            <div className="w-14 h-14 rounded-full bg-[#FF3154]/20 border border-[#FF3154]/40 flex items-center justify-center text-[#FF3154] shadow-[0_0_20px_rgba(255,49,84,0.3)]">
              <Quote size={28} />
            </div>

            {/* Red/Pink stylized stroke */}
            <svg width="120" height="30" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FF3154]">
              <path 
                d="M5 25C25 5 45 35 65 15C85 -5 105 25 115 10" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeLinecap="round"
                className="animate-pulse"
              />
            </svg>
          </div>

          {/* Quote Body */}
          <blockquote className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight tracking-tight mb-8">
            “Design is not just what it looks like, but <span className="text-gradient-brand">how it works</span>.”
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-[2px] bg-[#FF3154]" />
            <span className="text-sm md:text-base font-bold text-[#9A9DA7] tracking-wider uppercase">
              Steve Jobs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
