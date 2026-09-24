import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  ArrowDown, 
  Layers, 
  HelpCircle,
  BarChart,
  Megaphone,
  Globe,
  Compass,
  FileText
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaqSection, FaqItem } from '../components/FaqSection';
import { MagneticButton } from '../components/MagneticButton';
import { isReducedMotion, createParallax, createBackgroundParallax } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

export const WhatWeDo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const togetherGlowRef = useRef<HTMLDivElement>(null);
  const ctaGlowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Hero Entrance
      gsap.fromTo(
        '.wwd-hero-item',
        { opacity: 0, y: 30, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', stagger: 0.1, duration: 0.8, ease: 'power3.out' }
      );

      // Smooth background parallax (10-20% speed)
      if (glowRef.current && heroRef.current) {
        createBackgroundParallax(glowRef.current, heroRef.current, { speed: 0.18, scale: 1.15, direction: 'up' });
      }
      if (togetherGlowRef.current) {
        createBackgroundParallax(togetherGlowRef.current, '.together-section', { speed: 0.14, scale: 1.2, direction: 'down' });
      }
      if (ctaGlowRef.current) {
        createBackgroundParallax(ctaGlowRef.current, '.wwd-cta-section', { speed: 0.16, scale: 1.25, direction: 'up' });
      }

      // 2. Intro Section
      gsap.fromTo(
        '.wwd-intro-box',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.wwd-intro-section',
            start: 'top 85%',
          },
        }
      );

      // 3. Service Pillars Stagger
      gsap.fromTo(
        '.service-pillar',
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.2,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pillars-section',
            start: 'top 80%',
          },
        }
      );

      // 4. Three together flow
      gsap.fromTo(
        '.together-step',
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.12,
          duration: 0.75,
          ease: 'back.out(1.3)',
          scrollTrigger: {
            trigger: '.together-section',
            start: 'top 80%',
          },
        }
      );

      // 5. Digital Mix Cards
      gsap.fromTo(
        '.mix-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.mix-section',
            start: 'top 80%',
          },
        }
      );

      // 6. Strategy steps
      gsap.fromTo(
        '.strategy-step',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.strategy-section',
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const whatWeDoFaqs: FaqItem[] = [
    {
      question: "Which digital marketing services does my business actually need?",
      answer: "There is no universal combination. The right mix depends on your audience, sales cycle, competition, geographic reach, customer value and growth objectives."
    },
    {
      question: "Should I invest in SEO or paid advertising first?",
      answer: "SEO and paid advertising serve different purposes. Paid search can provide immediate visibility for relevant searches, while SEO focuses on building organic visibility over time. Businesses often use both, depending on their goals and resources."
    },
    {
      question: "Is Google Ads better than Meta Ads for lead generation?",
      answer: "They reach people at different stages of the decision process. Google Ads can capture existing search demand, while Meta advertising can help businesses reach and influence audiences based on targeting and campaign objectives. The appropriate channel depends on the business and customer journey."
    },
    {
      question: "Why am I getting website traffic but not enough enquiries?",
      answer: "Traffic does not automatically create conversions. The issue may involve targeting, messaging, offer clarity, landing-page experience, trust signals, forms or follow-up."
    },
    {
      question: "Does SEO help with AI search visibility?",
      answer: "SEO fundamentals remain important because AI-powered search experiences use information from websites and the wider web. AI search optimisation should therefore complement—not replace—good technical SEO, useful content and a well-understood digital presence."
    },
    {
      question: "What is the difference between SEO, AEO and AI Search?",
      answer: "SEO focuses on visibility in search engines. AEO focuses on structuring and presenting information so it can effectively answer user questions. AI Search refers to search experiences that use AI to interpret queries and generate or organise answers. There is significant overlap between the three."
    },
    {
      question: "How much should a business spend on digital marketing?",
      answer: "There is no meaningful universal percentage or number. Budget should be considered alongside customer value, sales capacity, competition, target market, acquisition economics and the expected role of each channel."
    }
  ];

  return (
    <div ref={containerRef} className="relative w-full bg-[#050608] text-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[75vh] flex items-center justify-center pt-32 pb-20 px-6 lg:px-12 border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div ref={glowRef} className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF3154]/15 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="wwd-hero-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-semibold text-[#FF3154] tracking-widest uppercase">
            Services Overview
          </div>

          <h1 className="wwd-hero-item text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-white">
            Digital Marketing Built Around Growth.
          </h1>

          <div className="wwd-hero-item space-y-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#9A9DA7] leading-relaxed">
            <p>
              Redcanvass brings together search visibility, performance marketing and conversion-focused creative to help businesses get discovered, generate enquiries and turn attention into action.
            </p>
            <p className="text-white/90 font-medium">
              From SEO and AI Search to Google Ads, Meta Ads, lead generation and landing pages, we build the digital mix around what your business actually needs.
            </p>
          </div>

          <div className="wwd-hero-item flex flex-wrap items-center justify-center gap-4 pt-4">
            <MagneticButton
              href="/lets-talk"
              variant="primary"
              size="lg"
              className="shadow-[0_0_25px_rgba(255,49,84,0.4)] hover:scale-105 transition-transform"
            >
              Find Your Growth Opportunity →
            </MagneticButton>

            <Link
              to="/lets-talk?intent=audit"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold text-sm tracking-wider uppercase transition-all hover:scale-105"
            >
              <span>Get a Free Audit</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="wwd-intro-section py-20 px-6 lg:px-12 relative border-b border-white/10 bg-[#090B0E]/60">
        <div className="wwd-intro-box max-w-4xl mx-auto text-center space-y-6">
          <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
            Our Framework
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Three Ways We Help Your Business Move Forward
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#9A9DA7] leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
            <p>Digital marketing isn't one channel.</p>
            <p>Someone might discover you through Google. Someone else might see an ad on Instagram. Another potential customer might ask an AI search tool about businesses like yours.</p>
            <p>The challenge is making sure your business is visible, relevant and ready to convert wherever that discovery happens.</p>
            <p className="text-white font-semibold pt-2">That's why our work is organised around three simple outcomes:</p>
          </div>
        </div>
      </section>

      {/* 3, 4, 5. THE THREE PILLARS (GET FOUND, GET CUSTOMERS, GET REMEMBERED) */}
      <section className="pillars-section py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-6xl mx-auto space-y-20">

          {/* 3. GET FOUND */}
          <div id="get-found" className="service-pillar p-8 sm:p-12 rounded-3xl bg-[#0D1014] border border-white/10 space-y-8 relative overflow-hidden transition-all duration-300 hover:border-[#FF3154]/40 hover:shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Get Found
                </h2>
                <h3 className="text-lg sm:text-xl font-bold text-[#FF3154] mt-1">
                  Search &amp; AI Visibility
                </h3>
              </div>
              <Link
                to="/get-found"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF3154]/15 border border-[#FF3154]/40 text-[#FF3154] hover:bg-[#FF3154] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 self-start md:self-auto hover:scale-105"
              >
                <span>Explore Get Found</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <p className="text-base sm:text-lg text-[#9A9DA7] leading-relaxed">
              Before someone becomes a customer, they need to discover you. We help businesses build visibility across organic search, local search and AI-powered search experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-white/20 transition-all">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#FF3154]">●</span> SEO
                </h4>
                <p className="text-sm text-[#9A9DA7]">
                  Improve your website's organic visibility and make it easier for search engines to understand your business.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-white/20 transition-all">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#FF3154]">●</span> Local SEO
                </h4>
                <p className="text-sm text-[#9A9DA7]">
                  Help customers find your business when they search for products or services in a specific location.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-white/20 transition-all">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#FF3154]">●</span> AEO
                </h4>
                <p className="text-sm text-[#9A9DA7]">
                  Answer Engine Optimization focuses on making your information clear, structured and useful for answer-driven search experiences.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-white/20 transition-all">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#FF3154]">●</span> AI Search
                </h4>
                <p className="text-sm text-[#9A9DA7]">
                  Optimise your digital presence so your business and its expertise are easier for AI-powered search systems to understand.
                </p>
              </div>
            </div>
          </div>

          {/* 4. GET CUSTOMERS */}
          <div id="get-customers" className="service-pillar p-8 sm:p-12 rounded-3xl bg-[#0D1014] border border-white/10 space-y-8 relative overflow-hidden transition-all duration-300 hover:border-[#E5B362]/40 hover:shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Get Customers
                </h2>
                <h3 className="text-lg sm:text-xl font-bold text-[#E5B362] mt-1">
                  Performance Marketing &amp; Lead Generation
                </h3>
              </div>
              <Link
                to="/get-customers"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E5B362]/15 border border-[#E5B362]/40 text-[#E5B362] hover:bg-[#E5B362] hover:text-black font-bold text-xs uppercase tracking-wider transition-all duration-300 self-start md:self-auto hover:scale-105"
              >
                <span>Explore Get Customers</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <p className="text-base sm:text-lg text-[#9A9DA7] leading-relaxed">
              Being seen is only the beginning. We use paid advertising and lead-generation strategies to put your business in front of relevant audiences and move them towards an enquiry, booking, admission, consultation or other meaningful action.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-white/20 transition-all">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#E5B362]">●</span> Google Ads
                </h4>
                <p className="text-sm text-[#9A9DA7]">
                  Reach people actively searching for what your business offers.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-white/20 transition-all">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#E5B362]">●</span> Meta Ads
                </h4>
                <p className="text-sm text-[#9A9DA7]">
                  Reach relevant audiences across Facebook and Instagram with targeted campaigns.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-white/20 transition-all">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#E5B362]">●</span> YouTube Ads
                </h4>
                <p className="text-sm text-[#9A9DA7]">
                  Use video to build awareness, consideration and action.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 sm:col-span-2 lg:col-span-2 hover:border-white/20 transition-all">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#E5B362]">●</span> Lead Generation
                </h4>
                <p className="text-sm text-[#9A9DA7]">
                  Build campaigns designed around generating relevant enquiries rather than simply generating traffic.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-white/20 transition-all">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#E5B362]">●</span> Remarketing
                </h4>
                <p className="text-sm text-[#9A9DA7]">
                  Reconnect with people who have already interacted with your business.
                </p>
              </div>
            </div>
          </div>

          {/* 5. GET REMEMBERED */}
          <div id="get-remembered" className="service-pillar p-8 sm:p-12 rounded-3xl bg-[#0D1014] border border-white/10 space-y-8 relative overflow-hidden transition-all duration-300 hover:border-[#FF3154]/40 hover:shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Get Remembered
                </h2>
                <h3 className="text-lg sm:text-xl font-bold text-[#FF3154] mt-1">
                  Creative &amp; Conversion
                </h3>
              </div>
              <Link
                to="/get-remembered"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF3154]/15 border border-[#FF3154]/40 text-[#FF3154] hover:bg-[#FF3154] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 self-start md:self-auto hover:scale-105"
              >
                <span>Explore Get Remembered</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <p className="text-base sm:text-lg text-[#9A9DA7] leading-relaxed">
              Good marketing needs more than targeting. Your message needs to stop someone, make sense quickly and give them a reason to take the next step. We create the campaign assets and conversion experiences that support that journey.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-white/20 transition-all">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#FF3154]">●</span> Ad Creatives
                </h4>
                <p className="text-sm text-[#9A9DA7]">
                  Visuals designed specifically for digital advertising.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-white/20 transition-all">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#FF3154]">●</span> Landing Pages
                </h4>
                <p className="text-sm text-[#9A9DA7]">
                  Focused pages built around a particular campaign, audience or conversion goal.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-white/20 transition-all">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#FF3154]">●</span> Campaign Design
                </h4>
                <p className="text-sm text-[#9A9DA7]">
                  Creative direction and campaign concepts that bring the message together.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-white/20 transition-all">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="text-[#FF3154]">●</span> Flyers &amp; Posters
                </h4>
                <p className="text-sm text-[#9A9DA7]">
                  Offline marketing collateral when your campaign needs to move beyond the screen.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. HOW THE THREE WORK TOGETHER */}
      <section className="together-section py-24 px-6 lg:px-12 relative bg-[#090B0E]/60 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div ref={togetherGlowRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E5B362]/10 rounded-full blur-[140px]" />
        </div>
        <div className="max-w-5xl mx-auto space-y-12 text-center relative z-10">
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
              Integrated Growth Journey
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Because Visibility Alone Isn't Enough.
            </h2>
            <div className="space-y-2 text-base sm:text-lg text-[#9A9DA7] pt-2">
              <p>A business can rank well and still struggle to generate enquiries.</p>
              <p>It can run ads and still lose potential customers on a weak landing page.</p>
              <p>It can have great creative and still be invisible to the right audience.</p>
            </div>
          </div>

          {/* 3 Step Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-6">
            <div className="together-step p-6 rounded-2xl bg-[#0D1014] border border-white/10 text-center space-y-2 hover:border-[#FF3154]/50 hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#FF3154]/20 text-[#FF3154] font-bold mx-auto flex items-center justify-center">1</div>
              <h3 className="text-xl font-bold text-white">Get Found</h3>
              <p className="text-sm text-[#9A9DA7]">Make your business discoverable.</p>
            </div>

            <div className="together-step p-6 rounded-2xl bg-[#0D1014] border border-white/10 text-center space-y-2 hover:border-[#E5B362]/50 hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#E5B362]/20 text-[#E5B362] font-bold mx-auto flex items-center justify-center">2</div>
              <h3 className="text-xl font-bold text-white">Get Customers</h3>
              <p className="text-sm text-[#9A9DA7]">Bring the right people to you.</p>
            </div>

            <div className="together-step p-6 rounded-2xl bg-[#0D1014] border border-white/10 text-center space-y-2 hover:border-[#FF3154]/50 hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#FF3154]/20 text-[#FF3154] font-bold mx-auto flex items-center justify-center">3</div>
              <h3 className="text-xl font-bold text-white">Get Remembered</h3>
              <p className="text-sm text-[#9A9DA7]">Give them a reason to engage, trust and act.</p>
            </div>
          </div>

          <div className="text-lg font-bold text-white tracking-wide pt-4">
            Different jobs. One growth journey.
          </div>
        </div>
      </section>

      {/* 7. YOUR DIGITAL MIX DEPENDS ON YOUR BUSINESS */}
      <section className="mix-section py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
              Tailored Strategy
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              You Don't Need Every Digital Marketing Service.
            </h2>
            <p className="text-base sm:text-lg text-[#9A9DA7] leading-relaxed">
              The right strategy isn't about doing everything. It's about identifying where your biggest opportunities are and putting your budget, time and creative effort behind them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="mix-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3 hover:border-[#FF3154]/40 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-base font-bold text-white">Need more organic visibility?</h3>
              <div className="text-xs font-mono font-bold text-[#FF3154] bg-[#FF3154]/10 p-2.5 rounded-xl border border-[#FF3154]/20">
                SEO + Local SEO + AEO
              </div>
            </div>

            <div className="mix-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3 hover:border-[#E5B362]/40 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-base font-bold text-white">Need enquiries now?</h3>
              <div className="text-xs font-mono font-bold text-[#E5B362] bg-[#E5B362]/10 p-2.5 rounded-xl border border-[#E5B362]/20">
                Google Ads + Meta Ads + Landing Pages
              </div>
            </div>

            <div className="mix-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3 hover:border-[#FF3154]/40 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-base font-bold text-white">Have traffic but poor conversion?</h3>
              <div className="text-xs font-mono font-bold text-[#FF3154] bg-[#FF3154]/10 p-2.5 rounded-xl border border-[#FF3154]/20">
                Landing Pages + Creative + Conversion optimisation
              </div>
            </div>

            <div className="mix-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3 hover:border-[#E5B362]/40 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-base font-bold text-white">Want stronger visibility in AI-powered search?</h3>
              <div className="text-xs font-mono font-bold text-[#E5B362] bg-[#E5B362]/10 p-2.5 rounded-xl border border-[#E5B362]/20">
                SEO + AEO + AI Search
              </div>
            </div>

            <div className="mix-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3 md:col-span-2 lg:col-span-2 hover:border-[#FF3154]/40 hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-base font-bold text-white">Want to scale lead generation?</h3>
              <div className="text-xs font-mono font-bold text-[#FF3154] bg-[#FF3154]/10 p-2.5 rounded-xl border border-[#FF3154]/20">
                Paid Advertising + Remarketing + Conversion-focused Creative
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HOW WE APPROACH DIGITAL MARKETING */}
      <section className="strategy-section py-24 px-6 lg:px-12 relative bg-[#090B0E]/60 border-b border-white/10">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
              Our Methodology
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Strategy Before Spend.
            </h2>
            <p className="text-base sm:text-lg text-[#9A9DA7]">
              Before recommending a channel, we look at the business behind it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="strategy-step p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3 hover:border-[#FF3154]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="text-xs font-mono text-[#FF3154] font-bold uppercase tracking-wider">Step 01</div>
              <h3 className="text-xl font-bold text-white">Understand</h3>
              <p className="text-sm text-[#9A9DA7] leading-relaxed">
                Your business, audience, offer, market and goals.
              </p>
            </div>

            <div className="strategy-step p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3 hover:border-[#E5B362]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="text-xs font-mono text-[#E5B362] font-bold uppercase tracking-wider">Step 02</div>
              <h3 className="text-xl font-bold text-white">Identify</h3>
              <p className="text-sm text-[#9A9DA7] leading-relaxed">
                Where people are searching, discovering and dropping off.
              </p>
            </div>

            <div className="strategy-step p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3 hover:border-[#FF3154]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="text-xs font-mono text-[#FF3154] font-bold uppercase tracking-wider">Step 03</div>
              <h3 className="text-xl font-bold text-white">Build</h3>
              <p className="text-sm text-[#9A9DA7] leading-relaxed">
                The right combination of search, advertising and creative.
              </p>
            </div>

            <div className="strategy-step p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3 hover:border-[#E5B362]/40 hover:-translate-y-1 transition-all duration-300">
              <div className="text-xs font-mono text-[#E5B362] font-bold uppercase tracking-wider">Step 04</div>
              <h3 className="text-xl font-bold text-white">Optimise</h3>
              <p className="text-sm text-[#9A9DA7] leading-relaxed">
                Test, measure, learn and improve.
              </p>
            </div>
          </div>

          <div className="text-center font-medium text-white/90 text-base pt-2">
            No channel gets a free pass just because it's trending.
          </div>
        </div>
      </section>

      {/* 9. QUESTIONS BUSINESS OWNERS ASK */}
      <section className="py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase mb-2">
              Decision Making
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Questions Businesses Ask Before Investing in Digital Marketing
            </h2>
          </div>

          <FaqSection items={whatWeDoFaqs} />

          <div className="text-center pt-6 border-t border-white/10">
            <div className="text-sm text-[#9A9DA7] mb-2">
              Have a question about your digital strategy?
            </div>
            <Link
              to="/lets-talk"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#FF3154] hover:text-white uppercase tracking-wider transition-colors"
            >
              <span>Let's Talk</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="wwd-cta-section py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#0D1014] to-[#151921] border border-white/15 relative overflow-hidden shadow-2xl">
          <div ref={ctaGlowRef} className="absolute top-0 right-1/4 w-72 h-72 bg-[#FF3154]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Not Sure Where Your Biggest Opportunity Is?
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#9A9DA7] leading-relaxed">
              We'll help you identify where your digital presence can work harder — and which activities are actually worth investing in.
            </p>

            <div className="pt-4">
              <MagneticButton
                href="/lets-talk?intent=audit"
                variant="primary"
                size="lg"
                className="shadow-[0_0_25px_rgba(255,49,84,0.45)] hover:scale-105 transition-transform"
              >
                GET A FREE AUDIT
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
