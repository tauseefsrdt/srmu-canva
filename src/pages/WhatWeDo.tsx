import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
} from 'lucide-react';
import gsap from 'gsap';
import { MagneticButton } from '../components/MagneticButton';
import { FaqSection, FaqItem } from '../components/FaqSection';
import { isReducedMotion } from '../utils/animations';

export const WhatWeDo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        '.wwd-header-content',
        { opacity: 0, y: 35, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, ease: 'power3.out', clearProps: 'all' }
      );

      // Pillars entrance
      gsap.fromTo(
        '.wwd-pillar-card',
        { opacity: 0, y: 45, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.12,
          duration: 0.85,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.wwd-pillars-section',
            start: 'top 85%',
          },
        }
      );

      // Methodology stagger
      gsap.fromTo(
        '.method-step',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.75,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.method-section',
            start: 'top 85%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Section 9 DOCX FAQs
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
      answer: "SEO fundamentals remain important because AI-powered search experiences use information from websites and the wider web. AI search optimisation should therefore complement — not replace — good technical SEO, useful content and a well-understood digital presence."
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
    <div ref={containerRef} className="w-full pt-32 pb-20">
      {/* 1. HERO */}
      <section className="relative py-12 md:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FF3154]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 space-y-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#9A9DA7]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-[#FF3154]">What We Do</span>
          </nav>

          <div className="wwd-header-content space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#FF3154]">
              <Sparkles size={14} />
              SERVICES & STRATEGY
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
              Digital Marketing <br />
              <span className="text-gradient-brand">Built Around Growth.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white font-medium leading-relaxed">
              Redcanvass brings together search visibility, performance marketing and conversion-focused creative to help businesses get discovered, generate enquiries and turn attention into action.
            </p>
            <p className="text-sm md:text-base text-[#9A9DA7] leading-relaxed">
              From SEO and AI Search to Google Ads, Meta Ads, lead generation and landing pages, we build the digital mix around what your business actually needs.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <MagneticButton to="/lets-talk" variant="primary" className="!px-7 !py-3.5 !text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(255,49,84,0.4)]">
              <span>Find Your Growth Opportunity →</span>
            </MagneticButton>
            <MagneticButton to="/lets-talk" variant="secondary" className="!px-6 !py-3.5 !text-xs uppercase tracking-wider">
              <span>Get a Free Audit</span>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="wwd-pillars-section py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              THE THREE OUTCOMES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Three Ways We Help Your Business Move Forward
            </h2>
            <p className="text-base text-[#9A9DA7] leading-relaxed">
              Digital marketing isn't one channel. Someone might discover you through Google. Someone else might see an ad on Instagram. Another potential customer might ask an AI search tool about businesses like yours.
            </p>
            <p className="text-base text-white/90 leading-relaxed font-medium">
              The challenge is making sure your business is visible, relevant and ready to convert wherever that discovery happens. That's why our work is organised around three simple outcomes:
            </p>
          </div>

          {/* 3. GET FOUND, 4. GET CUSTOMERS, 5. GET REMEMBERED */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 3. Get Found */}
            <div className="wwd-pillar-card p-8 sm:p-10 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#FF3154]/40 transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/10 border border-[#FF3154]/30 flex items-center justify-center text-[#FF3154]">
                  <Search size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#FF3154] uppercase tracking-widest">OUTCOME 01</span>
                  <h2 className="text-2xl font-black text-white">Get Found</h2>
                  <h3 className="text-xs font-mono text-[#28D7FF] font-semibold mt-0.5">Search & AI Visibility</h3>
                </div>
                <p className="text-sm text-[#9A9DA7]">
                  Before someone becomes a customer, they need to discover you. We help businesses build visibility across organic search, local search and AI-powered search experiences.
                </p>

                <div className="space-y-2.5 pt-2 border-t border-white/5 text-xs text-[#9A9DA7]">
                  <div><strong className="text-white font-mono">SEO:</strong> Improve your website's organic visibility and make it easier for search engines to understand your business.</div>
                  <div><strong className="text-white font-mono">Local SEO:</strong> Help customers find your business when they search for products or services in a specific location.</div>
                  <div><strong className="text-white font-mono">AEO:</strong> Answer Engine Optimization focuses on making your information clear, structured and useful for answer-driven search experiences.</div>
                  <div><strong className="text-white font-mono">AI Search:</strong> Optimise your digital presence so your business and its expertise are easier for AI-powered search systems to understand.</div>
                </div>
              </div>

              <Link to="/get-found" className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-[#FF3154] transition-colors pt-4 border-t border-white/5">
                <span>Explore Get Found →</span>
              </Link>
            </div>

            {/* 4. Get Customers */}
            <div className="wwd-pillar-card p-8 sm:p-10 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#8B3DFF]/40 transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#8B3DFF]/10 border border-[#8B3DFF]/30 flex items-center justify-center text-[#8B3DFF]">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#8B3DFF] uppercase tracking-widest">OUTCOME 02</span>
                  <h2 className="text-2xl font-black text-white">Get Customers</h2>
                  <h3 className="text-xs font-mono text-[#8B3DFF] font-semibold mt-0.5">Performance Marketing & Lead Gen</h3>
                </div>
                <p className="text-sm text-[#9A9DA7]">
                  Being seen is only the beginning. We use paid advertising and lead-generation strategies to put your business in front of relevant audiences and move them towards an enquiry.
                </p>

                <div className="space-y-2.5 pt-2 border-t border-white/5 text-xs text-[#9A9DA7]">
                  <div><strong className="text-white font-mono">Google Ads:</strong> Reach people actively searching for what your business offers.</div>
                  <div><strong className="text-white font-mono">Meta Ads:</strong> Reach relevant audiences across Facebook and Instagram with targeted campaigns.</div>
                  <div><strong className="text-white font-mono">YouTube Ads:</strong> Use video to build awareness, consideration and action.</div>
                  <div><strong className="text-white font-mono">Lead Generation:</strong> Build campaigns designed around generating relevant enquiries rather than simply generating traffic.</div>
                  <div><strong className="text-white font-mono">Remarketing:</strong> Reconnect with people who have already interacted with your business.</div>
                </div>
              </div>

              <Link to="/get-customers" className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-[#8B3DFF] transition-colors pt-4 border-t border-white/5">
                <span>Explore Get Customers →</span>
              </Link>
            </div>

            {/* 5. Get Remembered */}
            <div className="wwd-pillar-card p-8 sm:p-10 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#28D7FF]/40 transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#28D7FF]/10 border border-[#28D7FF]/30 flex items-center justify-center text-[#28D7FF]">
                  <Sparkles size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#28D7FF] uppercase tracking-widest">OUTCOME 03</span>
                  <h2 className="text-2xl font-black text-white">Get Remembered</h2>
                  <h3 className="text-xs font-mono text-[#FF7A18] font-semibold mt-0.5">Creative & Conversion</h3>
                </div>
                <p className="text-sm text-[#9A9DA7]">
                  Good marketing needs more than targeting. Your message needs to stop someone, make sense quickly and give them a reason to take the next step.
                </p>

                <div className="space-y-2.5 pt-2 border-t border-white/5 text-xs text-[#9A9DA7]">
                  <div><strong className="text-white font-mono">Ad Creatives:</strong> Visuals designed specifically for digital advertising.</div>
                  <div><strong className="text-white font-mono">Landing Pages:</strong> Focused pages built around a particular campaign, audience or conversion goal.</div>
                  <div><strong className="text-white font-mono">Campaign Design:</strong> Creative direction and campaign concepts that bring the message together.</div>
                  <div><strong className="text-white font-mono">Flyers & Posters:</strong> Offline marketing collateral when your campaign needs to move beyond the screen.</div>
                </div>
              </div>

              <Link to="/get-remembered" className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-[#28D7FF] transition-colors pt-4 border-t border-white/5">
                <span>Explore Get Remembered →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW THE THREE WORK TOGETHER */}
      <section className="py-20 bg-[#080A0E] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              GROWTH SYSTEM
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Because Visibility Alone Isn't Enough.
            </h2>
          </div>

          <p className="text-base text-[#9A9DA7] max-w-3xl mx-auto leading-relaxed">
            A business can rank well and still struggle to generate enquiries. It can run ads and still lose potential customers on a weak landing page. It can have great creative and still be invisible to the right audience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#FF3154] font-bold">01 — GET FOUND</span>
              <h3 className="text-lg font-bold text-white">Make your business discoverable.</h3>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#8B3DFF] font-bold">02 — GET CUSTOMERS</span>
              <h3 className="text-lg font-bold text-white">Bring the right people to you.</h3>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#28D7FF] font-bold">03 — GET REMEMBERED</span>
              <h3 className="text-lg font-bold text-white">Give them a reason to engage, trust and act.</h3>
            </div>
          </div>

          <div className="font-mono text-sm text-white font-bold tracking-wider pt-2">
            Different jobs. One growth journey.
          </div>
        </div>
      </section>

      {/* 7. YOUR DIGITAL MIX DEPENDS ON YOUR BUSINESS */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              TAILORED STRATEGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              You Don't Need Every Digital Marketing Service.
            </h2>
            <p className="text-base text-[#9A9DA7]">
              The right strategy isn't about doing everything. It's about identifying where your biggest opportunities are and putting your budget, time and creative effort behind them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3">
              <h3 className="text-base font-bold text-white">Need more organic visibility?</h3>
              <div className="text-xs font-mono text-[#28D7FF] bg-white/5 p-2.5 rounded-xl border border-white/10">
                SEO + Local SEO + AEO
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3">
              <h3 className="text-base font-bold text-white">Need enquiries now?</h3>
              <div className="text-xs font-mono text-[#FF3154] bg-white/5 p-2.5 rounded-xl border border-white/10">
                Google Ads + Meta Ads + Landing Pages
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3">
              <h3 className="text-base font-bold text-white">Have traffic but poor conversion?</h3>
              <div className="text-xs font-mono text-[#8B3DFF] bg-white/5 p-2.5 rounded-xl border border-white/10">
                Landing Pages + Creative + Conversion CRO
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3">
              <h3 className="text-base font-bold text-white">Want stronger visibility in AI-powered search?</h3>
              <div className="text-xs font-mono text-[#28D7FF] bg-white/5 p-2.5 rounded-xl border border-white/10">
                SEO + AEO + AI Search
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3 sm:col-span-2 lg:col-span-2">
              <h3 className="text-base font-bold text-white">Want to scale lead generation?</h3>
              <div className="text-xs font-mono text-[#FF3154] bg-white/5 p-2.5 rounded-xl border border-white/10">
                Paid Advertising + Remarketing + Conversion-focused Creative
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HOW WE APPROACH DIGITAL MARKETING: Strategy Before Spend */}
      <section className="method-section py-20 bg-[#080A0E] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              OUR METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Strategy Before Spend.
            </h2>
            <p className="text-base text-[#9A9DA7]">
              Before recommending a channel, we look at the business behind it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="method-step p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#FF3154] font-bold">STEP 01</span>
              <h3 className="text-lg font-black text-white">Understand</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">
                Your business, audience, offer, market and goals.
              </p>
            </div>

            <div className="method-step p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#8B3DFF] font-bold">STEP 02</span>
              <h3 className="text-lg font-black text-white">Identify</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">
                Where people are searching, discovering and dropping off.
              </p>
            </div>

            <div className="method-step p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#28D7FF] font-bold">STEP 03</span>
              <h3 className="text-lg font-black text-white">Build</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">
                The right combination of search, advertising and creative.
              </p>
            </div>

            <div className="method-step p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#FF7A18] font-bold">STEP 04</span>
              <h3 className="text-lg font-black text-white">Optimise</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">
                Test, measure, learn and improve continuously.
              </p>
            </div>
          </div>

          <p className="text-xs font-mono text-[#9A9DA7] italic text-center pt-2">
            No channel gets a free pass just because it's trending.
          </p>
        </div>
      </section>

      {/* 9. QUESTIONS BUSINESS OWNERS ASK */}
      <FaqSection 
        title="Questions Businesses Ask Before Investing in Digital Marketing"
        faqs={whatWeDoFaqs}
        ctaText="Have a question about your digital strategy? Let's Talk →"
        ctaLink="/lets-talk"
      />

      {/* 10. FINAL CTA */}
      <section className="py-20 md:py-28 text-center border-t border-white/10 bg-gradient-to-b from-[#050608] to-[#0A0D12]">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Not Sure Where Your Biggest Opportunity Is?
          </h2>
          <p className="text-base sm:text-lg text-[#9A9DA7] max-w-2xl mx-auto leading-relaxed">
            We'll help you identify where your digital presence can work harder — and which activities are actually worth investing in.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <MagneticButton to="/lets-talk" variant="primary" className="!px-8 !py-4 !text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(255,49,84,0.5)]">
              <span>GET A FREE AUDIT</span>
              <ArrowRight size={16} />
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};
