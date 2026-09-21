import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Abstract Colorful Blobs & Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-r from-[#FF3154]/30 via-[#FF167D]/20 to-transparent rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-l from-[#8B3DFF]/30 via-[#28D7FF]/20 to-transparent rounded-full blur-[100px] animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="relative rounded-[32px] p-10 md:p-20 bg-gradient-to-r from-[#151920]/90 via-[#0D1014]/95 to-[#151920]/90 border border-white/15 backdrop-blur-xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Subtle fluid ribbon overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#FF3154] via-[#8B3DFF] to-[#28D7FF]" />
          
          <div className="space-y-4 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-white/5 border border-white/10 text-[#FF3154]">
              <Sparkles size={14} />
              <span>LET'S COLLABORATE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Let's Create <br />
              <span className="text-gradient-brand">Something Amazing</span>
            </h2>

            <p className="text-base md:text-lg text-[#9A9DA7] font-normal leading-relaxed">
              We'd love to hear about your project. Get in touch and let's build something truly exceptional together.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <MagneticButton
              to="/contact"
              variant="primary"
              className="!px-8 !py-4.5 !text-sm uppercase tracking-wider shadow-[0_0_40px_rgba(255,49,84,0.6)]"
            >
              <span>Start a Project</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};
