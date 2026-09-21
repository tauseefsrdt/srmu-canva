import React, { useRef, useLayoutEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Globe, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isReducedMotion } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

export const PinnedParallaxSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Oversized background marquee moving continuously with scroll
      gsap.to(bgTextRef.current, {
        xPercent: -35,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // 2. Pinned multi-layer 3D stacking timeline (desktop & tablet)
      if (window.innerWidth >= 768) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=2400',
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        // Layer 1 transition
        tl.to(card1Ref.current, {
          scale: 0.9,
          opacity: 0.4,
          y: -40,
          filter: 'blur(6px)',
          ease: 'power2.inOut',
        })
        // Layer 2 rises in
        .fromTo(
          card2Ref.current,
          { yPercent: 120, opacity: 0, scale: 0.95 },
          { yPercent: 0, opacity: 1, scale: 1, ease: 'power2.out' },
          '-=0.2'
        )
        // Layer 2 recedes
        .to(card2Ref.current, {
          scale: 0.9,
          opacity: 0.4,
          y: -40,
          filter: 'blur(6px)',
          ease: 'power2.inOut',
        })
        // Layer 3 rises in
        .fromTo(
          card3Ref.current,
          { yPercent: 120, opacity: 0, scale: 0.95 },
          { yPercent: 0, opacity: 1, scale: 1, ease: 'power2.out' },
          '-=0.2'
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen py-24 md:py-0 overflow-hidden bg-[#050608] border-t border-white/10 flex flex-col justify-center"
    >
      {/* Dynamic Ambient Backdrops */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-[#FF3154]/15 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/3 -right-32 w-[600px] h-[600px] bg-[#8B3DFF]/15 rounded-full blur-[160px]" />
      </div>

      {/* Kinetic Oversized Editorial Typography Background */}
      <div 
        ref={bgTextRef}
        className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap text-[13vw] sm:text-[15vw] font-black uppercase text-white/[0.08] select-none pointer-events-none font-mono tracking-tighter leading-none"
        style={{
          WebkitTextStroke: '1px rgba(255, 255, 255, 0.15)',
        }}
      >
        SRMUCANVAS • VISIBILITY • PERFORMANCE • CREATIVE • CONVERSION •
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10 py-12 md:py-16">
        
        {/* Section Top Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#FF3154]">
            <Sparkles size={14} />
            ENGINEERED ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            How We Execute <span className="text-gradient-brand">High-Growth</span> Systems
          </h2>
          <p className="text-sm md:text-base text-[#9A9DA7]">
            Every campaign is orchestrated through stacked layers of search intelligence, audience targeting, and high-converting creative design.
          </p>
        </div>

        {/* 3D Stacked Cinematic Cards (Pinned On Desktop) */}
        <div className="relative max-w-4xl mx-auto min-h-[380px] md:min-h-[440px] flex items-center justify-center">
          
          {/* Card 1 */}
          <div
            ref={card1Ref}
            className="w-full rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#0D1014] to-[#151920] border border-white/15 shadow-2xl space-y-6 md:absolute md:inset-0 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/15 border border-[#FF3154]/40 flex items-center justify-center text-[#FF3154]">
                  <Globe size={24} />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-[#FF3154] tracking-widest uppercase">STAGE 01</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">Full-Funnel Organic & AI Visibility</h3>
                </div>
              </div>
              <span className="text-3xl sm:text-4xl font-mono font-black text-white/10">01</span>
            </div>

            <p className="text-sm sm:text-base text-[#9A9DA7] leading-relaxed">
              We engineer your domain with advanced technical SEO, Google Business Local Map Pack authority, and Answer Engine Optimization (AEO) to capture buyers searching directly across Google and modern generative AI models.
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#FF3154] font-bold">SEO • LOCAL PACK • AEO ENGINE</span>
              <Link to="/get-found" className="text-xs uppercase font-bold text-white hover:text-[#FF3154] flex items-center gap-1.5 transition-colors">
                <span>Learn More</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={card2Ref}
            className="w-full rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#0D1014] to-[#151920] border border-[#8B3DFF]/30 shadow-2xl space-y-6 mt-6 md:mt-0 md:absolute md:inset-0 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#8B3DFF]/15 border border-[#8B3DFF]/40 flex items-center justify-center text-[#8B3DFF]">
                  <Zap size={24} />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-[#8B3DFF] tracking-widest uppercase">STAGE 02</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">High-Intent Paid Acquisition</h3>
                </div>
              </div>
              <span className="text-3xl sm:text-4xl font-mono font-black text-white/10">02</span>
            </div>

            <p className="text-sm sm:text-base text-[#9A9DA7] leading-relaxed">
              Target active commercial demand with Google Search Ads, retarget high-intent segments on Meta & YouTube, and deploy algorithmic bidding frameworks that prioritize qualified business enquiries over empty clicks.
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#8B3DFF] font-bold">GOOGLE ADS • META ADS • LEAD GEN</span>
              <Link to="/get-customers" className="text-xs uppercase font-bold text-white hover:text-[#8B3DFF] flex items-center gap-1.5 transition-colors">
                <span>Learn More</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div
            ref={card3Ref}
            className="w-full rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#0D1014] to-[#151920] border border-[#28D7FF]/30 shadow-2xl space-y-6 mt-6 md:mt-0 md:absolute md:inset-0 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#28D7FF]/15 border border-[#28D7FF]/40 flex items-center justify-center text-[#28D7FF]">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-[#28D7FF] tracking-widest uppercase">STAGE 03</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">Conversion & Brand Positioning</h3>
                </div>
              </div>
              <span className="text-3xl sm:text-4xl font-mono font-black text-white/10">03</span>
            </div>

            <p className="text-sm sm:text-base text-[#9A9DA7] leading-relaxed">
              We build lightning-fast custom landing pages, high-CTR advertising assets, and premium brand collateral that build instant authority and maximize conversion rates from incoming traffic.
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#28D7FF] font-bold">CREATIVE DESIGN • CRO • LANDING PAGES</span>
              <Link to="/get-remembered" className="text-xs uppercase font-bold text-white hover:text-[#28D7FF] flex items-center gap-1.5 transition-colors">
                <span>Learn More</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
