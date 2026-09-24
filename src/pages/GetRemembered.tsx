import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Palette, 
  Layout, 
  FileText, 
  Printer, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  HelpCircle,
  Eye,
  Zap,
  Target,
  FlaskConical,
  MousePointer
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaqSection, FaqItem } from '../components/FaqSection';
import { MagneticButton } from '../components/MagneticButton';
import { isReducedMotion, createParallax, createBackgroundParallax } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

export const GetRemembered: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const ideaGlowRef = useRef<HTMLDivElement>(null);
  const ctaGlowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Hero Entrance
      gsap.fromTo(
        '.gr-hero-item',
        { opacity: 0, y: 30, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', stagger: 0.1, duration: 0.8, ease: 'power3.out' }
      );

      // Smooth background parallax (10-20% speed)
      if (glowRef.current && heroRef.current) {
        createBackgroundParallax(glowRef.current, heroRef.current, { speed: 0.18, scale: 1.15, direction: 'up' });
      }
      if (ideaGlowRef.current) {
        createBackgroundParallax(ideaGlowRef.current, '.gr-idea-section', { speed: 0.14, scale: 1.2, direction: 'down' });
      }
      if (ctaGlowRef.current) {
        createBackgroundParallax(ctaGlowRef.current, '.gr-cta-section', { speed: 0.16, scale: 1.25, direction: 'up' });
      }

      // 2. Creative Cards Grid
      gsap.fromTo(
        '.creative-card',
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.creative-grid',
            start: 'top 80%',
          },
        }
      );

      // 3. Stop Factors
      gsap.fromTo(
        '.factor-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.factors-grid',
            start: 'top 80%',
          },
        }
      );

      // 4. Landing Factors
      gsap.fromTo(
        '.landing-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.landing-grid',
            start: 'top 80%',
          },
        }
      );

      // 5. Checklist items
      gsap.fromTo(
        '.gr-check-item',
        { opacity: 0, x: -15 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.06,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gr-check-grid',
            start: 'top 80%',
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
    <div ref={containerRef} className="relative w-full bg-[#050608] text-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 px-6 lg:px-12 border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <div ref={glowRef} className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#FF3154]/15 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="gr-hero-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-semibold text-[#FF3154] tracking-widest uppercase">
            Creative &amp; Conversion Design
          </div>

          <h1 className="gr-hero-item text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-white">
            Get Remembered. Get Chosen.
          </h1>

          <div className="gr-hero-item space-y-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#9A9DA7] leading-relaxed">
            <p>People scroll past thousands of marketing messages.</p>
            <p className="font-semibold text-white">Your job isn't simply to be seen. It's to make the right person stop, understand your message and want to know more.</p>
            <p>Redcanvass creates ad creatives, landing pages, campaign designs and marketing collateral built to support your advertising and conversion goals.</p>
          </div>

          <div className="gr-hero-item flex flex-wrap items-center justify-center gap-4 pt-4">
            <MagneticButton
              href="/lets-talk"
              variant="primary"
              size="lg"
              className="shadow-[0_0_25px_rgba(255,49,84,0.45)]"
            >
              Let's Create Something That Works
            </MagneticButton>

            <Link
              to="/lets-talk?intent=audit"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold text-sm tracking-wider uppercase transition-all"
            >
              <span>Get a Free Audit</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Visual Progression */}
          <div className="gr-hero-item pt-10">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto bg-[#0D1014]/90 p-3 sm:p-4 rounded-2xl border border-white/10 backdrop-blur-xl">
              {['IDEA', '→', 'CREATIVE', '→', 'CLICK', '→', 'LANDING PAGE', '→', 'ACTION'].map((step, idx) => (
                <span
                  key={idx}
                  className={`font-black text-xs sm:text-sm tracking-wider ${
                    step === '→' 
                      ? 'text-[#FF3154] font-bold px-1' 
                      : 'text-white bg-white/5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-white/5'
                  }`}
                >
                  {step}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-20 px-6 lg:px-12 relative border-b border-white/10 bg-[#090B0E]/60">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
            Purpose-Driven Design
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Good Creative Has a Job to Do.
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#9A9DA7] leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
            <p>We don't create design simply to fill a content calendar.</p>
            <p>A campaign creative needs to earn attention.</p>
            <p>A landing page needs to make the next step obvious.</p>
            <p>A campaign concept needs to make the message memorable.</p>
            <p className="text-white font-semibold pt-2">Every asset should have a purpose within the larger marketing journey.</p>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE SERVICES */}
      <section className="py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
              Creative Services
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Creative That Supports the Campaign
            </h2>
          </div>

          <div className="creative-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Ad Creatives */}
            <div id="ad-creatives" className="creative-card p-8 sm:p-10 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/15 text-[#FF3154] flex items-center justify-center">
                  <Palette size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Ad Creatives</h3>
                  <div className="text-sm font-semibold text-[#FF3154] mt-0.5">
                    Stop the scroll. Start the conversation.
                  </div>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  We design advertising creatives for platforms such as Google, Meta and YouTube, built around the audience, message and campaign objective.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">Our creative work can include:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#9A9DA7]">
                    {[
                      'Static ad creatives',
                      'Carousel concepts',
                      'Display creatives',
                      'Promotional creatives',
                      'Lead-generation creatives',
                      'Campaign variations',
                      'Creative testing concepts'
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
                  to="/lets-talk?intent=ad-creatives"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#FF3154] uppercase tracking-wider transition-colors"
                >
                  <span>Explore Ad Creative</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Landing Pages */}
            <div id="landing-pages" className="creative-card p-8 sm:p-10 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E5B362]/15 text-[#E5B362] flex items-center justify-center">
                  <Layout size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Landing Pages</h3>
                  <div className="text-sm font-semibold text-[#E5B362] mt-0.5">
                    Don't lose the click.
                  </div>
                </div>
                <div className="space-y-2 text-sm text-[#9A9DA7] leading-relaxed">
                  <p>Getting someone to click is only half the job.</p>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/90 space-y-1">
                    <div className="font-semibold">A landing page needs to quickly communicate:</div>
                    <div className="grid grid-cols-2 gap-1 text-[#E5B362] font-mono">
                      <span>• What is this?</span>
                      <span>• Why should I care?</span>
                      <span>• Why should I trust you?</span>
                      <span>• What should I do next?</span>
                    </div>
                  </div>
                  <p>We create landing pages around specific campaigns, audiences and conversion goals.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <Link
                  to="/lets-talk?intent=landing-pages"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#E5B362] uppercase tracking-wider transition-colors"
                >
                  <span>Explore Landing Pages</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Campaign Design */}
            <div id="campaign-design" className="creative-card p-8 sm:p-10 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/15 text-[#FF3154] flex items-center justify-center">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Campaign Design</h3>
                  <div className="text-sm font-semibold text-[#FF3154] mt-0.5">
                    One idea. One recognisable campaign.
                  </div>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Instead of creating disconnected advertisements, campaign design brings the message, visual language and communication together.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">We can develop:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#9A9DA7]">
                    {[
                      'Campaign concepts',
                      'Key visual directions',
                      'Messaging themes',
                      'Digital campaign assets',
                      'Promotional campaigns',
                      'Cross-channel creative systems'
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
                  to="/lets-talk?intent=campaign-design"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#FF3154] uppercase tracking-wider transition-colors"
                >
                  <span>Explore Campaign Design</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Flyers & Posters */}
            <div id="flyers-posters" className="creative-card p-8 sm:p-10 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E5B362]/15 text-[#E5B362] flex items-center justify-center">
                  <Printer size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Flyers &amp; Posters</h3>
                  <div className="text-sm font-semibold text-[#E5B362] mt-0.5">
                    Because not every customer lives online.
                  </div>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  When your marketing needs to move offline, we create clear, campaign-led collateral that maintains consistency with your broader communication.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">Including:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#9A9DA7]">
                    {[
                      'Flyers',
                      'Posters',
                      'Promotional material',
                      'Event collateral',
                      'Educational/marketing material'
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
                  to="/lets-talk?intent=flyers-posters"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#E5B362] uppercase tracking-wider transition-colors"
                >
                  <span>Discuss a Project</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE BIG IDEA */}
      <section className="gr-idea-section py-20 px-6 lg:px-12 relative bg-[#090B0E]/60 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div ref={ideaGlowRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#FF3154]/10 rounded-full blur-[140px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
            The Big Idea
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Creative Doesn't Work in Isolation.
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#9A9DA7] leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
            <p>The same creative can perform very differently depending on:</p>

            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 my-3 text-left space-y-2">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-white/90">
                <li className="flex items-center gap-2"><span>●</span> Who sees it.</li>
                <li className="flex items-center gap-2"><span>●</span> What it says.</li>
                <li className="flex items-center gap-2"><span>●</span> Where it sends them.</li>
                <li className="flex items-center gap-2"><span>●</span> What they find there.</li>
                <li className="flex items-center gap-2 sm:col-span-2 text-[#FF3154]"><span>●</span> And what happens next.</li>
              </ul>
            </div>

            <p className="text-white font-semibold">
              That's why our creative work connects directly with performance marketing.
            </p>

            {/* Visual flow */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {['AUDIENCE', '↓', 'MESSAGE', '↓', 'CREATIVE', '↓', 'LANDING PAGE', '↓', 'ENQUIRY'].map((step, idx) => (
                <span
                  key={idx}
                  className={`font-black text-xs sm:text-sm ${
                    step === '↓' ? 'text-[#FF3154]' : 'text-white bg-white/5 px-3 py-1.5 rounded-lg'
                  }`}
                >
                  {step}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/get-customers"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#FF3154] hover:text-white uppercase tracking-wider transition-colors"
              >
                <span>Connect with Get Customers</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CREATIVE FOR PERFORMANCE */}
      <section className="py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
            Data-Driven Creative
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Designed to Be Tested. Not Just Admired.
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#9A9DA7] leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
            <p>In performance marketing, creative isn't a one-time deliverable.</p>
            <p>Different audiences respond to different messages, visuals, offers and formats.</p>

            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 my-4 text-left space-y-3">
              <div className="text-xs font-mono uppercase text-[#E5B362] font-bold">So instead of asking: "Does this look good?" we also ask:</div>
              <ul className="space-y-1.5 text-sm text-white/90">
                <li className="flex items-center gap-2"><span>●</span> "Does this communicate quickly?"</li>
                <li className="flex items-center gap-2"><span>●</span> "Does it match the audience?"</li>
                <li className="flex items-center gap-2"><span>●</span> "Does it support the campaign objective?"</li>
                <li className="flex items-center gap-2"><span>●</span> "Is there another version worth testing?"</li>
              </ul>
            </div>

            <p className="font-semibold text-white">
              That makes creative part of the performance process, not an afterthought.
            </p>
          </div>
        </div>
      </section>

      {/* 6. WHAT MAKES A CREATIVE WORK? */}
      <section className="py-24 px-6 lg:px-12 relative bg-[#090B0E]/60 border-b border-white/10">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
              Hook &amp; Retention
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              What Makes Someone Stop?
            </h2>
          </div>

          <div className="factors-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="factor-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-white">The Message</h3>
              <p className="text-xs text-[#9A9DA7]">Is the value proposition clear within seconds?</p>
            </div>

            <div className="factor-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-white">The Visual</h3>
              <p className="text-xs text-[#9A9DA7]">Does it earn attention without making the message harder to understand?</p>
            </div>

            <div className="factor-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-white">The Audience</h3>
              <p className="text-xs text-[#9A9DA7]">Does it speak to the person you're actually trying to reach?</p>
            </div>

            <div className="factor-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-white">The Offer</h3>
              <p className="text-xs text-[#9A9DA7]">Is there a clear reason to take the next step?</p>
            </div>

            <div className="factor-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-white">The Action</h3>
              <p className="text-xs text-[#9A9DA7]">Does the person know what to do next?</p>
            </div>
          </div>

          <div className="text-center text-base font-bold text-[#FF3154] pt-2">
            Pretty is nice. Clear is essential.
          </div>
        </div>
      </section>

      {/* 7. LANDING PAGES */}
      <section className="py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
              Conversion Focus
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              A Click Isn't a Conversion.
            </h2>
            <div className="space-y-2 text-base sm:text-lg text-[#9A9DA7]">
              <p>You can have the right audience and the right advertisement and still lose the opportunity after the click.</p>
              <p className="text-white font-medium">A campaign landing page should be built around the specific intent that brought someone there.</p>
            </div>
          </div>

          <div className="landing-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="landing-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-white">Relevant</h3>
              <p className="text-xs text-[#9A9DA7]">Matches the promise made in the advertisement.</p>
            </div>

            <div className="landing-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-white">Clear</h3>
              <p className="text-xs text-[#9A9DA7]">Explains the offer without making visitors work for it.</p>
            </div>

            <div className="landing-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-white">Credible</h3>
              <p className="text-xs text-[#9A9DA7]">Provides the information and reassurance needed to take action.</p>
            </div>

            <div className="landing-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-white">Focused</h3>
              <p className="text-xs text-[#9A9DA7]">Keeps unnecessary distractions away from the conversion goal.</p>
            </div>

            <div className="landing-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-base font-bold text-white">Measurable</h3>
              <p className="text-xs text-[#9A9DA7]">Allows campaign performance and conversions to be evaluated.</p>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              to="/lets-talk?intent=landing-pages"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FF3154] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,49,84,0.4)]"
            >
              <span>Build a Better Landing Experience</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. HOW CREATIVE FITS INTO REDCANVASS */}
      <section className="py-24 px-6 lg:px-12 relative bg-[#090B0E]/60 border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
              Brand Positioning
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Get Found. Get Customers. Get Remembered.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#9A9DA7]">
            Creative isn't a separate universe at Redcanvass. It connects the other two.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1">
              <h3 className="text-sm font-bold text-[#FF3154]">GET FOUND</h3>
              <p className="text-xs text-[#9A9DA7]">People discover you.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1">
              <h3 className="text-sm font-bold text-[#E5B362]">GET CUSTOMERS</h3>
              <p className="text-xs text-[#9A9DA7]">You bring the right audience to your offer.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1">
              <h3 className="text-sm font-bold text-[#FF3154]">GET REMEMBERED</h3>
              <p className="text-xs text-[#9A9DA7]">Your message gives them a reason to engage.</p>
            </div>
          </div>

          <div className="text-base font-bold text-white pt-2">
            ↓ GROW
          </div>
        </div>
      </section>

      {/* 9. WHO NEEDS CREATIVE? */}
      <section className="py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
              When It Matters
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              If You're Spending on Marketing, Your Creative Matters.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#9A9DA7] max-w-2xl mx-auto">
            Creative can influence performance at almost every stage of a digital campaign. It matters when you need to:
          </p>

          <div className="gr-check-grid grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto text-left">
            {[
              'Launch a new offer',
              'Generate leads',
              'Promote an event',
              'Improve ad performance',
              'Build a campaign',
              'Create a dedicated landing page',
              'Communicate a complex service simply',
              'Bring an offline campaign online'
            ].map((item) => (
              <div key={item} className="gr-check-item p-3.5 rounded-xl bg-[#0D1014] border border-white/10 flex items-center gap-2">
                <span className="text-[#FF3154]">✔</span>
                <span className="text-xs font-medium text-white">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              to="/who-we-help"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>See How We Can Help</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. QUESTIONS BUSINESS OWNERS ASK */}
      <section className="py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase mb-2">
              Creative Insights
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Questions Businesses Ask About Marketing Creative
            </h2>
          </div>

          <FaqSection items={getRememberedFaqs} />
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="gr-cta-section py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#0D1014] to-[#151921] border border-white/15 relative overflow-hidden shadow-2xl">
          <div ref={ctaGlowRef} className="absolute top-0 right-1/4 w-72 h-72 bg-[#FF3154]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Make Your Marketing Harder to Ignore.
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#9A9DA7] leading-relaxed">
              Whether you need a new campaign, better-performing ad creatives or a landing page built around conversion, let's create something with a job to do.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <MagneticButton
                href="/lets-talk"
                variant="primary"
                size="lg"
                className="shadow-[0_0_25px_rgba(255,49,84,0.45)]"
              >
                LET'S CREATE
              </MagneticButton>

              <Link
                to="/lets-talk?intent=audit"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold text-sm tracking-wider uppercase transition-all"
              >
                <span>GET A FREE AUDIT</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
