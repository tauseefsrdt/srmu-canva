import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { footerServices, footerIndustries, companyContact } from '../data/navigation';
import { Logo } from './Logo';
import { InstagramIcon, LinkedinIcon, FacebookIcon, YoutubeIcon, TwitterXIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050608] border-t border-white/10 text-white relative z-10 pt-16 md:pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          {/* Col 1: Brand & Socials (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-6">
            <Logo size="lg" />
            <p className="text-sm text-[#9A9DA7] leading-relaxed max-w-sm">
              Redcanvass is a digital marketing and performance marketing agency helping businesses grow through paid advertising, SEO, AI Search, Answer Engine Optimization (AEO), lead generation and conversion-focused creative.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: InstagramIcon, href: companyContact.socials.instagram, label: 'Instagram' },
                { icon: LinkedinIcon, href: companyContact.socials.linkedin, label: 'LinkedIn' },
                { icon: FacebookIcon, href: companyContact.socials.facebook, label: 'Facebook' },
                { icon: YoutubeIcon, href: companyContact.socials.youtube, label: 'YouTube' },
                { icon: TwitterXIcon, href: companyContact.socials.x, label: 'X (Twitter)' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#9A9DA7] hover:text-white hover:border-[#FF3154] hover:bg-[#FF3154]/20 transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Core Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Core Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-[#9A9DA7]">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.path}
                    className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Who We Help */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Industries
            </h4>
            <ul className="space-y-2.5 text-sm text-[#9A9DA7]">
              {footerIndustries.map((ind) => (
                <li key={ind.label}>
                  <Link
                    to={ind.path}
                    className="hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-200"
                  >
                    {ind.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Contact
            </h4>
            <ul className="space-y-3.5 text-xs text-[#9A9DA7]">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#FF3154] flex-shrink-0 mt-0.5" />
                <span>{companyContact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#FF3154] flex-shrink-0" />
                <a href={`tel:${companyContact.phone}`} className="hover:text-white transition-colors">
                  {companyContact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#FF3154] flex-shrink-0" />
                <a href={`mailto:${companyContact.email}`} className="hover:text-white transition-colors">
                  {companyContact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9A9DA7]">
          <div>
            © 2026 Redcanvass. All rights reserved.
          </div>
          <div className="font-mono text-[11px] text-white/60 tracking-wider">
            GET FOUND • GET CUSTOMERS • GET REMEMBERED
          </div>
        </div>
      </div>
    </footer>
  );
};
