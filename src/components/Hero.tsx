import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { ArrowRight, Sparkles, ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import { MagneticButton } from './MagneticButton';
import { ShowreelModal } from './ShowreelModal';
import { createFloating, isReducedMotion } from '../utils/animations';

export const Hero: React.FC = () => {
  const [isShowreelOpen, setIsShowreelOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const rightMockupRef = useRef<HTMLDivElement>(null);
  const glowRingRef = useRef<HTMLDivElement>(null);

  // Animated numbers
  const [counts, setCounts] = useState({
    growth: 0,
    search: 0,
    conversions: 0,
    dedication: 0,
  });

  useLayoutEffect(() => {
    if (isReducedMotion() || !heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        '.hero-eyebrow',
        { opacity: 0, y: 30, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.0, delay: 0.1 }
      )
      .fromTo(
        '.hero-word',
        { yPercent: 120, rotate: 4, opacity: 0 },
        { 
          yPercent: 0, 
          rotate: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.08, 
          ease: 'power4.out',
          clearProps: 'transform,opacity'
        },
        '-=0.7'
      )
      .fromTo(
        '.hero-desc',
        { opacity: 0, y: 30, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, ease: 'power3.out' },
        '-=0.7'
      )
      .fromTo(
        '.hero-pipeline',
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(
        '.hero-cta-btn',
        { opacity: 0, y: 25, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.8, ease: 'back.out(1.5)' },
        '-=0.5'
      )
      .fromTo(
        '.hero-mockup-wrapper',
        { opacity: 0, scale: 0.85, y: 60, rotateX: 12 },
        { opacity: 1, scale: 1, y: 0, rotateX: 0, duration: 1.4, ease: 'power4.out' },
        '-=1.0'
      )
      .fromTo(
        glowRingRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.6, ease: 'power3.out' },
        '-=1.2'
      )
      .fromTo(
        '.hero-tag',
        { opacity: 0, scale: 0.5, y: 20 },
        { opacity: 1, scale: 1, y: 0, stagger: 0.08, duration: 0.7, ease: 'back.out(2)' },
        '-=0.8'
      )
      .fromTo(
        '.hero-stats-row',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, clearProps: 'all' },
        '-=0.5'
      );

      // Micro-animations for tags
      document.querySelectorAll('.hero-tag').forEach((el, index) => {
        createFloating(el, {
          yOffset: index % 2 === 0 ? -12 : -16,
          xOffset: index % 3 === 0 ? 6 : -6,
          rotation: index % 2 === 0 ? 3 : -3,
          duration: 3.5 + index * 0.4,
          delay: index * 0.2,
        });
      });

      // Animated background geometric shapes
      gsap.to('.hero-bg-shape-1', {
        rotation: 360,
        x: '+=30',
        y: '-=20',
        duration: 25,
        repeat: -1,
        ease: 'none',
      });

      gsap.to('.hero-bg-shape-2', {
        rotation: -360,
        x: '-=25',
        y: '+=35',
        duration: 30,
        repeat: -1,
        ease: 'none',
      });

      gsap.to('.hero-orbit-ring', {
        scale: 1.3,
        opacity: 0,
        duration: 3.5,
        repeat: -1,
        stagger: 1.2,
        ease: 'power1.out',
      });

      gsap.to('.hero-bg-marquee', {
        xPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // QuickTo 3D tracking
  useEffect(() => {
    if (isReducedMotion() || !heroRef.current || !rightMockupRef.current) return;

    const el = heroRef.current;
    const mockup = rightMockupRef.current;
    const ring = glowRingRef.current;

    const xTo = gsap.quickTo(mockup, 'x', { duration: 0.6, ease: 'power2.out' });
    const yTo = gsap.quickTo(mockup, 'y', { duration: 0.6, ease: 'power2.out' });
    const rotYTo = gsap.quickTo(mockup, 'rotationY', { duration: 0.6, ease: 'power2.out' });
    const rotXTo = gsap.quickTo(mockup, 'rotationX', { duration: 0.6, ease: 'power2.out' });

    let ringXTo: gsap.QuickToFunc | null = null;
    let ringYTo: gsap.QuickToFunc | null = null;
    if (ring) {
      ringXTo = gsap.quickTo(ring, 'x', { duration: 0.8, ease: 'power2.out' });
      ringYTo = gsap.quickTo(ring, 'y', { duration: 0.8, ease: 'power2.out' });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const normalizedX = (e.clientX - centerX) / (rect.width / 2);
      const normalizedY = (e.clientY - centerY) / (rect.height / 2);

      xTo(normalizedX * 16);
      yTo(normalizedY * 16);
      rotYTo(normalizedX * 5);
      rotXTo(-normalizedY * 5);

      if (ringXTo && ringYTo) {
        ringXTo(normalizedX * 10);
        ringYTo(normalizedY * 10);
      }
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
      rotYTo(0);
      rotXTo(0);
      if (ringXTo && ringYTo) {
        ringXTo(0);
        ringYTo(0);
      }
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Numbers counter
  useEffect(() => {
    const duration = 1600;
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        growth: Math.min(100, Math.floor(progress * 100)),
        search: Math.min(85, Math.floor(progress * 85)),
        conversions: Math.min(3, Math.floor(progress * 3.5)),
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

  // Exact 6 floating badges mentioned in DOCX: Google Ads, SEO, AI Search, AEO, Meta Ads, Leads
  const floatingTags = [
    { label: 'Google Ads', color: '#267BFF', top: '-6%', left: '5%' },
    { label: 'SEO', color: '#FF7A18', top: '15%', right: '-4%' },
    { label: 'AI Search', color: '#8B3DFF', bottom: '25%', left: '-6%' },
    { label: 'AEO', color: '#FF167D', top: '55%', right: '-3%' },
    { label: 'Meta Ads', color: '#28D7FF', bottom: '-4%', right: '15%' },
    { label: 'Leads', color: '#FF3154', bottom: '-6%', left: '10%' },
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[92vh] md:min-h-screen pt-28 md:pt-36 pb-16 flex flex-col justify-between overflow-hidden bg-[#050608] noise-bg"
    >
      {/* Cinematic Studio Atmosphere */}
      <div className="hero-glow-blob absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#FF3154]/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="hero-glow-blob absolute top-1/3 -right-32 w-[600px] h-[600px] bg-[#8B3DFF]/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="hero-glow-blob absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-[#28D7FF]/15 to-transparent blur-[120px] pointer-events-none" />

      {/* Kinetic Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div 
          className="hero-bg-marquee absolute top-[28%] left-0 whitespace-nowrap text-[14vw] sm:text-[16vw] font-black uppercase text-white/[0.05] font-mono tracking-tighter leading-none pointer-events-none"
          style={{
            WebkitTextStroke: '1.5px rgba(255, 255, 255, 0.12)',
          }}
        >
          REDCANVASS • GET FOUND • GET CUSTOMERS • GET REMEMBERED •
        </div>

        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, black 20%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, black 20%, transparent 80%)',
          }}
        />

        <div className="absolute right-[15%] top-[35%] -translate-x-1/2 -translate-y-1/2 hidden md:block">
          <div className="hero-orbit-ring absolute -inset-24 rounded-full border border-[#FF3154]/25 pointer-events-none" />
          <div className="hero-orbit-ring absolute -inset-36 rounded-full border border-[#8B3DFF]/25 pointer-events-none" />
          <div className="hero-orbit-ring absolute -inset-48 rounded-full border border-[#28D7FF]/20 pointer-events-none" />
        </div>

        <div className="hero-bg-shape-1 absolute top-[18%] left-[10%] w-24 h-24 rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-[2px] transform rotate-12 hidden lg:block" />
        <div className="hero-bg-shape-2 absolute bottom-[22%] left-[45%] w-32 h-32 rounded-full border border-dashed border-[#FF3154]/30 hidden lg:block" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Hero Content per DOCX */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            
            {/* Supporting headline badge */}
            <div className="hero-eyebrow inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold tracking-wider text-[#FF3154]">
              <Sparkles size={14} className="animate-spin-slow" />
              <span>GET FOUND • GET CUSTOMERS • GET REMEMBERED</span>
            </div>

            {/* Main Display H1 strictly from DOCX */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-[76px] font-black uppercase tracking-tight leading-[1.05] text-white select-none">
                <span className="block overflow-hidden py-1">
                  <span className="hero-word inline-block font-black mr-3.5 text-white">Digital</span>
                  <span className="hero-word inline-block font-black text-white">Marketing</span>
                </span>
                <span className="block overflow-hidden py-1">
                  <span className="hero-word inline-block mr-3.5 text-gradient-brand font-black">That</span>
                  <span className="hero-word inline-block mr-3.5 text-gradient-brand font-black">Means</span>
                  <span className="hero-word inline-block text-gradient-brand font-black">Business.</span>
                </span>
              </h1>
            </div>

            {/* Body Copy from DOCX */}
            <p className="hero-desc text-sm sm:text-base md:text-lg text-[#9A9DA7] leading-relaxed max-w-xl font-normal">
              Redcanvass is a digital marketing and performance marketing agency helping businesses grow through paid advertising, SEO, AI Search, Answer Engine Optimization (AEO), lead generation and conversion-focused creative.
            </p>

            {/* Visual Direction from DOCX: SEARCH → DISCOVER → CLICK → ENQUIRE → GROW */}
            <div className="hero-pipeline hidden sm:flex items-center gap-2 text-[11px] font-mono font-bold tracking-wider text-white/80 py-2 overflow-x-auto no-scrollbar">
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

            {/* CTAs from DOCX: Get a Free Audit, See What We Do → */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="hero-cta-btn">
                <MagneticButton
                  to="/lets-talk"
                  variant="primary"
                  className="!px-7 !py-3.5 !text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(255,49,84,0.5)]"
                >
                  <span>Get a Free Audit</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
              </div>

              <div className="hero-cta-btn">
                <MagneticButton
                  to="/what-we-do"
                  variant="secondary"
                  className="!px-6 !py-3.5 !text-xs uppercase tracking-wider"
                >
                  <span>See What We Do →</span>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* RIGHT: Studio Mockup with DOCX floating elements */}
          <div className="lg:col-span-5 relative flex items-center justify-center [perspective:1200px]">
            
            <div 
              ref={glowRingRef}
              className="absolute w-72 h-72 sm:w-96 sm:h-96 md:w-[460px] md:h-[460px] rounded-full border-2 border-[#FF3154]/40 shadow-[0_0_80px_rgba(255,49,84,0.35)] pointer-events-none"
            />

            {/* Subtle floating elements: Google Ads, SEO, AI Search, AEO, Meta Ads, Leads */}
            {floatingTags.map((tag) => (
              <div
                key={tag.label}
                className="hero-tag absolute hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0D1014]/90 border border-white/15 backdrop-blur-md text-[10.5px] font-mono font-bold uppercase tracking-wider text-white shadow-xl z-30 pointer-events-none"
                style={{
                  top: tag.top,
                  bottom: tag.bottom,
                  left: tag.left,
                  right: tag.right,
                }}
              >
                <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: tag.color }} />
                <span>{tag.label}</span>
              </div>
            ))}

            {/* 3D Mockup Container */}
            <div 
              ref={rightMockupRef}
              className="hero-mockup-wrapper relative w-full max-w-[460px] z-10"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative rounded-2xl bg-[#0D1014] border border-white/20 p-2 sm:p-3 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-1.5 pb-2 px-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF3154]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF7A18]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28D7FF]" />
                </div>
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-black border border-white/10 group">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                    alt="Redcanvass Growth & Performance Dashboard"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#28D7FF] font-bold">
                      REDCANVASS ENGINE
                    </span>
                    <h3 className="text-sm sm:text-base font-black text-white">
                      Search, AEO & Qualified Enquiries
                    </h3>
                  </div>
                </div>
              </div>

              {/* Mobile Device Overlay */}
              <div 
                className="absolute -bottom-6 -right-4 sm:-right-8 w-28 sm:w-36 aspect-[9/18] rounded-2xl sm:rounded-3xl bg-[#050608] border-2 border-white/25 p-1.5 shadow-[0_25px_50px_rgba(0,0,0,0.9)] overflow-hidden z-20"
                style={{ transform: 'translateZ(30px)' }}
              >
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop"
                    alt="Targeted Ads & Creatives"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full bg-black/80" />
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM METRICS & SCROLL DOWN */}
        <div className="hero-stats-row mt-14 md:mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 w-full md:w-auto">
            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-mono">
                Pillars
              </div>
              <div className="text-xs text-[#9A9DA7] uppercase tracking-wider font-semibold mt-0.5">
                Found • Customers • Remembered
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#28D7FF] font-mono">
                SEO & AEO
              </div>
              <div className="text-xs text-[#9A9DA7] uppercase tracking-wider font-semibold mt-0.5">
                Search & AI Ready
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#8B3DFF] font-mono">
                Ads & Leads
              </div>
              <div className="text-xs text-[#9A9DA7] uppercase tracking-wider font-semibold mt-0.5">
                Google • Meta • YouTube
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FF3154] font-mono">
                ROI First
              </div>
              <div className="text-xs text-[#9A9DA7] uppercase tracking-wider font-semibold mt-0.5">
                Strategy Before Spend
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
