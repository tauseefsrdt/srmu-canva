import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Check, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Sparkles, 
  HelpCircle, 
  Clock, 
  ShieldCheck, 
  MessageSquare, 
  CheckCircle2 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaqSection, FaqItem } from '../components/FaqSection';
import { MagneticButton } from '../components/MagneticButton';
import { companyContact } from '../data/navigation';
import { isReducedMotion, createParallax, createBackgroundParallax } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

export const LetsTalk: React.FC = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const ctaGlowRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Hero Entrance
      gsap.fromTo(
        '.lt-hero-item',
        { opacity: 0, y: 30, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', stagger: 0.1, duration: 0.8, ease: 'power3.out' }
      );

      // Smooth background parallax (10-20% speed)
      if (glowRef.current && heroRef.current) {
        createBackgroundParallax(glowRef.current, heroRef.current, { speed: 0.18, scale: 1.15, direction: 'up' });
      }
      if (ctaGlowRef.current) {
        createBackgroundParallax(ctaGlowRef.current, '.lt-cta-section', { speed: 0.16, scale: 1.25, direction: 'up' });
      }

      // 2. Next Steps Cards
      gsap.fromTo(
        '.step-next-card',
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.75,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.step-next-grid',
            start: 'top 80%',
          },
        }
      );

      // 3. Problem Quotes
      gsap.fromTo(
        '.problem-quote-card',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.65,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.problem-quote-grid',
            start: 'top 80%',
          },
        }
      );

      // 4. Contact Detail Cards
      gsap.fromTo(
        '.contact-detail-card',
        { opacity: 0, y: 25, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-detail-grid',
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Form states
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  const [businessDescription, setBusinessDescription] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    city: '',
  });
  const [nextStepIntent, setNextStepIntent] = useState('Get a Free Audit');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Preselect based on URL search query (e.g. ?intent=audit or ?intent=seo)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const intent = params.get('intent');
    if (intent) {
      if (intent === 'audit') {
        setNextStepIntent('Get a Free Audit');
      } else if (intent === 'seo') {
        setSelectedServices((prev) => Array.from(new Set([...prev, 'SEO / Search Visibility'])));
      } else if (intent === 'aeo') {
        setSelectedServices((prev) => Array.from(new Set([...prev, 'AEO / AI Search'])));
      } else if (intent === 'local-seo') {
        setSelectedServices((prev) => Array.from(new Set([...prev, 'SEO / Search Visibility'])));
      } else if (intent === 'ai-search') {
        setSelectedServices((prev) => Array.from(new Set([...prev, 'AEO / AI Search'])));
      } else if (intent === 'google-ads') {
        setSelectedServices((prev) => Array.from(new Set([...prev, 'Google Ads'])));
      } else if (intent === 'meta-ads') {
        setSelectedServices((prev) => Array.from(new Set([...prev, 'Meta Ads'])));
      } else if (intent === 'youtube-ads') {
        setSelectedServices((prev) => Array.from(new Set([...prev, 'YouTube Ads'])));
      } else if (intent === 'lead-generation') {
        setSelectedServices((prev) => Array.from(new Set([...prev, 'Lead Generation'])));
      } else if (intent === 'landing-pages') {
        setSelectedServices((prev) => Array.from(new Set([...prev, 'Landing Pages'])));
      } else if (intent === 'ad-creatives' || intent === 'campaign-design') {
        setSelectedServices((prev) => Array.from(new Set([...prev, 'Ad Creatives / Campaign Design'])));
      }
    }
  }, [location.search]);

  const serviceOptions = [
    'SEO / Search Visibility',
    'AEO / AI Search',
    'Google Ads',
    'Meta Ads',
    'YouTube Ads',
    'Lead Generation',
    'Landing Pages',
    'Ad Creatives / Campaign Design',
    'Not Sure Yet'
  ];

  const challengeOptions = [
    "We're not getting enough enquiries",
    "We're getting traffic but not enough leads",
    "Our ads aren't performing",
    "People aren't finding us online",
    "We want to improve our AI/Search visibility",
    "We need better campaign creative",
    "We're launching something new",
    "We're not sure where the problem is"
  ];

  const nextStepOptions = [
    'Get a Free Audit',
    'Discuss a Project',
    'Explore Digital Marketing Options',
    'Just Have a Question'
  ];

  const toggleService = (service: string) => {
    if (service === 'Not Sure Yet') {
      setSelectedServices(['Not Sure Yet']);
      return;
    }
    const filtered = selectedServices.filter(s => s !== 'Not Sure Yet');
    if (filtered.includes(service)) {
      setSelectedServices(filtered.filter(s => s !== service));
    } else {
      setSelectedServices([...filtered, service]);
    }
  };

  const toggleChallenge = (challenge: string) => {
    if (selectedChallenges.includes(challenge)) {
      setSelectedChallenges(selectedChallenges.filter(c => c !== challenge));
    } else {
      setSelectedChallenges([...selectedChallenges, challenge]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const letsTalkFaqs: FaqItem[] = [
    {
      question: "Do I need to know exactly which service I need?",
      answer: "No. Tell us what you're trying to achieve or where you're facing a problem. We can help identify which areas may be relevant."
    },
    {
      question: "Do you only work with businesses that already advertise online?",
      answer: "No. Depending on the business, opportunities may exist across organic search, AI Search, paid advertising, creative, landing pages or a combination."
    },
    {
      question: "Can you audit my current digital marketing?",
      answer: "Yes. A free audit can be used to identify potential opportunities across relevant areas of your digital presence."
    },
    {
      question: "Do you manage social media accounts?",
      answer: "No. Redcanvass focuses on performance marketing, search visibility, AI Search/AEO, lead generation and campaign-focused creative rather than ongoing social media management."
    }
  ];

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={containerRef} className="relative w-full bg-[#050608] text-white overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative pt-32 pb-12 px-6 lg:px-12 border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <div ref={glowRef} className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#FF3154]/15 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="lt-hero-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-semibold text-[#FF3154] tracking-widest uppercase">
            Let's Connect
          </div>

          <h1 className="lt-hero-item text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-white">
            Let's Talk About Your Business.
          </h1>

          <div className="lt-hero-item space-y-3 max-w-2xl mx-auto text-base sm:text-lg text-[#9A9DA7] leading-relaxed">
            <p>Not sure whether you need SEO, Google Ads, AEO, better creatives — or something completely different?</p>
            <p className="text-white font-semibold">Tell us what you're trying to achieve.</p>
            <p>We'll look at where your digital presence is today and where there may be an opportunity to improve.</p>
          </div>

          <div className="lt-hero-item pt-2">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF3154] hover:bg-[#ff1f45] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,49,84,0.4)] transition-all cursor-pointer"
            >
              <span>Tell Us About Your Business</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. CONVERSATIONAL MULTI-STEP FORM */}
      <section ref={formRef} className="py-20 px-6 lg:px-12 relative border-b border-white/10 bg-[#090B0E]/60">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
              Conversational Intake
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              What Are You Looking to Improve?
            </h2>
          </div>

          {isSubmitted ? (
            <div className="p-10 sm:p-14 rounded-3xl bg-[#0D1014] border border-[#FF3154]/50 shadow-[0_0_30px_rgba(255,49,84,0.2)] text-center space-y-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#FF3154]/20 text-[#FF3154] flex items-center justify-center mx-auto">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Thank You for Reaching Out!
              </h3>
              <p className="max-w-lg mx-auto text-base text-[#9A9DA7] leading-relaxed">
                We've received your details. Our team will review your business presence and get back to you with clear, actionable insights within 24 business hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12 bg-[#0D1014] p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl">
              
              {/* Step 1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#FF3154]/20 text-[#FF3154] text-xs font-bold flex items-center justify-center font-mono">01</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    What do you need help with?
                  </h3>
                </div>
                <div className="text-xs text-[#9A9DA7] italic pl-10">Multiple selections allowed.</div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pl-0 sm:pl-10 pt-2">
                  {serviceOptions.map((service) => {
                    const isChecked = selectedServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`p-3.5 rounded-2xl border text-left text-xs font-semibold flex items-center justify-between gap-2 transition-all cursor-pointer ${
                          isChecked 
                            ? 'bg-[#FF3154]/15 border-[#FF3154] text-white shadow-[0_0_12px_rgba(255,49,84,0.3)]' 
                            : 'bg-white/[0.02] border-white/10 text-[#9A9DA7] hover:border-white/30 hover:text-white'
                        }`}
                      >
                        <span>{service}</span>
                        <div className={`w-4 h-4 rounded-md border flex items-center justify-center flex-shrink-0 ${
                          isChecked ? 'bg-[#FF3154] border-[#FF3154] text-white' : 'border-white/20'
                        }`}>
                          {isChecked && <Check size={12} />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#E5B362]/20 text-[#E5B362] text-xs font-bold flex items-center justify-center font-mono">02</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    What's the biggest challenge right now?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-0 sm:pl-10 pt-2">
                  {challengeOptions.map((challenge) => {
                    const isChecked = selectedChallenges.includes(challenge);
                    return (
                      <button
                        type="button"
                        key={challenge}
                        onClick={() => toggleChallenge(challenge)}
                        className={`p-3.5 rounded-2xl border text-left text-xs font-semibold flex items-center justify-between gap-2 transition-all cursor-pointer ${
                          isChecked 
                            ? 'bg-[#E5B362]/15 border-[#E5B362] text-white shadow-[0_0_12px_rgba(229,179,98,0.3)]' 
                            : 'bg-white/[0.02] border-white/10 text-[#9A9DA7] hover:border-white/30 hover:text-white'
                        }`}
                      >
                        <span>{challenge}</span>
                        <div className={`w-4 h-4 rounded-md border flex items-center justify-center flex-shrink-0 ${
                          isChecked ? 'bg-[#E5B362] border-[#E5B362] text-black' : 'border-white/20'
                        }`}>
                          {isChecked && <Check size={12} />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3 */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#FF3154]/20 text-[#FF3154] text-xs font-bold flex items-center justify-center font-mono">03</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Tell us a little about your business.
                  </h3>
                </div>

                <div className="pl-0 sm:pl-10">
                  <textarea
                    rows={4}
                    value={businessDescription}
                    onChange={(e) => setBusinessDescription(e.target.value)}
                    placeholder="What do you sell, who do you serve and what are you hoping to achieve?"
                    className="w-full p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-white placeholder:text-[#9A9DA7]/60 text-sm focus:outline-none focus:border-[#FF3154] transition-colors"
                  />
                </div>
              </div>

              {/* Step 4 */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#E5B362]/20 text-[#E5B362] text-xs font-bold flex items-center justify-center font-mono">04</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Your details
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-0 sm:pl-10 pt-2">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#9A9DA7] mb-1.5 font-semibold">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF3154]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#9A9DA7] mb-1.5 font-semibold">Business Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="Your Company / Brand Name"
                      className="w-full p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF3154]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#9A9DA7] mb-1.5 font-semibold">Work Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF3154]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#9A9DA7] mb-1.5 font-semibold">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF3154]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#9A9DA7] mb-1.5 font-semibold">Website</label>
                    <input
                      type="text"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://example.com"
                      className="w-full p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF3154]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[#9A9DA7] mb-1.5 font-semibold">City / Location</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Lucknow, India"
                      className="w-full p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF3154]"
                    />
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#FF3154]/20 text-[#FF3154] text-xs font-bold flex items-center justify-center font-mono">05</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    What would you like to do next?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-0 sm:pl-10 pt-2">
                  {nextStepOptions.map((opt) => {
                    const isSelected = nextStepIntent === opt;
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setNextStepIntent(opt)}
                        className={`p-3.5 rounded-2xl border text-left text-xs font-semibold flex items-center gap-3 transition-all cursor-pointer ${
                          isSelected 
                            ? 'bg-[#FF3154]/15 border-[#FF3154] text-white shadow-[0_0_12px_rgba(255,49,84,0.3)]' 
                            : 'bg-white/[0.02] border-white/10 text-[#9A9DA7] hover:border-white/30 hover:text-white'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                          isSelected ? 'border-[#FF3154]' : 'border-white/20'
                        }`}>
                          {isSelected && <div className="w-2 h-2 rounded-full bg-[#FF3154]" />}
                        </div>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-white/10 text-center sm:text-right">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#FF3154] hover:bg-[#ff1f45] text-white font-bold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(255,49,84,0.45)] transition-all cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <span>START THE CONVERSATION</span>
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </section>

      {/* 3. WHAT HAPPENS NEXT */}
      <section className="py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
              Transparent Process
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              What Happens Next?
            </h2>
          </div>

          <div className="step-next-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="step-next-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <div className="text-xs font-mono text-[#FF3154] font-bold uppercase">Step 01</div>
              <h3 className="text-lg font-bold text-white">01 — We Read</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">
                We look at what you've told us and understand the problem you're trying to solve.
              </p>
            </div>

            <div className="step-next-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <div className="text-xs font-mono text-[#E5B362] font-bold uppercase">Step 02</div>
              <h3 className="text-lg font-bold text-white">02 — We Review</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">
                If you've requested an audit, we'll look at the relevant parts of your digital presence.
              </p>
            </div>

            <div className="step-next-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <div className="text-xs font-mono text-[#FF3154] font-bold uppercase">Step 03</div>
              <h3 className="text-lg font-bold text-white">03 — We Talk</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">
                We'll discuss what we're seeing, what may be worth improving and what the next step could look like.
              </p>
            </div>

            <div className="step-next-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <div className="text-xs font-mono text-[#E5B362] font-bold uppercase">Step 04</div>
              <h3 className="text-lg font-bold text-white">04 — You Decide</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">
                No pressure to buy a package before you understand what you actually need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT CAN WE TALK ABOUT? */}
      <section className="py-24 px-6 lg:px-12 relative bg-[#090B0E]/60 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
              No Pitch Required
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Bring Us a Problem.
            </h2>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-[#9A9DA7] max-w-2xl mx-auto leading-relaxed">
            <p>You don't need to arrive with a marketing plan.</p>
            <p>You can come to us with:</p>
          </div>

          <div className="problem-quote-grid grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            <div className="problem-quote-card p-4 rounded-2xl bg-[#0D1014] border border-white/10 text-xs font-medium text-white italic">
              “We're spending on ads but the leads aren't good.”
            </div>
            <div className="problem-quote-card p-4 rounded-2xl bg-[#0D1014] border border-white/10 text-xs font-medium text-white italic">
              “We're not showing up when people search for us.”
            </div>
            <div className="problem-quote-card p-4 rounded-2xl bg-[#0D1014] border border-white/10 text-xs font-medium text-white italic">
              “We want to understand this whole AEO thing.”
            </div>
            <div className="problem-quote-card p-4 rounded-2xl bg-[#0D1014] border border-white/10 text-xs font-medium text-white italic">
              “We need more enquiries.”
            </div>
          </div>

          <div className="text-base font-bold text-white pt-2">
            We'll work backwards from there.
          </div>
        </div>
      </section>

      {/* 5. QUICK ANSWERS */}
      <section className="py-24 px-6 lg:px-12 relative border-b border-white/10">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase mb-2">
              Common Questions
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Before You Reach Out
            </h2>
          </div>

          <FaqSection items={letsTalkFaqs} />
        </div>
      </section>

      {/* 6. CONTACT DETAILS */}
      <section className="py-20 px-6 lg:px-12 relative bg-[#090B0E]/60 border-b border-white/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold tracking-widest text-[#FF3154] uppercase">
              Direct Access
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Prefer to Reach Us Directly?
            </h2>
          </div>

          <div className="contact-detail-grid grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left pt-2">
            <div className="contact-detail-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <Mail size={20} className="text-[#FF3154]" />
              <div className="text-xs text-[#9A9DA7] font-mono uppercase font-semibold">Email</div>
              <a href={`mailto:${companyContact.email}`} className="text-sm font-bold text-white hover:text-[#FF3154] transition-colors break-all">
                {companyContact.email}
              </a>
            </div>

            <div className="contact-detail-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <Phone size={20} className="text-[#FF3154]" />
              <div className="text-xs text-[#9A9DA7] font-mono uppercase font-semibold">Phone / WhatsApp</div>
              <a href={`tel:${companyContact.phone}`} className="text-sm font-bold text-white hover:text-[#FF3154] transition-colors">
                {companyContact.phoneDisplay}
              </a>
            </div>

            <div className="contact-detail-card p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <MapPin size={20} className="text-[#FF3154]" />
              <div className="text-xs text-[#9A9DA7] font-mono uppercase font-semibold">Location</div>
              <div className="text-sm font-bold text-white">
                {companyContact.location}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="lt-cta-section py-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#0D1014] to-[#151921] border border-white/15 relative overflow-hidden shadow-2xl">
          <div ref={ctaGlowRef} className="absolute top-0 right-1/4 w-72 h-72 bg-[#FF3154]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Your Next Customer Is Already Looking.
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#9A9DA7] leading-relaxed">
              Let's make it easier for them to find you, understand you and choose to talk to you.
            </p>

            <div className="pt-4">
              <button
                onClick={scrollToForm}
                className="px-10 py-4 rounded-full bg-[#FF3154] hover:bg-[#ff1f45] text-white font-bold text-xs uppercase tracking-widest shadow-[0_0_25px_rgba(255,49,84,0.45)] transition-all cursor-pointer"
              >
                GET A FREE AUDIT
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
