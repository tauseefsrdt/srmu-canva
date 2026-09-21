import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MapPin, 
  Cpu, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  Database,
  HelpCircle,
} from 'lucide-react';
import gsap from 'gsap';
import { MagneticButton } from '../components/MagneticButton';
import { FaqSection, FaqItem } from '../components/FaqSection';
import { isReducedMotion } from '../utils/animations';

export const GetFound: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        '.gf-header-content',
        { opacity: 0, y: 35, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, ease: 'power3.out', clearProps: 'all' }
      );

      // Pillars stagger
      gsap.fromTo(
        '.gf-area-card',
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
            trigger: '.gf-areas-section',
            start: 'top 85%',
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
      answer: "Yes, SEO fundamentals remain relevant to Google's AI-powered search experiences. Google specifically advises site owners to continue following its established SEO best practices while creating useful, original content.",
      source: "Google Developers"
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
    <div ref={containerRef} className="w-full pt-32 pb-20">
      {/* 1. HERO */}
      <section className="relative py-12 md:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FF3154]/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 space-y-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#9A9DA7]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/30" />
            <Link to="/what-we-do" className="hover:text-white transition-colors">What We Do</Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-[#FF3154]">Get Found</span>
          </nav>

          <div className="gf-header-content space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#FF3154]">
              <Search size={14} />
              PILLAR 01 • SEARCH & AI VISIBILITY
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
              Get Found Where Your Customers <br />
              <span className="text-gradient-brand">Are Searching.</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#9A9DA7] leading-relaxed">
              Search is changing. People still use Google to find businesses, but they're increasingly asking questions and discovering information through AI-powered search experiences too.
            </p>
            <p className="text-sm text-[#9A9DA7]">
              SRMUCANVAS helps businesses build visibility across traditional search, local search and AI-powered search through SEO, Local SEO, AEO and AI Search optimisation.
            </p>
          </div>

          {/* Search Flow Journey */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono font-bold text-white/80 py-2 overflow-x-auto no-scrollbar">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Google Search</span>
            <span className="text-[#FF3154]">→</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Google Maps</span>
            <span className="text-[#FF3154]">→</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">AI Search (AEO)</span>
            <span className="text-[#FF3154]">→</span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Website</span>
            <span className="text-[#FF3154]">→</span>
            <span className="px-3 py-1 rounded-full bg-[#FF3154] text-white font-bold">Enquiry</span>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <MagneticButton to="/lets-talk" variant="primary" className="!px-7 !py-3.5 !text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(255,49,84,0.4)]">
              <span>Get a Free Search Audit</span>
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton to="/lets-talk" variant="secondary" className="!px-6 !py-3.5 !text-xs uppercase tracking-wider">
              <span>Let's Talk →</span>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 2. THE CORE IDEA: Being Online Isn't the Same as Being Found */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
            THE VISIBILITY GAP
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Being Online Isn't the Same as Being Found.
          </h2>
          <p className="text-base md:text-lg text-[#9A9DA7] leading-relaxed">
            Having a website doesn't guarantee visibility. Your potential customer might search for a service, compare businesses, look for a local provider or ask an AI-powered search tool for recommendations.
          </p>
          <p className="text-sm md:text-base text-[#9A9DA7] leading-relaxed">
            The opportunity is to make sure your business has useful, credible and clearly structured information wherever those discoveries happen. That's what our Get Found services are designed to do.
          </p>
        </div>
      </section>

      {/* 3. FOUR WAYS WE BUILD SEARCH VISIBILITY */}
      <section className="py-20 border-t border-white/10 bg-[#080A0E]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              CORE SERVICES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Four Ways We Build Search Visibility
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1. SEO */}
            <div className="p-8 md:p-10 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/10 text-[#FF3154] flex items-center justify-center">
                  <Search size={24} />
                </div>
                <span className="font-mono text-xs text-[#FF3154] font-bold">01 / ORGANIC</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white">SEO</h3>
                <p className="text-xs font-mono text-[#28D7FF]">Build visibility in organic search.</p>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  SEO helps search engines understand your website and helps your content become discoverable for relevant searches.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#9A9DA7] pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3154]" /> Technical SEO & Crawlability</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3154]" /> On-page SEO & Heading Hierarchy</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3154]" /> Keyword & Search-intent Research</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF3154]" /> Internal Linking & Semantic Architecture</li>
              </ul>
            </div>

            {/* 2. Local SEO */}
            <div className="p-8 md:p-10 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#FF7A18]/10 text-[#FF7A18] flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <span className="font-mono text-xs text-[#FF7A18] font-bold">02 / LOCAL</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white">Local SEO</h3>
                <p className="text-xs font-mono text-[#FF7A18]">Be easier to find in your area.</p>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  For businesses serving specific locations, local search visibility influences whether potential customers discover you nearby.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#9A9DA7] pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF7A18]" /> Google Business Profile (GBP) Optimisation</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF7A18]" /> Location-focused Website Landing Pages</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF7A18]" /> Reviews & Local Reputation Signals</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#FF7A18]" /> Map Pack Rankings & Local Citations</li>
              </ul>
            </div>

            {/* 3. AEO */}
            <div className="p-8 md:p-10 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#8B3DFF]/10 text-[#8B3DFF] flex items-center justify-center">
                  <HelpCircle size={24} />
                </div>
                <span className="font-mono text-xs text-[#8B3DFF] font-bold">03 / ANSWER ENGINE</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white">AEO (Answer Engine Optimization)</h3>
                <p className="text-xs font-mono text-[#8B3DFF]">Make your expertise easier to understand and answer.</p>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Focuses on creating and structuring useful information around the questions people ask instead of only chasing keywords.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#9A9DA7] pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#8B3DFF]" /> Question-led Content Architecture</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#8B3DFF]" /> Clear Answers & Structured Schema Markup</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#8B3DFF]" /> Topic Depth & Entity Recognition</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#8B3DFF]" /> Supporting Evidence & Trust Sources</li>
              </ul>
            </div>

            {/* 4. AI Search */}
            <div className="p-8 md:p-10 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#28D7FF]/10 text-[#28D7FF] flex items-center justify-center">
                  <Cpu size={24} />
                </div>
                <span className="font-mono text-xs text-[#28D7FF] font-bold">04 / AI DISCOVERY</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white">AI Search</h3>
                <p className="text-xs font-mono text-[#28D7FF]">Prepare your digital presence for AI-powered discovery.</p>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Strengthen the digital signals that make your business, expertise, and services easy for AI-powered search engines to interpret.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#9A9DA7] pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#28D7FF]" /> Generative Search Integration</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#28D7FF]" /> Comprehensive Brand Entity Signals</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#28D7FF]" /> High-Quality Original Authority Content</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#28D7FF]" /> Semantic Web Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. IMPORTANT DIFFERENTIATOR: We Don't Promise to "Make AI Recommend You." */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#151920] to-[#0D1014] border border-white/15 space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              HONEST POSITIONING
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              We Don't Promise to "Make AI Recommend You."
            </h2>
            <p className="text-base text-[#9A9DA7] leading-relaxed">
              No agency can control what an AI system chooses to show for every query. What we can do is improve the quality, clarity, structure and discoverability of the information about your business across the web.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs font-semibold text-white">Useful content</div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs font-semibold text-white">Clear answers</div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs font-semibold text-white">Strong website structure</div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs font-semibold text-white">Relevant search visibility</div>
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-xs font-semibold text-white col-span-2 sm:col-span-1">Consistent business info</div>
            </div>
            <p className="text-xs font-mono text-[#28D7FF] pt-2">
              The goal isn't to game an answer engine. It's to become a useful, credible source of information.
            </p>
          </div>
        </div>
      </section>

      {/* 5. SEO + AEO + AI SEARCH: SEO Isn't Dead. Search Is Evolving. */}
      <section className="py-20 border-t border-white/10 bg-[#080A0E]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 text-center space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            SEO Isn't Dead. Search Is Evolving.
          </h2>
          <p className="text-base text-[#9A9DA7] max-w-2xl mx-auto">
            AI search doesn't mean traditional SEO becomes irrelevant. Google's current documentation continues to emphasise established SEO fundamentals alongside guidance for generative AI search.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 text-left space-y-2">
              <span className="font-mono text-xs text-[#FF3154] font-bold">SEO</span>
              <p className="text-xs text-[#9A9DA7]">Helps search engines discover and understand your content.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 text-left space-y-2">
              <span className="font-mono text-xs text-[#8B3DFF] font-bold">AEO</span>
              <p className="text-xs text-[#9A9DA7]">Makes information easier to understand in answer-driven searches.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 text-left space-y-2">
              <span className="font-mono text-xs text-[#28D7FF] font-bold">AI SEARCH</span>
              <p className="text-xs text-[#9A9DA7]">Creates new ways for people to discover information and businesses.</p>
            </div>
          </div>
          <div className="font-mono text-xs text-[#FF3154] font-bold uppercase tracking-widest pt-2">
            = ONE STRONGER DIGITAL PRESENCE
          </div>
        </div>
      </section>

      {/* 6. WHAT WE ACTUALLY OPTIMISE: It's More Than Keywords */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              TECHNICAL DEPTH
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              It's More Than Keywords.
            </h2>
            <p className="text-base text-[#9A9DA7]">
              Modern search visibility depends on more than placing keywords on a webpage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Content', desc: 'Is your website answering the questions your audience actually has?' },
              { title: 'Structure', desc: 'Can search systems clearly understand your pages, services and relationships?' },
              { title: 'Context', desc: 'Does your website establish what your business does, who it serves and where it operates?' },
              { title: 'Authority', desc: 'Are there credible signals supporting your expertise and reputation?' },
              { title: 'Experience', desc: 'Does the website provide a fast, useful experience once someone finds it?' },
              { title: 'Connections', desc: 'Are your important pages connected through logical internal linking & signals?' },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-[#9A9DA7] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SEARCH JOURNEY: From Question to Customer */}
      <section className="py-20 border-t border-white/10 bg-[#080A0E]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              SEARCH JOURNEY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              From Question to Customer
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#FF3154] font-bold">01. ASK</span>
              <p className="text-xs text-[#9A9DA7]">"Best service near me?"</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#FF7A18] font-bold">02. DISCOVER</span>
              <p className="text-xs text-[#9A9DA7]">Google / Maps / AI</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#8B3DFF] font-bold">03. EXPLORE</span>
              <p className="text-xs text-[#9A9DA7]">Website & Reviews</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#28D7FF] font-bold">04. COMPARE</span>
              <p className="text-xs text-[#9A9DA7]">Expertise & Proof</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#FF3154] font-bold">05. ACT</span>
              <p className="text-xs text-white font-bold">Enquiry / Call</p>
            </div>
          </div>

          <div className="text-center pt-4">
            <Link to="/get-customers" className="text-xs font-mono font-bold uppercase text-[#FF3154] hover:text-white flex items-center justify-center gap-2">
              <span>Next Step: Get Customers →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <FaqSection 
        title="Questions Businesses Ask About Search Visibility"
        faqs={getFoundFaqs}
        ctaText="How easily can customers find you? Get a Free Search Audit →"
        ctaLink="/lets-talk"
      />

      {/* 9. FINAL CTA */}
      <section className="py-20 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            How Easily Can Customers Find You?
          </h2>
          <p className="text-base text-[#9A9DA7]">
            We'll look at your current search visibility, website structure and opportunities across organic, local and AI-powered search.
          </p>
          <div className="pt-2">
            <MagneticButton to="/lets-talk" variant="primary" className="!px-8 !py-4 !text-xs uppercase tracking-wider">
              <span>Get a Free Search Audit</span>
              <ArrowRight size={16} />
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};
