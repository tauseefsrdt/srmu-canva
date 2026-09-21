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
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
} from 'lucide-react';
import gsap from 'gsap';
import { MagneticButton } from '../components/MagneticButton';
import { FaqSection, FaqItem } from '../components/FaqSection';
import { isReducedMotion } from '../utils/animations';

export const WhoWeHelp: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        '.wwh-header-content',
        { opacity: 0, y: 35, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, ease: 'power3.out', clearProps: 'all' }
      );

      // Industry sections stagger
      gsap.fromTo(
        '.industry-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.industries-grid',
            start: 'top 85%',
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
    <div ref={containerRef} className="w-full pt-32 pb-20">
      {/* 1. HERO */}
      <section className="relative py-12 md:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FF3154]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 space-y-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#9A9DA7]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-[#FF3154]">Who We Help</span>
          </nav>

          <div className="wwh-header-content space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#FF3154]">
              <Sparkles size={14} />
              INDUSTRY EXPERTISE
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
              Digital Marketing for Businesses <br />
              <span className="text-gradient-brand">That Want to Grow.</span>
            </h1>
            <p className="text-lg md:text-2xl text-[#9A9DA7] leading-relaxed">
              Different businesses have different customers, sales cycles and reasons people choose them. A school doesn't market like a real estate company. A clinic doesn't acquire customers like a B2B company.
            </p>
            <p className="text-sm text-[#9A9DA7]">
              We build the digital strategy around how your customers search, compare, enquire and decide.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <MagneticButton to="/lets-talk" variant="primary" className="!px-7 !py-3.5 !text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(255,49,84,0.4)]">
              <span>Find Your Digital Growth Opportunity</span>
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton to="/lets-talk" variant="secondary" className="!px-6 !py-3.5 !text-xs uppercase tracking-wider">
              <span>Get a Free Audit →</span>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION: We Don't Believe in One-Size-Fits-All */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
            TAILORED MIX
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            We Don't Believe in One-Size-Fits-All Marketing.
          </h2>
          <p className="text-base md:text-lg text-[#9A9DA7] leading-relaxed">
            The right digital marketing mix depends on the business. Some need to capture people who are already searching. Some need to create demand. Some need stronger local visibility. Some need better lead generation. And some have plenty of traffic but struggle to convert it.
          </p>
        </div>
      </section>

      {/* 3. SIX SUBSTANTIAL INDUSTRY CARDS */}
      <section className="py-20 border-t border-white/10 bg-[#080A0E]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              SECTOR FOCUS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Businesses We Work With
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Education */}
            <div id="education" className="p-8 md:p-10 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/10 text-[#FF3154] flex items-center justify-center">
                <GraduationCap size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white">Education</h3>
                <p className="text-xs font-mono text-[#FF3154]">Reach the right students and parents.</p>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Digital marketing for schools, universities, preschools and coaching centres focusing on admission enquiries.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#9A9DA7]">
                <li>• Google & Meta Ads Campaigns</li>
                <li>• Local SEO & School Map Discovery</li>
                <li>• Admission Funnel Landing Pages</li>
                <li>• Prospect Retargeting Sequences</li>
              </ul>
            </div>

            {/* 2. Healthcare */}
            <div id="healthcare" className="p-8 md:p-10 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#28D7FF]/10 text-[#28D7FF] flex items-center justify-center">
                <Stethoscope size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white">Healthcare</h3>
                <p className="text-xs font-mono text-[#28D7FF]">Help patients find the right care.</p>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Healthcare businesses depend heavily on local discovery, trust signals and clear medical service information.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#9A9DA7]">
                <li>• Local SEO & Google Business Profile</li>
                <li>• High-Intent Search Visibility</li>
                <li>• Appointment Booking Pages</li>
                <li>• Patient Trust & Reputation Signals</li>
              </ul>
            </div>

            {/* 3. Real Estate */}
            <div id="real-estate" className="p-8 md:p-10 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#8B3DFF]/10 text-[#8B3DFF] flex items-center justify-center">
                <Building2 size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white">Real Estate</h3>
                <p className="text-xs font-mono text-[#8B3DFF]">Turn property interest into enquiries.</p>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  High-value transactions requiring precise audience targeting, cinematic creative and multi-touch follow-ups.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#9A9DA7]">
                <li>• High-Intent Property Search Ads</li>
                <li>• Meta & YouTube Project Showcase Ads</li>
                <li>• Site Visit Lead Generation Funnels</li>
                <li>• Buyer Retargeting & Walkthroughs</li>
              </ul>
            </div>

            {/* 4. Professional Services */}
            <div id="professional-services" className="p-8 md:p-10 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#FF7A18]/10 text-[#FF7A18] flex items-center justify-center">
                <Briefcase size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white">Professional Services</h3>
                <p className="text-xs font-mono text-[#FF7A18]">Make expertise easier to find and trust.</p>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Legal, accounting, technology, and advisory firms where buyers research deeply before initiating contact.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#9A9DA7]">
                <li>• SEO & Thought Leadership AEO</li>
                <li>• AI Search Entity Optimization</li>
                <li>• High-Value Consultation Funnels</li>
                <li>• Google Search Intent Capture</li>
              </ul>
            </div>

            {/* 5. Hospitality */}
            <div id="hospitality" className="p-8 md:p-10 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#FF167D]/10 text-[#FF167D] flex items-center justify-center">
                <Hotel size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white">Hospitality</h3>
                <p className="text-xs font-mono text-[#FF167D]">Get discovered. Get booked.</p>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Hotels, resorts, and restaurants competing for traveler and local attention across maps, social and search.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#9A9DA7]">
                <li>• Local Map Pack Rankings</li>
                <li>• Visual Social Ad Campaigns</li>
                <li>• Direct Booking Landing Pages</li>
                <li>• Seasonal Promotion Marketing</li>
              </ul>
            </div>

            {/* 6. B2B */}
            <div id="b2b" className="p-8 md:p-10 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#267BFF]/10 text-[#267BFF] flex items-center justify-center">
                <Factory size={24} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white">B2B & Enterprise</h3>
                <p className="text-xs font-mono text-[#267BFF]">Turn expertise into opportunities.</p>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Manufacturers, software, and industrial suppliers with multi-stakeholder purchasing funnels.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#9A9DA7]">
                <li>• Technical SEO & Whitepaper Leads</li>
                <li>• Decision-Maker Search Capture</li>
                <li>• Enterprise Lead Gen Forms</li>
                <li>• Long-Cycle Nurturing Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CUSTOMER JOURNEY */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              ALIGNMENT
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              We Start With the Customer Journey.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="font-mono text-xs font-bold text-[#FF3154]">01. DISCOVER</span>
              <h3 className="text-lg font-bold text-white">Search & Maps</h3>
              <p className="text-xs text-[#9A9DA7]">Where potential customers first find businesses like yours.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="font-mono text-xs font-bold text-[#FF3154]">02. RESEARCH</span>
              <h3 className="text-lg font-bold text-white">Content & Proof</h3>
              <p className="text-xs text-[#9A9DA7]">What they need to know before reaching out.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="font-mono text-xs font-bold text-[#FF3154]">03. DECIDE</span>
              <h3 className="text-lg font-bold text-white">Offer & Trust</h3>
              <p className="text-xs text-[#9A9DA7]">What makes them choose you over alternatives.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="font-mono text-xs font-bold text-[#FF3154]">04. ENQUIRE</span>
              <h3 className="text-lg font-bold text-white">Action & Booking</h3>
              <p className="text-xs text-[#9A9DA7]">What happens when they're ready to talk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MATCH PROBLEM TO SOLUTION */}
      <section className="py-20 border-t border-white/10 bg-[#080A0E]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              SELF-IDENTIFY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Start With the Problem. Not the Platform.
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { problem: "“People aren't finding us.”", lookAt: "SEO + Local SEO + AEO + AI Search" },
              { problem: "“We need more enquiries now.”", lookAt: "Google Ads + Meta Ads + Lead Generation" },
              { problem: "“We're getting traffic but not enough leads.”", lookAt: "Landing Pages + Creative + Conversion Optimisation" },
              { problem: "“Our ads aren't performing consistently.”", lookAt: "Creative + Audience + Campaign Structure + Testing" },
              { problem: "“People know us, but we're not being considered.”", lookAt: "Search + Content + Remarketing + Creative" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-lg font-bold text-white">{item.problem}</div>
                <div className="text-xs font-mono text-[#FF3154] font-semibold bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  Look at: {item.lookAt}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <FaqSection 
        title="Questions Businesses Ask About Digital Marketing"
        faqs={whoWeHelpFaqs}
        ctaText="Tell us about your business. Let's Talk →"
        ctaLink="/lets-talk"
      />

      {/* 7. FINAL CTA */}
      <section className="py-20 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Your Business Is Different. Your Marketing Should Be Too.
          </h2>
          <p className="text-base text-[#9A9DA7]">
            Tell us what you're trying to achieve, where you're getting stuck and what you've already tried. We'll help identify where search, advertising and creative fit into the picture.
          </p>
          <div className="pt-2">
            <MagneticButton to="/lets-talk" variant="primary" className="!px-8 !py-4 !text-xs uppercase tracking-wider">
              <span>Let's Talk</span>
              <ArrowRight size={16} />
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};
