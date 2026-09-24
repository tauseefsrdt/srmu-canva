import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Target, 
  Zap, 
  RotateCw, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle,
  BarChart3,
  Users,
  Video,
  MousePointerClick,
  UserCheck,
  SplitSquareVertical,
  Activity,
  Search
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaqSection, FaqItem } from '../components/FaqSection';
import { MagneticButton } from '../components/MagneticButton';
import { isReducedMotion, createParallax, createBackgroundParallax } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

export const GetCustomers: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const loopGlowRef = useRef<HTMLDivElement>(null);
  const ctaGlowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Hero Entrance
      gsap.fromTo(
        '.gc-hero-item',
        { opacity: 0, y: 30, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', stagger: 0.1, duration: 0.8, ease: 'power3.out' }
      );

      // Smooth background parallax (10-20% speed)
      if (glowRef.current && heroRef.current) {
        createBackgroundParallax(glowRef.current, heroRef.current, { speed: 0.18, scale: 1.15, direction: 'up' });
      }
      if (loopGlowRef.current) {
        createBackgroundParallax(loopGlowRef.current, '.gc-loop-section', { speed: 0.14, scale: 1.2, direction: 'down' });
      }
      if (ctaGlowRef.current) {
        createBackgroundParallax(ctaGlowRef.current, '.gc-cta-section', { speed: 0.16, scale: 1.25, direction: 'up' });
      }

      // 2. Services Grid Stagger
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
          },
        }
      );

      // 3. Performance Loop Steps Stagger
      gsap.fromTo(
        '.loop-step-card',
        { opacity: 0, y: 30, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: 'back.out(1.3)',
          scrollTrigger: {
            trigger: '.loop-section',
            start: 'top 80%',
          },
        }
      );

      // 4. Comparison Cards
      gsap.fromTo(
        '.platform-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.platform-grid',
            start: 'top 80%',
          },
        }
      );

      // 5. Metric Badges Stagger
      gsap.fromTo(
        '.metric-box',
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.metrics-grid',
            start: 'top 85%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

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
      answer: "You need to connect advertising data with business outcomes. Depending on the business, this may involve tracking qualified leads, sales, customer acquisition cost, revenue and customer value—not just clicks or impressions."
    },
    {
      question: "How can I reduce my cost per lead?",
      answer: "Lowering CPL isn't necessarily the goal. First identify whether the existing leads are valuable. Improvements can come from better targeting, messaging, creative, offers, landing pages, conversion tracking and campaign optimisation."
    }
  ];

  return (
    <div ref={containerRef} className="relative w-full bg-[#050608] text-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 px-6 lg:px-12 border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div ref={glowRef} className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#E5B362]/15 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="gc-hero-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-semibold text-[#E5B362] tracking-widest uppercase">
            Performance Marketing &amp; Lead Generation
          </div>

          <h1 className="gc-hero-item text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-white">
            Get Customers, Not Just Clicks.
          </h1>

          <div className="gc-hero-item space-y-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#9A9DA7] leading-relaxed">
            <p>Paid advertising can put your business in front of thousands of people.</p>
            <p className="font-semibold text-white">The real question is: how many of the right people take the next step?</p>
            <p>Redcanvass builds and manages performance marketing campaigns across Google Ads, Meta Ads and YouTube, supported by lead generation, remarketing, creative and conversion-focused landing pages.</p>
          </div>

          <div className="gc-hero-item flex flex-wrap items-center justify-center gap-4 pt-4">
            <MagneticButton
              href="/lets-talk?intent=audit"
              variant="primary"
              size="lg"
              className="shadow-[0_0_25px_rgba(255,49,84,0.45)] hover:scale-105 transition-transform"
            >
              Get a Free Advertising Audit
            </MagneticButton>

            <Link
              to="/what-we-do"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold text-sm tracking-wider uppercase transition-all hover:scale-105"
            >
              <span>See How We Work</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Visual Dashboard Journey Flow */}
          <div className="gc-hero-item pt-10">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto bg-[#0D1014]/90 p-3 sm:p-4 rounded-2xl border border-white/10 backdrop-blur-xl shadow-xl">
              {['AUDIENCE', '→', 'AD', '→', 'LANDING PAGE', '→', 'LEAD', '→', 'FOLLOW-UP'].map((step, idx) => (
                <span
                  key={idx}
                  className={`font-black text-xs sm:text-sm tracking-wider ${
                    step === '→' 
                      ? 'text-[#E5B362] font-bold px-1' 
                      : 'text-white bg-white/5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/5'
                  }`}
                >
                  {step}
                </span>
              ))}
            </div>

            {/* Floating metrics interface */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4">
              {['CTR', 'CPC', 'CPL', 'Conversions'].map((metric) => (
                <span
                  key={metric}
                  className="text-[11px] sm:text-xs font-mono font-bold text-[#E5B362] bg-[#E5B362]/10 border border-[#E5B362]/25 px-3 py-1 rounded-full"
                >
                  {metric}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-20 px-6 lg:px-12 relative border-b border-white/10 bg-[#090B0E]/60">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="text-xs font-mono font-bold tracking-widest text-[#E5B362] uppercase">
            Acquisition Reality
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Clicks Are Easy. The Right Customers Are Harder.
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#9A9DA7] leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
            <p>Anyone can put an ad in front of an audience.</p>
            <p>Effective performance marketing requires more:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-white/90 max-w-2xl mx-auto text-left py-2">
              <div className="flex items-center gap-2"><span>●</span> The right audience</div>
              <div className="flex items-center gap-2"><span>●</span> The right message</div>
              <div className="flex items-center gap-2"><span>●</span> The right offer</div>
              <div className="flex items-center gap-2"><span>●</span> The right campaign objective</div>
              <div className="flex items-center gap-2"><span>●</span> The right landing experience</div>
              <div className="flex items-center gap-2"><span>●</span> The right measurement</div>
              <div className="flex items-center gap-2 sm:col-span-2 text-[#E5B362] font-semibold"><span>●</span> And continuous optimisation</div>
            </div>

            <p className="text-white font-semibold pt-2">
              We look at the entire journey rather than treating the ad platform as the strategy.
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE SERVICES */}
      <section className="py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#E5B362] uppercase">
              Paid Acquisition Channels
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Ways We Turn Attention Into Opportunity
            </h2>
          </div>

          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Google Ads */}
            <div id="google-ads" className="service-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between hover:border-[#E5B362]/50 hover:-translate-y-1.5 transition-all duration-300 shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E5B362]/15 text-[#E5B362] flex items-center justify-center">
                  <Search size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Google Ads</h3>
                  <div className="text-sm font-semibold text-[#E5B362] mt-0.5">
                    Capture existing demand.
                  </div>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Reach people who are actively searching for the products, services or solutions your business offers.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">Campaigns can include:</div>
                  <div className="space-y-1 text-xs text-[#9A9DA7]">
                    {[
                      'Search campaigns',
                      'Display campaigns',
                      'YouTube campaigns',
                      'Remarketing',
                      'Location-based targeting',
                      'Conversion-focused campaigns'
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="text-[#E5B362]">✔</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <Link
                  to="/lets-talk?intent=google-ads"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#E5B362] uppercase tracking-wider transition-colors"
                >
                  <span>Explore Google Ads</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Meta Ads */}
            <div id="meta-ads" className="service-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between hover:border-[#FF3154]/50 hover:-translate-y-1.5 transition-all duration-300 shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/15 text-[#FF3154] flex items-center justify-center">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Meta Ads</h3>
                  <div className="text-sm font-semibold text-[#FF3154] mt-0.5">
                    Reach the right audiences before they search.
                  </div>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Facebook and Instagram advertising can help businesses build awareness, generate enquiries and reach specific audiences based on campaign objectives and targeting.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">We focus on:</div>
                  <div className="space-y-1 text-xs text-[#9A9DA7]">
                    {[
                      'Audience strategy',
                      'Campaign structure',
                      'Ad creative',
                      'Lead generation',
                      'Conversion campaigns',
                      'Remarketing',
                      'Ongoing optimisation'
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="text-[#FF3154]">✔</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <Link
                  to="/lets-talk?intent=meta-ads"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#FF3154] uppercase tracking-wider transition-colors"
                >
                  <span>Explore Meta Ads</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* YouTube Ads */}
            <div id="youtube-ads" className="service-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between hover:border-[#E5B362]/50 hover:-translate-y-1.5 transition-all duration-300 shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E5B362]/15 text-[#E5B362] flex items-center justify-center">
                  <Video size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">YouTube Ads</h3>
                  <div className="text-sm font-semibold text-[#E5B362] mt-0.5">
                    Use video where attention happens.
                  </div>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  YouTube can help businesses introduce their offering, explain complex products or services and reach audiences at different stages of consideration.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">Campaigns can be built around:</div>
                  <div className="space-y-1 text-xs text-[#9A9DA7]">
                    {[
                      'Awareness',
                      'Consideration',
                      'Website traffic',
                      'Lead generation',
                      'Remarketing'
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <span className="text-[#E5B362]">✔</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <Link
                  to="/lets-talk?intent=youtube-ads"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#E5B362] uppercase tracking-wider transition-colors"
                >
                  <span>Explore YouTube Ads</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Lead Generation */}
            <div id="lead-generation" className="service-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between md:col-span-2 lg:col-span-2 hover:border-[#FF3154]/50 hover:-translate-y-1.5 transition-all duration-300 shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/15 text-[#FF3154] flex items-center justify-center">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Lead Generation</h3>
                  <div className="text-sm font-semibold text-[#FF3154] mt-0.5">
                    Don't stop at traffic.
                  </div>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Lead generation campaigns are designed around a meaningful business action — such as an enquiry, consultation, admission enquiry, appointment or callback.
                </p>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">We look at:</div>
                  <div className="text-xs font-semibold text-white/90">
                    Audience → Offer → Ad → Landing Page/Form → Lead → Follow-up
                  </div>
                  <p className="text-xs text-[#E5B362] font-medium pt-1">
                    Because a cheap lead isn't necessarily a valuable lead.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <Link
                  to="/lets-talk?intent=lead-generation"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#FF3154] uppercase tracking-wider transition-colors"
                >
                  <span>Explore Lead Generation</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Remarketing */}
            <div id="remarketing" className="service-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between hover:border-[#E5B362]/50 hover:-translate-y-1.5 transition-all duration-300 shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E5B362]/15 text-[#E5B362] flex items-center justify-center">
                  <RotateCw size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Remarketing</h3>
                  <div className="text-sm font-semibold text-[#E5B362] mt-0.5">
                    Stay relevant after the first visit.
                  </div>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Most people don't convert the first time they encounter a business. Remarketing allows businesses to reconnect with people who have already interacted with their website, campaigns or other digital touchpoints, where appropriate.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <Link
                  to="/lets-talk?intent=remarketing"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#E5B362] uppercase tracking-wider transition-colors"
                >
                  <span>Explore Remarketing</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE BIG DIFFERENTIATOR */}
      <section className="py-20 px-6 lg:px-12 relative bg-[#090B0E]/60 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
            Value Focus
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            We Don't Optimise for Vanity Metrics.
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#9A9DA7] leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
            <p>Impressions can look impressive. Clicks can look impressive. Even a low cost per lead can look impressive.</p>
            <p>But none of those automatically tells you whether your marketing is helping the business.</p>

            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 my-4 text-left space-y-2 shadow-lg">
              <div className="text-xs font-mono uppercase text-[#E5B362] font-bold mb-2">We look beyond surface-level numbers to understand:</div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-white/90">
                <li className="flex items-center gap-2"><span>●</span> Who are we reaching?</li>
                <li className="flex items-center gap-2"><span>●</span> What are they doing?</li>
                <li className="flex items-center gap-2"><span>●</span> Which campaigns are creating enquiries?</li>
                <li className="flex items-center gap-2"><span>●</span> What happens to those enquiries?</li>
                <li className="flex items-center gap-2"><span>●</span> Where are people dropping off?</li>
                <li className="flex items-center gap-2"><span>●</span> What can we improve next?</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE PERFORMANCE MARKETING LOOP */}
      <section className="gc-loop-section loop-section py-24 px-6 lg:px-12 relative border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div ref={loopGlowRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E5B362]/10 rounded-full blur-[140px]" />
        </div>
        <div className="max-w-5xl mx-auto space-y-12 text-center relative z-10">
          <div className="space-y-3 max-w-2xl mx-auto">
            <div className="text-xs font-mono font-bold tracking-widest text-[#E5B362] uppercase">
              Iterative Execution
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Performance Marketing Is a Loop, Not a Launch.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <div className="loop-step-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2 hover:border-[#E5B362]/40 hover:-translate-y-1 transition-all">
              <div className="text-xs font-mono text-[#E5B362] font-bold">01</div>
              <h3 className="text-lg font-bold text-white">1. Understand</h3>
              <p className="text-xs text-[#9A9DA7]">Business goals, audience, offer and customer journey.</p>
            </div>

            <div className="loop-step-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2 hover:border-[#E5B362]/40 hover:-translate-y-1 transition-all">
              <div className="text-xs font-mono text-[#E5B362] font-bold">02</div>
              <h3 className="text-lg font-bold text-white">2. Target</h3>
              <p className="text-xs text-[#9A9DA7]">Identify the audiences and search intent worth reaching.</p>
            </div>

            <div className="loop-step-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2 hover:border-[#E5B362]/40 hover:-translate-y-1 transition-all">
              <div className="text-xs font-mono text-[#E5B362] font-bold">03</div>
              <h3 className="text-lg font-bold text-white">3. Create</h3>
              <p className="text-xs text-[#9A9DA7]">Build the message, creative and landing experience.</p>
            </div>

            <div className="loop-step-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2 hover:border-[#E5B362]/40 hover:-translate-y-1 transition-all">
              <div className="text-xs font-mono text-[#E5B362] font-bold">04</div>
              <h3 className="text-lg font-bold text-white">4. Launch</h3>
              <p className="text-xs text-[#9A9DA7]">Put the campaign in front of the right audience.</p>
            </div>

            <div className="loop-step-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2 hover:border-[#E5B362]/40 hover:-translate-y-1 transition-all">
              <div className="text-xs font-mono text-[#E5B362] font-bold">05</div>
              <h3 className="text-lg font-bold text-white">5. Measure</h3>
              <p className="text-xs text-[#9A9DA7]">Track meaningful actions, not just surface-level engagement.</p>
            </div>

            <div className="loop-step-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2 hover:border-[#E5B362]/40 hover:-translate-y-1 transition-all">
              <div className="text-xs font-mono text-[#E5B362] font-bold">06</div>
              <h3 className="text-lg font-bold text-white">6. Optimise</h3>
              <p className="text-xs text-[#9A9DA7]">Use what the data tells us to improve the next iteration.</p>
            </div>
          </div>

          <div className="text-sm font-mono font-bold text-[#E5B362]">
            ↓ Repeat.
          </div>
        </div>
      </section>

      {/* 6. GOOGLE VS META VS YOUTUBE */}
      <section className="py-24 px-6 lg:px-12 relative bg-[#090B0E]/60 border-b border-white/10">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
              Platform Strategy
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Google, Meta or YouTube?
            </h2>
            <p className="text-base sm:text-lg text-[#9A9DA7]">
              There isn't one platform that is automatically right for every business.
            </p>
          </div>

          <div className="platform-grid grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="platform-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2 hover:border-[#E5B362]/40 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-white">Google Ads</h3>
              <p className="text-sm text-[#9A9DA7]">Best suited to capturing existing search demand.</p>
              <div className="text-xs text-[#E5B362] font-semibold italic">Someone is already looking.</div>
            </div>

            <div className="platform-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2 hover:border-[#FF3154]/40 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-white">Meta Ads</h3>
              <p className="text-sm text-[#9A9DA7]">Useful for reaching and influencing defined audiences through Facebook and Instagram.</p>
              <div className="text-xs text-[#FF3154] font-semibold italic">You can create demand as well as capture it.</div>
            </div>

            <div className="platform-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2 hover:border-[#E5B362]/40 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-white">YouTube</h3>
              <p className="text-sm text-[#9A9DA7]">Useful when video can explain, demonstrate or build familiarity with a product or service.</p>
              <div className="text-xs text-[#E5B362] font-semibold italic">Show people why they should care.</div>
            </div>

            <div className="platform-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2 hover:border-white/20 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold text-white">A Combination</h3>
              <p className="text-sm text-[#9A9DA7]">Many businesses can use multiple channels when each has a clearly defined role.</p>
              <div className="text-xs text-white font-semibold italic">The channel follows the strategy — not the other way around.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. THE CLICK-TO-CUSTOMER JOURNEY */}
      <section className="py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-5xl mx-auto space-y-12 text-center">
          <div className="space-y-3 max-w-2xl mx-auto">
            <div className="text-xs font-mono font-bold tracking-widest text-[#E5B362] uppercase">
              Full Funnel
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              The Ad Is Only the Beginning.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-6 gap-3 max-w-5xl mx-auto text-center">
            {['AD', 'CLICK', 'LANDING PAGE', 'ENQUIRY', 'FOLLOW-UP', 'CUSTOMER'].map((step, idx) => (
              <div key={step} className="p-3 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1 hover:border-[#E5B362]/50 hover:-translate-y-1 transition-all">
                <div className="text-[10px] font-mono text-[#E5B362]">0{idx + 1}</div>
                <div className="text-xs font-bold text-white">{step}</div>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-4 max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-[#9A9DA7]">
              A great campaign can still underperform if the landing page is confusing, the offer isn't clear or the enquiry process creates friction.
            </p>
            <p className="text-white font-medium">
              That's why our performance work connects with creative and conversion.
            </p>
            <div className="pt-2">
              <Link
                to="/get-remembered"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#E5B362] hover:text-white uppercase tracking-wider transition-colors hover:scale-105"
              >
                <span>Get Remembered</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHAT WE MEASURE */}
      <section className="py-24 px-6 lg:px-12 relative bg-[#090B0E]/60 border-b border-white/10">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#E5B362] uppercase">
              Meaningful Metrics
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              What Does Performance Actually Mean?
            </h2>
            <p className="text-base sm:text-lg text-[#9A9DA7]">
              The right metrics depend on the campaign objective. Depending on the business, we may look at:
            </p>
          </div>

          <div className="metrics-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-4xl mx-auto">
            {[
              'Reach',
              'Impressions',
              'Click-through rate',
              'Cost per click',
              'Conversion rate',
              'Cost per lead',
              'Qualified leads',
              'Enquiry volume',
              'Landing-page performance',
              'Customer acquisition cost'
            ].map((metric) => (
              <div key={metric} className="metric-box p-3.5 rounded-xl bg-[#0D1014] border border-white/10 text-center hover:border-white/20 transition-all">
                <span className="text-xs font-semibold text-white/90">{metric}</span>
              </div>
            ))}
          </div>

          <div className="text-center text-sm font-bold text-[#E5B362] max-w-xl mx-auto pt-2">
            The metric that matters most is the one connected to the business goal.
          </div>
        </div>
      </section>

      {/* 9. WHO IS THIS FOR? */}
      <section className="py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#E5B362] uppercase">
              Intent-Driven Businesses
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Built for Businesses Where an Enquiry Matters.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#9A9DA7] max-w-2xl mx-auto">
            Performance marketing can be particularly useful when a customer action has clear business value.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto text-left">
            {[
              'An admission enquiry.',
              'A consultation request.',
              'A property enquiry.',
              'An appointment.',
              'A booking.',
              'A sales enquiry.'
            ].map((item) => (
              <div key={item} className="p-3.5 rounded-xl bg-[#0D1014] border border-white/10 flex items-center gap-2 hover:border-white/20 transition-colors">
                <span className="text-[#E5B362]">✔</span>
                <span className="text-xs font-medium text-white">{item}</span>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-4">
            <p className="text-sm text-[#9A9DA7]">
              The objective isn't simply to generate more activity. It's to create more meaningful opportunities.
            </p>
            <Link
              to="/who-we-help"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all hover:scale-105"
            >
              <span>See Who We Help</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. QUESTIONS BUSINESS OWNERS ASK */}
      <section className="py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <div className="text-xs font-mono font-bold tracking-widest text-[#E5B362] uppercase mb-2">
              Performance Insights
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Questions Businesses Ask About Paid Advertising
            </h2>
          </div>

          <FaqSection items={getCustomersFaqs} />
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="gc-cta-section py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#0D1014] to-[#151921] border border-white/15 relative overflow-hidden shadow-2xl">
          <div ref={ctaGlowRef} className="absolute top-0 right-1/4 w-72 h-72 bg-[#E5B362]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Are Your Ads Bringing You Business — or Just Numbers?
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#9A9DA7] leading-relaxed">
              Let's look at your campaigns, targeting, creative and conversion journey and identify where you're losing potential customers.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <MagneticButton
                href="/lets-talk?intent=audit"
                variant="primary"
                size="lg"
                className="shadow-[0_0_25px_rgba(255,49,84,0.45)] hover:scale-105 transition-transform"
              >
                GET A FREE ADVERTISING AUDIT
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
