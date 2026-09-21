import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Target, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  BarChart3, 
  Zap, 
  Layers
} from 'lucide-react';
import gsap from 'gsap';
import { YoutubeIcon } from '../components/SocialIcons';
import { MagneticButton } from '../components/MagneticButton';
import { FaqSection, FaqItem } from '../components/FaqSection';
import { isReducedMotion } from '../utils/animations';

export const GetCustomers: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        '.gc-header-content',
        { opacity: 0, y: 35, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, ease: 'power3.out', clearProps: 'all' }
      );

      // Cards stagger
      gsap.fromTo(
        '.gc-service-card',
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.12,
          duration: 0.85,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.gc-services-section',
            start: 'top 85%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Section 10 DOCX FAQs
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
      answer: "There is no single \"good\" cost per lead. A useful CPL depends on the value of a customer, lead-to-sale rate, sales capacity, margins and other acquisition costs. For example, a ₹1,000 lead may be expensive for one business and inexpensive for another."
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
    <div ref={containerRef} className="w-full pt-32 pb-20">
      {/* 1. HERO */}
      <section className="relative py-12 md:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#8B3DFF]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 space-y-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#9A9DA7]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/30" />
            <Link to="/what-we-do" className="hover:text-white transition-colors">What We Do</Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-[#8B3DFF]">Get Customers</span>
          </nav>

          <div className="gc-header-content space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#8B3DFF]">
              <Sparkles size={14} />
              PERFORMANCE MARKETING & ACQUISITION
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
              Get Customers, <br />
              <span className="text-gradient-brand">Not Just Clicks.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white font-medium leading-relaxed">
              Paid advertising can put your business in front of thousands of people. The real question is: how many of the right people take the next step?
            </p>
            <p className="text-sm md:text-base text-[#9A9DA7] leading-relaxed">
              Redcanvass builds and manages performance marketing campaigns across Google Ads, Meta Ads and YouTube, supported by lead generation, remarketing, creative and conversion-focused landing pages.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <MagneticButton to="/lets-talk" variant="primary" className="!px-7 !py-3.5 !text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(255,49,84,0.4)]">
              <span>Get a Free Advertising Audit</span>
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton to="/lets-talk" variant="secondary" className="!px-6 !py-3.5 !text-xs uppercase tracking-wider">
              <span>See How We Work →</span>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-20 border-t border-white/10 bg-[#050608]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8B3DFF]">
            THE REALITY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Clicks Are Easy. The Right Customers Are Harder.
          </h2>
          <p className="text-base sm:text-lg text-[#9A9DA7] max-w-3xl mx-auto leading-relaxed">
            Anyone can put an ad in front of an audience. Effective performance marketing requires more:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-white pt-2 text-left">
            <div className="p-4 rounded-xl bg-[#0D1014] border border-white/10 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-[#8B3DFF]" /> The right audience
            </div>
            <div className="p-4 rounded-xl bg-[#0D1014] border border-white/10 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-[#8B3DFF]" /> The right message
            </div>
            <div className="p-4 rounded-xl bg-[#0D1014] border border-white/10 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-[#8B3DFF]" /> The right offer
            </div>
            <div className="p-4 rounded-xl bg-[#0D1014] border border-white/10 flex items-center gap-2">
              <CheckCircle2 size={14} className="text-[#8B3DFF]" /> The right landing page
            </div>
          </div>
          <p className="text-sm text-white/90 font-medium">
            We look at the entire journey rather than treating the ad platform as the strategy.
          </p>
        </div>
      </section>

      {/* 3. THE SERVICES */}
      <section className="gc-services-section py-20 border-t border-white/10 bg-[#080A0E]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8B3DFF]">
              OUR CHANNELS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ways We Turn Attention Into Opportunity
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Google Ads */}
            <div className="gc-service-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#267BFF]/40 transition-all space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#267BFF]/10 border border-[#267BFF]/30 flex items-center justify-center text-[#267BFF]">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Google Ads</h3>
                  <p className="text-xs font-mono text-[#267BFF] font-semibold mt-0.5">Capture existing demand.</p>
                </div>
                <p className="text-xs sm:text-sm text-[#9A9DA7] leading-relaxed">
                  Reach people who are actively searching for what your business offers.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-white/5 text-xs text-white/80">
                  <div>• Search campaigns</div>
                  <div>• Display campaigns</div>
                  <div>• YouTube campaigns</div>
                  <div>• Conversion-focused campaigns</div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <Link to="/lets-talk" className="text-xs font-mono font-bold uppercase tracking-wider text-[#267BFF] hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>Explore Google Ads →</span>
                </Link>
              </div>
            </div>

            {/* Meta Ads */}
            <div className="gc-service-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#8B3DFF]/40 transition-all space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#8B3DFF]/10 border border-[#8B3DFF]/30 flex items-center justify-center text-[#8B3DFF]">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Meta Ads</h3>
                  <p className="text-xs font-mono text-[#8B3DFF] font-semibold mt-0.5">Reach relevant audiences across Facebook and Instagram.</p>
                </div>
                <p className="text-xs sm:text-sm text-[#9A9DA7] leading-relaxed">
                  Facebook and Instagram advertising can help businesses build awareness, generate enquiries and reach specific audiences based on campaign objectives and targeting.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-white/5 text-xs text-white/80">
                  <div>• Audience strategy</div>
                  <div>• Creative and ad variations</div>
                  <div>• Lead generation campaigns</div>
                  <div>• Conversion campaigns</div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <Link to="/lets-talk" className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B3DFF] hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>Explore Meta Ads →</span>
                </Link>
              </div>
            </div>

            {/* YouTube Ads */}
            <div className="gc-service-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#FF3154]/40 transition-all space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/10 border border-[#FF3154]/30 flex items-center justify-center text-[#FF3154]">
                  <YoutubeIcon size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">YouTube Ads</h3>
                  <p className="text-xs font-mono text-[#FF3154] font-semibold mt-0.5">Use video to build awareness, consideration and action.</p>
                </div>
                <p className="text-xs sm:text-sm text-[#9A9DA7] leading-relaxed">
                  YouTube can help businesses introduce their offering, explain complex products or services and reach audiences at different stages of consideration.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-white/5 text-xs text-white/80">
                  <div>• Video view campaigns</div>
                  <div>• Brand awareness</div>
                  <div>• Website traffic and conversion objectives</div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <Link to="/lets-talk" className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF3154] hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>Explore YouTube Ads →</span>
                </Link>
              </div>
            </div>

            {/* Lead Generation */}
            <div className="gc-service-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#28D7FF]/40 transition-all space-y-5 flex flex-col justify-between md:col-span-2">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#28D7FF]/10 border border-[#28D7FF]/30 flex items-center justify-center text-[#28D7FF]">
                  <Zap size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Lead Generation</h3>
                  <p className="text-xs font-mono text-[#28D7FF] font-semibold mt-0.5">Don't stop at traffic.</p>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Campaigns designed around a meaningful business action — such as an enquiry, consultation, admission request, appointment or callback.
                </p>
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs font-mono text-white">
                  Audience → Offer → Ad → Landing Page/Form → Lead → Follow-up
                </div>
                <p className="text-xs text-white/70 italic">Because a cheap lead isn't necessarily a valuable lead.</p>
              </div>
            </div>

            {/* Remarketing */}
            <div className="gc-service-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#FF7A18]/40 transition-all space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF7A18]/10 border border-[#FF7A18]/30 flex items-center justify-center text-[#FF7A18]">
                  <Layers size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Remarketing</h3>
                  <p className="text-xs font-mono text-[#FF7A18] font-semibold mt-0.5">Stay relevant after the first visit.</p>
                </div>
                <p className="text-xs sm:text-sm text-[#9A9DA7] leading-relaxed">
                  Most people don't convert the first time. Reconnect with visitors who have already interacted with your campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE BIG DIFFERENTIATOR */}
      <section className="py-20 border-t border-white/10 bg-[#050608]">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8B3DFF]">
            METRICS THAT MATTER
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            We Don't Optimise for Vanity Metrics.
          </h2>
          <p className="text-base sm:text-lg text-[#9A9DA7] leading-relaxed">
            Impressions can look impressive. Clicks can look impressive. Even a low cost per lead can look impressive. But none of those automatically tells you whether your marketing is helping the business.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-[#28D7FF] pt-2 text-left">
            <div className="p-3 bg-[#0D1014] rounded-xl border border-white/10">Who are we reaching?</div>
            <div className="p-3 bg-[#0D1014] rounded-xl border border-white/10">What are they doing?</div>
            <div className="p-3 bg-[#0D1014] rounded-xl border border-white/10">Which ads create enquiries?</div>
            <div className="p-3 bg-[#0D1014] rounded-xl border border-white/10">What happens to enquiries?</div>
            <div className="p-3 bg-[#0D1014] rounded-xl border border-white/10">Where do people drop off?</div>
            <div className="p-3 bg-[#0D1014] rounded-xl border border-white/10">What can we improve next?</div>
          </div>
        </div>
      </section>

      {/* 5. THE PERFORMANCE MARKETING LOOP */}
      <section className="py-20 bg-[#080A0E] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8B3DFF]">
              CONTINUOUS OPTIMIZATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Performance Marketing Is a Loop, Not a Launch.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1">
              <span className="text-xs font-mono text-[#8B3DFF] font-bold">1. Understand</span>
              <p className="text-[11px] text-[#9A9DA7]">Goals, audience, offer</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1">
              <span className="text-xs font-mono text-[#8B3DFF] font-bold">2. Target</span>
              <p className="text-[11px] text-[#9A9DA7]">Search intent & segments</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1">
              <span className="text-xs font-mono text-[#8B3DFF] font-bold">3. Create</span>
              <p className="text-[11px] text-[#9A9DA7]">Message & landing page</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1">
              <span className="text-xs font-mono text-[#8B3DFF] font-bold">4. Launch</span>
              <p className="text-[11px] text-[#9A9DA7]">Deploy live campaigns</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1">
              <span className="text-xs font-mono text-[#8B3DFF] font-bold">5. Measure</span>
              <p className="text-[11px] text-[#9A9DA7]">Meaningful business actions</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1">
              <span className="text-xs font-mono text-[#FF3154] font-bold">6. Optimise</span>
              <p className="text-[11px] text-[#9A9DA7]">Iterate & repeat loop</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GOOGLE VS META VS YOUTUBE */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8B3DFF]">
              PLATFORM COMPARISON
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Google, Meta or YouTube?
            </h2>
            <p className="text-base text-[#9A9DA7]">
              There isn't one platform that is automatically right for every business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-lg font-bold text-white">Google Ads</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">Best suited to capturing existing search demand. Someone is already looking.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-lg font-bold text-white">Meta Ads</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">Useful for reaching and influencing defined audiences. You can create demand as well as capture it.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-lg font-bold text-white">YouTube</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">Useful when video can explain, demonstrate or build familiarity with a product or service.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-lg font-bold text-white">A Combination</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">Many businesses use multiple channels when each has a clearly defined role.</p>
            </div>
          </div>
          <p className="text-center font-mono text-xs text-white/80">The channel follows the strategy — not the other way around.</p>
        </div>
      </section>

      {/* 7. THE CLICK-TO-CUSTOMER JOURNEY & 8. WHAT WE MEASURE */}
      <section className="py-20 bg-[#080A0E] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8B3DFF]">
              CONVERSION BRIDGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              The Ad Is Only the Beginning.
            </h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 font-mono text-xs text-white py-2">
            <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">AD</span>
            <span>→</span>
            <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">CLICK</span>
            <span>→</span>
            <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">LANDING PAGE</span>
            <span>→</span>
            <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">ENQUIRY</span>
            <span>→</span>
            <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">FOLLOW-UP</span>
            <span>→</span>
            <span className="px-3 py-1.5 rounded-xl bg-[#8B3DFF] font-bold">CUSTOMER</span>
          </div>

          <p className="text-base text-[#9A9DA7] max-w-3xl mx-auto leading-relaxed">
            A great campaign can still underperform if the landing page is confusing, the offer isn't clear or the enquiry process creates friction. That's why our performance work connects with creative and conversion.
          </p>

          <div className="pt-4 border-t border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">What Does Performance Actually Mean?</h3>
            <p className="text-xs font-mono text-[#28D7FF]">The metric that matters most is the one connected to the business goal.</p>
          </div>
        </div>
      </section>

      {/* 9. WHO IS THIS FOR? */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8B3DFF]">
            AUDIENCE VALUE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Built for Businesses Where an Enquiry Matters.
          </h2>
          <p className="text-base text-[#9A9DA7] max-w-3xl mx-auto leading-relaxed">
            Performance marketing is particularly useful when a customer action has clear business value: An admission enquiry · A consultation request · A property enquiry · An appointment · A booking · A sales conversation.
          </p>
          <div className="pt-2">
            <Link to="/who-we-help" className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B3DFF] hover:text-white transition-colors">
              <span>See Who We Help →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. QUESTIONS BUSINESS OWNERS ASK */}
      <FaqSection 
        title="Questions Businesses Ask About Paid Advertising"
        faqs={getCustomersFaqs}
        ctaText="Want an assessment of your advertising campaigns? Get a Free Audit →"
        ctaLink="/lets-talk"
      />

      {/* 11. FINAL CTA */}
      <section className="py-20 md:py-28 text-center border-t border-white/10 bg-gradient-to-b from-[#050608] to-[#0A0D12]">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Are Your Ads Bringing You Business — or Just Numbers?
          </h2>
          <p className="text-base sm:text-lg text-[#9A9DA7] max-w-2xl mx-auto leading-relaxed">
            Let's look at your campaigns, targeting, creative and conversion journey and identify where you're losing potential customers.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <MagneticButton to="/lets-talk" variant="primary" className="!px-8 !py-4 !text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(255,49,84,0.5)]">
              <span>GET A FREE ADVERTISING AUDIT</span>
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton to="/lets-talk" variant="secondary" className="!px-7 !py-4 !text-xs uppercase tracking-wider">
              <span>LET'S TALK →</span>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};
