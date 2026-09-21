import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { navItems, companyContact } from '../data/navigation';
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
        duration: 0.4,
        ease: 'power3.out',
      });
      
      if (linksRef.current) {
        tl.fromTo(
          linksRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.4, ease: 'power3.out' },
          '-=0.2'
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
      className="fixed inset-0 z-[100] bg-[#050608]/95 backdrop-blur-2xl flex flex-col justify-between p-6 md:p-10 opacity-0 -translate-y-4 overflow-y-auto"
    >
      {/* Top Bar inside Menu */}
      <div className="flex items-center justify-between border-b border-white/10 pb-6">
        <Logo size="md" />
        <button 
          onClick={onClose}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
          aria-label="Close Menu"
        >
          <X size={24} />
        </button>
      </div>

      {/* Navigation Links with GSAP Stagger */}
      <div ref={linksRef} className="flex flex-col gap-6 my-auto py-8">
        {navItems.map((item, idx) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              onClick={onClose}
              className="group flex items-center justify-between text-3xl md:text-5xl font-black uppercase tracking-tight text-white/80 hover:text-white transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-[#FF3154]">0{idx + 1}</span>
                <span className={`transition-transform duration-300 group-hover:translate-x-3 ${isActive ? 'text-[#FF3154]' : ''}`}>
                  {item.label}
                </span>
              </div>
              <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#FF3154]" />
            </Link>
          );
        })}
      </div>

      {/* Bottom Contact Details */}
      <div className="border-t border-white/10 pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#9A9DA7]">
        <div className="flex items-center gap-2">
          <Mail size={16} className="text-[#FF3154]" />
          <span>{companyContact.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={16} className="text-[#FF3154]" />
          <span>{companyContact.phoneDisplay}</span>
        </div>
        <div className="flex items-start gap-2 md:col-span-2">
          <MapPin size={16} className="text-[#FF3154] flex-shrink-0 mt-0.5" />
          <span>{companyContact.address}</span>
        </div>
      </div>
    </div>
  );
};
