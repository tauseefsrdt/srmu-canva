import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, ArrowDown, Search, CheckCircle2, TrendingUp, Zap } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { useMouseParallax } from '../hooks/useMouseParallax';
import { ShowreelModal } from './ShowreelModal';

export const Hero: React.FC = () => {
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseOffset = useMouseParallax(heroRef, 14);

  // Animated counters
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    dedication: 0,
  });

  useEffect(() => {
    const duration = 1600;
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        projects: Math.min(100, Math.floor(progress * 100)),
        clients: Math.min(50, Math.floor(progress * 50)),
        years: Math.min(6, Math.floor(progress * 6)),
        dedication: Math.min(100, Math.floor(progress * 100)),
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const scrollToContent = () => {
    const el = document.getElementById('three-core-areas');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingTags = [
    { label: 'Google Ads', color: '#267BFF', top: '-10%', left: '5%' },
    { label: 'SEO & Maps', color: '#FF7A18', top: '15%', right: '-8%' },
    { label: 'AI Search', color: '#8B3DFF', bottom: '25%', left: '-10%' },
    { label: 'AEO Engine', color: '#FF167D', top: '55%', right: '-5%' },
    { label: 'Meta Ads', color: '#28D7FF', bottom: '-5%', right: '20%' },
    { label: 'Qualified Leads', color: '#FF3154', bottom: '-8%', left: '10%' },
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[92vh] md:min-h-screen pt-28 md:pt-36 pb-16 flex flex-col justify-between overflow-hidden bg-[#050608] noise-bg"
    >
      {/* Cinematic Studio Lights */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#FF3154]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-[#8B3DFF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#28D7FF]/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Hero Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            
            {/* Supporting headline badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold tracking-wider text-[#FF3154]">
              <Sparkles size={14} />
              <span>GET FOUND • GET CUSTOMERS • GET REMEMBERED</span>
            </div>

            {/* Main Display H1 (Exact from Doc) */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] font-black uppercase tracking-tight leading-[0.96] text-white">
                <span className="block font-black">Digital Marketing</span>
                <span className="block text-gradient-brand text-gradient-glow font-black">
                  That Means Business.
                </span>
              </h1>
            </div>

            {/* Body Copy (Exact from Doc) */}
            <p className="text-sm sm:text-base md:text-lg text-[#9A9DA7] leading-relaxed max-w-xl font-normal">
              SRMUCANVAS is a digital marketing and performance marketing agency helping businesses grow through paid advertising, SEO, AI Search, Answer Engine Optimization (AEO), lead generation and conversion-focused creative.
            </p>

            {/* Journey Pill Pipeline: SEARCH → DISCOVER → CLICK → ENQUIRE → GROW */}
            <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono font-bold tracking-wider text-white/80 py-2 overflow-x-auto no-scrollbar">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">SEARCH</span>
              <span className="text-[#FF3154]">→</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">DISCOVER</span>
              <span className="text-[#FF3154]">→</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">CLICK</span>
              <span className="text-[#FF3154]">→</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">ENQUIRE</span>
              <span className="text-[#FF3154]">→</span>
              <span className="px-3 py-1 rounded-full bg-[#FF3154] text-white font-black shadow-[0_0_15px_#FF3154]">GROW</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton
                to="/lets-talk"
                variant="primary"
                className="!px-7 !py-3.5 !text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(255,49,84,0.5)]"
              >
                <span>Get a Free Audit</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                to="/what-we-do"
                variant="secondary"
                className="!px-6 !py-3.5 !text-xs uppercase tracking-wider"
              >
                <span>See What We Do</span>
                <ArrowRight size={14} className="text-[#FF3154] group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
            </div>
          </div>

          {/* RIGHT: Studio Mockup Composition + Floating AI/Ads Pills (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Red Circular Glow Ring */}
            <div 
              className="absolute w-72 h-72 sm:w-96 sm:h-96 md:w-[460px] md:h-[460px] rounded-full border-2 border-[#FF3154]/40 shadow-[0_0_80px_rgba(255,49,84,0.35)] pointer-events-none transform transition-transform duration-700"
              style={{
                transform: `translate3d(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px, 0)`
              }}
            />

            {/* Floating Tags (Google Ads, SEO, AI Search, AEO, Meta Ads, Leads) */}
            {floatingTags.map((tag, i) => (
              <div
                key={tag.label}
                className="absolute hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D1014]/90 border border-white/15 backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-wider text-white shadow-xl z-30 transition-transform duration-500"
                style={{
                  top: tag.top,
                  bottom: tag.bottom,
                  left: tag.left,
                  right: tag.right,
                  transform: `translate3d(${mouseOffset.x * (i % 2 === 0 ? 0.8 : -0.8)}px, ${mouseOffset.y * (i % 2 === 0 ? 0.8 : -0.8)}px, 0)`
                }}
              >
                <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: tag.color }} />
                <span>{tag.label}</span>
              </div>
            ))}

            {/* 3D Mockup Container */}
            <div 
              className="relative w-full max-w-[460px] transition-transform duration-500 ease-out z-10"
              style={{
                transform: `translate3d(${mouseOffset.x * 1.1}px, ${mouseOffset.y * 1.1}px, 0) perspective(1000px) rotateY(${mouseOffset.x * 0.12}deg) rotateX(${-mouseOffset.y * 0.12}deg)`
              }}
            >
              {/* Laptop UI */}
              <div className="relative rounded-2xl bg-[#0D1014] border border-white/20 p-2 sm:p-3 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-1.5 pb-2 px-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF3154]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF7A18]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28D7FF]" />
                </div>
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-black border border-white/10 group">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                    alt="SRMUCANVAS Growth & Analytics Dashboard"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#28D7FF] font-bold">
                      PERFORMANCE COCKPIT
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-white">
                      Search, AEO & Lead Acquisition
                    </h3>
                  </div>
                </div>
              </div>

              {/* Mobile Device Overlay */}
              <div 
                className="absolute -bottom-6 -right-4 sm:-right-8 w-28 sm:w-36 aspect-[9/18] rounded-2xl sm:rounded-3xl bg-[#050608] border-2 border-white/25 p-1.5 shadow-[0_25px_50px_rgba(0,0,0,0.9)] overflow-hidden transition-transform duration-700 z-20"
                style={{
                  transform: `translate3d(${mouseOffset.x * -0.7}px, ${mouseOffset.y * -0.7}px, 0)`
                }}
              >
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop"
                    alt="Mobile Campaign Creatives"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full bg-black/80" />
                </div>
              </div>
            </div>

            {/* Right Side Vertical Editorial Badge */}
            <div className="hidden xl:flex flex-col items-center absolute -right-20 top-1/2 -translate-y-1/2 space-y-6 select-none opacity-80">
              <div className="font-handwriting text-2xl text-white transform -rotate-90 origin-center whitespace-nowrap">
                Good Design Better Business
              </div>
              <div className="w-[1px] h-12 bg-white/20" />
              <div className="text-[9px] font-mono tracking-[0.25em] text-[#9A9DA7] uppercase transform -rotate-90 origin-center whitespace-nowrap">
                SEO • ADS • AEO • CREATIVE
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM STATS & SCROLL DOWN */}
        <div className="mt-14 md:mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 w-full md:w-auto">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-mono">
                {counts.projects}+
              </div>
              <div className="text-xs text-[#9A9DA7] uppercase tracking-wider font-semibold mt-0.5">
                Growth Campaigns
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-mono">
                {counts.clients}+
              </div>
              <div className="text-xs text-[#9A9DA7] uppercase tracking-wider font-semibold mt-0.5">
                Happy Clients
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-mono">
                {counts.years}+
              </div>
              <div className="text-xs text-[#9A9DA7] uppercase tracking-wider font-semibold mt-0.5">
                Years Experience
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FF3154] font-mono">
                {counts.dedication}%
              </div>
              <div className="text-xs text-[#9A9DA7] uppercase tracking-wider font-semibold mt-0.5">
                Dedication to ROI
              </div>
            </div>
          </div>

          <button
            onClick={scrollToContent}
            className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#9A9DA7] hover:text-white transition-colors group cursor-pointer"
            aria-label="Scroll to Core Areas"
          >
            <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center group-hover:border-[#FF3154] group-hover:bg-[#FF3154]/10 transition-all">
              <ArrowDown size={14} className="text-[#FF3154] group-hover:translate-y-0.5 transition-transform" />
            </div>
            <span>EXPLORE OUTCOMES</span>
          </button>
        </div>

      </div>

      <ShowreelModal 
        isOpen={isShowreelOpen} 
        onClose={() => setIsShowreelOpen(false)} 
      />
    </section>
  );
};
