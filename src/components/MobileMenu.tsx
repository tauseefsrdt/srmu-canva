import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
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

  const mobileNavItems = [
    { label: 'Home', path: '/' },
    { label: 'What We Do', path: '/what-we-do' },
    { label: 'Get Found', path: '/get-found' },
    { label: 'Get Customers', path: '/get-customers' },
    { label: 'Get Remembered', path: '/get-remembered' },
    { label: 'Who We Help', path: '/who-we-help' },
    { label: "Let's Talk", path: '/lets-talk' },
  ];

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

      {/* Navigation Links with GSAP Stagger */}
      <div ref={linksRef} className="flex flex-col gap-3 my-auto py-6">
        {mobileNavItems.map((item, idx) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              onClick={onClose}
              className="group flex items-center justify-between text-2xl sm:text-3xl font-black uppercase tracking-tight text-white/85 hover:text-white transition-colors py-1"
            >
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono text-[#FF3154]">0{idx + 1}</span>
                <span className={`transition-transform duration-300 group-hover:translate-x-2 ${isActive ? 'text-[#FF3154]' : ''}`}>
                  {item.label}
                </span>
              </div>
              <ArrowRight size={18} className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#FF3154]" />
            </Link>
          );
        })}

        <div className="pt-4 flex flex-col sm:flex-row gap-3">
          <Link
            to="/lets-talk?intent=audit"
            onClick={onClose}
            className="w-full text-center py-3 rounded-full bg-[#FF3154] text-white font-bold text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(255,49,84,0.4)]"
          >
            Get a Free Audit
          </Link>
        </div>
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
          <span>{companyContact.location}</span>
        </div>
      </div>
    </div>
  );
};
