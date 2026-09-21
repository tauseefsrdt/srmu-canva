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
  HelpCircle,
  Layers,
  Globe
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

  // Section 9 DOCX FAQs
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
              <Sparkles size={14} />
              SEARCH, AEO & AI VISIBILITY
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
              Get Found Where Your <br />
              <span className="text-gradient-brand">Customers Are Searching.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white font-medium leading-relaxed">
              Search is changing. People still use Google to find businesses, but they're increasingly asking questions and discovering information through AI-powered search experiences too.
            </p>
            <p className="text-sm md:text-base text-[#9A9DA7] leading-relaxed">
              Redcanvass helps businesses build visibility across traditional search, local search and AI-powered search through SEO, Local SEO, AEO and AI Search optimisation.
            </p>
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

      {/* 2. THE CORE IDEA */}
      <section className="py-20 border-t border-white/10 bg-[#050608]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
            CORE TRUTH
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Being Online Isn't the Same as Being Found.
          </h2>
          <p className="text-base sm:text-lg text-[#9A9DA7] max-w-3xl mx-auto leading-relaxed">
            Having a website doesn't guarantee visibility. Your potential customer might search for a service, compare businesses, look for a local provider or ask an AI-powered search tool for recommendations.
          </p>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto leading-relaxed font-medium">
            The opportunity is to make sure your business has useful, credible and clearly structured information wherever those discoveries happen. That's what our Get Found services are designed to do.
          </p>
        </div>
      </section>

      {/* 3. THE FOUR AREAS */}
      <section className="gf-areas-section py-20 border-t border-white/10 bg-[#080A0E]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              SEARCH SERVICES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Four Ways We Build Search Visibility
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 1. SEO */}
            <div className="gf-area-card p-8 sm:p-10 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#FF3154]/40 transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/10 border border-[#FF3154]/30 flex items-center justify-center text-[#FF3154]">
                    <Search size={24} />
                  </div>
                  <span className="text-xs font-mono text-[#FF3154] font-bold">AREA 01</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">SEO</h3>
                  <p className="text-xs font-mono text-[#28D7FF] font-semibold mt-0.5">Build visibility in organic search.</p>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  SEO helps search engines understand your website and helps your content become discoverable for relevant searches.
                </p>
                <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-white/80">
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#FF3154]" /> Technical SEO and site architecture</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#FF3154]" /> On-page SEO and content optimisation</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#FF3154]" /> Keyword and search-intent research</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#FF3154]" /> Internal linking and structure</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#FF3154]" /> Search performance analysis</div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <Link to="/lets-talk" className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF3154] hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>Explore SEO →</span>
                </Link>
              </div>
            </div>

            {/* 2. Local SEO */}
            <div className="gf-area-card p-8 sm:p-10 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#8B3DFF]/40 transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#8B3DFF]/10 border border-[#8B3DFF]/30 flex items-center justify-center text-[#8B3DFF]">
                    <MapPin size={24} />
                  </div>
                  <span className="text-xs font-mono text-[#8B3DFF] font-bold">AREA 02</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Local SEO</h3>
                  <p className="text-xs font-mono text-[#8B3DFF] font-semibold mt-0.5">Be easier to find in your area.</p>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  For businesses serving specific locations, local search visibility can influence whether potential customers discover you when looking for nearby services.
                </p>
                <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-white/80">
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#8B3DFF]" /> Google Business Profile optimisation</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#8B3DFF]" /> Location-focused website content</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#8B3DFF]" /> Local landing pages where appropriate</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#8B3DFF]" /> Reviews and reputation signals</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#8B3DFF]" /> Local search opportunities</div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <Link to="/lets-talk" className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B3DFF] hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>Explore Local SEO →</span>
                </Link>
              </div>
            </div>

            {/* 3. AEO */}
            <div className="gf-area-card p-8 sm:p-10 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#28D7FF]/40 transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#28D7FF]/10 border border-[#28D7FF]/30 flex items-center justify-center text-[#28D7FF]">
                    <HelpCircle size={24} />
                  </div>
                  <span className="text-xs font-mono text-[#28D7FF] font-bold">AREA 03</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">AEO (Answer Engine Optimization)</h3>
                  <p className="text-xs font-mono text-[#28D7FF] font-semibold mt-0.5">Make your expertise easier to understand and answer.</p>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Answer Engine Optimization focuses on creating and structuring useful information around the questions people ask.
                </p>
                <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-white/80">
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#28D7FF]" /> Question-led content architecture</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#28D7FF]" /> Clear, structured answers to common customer questions</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#28D7FF]" /> Topic depth and entity clarity</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#28D7FF]" /> Supporting evidence and sources</div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <Link to="/lets-talk" className="text-xs font-mono font-bold uppercase tracking-wider text-[#28D7FF] hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>Explore AEO →</span>
                </Link>
              </div>
            </div>

            {/* 4. AI Search */}
            <div className="gf-area-card p-8 sm:p-10 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#FF7A18]/40 transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF7A18]/10 border border-[#FF7A18]/30 flex items-center justify-center text-[#FF7A18]">
                    <Cpu size={24} />
                  </div>
                  <span className="text-xs font-mono text-[#FF7A18] font-bold">AREA 04</span>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">AI Search</h3>
                  <p className="text-xs font-mono text-[#FF7A18] font-semibold mt-0.5">Prepare your digital presence for AI-powered discovery.</p>
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Search experiences are increasingly using AI to interpret questions and organise information from multiple sources. We help businesses strengthen the digital signals that make their business, expertise, services and information easier for search systems to understand.
                </p>
                <div className="space-y-2 pt-2 border-t border-white/5 text-xs text-white/80">
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#FF7A18]" /> SEO + useful content + clear information + strong digital presence</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#FF7A18]" /> Digital entity footprint and brand authority</div>
                  <div className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#FF7A18]" /> Search systems interpretation alignment</div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <Link to="/lets-talk" className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF7A18] hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>Explore AI Search →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. IMPORTANT DIFFERENTIATOR */}
      <section className="py-20 border-t border-white/10 bg-[#050608]">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
            HONEST POSITIONING
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            We Don't Promise to "Make AI Recommend You."
          </h2>
          <p className="text-base sm:text-lg text-[#9A9DA7] leading-relaxed">
            No agency can control what an AI system chooses to show for every query. What we can do is improve the quality, clarity, structure and discoverability of the information about your business across the web.
          </p>
          <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 font-mono text-xs sm:text-sm text-[#28D7FF] space-y-2 text-center">
            <div>Useful Content · Clear Answers · Strong Website Structure</div>
            <div>Relevant Search Visibility · Consistent Business Information</div>
          </div>
          <p className="text-sm text-white font-medium">
            The goal isn't to game an answer engine. It's to become a useful, credible source of information.
          </p>
        </div>
      </section>

      {/* 5. SEO + AEO + AI SEARCH */}
      <section className="py-20 bg-[#080A0E] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              SEARCH EVOLUTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              SEO Isn't Dead. Search Is Evolving.
            </h2>
          </div>
          <p className="text-base text-[#9A9DA7] max-w-3xl mx-auto leading-relaxed">
            AI search doesn't mean traditional SEO suddenly becomes irrelevant. Google's current documentation continues to emphasise established SEO fundamentals alongside guidance for its generative AI search experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#FF3154] font-bold">SEO</span>
              <p className="text-sm text-white">Helps search engines discover and understand your content.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#28D7FF] font-bold">AEO</span>
              <p className="text-sm text-white">Makes information easier to understand in answer-driven searches.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#8B3DFF] font-bold">AI SEARCH</span>
              <p className="text-sm text-white">Creates new ways for people to discover information and businesses.</p>
            </div>
          </div>
          <div className="text-xs font-mono text-white font-bold tracking-wider pt-2">
            Result: One stronger digital presence.
          </div>
        </div>
      </section>

      {/* 6. WHAT WE ACTUALLY OPTIMISE */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              DEPTH OF WORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              It's More Than Keywords.
            </h2>
            <p className="text-base text-[#9A9DA7]">
              Modern search visibility depends on more than placing keywords on a webpage.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-lg font-bold text-white">Content</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">Is your website answering the questions your audience actually has?</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-lg font-bold text-white">Structure</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">Can search systems clearly understand your pages, services and relationships?</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-lg font-bold text-white">Context</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">Does your website establish what your business does, who it serves and where it operates?</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-lg font-bold text-white">Authority</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">Are there credible signals supporting your expertise and reputation?</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-lg font-bold text-white">Experience</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">Does the website provide a useful experience once someone finds it?</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-lg font-bold text-white">Connections</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">Are your important pages, topics and services logically connected through internal linking and other relevant signals?</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SEARCH JOURNEY */}
      <section className="py-20 bg-[#080A0E] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              SEARCH JOURNEY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              From Question to Customer
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1">
              <span className="text-xs font-mono text-[#FF3154] font-bold">01 ASK</span>
              <p className="text-xs text-[#9A9DA7]">"Best service near me?"</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1">
              <span className="text-xs font-mono text-[#8B3DFF] font-bold">02 DISCOVER</span>
              <p className="text-xs text-[#9A9DA7]">Google / Maps / AI</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1">
              <span className="text-xs font-mono text-[#28D7FF] font-bold">03 EXPLORE</span>
              <p className="text-xs text-[#9A9DA7]">Website / Reviews / Content</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1">
              <span className="text-xs font-mono text-[#FF7A18] font-bold">04 COMPARE</span>
              <p className="text-xs text-[#9A9DA7]">Services / Expertise / Trust</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#0D1014] border border-white/10 space-y-1">
              <span className="text-xs font-mono text-[#FF3154] font-bold">05 ACT</span>
              <p className="text-xs text-[#9A9DA7]">Enquiry / Call / Booking</p>
            </div>
          </div>

          <div className="text-center pt-4">
            <p className="text-sm text-[#9A9DA7] mb-3">Getting found is only the first step. The rest of the journey has to work too.</p>
            <Link to="/get-customers" className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#FF3154] hover:text-white transition-colors">
              <span>Next: Explore Get Customers →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. WHO NEEDS GET FOUND? */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
            AUDIENCE FIT
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Get Found Is Especially Valuable When Search Influences the Sale.
          </h2>
          <p className="text-base text-[#9A9DA7] max-w-3xl mx-auto leading-relaxed">
            If potential customers research a business before making contact, search visibility can play an important role in growth.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white">Search for a service</span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white">Compare providers</span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white">Look for local businesses</span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white">Research expertise</span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white">Ask questions before buying</span>
          </div>
          <div className="pt-4">
            <Link to="/who-we-help" className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF3154] hover:text-white transition-colors">
              <span>See Who We Help →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. QUESTIONS BUSINESS OWNERS ACTUALLY ASK */}
      <FaqSection 
        title="Questions Businesses Ask About Search Visibility"
        faqs={getFoundFaqs}
        ctaText="Not sure where you stand in search? Get a Free Search Audit →"
        ctaLink="/lets-talk"
      />

      {/* 10. FINAL CTA */}
      <section className="py-20 md:py-28 text-center border-t border-white/10 bg-gradient-to-b from-[#050608] to-[#0A0D12]">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            How Easily Can Customers Find You?
          </h2>
          <p className="text-base sm:text-lg text-[#9A9DA7] max-w-2xl mx-auto leading-relaxed">
            We'll look at your current search visibility, website structure and opportunities across organic, local and AI-powered search.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <MagneticButton to="/lets-talk" variant="primary" className="!px-8 !py-4 !text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(255,49,84,0.5)]">
              <span>GET A FREE SEARCH AUDIT</span>
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
