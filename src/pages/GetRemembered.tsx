import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Layers, 
  Palette, 
  FileText, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Target, 
  Eye, 
  Zap, 
  MousePointerClick,
  Layout
} from 'lucide-react';
import gsap from 'gsap';
import { MagneticButton } from '../components/MagneticButton';
import { FaqSection, FaqItem } from '../components/FaqSection';
import { isReducedMotion } from '../utils/animations';

export const GetRemembered: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        '.gr-header-content',
        { opacity: 0, y: 35, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, ease: 'power3.out', clearProps: 'all' }
      );

      // Cards stagger
      gsap.fromTo(
        '.gr-creative-card',
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
            trigger: '.gr-creatives-section',
            start: 'top 85%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);
  const getRememberedFaqs: FaqItem[] = [
    {
      question: "What makes a good advertising creative?",
      answer: "A good advertising creative communicates the value proposition quickly, captures attention, matches the target audience and gives people a clear reason to take the next step. Its effectiveness also depends on the campaign, placement and audience."
    },
    {
      question: "How often should I change my ad creatives?",
      answer: "There is no fixed schedule. Creative can be refreshed when performance begins to decline, audience response changes, a campaign message changes or testing identifies a stronger variation."
    },
    {
      question: "Why are my ads getting impressions but not clicks?",
      answer: "Possible reasons include weak messaging, poor audience alignment, creative fatigue, an unclear offer or a creative that doesn't communicate enough value to encourage the next step."
    },
    {
      question: "Why are my ads getting clicks but no conversions?",
      answer: "The problem may be beyond the advertisement. The landing page, offer, pricing, trust signals, form experience, page speed or mismatch between the ad and landing page can all affect conversion."
    },
    {
      question: "Do I need a separate landing page for every advertising campaign?",
      answer: "Not necessarily. But when an advertisement targets a specific audience, offer or intent, a dedicated landing page can make the experience more relevant and focused than sending everyone to a generic homepage."
    },
    {
      question: "What should a landing page include?",
      answer: "A landing page generally needs a clear value proposition, relevant information, supporting proof or trust signals, a compelling offer where appropriate and an obvious next step. The exact structure depends on the audience and conversion objective."
    },
    {
      question: "What is the difference between a landing page and a website homepage?",
      answer: "A homepage usually introduces the broader business and gives visitors multiple paths. A landing page is typically designed around a specific campaign, audience, offer or conversion objective."
    },
    {
      question: "Should I focus on design or conversion when creating an ad?",
      answer: "Both matter, but design should support communication and the campaign objective. A visually attractive advertisement that doesn't communicate the offer or motivate the intended audience may not perform effectively."
    },
    {
      question: "How can I improve my ad creative performance?",
      answer: "Test different elements such as the message, visual, offer, format and call to action while keeping the audience and campaign objective in mind. Performance data can help identify which variations deserve further testing."
    }
  ];

  return (
    <div ref={containerRef} className="w-full pt-32 pb-20">
      {/* 1. HERO */}
      <section className="relative py-12 md:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#28D7FF]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 space-y-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#9A9DA7]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/30" />
            <Link to="/what-we-do" className="hover:text-white transition-colors">What We Do</Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-[#FF3154]">Get Remembered</span>
          </nav>

          <div className="gr-header-content space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#28D7FF]">
              <Sparkles size={14} />
              PILLAR 03 • CREATIVE & CONVERSION
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
              Get Remembered. <br />
              <span className="text-gradient-brand">Get Chosen.</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#9A9DA7] leading-relaxed">
              People scroll past thousands of marketing messages. Your job isn't simply to be seen. It's to make the right person stop, understand your message and want to know more.
            </p>
            <p className="text-sm text-[#9A9DA7]">
              SRMUCANVAS creates ad creatives, landing pages, campaign designs and marketing collateral built to support your advertising and conversion goals.
            </p>
          </div>

          {/* Flow */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono font-bold text-white/80 py-2 overflow-x-auto no-scrollbar">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">IDEA</span>
            <span className="text-[#28D7FF]">→</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">CREATIVE</span>
            <span className="text-[#28D7FF]">→</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">CLICK</span>
            <span className="text-[#28D7FF]">→</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">LANDING PAGE</span>
            <span className="text-[#28D7FF]">→</span>
            <span className="px-3 py-1 rounded-full bg-[#28D7FF] text-black font-bold">ACTION</span>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <MagneticButton to="/lets-talk" variant="primary" className="!px-7 !py-3.5 !text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(255,49,84,0.4)]">
              <span>Let's Create Something That Works</span>
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton to="/lets-talk" variant="secondary" className="!px-6 !py-3.5 !text-xs uppercase tracking-wider">
              <span>Get a Free Audit →</span>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION: Good Creative Has a Job to Do */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
            PURPOSEFUL DESIGN
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Good Creative Has a Job to Do.
          </h2>
          <p className="text-base md:text-lg text-[#9A9DA7] leading-relaxed">
            We don't create design simply to fill a content calendar. A campaign creative needs to earn attention. A landing page needs to make the next step obvious. A campaign concept needs to make the message memorable. Every asset should have a purpose within the larger marketing journey.
          </p>
        </div>
      </section>

      {/* 3. FOUR CORE SERVICES */}
      <section className="py-20 border-t border-white/10 bg-[#080A0E]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#28D7FF]">
              DELIVERABLES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Creative That Supports the Campaign
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1. Ad Creatives */}
            <div className="p-8 md:p-10 rounded-3xl bg-[#0D1014] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/10 text-[#FF3154] flex items-center justify-center">
                <MousePointerClick size={24} />
              </div>
              <h3 className="text-2xl font-black text-white">Ad Creatives</h3>
              <p className="text-xs font-mono text-[#FF3154]">Stop the scroll. Start the conversation.</p>
              <p className="text-sm text-[#9A9DA7] leading-relaxed">
                Advertising creatives for Google, Meta, and YouTube built around the audience, message and campaign objective.
              </p>
              <ul className="space-y-1.5 text-xs text-[#9A9DA7] pt-2">
                <li>• Static & Carousel Ad Creatives</li>
                <li>• Motion & Display Creatives</li>
                <li>• Promotional & Lead-Gen Concepts</li>
                <li>• Multi-variation Creative A/B Testing</li>
              </ul>
            </div>

            {/* 2. Landing Pages */}
            <div className="p-8 md:p-10 rounded-3xl bg-[#0D1014] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#28D7FF]/10 text-[#28D7FF] flex items-center justify-center">
                <Layout size={24} />
              </div>
              <h3 className="text-2xl font-black text-white">Landing Pages</h3>
              <p className="text-xs font-mono text-[#28D7FF]">Don't lose the click.</p>
              <p className="text-sm text-[#9A9DA7] leading-relaxed">
                A landing page needs to answer: What is this? Why care? Why trust you? What next? We design around conversion goals.
              </p>
              <ul className="space-y-1.5 text-xs text-[#9A9DA7] pt-2">
                <li>• High-Speed Responsive Landing Pages</li>
                <li>• Clear Value Proposition & Trust Proof</li>
                <li>• Low-Friction Form Architecture</li>
                <li>• A/B Split Testing Integration</li>
              </ul>
            </div>

            {/* 3. Campaign Design */}
            <div className="p-8 md:p-10 rounded-3xl bg-[#0D1014] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#8B3DFF]/10 text-[#8B3DFF] flex items-center justify-center">
                <Palette size={24} />
              </div>
              <h3 className="text-2xl font-black text-white">Campaign Design</h3>
              <p className="text-xs font-mono text-[#8B3DFF]">One idea. One recognisable campaign.</p>
              <p className="text-sm text-[#9A9DA7] leading-relaxed">
                Instead of disconnected ads, campaign design brings the visual language, core message, and brand voice together.
              </p>
              <ul className="space-y-1.5 text-xs text-[#9A9DA7] pt-2">
                <li>• Key Visual Directions & Concept Moodboards</li>
                <li>• Core Messaging Themes & Slogans</li>
                <li>• Cross-Channel Digital Systems</li>
                <li>• Seasonal & Product Launch Campaigns</li>
              </ul>
            </div>

            {/* 4. Flyers & Posters */}
            <div className="p-8 md:p-10 rounded-3xl bg-[#0D1014] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF7A18]/10 text-[#FF7A18] flex items-center justify-center">
                <FileText size={24} />
              </div>
              <h3 className="text-2xl font-black text-white">Flyers & Posters</h3>
              <p className="text-xs font-mono text-[#FF7A18]">Because not every customer lives online.</p>
              <p className="text-sm text-[#9A9DA7] leading-relaxed">
                Clear, campaign-led offline marketing collateral that maintains full consistency with your digital brand.
              </p>
              <ul className="space-y-1.5 text-xs text-[#9A9DA7] pt-2">
                <li>• Event Collateral & Banners</li>
                <li>• Direct Mailers & Educational Booklets</li>
                <li>• High-End Print Finishes (Spot UV, Foil)</li>
                <li>• QR Code Offline-to-Online Funnels</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT MAKES SOMEONE STOP */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              CREATIVE CRITERIA
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              What Makes Someone Stop?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-white">The Message</h3>
              <p className="text-xs text-[#9A9DA7]">Is the value proposition clear within seconds?</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-white">The Visual</h3>
              <p className="text-xs text-[#9A9DA7]">Does it earn attention without cluttering the point?</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-white">The Audience</h3>
              <p className="text-xs text-[#9A9DA7]">Does it speak directly to who you need to reach?</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-white">The Offer</h3>
              <p className="text-xs text-[#9A9DA7]">Is there a compelling reason to take the next step?</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-white">The Action</h3>
              <p className="text-xs text-[#9A9DA7]">Does the person know exactly what to do next?</p>
            </div>
          </div>

          <div className="text-center font-mono text-xs text-[#28D7FF] uppercase tracking-widest pt-2">
            Pretty is nice. Clear is essential.
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <FaqSection 
        title="Questions Businesses Ask About Marketing Creative"
        faqs={getRememberedFaqs}
        ctaText="Make your marketing harder to ignore. Let's Create →"
        ctaLink="/lets-talk"
      />

      {/* 6. FINAL CTA */}
      <section className="py-20 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Make Your Marketing Harder to Ignore.
          </h2>
          <p className="text-base text-[#9A9DA7]">
            Whether you need a new campaign, better-performing ad creatives or a landing page built around conversion, let's create something with a job to do.
          </p>
          <div className="pt-2">
            <MagneticButton to="/lets-talk" variant="primary" className="!px-8 !py-4 !text-xs uppercase tracking-wider">
              <span>Let's Create</span>
              <ArrowRight size={16} />
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};
