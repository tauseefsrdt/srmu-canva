import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Target, 
  Users, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  BarChart3, 
  Layers, 
  Zap, 
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { YoutubeIcon } from '../components/SocialIcons';
import { MagneticButton } from '../components/MagneticButton';
import { FaqSection, FaqItem } from '../components/FaqSection';

export const GetCustomers: React.FC = () => {
  const getCustomersFaqs: FaqItem[] = [
    {
      question: "How much should a small business spend on Google Ads?",
      answer: "There is no universal budget. A sensible starting point depends on search demand, competition, customer value, geographic targeting, conversion rates and how many enquiries the business can realistically handle."
    },
    {
      question: "Is Google Ads or Meta Ads better for lead generation?",
      answer: "They work differently. Google Ads can capture people actively searching for a solution, while Meta Ads can reach defined audiences based on campaign objectives and targeting. The appropriate platform depends on the business and how customers make decisions."
    },
    {
      question: "Why am I getting clicks but no leads?",
      answer: "Possible causes include poor targeting, weak messaging, an unclear offer, an ineffective landing page, slow website experience, form friction or a mismatch between the advertisement and what visitors find after clicking."
    },
    {
      question: "Why are my Meta Ads generating cheap but poor-quality leads?",
      answer: "Low cost per lead does not necessarily mean high-quality acquisition. Lead quality can be affected by targeting, campaign objectives, creative, qualification questions, offer positioning and follow-up."
    },
    {
      question: "How long does Google Ads take to start generating leads?",
      answer: "Campaigns can begin receiving traffic shortly after becoming active, but meaningful performance evaluation requires sufficient data. Results depend on factors such as search volume, competition, targeting, budget, offer and conversion experience."
    },
    {
      question: "What is a good cost per lead?",
      answer: "There is no single 'good' cost per lead. A useful CPL depends on the value of a customer, lead-to-sale rate, sales capacity, margins and other acquisition costs."
    },
    {
      question: "Should I run Google Ads and Meta Ads together?",
      answer: "They can complement each other when each platform has a defined role. Google can capture existing demand, while Meta can help reach and influence relevant audiences. The decision should be based on the customer journey and economics rather than simply using more channels."
    },
    {
      question: "Do I need a landing page for Google Ads?",
      answer: "Not always, but a dedicated landing page can be useful when the campaign has a specific audience, offer or conversion objective. The page can be designed around the exact intent behind the advertisement rather than sending every visitor to a generic homepage."
    },
    {
      question: "How do I know whether my advertising is actually profitable?",
      answer: "You need to connect advertising data with business outcomes. Depending on the business, this may involve tracking qualified leads, sales, customer acquisition cost, revenue and customer value — not just clicks or impressions."
    },
    {
      question: "How can I reduce my cost per lead?",
      answer: "Lowering CPL isn't necessarily the goal. First identify whether the existing leads are valuable. Improvements can come from better targeting, messaging, creative, offers, landing pages, conversion tracking and campaign optimisation."
    }
  ];

  return (
    <div className="w-full pt-32 pb-20">
      {/* 1. HERO */}
      <section className="relative py-12 md:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#8B3DFF]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 space-y-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#9A9DA7]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/30" />
            <Link to="/what-we-do" className="hover:text-white transition-colors">What We Do</Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-[#FF3154]">Get Customers</span>
          </nav>

          <div className="space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#8B3DFF]">
              <TrendingUp size={14} />
              PILLAR 02 • PERFORMANCE & ACQUISITION
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
              Get Customers, <br />
              <span className="text-gradient-brand">Not Just Clicks.</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#9A9DA7] leading-relaxed">
              Paid advertising can put your business in front of thousands of people. The real question is: how many of the right people take the next step?
            </p>
            <p className="text-sm text-[#9A9DA7]">
              SRMUCANVAS builds and manages performance marketing campaigns across Google Ads, Meta Ads and YouTube, supported by lead generation, remarketing, creative and conversion-focused landing pages.
            </p>
          </div>

          {/* Campaign Pipeline */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono font-bold text-white/80 py-2 overflow-x-auto no-scrollbar">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">AUDIENCE</span>
            <span className="text-[#8B3DFF]">→</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">AD</span>
            <span className="text-[#8B3DFF]">→</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">LANDING PAGE</span>
            <span className="text-[#8B3DFF]">→</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">QUALIFIED LEAD</span>
            <span className="text-[#8B3DFF]">→</span>
            <span className="px-3 py-1 rounded-full bg-[#8B3DFF] text-white font-bold">CUSTOMER</span>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <MagneticButton to="/lets-talk" variant="primary" className="!px-7 !py-3.5 !text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(255,49,84,0.4)]">
              <span>Get a Free Advertising Audit</span>
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton to="/lets-talk" variant="secondary" className="!px-6 !py-3.5 !text-xs uppercase tracking-wider">
              <span>Let's Talk →</span>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION: Clicks Are Easy. The Right Customers Are Harder */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
            ACQUISITION QUALITY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Clicks Are Easy. The Right Customers Are Harder.
          </h2>
          <p className="text-base md:text-lg text-[#9A9DA7] leading-relaxed">
            Anyone can put an ad in front of an audience. Effective performance marketing requires more: the right audience, message, offer, campaign objective, landing experience, and continuous measurement.
          </p>
          <p className="text-sm md:text-base text-[#9A9DA7]">
            We look at the entire journey rather than treating the ad platform as the strategy.
          </p>
        </div>
      </section>

      {/* 3. WAYS WE TURN ATTENTION INTO OPPORTUNITY */}
      <section className="py-20 border-t border-white/10 bg-[#080A0E]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8B3DFF]">
              OUR CHANNELS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Ways We Turn Attention Into Opportunity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Google Ads */}
            <div className="p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#267BFF]/10 text-[#267BFF] flex items-center justify-center">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-black text-white">Google Ads</h3>
              <p className="text-xs font-mono text-[#267BFF]">Capture existing demand.</p>
              <p className="text-sm text-[#9A9DA7] leading-relaxed">
                Reach people who are actively searching for the products, services or solutions your business offers.
              </p>
              <ul className="space-y-1.5 text-xs text-[#9A9DA7] pt-2">
                <li>• Search & Intent Campaigns</li>
                <li>• Display & Retargeting</li>
                <li>• YouTube Pre-roll & In-feed</li>
                <li>• Conversion Tracking & Smart Bidding</li>
              </ul>
            </div>

            {/* Meta Ads */}
            <div className="p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF167D]/10 text-[#FF167D] flex items-center justify-center">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-black text-white">Meta Ads</h3>
              <p className="text-xs font-mono text-[#FF167D]">Reach audiences before they search.</p>
              <p className="text-sm text-[#9A9DA7] leading-relaxed">
                Facebook & Instagram advertising to build awareness, generate enquiries and reach specific customer segments.
              </p>
              <ul className="space-y-1.5 text-xs text-[#9A9DA7] pt-2">
                <li>• Audience Segmentation & Lookalikes</li>
                <li>• High-Impact Carousel & Video Ads</li>
                <li>• On-Platform Instant Forms</li>
                <li>• Custom Conversion Funnels</li>
              </ul>
            </div>

            {/* YouTube Ads */}
            <div className="p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/10 text-[#FF3154] flex items-center justify-center">
                <YoutubeIcon size={24} />
              </div>
              <h3 className="text-2xl font-black text-white">YouTube Ads</h3>
              <p className="text-xs font-mono text-[#FF3154]">Use video where attention happens.</p>
              <p className="text-sm text-[#9A9DA7] leading-relaxed">
                Explain complex products or services, build familiarity, and drive high-intent consideration.
              </p>
              <ul className="space-y-1.5 text-xs text-[#9A9DA7] pt-2">
                <li>• Video Action Campaigns</li>
                <li>• In-Stream Skippable Ads</li>
                <li>• Brand Consideration Sequences</li>
                <li>• Retargeted Video Viewers</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Lead Generation */}
            <div className="p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-3">
              <h3 className="text-xl font-bold text-white">Lead Generation Campaigns</h3>
              <p className="text-sm text-[#9A9DA7]">
                Don't stop at traffic. Campaigns designed around meaningful actions: enquiries, consultations, bookings, or callbacks.
              </p>
            </div>

            {/* Remarketing */}
            <div className="p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-3">
              <h3 className="text-xl font-bold text-white">Full-Funnel Remarketing</h3>
              <p className="text-sm text-[#9A9DA7]">
                Stay relevant after the first visit. Reconnect with visitors who already showed intent with customized offers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PERFORMANCE LOOP */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              ITERATIVE PROCESS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Performance Marketing Is a Loop, Not a Launch.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="font-mono text-xs text-[#FF3154] font-bold">01. UNDERSTAND</span>
              <p className="text-xs text-[#9A9DA7]">Goals & Journey</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="font-mono text-xs text-[#FF7A18] font-bold">02. TARGET</span>
              <p className="text-xs text-[#9A9DA7]">Audiences & Intent</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="font-mono text-xs text-[#8B3DFF] font-bold">03. CREATE</span>
              <p className="text-xs text-[#9A9DA7]">Message & Landing</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="font-mono text-xs text-[#28D7FF] font-bold">04. LAUNCH</span>
              <p className="text-xs text-[#9A9DA7]">Live Campaigns</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="font-mono text-xs text-[#FF167D] font-bold">05. MEASURE</span>
              <p className="text-xs text-[#9A9DA7]">Conversion Data</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="font-mono text-xs text-[#267BFF] font-bold">06. OPTIMISE</span>
              <p className="text-xs text-[#9A9DA7]">Repeat & Scale</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GOOGLE VS META VS YOUTUBE */}
      <section className="py-20 border-t border-white/10 bg-[#080A0E]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Google, Meta or YouTube?
            </h2>
            <p className="text-sm text-[#9A9DA7]">
              There isn't one platform that is automatically right for every business. The channel follows the strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3">
              <h3 className="text-xl font-bold text-white">Google Ads</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">
                Best suited to capturing existing search demand. Someone is already looking.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3">
              <h3 className="text-xl font-bold text-white">Meta Ads</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">
                Useful for reaching and influencing defined audiences. You create demand as well as capture it.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3">
              <h3 className="text-xl font-bold text-white">YouTube Ads</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">
                Useful when video can explain, demonstrate or build familiarity with a product or service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <FaqSection 
        title="Questions Businesses Ask About Paid Advertising"
        faqs={getCustomersFaqs}
        ctaText="Are your ads bringing you business or just numbers? Get a Free Audit →"
        ctaLink="/lets-talk"
      />

      {/* 7. FINAL CTA */}
      <section className="py-20 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Are Your Ads Bringing You Business — or Just Numbers?
          </h2>
          <p className="text-base text-[#9A9DA7]">
            Let's look at your campaigns, targeting, creative and conversion journey and identify where you're losing potential customers.
          </p>
          <div className="pt-2">
            <MagneticButton to="/lets-talk" variant="primary" className="!px-8 !py-4 !text-xs uppercase tracking-wider">
              <span>Get a Free Advertising Audit</span>
              <ArrowRight size={16} />
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};
