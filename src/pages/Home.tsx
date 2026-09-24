import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  Users, 
  Target,
  GraduationCap,
  Stethoscope,
  Building2,
  Briefcase,
  Hotel,
  Factory,
  CheckCircle2,
  ShieldCheck,
  UserCheck,
  BarChart3
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaqSection, FaqItem } from '../components/FaqSection';
import { MagneticButton } from '../components/MagneticButton';
import { isReducedMotion, createParallax, createBackgroundParallax } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

export const Home: React.FC = () => {
  const homeContainerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLDivElement>(null);
  const philosophyGlowRef = useRef<HTMLDivElement>(null);
  const ctaGlowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isReducedMotion() || !homeContainerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Hero Entrance Timeline
      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      heroTl
        .fromTo('.hero-tag', { opacity: 0, y: -20, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.7 })
        .fromTo('.hero-title', { opacity: 0, y: 40, filter: 'blur(10px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9 }, '-=0.4')
        .fromTo('.hero-copy', { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
        .fromTo('.hero-cta', { opacity: 0, y: 20, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.6 }, '-=0.3')
        .fromTo('.hero-flow-item', { opacity: 0, scale: 0.85, y: 15 }, { opacity: 1, scale: 1, y: 0, stagger: 0.05, duration: 0.5 }, '-=0.2')
        .fromTo('.hero-pill', { opacity: 0, y: 10 }, { opacity: 1, y: 0, stagger: 0.05, duration: 0.4 }, '-=0.2');

      // 2. Smooth Scrubbed Background Parallax on Hero & Sections (10-20% speed)
      if (glow1Ref.current && heroRef.current) {
        createBackgroundParallax(glow1Ref.current, heroRef.current, { speed: 0.18, scale: 1.15, direction: 'up' });
      }
      if (glow2Ref.current && heroRef.current) {
        createBackgroundParallax(glow2Ref.current, heroRef.current, { speed: 0.14, scale: 1.15, direction: 'down' });
      }
      if (philosophyGlowRef.current) {
        createBackgroundParallax(philosophyGlowRef.current, '.philosophy-section', { speed: 0.15, scale: 1.2, direction: 'up' });
      }
      if (ctaGlowRef.current) {
        createBackgroundParallax(ctaGlowRef.current, '.final-cta-section', { speed: 0.16, scale: 1.25, direction: 'down' });
      }

      // 3. Entity / Intro Section Reveal
      gsap.fromTo(
        '.entity-card',
        { opacity: 0, y: 45, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.entity-section',
            start: 'top 85%',
          },
        }
      );

      // 4. Pillars Stagger Reveal
      gsap.fromTo(
        '.pillar-card',
        { opacity: 0, y: 50, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '#three-core-areas',
            start: 'top 80%',
          },
        }
      );

      // 5. Philosophy Section Reveal
      gsap.fromTo(
        '.philosophy-box',
        { opacity: 0, y: 40, filter: 'blur(8px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.philosophy-section',
            start: 'top 80%',
          },
        }
      );

      // 6. Different by Design Cards Stagger
      gsap.fromTo(
        '.diff-card',
        { opacity: 0, y: 35, rotateY: 5 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.diff-section',
            start: 'top 80%',
          },
        }
      );

      // 7. Industry Badges Stagger
      gsap.fromTo(
        '.industry-badge',
        { opacity: 0, y: 25, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: '.industries-section',
            start: 'top 80%',
          },
        }
      );

      // 8. Proof Cards Reveal
      gsap.fromTo(
        '.proof-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.proof-section',
            start: 'top 80%',
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
      answer: "Yes. AI-powered search experiences still rely on information available across the web, and Google's current guidance continues to emphasise strong SEO fundamentals alongside useful, original content for its generative AI search experiences. (Google Developers)"
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
    <div ref={homeContainerRef} className="relative w-full bg-[#050608] text-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-6 lg:px-12 border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div ref={glow1Ref} className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF3154]/15 rounded-full blur-[120px]" />
          <div ref={glow2Ref} className="absolute bottom-10 right-1/4 w-[400px] h-[250px] bg-[#E5B362]/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          {/* Supporting Tag / Headline */}
          <div className="hero-tag inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-semibold text-[#FF3154] tracking-widest uppercase">
            <Sparkles size={14} />
            <span>Get Found. Get Customers. Get Remembered.</span>
          </div>

          {/* H1 */}
          <h1 className="hero-title text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-white">
            Digital Marketing That <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#9A9DA7]">
              Means Business.
            </span>
          </h1>

          {/* Body copy */}
          <p className="hero-copy max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#9A9DA7] leading-relaxed font-normal">
            Redcanvass is a digital marketing and performance marketing agency helping businesses grow through paid advertising, SEO, AI Search, Answer Engine Optimization (AEO), lead generation and conversion-focused creative.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <div className="hero-cta">
              <MagneticButton
                href="/lets-talk?intent=audit"
                variant="primary"
                size="lg"
                className="shadow-[0_0_25px_rgba(255,49,84,0.45)] hover:scale-105 transition-transform"
              >
                Get a Free Audit
              </MagneticButton>
            </div>

            <div className="hero-cta">
              <Link
                to="/what-we-do"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:border-white/30 hover:scale-105"
              >
                <span>See What We Do</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Visual direction journey flow */}
          <div className="pt-10">
            <div className="text-xs uppercase tracking-widest text-[#9A9DA7] mb-4 font-mono font-medium">
              We help businesses get discovered and generate business.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto bg-[#0D1014]/90 p-3 sm:p-4 rounded-2xl border border-white/10 backdrop-blur-xl shadow-xl">
              {['SEARCH', '→', 'DISCOVER', '→', 'CLICK', '→', 'ENQUIRE', '→', 'GROW'].map((step, idx) => (
                <span
                  key={idx}
                  className={`hero-flow-item font-black text-xs sm:text-sm tracking-wider ${
                    step === '→' 
                      ? 'text-[#FF3154] font-bold px-1' 
                      : 'text-white bg-white/5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/5'
                  }`}
                >
                  {step}
                </span>
              ))}
            </div>

            {/* Subtle floating pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4">
              {['Google Ads', 'SEO', 'AI Search', 'AEO', 'Meta Ads', 'Leads'].map((tag) => (
                <span
                  key={tag}
                  className="hero-pill text-[11px] sm:text-xs font-mono font-medium text-[#9A9DA7] bg-white/[0.03] border border-white/10 px-3 py-1 rounded-full hover:border-[#FF3154]/50 hover:text-white transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. ENTITY / INTRODUCTION */}
      <section className="entity-section py-20 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="entity-card p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0D1014] to-[#050608] border border-white/10 shadow-2xl relative overflow-hidden transition-all duration-300 hover:border-white/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF3154]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase mb-3">
              About Redcanvass
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-6">
              Meet Redcanvass
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-[#9A9DA7] leading-relaxed">
              <p>
                Redcanvass is a digital marketing agency focused on helping businesses become more visible, attract the right audiences and turn digital attention into meaningful enquiries.
              </p>
              <p>
                Our work brings together performance marketing, search visibility, AI search optimisation and creative — because getting noticed is only useful when it helps move the business forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE THREE CORE AREAS */}
      <section id="three-core-areas" className="py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase mb-2">
              Our Core Architecture
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
              How We Help Businesses Grow
            </h2>
            <p className="text-base sm:text-lg text-[#9A9DA7] leading-relaxed">
              Digital marketing works best when visibility, acquisition and conversion work together. We organise what we do around three simple outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Get Found */}
            <div className="pillar-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#FF3154]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/15 text-[#FF3154] flex items-center justify-center transition-transform group-hover:scale-110">
                  <Search size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-[#FF3154] transition-colors">
                    Get Found
                  </h3>
                  <div className="text-xs font-mono text-[#FF3154] font-semibold mt-1">
                    SEO · Local SEO · AI Search · AEO
                  </div>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Help potential customers discover your business across traditional search and emerging AI-powered search experiences.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6">
                <Link
                  to="/get-found"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-[#FF3154] transition-colors"
                >
                  <span>Explore Get Found</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 2: Get Customers */}
            <div className="pillar-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#E5B362]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E5B362]/15 text-[#E5B362] flex items-center justify-center transition-transform group-hover:scale-110">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-[#E5B362] transition-colors">
                    Get Customers
                  </h3>
                  <div className="text-xs font-mono text-[#E5B362] font-semibold mt-1">
                    Google Ads · Meta Ads · YouTube · Lead Generation · Remarketing
                  </div>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Put your business in front of relevant audiences and turn digital attention into enquiries and opportunities.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6">
                <Link
                  to="/get-customers"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-[#E5B362] transition-colors"
                >
                  <span>Explore Get Customers</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 3: Get Remembered */}
            <div className="pillar-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#FF3154]/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/15 text-[#FF3154] flex items-center justify-center transition-transform group-hover:scale-110">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-[#FF3154] transition-colors">
                    Get Remembered
                  </h3>
                  <div className="text-xs font-mono text-[#FF3154] font-semibold mt-1">
                    Ad Creatives · Landing Pages · Campaign Design · Flyers & Posters
                  </div>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Give your campaigns the creative and conversion assets they need to communicate clearly and make an impact.
                </p>
              </div>
              <div className="pt-6 border-t border-white/5 mt-6">
                <Link
                  to="/get-remembered"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-[#FF3154] transition-colors"
                >
                  <span>Explore Get Remembered</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE REDCANVASS PHILOSOPHY */}
      <section className="philosophy-section py-24 px-6 lg:px-12 relative bg-[#090B0E]/60 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div ref={philosophyGlowRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF3154]/10 rounded-full blur-[140px]" />
        </div>
        <div className="philosophy-box max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
            The Redcanvass Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            We’re Not Here to Make Your Marketing Look Busy.
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FF3154] tracking-tight">
            We’re Here to Make It Work.
          </h3>
          <div className="space-y-4 text-base sm:text-lg text-[#9A9DA7] leading-relaxed pt-2 max-w-3xl mx-auto">
            <p>
              More posts don't automatically mean more business. More clicks don't automatically mean more customers.
            </p>
            <p>
              We look at the bigger picture — where people discover you, what makes them click, what happens when they arrive and what turns attention into action.
            </p>
            <p className="font-semibold text-white/90">
              Our approach is built around the things that can actually move a business forward: visibility, qualified traffic, enquiries and conversion.
            </p>
          </div>
        </div>
      </section>

      {/* 5. WHAT MAKES REDCANVASS DIFFERENT */}
      <section className="diff-section py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase mb-2">
              Our Principles
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Different by Design.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="diff-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-4 hover:border-[#FF3154]/50 hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#FF3154]/15 text-[#FF3154] flex items-center justify-center">
                <BarChart3 size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Performance First</h3>
              <p className="text-sm text-[#9A9DA7] leading-relaxed">
                We focus on marketing activity that can be measured, tested and improved.
              </p>
            </div>

            <div className="diff-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-4 hover:border-[#E5B362]/50 hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#E5B362]/15 text-[#E5B362] flex items-center justify-center">
                <Search size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Search Ready</h3>
              <p className="text-sm text-[#9A9DA7] leading-relaxed">
                We build visibility across traditional search, local search and the evolving world of AI-powered search.
              </p>
            </div>

            <div className="diff-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-4 hover:border-[#FF3154]/50 hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-[#FF3154]/15 text-[#FF3154] flex items-center justify-center">
                <UserCheck size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Human Led</h3>
              <p className="text-sm text-[#9A9DA7] leading-relaxed">
                Strategy, creative and optimisation are handled by people who understand the business behind the campaign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHO WE HELP */}
      <section className="industries-section py-24 px-6 lg:px-12 relative bg-[#090B0E]/60 border-b border-white/10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
            Audience Focus
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Built for Businesses That Need to Be Found.
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#9A9DA7] leading-relaxed">
            We work particularly well with businesses where digital visibility can lead to a real conversation, enquiry, appointment, admission or opportunity.
          </p>

          {/* Industry visual badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4">
            {[
              { label: 'Education', icon: GraduationCap },
              { label: 'Healthcare', icon: Stethoscope },
              { label: 'Real Estate', icon: Building2 },
              { label: 'Professional Services', icon: Briefcase },
              { label: 'Hospitality', icon: Hotel },
              { label: 'B2B', icon: Factory },
            ].map((ind) => {
              const Icon = ind.icon;
              return (
                <div 
                  key={ind.label}
                  className="industry-badge p-4 rounded-2xl bg-[#0D1014] border border-white/10 flex flex-col items-center justify-center gap-2 hover:border-[#FF3154]/50 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <Icon size={20} className="text-[#FF3154]" />
                  <span className="text-xs font-bold text-white text-center">{ind.label}</span>
                </div>
              );
            })}
          </div>

          <div className="pt-4">
            <Link
              to="/who-we-help"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold text-sm tracking-wider uppercase transition-all hover:scale-105"
            >
              <span>See Who We Help</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. PROOF */}
      <section className="proof-section py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase mb-2">
              Measurable Outcomes
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Work That Has a Purpose.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="proof-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-4 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
              <div className="text-xs font-mono font-bold text-[#FF3154] uppercase tracking-wider">
                Case Study 01
              </div>
              <div className="space-y-2">
                <div className="text-xs text-white/60 font-semibold uppercase">The Challenge</div>
                <p className="text-sm text-[#9A9DA7]">High ad spend with declining enquiry quality and rising cost per acquisition.</p>
              </div>
              <div className="space-y-2">
                <div className="text-xs text-white/60 font-semibold uppercase">What We Changed</div>
                <p className="text-sm text-[#9A9DA7]">Redesigned dedicated intent-matched landing pages and restructured target search campaigns.</p>
              </div>
              <div className="space-y-2">
                <div className="text-xs text-[#E5B362] font-semibold uppercase">What Happened</div>
                <p className="text-sm text-white font-medium">Qualified enquiry rate increased by 2.4x while lowering overall cost per lead.</p>
              </div>
            </div>

            <div className="proof-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-4 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
              <div className="text-xs font-mono font-bold text-[#E5B362] uppercase tracking-wider">
                Case Study 02
              </div>
              <div className="space-y-2">
                <div className="text-xs text-white/60 font-semibold uppercase">The Challenge</div>
                <p className="text-sm text-[#9A9DA7]">No organic or local search presence for high-intent queries in primary territory.</p>
              </div>
              <div className="space-y-2">
                <div className="text-xs text-white/60 font-semibold uppercase">What We Changed</div>
                <p className="text-sm text-[#9A9DA7]">Implemented structured Local SEO, Google Business Profile optimisation and AEO architecture.</p>
              </div>
              <div className="space-y-2">
                <div className="text-xs text-[#E5B362] font-semibold uppercase">What Happened</div>
                <p className="text-sm text-white font-medium">Ranked #1–#3 locally for primary keywords with 180% growth in direct inbound calls.</p>
              </div>
            </div>

            <div className="proof-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-4 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
              <div className="text-xs font-mono font-bold text-[#FF3154] uppercase tracking-wider">
                Case Study 03
              </div>
              <div className="space-y-2">
                <div className="text-xs text-white/60 font-semibold uppercase">The Challenge</div>
                <p className="text-sm text-[#9A9DA7]">Ad creatives fatigued quickly with high click costs and low engagement on social platforms.</p>
              </div>
              <div className="space-y-2">
                <div className="text-xs text-white/60 font-semibold uppercase">What We Changed</div>
                <p className="text-sm text-[#9A9DA7]">Created a dynamic creative testing matrix with tailored messaging for core segments.</p>
              </div>
              <div className="space-y-2">
                <div className="text-xs text-[#E5B362] font-semibold uppercase">What Happened</div>
                <p className="text-sm text-white font-medium">Click-through rate doubled and generated consistent lead volume across Meta and YouTube.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HOME FAQ / QUESTIONS BUSINESS OWNERS ASK */}
      <section className="py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase mb-2">
              Common Inquiries
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Questions Businesses Ask About Digital Marketing
            </h2>
          </div>

          <FaqSection items={homeFaqs} />

          {/* Sub-FAQ CTA */}
          <div className="text-center pt-8 border-t border-white/10 space-y-3">
            <div className="text-base font-semibold text-white">
              Not sure what your business needs?
            </div>
            <Link
              to="/lets-talk?intent=audit"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#FF3154] hover:text-white uppercase tracking-wider transition-colors"
            >
              <span>Get a Free Audit</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="final-cta-section py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#0D1014] to-[#151921] border border-white/15 relative overflow-hidden shadow-2xl">
          <div ref={ctaGlowRef} className="absolute top-0 right-1/4 w-72 h-72 bg-[#FF3154]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Ready to Make Your Digital Marketing Work Harder?
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#9A9DA7] leading-relaxed">
              Let's look at what's working, what's missing and where your biggest digital growth opportunities may be.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <MagneticButton
                href="/lets-talk?intent=audit"
                variant="primary"
                size="lg"
                className="shadow-[0_0_25px_rgba(255,49,84,0.45)] hover:scale-105 transition-transform"
              >
                GET A FREE AUDIT
              </MagneticButton>

              <Link
                to="/lets-talk"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold text-sm tracking-wider uppercase transition-all hover:scale-105"
              >
                <span>LET'S TALK</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
