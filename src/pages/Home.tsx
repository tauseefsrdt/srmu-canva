import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
   Search, 
   TrendingUp, 
   Sparkles, 
   ArrowRight, 
   Target,
   Users,
   GraduationCap,
   Stethoscope,
   Building2,
   Briefcase,
   Hotel,
   Factory,
   CheckCircle2,
   Quote
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from '../components/Hero';
import { FaqSection, FaqItem } from '../components/FaqSection';
import { MagneticButton } from '../components/MagneticButton';
import { isReducedMotion, createParallax } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

export const Home: React.FC = () => {
  const homeContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isReducedMotion() || !homeContainerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Entity / Intro Section Reveal
      gsap.fromTo(
        '.entity-card',
        { opacity: 0, y: 45, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.0,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.entity-section',
            start: 'top 85%',
          },
        }
      );

      // 2. Pillars Staggered Entrance
      gsap.fromTo(
        '.pillar-card',
        { opacity: 0, y: 50, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.15,
          duration: 0.9,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '#three-core-areas',
            start: 'top 80%',
          },
        }
      );

      // 3. Philosophy Section Reveal
      gsap.fromTo(
        '.philosophy-heading',
        { opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          scale: 1,
          duration: 1.0,
          ease: 'power4.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.philosophy-section',
            start: 'top 82%',
          },
        }
      );

      createParallax('.philosophy-bg-glow', '.philosophy-section', { yPercent: -20 });

      // 4. Different by Design Cards Stagger
      gsap.fromTo(
        '.diff-card',
        { opacity: 0, y: 45, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.12,
          duration: 0.85,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.diff-section',
            start: 'top 82%',
          },
        }
      );

      // 5. Target Sectors Staggered Grid Reveal
      gsap.fromTo(
        '.sector-item',
        { opacity: 0, scale: 0.85, y: 25 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.sectors-section',
            start: 'top 85%',
          },
        }
      );

      // 6. Proof Case Studies Reveal
      gsap.fromTo(
        '.proof-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.85,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.proof-section',
            start: 'top 82%',
          },
        }
      );

      // 7. Final CTA Scale & Glow
      gsap.fromTo(
        '.cta-box',
        { opacity: 0, scale: 0.92, y: 40, filter: 'blur(6px)' },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.0,
          ease: 'power4.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.final-cta-section',
            start: 'top 82%',
          },
        }
      );
    }, homeContainerRef);

    return () => ctx.revert();
  }, []);

  // Section 8 Home FAQs from DOCX
  const homeFaqs: FaqItem[] = [
    {
      question: "What does a digital marketing agency actually do?",
      answer: "A digital marketing agency helps businesses attract and convert customers through channels such as search engines, paid advertising, websites, social platforms and other digital channels. The right mix depends on the business, audience, goals and customer journey."
    },
    {
      question: "Should my business invest in SEO or Google Ads?",
      answer: "SEO and Google Ads solve different problems. SEO builds organic visibility over time, while Google Ads can put your business in front of relevant searchers immediately. Many businesses can benefit from using both, depending on their goals and budget."
    },
    {
      question: "Is SEO still important with AI search?",
      answer: "Yes. AI-powered search experiences still rely on information available across the web, and Google's current guidance continues to emphasise strong SEO fundamentals alongside useful, original content for its generative AI search experiences.",
      source: "Google Developers"
    },
    {
      question: "What is AEO and how is it different from SEO?",
      answer: "SEO focuses primarily on helping content perform in search engines. AEO, or Answer Engine Optimization, focuses on making information clear, structured and useful for systems that provide direct answers to user questions. The two overlap significantly, and strong SEO fundamentals remain important."
    },
    {
      question: "Why are my digital ads getting clicks but not enough enquiries?",
      answer: "Clicks are only one part of the customer journey. Poor conversion can come from targeting, the offer, ad messaging, landing page experience, lead form friction, follow-up or the quality of traffic. Effective lead generation looks at the entire journey rather than clicks alone."
    },
    {
      question: "How do I know which digital marketing services my business actually needs?",
      answer: "There is no universal mix. The right approach depends on how customers find you, your sales cycle, geographic reach, customer value, competition and business goals. A business may need SEO, paid advertising, creative, landing pages or a combination."
    }
  ];

  return (
    <div ref={homeContainerRef} className="w-full">
      {/* 1. HERO */}
      <Hero />

      {/* 2. ENTITY / INTRODUCTION: Meet Redcanvass */}
      <section className="entity-section py-20 md:py-28 relative border-t border-white/10 bg-[#050608]">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="entity-card p-8 md:p-14 rounded-3xl bg-[#0D1014] border border-white/10 relative overflow-hidden shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF3154] animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
                ENTITY / INTRODUCTION
              </span>
            </div>

            <h2 className="entity-title text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Meet Redcanvass
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-white font-medium leading-relaxed max-w-4xl">
              Redcanvass is a digital marketing agency focused on helping businesses become more visible, attract the right audiences and turn digital attention into meaningful enquiries.
            </p>

            <p className="text-sm sm:text-base text-[#9A9DA7] leading-relaxed max-w-4xl">
              Our work brings together performance marketing, search visibility, AI search optimisation and creative — because getting noticed is only useful when it helps move the business forward.
            </p>

            <div className="pt-3 flex items-center gap-2 text-xs font-mono text-[#28D7FF]">
              <span>STRUCTURED FOR SEARCH & AEO EXCELLENCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE THREE CORE AREAS */}
      <section id="three-core-areas" className="py-20 md:py-32 relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF3154]">
              THREE CORE OUTCOMES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              How We Help Businesses Grow
            </h2>
            <p className="text-base text-[#9A9DA7] leading-relaxed">
              Digital marketing works best when visibility, acquisition and conversion work together. We organise what we do around three simple outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Get Found */}
            <div className="pillar-card p-8 md:p-10 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#FF3154]/40 transition-all duration-300 space-y-6 flex flex-col justify-between group shadow-card">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#FF3154]/10 border border-[#FF3154]/30 flex items-center justify-center text-[#FF3154] group-hover:bg-[#FF3154] group-hover:text-white transition-colors">
                  <Search size={26} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF3154] block mb-1">
                    PILLAR 01
                  </span>
                  <h3 className="text-2xl font-black text-white group-hover:text-gradient-brand transition-all">
                    Get Found
                  </h3>
                </div>
                <div className="text-xs font-mono text-[#28D7FF] font-semibold">
                  SEO · Local SEO · AI Search · AEO
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Help potential customers discover your business across traditional search and emerging AI-powered search experiences.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <Link
                  to="/get-found"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white group-hover:text-[#FF3154] transition-colors"
                >
                  <span>Explore Get Found →</span>
                </Link>
              </div>
            </div>

            {/* Pillar 2: Get Customers */}
            <div className="pillar-card p-8 md:p-10 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#8B3DFF]/40 transition-all duration-300 space-y-6 flex flex-col justify-between group shadow-card">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#8B3DFF]/10 border border-[#8B3DFF]/30 flex items-center justify-center text-[#8B3DFF] group-hover:bg-[#8B3DFF] group-hover:text-white transition-colors">
                  <TrendingUp size={26} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#8B3DFF] block mb-1">
                    PILLAR 02
                  </span>
                  <h3 className="text-2xl font-black text-white group-hover:text-gradient-brand transition-all">
                    Get Customers
                  </h3>
                </div>
                <div className="text-xs font-mono text-[#8B3DFF] font-semibold">
                  Google Ads · Meta Ads · YouTube · Lead Generation · Remarketing
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Put your business in front of relevant audiences and turn digital attention into enquiries and opportunities.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <Link
                  to="/get-customers"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white group-hover:text-[#FF3154] transition-colors"
                >
                  <span>Explore Get Customers →</span>
                </Link>
              </div>
            </div>

            {/* Pillar 3: Get Remembered */}
            <div className="pillar-card p-8 md:p-10 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#28D7FF]/40 transition-all duration-300 space-y-6 flex flex-col justify-between group shadow-card">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#28D7FF]/10 border border-[#28D7FF]/30 flex items-center justify-center text-[#28D7FF] group-hover:bg-[#28D7FF] group-hover:text-white transition-colors">
                  <Sparkles size={26} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#28D7FF] block mb-1">
                    PILLAR 03
                  </span>
                  <h3 className="text-2xl font-black text-white group-hover:text-gradient-brand transition-all">
                    Get Remembered
                  </h3>
                </div>
                <div className="text-xs font-mono text-[#FF7A18] font-semibold">
                  Ad Creatives · Landing Pages · Campaign Design · Flyers & Posters
                </div>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Give your campaigns the creative and conversion assets they need to communicate clearly and make an impact.
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <Link
                  to="/get-remembered"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white group-hover:text-[#FF3154] transition-colors"
                >
                  <span>Explore Get Remembered →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE REDCANVASS PHILOSOPHY */}
      <section className="philosophy-section py-20 md:py-28 relative border-t border-white/10 bg-[#080A0E] overflow-hidden">
        <div className="philosophy-bg-glow absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#FF3154]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center space-y-6 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF3154]">
            THE REDCANVASS PHILOSOPHY
          </span>
          <h2 className="philosophy-heading text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            We’re Not Here to Make Your Marketing Look Busy. <br />
            <span className="text-gradient-brand">We’re Here to Make It Work.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9A9DA7] max-w-3xl mx-auto leading-relaxed">
            More posts don't automatically mean more business. More clicks don't automatically mean more customers. We look at the bigger picture — where people discover you, what makes them click, what happens when they arrive and what turns attention into action.
          </p>
          <p className="text-sm text-white/80 max-w-2xl mx-auto">
            Our approach is built around the things that can actually move a business forward: visibility, qualified traffic, enquiries and conversion.
          </p>
        </div>
      </section>

      {/* 5. WHAT MAKES REDCANVASS DIFFERENT */}
      <section className="diff-section py-20 md:py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF3154]">
              DIFFERENT BY DESIGN
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Different by Design.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="diff-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/10 border border-[#FF3154]/30 flex items-center justify-center text-[#FF3154]">
                <Target size={22} />
              </div>
              <h3 className="text-xl font-black text-white">Performance First</h3>
              <p className="text-sm text-[#9A9DA7] leading-relaxed">
                We focus on marketing activity that can be measured, tested and improved.
              </p>
            </div>

            <div className="diff-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#8B3DFF]/10 border border-[#8B3DFF]/30 flex items-center justify-center text-[#8B3DFF]">
                <Search size={22} />
              </div>
              <h3 className="text-xl font-black text-white">Search Ready</h3>
              <p className="text-sm text-[#9A9DA7] leading-relaxed">
                We build visibility across traditional search, local search and the evolving world of AI-powered search.
              </p>
            </div>

            <div className="diff-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#28D7FF]/10 border border-[#28D7FF]/30 flex items-center justify-center text-[#28D7FF]">
                <Users size={22} />
              </div>
              <h3 className="text-xl font-black text-white">Human Led</h3>
              <p className="text-sm text-[#9A9DA7] leading-relaxed">
                Strategy, creative and optimisation are handled by people who understand the business behind the campaign.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHO WE HELP */}
      <section className="sectors-section py-20 md:py-28 border-t border-white/10 bg-[#080A0E]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF3154]">
                WHO WE HELP
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Built for Businesses That Need to Be Found.
              </h2>
              <p className="text-base text-[#9A9DA7]">
                We work particularly well with businesses where digital visibility can lead to a real conversation, enquiry, appointment, admission or opportunity.
              </p>
            </div>

            <Link
              to="/who-we-help"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF3154] hover:text-white transition-colors"
            >
              <span>See Who We Help →</span>
            </Link>
          </div>

          {/* Education | Healthcare | Real Estate | Professional Services | Hospitality | B2B */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: GraduationCap, name: 'Education', href: '/who-we-help#education' },
              { icon: Stethoscope, name: 'Healthcare', href: '/who-we-help#healthcare' },
              { icon: Building2, name: 'Real Estate', href: '/who-we-help#real-estate' },
              { icon: Briefcase, name: 'Professional Services', href: '/who-we-help#professional-services' },
              { icon: Hotel, name: 'Hospitality', href: '/who-we-help#hospitality' },
              { icon: Factory, name: 'B2B', href: '/who-we-help#b2b' },
            ].map((ind) => {
              const Icon = ind.icon;
              return (
                <Link
                  key={ind.name}
                  to={ind.href}
                  className="sector-item p-6 rounded-2xl bg-[#0D1014] border border-white/10 hover:border-[#FF3154] hover:bg-[#151920] transition-all flex flex-col items-center text-center gap-3 group"
                >
                  <Icon size={24} className="text-[#9A9DA7] group-hover:text-[#FF3154] transition-colors" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    {ind.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. PROOF: Work That Has a Purpose */}
      <section className="proof-section py-20 md:py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF3154]">
              GENUINE OUTCOMES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Work That Has a Purpose.
            </h2>
            <p className="text-base text-[#9A9DA7]">
              Instead of generic claims, we focus on genuine client outcomes and the journey behind them.
            </p>
          </div>

          {/* 3 Case Study Breakdown Cards: The challenge, What we changed, What happened */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="proof-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-[#FF3154]/10 border border-[#FF3154]/30 text-[#FF3154] text-[10px] font-mono font-bold uppercase tracking-wider inline-block">
                  Higher Education Group
                </span>
                <h3 className="text-xl font-bold text-white">
                  Admission Enquiries & Regional Search Pack
                </h3>
                
                <div className="space-y-3 text-xs text-[#9A9DA7] pt-2">
                  <div>
                    <strong className="text-white block mb-0.5">The Challenge:</strong>
                    High cost-per-click on broad generic keywords with low form completions on mobile.
                  </div>
                  <div>
                    <strong className="text-white block mb-0.5">What We Changed:</strong>
                    Created targeted course-specific landing pages, restructured Google Ads search campaigns, and optimized Local Map Packs.
                  </div>
                  <div>
                    <strong className="text-[#28D7FF] font-bold block mb-0.5">What Happened:</strong>
                    Qualified admission enquiries increased by +72% while reducing wasted spend on irrelevant search terms.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-white/70">
                <CheckCircle2 size={14} className="text-[#FF3154]" />
                <span>Verified Education Case</span>
              </div>
            </div>

            <div className="proof-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-[#8B3DFF]/10 border border-[#8B3DFF]/30 text-[#8B3DFF] text-[10px] font-mono font-bold uppercase tracking-wider inline-block">
                  Multi-Speciality Healthcare
                </span>
                <h3 className="text-xl font-bold text-white">
                  Local Search Visibility & Consultation Appointments
                </h3>
                
                <div className="space-y-3 text-xs text-[#9A9DA7] pt-2">
                  <div>
                    <strong className="text-white block mb-0.5">The Challenge:</strong>
                    Clinic was virtually invisible in nearby geo-location searches for specialized treatments.
                  </div>
                  <div>
                    <strong className="text-white block mb-0.5">What We Changed:</strong>
                    Implemented structured Local SEO, Google Business Profile optimization, and question-based treatment pages (AEO).
                  </div>
                  <div>
                    <strong className="text-[#8B3DFF] font-bold block mb-0.5">What Happened:</strong>
                    Direct call and appointment requests from local search grew by +110% within 4 months.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-white/70">
                <CheckCircle2 size={14} className="text-[#8B3DFF]" />
                <span>Verified Healthcare Case</span>
              </div>
            </div>

            <div className="proof-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full bg-[#28D7FF]/10 border border-[#28D7FF]/30 text-[#28D7FF] text-[10px] font-mono font-bold uppercase tracking-wider inline-block">
                  Commercial Real Estate
                </span>
                <h3 className="text-xl font-bold text-white">
                  High-Value Buyer Leads & Ad Creative Testing
                </h3>
                
                <div className="space-y-3 text-xs text-[#9A9DA7] pt-2">
                  <div>
                    <strong className="text-white block mb-0.5">The Challenge:</strong>
                    Meta ad campaigns generated cheap volume but low qualification among actual property buyers.
                  </div>
                  <div>
                    <strong className="text-white block mb-0.5">What We Changed:</strong>
                    Redesigned high-intent ad creatives, added qualifying form questions, and built a dedicated project landing experience.
                  </div>
                  <div>
                    <strong className="text-[#28D7FF] font-bold block mb-0.5">What Happened:</strong>
                    Lead-to-site-visit conversion rate tripled with zero increase in total marketing budget.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-white/70">
                <CheckCircle2 size={14} className="text-[#28D7FF]" />
                <span>Verified Real Estate Case</span>
              </div>
            </div>
          </div>

          {/* Genuine Client Feedback */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-4 relative">
              <Quote size={28} className="text-[#FF3154]/40" />
              <p className="text-sm sm:text-base text-white/90 leading-relaxed italic">
                "Redcanvass cut through all the jargon and focused right away on what was stopping our website from generating admission calls. Their AEO and search structure gave us our most successful campaign year."
              </p>
              <div className="text-xs font-mono text-[#9A9DA7]">
                <strong className="text-white block">Academic Director</strong>
                Leading Educational Institution, North India
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-4 relative">
              <Quote size={28} className="text-[#8B3DFF]/40" />
              <p className="text-sm sm:text-base text-white/90 leading-relaxed italic">
                "We were burning budget on clicks that went nowhere. The Redcanvass team connected our Meta ads to dedicated landing pages that actually converted visitors into serious property inquiries."
              </p>
              <div className="text-xs font-mono text-[#9A9DA7]">
                <strong className="text-white block">Managing Partner</strong>
                Real Estate Development Firm
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. HOME FAQ / QUESTIONS BUSINESS OWNERS ASK */}
      <FaqSection 
        title="Questions Businesses Ask About Digital Marketing"
        faqs={homeFaqs}
        ctaText="Not sure what your business needs? Get a Free Audit →"
        ctaLink="/lets-talk"
      />

      {/* 9. FINAL CTA */}
      <section className="final-cta-section py-20 md:py-32 relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#FF3154]/20 rounded-full blur-[120px]" />
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#8B3DFF]/20 rounded-full blur-[120px]" />
        </div>

        <div className="cta-box max-w-5xl mx-auto px-6 md:px-10 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest bg-white/5 border border-white/10 text-[#FF3154]">
            <span>LET'S TALK BUSINESS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Ready to Make Your Digital Marketing <br />
            <span className="text-gradient-brand">Work Harder?</span>
          </h2>

          <p className="text-base sm:text-lg text-[#9A9DA7] max-w-2xl mx-auto leading-relaxed">
            Let's look at what's working, what's missing and where your biggest digital growth opportunities may be.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <MagneticButton
              to="/lets-talk"
              variant="primary"
              className="!px-8 !py-4 !text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(255,49,84,0.6)]"
            >
              <span>GET A FREE AUDIT</span>
              <ArrowRight size={16} />
            </MagneticButton>

            <MagneticButton
              to="/lets-talk"
              variant="secondary"
              className="!px-7 !py-4 !text-xs uppercase tracking-wider"
            >
              <span>LET'S TALK →</span>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};
