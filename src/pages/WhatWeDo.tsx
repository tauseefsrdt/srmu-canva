import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  ChevronRight, 
  Layers, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  HelpCircle,
  BarChart2,
  Compass
} from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';
import { FaqSection, FaqItem } from '../components/FaqSection';

export const WhatWeDo: React.FC = () => {
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
    <div className="w-full pt-32 pb-20">
      {/* 1. HERO */}
      <section className="relative py-12 md:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FF3154]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 space-y-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#9A9DA7]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-[#FF3154]">What We Do</span>
          </nav>

          <div className="space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#FF3154]">
              <Sparkles size={14} />
              SERVICES & STRATEGY
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
              Digital Marketing <br />
              <span className="text-gradient-brand">Built Around Growth.</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#9A9DA7] leading-relaxed">
              SRMUCANVAS brings together search visibility, performance marketing and conversion-focused creative to help businesses get discovered, generate enquiries and turn attention into action.
            </p>
            <p className="text-sm text-[#9A9DA7]">
              From SEO and AI Search to Google Ads, Meta Ads, lead generation and landing pages, we build the digital mix around what your business actually needs.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <MagneticButton to="/lets-talk" variant="primary" className="!px-7 !py-3.5 !text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(255,49,84,0.4)]">
              <span>Find Your Growth Opportunity</span>
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton to="/lets-talk" variant="secondary" className="!px-6 !py-3.5 !text-xs uppercase tracking-wider">
              <span>Get a Free Audit</span>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              THE THREE OUTCOMES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Three Ways We Help Your Business Move Forward
            </h2>
            <p className="text-base text-[#9A9DA7] leading-relaxed">
              Digital marketing isn't one channel. Someone might discover you through Google. Someone else might see an ad on Instagram. Another potential customer might ask an AI search tool about businesses like yours. The challenge is making sure your business is visible, relevant and ready to convert wherever that discovery happens.
            </p>
          </div>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: GET FOUND */}
            <div className="p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/10 text-[#FF3154] flex items-center justify-center">
                  <Search size={24} />
                </div>
                <h3 className="text-2xl font-black text-white">Get Found</h3>
                <div className="text-xs font-mono text-[#28D7FF]">Search & AI Visibility</div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Before someone becomes a customer, they need to discover you. We help businesses build visibility across organic search, local search and AI-powered search experiences.
                </p>
                <div className="space-y-2 pt-2 text-xs text-white/90 font-medium">
                  <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3154]" /> SEO</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3154]" /> Local SEO</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3154]" /> AEO (Answer Engine)</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3154]" /> AI Search Optimization</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link to="/get-found" className="text-xs font-mono font-bold uppercase text-[#FF3154] hover:text-white flex items-center gap-2">
                  <span>Explore Get Found</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Pillar 2: GET CUSTOMERS */}
            <div className="p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#8B3DFF]/10 text-[#8B3DFF] flex items-center justify-center">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-2xl font-black text-white">Get Customers</h3>
                <div className="text-xs font-mono text-[#8B3DFF]">Performance & Leads</div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Being seen is only the beginning. We use paid advertising and lead-generation strategies to put your business in front of relevant audiences and move them towards an enquiry or booking.
                </p>
                <div className="space-y-2 pt-2 text-xs text-white/90 font-medium">
                  <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#8B3DFF]" /> Google Ads</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#8B3DFF]" /> Meta Ads (FB & IG)</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#8B3DFF]" /> YouTube Video Ads</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#8B3DFF]" /> Lead Generation & Remarketing</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link to="/get-customers" className="text-xs font-mono font-bold uppercase text-[#8B3DFF] hover:text-white flex items-center gap-2">
                  <span>Explore Get Customers</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Pillar 3: GET REMEMBERED */}
            <div className="p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#28D7FF]/10 text-[#28D7FF] flex items-center justify-center">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-2xl font-black text-white">Get Remembered</h3>
                <div className="text-xs font-mono text-[#FF7A18]">Creative & Conversion</div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Good marketing needs more than targeting. Your message needs to stop someone, make sense quickly and give them a reason to take the next step.
                </p>
                <div className="space-y-2 pt-2 text-xs text-white/90 font-medium">
                  <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#28D7FF]" /> High-Converting Ad Creatives</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#28D7FF]" /> Dedicated Landing Pages</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#28D7FF]" /> Full Campaign Concepts</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#28D7FF]" /> Offline Flyers & Collateral</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link to="/get-remembered" className="text-xs font-mono font-bold uppercase text-[#28D7FF] hover:text-white flex items-center gap-2">
                  <span>Explore Get Remembered</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW THE THREE WORK TOGETHER */}
      <section className="py-20 border-t border-white/10 bg-[#080A0E]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 text-center space-y-8">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
            INTEGRATED JOURNEY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Because Visibility Alone Isn't Enough.
          </h2>
          <p className="text-base text-[#9A9DA7] max-w-2xl mx-auto">
            A business can rank well and still struggle to generate enquiries. It can run ads and still lose potential customers on a weak landing page. It can have great creative and still be invisible to the right audience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 text-left space-y-2">
              <span className="font-mono text-xs text-[#FF3154] font-bold">01. GET FOUND</span>
              <p className="text-base font-bold text-white">Make your business discoverable.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 text-left space-y-2">
              <span className="font-mono text-xs text-[#8B3DFF] font-bold">02. GET CUSTOMERS</span>
              <p className="text-base font-bold text-white">Bring the right people to you.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 text-left space-y-2">
              <span className="font-mono text-xs text-[#28D7FF] font-bold">03. GET REMEMBERED</span>
              <p className="text-base font-bold text-white">Give them a reason to engage, trust & act.</p>
            </div>
          </div>

          <div className="font-mono text-xs text-[#9A9DA7] uppercase tracking-widest pt-4">
            Different jobs. One growth journey.
          </div>
        </div>
      </section>

      {/* 4. PROBLEM-TO-SOLUTION MATRIX */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              TAILORED STRATEGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              You Don't Need Every Digital Marketing Service.
            </h2>
            <p className="text-base text-[#9A9DA7]">
              The right strategy isn't about doing everything. It's about identifying where your biggest opportunities are and putting your budget, time and creative effort behind them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { problem: 'Need more organic visibility?', solution: 'SEO + Local SEO + AEO' },
              { problem: 'Need enquiries now?', solution: 'Google Ads + Meta Ads + Landing Pages' },
              { problem: 'Have traffic but poor conversion?', solution: 'Landing Pages + Creative + CRO' },
              { problem: 'Want stronger visibility in AI search?', solution: 'SEO + AEO + AI Search' },
              { problem: 'Want to scale lead generation?', solution: 'Paid Ads + Remarketing + Conversion Creative' },
              { problem: 'Launching a new brand or service?', solution: 'Campaign Design + Ads + SEO' },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3">
                <h3 className="text-base font-bold text-white">{item.problem}</h3>
                <div className="text-xs font-mono text-[#FF3154] font-semibold">{item.solution}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. METHODOLOGY */}
      <section className="py-20 border-t border-white/10 bg-[#080A0E]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Strategy Before Spend.
            </h2>
            <p className="text-sm text-[#9A9DA7]">
              Before recommending a channel, we look at the business behind it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="font-mono text-xs font-bold text-[#FF3154]">01. UNDERSTAND</span>
              <h3 className="text-xl font-bold text-white">Business & Audience</h3>
              <p className="text-xs text-[#9A9DA7]">Your business, offer, market dynamics and goals.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="font-mono text-xs font-bold text-[#FF3154]">02. IDENTIFY</span>
              <h3 className="text-xl font-bold text-white">Search & Drop-offs</h3>
              <p className="text-xs text-[#9A9DA7]">Where people search, discover, and drop off.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="font-mono text-xs font-bold text-[#FF3154]">03. BUILD</span>
              <h3 className="text-xl font-bold text-white">Search, Ads & Creative</h3>
              <p className="text-xs text-[#9A9DA7]">The right mix tailored to your economics.</p>
            </div>
            <div className="p-8 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="font-mono text-xs font-bold text-[#FF3154]">04. OPTIMISE</span>
              <h3 className="text-xl font-bold text-white">Test & Improve</h3>
              <p className="text-xs text-[#9A9DA7]">No channel gets a free pass just because it's trending.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <FaqSection 
        title="Questions Businesses Ask Before Investing in Digital Marketing"
        faqs={whatWeDoFaqs}
        ctaText="Have a question about your digital strategy? Let's Talk →"
        ctaLink="/lets-talk"
      />

      {/* 7. FINAL CTA */}
      <section className="py-20 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Not Sure Where Your Biggest Opportunity Is?
          </h2>
          <p className="text-base text-[#9A9DA7]">
            We'll help you identify where your digital presence can work harder — and which activities are actually worth investing in.
          </p>
          <div className="pt-2">
            <MagneticButton to="/lets-talk" variant="primary" className="!px-8 !py-4 !text-xs uppercase tracking-wider">
              <span>Get a Free Audit</span>
              <ArrowRight size={16} />
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};
