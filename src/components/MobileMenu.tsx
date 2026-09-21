import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ArrowRight, Mail, Phone, MapPin, Search, TrendingUp, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { companyContact } from '../data/navigation';
import { Logo } from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      const tl = gsap.timeline();
      tl.to(menuRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: 'power3.out',
      });
      
      if (linksRef.current) {
        tl.fromTo(
          linksRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.05, duration: 0.35, ease: 'power3.out' },
          '-=0.15'
        );
      }
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      ref={menuRef} 
      className="fixed inset-0 z-[100] bg-[#050608]/98 backdrop-blur-3xl flex flex-col justify-between p-6 md:p-10 opacity-0 -translate-y-4 overflow-y-auto"
    >
      {/* Top Bar inside Menu */}
      <div className="flex items-center justify-between border-b border-white/10 pb-5">
        <Logo size="md" />
        <button 
          onClick={onClose}
          className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
          aria-label="Close Menu"
        >
          <X size={22} />
        </button>
      </div>

      {/* Navigation Tree strictly mirroring DOCX structure */}
      <div ref={linksRef} className="flex flex-col gap-6 my-auto py-6">
        {/* HOME */}
        <Link
          to="/"
          onClick={onClose}
          className={`flex items-center justify-between text-2xl sm:text-3xl font-black uppercase tracking-tight transition-colors ${
            location.pathname === '/' ? 'text-[#FF3154]' : 'text-white/90 hover:text-white'
          }`}
        >
          <span>HOME</span>
          <ArrowRight size={18} className="text-[#FF3154]" />
        </Link>

        {/* WHAT WE DO */}
        <div className="space-y-3">
          <Link
            to="/what-we-do"
            onClick={onClose}
            className={`flex items-center justify-between text-2xl sm:text-3xl font-black uppercase tracking-tight transition-colors ${
              location.pathname === '/what-we-do' ? 'text-[#FF3154]' : 'text-white/90 hover:text-white'
            }`}
          >
            <span>WHAT WE DO</span>
            <ArrowRight size={18} className="text-[#FF3154]" />
          </Link>

          {/* Sub-Pillars Tree */}
          <div className="pl-4 border-l-2 border-white/10 space-y-4 pt-1">
            {/* GET FOUND */}
            <div className="space-y-1.5">
              <Link
                to="/get-found"
                onClick={onClose}
                className="flex items-center gap-2 text-base font-bold text-white hover:text-[#FF3154] uppercase tracking-wider"
              >
                <Search size={14} className="text-[#FF3154]" />
                <span>GET FOUND</span>
              </Link>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-[#9A9DA7] pl-5">
                <Link to="/get-found" onClick={onClose} className="hover:text-white">SEO</Link> •
                <Link to="/get-found" onClick={onClose} className="hover:text-white">Local SEO</Link> •
                <Link to="/get-found" onClick={onClose} className="hover:text-white">AI Search</Link> •
                <Link to="/get-found" onClick={onClose} className="hover:text-white">AEO</Link>
              </div>
            </div>

            {/* GET CUSTOMERS */}
            <div className="space-y-1.5">
              <Link
                to="/get-customers"
                onClick={onClose}
                className="flex items-center gap-2 text-base font-bold text-white hover:text-[#8B3DFF] uppercase tracking-wider"
              >
                <TrendingUp size={14} className="text-[#8B3DFF]" />
                <span>GET CUSTOMERS</span>
              </Link>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-[#9A9DA7] pl-5">
                <Link to="/get-customers" onClick={onClose} className="hover:text-white">Google Ads</Link> •
                <Link to="/get-customers" onClick={onClose} className="hover:text-white">Meta Ads</Link> •
                <Link to="/get-customers" onClick={onClose} className="hover:text-white">YouTube Ads</Link> •
                <Link to="/get-customers" onClick={onClose} className="hover:text-white">Lead Generation</Link> •
                <Link to="/get-customers" onClick={onClose} className="hover:text-white">Remarketing</Link>
              </div>
            </div>

            {/* GET REMEMBERED */}
            <div className="space-y-1.5">
              <Link
                to="/get-remembered"
                onClick={onClose}
                className="flex items-center gap-2 text-base font-bold text-white hover:text-[#28D7FF] uppercase tracking-wider"
              >
                <Sparkles size={14} className="text-[#28D7FF]" />
                <span>GET REMEMBERED</span>
              </Link>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-[#9A9DA7] pl-5">
                <Link to="/get-remembered" onClick={onClose} className="hover:text-white">Ad Creatives</Link> •
                <Link to="/get-remembered" onClick={onClose} className="hover:text-white">Landing Pages</Link> •
                <Link to="/get-remembered" onClick={onClose} className="hover:text-white">Campaign Design</Link> •
                <Link to="/get-remembered" onClick={onClose} className="hover:text-white">Flyers & Posters</Link>
              </div>
            </div>
          </div>
        </div>

        {/* WHO WE HELP */}
        <Link
          to="/who-we-help"
          onClick={onClose}
          className={`flex items-center justify-between text-2xl sm:text-3xl font-black uppercase tracking-tight transition-colors ${
            location.pathname === '/who-we-help' ? 'text-[#FF3154]' : 'text-white/90 hover:text-white'
          }`}
        >
          <span>WHO WE HELP</span>
          <ArrowRight size={18} className="text-[#FF3154]" />
        </Link>

        {/* LET'S TALK */}
        <Link
          to="/lets-talk"
          onClick={onClose}
          className={`flex items-center justify-between text-2xl sm:text-3xl font-black uppercase tracking-tight transition-colors ${
            location.pathname === '/lets-talk' ? 'text-[#FF3154]' : 'text-white/90 hover:text-white'
          }`}
        >
          <span>LET'S TALK</span>
          <ArrowRight size={18} className="text-[#FF3154]" />
        </Link>
      </div>

      {/* Bottom Contact Details */}
      <div className="border-t border-white/10 pt-5 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[#9A9DA7]">
        <div className="flex items-center gap-2">
          <Mail size={15} className="text-[#FF3154]" />
          <span>{companyContact.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={15} className="text-[#FF3154]" />
          <span>{companyContact.phoneDisplay}</span>
        </div>
        <div className="flex items-start gap-2 md:col-span-2">
          <MapPin size={15} className="text-[#FF3154] flex-shrink-0 mt-0.5" />
          <span>{companyContact.address}</span>
        </div>
      </div>
    </div>
  );
};
