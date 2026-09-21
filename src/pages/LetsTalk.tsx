import React, { useState, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Send, 
  CheckCircle, 
  ArrowRight, 
  ChevronRight, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Loader2
} from 'lucide-react';
import gsap from 'gsap';
import { companyContact } from '../data/navigation';
import { FaqSection, FaqItem } from '../components/FaqSection';
import { MagneticButton } from '../components/MagneticButton';
import { isReducedMotion } from '../utils/animations';

export const LetsTalk: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        '.lt-header-content',
        { opacity: 0, y: 35, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, ease: 'power3.out', clearProps: 'all' }
      );

      // Form container reveal
      gsap.fromTo(
        '.lt-form-box',
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.lt-form-section',
            start: 'top 85%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Conversational Form State mapped to DOCX 5-Step Form
  // Step 1: Services checkboxes (multiple)
  const [servicesSelected, setServicesSelected] = useState<string[]>(['SEO / Search Visibility']);
  // Step 2: Biggest challenge
  const [challengeSelected, setChallengeSelected] = useState<string>("We're not getting enough enquiries");
  // Step 3: Tell us a little about your business
  const [businessStory, setBusinessStory] = useState<string>('');
  // Step 4: Your details
  const [contactDetails, setContactDetails] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    city: '',
  });
  // Step 5: What would you like to do next
  const [intentNext, setIntentNext] = useState<string>('Get a Free Audit');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const step1Options = [
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

  const step2Options = [
    "We're not getting enough enquiries",
    "We're getting traffic but not enough leads",
    "Our ads aren't performing",
    "People aren't finding us online",
    "We want to improve our AI/Search visibility",
    "We need better campaign creative",
    "We're launching something new",
    "We're not sure where the problem is"
  ];

  const step5Options = [
    'Get a Free Audit',
    'Discuss a Project',
    'Explore Digital Marketing Options',
    'Just Have a Question'
  ];

  const toggleService = (svc: string) => {
    if (servicesSelected.includes(svc)) {
      setServicesSelected(servicesSelected.filter((s) => s !== svc));
    } else {
      setServicesSelected([...servicesSelected, svc]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  // Section 5 DOCX Quick Answers FAQs
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

  return (
    <div ref={containerRef} className="w-full pt-32 pb-20">
      {/* 1. HERO */}
      <section className="relative py-12 md:py-20 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FF3154]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 space-y-6">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#9A9DA7]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-[#FF3154]">Let's Talk</span>
          </nav>

          <div className="lt-header-content space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#FF3154]">
              <Sparkles size={14} />
              START THE CONVERSATION
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">
              Let's Talk About <br />
              <span className="text-gradient-brand">Your Business.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white font-medium leading-relaxed">
              Not sure whether you need SEO, Google Ads, AEO, better creatives — or something completely different?
            </p>
            <p className="text-sm md:text-base text-[#9A9DA7] leading-relaxed">
              Tell us what you're trying to achieve. We'll look at where your digital presence is today and where there may be an opportunity to improve.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONVERSATIONAL 5-STEP FORM */}
      <section className="lt-form-section py-16 md:py-24 bg-[#080A0E] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="lt-form-box p-8 sm:p-12 md:p-14 rounded-3xl bg-[#0D1014] border border-white/15 shadow-2xl space-y-10">
            
            <div className="border-b border-white/10 pb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154] block mb-2">
                STEP-BY-STEP AUDIT & CONSULTATION
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                What Are You Looking to Improve?
              </h2>
            </div>

            {isSubmitted ? (
              <div className="p-10 rounded-2xl bg-white/5 border border-[#FF3154]/30 text-center space-y-4 animate-scale-up">
                <div className="w-16 h-16 rounded-full bg-[#FF3154]/20 border border-[#FF3154] flex items-center justify-center mx-auto text-[#FF3154]">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-black text-white">We've Received Your Details!</h3>
                <p className="text-sm text-[#9A9DA7] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{contactDetails.name || 'there'}</strong>. We'll review your business presence and get back to you with our audit insights and next steps.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-mono uppercase tracking-wider text-[#FF3154] hover:underline"
                  >
                    Submit another enquiry →
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Step 1 */}
                <div className="space-y-3">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF3154] block">
                    Step 1 — What do you need help with? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                    {step1Options.map((svc) => {
                      const isSelected = servicesSelected.includes(svc);
                      return (
                        <button
                          type="button"
                          key={svc}
                          onClick={() => toggleService(svc)}
                          className={`p-3 rounded-xl border text-xs font-medium text-left transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#FF3154]/15 border-[#FF3154] text-white font-bold shadow-[0_0_15px_rgba(255,49,84,0.25)]'
                              : 'bg-white/5 border-white/10 text-[#9A9DA7] hover:border-white/20 hover:text-white'
                          }`}
                        >
                          <span>{svc}</span>
                          {isSelected && <CheckCircle2 size={14} className="text-[#FF3154] flex-shrink-0 ml-1" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2 */}
                <div className="space-y-3">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B3DFF] block">
                    Step 2 — What's the biggest challenge right now?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {step2Options.map((opt) => {
                      const isSelected = challengeSelected === opt;
                      return (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setChallengeSelected(opt)}
                          className={`p-3 rounded-xl border text-xs font-medium text-left transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#8B3DFF]/15 border-[#8B3DFF] text-white font-bold shadow-[0_0_15px_rgba(139,61,255,0.25)]'
                              : 'bg-white/5 border-white/10 text-[#9A9DA7] hover:border-white/20 hover:text-white'
                          }`}
                        >
                          <span>{opt}</span>
                          {isSelected && <CheckCircle2 size={14} className="text-[#8B3DFF] flex-shrink-0 ml-1" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3 */}
                <div className="space-y-3">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#28D7FF] block">
                    Step 3 — Tell us a little about your business
                  </label>
                  <textarea
                    rows={4}
                    value={businessStory}
                    onChange={(e) => setBusinessStory(e.target.value)}
                    placeholder="What do you sell, who do you serve and what are you hoping to achieve?"
                    className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm focus:border-[#28D7FF] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Step 4 */}
                <div className="space-y-3">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF7A18] block">
                    Step 4 — Your details
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        value={contactDetails.name}
                        onChange={(e) => setContactDetails({ ...contactDetails, name: e.target.value })}
                        className="w-full p-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-white/30 focus:border-[#FF7A18] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Business Name"
                        value={contactDetails.businessName}
                        onChange={(e) => setContactDetails({ ...contactDetails, businessName: e.target.value })}
                        className="w-full p-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-white/30 focus:border-[#FF7A18] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Work Email *"
                        value={contactDetails.email}
                        onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })}
                        className="w-full p-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-white/30 focus:border-[#FF7A18] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone / WhatsApp *"
                        value={contactDetails.phone}
                        onChange={(e) => setContactDetails({ ...contactDetails, phone: e.target.value })}
                        className="w-full p-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-white/30 focus:border-[#FF7A18] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="url"
                        placeholder="Website (e.g., https://yourbrand.com)"
                        value={contactDetails.website}
                        onChange={(e) => setContactDetails({ ...contactDetails, website: e.target.value })}
                        className="w-full p-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-white/30 focus:border-[#FF7A18] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="City / Location"
                        value={contactDetails.city}
                        onChange={(e) => setContactDetails({ ...contactDetails, city: e.target.value })}
                        className="w-full p-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-white/30 focus:border-[#FF7A18] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="space-y-3">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-white block">
                    Step 5 — What would you like to do next?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {step5Options.map((opt) => {
                      const isSelected = intentNext === opt;
                      return (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setIntentNext(opt)}
                          className={`p-3 rounded-xl border text-xs font-medium text-left transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-white/15 border-white text-white font-bold'
                              : 'bg-white/5 border-white/10 text-[#9A9DA7] hover:border-white/20 hover:text-white'
                          }`}
                        >
                          <span>{opt}</span>
                          {isSelected && <CheckCircle2 size={14} className="text-[#FF3154] flex-shrink-0 ml-1" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit CTA */}
                <div className="pt-4 border-t border-white/10">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF3154] to-[#8B3DFF] text-white font-bold text-xs uppercase tracking-widest hover:opacity-95 shadow-[0_0_30px_rgba(255,49,84,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <span>START THE CONVERSATION →</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. WHAT HAPPENS NEXT */}
      <section className="py-20 border-t border-white/10 bg-[#050608]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              TRANSPARENT PROCESS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              What Happens Next?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#FF3154] font-bold">01 — WE READ</span>
              <h3 className="text-lg font-bold text-white">Understand</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">
                We look at what you've told us and understand the problem you're trying to solve.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#8B3DFF] font-bold">02 — WE REVIEW</span>
              <h3 className="text-lg font-bold text-white">Audit</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">
                If you've requested an audit, we'll look at the relevant parts of your digital presence.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#28D7FF] font-bold">03 — WE TALK</span>
              <h3 className="text-lg font-bold text-white">Consult</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">
                We'll discuss what we're seeing, what may be worth improving and what the next step could look like.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <span className="text-xs font-mono text-[#FF7A18] font-bold">04 — YOU DECIDE</span>
              <h3 className="text-lg font-bold text-white">No Pressure</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">
                No pressure to buy a package before you understand what you actually need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT CAN WE TALK ABOUT? */}
      <section className="py-20 bg-[#080A0E] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
            BRING US A PROBLEM
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Bring Us a Problem.
          </h2>
          <p className="text-base text-[#9A9DA7] leading-relaxed">
            You don't need to arrive with a marketing plan. You can come to us with:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-white pt-2 text-left">
            <div className="p-4 rounded-xl bg-[#0D1014] border border-white/10 italic">
              "We're spending on ads but the leads aren't good."
            </div>
            <div className="p-4 rounded-xl bg-[#0D1014] border border-white/10 italic">
              "We're not showing up when people search for us."
            </div>
            <div className="p-4 rounded-xl bg-[#0D1014] border border-white/10 italic">
              "We want to understand this whole AEO thing."
            </div>
            <div className="p-4 rounded-xl bg-[#0D1014] border border-white/10 italic">
              "We need more enquiries."
            </div>
          </div>
          <p className="text-xs font-mono text-[#28D7FF] font-semibold pt-2">
            We'll work backwards from there.
          </p>
        </div>
      </section>

      {/* 5. QUICK ANSWERS FAQS */}
      <FaqSection 
        title="Before You Reach Out"
        faqs={letsTalkFaqs}
        ctaText="Have any other question? Reach us directly below ↓"
        ctaLink="#direct-contact"
      />

      {/* 6. CONTACT DETAILS */}
      <section id="direct-contact" className="py-16 border-t border-white/10 bg-[#050608]">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Prefer to Reach Us Directly?
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-6 pt-2 text-xs font-mono text-[#9A9DA7]">
            <div className="flex items-center gap-2">
              <Mail size={15} className="text-[#FF3154]" />
              <a href={`mailto:${companyContact.email}`} className="text-white hover:text-[#FF3154] transition-colors">{companyContact.email}</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={15} className="text-[#FF3154]" />
              <a href={`tel:${companyContact.phone}`} className="text-white hover:text-[#FF3154] transition-colors">{companyContact.phoneDisplay}</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-[#FF3154]" />
              <span className="text-white">Lucknow, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-20 md:py-28 text-center border-t border-white/10 bg-gradient-to-b from-[#050608] to-[#0A0D12]">
        <div className="max-w-4xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Your Next Customer Is Already Looking.
          </h2>
          <p className="text-base sm:text-lg text-[#9A9DA7] max-w-2xl mx-auto leading-relaxed">
            Let's make it easier for them to find you, understand you and choose to talk to you.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <MagneticButton to="/lets-talk" variant="primary" className="!px-8 !py-4 !text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(255,49,84,0.5)]">
              <span>GET A FREE AUDIT</span>
              <ArrowRight size={16} />
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
};
