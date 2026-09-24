import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Cpu, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
  Layers, 
  Network, 
  ExternalLink,
  Sparkles,
  ArrowDown
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaqSection, FaqItem } from '../components/FaqSection';
import { MagneticButton } from '../components/MagneticButton';
import { isReducedMotion, createParallax, createBackgroundParallax } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

export const GetFound: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const coreGlowRef = useRef<HTMLDivElement>(null);
  const ctaGlowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Hero Entrance
      gsap.fromTo(
        '.gf-hero-item',
        { opacity: 0, y: 30, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', stagger: 0.1, duration: 0.8, ease: 'power3.out' }
      );

      // Smooth background parallax (10-20% speed)
      if (glowRef.current && heroRef.current) {
        createBackgroundParallax(glowRef.current, heroRef.current, { speed: 0.18, scale: 1.15, direction: 'up' });
      }
      if (coreGlowRef.current) {
        createBackgroundParallax(coreGlowRef.current, '.gf-core-section', { speed: 0.14, scale: 1.2, direction: 'down' });
      }
      if (ctaGlowRef.current) {
        createBackgroundParallax(ctaGlowRef.current, '.gf-cta-section', { speed: 0.16, scale: 1.25, direction: 'up' });
      }

      // 2. Core Idea Box
      gsap.fromTo(
        '.gf-core-box',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gf-core-section',
            start: 'top 85%',
          },
        }
      );

      // 3. Four Areas Cards
      gsap.fromTo(
        '.area-card',
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.areas-grid',
            start: 'top 80%',
          },
        }
      );

      // 4. Optimise Cards
      gsap.fromTo(
        '.optimise-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.optimise-grid',
            start: 'top 80%',
          },
        }
      );

      // 5. Journey Steps
      gsap.fromTo(
        '.journey-step',
        { opacity: 0, y: 25, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.65,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: '.journey-section',
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const getFoundFaqs: FaqItem[] = [
    {
      question: "Is SEO still worth investing in?",
      answer: "SEO can be valuable when customers use search to discover information, compare businesses or find services. Its value depends on the business, competition, search demand, customer economics and how effectively the website converts visitors."
    },
    {
      question: "How long does SEO take to work?",
      answer: "There is no universal timeline. Results can depend on the site's existing authority and technical health, competition, content quality, search demand and the amount of work being implemented. SEO should generally be viewed as an ongoing growth activity rather than an instant advertising channel."
    },
    {
      question: "How is AEO different from SEO?",
      answer: "SEO focuses broadly on improving visibility in search engines. AEO focuses more specifically on making information useful and understandable for answer-oriented search experiences. There is significant overlap, so AEO should generally complement strong SEO rather than replace it."
    },
    {
      question: "How can I get my business mentioned in AI search results?",
      answer: "There is no guaranteed method for controlling whether an AI search system mentions a business. Businesses can, however, improve their digital presence by providing clear, useful and trustworthy information, maintaining strong SEO foundations and making their business, services and expertise easy to understand."
    },
    {
      question: "Does SEO help with AI search?",
      answer: "Yes, SEO fundamentals remain relevant to Google's AI-powered search experiences. Google specifically advises site owners to continue following its established SEO best practices while creating useful, original content. (Google Developers)"
    },
    {
      question: "What is Local SEO and does my business need it?",
      answer: "Local SEO focuses on improving visibility for searches connected to a location. It can be particularly relevant when customers choose businesses based on where they operate or where the service is provided."
    },
    {
      question: "Why isn't my website ranking on Google?",
      answer: "There can be many reasons, including technical accessibility, competition, search intent mismatch, content quality, site structure, authority and overall relevance. A proper SEO assessment should identify the specific issues rather than assuming there is one universal cause."
    },
    {
      question: "How much does SEO cost?",
      answer: "There is no standard SEO price that applies to every business. Cost depends on factors such as website size, competition, geographic scope, technical requirements, content needs and the amount of ongoing optimisation required."
    },
    {
      question: "Can a small business compete with larger companies in search?",
      answer: "It can, depending on the market and search opportunity. Smaller businesses can sometimes compete by focusing on specific services, locations, customer questions and areas where larger competitors have less relevant or useful content."
    }
  ];

  return (
    <div ref={containerRef} className="relative w-full bg-[#050608] text-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 px-6 lg:px-12 border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div ref={glowRef} className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#FF3154]/15 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="gf-hero-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-semibold text-[#FF3154] tracking-widest uppercase">
            Search &amp; AI Visibility
          </div>

          <h1 className="gf-hero-item text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-white">
            Get Found Where Your Customers Are Searching.
          </h1>

          <div className="gf-hero-item space-y-4 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#9A9DA7] leading-relaxed">
            <p>
              Search is changing.
            </p>
            <p>
              People still use Google to find businesses, but they're increasingly asking questions and discovering information through AI-powered search experiences too.
            </p>
            <p className="text-white font-medium">
              Redcanvass helps businesses build visibility across traditional search, local search and AI-powered search through SEO, Local SEO, AEO and AI Search optimisation.
            </p>
          </div>

          <div className="gf-hero-item flex flex-wrap items-center justify-center gap-4 pt-4">
            <MagneticButton
              href="/lets-talk?intent=audit"
              variant="primary"
              size="lg"
              className="shadow-[0_0_25px_rgba(255,49,84,0.45)] hover:scale-105 transition-transform"
            >
              Get a Free Search Audit
            </MagneticButton>

            <Link
              to="/lets-talk"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold text-sm tracking-wider uppercase transition-all hover:scale-105"
            >
              <span>Let's Talk</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Visual Search / AI Journey Flow */}
          <div className="gf-hero-item pt-10">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto bg-[#0D1014]/90 p-3 sm:p-4 rounded-2xl border border-white/10 backdrop-blur-xl shadow-xl">
              {['Google Search', '→', 'Maps', '→', 'AI Search', '→', 'Website', '→', 'Enquiry'].map((step, idx) => (
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

            {/* Floating search queries */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-4">
              {[
                '"Best CBSE school in Lucknow"',
                '"Top real estate developers near me"',
                '"Leading digital marketing agency for healthcare"'
              ].map((query) => (
                <span
                  key={query}
                  className="text-[11px] sm:text-xs font-mono text-[#9A9DA7] bg-white/[0.03] border border-white/10 px-3 py-1 rounded-full italic"
                >
                  {query}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE CORE IDEA */}
      <section className="gf-core-section py-20 px-6 lg:px-12 relative border-b border-white/10 bg-[#090B0E]/60 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div ref={coreGlowRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#FF3154]/10 rounded-full blur-[140px]" />
        </div>
        <div className="gf-core-box max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
            The Core Idea
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Being Online Isn't the Same as Being Found.
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#9A9DA7] leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
            <p>Having a website doesn't guarantee visibility.</p>
            <p>Your potential customer might search for a service, compare businesses, look for a local provider or ask an AI-powered search tool for recommendations.</p>
            <p>The opportunity is to make sure your business has useful, credible and clearly structured information wherever those discoveries happen.</p>
            <p className="text-white font-semibold pt-2">That's what our Get Found services are designed to do.</p>
          </div>
        </div>
      </section>

      {/* 3. THE FOUR AREAS */}
      <section className="py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Four Ways We Build Search Visibility
            </h2>
          </div>

          <div className="areas-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Area 1: SEO */}
            <div id="seo" className="area-card p-8 sm:p-10 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between hover:border-[#FF3154]/50 hover:-translate-y-1.5 transition-all duration-300 shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/15 text-[#FF3154] flex items-center justify-center">
                  <Search size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">SEO</h3>
                  <div className="text-sm font-semibold text-[#FF3154] mt-0.5">
                    Build visibility in organic search.
                  </div>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  SEO helps search engines understand your website and helps your content become discoverable for relevant searches.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">Our approach can include:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#9A9DA7]">
                    {[
                      'Technical SEO',
                      'On-page SEO',
                      'Keyword and search-intent research',
                      'Content optimisation',
                      'Internal linking',
                      'Website structure',
                      'Search performance analysis'
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
                  to="/lets-talk?intent=seo"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#FF3154] uppercase tracking-wider transition-colors"
                >
                  <span>Explore SEO</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Area 2: Local SEO */}
            <div id="local-seo" className="area-card p-8 sm:p-10 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between hover:border-[#E5B362]/50 hover:-translate-y-1.5 transition-all duration-300 shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E5B362]/15 text-[#E5B362] flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Local SEO</h3>
                  <div className="text-sm font-semibold text-[#E5B362] mt-0.5">
                    Be easier to find in your area.
                  </div>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  For businesses serving specific locations, local search visibility can influence whether potential customers discover you when looking for nearby services.
                </p>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">We focus on areas such as:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#9A9DA7]">
                    {[
                      'Local search visibility',
                      'Google Business Profile optimisation',
                      'Location-focused website content',
                      'Local landing pages',
                      'Reviews and reputation signals',
                      'Local search opportunities'
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
                  to="/lets-talk?intent=local-seo"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#E5B362] uppercase tracking-wider transition-colors"
                >
                  <span>Explore Local SEO</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Area 3: AEO */}
            <div id="aeo" className="area-card p-8 sm:p-10 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between hover:border-[#FF3154]/50 hover:-translate-y-1.5 transition-all duration-300 shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/15 text-[#FF3154] flex items-center justify-center">
                  <HelpCircle size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">AEO</h3>
                  <div className="text-sm font-semibold text-[#FF3154] mt-0.5">
                    Make your expertise easier to understand and answer.
                  </div>
                </div>
                <div className="space-y-2 text-sm text-[#9A9DA7] leading-relaxed">
                  <p>Answer Engine Optimization focuses on creating and structuring useful information around the questions people ask.</p>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs italic text-white/90">
                    Instead of only thinking: "What keyword should we rank for?" we also ask: "What question is the customer trying to answer?"
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">AEO can involve:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#9A9DA7]">
                    {[
                      'Question-led content',
                      'Clear answers',
                      'Structured information',
                      'Topic depth',
                      'Entity clarity',
                      'Internal linking',
                      'Supporting evidence and sources'
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
                  to="/lets-talk?intent=aeo"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#FF3154] uppercase tracking-wider transition-colors"
                >
                  <span>Explore AEO</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Area 4: AI Search */}
            <div id="ai-search" className="area-card p-8 sm:p-10 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between hover:border-[#E5B362]/50 hover:-translate-y-1.5 transition-all duration-300 shadow-xl">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E5B362]/15 text-[#E5B362] flex items-center justify-center">
                  <Cpu size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">AI Search</h3>
                  <div className="text-sm font-semibold text-[#E5B362] mt-0.5">
                    Prepare your digital presence for AI-powered discovery.
                  </div>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Search experiences are increasingly using AI to interpret questions and organise information from multiple sources. We help businesses strengthen the digital signals that make their business, expertise, services and information easier for search systems to understand.
                </p>

                <div className="p-3.5 rounded-xl bg-[#E5B362]/10 border border-[#E5B362]/20 text-xs text-white font-medium">
                  That means combining: SEO + useful content + clear information + strong digital presence rather than chasing shortcuts.
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <Link
                  to="/lets-talk?intent=ai-search"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#E5B362] uppercase tracking-wider transition-colors"
                >
                  <span>Explore AI Search</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. IMPORTANT DIFFERENTIATOR */}
      <section className="py-20 px-6 lg:px-12 relative bg-[#090B0E]/60 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
            Honest Perspective
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            We Don't Promise to "Make AI Recommend You."
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#9A9DA7] leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
            <p>No agency can control what an AI system chooses to show for every query.</p>
            <p>What we can do is improve the quality, clarity, structure and discoverability of the information about your business across the web.</p>
            
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 my-4 text-left space-y-3 shadow-lg">
              <div className="text-xs font-mono uppercase text-[#FF3154] font-bold">That means building the fundamentals that matter:</div>
              <ul className="space-y-1.5 text-sm text-white/90">
                <li className="flex items-center gap-2"><span>●</span> Useful content.</li>
                <li className="flex items-center gap-2"><span>●</span> Clear answers.</li>
                <li className="flex items-center gap-2"><span>●</span> Strong website structure.</li>
                <li className="flex items-center gap-2"><span>●</span> Relevant search visibility.</li>
                <li className="flex items-center gap-2"><span>●</span> Consistent business information.</li>
              </ul>
            </div>

            <p className="font-semibold text-white">
              The goal isn't to game an answer engine. It's to become a useful, credible source of information.
            </p>
          </div>
        </div>
      </section>

      {/* 5. SEO + AEO + AI SEARCH */}
      <section className="py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <div className="space-y-4">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
              Search Convergence
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              SEO Isn't Dead. Search Is Evolving.
            </h2>
            <div className="space-y-3 text-base sm:text-lg text-[#9A9DA7] max-w-2xl mx-auto">
              <p>AI search doesn't mean traditional SEO suddenly becomes irrelevant.</p>
              <p>Google's current documentation continues to emphasise established SEO fundamentals alongside guidance for its generative AI search experiences. <span className="text-xs text-white/60 font-mono">(Google Developers)</span></p>
              <p className="text-white font-medium">So instead of treating SEO, AEO and AI Search as three completely separate worlds, we look at how they work together.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4 text-left">
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2 hover:border-[#FF3154]/40 hover:-translate-y-1 transition-all">
              <h3 className="text-lg font-black text-white">SEO</h3>
              <p className="text-xs text-[#9A9DA7]">Helps search engines discover and understand your content.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2 hover:border-[#FF3154]/40 hover:-translate-y-1 transition-all">
              <h3 className="text-lg font-black text-white">AEO</h3>
              <p className="text-xs text-[#9A9DA7]">Makes information easier to understand in answer-driven searches.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2 hover:border-[#FF3154]/40 hover:-translate-y-1 transition-all">
              <h3 className="text-lg font-black text-white">AI Search</h3>
              <p className="text-xs text-[#9A9DA7]">Creates new ways for people to discover information and businesses.</p>
            </div>
          </div>

          <div className="text-sm font-mono font-bold text-[#FF3154] pt-2">
            ↓ One stronger digital presence
          </div>
        </div>
      </section>

      {/* 6. WHAT WE ACTUALLY OPTIMISE */}
      <section className="py-24 px-6 lg:px-12 relative bg-[#090B0E]/60 border-b border-white/10">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
              Beyond Keywords
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              It's More Than Keywords.
            </h2>
            <p className="text-base sm:text-lg text-[#9A9DA7]">
              Modern search visibility depends on more than placing keywords on a webpage.
            </p>
          </div>

          <div className="optimise-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="optimise-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2 hover:border-[#FF3154]/40 hover:-translate-y-1 transition-all">
              <h3 className="text-lg font-bold text-white">Content</h3>
              <p className="text-sm text-[#9A9DA7]">Is your website answering the questions your audience actually has?</p>
            </div>

            <div className="optimise-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2 hover:border-[#E5B362]/40 hover:-translate-y-1 transition-all">
              <h3 className="text-lg font-bold text-white">Structure</h3>
              <p className="text-sm text-[#9A9DA7]">Can search systems clearly understand your pages, services and relationships?</p>
            </div>

            <div className="optimise-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2 hover:border-[#FF3154]/40 hover:-translate-y-1 transition-all">
              <h3 className="text-lg font-bold text-white">Context</h3>
              <p className="text-sm text-[#9A9DA7]">Does your website establish what your business does, who it serves and where it operates?</p>
            </div>

            <div className="optimise-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2 hover:border-[#E5B362]/40 hover:-translate-y-1 transition-all">
              <h3 className="text-lg font-bold text-white">Authority</h3>
              <p className="text-sm text-[#9A9DA7]">Are there credible signals supporting your expertise and reputation?</p>
            </div>

            <div className="optimise-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2 hover:border-[#FF3154]/40 hover:-translate-y-1 transition-all">
              <h3 className="text-lg font-bold text-white">Experience</h3>
              <p className="text-sm text-[#9A9DA7]">Does the website provide a useful experience once someone finds it?</p>
            </div>

            <div className="optimise-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2 hover:border-[#E5B362]/40 hover:-translate-y-1 transition-all">
              <h3 className="text-lg font-bold text-white">Connections</h3>
              <p className="text-sm text-[#9A9DA7]">Are your important pages, topics and services logically connected through internal linking and other relevant signals?</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SEARCH JOURNEY */}
      <section className="journey-section py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-5xl mx-auto space-y-12 text-center">
          <div className="space-y-3 max-w-2xl mx-auto">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
              End-to-End Pathway
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              From Question to Customer
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 max-w-5xl mx-auto text-center">
            <div className="journey-step p-4 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1.5 hover:border-[#FF3154]/50 hover:-translate-y-1 transition-all">
              <div className="text-xs font-mono font-bold text-[#FF3154]">ASK</div>
              <div className="text-xs text-white italic">"Best coaching centre near me?"</div>
            </div>

            <div className="journey-step p-4 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1.5 hover:border-[#E5B362]/50 hover:-translate-y-1 transition-all">
              <div className="text-xs font-mono font-bold text-[#E5B362]">DISCOVER</div>
              <div className="text-xs text-[#9A9DA7]">Google / Maps / Search / AI</div>
            </div>

            <div className="journey-step p-4 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1.5 hover:border-[#FF3154]/50 hover:-translate-y-1 transition-all">
              <div className="text-xs font-mono font-bold text-[#FF3154]">EXPLORE</div>
              <div className="text-xs text-[#9A9DA7]">Website / Reviews / Content</div>
            </div>

            <div className="journey-step p-4 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1.5 hover:border-[#E5B362]/50 hover:-translate-y-1 transition-all">
              <div className="text-xs font-mono font-bold text-[#E5B362]">COMPARE</div>
              <div className="text-xs text-[#9A9DA7]">Services / Expertise / Trust</div>
            </div>

            <div className="journey-step p-4 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1.5 hover:border-[#FF3154]/50 hover:-translate-y-1 transition-all">
              <div className="text-xs font-mono font-bold text-[#FF3154]">ACT</div>
              <div className="text-xs text-white font-semibold">Enquiry / Call / Booking</div>
            </div>
          </div>

          <div className="space-y-4 pt-4">
            <p className="text-base sm:text-lg text-[#9A9DA7]">
              Getting found is only the first step. The rest of the journey has to work too.
            </p>
            <Link
              to="/get-customers"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#FF3154] hover:text-white uppercase tracking-wider transition-colors hover:scale-105"
            >
              <span>Get Customers</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. WHO NEEDS GET FOUND? */}
      <section className="py-24 px-6 lg:px-12 relative bg-[#090B0E]/60 border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-8 text-center">
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
              Relevance
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Get Found Is Especially Valuable When Search Influences the Sale.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#9A9DA7] max-w-2xl mx-auto">
            If potential customers research a business before making contact, search visibility can play an important role in growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left max-w-3xl mx-auto">
            {[
              'Search for a service',
              'Compare providers',
              'Look for local businesses',
              'Research expertise',
              'Ask questions before buying',
              'Need information before making an enquiry'
            ].map((item) => (
              <div key={item} className="p-4 rounded-xl bg-[#0D1014] border border-white/10 flex items-center gap-2.5 hover:border-white/20 transition-colors">
                <span className="text-[#FF3154]">✔</span>
                <span className="text-xs font-medium text-white">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
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

      {/* 9. QUESTIONS BUSINESS OWNERS ACTUALLY ASK */}
      <section className="py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase mb-2">
              AEO &amp; Search Knowledge
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Questions Businesses Ask About Search Visibility
            </h2>
          </div>

          <FaqSection items={getFoundFaqs} />
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="gf-cta-section py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#0D1014] to-[#151921] border border-white/15 relative overflow-hidden shadow-2xl">
          <div ref={ctaGlowRef} className="absolute top-0 right-1/4 w-72 h-72 bg-[#FF3154]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              How Easily Can Customers Find You?
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#9A9DA7] leading-relaxed">
              We'll look at your current search visibility, website structure and opportunities across organic, local and AI-powered search.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <MagneticButton
                href="/lets-talk?intent=audit"
                variant="primary"
                size="lg"
                className="shadow-[0_0_25px_rgba(255,49,84,0.45)] hover:scale-105 transition-transform"
              >
                GET A FREE SEARCH AUDIT
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
