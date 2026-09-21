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

  // Section 7 DOCX FAQs
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
              TARGET INDUSTRIES & CLIENTS
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
              Digital Marketing for <br />
              <span className="text-gradient-brand">Businesses That Want to Grow.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white font-medium leading-relaxed">
              Different businesses have different customers, sales cycles and reasons people choose them.
            </p>
            <p className="text-sm md:text-base text-[#9A9DA7] leading-relaxed">
              A school doesn't market like a real estate company. A clinic doesn't acquire customers like a B2B company. We build the digital strategy around how your customers search, compare, enquire and decide.
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

      {/* 2. INTRODUCTION */}
      <section className="py-20 border-t border-white/10 bg-[#050608]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
            TAILORED STRATEGY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            We Don't Believe in One-Size-Fits-All Marketing.
          </h2>
          <p className="text-base sm:text-lg text-[#9A9DA7] max-w-3xl mx-auto leading-relaxed">
            The right digital marketing mix depends on the business. Some businesses need to capture people who are already searching. Some need to create demand. Some need stronger local visibility. Some need better lead generation. And some have plenty of traffic but struggle to convert it.
          </p>
          <div className="font-mono text-sm text-[#28D7FF] font-semibold">
            Our job is to understand the business first — then determine where search, advertising and creative can make the biggest difference.
          </div>
        </div>
      </section>

      {/* 3. INDUSTRIES / BUSINESS TYPES (6 Substantial Cards) */}
      <section className="industries-grid py-20 bg-[#080A0E] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              SECTORS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Businesses We Work With
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Education */}
            <div id="education" className="industry-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#FF3154]/40 transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/10 border border-[#FF3154]/30 flex items-center justify-center text-[#FF3154]">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Education</h3>
                  <p className="text-xs font-mono text-[#FF3154] font-semibold mt-0.5">Reach the right students and parents.</p>
                </div>
                <p className="text-xs sm:text-sm text-[#9A9DA7] leading-relaxed">
                  Digital marketing for schools, preschools, coaching centres and educational organisations can involve:
                </p>
                <div className="space-y-1.5 pt-2 border-t border-white/5 text-xs text-white/80">
                  <div>• Google Ads for admissions and enquiries</div>
                  <div>• Meta Ads for awareness and open days</div>
                  <div>• Local search and Google Maps visibility</div>
                  <div>• Admission landing pages</div>
                  <div>• Campaign creatives and banners</div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <Link to="/lets-talk" className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF3154] hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>Explore Education Marketing →</span>
                </Link>
              </div>
            </div>

            {/* 2. Healthcare */}
            <div id="healthcare" className="industry-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#8B3DFF]/40 transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#8B3DFF]/10 border border-[#8B3DFF]/30 flex items-center justify-center text-[#8B3DFF]">
                  <Stethoscope size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Healthcare</h3>
                  <p className="text-xs font-mono text-[#8B3DFF] font-semibold mt-0.5">Help patients find the right care.</p>
                </div>
                <p className="text-xs sm:text-sm text-[#9A9DA7] leading-relaxed">
                  Healthcare businesses often depend heavily on local discovery, trust and clear information. Digital strategies can include:
                </p>
                <div className="space-y-1.5 pt-2 border-t border-white/5 text-xs text-white/80">
                  <div>• Local SEO and Google Business Profile</div>
                  <div>• Google Ads for treatments and services</div>
                  <div>• Search visibility for medical and clinic searches</div>
                  <div>• Clear, conversion-focused landing pages</div>
                  <div>• Appointment enquiry flows</div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <Link to="/lets-talk" className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B3DFF] hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>Explore Healthcare Marketing →</span>
                </Link>
              </div>
            </div>

            {/* 3. Real Estate */}
            <div id="real-estate" className="industry-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#28D7FF]/40 transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#28D7FF]/10 border border-[#28D7FF]/30 flex items-center justify-center text-[#28D7FF]">
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Real Estate</h3>
                  <p className="text-xs font-mono text-[#28D7FF] font-semibold mt-0.5">Turn property interest into enquiries.</p>
                </div>
                <p className="text-xs sm:text-sm text-[#9A9DA7] leading-relaxed">
                  Real estate marketing often involves high-value decisions, competitive search and multiple touchpoints before a customer makes contact. Strategies can include:
                </p>
                <div className="space-y-1.5 pt-2 border-t border-white/5 text-xs text-white/80">
                  <div>• Google Ads for project searches and locations</div>
                  <div>• Meta Ads for project launches and lead generation</div>
                  <div>• YouTube campaigns for video walkthroughs and awareness</div>
                  <div>• Lead qualification funnels</div>
                  <div>• Remarketing for ongoing consideration</div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <Link to="/lets-talk" className="text-xs font-mono font-bold uppercase tracking-wider text-[#28D7FF] hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>Explore Real Estate Marketing →</span>
                </Link>
              </div>
            </div>

            {/* 4. Professional Services */}
            <div id="professional-services" className="industry-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#FF7A18]/40 transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF7A18]/10 border border-[#FF7A18]/30 flex items-center justify-center text-[#FF7A18]">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Professional Services</h3>
                  <p className="text-xs font-mono text-[#FF7A18] font-semibold mt-0.5">Make expertise easier to find and trust.</p>
                </div>
                <p className="text-xs sm:text-sm text-[#9A9DA7] leading-relaxed">
                  For professional service businesses, digital visibility often starts with a customer researching a problem before deciding whom to contact. We can help through:
                </p>
                <div className="space-y-1.5 pt-2 border-t border-white/5 text-xs text-white/80">
                  <div>• SEO and AEO to answer customer questions</div>
                  <div>• AI Search visibility for industry expertise</div>
                  <div>• Google Ads for high-intent search terms</div>
                  <div>• Consultation landing pages</div>
                  <div>• Clear positioning and trust signals</div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <Link to="/lets-talk" className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF7A18] hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>Explore Professional Services Marketing →</span>
                </Link>
              </div>
            </div>

            {/* 5. Hospitality */}
            <div id="hospitality" className="industry-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#FF3154]/40 transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/10 border border-[#FF3154]/30 flex items-center justify-center text-[#FF3154]">
                  <Hotel size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Hospitality</h3>
                  <p className="text-xs font-mono text-[#FF3154] font-semibold mt-0.5">Get discovered. Get considered. Get booked.</p>
                </div>
                <p className="text-xs sm:text-sm text-[#9A9DA7] leading-relaxed">
                  Hospitality businesses compete for attention across search, maps, social platforms and discovery engines. We support hospitality through:
                </p>
                <div className="space-y-1.5 pt-2 border-t border-white/5 text-xs text-white/80">
                  <div>• Local SEO and review visibility</div>
                  <div>• Search advertising for high-intent queries</div>
                  <div>• Meta Ads for visual and experiential promotion</div>
                  <div>• Campaign creative and promotional collateral</div>
                  <div>• Direct-booking and event enquiry pages</div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <Link to="/lets-talk" className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF3154] hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>Explore Hospitality Marketing →</span>
                </Link>
              </div>
            </div>

            {/* 6. B2B */}
            <div id="b2b" className="industry-card p-8 rounded-3xl bg-[#0D1014] border border-white/10 hover:border-[#8B3DFF]/40 transition-all space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#8B3DFF]/10 border border-[#8B3DFF]/30 flex items-center justify-center text-[#8B3DFF]">
                  <Factory size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">B2B</h3>
                  <p className="text-xs font-mono text-[#8B3DFF] font-semibold mt-0.5">Turn expertise into opportunities.</p>
                </div>
                <p className="text-xs sm:text-sm text-[#9A9DA7] leading-relaxed">
                  B2B buyers often research extensively before making contact. Digital marketing can support that journey through:
                </p>
                <div className="space-y-1.5 pt-2 border-t border-white/5 text-xs text-white/80">
                  <div>• SEO and AEO to explain complex services</div>
                  <div>• AI Search visibility for key commercial topics</div>
                  <div>• Google Ads for specific commercial search queries</div>
                  <div>• B2B lead generation campaigns</div>
                  <div>• Case studies and conversion pages</div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5">
                <Link to="/lets-talk" className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B3DFF] hover:text-white flex items-center gap-1.5 transition-colors">
                  <span>Explore B2B Marketing →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE IMPORTANT SECTION: Customer Journey */}
      <section className="py-20 border-t border-white/10 bg-[#050608]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              FULL LIFECYCLE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              We Start With the Customer Journey.
            </h2>
            <p className="text-base text-[#9A9DA7]">
              Before deciding which platform to use, we look at how someone becomes a customer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#FF3154] font-bold">STAGE 01</span>
              <h3 className="text-xl font-bold text-white">Discover</h3>
              <p className="text-xs text-[#9A9DA7]">Where do potential customers first find businesses like yours?</p>
              <div className="text-[11px] font-mono text-[#28D7FF] pt-2">Search · Maps · Ads · AI · Referrals</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#8B3DFF] font-bold">STAGE 02</span>
              <h3 className="text-xl font-bold text-white">Research</h3>
              <p className="text-xs text-[#9A9DA7]">What do they need to know before contacting you?</p>
              <div className="text-[11px] font-mono text-[#8B3DFF] pt-2">Website · Reviews · Content · Expertise</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#28D7FF] font-bold">STAGE 03</span>
              <h3 className="text-xl font-bold text-white">Decide</h3>
              <p className="text-xs text-[#9A9DA7]">What makes them choose one business over another?</p>
              <div className="text-[11px] font-mono text-[#28D7FF] pt-2">Offer · Trust · Experience · Proof</div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#FF7A18] font-bold">STAGE 04</span>
              <h3 className="text-xl font-bold text-white">Enquire</h3>
              <p className="text-xs text-[#9A9DA7]">What happens when they're ready?</p>
              <div className="text-[11px] font-mono text-[#FF7A18] pt-2">Form · Call · Booking · Admission</div>
            </div>
          </div>
          <p className="text-center font-mono text-xs text-white/80">Your marketing should support the journey, not just one stage of it.</p>
        </div>
      </section>

      {/* 5. MATCH THE PROBLEM TO THE SOLUTION */}
      <section className="py-20 bg-[#080A0E] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              DIAGNOSTIC APPROACH
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Start With the Problem. Not the Platform.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3">
              <h3 className="text-base font-bold text-white italic">“People aren't finding us.”</h3>
              <div className="text-xs font-mono text-[#28D7FF] bg-white/5 p-2.5 rounded-xl">
                Look at: SEO + Local SEO + AEO + AI Search
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3">
              <h3 className="text-base font-bold text-white italic">“We need more enquiries.”</h3>
              <div className="text-xs font-mono text-[#FF3154] bg-white/5 p-2.5 rounded-xl">
                Look at: Google Ads + Meta Ads + Lead Generation
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3">
              <h3 className="text-base font-bold text-white italic">“We're getting traffic but not enough leads.”</h3>
              <div className="text-xs font-mono text-[#8B3DFF] bg-white/5 p-2.5 rounded-xl">
                Look at: Landing Pages + Creative + Conversion CRO
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3">
              <h3 className="text-base font-bold text-white italic">“Our ads aren't performing consistently.”</h3>
              <div className="text-xs font-mono text-[#FF7A18] bg-white/5 p-2.5 rounded-xl">
                Look at: Creative + Audience + Campaign Structure + Testing
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3 sm:col-span-2 lg:col-span-2">
              <h3 className="text-base font-bold text-white italic">“People know us, but we're not being considered.”</h3>
              <div className="text-xs font-mono text-[#28D7FF] bg-white/5 p-2.5 rounded-xl">
                Look at: Search + Content + Remarketing + Creative
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NOT SURE WHICH CATEGORY YOU FIT? */}
      <section className="py-20 border-t border-white/10 bg-[#050608]">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
            CUSTOM FIT
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Don't See Your Business?
          </h2>
          <p className="text-base sm:text-lg text-[#9A9DA7] leading-relaxed">
            These are some of the businesses we work particularly well with, but they're not the only ones. If your business relies on visibility, enquiries, appointments, admissions, bookings or sales conversations, there may be a digital growth opportunity worth exploring.
          </p>
          <div className="pt-2">
            <Link to="/lets-talk" className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF3154] hover:text-white transition-colors">
              <span>Tell Us About Your Business →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. QUESTIONS BUSINESS OWNERS ASK */}
      <FaqSection 
        title="Questions Businesses Ask About Digital Marketing"
        faqs={whoWeHelpFaqs}
        ctaText="Have a question about your specific sector? Let's Talk →"
        ctaLink="/lets-talk"
      />

      {/* 8. FINAL CTA */}
      <section className="py-20 md:py-28 text-center border-t border-white/10 bg-gradient-to-b from-[#050608] to-[#0A0D12]">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Your Business Is Different. Your Marketing Should Be Too.
          </h2>
          <p className="text-base sm:text-lg text-[#9A9DA7] max-w-2xl mx-auto leading-relaxed">
            Tell us what you're trying to achieve, where you're getting stuck and what you've already tried. We'll help identify where search, advertising and creative could fit into the picture.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <MagneticButton to="/lets-talk" variant="primary" className="!px-8 !py-4 !text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(255,49,84,0.5)]">
              <span>LET'S TALK</span>
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
