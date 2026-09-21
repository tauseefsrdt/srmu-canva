import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Play, ArrowDown } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { useMouseParallax } from '../hooks/useMouseParallax';
import { ShowreelModal } from './ShowreelModal';

export const Hero: React.FC = () => {
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseOffset = useMouseParallax(heroRef, 16);

  // Animated counters
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    dedication: 0,
  });

  useEffect(() => {
    const duration = 1800;
    const steps = 50;
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
    const filterEl = document.getElementById('project-filter-section');
    if (filterEl) {
      filterEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[92vh] md:min-h-screen pt-28 md:pt-36 pb-16 flex flex-col justify-between overflow-hidden bg-[#050608] noise-bg"
    >
      {/* Background Cinematic Radial Lights */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#FF3154]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-[#8B3DFF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#28D7FF]/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Hero Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            {/* Small uppercase label */}
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF3154] animate-ping" />
              <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#9A9DA7]">
                OUR PROJECTS
              </span>
            </div>

            {/* Main Display Typography */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[84px] font-black uppercase tracking-tight leading-[0.95] text-white">
                <span className="block font-black">IDEAS</span>
                <span className="block font-black">DESIGNS &</span>
                <span className="block text-gradient-brand text-gradient-glow font-black">
                  REAL IMPACT
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-[#9A9DA7] leading-relaxed max-w-xl font-normal">
              A showcase of our creative work across branding, web, print and digital platforms. Every project tells a story of collaboration, creativity and results.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton
                to="/contact"
                variant="primary"
                className="!px-7 !py-3.5 !text-xs uppercase tracking-wider"
              >
                <span>Start a Project</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                onClick={() => setIsShowreelOpen(true)}
                variant="secondary"
                className="!px-6 !py-3.5 !text-xs uppercase tracking-wider"
              >
                <Play size={14} className="fill-white text-white mr-1" />
                <span>Watch Showreel</span>
              </MagneticButton>
            </div>
          </div>

          {/* RIGHT: Studio Mockup Composition (5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Red/Pink Circular Ambient Glow Ring (From Reference) */}
            <div 
              className="absolute w-72 h-72 sm:w-96 sm:h-96 md:w-[460px] md:h-[460px] rounded-full border-2 border-[#FF3154]/50 shadow-[0_0_80px_rgba(255,49,84,0.4)] pointer-events-none transform transition-transform duration-700"
              style={{
                transform: `translate3d(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px, 0)`
              }}
            />

            {/* Floating 3D Laptop + Phone Showcase */}
            <div 
              className="relative w-full max-w-[480px] transition-transform duration-500 ease-out z-10"
              style={{
                transform: `translate3d(${mouseOffset.x * 1.2}px, ${mouseOffset.y * 1.2}px, 0) perspective(1000px) rotateY(${mouseOffset.x * 0.15}deg) rotateX(${-mouseOffset.y * 0.15}deg)`
              }}
            >
              {/* Laptop Mockup Container */}
              <div className="relative rounded-2xl bg-[#0D1014] border border-white/20 p-2 sm:p-3 shadow-2xl backdrop-blur-xl">
                {/* Laptop Top Bar */}
                <div className="flex items-center gap-1.5 pb-2 px-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF3154]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF7A18]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28D7FF]" />
                </div>
                {/* Laptop Screen Content */}
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-black border border-white/10 group">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
                    alt="Transforming Education For A Brighter Tomorrow"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#28D7FF] font-bold">
                      TRANSFORMING EDUCATION
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-white">
                      SRMU Digital Campus Portal
                    </h3>
                  </div>
                </div>
              </div>

              {/* Floating Mobile Device Overlay (From Reference) */}
              <div 
                className="absolute -bottom-6 -right-4 sm:-right-8 w-28 sm:w-36 aspect-[9/18] rounded-2xl sm:rounded-3xl bg-[#050608] border-2 border-white/25 p-1.5 shadow-[0_25px_50px_rgba(0,0,0,0.9)] overflow-hidden transition-transform duration-700 z-20"
                style={{
                  transform: `translate3d(${mouseOffset.x * -0.8}px, ${mouseOffset.y * -0.8}px, 0)`
                }}
              >
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop"
                    alt="Mobile App Showcase"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full bg-black/80" />
                </div>
              </div>

              {/* Top Right Floating Badge */}
              <div className="absolute -top-6 -right-2 sm:-right-4 px-4 py-2 rounded-full bg-[#151920]/90 border border-white/20 backdrop-blur-md text-[10px] font-bold tracking-wider uppercase text-white shadow-xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#28D7FF] animate-pulse" />
                <span>AWWWARDS NOMINEE</span>
              </div>
            </div>

            {/* Right Side Vertical Editorial Typography (From Reference) */}
            <div className="hidden xl:flex flex-col items-center absolute -right-20 top-1/2 -translate-y-1/2 space-y-6 select-none opacity-80">
              <div className="font-handwriting text-2xl text-white transform -rotate-90 origin-center whitespace-nowrap">
                Good Design Better Business
              </div>
              <div className="w-[1px] h-12 bg-white/20" />
              <div className="text-[9px] font-mono tracking-[0.25em] text-[#9A9DA7] uppercase transform -rotate-90 origin-center whitespace-nowrap">
                BRAND • WEB • PRINT • DIGITAL
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM STATS BAR & SCROLL DOWN */}
        <div className="mt-14 md:mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* 4 Hero Animated Counters */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 w-full md:w-auto">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-mono">
                {counts.projects}+
              </div>
              <div className="text-xs text-[#9A9DA7] uppercase tracking-wider font-semibold mt-0.5">
                Projects Completed
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
                Creative Dedication
              </div>
            </div>
          </div>

          {/* Scroll Down Button */}
          <button
            onClick={scrollToContent}
            className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#9A9DA7] hover:text-white transition-colors group cursor-pointer"
            aria-label="Scroll to Projects"
          >
            <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center group-hover:border-[#FF3154] group-hover:bg-[#FF3154]/10 transition-all">
              <ArrowDown size={14} className="text-[#FF3154] group-hover:translate-y-0.5 transition-transform" />
            </div>
            <span>SCROLL DOWN</span>
          </button>
        </div>

      </div>

      {/* Showreel Video Modal */}
      <ShowreelModal 
        isOpen={isShowreelOpen} 
        onClose={() => setIsShowreelOpen(false)} 
      />
    </section>
  );
};
