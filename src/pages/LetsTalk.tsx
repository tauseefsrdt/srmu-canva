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
  Loader2,
  FileCheck
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
  // Conversational Form State
  const [servicesSelected, setServicesSelected] = useState<string[]>(['SEO / Search Visibility']);
  const [challengeSelected, setChallengeSelected] = useState<string>('We are not getting enough enquiries');
  const [businessStory, setBusinessStory] = useState<string>('');
  const [contactDetails, setContactDetails] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    city: '',
  });
  const [intentNext, setIntentNext] = useState<string>('Get a Free Audit');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      answer: "No. SRMUCANVAS focuses on performance marketing, search visibility, AI Search/AEO, lead generation and campaign-focused creative rather than ongoing social media management."
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
            <p className="text-lg md:text-2xl text-[#9A9DA7] leading-relaxed">
              Not sure whether you need SEO, Google Ads, AEO, better creatives — or something completely different? Tell us what you're trying to achieve.
            </p>
            <p className="text-sm text-[#9A9DA7]">
              We'll look at where your digital presence is today and where there may be an opportunity to improve.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONVERSATIONAL AUDIT FORM */}
      <section className="lt-form-section py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="lt-form-box p-8 md:p-14 rounded-3xl bg-[#0D1014] border border-white/15 shadow-2xl space-y-12">
            
            {isSubmitted ? (
              <div className="py-16 text-center space-y-6 animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-[#FF3154]/20 border-2 border-[#FF3154] mx-auto flex items-center justify-center text-[#FF3154] shadow-[0_0_40px_rgba(255,49,84,0.6)]">
                  <CheckCircle size={40} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-black text-white">Thank You, {contactDetails.name || 'Friend'}!</h3>
                  <p className="text-base text-[#9A9DA7] max-w-md mx-auto">
                    We've received your request for a {intentNext}. Our senior strategists are reviewing your digital presence and will be in touch within 24 business hours.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono uppercase tracking-wider text-white transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="space-y-2 border-b border-white/10 pb-6">
                  <span className="text-xs font-mono text-[#FF3154] uppercase tracking-widest font-bold">
                    CONVERSATIONAL ASSESSMENT
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white">
                    What Are You Looking to Improve?
                  </h2>
                </div>

                {/* Step 1: What do you need help with? */}
                <div className="space-y-4">
                  <label className="text-sm font-bold text-white uppercase tracking-wider block">
                    Step 1 • What do you need help with? <span className="text-xs font-normal text-[#9A9DA7]">(Select all that apply)</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      'SEO / Search Visibility',
                      'AEO / AI Search',
                      'Google Ads',
                      'Meta Ads',
                      'YouTube Ads',
                      'Lead Generation',
                      'Landing Pages',
                      'Ad Creatives / Campaign Design',
                      'Not Sure Yet'
                    ].map((svc) => {
                      const isSelected = servicesSelected.includes(svc);
                      return (
                        <button
                          type="button"
                          key={svc}
                          onClick={() => toggleService(svc)}
                          className={`p-3.5 rounded-xl text-xs font-bold text-left transition-all border ${
                            isSelected
                              ? 'bg-[#FF3154] text-white border-[#FF3154] shadow-[0_0_20px_rgba(255,49,84,0.4)]'
                              : 'bg-[#151920] text-[#9A9DA7] border-white/10 hover:border-white/20 hover:text-white'
                          }`}
                        >
                          {svc}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: What's the biggest challenge? */}
                <div className="space-y-4">
                  <label className="text-sm font-bold text-white uppercase tracking-wider block">
                    Step 2 • What's the biggest challenge right now?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "We're not getting enough enquiries",
                      "We're getting traffic but not enough leads",
                      "Our ads aren't performing",
                      "People aren't finding us online",
                      "We want to improve our AI/Search visibility",
                      "We need better campaign creative",
                      "We're launching something new",
                      "We're not sure where the problem is"
                    ].map((chal) => (
                      <button
                        type="button"
                        key={chal}
                        onClick={() => setChallengeSelected(chal)}
                        className={`p-3.5 rounded-xl text-xs font-bold text-left transition-all border ${
                          challengeSelected === chal
                            ? 'bg-[#8B3DFF] text-white border-[#8B3DFF] shadow-[0_0_20px_rgba(139,61,255,0.4)]'
                            : 'bg-[#151920] text-[#9A9DA7] border-white/10 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        {chal}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Tell us a little about your business */}
                <div className="space-y-4">
                  <label className="text-sm font-bold text-white uppercase tracking-wider block">
                    Step 3 • Tell us a little about your business.
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="What do you sell, who do you serve, and what are you hoping to achieve?"
                    value={businessStory}
                    onChange={(e) => setBusinessStory(e.target.value)}
                    className="w-full p-4 rounded-xl bg-[#151920] border border-white/10 text-white placeholder-white/25 focus:border-[#FF3154] focus:outline-none focus:ring-1 focus:ring-[#FF3154] transition-all text-sm resize-none"
                  />
                </div>

                {/* Step 4: Your details */}
                <div className="space-y-4">
                  <label className="text-sm font-bold text-white uppercase tracking-wider block">
                    Step 4 • Your Details
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={contactDetails.name}
                      onChange={(e) => setContactDetails({ ...contactDetails, name: e.target.value })}
                      className="p-3.5 rounded-xl bg-[#151920] border border-white/10 text-white text-sm focus:border-[#FF3154] focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Business / Company Name"
                      value={contactDetails.businessName}
                      onChange={(e) => setContactDetails({ ...contactDetails, businessName: e.target.value })}
                      className="p-3.5 rounded-xl bg-[#151920] border border-white/10 text-white text-sm focus:border-[#FF3154] focus:outline-none"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Work Email *"
                      value={contactDetails.email}
                      onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })}
                      className="p-3.5 rounded-xl bg-[#151920] border border-white/10 text-white text-sm focus:border-[#FF3154] focus:outline-none"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone / WhatsApp *"
                      value={contactDetails.phone}
                      onChange={(e) => setContactDetails({ ...contactDetails, phone: e.target.value })}
                      className="p-3.5 rounded-xl bg-[#151920] border border-white/10 text-white text-sm focus:border-[#FF3154] focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Website URL (e.g. yourcompany.com)"
                      value={contactDetails.website}
                      onChange={(e) => setContactDetails({ ...contactDetails, website: e.target.value })}
                      className="p-3.5 rounded-xl bg-[#151920] border border-white/10 text-white text-sm focus:border-[#FF3154] focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="City / Location"
                      value={contactDetails.city}
                      onChange={(e) => setContactDetails({ ...contactDetails, city: e.target.value })}
                      className="p-3.5 rounded-xl bg-[#151920] border border-white/10 text-white text-sm focus:border-[#FF3154] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Step 5: What would you like to do next? */}
                <div className="space-y-4">
                  <label className="text-sm font-bold text-white uppercase tracking-wider block">
                    Step 5 • What would you like to do next?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      'Get a Free Audit',
                      'Discuss a Project',
                      'Explore Options',
                      'Just Have a Question'
                    ].map((nxt) => (
                      <button
                        type="button"
                        key={nxt}
                        onClick={() => setIntentNext(nxt)}
                        className={`p-3.5 rounded-xl text-xs font-bold text-center transition-all border ${
                          intentNext === nxt
                            ? 'bg-[#28D7FF] text-black border-[#28D7FF] shadow-[0_0_20px_rgba(40,215,255,0.4)]'
                            : 'bg-[#151920] text-[#9A9DA7] border-white/10 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        {nxt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4.5 rounded-full bg-[#FF3154] hover:bg-[#ff1b43] text-white font-black text-xs uppercase tracking-widest shadow-[0_0_35px_rgba(255,49,84,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>ANALYZING YOUR REQUEST...</span>
                    </>
                  ) : (
                    <>
                      <span>START THE CONVERSATION</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. WHAT HAPPENS NEXT */}
      <section className="py-20 border-t border-white/10 bg-[#080A0E]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF3154]">
              TRANSPARENCY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              What Happens Next?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3">
              <span className="font-mono text-xs font-bold text-[#FF3154]">01 / WE READ</span>
              <h3 className="text-xl font-bold text-white">Review Problem</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">
                We look at what you've told us and understand the exact problem you're trying to solve.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3">
              <span className="font-mono text-xs font-bold text-[#FF3154]">02 / WE REVIEW</span>
              <h3 className="text-xl font-bold text-white">Audit Presence</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">
                If you requested an audit, we examine relevant search, ad, and conversion signals.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3">
              <span className="font-mono text-xs font-bold text-[#FF3154]">03 / WE TALK</span>
              <h3 className="text-xl font-bold text-white">Discuss Options</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">
                We discuss what we're seeing, what is worth improving and what the next step could look like.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3">
              <span className="font-mono text-xs font-bold text-[#FF3154]">04 / YOU DECIDE</span>
              <h3 className="text-xl font-bold text-white">No Pressure</h3>
              <p className="text-xs text-[#9A9DA7] leading-relaxed">
                No pressure to buy a package before you understand what your business actually needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BRING US A PROBLEM */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            Bring Us a Problem.
          </h2>
          <p className="text-base text-[#9A9DA7] max-w-2xl mx-auto">
            You don't need to arrive with a marketing plan. You can come to us with: “We're spending on ads but the leads aren't good”, or “We're not showing up when people search for us”, or simply “We need more enquiries.” We'll work backwards from there.
          </p>
        </div>
      </section>

      {/* 5. QUICK ANSWERS FAQ */}
      <FaqSection 
        title="Before You Reach Out"
        faqs={letsTalkFaqs}
        showCta={false}
      />

      {/* 6. CONTACT DETAILS */}
      <section className="py-20 border-t border-white/10 text-center bg-[#080A0E]">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Prefer to Reach Us Directly?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#9A9DA7]">
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <Mail size={20} className="text-[#FF3154] mx-auto" />
              <div className="text-white font-bold">{companyContact.email}</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <Phone size={20} className="text-[#FF3154] mx-auto" />
              <div className="text-white font-bold">{companyContact.phoneDisplay}</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#0D1014] border border-white/10 space-y-2">
              <MapPin size={20} className="text-[#FF3154] mx-auto" />
              <div className="text-white font-bold max-w-xs mx-auto leading-relaxed">{companyContact.address}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
