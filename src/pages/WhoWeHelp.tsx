import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Stethoscope, 
  Building2, 
  Briefcase, 
  Hotel, 
  Factory, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle,
  Search,
  Users,
  Compass,
  FileText,
  UserCheck,
  MessageSquare
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaqSection, FaqItem } from '../components/FaqSection';
import { MagneticButton } from '../components/MagneticButton';
import { isReducedMotion, createParallax, createBackgroundParallax } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

export const WhoWeHelp: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const journeyGlowRef = useRef<HTMLDivElement>(null);
  const ctaGlowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Hero Entrance
      gsap.fromTo(
        '.wwh-hero-item',
        { opacity: 0, y: 30, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', stagger: 0.1, duration: 0.8, ease: 'power3.out' }
      );

      // Smooth background parallax (10-20% speed)
      if (glowRef.current && heroRef.current) {
        createBackgroundParallax(glowRef.current, heroRef.current, { speed: 0.18, scale: 1.15, direction: 'up' });
      }
      if (journeyGlowRef.current) {
        createBackgroundParallax(journeyGlowRef.current, '.wwh-journey-section', { speed: 0.14, scale: 1.2, direction: 'down' });
      }
      if (ctaGlowRef.current) {
        createBackgroundParallax(ctaGlowRef.current, '.wwh-cta-section', { speed: 0.16, scale: 1.25, direction: 'up' });
      }

      // 2. Industry Cards
      gsap.fromTo(
        '.industry-card',
        { opacity: 0, y: 35, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.industry-grid',
            start: 'top 80%',
          },
        }
      );

      // 3. Journey cards
      gsap.fromTo(
        '.wwh-journey-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.wwh-journey-grid',
            start: 'top 80%',
          },
        }
      );

      // 4. Problem to Solution cards
      gsap.fromTo(
        '.wwh-problem-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.wwh-problem-grid',
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const whoWeHelpFaqs: FaqItem[] = [
    {
      question: "Which digital marketing strategy is right for my business?",
      answer: "The right strategy depends on how customers discover and evaluate your business, your sales cycle, competition, geographic reach, customer value and business goals. There isn't a universal channel mix."
    },
    {
      question: "Is digital marketing effective for small businesses?",
      answer: "Digital marketing can help small businesses reach relevant audiences without relying exclusively on broad traditional advertising. Its effectiveness depends on the market, offer, targeting, competition, budget and ability to convert and follow up on enquiries."
    },
    {
      question: "What digital marketing works best for local businesses?",
      answer: "Local businesses may benefit from a combination of Local SEO, Google Business Profile optimisation, location-focused content, search advertising and conversion-focused website experiences. The appropriate mix depends on the type of business and how customers search."
    },
    {
      question: "What is the best way to generate leads for a service business?",
      answer: "Lead generation can come from organic search, paid search, social advertising, referrals and other channels. For many service businesses, the important part is connecting the right traffic with a clear offer, effective landing experience and reliable follow-up."
    },
    {
      question: "How can a school generate more admission enquiries online?",
      answer: "Schools and educational organisations can use a combination of search visibility, Google Ads, Meta advertising, lead-generation campaigns, location targeting and dedicated admission landing pages. The appropriate strategy depends on the school's location, audience, admissions cycle and capacity."
    },
    {
      question: "How can a clinic get more patients through Google?",
      answer: "Healthcare businesses can improve discoverability through Local SEO, Google Business Profile optimisation, relevant search visibility and appropriately targeted advertising, combined with clear service information and an easy enquiry or appointment process."
    },
    {
      question: "How can a real estate company generate better quality leads?",
      answer: "Lead quality can be influenced by targeting, property positioning, campaign messaging, qualification questions, landing-page experience and follow-up. Optimising purely for the lowest cost per lead can sometimes produce volume without sufficient quality."
    },
    {
      question: "Does SEO work for professional services?",
      answer: "SEO can be valuable for professional services where potential clients research expertise, services and providers online. Content that clearly addresses customer questions and demonstrates relevant expertise can support organic visibility and consideration."
    }
  ];

  return (
    <div ref={containerRef} className="relative w-full bg-[#050608] text-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[75vh] flex items-center justify-center pt-32 pb-20 px-6 lg:px-12 border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <div ref={glowRef} className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#FF3154]/15 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="wwh-hero-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-semibold text-[#FF3154] tracking-widest uppercase">
            Industry Solutions
          </div>

          <h1 className="wwh-hero-item text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-white">
            Digital Marketing for Businesses That Want to Grow.
          </h1>

          <div className="wwh-hero-item space-y-3 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#9A9DA7] leading-relaxed">
            <p>Different businesses have different customers, sales cycles and reasons people choose them.</p>
            <p>A school doesn't market like a real estate company. A clinic doesn't acquire customers like a B2B company.</p>
            <p className="text-white font-medium">We build the digital strategy around how your customers search, compare, enquire and decide.</p>
          </div>

          <div className="wwh-hero-item flex flex-wrap items-center justify-center gap-4 pt-4">
            <MagneticButton
              href="/lets-talk"
              variant="primary"
              size="lg"
              className="shadow-[0_0_25px_rgba(255,49,84,0.45)]"
            >
              Find Your Digital Growth Opportunity
            </MagneticButton>

            <Link
              to="/lets-talk?intent=audit"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold text-sm tracking-wider uppercase transition-all"
            >
              <span>Get a Free Audit</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="py-20 px-6 lg:px-12 relative border-b border-white/10 bg-[#090B0E]/60">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
            Custom Tailored Growth
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            We Don't Believe in One-Size-Fits-All Marketing.
          </h2>
          <div className="space-y-3 text-base sm:text-lg text-[#9A9DA7] leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
            <p>The right digital marketing mix depends on the business.</p>
            <p>Some businesses need to capture people who are already searching.</p>
            <p>Some need to create demand.</p>
            <p>Some need stronger local visibility.</p>
            <p>Some need better lead generation.</p>
            <p>And some have plenty of traffic but struggle to convert it.</p>
            <p className="text-white font-semibold pt-2">Our job is to understand the business first — then determine where search, advertising and creative can make the biggest difference.</p>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRIES / BUSINESS TYPES (6 SUBSTANTIAL CARDS) */}
      <section className="py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
              Target Sectors
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Businesses We Work With
            </h2>
          </div>

          <div className="industry-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Education */}
            <div id="education" className="industry-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/15 text-[#FF3154] flex items-center justify-center">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Education</h3>
                  <div className="text-sm font-semibold text-[#FF3154] mt-0.5">
                    Reach the right students and parents.
                  </div>
                </div>
                <p className="text-xs text-[#9A9DA7] leading-relaxed">
                  Digital marketing for schools, preschools, coaching centres and educational organisations can involve:
                </p>

                <div className="space-y-1 text-xs text-white/90 pt-1">
                  {['Google Ads', 'Meta Ads', 'SEO', 'Local SEO', 'Lead generation', 'Landing pages', 'Campaign creative'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-[#FF3154]">✔</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <Link
                  to="/lets-talk?intent=education"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#FF3154] uppercase tracking-wider transition-colors"
                >
                  <span>Explore Education Marketing</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* 2. Healthcare */}
            <div id="healthcare" className="industry-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E5B362]/15 text-[#E5B362] flex items-center justify-center">
                  <Stethoscope size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Healthcare</h3>
                  <div className="text-sm font-semibold text-[#E5B362] mt-0.5">
                    Help patients find the right care.
                  </div>
                </div>
                <p className="text-xs text-[#9A9DA7] leading-relaxed">
                  Healthcare businesses often depend heavily on local discovery, trust and clear information. Digital strategies can include:
                </p>

                <div className="space-y-1 text-xs text-white/90 pt-1">
                  {['Local SEO', 'Google Ads', 'Search visibility', 'Landing pages', 'Lead generation', 'Conversion-focused creative'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-[#E5B362]">✔</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <Link
                  to="/lets-talk?intent=healthcare"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#E5B362] uppercase tracking-wider transition-colors"
                >
                  <span>Explore Healthcare Marketing</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* 3. Real Estate */}
            <div id="real-estate" className="industry-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/15 text-[#FF3154] flex items-center justify-center">
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Real Estate</h3>
                  <div className="text-sm font-semibold text-[#FF3154] mt-0.5">
                    Turn property interest into enquiries.
                  </div>
                </div>
                <p className="text-xs text-[#9A9DA7] leading-relaxed">
                  Real estate marketing often involves high-value decisions, competitive search and multiple touchpoints before a customer makes contact. Strategies can include:
                </p>

                <div className="space-y-1 text-xs text-white/90 pt-1">
                  {['Google Ads', 'Meta Ads', 'YouTube', 'Lead generation', 'Remarketing', 'Landing pages', 'Campaign creative'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-[#FF3154]">✔</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <Link
                  to="/lets-talk?intent=real-estate"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#FF3154] uppercase tracking-wider transition-colors"
                >
                  <span>Explore Real Estate Marketing</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* 4. Professional Services */}
            <div id="professional-services" className="industry-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E5B362]/15 text-[#E5B362] flex items-center justify-center">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Professional Services</h3>
                  <div className="text-sm font-semibold text-[#E5B362] mt-0.5">
                    Make expertise easier to find and trust.
                  </div>
                </div>
                <p className="text-xs text-[#9A9DA7] leading-relaxed">
                  For professional service businesses, digital visibility often starts with a customer researching a problem before deciding whom to contact. We can help through:
                </p>

                <div className="space-y-1 text-xs text-white/90 pt-1">
                  {['SEO', 'AEO', 'AI Search', 'Google Ads', 'Landing pages', 'Lead generation'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-[#E5B362]">✔</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <Link
                  to="/lets-talk?intent=professional-services"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#E5B362] uppercase tracking-wider transition-colors"
                >
                  <span>Explore Professional Services Marketing</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* 5. Hospitality */}
            <div id="hospitality" className="industry-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/15 text-[#FF3154] flex items-center justify-center">
                  <Hotel size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Hospitality</h3>
                  <div className="text-sm font-semibold text-[#FF3154] mt-0.5">
                    Get discovered. Get considered. Get booked.
                  </div>
                </div>
                <p className="text-xs text-[#9A9DA7] leading-relaxed">
                  Hospitality businesses compete for attention across search, maps, social platforms and travel-related discovery. Opportunities can include:
                </p>

                <div className="space-y-1 text-xs text-white/90 pt-1">
                  {['Local SEO', 'Search advertising', 'Meta Ads', 'YouTube', 'Campaign creative', 'Landing pages', 'Remarketing'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-[#FF3154]">✔</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <Link
                  to="/lets-talk?intent=hospitality"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#FF3154] uppercase tracking-wider transition-colors"
                >
                  <span>Explore Hospitality Marketing</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* 6. B2B */}
            <div id="b2b" className="industry-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E5B362]/15 text-[#E5B362] flex items-center justify-center">
                  <Factory size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">B2B</h3>
                  <div className="text-sm font-semibold text-[#E5B362] mt-0.5">
                    Turn expertise into opportunities.
                  </div>
                </div>
                <p className="text-xs text-[#9A9DA7] leading-relaxed">
                  B2B buyers often research extensively before making contact. Digital marketing can support that journey through:
                </p>

                <div className="space-y-1 text-xs text-white/90 pt-1">
                  {['SEO', 'AEO', 'AI Search', 'Google Ads', 'Lead generation', 'Landing pages', 'Remarketing'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="text-[#E5B362]">✔</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <Link
                  to="/lets-talk?intent=b2b"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#E5B362] uppercase tracking-wider transition-colors"
                >
                  <span>Explore B2B Marketing</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE IMPORTANT SECTION */}
      <section className="wwh-journey-section py-24 px-6 lg:px-12 relative bg-[#090B0E]/60 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div ref={journeyGlowRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF3154]/10 rounded-full blur-[140px]" />
        </div>
        <div className="max-w-5xl mx-auto space-y-12 text-center relative z-10">
          <div className="space-y-3 max-w-2xl mx-auto">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
              Holistic Strategy
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              We Start With the Customer Journey.
            </h2>
            <p className="text-base sm:text-lg text-[#9A9DA7]">
              Before deciding which platform to use, we look at how someone becomes a customer.
            </p>
          </div>

          <div className="wwh-journey-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="wwh-journey-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-xl font-bold text-[#FF3154]">Discover</h3>
              <p className="text-xs text-[#9A9DA7]">Where do potential customers first find businesses like yours?</p>
              <div className="text-[11px] font-mono text-white/90 pt-1">Search · Maps · Ads · AI Search · Referrals</div>
            </div>

            <div className="wwh-journey-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-xl font-bold text-[#E5B362]">Research</h3>
              <p className="text-xs text-[#9A9DA7]">What do they need to know before contacting you?</p>
              <div className="text-[11px] font-mono text-white/90 pt-1">Website · Reviews · Content · Expertise · Comparisons</div>
            </div>

            <div className="wwh-journey-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-xl font-bold text-[#FF3154]">Decide</h3>
              <p className="text-xs text-[#9A9DA7]">What makes them choose one business over another?</p>
              <div className="text-[11px] font-mono text-white/90 pt-1">Offer · Trust · Experience · Proof · Convenience</div>
            </div>

            <div className="wwh-journey-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <h3 className="text-xl font-bold text-[#E5B362]">Enquire</h3>
              <p className="text-xs text-[#9A9DA7]">What happens when they're ready?</p>
              <div className="text-[11px] font-mono text-white/90 pt-1">Form · Call · Booking · Admission · Consultation</div>
            </div>
          </div>

          <div className="text-base font-bold text-white pt-2">
            Your marketing should support the journey, not just one stage of it.
          </div>
        </div>
      </section>

      {/* 5. MATCH THE PROBLEM TO THE SOLUTION */}
      <section className="py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
              Self-Identification
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Start With the Problem. Not the Platform.
            </h2>
          </div>

          <div className="wwh-problem-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="wwh-problem-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3">
              <h3 className="text-base font-bold text-white">“People aren't finding us.”</h3>
              <div className="text-xs text-[#9A9DA7]">Look at:</div>
              <div className="text-xs font-mono font-bold text-[#FF3154] bg-[#FF3154]/10 p-2.5 rounded-xl border border-[#FF3154]/20">
                SEO + Local SEO + AEO + AI Search
              </div>
            </div>

            <div className="wwh-problem-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3">
              <h3 className="text-base font-bold text-white">“We need more enquiries.”</h3>
              <div className="text-xs text-[#9A9DA7]">Look at:</div>
              <div className="text-xs font-mono font-bold text-[#E5B362] bg-[#E5B362]/10 p-2.5 rounded-xl border border-[#E5B362]/20">
                Google Ads + Meta Ads + Lead Generation
              </div>
            </div>

            <div className="wwh-problem-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3">
              <h3 className="text-base font-bold text-white">“We're getting traffic but not enough leads.”</h3>
              <div className="text-xs text-[#9A9DA7]">Look at:</div>
              <div className="text-xs font-mono font-bold text-[#FF3154] bg-[#FF3154]/10 p-2.5 rounded-xl border border-[#FF3154]/20">
                Landing Pages + Creative + Conversion
              </div>
            </div>

            <div className="wwh-problem-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3">
              <h3 className="text-base font-bold text-white">“Our ads aren't performing consistently.”</h3>
              <div className="text-xs text-[#9A9DA7]">Look at:</div>
              <div className="text-xs font-mono font-bold text-[#E5B362] bg-[#E5B362]/10 p-2.5 rounded-xl border border-[#E5B362]/20">
                Creative + Audience + Campaign Structure + Testing
              </div>
            </div>

            <div className="wwh-problem-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3 md:col-span-2 lg:col-span-2">
              <h3 className="text-base font-bold text-white">“People know us, but we're not being considered.”</h3>
              <div className="text-xs text-[#9A9DA7]">Look at:</div>
              <div className="text-xs font-mono font-bold text-[#FF3154] bg-[#FF3154]/10 p-2.5 rounded-xl border border-[#FF3154]/20">
                Search + Content + Remarketing + Creative
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NOT SURE WHICH CATEGORY YOU FIT? */}
      <section className="py-20 px-6 lg:px-12 relative bg-[#090B0E]/60 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
            Other Sectors
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Don't See Your Business?
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#9A9DA7] leading-relaxed max-w-3xl mx-auto">
            <p>These are some of the businesses we work particularly well with, but they're not the only ones.</p>
            <p className="text-white font-medium">
              If your business relies on visibility, enquiries, appointments, admissions, bookings or sales conversations, there may be a digital growth opportunity worth exploring.
            </p>
          </div>

          <div className="pt-2">
            <Link
              to="/lets-talk"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold text-sm tracking-wider uppercase transition-all"
            >
              <span>Tell Us About Your Business</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. QUESTIONS BUSINESS OWNERS ASK */}
      <section className="py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase mb-2">
              Industry Knowledge
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Questions Businesses Ask About Digital Marketing
            </h2>
          </div>

          <FaqSection items={whoWeHelpFaqs} />
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="wwh-cta-section py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#0D1014] to-[#151921] border border-white/15 relative overflow-hidden shadow-2xl">
          <div ref={ctaGlowRef} className="absolute top-0 right-1/4 w-72 h-72 bg-[#FF3154]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Your Business Is Different. Your Marketing Should Be Too.
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#9A9DA7] leading-relaxed">
              Tell us what you're trying to achieve, where you're getting stuck and what you've already tried. We'll help identify where search, advertising and creative could fit into the picture.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <MagneticButton
                href="/lets-talk"
                variant="primary"
                size="lg"
                className="shadow-[0_0_25px_rgba(255,49,84,0.45)]"
              >
                LET'S TALK
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
