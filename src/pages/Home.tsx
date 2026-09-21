import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from '../components/Hero';
import { CleanPartnersBar } from '../components/CleanPartnersBar';
import { CleanServicesGrid } from '../components/CleanServicesGrid';
import { PinnedParallaxSection } from '../components/PinnedParallaxSection';
import { CleanDifferentiation } from '../components/CleanDifferentiation';
import { CleanIndustriesGrid } from '../components/CleanIndustriesGrid';
import { FaqSection, FaqItem } from '../components/FaqSection';
import { MagneticButton } from '../components/MagneticButton';
import { isReducedMotion } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

export const Home: React.FC = () => {
  const homeContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isReducedMotion() || !homeContainerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Entity / Intro Section Reveal
      gsap.fromTo(
        '.entity-card',
        { opacity: 0, y: 35, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.entity-section',
            start: 'top 85%',
          },
        }
      );

      // 2. Philosophy Section Mask & Reveal
      gsap.fromTo(
        '.philosophy-heading',
        { opacity: 0, y: 30, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          ease: 'power4.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.philosophy-section',
            start: 'top 82%',
          },
        }
      );

      // 3. Final CTA Box Reveal
      gsap.fromTo(
        '.cta-box',
        { opacity: 0, scale: 0.94, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: 'power4.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.final-cta-section',
            start: 'top 82%',
          },
        }
      );
    }, homeContainerRef);

    return () => ctx.revert();
  }, []);

  const homeFaqs: FaqItem[] = [
    {
      question: "What does a digital marketing agency actually do?",
      answer: "A digital marketing agency helps businesses attract and convert customers through channels such as search engines, paid advertising, websites, social platforms and other digital channels. The right mix depends on the business, audience, goals and customer journey."
    },
    {
      question: "Should my business invest in SEO or Google Ads?",
      answer: "SEO and Google Ads solve different problems. SEO builds organic visibility over time, while Google Ads can put your business in front of relevant searchers immediately. Many businesses can benefit from using both, depending on their goals and budget."
    },
    {
      question: "Is SEO still important with AI search?",
      answer: "Yes. AI-powered search experiences still rely on information available across the web, and Google's current guidance continues to emphasise strong SEO fundamentals alongside useful, original content for its generative AI search experiences.",
      source: "Google Developers"
    },
    {
      question: "What is AEO and how is it different from SEO?",
      answer: "SEO focuses primarily on helping content perform in search engines. AEO, or Answer Engine Optimization, focuses on making information clear, structured and useful for systems that provide direct answers to user questions. The two overlap significantly, and strong SEO fundamentals remain important."
    },
    {
      question: "Why are my digital ads getting clicks but not enough enquiries?",
      answer: "Clicks are only one part of the customer journey. Poor conversion can come from targeting, the offer, ad messaging, landing page experience, lead form friction, follow-up or the quality of traffic. Effective lead generation looks at the entire journey rather than clicks alone."
    },
    {
      question: "How do I know which digital marketing services my business actually needs?",
      answer: "There is no universal mix. The right approach depends on how customers find you, your sales cycle, geographic reach, customer value, competition and business goals. A business may need SEO, paid advertising, creative, landing pages or a combination."
    }
  ];

  return (
    <div ref={homeContainerRef} className="w-full">
      {/* 1. HERO WITH KINETIC TYPOGRAPHY & 3D HARDWARE MOCKUP */}
      <Hero />

      {/* 2. BRAND TRUST & CLIENT PARTNERS FLOW */}
      <CleanPartnersBar />

      {/* 3. EDITORIAL INTRODUCTION: Meet SRMUCANVAS */}
      <section className="entity-section py-20 md:py-28 relative bg-[#050608]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="entity-card p-8 md:p-14 rounded-3xl bg-[#0D1014] border border-white/10 relative overflow-hidden shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF3154] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
                ABOUT THE AGENCY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Meet SRMUCANVAS — Built for Performance, Driven by Design.
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[#9A9DA7] leading-relaxed max-w-4xl">
              SRMUCANVAS is a specialized digital marketing agency helping businesses become discoverable, attract high-value audiences, and turn digital clicks into meaningful commercial inquiries.
            </p>

            <p className="text-sm sm:text-base text-[#9A9DA7] leading-relaxed max-w-4xl">
              Our methodology seamlessly unifies performance advertising, organic search authority, Generative AI Answer Engine Optimization (AEO), and high-conversion creative design — because attention is only valuable when it moves your business forward.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF3154] hover:text-white transition-colors"
              >
                <span>Read Our Full Story</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THREE CORE PRACTICES (Clean, high-density structured layout) */}
      <CleanServicesGrid />

      {/* 5. ENGINEERED ARCHITECTURE (PINNED PARALLAX 3D SECTION) */}
      <PinnedParallaxSection />

      {/* 6. EDITORIAL PHILOSOPHY */}
      <section className="philosophy-section py-24 md:py-32 relative border-t border-white/10 bg-[#080A0E] overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#FF3154]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center space-y-6 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF3154]">
            OUR CORE PHILOSOPHY
          </span>
          <h2 className="philosophy-heading text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            We're Not Here to Make Your Marketing Look Busy. <br />
            <span className="text-gradient-brand">We're Here to Make It Work.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9A9DA7] max-w-3xl mx-auto leading-relaxed">
            More posts don't automatically mean more business. More clicks don't automatically mean more customers. We look at the bigger picture — where people discover you, what makes them click, what happens when they arrive and what turns attention into revenue.
          </p>
          <div className="font-mono text-xs text-[#28D7FF] font-semibold pt-2">
            ORGANIC VISIBILITY • QUALIFIED TRAFFIC • BUYER ENQUIRIES • REVENUE CONVERSION
          </div>
        </div>
      </section>

      {/* 7. WHY SRMUCANVAS / DIFFERENTIATION */}
      <CleanDifferentiation />

      {/* 8. INDUSTRY SECTORS */}
      <CleanIndustriesGrid />

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 md:py-32 border-t border-white/10 bg-[#050608]">
        <div className="max-w-4xl mx-auto px-6 md:px-10 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF3154]">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#9A9DA7] max-w-md mx-auto">
              Straightforward answers to the most common questions about digital marketing, search visibility, and paid advertising.
            </p>
          </div>

          <FaqSection items={homeFaqs} />
        </div>
      </section>

      {/* 10. FINAL CONVERSION CTA */}
      <section className="final-cta-section py-24 md:py-32 relative border-t border-white/10 bg-[#080A0E] overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#FF3154]/20 via-[#8B3DFF]/20 to-[#28D7FF]/20 rounded-full blur-[160px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10 text-center">
          <div className="cta-box p-10 sm:p-16 md:p-20 rounded-3xl bg-[#0D1014] border border-white/15 shadow-2xl space-y-8 relative overflow-hidden">
            
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold tracking-[0.2em] text-[#FF3154] uppercase">
                <Sparkles size={13} />
                READY TO SCALE YOUR BUSINESS?
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
                Let's Talk About Growing <br />
                <span className="text-gradient-brand">Your Digital Pipeline.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#9A9DA7] max-w-2xl mx-auto leading-relaxed">
                Whether you need to capture high-intent search traffic, scale profitable ad spend, or upgrade your conversion assets, we're ready to help.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <MagneticButton
                to="/lets-talk"
                variant="primary"
                className="!px-8 !py-4 !text-xs uppercase tracking-wider shadow-[0_0_40px_rgba(255,49,84,0.5)]"
              >
                <span>Request a Free Audit</span>
                <ArrowRight size={16} />
              </MagneticButton>

              <MagneticButton
                to="/what-we-do"
                variant="secondary"
                className="!px-8 !py-4 !text-xs uppercase tracking-wider"
              >
                <span>Explore What We Do</span>
                <ArrowRight size={14} className="text-[#FF3154]" />
              </MagneticButton>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-[#9A9DA7]">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#FF3154]" />
                No Long-Term Lock-in
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#28D7FF]" />
                Transparent Reporting
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-[#8B3DFF]" />
                Direct Senior Team Access
              </span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
