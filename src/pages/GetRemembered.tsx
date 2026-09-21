import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Layers, 
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

  // Section 10 DOCX FAQs
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
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#28D7FF]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 space-y-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#9A9DA7]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/30" />
            <Link to="/what-we-do" className="hover:text-white transition-colors">What We Do</Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-[#28D7FF]">Get Remembered</span>
          </nav>

          <div className="gr-header-content space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#28D7FF]">
              <Sparkles size={14} />
              CREATIVE & CONVERSION DESIGN
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
              Get Remembered. <br />
              <span className="text-gradient-brand">Get Chosen.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white font-medium leading-relaxed">
              People scroll past thousands of marketing messages. Your job isn't simply to be seen. It's to make the right person stop, understand your message and want to know more.
            </p>
            <p className="text-sm md:text-base text-[#9A9DA7] leading-relaxed">
              Redcanvass creates ad creatives, landing pages, campaign designs and marketing collateral built to support your advertising and conversion goals.
            </p>
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

      {/* 2. INTRODUCTION */}
      <section className="py-20 border-t border-white/10 bg-[#050608]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#28D7FF]">
            PURPOSEFUL DESIGN
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Good Creative Has a Job to Do.
          </h2>
          <p className="text-base sm:text-lg text-[#9A9DA7] max-w-3xl mx-auto leading-relaxed">
            We don't create design simply to fill a content calendar. A campaign creative needs to earn attention. A landing page needs to make the next step obvious. A campaign concept needs to make the message memorable.
          </p>
          <div className="font-mono text-sm text-[#FF3154] font-bold">
            Every asset should have a purpose within the larger marketing journey.
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE SERVICES */}
      <section className="gr-creatives-section py-20 border-t border-white/10 bg-[#080A0E]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#28D7FF]">
              OUR CREATIVE ASSETS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Creative That Supports the Campaign
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1. Ad Creatives */}
            <div className="gr-creative-card p-8 sm:p-10 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#FF3154]/40 transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/10 border border-[#FF3154]/30 flex items-center justify-center text-[#FF3154]">
                    <Eye size={24} />
                  </div>
                  <span className="text-xs font-mono text-[#FF3154] font-bold">SERVICE 01</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Ad Creatives</h3>
                  <p className="text-xs font-mono text-[#FF3154] font-semibold mt-0.5">Stop the scroll. Start the conversation.</p>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  We design advertising creatives for platforms such as Google, Meta and YouTube, built around the audience, message and campaign objective.
                </p>
                <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-white/80">
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#FF3154]" /> Static ad creatives</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#FF3154]" /> Carousel concepts</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#FF3154]" /> Display creatives</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#FF3154]" /> Promotional creatives</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#FF3154]" /> Lead-generation creatives</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#FF3154]" /> Creative testing concepts</div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <Link to="/lets-talk" className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF3154] hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>Explore Ad Creative →</span>
                </Link>
              </div>
            </div>

            {/* 2. Landing Pages */}
            <div className="gr-creative-card p-8 sm:p-10 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#28D7FF]/40 transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#28D7FF]/10 border border-[#28D7FF]/30 flex items-center justify-center text-[#28D7FF]">
                    <Layout size={24} />
                  </div>
                  <span className="text-xs font-mono text-[#28D7FF] font-bold">SERVICE 02</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Landing Pages</h3>
                  <p className="text-xs font-mono text-[#28D7FF] font-semibold mt-0.5">Don't lose the click.</p>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  We create landing pages around specific campaigns, audiences and conversion goals. Getting someone to click is only half the job. A landing page needs to quickly communicate:
                </p>
                <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-white/80">
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#28D7FF]" /> What is this?</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#28D7FF]" /> Why should I care?</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#28D7FF]" /> Why should I trust you?</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#28D7FF]" /> What should I do next?</div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <Link to="/lets-talk" className="text-xs font-mono font-bold uppercase tracking-wider text-[#28D7FF] hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>Explore Landing Pages →</span>
                </Link>
              </div>
            </div>

            {/* 3. Campaign Design */}
            <div className="gr-creative-card p-8 sm:p-10 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#8B3DFF]/40 transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#8B3DFF]/10 border border-[#8B3DFF]/30 flex items-center justify-center text-[#8B3DFF]">
                    <Layers size={24} />
                  </div>
                  <span className="text-xs font-mono text-[#8B3DFF] font-bold">SERVICE 03</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Campaign Design</h3>
                  <p className="text-xs font-mono text-[#8B3DFF] font-semibold mt-0.5">One idea. One recognisable campaign.</p>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Instead of creating disconnected advertisements, campaign design brings the message, visual language and communication together.
                </p>
                <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-white/80">
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#8B3DFF]" /> Campaign concepts</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#8B3DFF]" /> Key visual direction</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#8B3DFF]" /> Digital campaign assets</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#8B3DFF]" /> Messaging themes</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#8B3DFF]" /> Promotional campaigns</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#8B3DFF]" /> Cross-channel creative systems</div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <Link to="/lets-talk" className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B3DFF] hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>Explore Campaign Design →</span>
                </Link>
              </div>
            </div>

            {/* 4. Flyers & Posters */}
            <div className="gr-creative-card p-8 sm:p-10 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#FF7A18]/40 transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF7A18]/10 border border-[#FF7A18]/30 flex items-center justify-center text-[#FF7A18]">
                    <FileText size={24} />
                  </div>
                  <span className="text-xs font-mono text-[#FF7A18] font-bold">SERVICE 04</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Flyers & Posters</h3>
                  <p className="text-xs font-mono text-[#FF7A18] font-semibold mt-0.5">Because not every customer lives online.</p>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  When your marketing needs to move offline, we create clear, campaign-led collateral that maintains consistency with your broader communication.
                </p>
                <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-white/80">
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#FF7A18]" /> Promotional material</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#FF7A18]" /> Event collateral</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#FF7A18]" /> Educational/marketing material</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#FF7A18]" /> Print creative supporting digital campaigns</div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <Link to="/lets-talk" className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF7A18] hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>Discuss a Project →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE BIG IDEA & 5. CREATIVE FOR PERFORMANCE */}
      <section className="py-20 border-t border-white/10 bg-[#050608]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#28D7FF]">
              PERFORMANCE DESIGN
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Creative Doesn't Work in Isolation.
            </h2>
          </div>

          <p className="text-base text-[#9A9DA7] max-w-3xl mx-auto leading-relaxed">
            The same creative can perform very differently depending on: Who sees it · What it says · Where it sends them · What they find there · And what happens next.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 font-mono text-xs text-white py-2">
            <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">AUDIENCE</span>
            <span>→</span>
            <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">MESSAGE</span>
            <span>→</span>
            <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">CREATIVE</span>
            <span>→</span>
            <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">LANDING PAGE</span>
            <span>→</span>
            <span className="px-3 py-1.5 rounded-xl bg-[#28D7FF] text-[#050608] font-bold">ENQUIRY</span>
          </div>

          <div className="pt-8 border-t border-white/10 max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl font-black text-white">Designed to Be Tested. Not Just Admired.</h3>
            <p className="text-sm text-[#9A9DA7] leading-relaxed">
              In performance marketing, creative isn't a one-time deliverable. Different audiences respond to different messages, visuals, offers and formats. We ask: Does this communicate quickly? Does it match the audience? Does it support the campaign objective?
            </p>
          </div>
        </div>
      </section>

      {/* 6. WHAT MAKES A CREATIVE WORK? */}
      <section className="py-20 bg-[#080A0E] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#28D7FF]">
              HOOK & CLARITY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
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
              <p className="text-xs text-[#9A9DA7]">Does it earn attention without obscuring the message?</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-white">The Audience</h3>
              <p className="text-xs text-[#9A9DA7]">Does it speak to the person you're actually trying to reach?</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-white">The Offer</h3>
              <p className="text-xs text-[#9A9DA7]">Is there a clear reason to take the next step?</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-white">The Action</h3>
              <p className="text-xs text-[#9A9DA7]">Does the person know what to do next?</p>
            </div>
          </div>
          <p className="text-center font-mono text-xs text-white font-bold tracking-wider">Pretty is nice. Clear is essential.</p>
        </div>
      </section>

      {/* 7. LANDING PAGES */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#28D7FF]">
              CRO EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              A Click Isn't a Conversion.
            </h2>
            <p className="text-base text-[#9A9DA7]">
              You can have the right audience and the right advertisement and still lose the opportunity after the click.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1">
              <h3 className="text-base font-bold text-white">Relevant</h3>
              <p className="text-xs text-[#9A9DA7]">Matches the promise made in the ad.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1">
              <h3 className="text-base font-bold text-white">Clear</h3>
              <p className="text-xs text-[#9A9DA7]">Explains the offer without friction.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1">
              <h3 className="text-base font-bold text-white">Credible</h3>
              <p className="text-xs text-[#9A9DA7]">Provides trust signals to act.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1">
              <h3 className="text-base font-bold text-white">Focused</h3>
              <p className="text-xs text-[#9A9DA7]">Eliminates off-target distractions.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1">
              <h3 className="text-base font-bold text-white">Measurable</h3>
              <p className="text-xs text-[#9A9DA7]">Tracks conversion rate cleanly.</p>
            </div>
          </div>
          <div className="pt-2">
            <Link to="/lets-talk" className="text-xs font-mono font-bold uppercase tracking-wider text-[#28D7FF] hover:text-white transition-colors">
              <span>Build a Better Landing Experience →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. HOW CREATIVE FITS & 9. WHO NEEDS CREATIVE */}
      <section className="py-20 bg-[#080A0E] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#28D7FF]">
            GROWTH VALUE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            If You're Spending on Marketing, Your Creative Matters.
          </h2>
          <p className="text-base text-[#9A9DA7] max-w-3xl mx-auto leading-relaxed">
            Creative influences performance at almost every stage of a digital campaign: Launch a new offer · Generate leads · Promote an event · Improve ad CTR · Build a dedicated landing page · Communicate a complex service simply.
          </p>
          <div className="pt-2">
            <Link to="/lets-talk" className="text-xs font-mono font-bold uppercase tracking-wider text-[#28D7FF] hover:text-white transition-colors">
              <span>See How We Can Help →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. QUESTIONS BUSINESS OWNERS ASK */}
      <FaqSection 
        title="Questions Businesses Ask About Marketing Creative"
        faqs={getRememberedFaqs}
        ctaText="Want high-impact creatives or landing pages? Let's Talk →"
        ctaLink="/lets-talk"
      />

      {/* 11. FINAL CTA */}
      <section className="py-20 md:py-28 text-center border-t border-white/10 bg-gradient-to-b from-[#050608] to-[#0A0D12]">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Make Your Marketing Harder to Ignore.
          </h2>
          <p className="text-base sm:text-lg text-[#9A9DA7] max-w-2xl mx-auto leading-relaxed">
            Whether you need a new campaign, better-performing ad creatives or a landing page built around conversion, let's create something with a job to do.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <MagneticButton to="/lets-talk" variant="primary" className="!px-8 !py-4 !text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(255,49,84,0.5)]">
              <span>LET'S CREATE</span>
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton to="/lets-talk" variant="secondary" className="!px-7 !py-4 !text-xs uppercase tracking-wider">
              <span>GET A FREE AUDIT →</span>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};
