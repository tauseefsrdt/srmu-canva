import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  CheckCircle,
  Loader2
} from 'lucide-react';
import { companyContact } from '../data/navigation';
import { InstagramIcon, LinkedinIcon, FacebookIcon, YoutubeIcon, TwitterXIcon } from '../components/SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Website Design',
    budget: '$5,000 - $15,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        projectType: 'Website Design',
        budget: '$5,000 - $15,000',
        message: '',
      });
    }, 1200);
  };

  return (
    <div className="w-full pt-32 pb-20">
      {/* 1. Header */}
      <section className="relative py-12 md:py-20 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#FF3154]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 space-y-6">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#9A9DA7]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-[#FF3154]">Contact Us</span>
          </nav>

          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#FF3154]">
              <Sparkles size={14} />
              GET IN TOUCH
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white">
              Let's Work Together
            </h1>
            <p className="text-lg md:text-xl text-[#9A9DA7]">
              Have a project in mind? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Information & Interactive Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* LEFT: Contact Information (5 cols) */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Start a Conversation
                </h2>
                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  Fill out the form or reach out directly via email or phone. We normally respond within 24 business hours.
                </p>
              </div>

              <div className="space-y-8">
                {/* Office */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/10 border border-[#FF3154]/30 flex items-center justify-center text-[#FF3154] flex-shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#9A9DA7] block mb-1">
                      VISIT OUR OFFICE
                    </span>
                    <p className="text-sm font-medium text-white leading-relaxed">
                      {companyContact.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/10 border border-[#FF3154]/30 flex items-center justify-center text-[#FF3154] flex-shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#9A9DA7] block mb-1">
                      CALL US
                    </span>
                    <a href={`tel:${companyContact.phone}`} className="text-sm font-bold text-white hover:text-[#FF3154] transition-colors">
                      {companyContact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF3154]/10 border border-[#FF3154]/30 flex items-center justify-center text-[#FF3154] flex-shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#9A9DA7] block mb-1">
                      EMAIL US
                    </span>
                    <a href={`mailto:${companyContact.email}`} className="text-sm font-bold text-white hover:text-[#FF3154] transition-colors">
                      {companyContact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9A9DA7] block">
                  FOLLOW US
                </span>
                <div className="flex items-center gap-3">
                  {[
                    { icon: InstagramIcon, href: companyContact.socials.instagram },
                    { icon: LinkedinIcon, href: companyContact.socials.linkedin },
                    { icon: FacebookIcon, href: companyContact.socials.facebook },
                    { icon: YoutubeIcon, href: companyContact.socials.youtube },
                    { icon: TwitterXIcon, href: companyContact.socials.x },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={i}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#9A9DA7] hover:text-white hover:border-[#FF3154] hover:bg-[#FF3154]/20 transition-all"
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT: Interactive Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-[#0D1014] border border-white/15 shadow-2xl relative">
                
                {isSubmitted ? (
                  <div className="py-16 text-center space-y-4 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-[#FF3154]/20 border border-[#FF3154] mx-auto flex items-center justify-center text-[#FF3154] shadow-[0_0_30px_rgba(255,49,84,0.5)]">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-black text-white">Thank You!</h3>
                    <p className="text-sm text-[#9A9DA7] max-w-md mx-auto">
                      Your message has been delivered to the REDCANVASS team. We will review your project details and get back to you shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono uppercase tracking-wider text-white transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-[#9A9DA7] block">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#151920] border border-white/10 text-white placeholder-white/25 focus:border-[#FF3154] focus:outline-none focus:ring-1 focus:ring-[#FF3154] transition-all text-sm"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-[#9A9DA7] block">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#151920] border border-white/10 text-white placeholder-white/25 focus:border-[#FF3154] focus:outline-none focus:ring-1 focus:ring-[#FF3154] transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Project Type */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-[#9A9DA7] block">
                          Project Type
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#151920] border border-white/10 text-white focus:border-[#FF3154] focus:outline-none focus:ring-1 focus:ring-[#FF3154] transition-all text-sm cursor-pointer"
                        >
                          <option value="Website Design">Website Design</option>
                          <option value="Logo & Branding">Logo & Branding</option>
                          <option value="Print Design">Print Design</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="Illustration">Illustration</option>
                          <option value="Photography">Photography</option>
                          <option value="Merchandise">Merchandise</option>
                          <option value="IT Support">IT Support</option>
                        </select>
                      </div>

                      {/* Budget */}
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-wider text-[#9A9DA7] block">
                          Budget Range
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#151920] border border-white/10 text-white focus:border-[#FF3154] focus:outline-none focus:ring-1 focus:ring-[#FF3154] transition-all text-sm cursor-pointer"
                        >
                          <option value="Under $5,000">Under $5,000</option>
                          <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                          <option value="$15,000 - $30,000">$15,000 - $30,000</option>
                          <option value="$30,000+">$30,000+</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-[#9A9DA7] block">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your brand goals, timeline, and deliverables..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#151920] border border-white/10 text-white placeholder-white/25 focus:border-[#FF3154] focus:outline-none focus:ring-1 focus:ring-[#FF3154] transition-all text-sm resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-[#FF3154] hover:bg-[#ff1b43] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(255,49,84,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          <span>SENDING MESSAGE...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <Send size={15} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Location Map Section */}
      <section className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF3154] block">
                LOCATION
              </span>
              <h3 className="text-xl font-bold text-white">Lucknow Headquarters</h3>
            </div>
            <span className="text-xs font-mono text-[#9A9DA7]">Gomtinagar, UP</span>
          </div>

          <div className="relative aspect-[21/9] sm:aspect-[24/8] rounded-3xl overflow-hidden bg-[#0D1014] border border-white/15 shadow-2xl">
            <iframe
              title="REDCANVASS Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14238.455088235286!2d80.99914445!3d26.8522332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2c12574e927%3A0xe54ef98b1b51e592!2sVibhuti%20Khand%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 filter invert-[90%] hue-rotate-[180deg] contrast-125 opacity-70 hover:opacity-100 transition-opacity duration-500"
              allowFullScreen={false}
              loading="lazy"
            />

            <div className="absolute top-6 left-6 p-4 rounded-2xl bg-[#050608]/90 border border-white/20 backdrop-blur-md text-xs text-white shadow-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FF3154] flex items-center justify-center text-white shadow-[0_0_15px_#FF3154]">
                <MapPin size={16} />
              </div>
              <div>
                <p className="font-bold">Redcanvass Headquarters</p>
                <p className="text-[10px] text-[#9A9DA7]">C-142, Vibhuti Khand, Lucknow</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
