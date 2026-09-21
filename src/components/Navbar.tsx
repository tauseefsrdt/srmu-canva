import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, ArrowUpRight } from 'lucide-react';
import { navItems } from '../data/navigation';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { MagneticButton } from './MagneticButton';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${
          isScrolled 
            ? 'glass-nav py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo size="md" />

          {/* Center Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0D1014]/60 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive: active }) => `
                    relative px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300
                    ${active || isActive
                      ? 'text-white font-bold' 
                      : 'text-[#9A9DA7] hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  {({ isActive: active }) => (
                    <>
                      <span className="relative z-10">{item.label}</span>
                      {(active || isActive) && (
                        <span 
                          className="absolute inset-0 rounded-full bg-[#FF3154]/20 border border-[#FF3154]/50 shadow-[0_0_15px_rgba(255,49,84,0.3)] animate-fade-in"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action: Let's Talk Magnetic CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <MagneticButton 
              to="/contact" 
              variant="secondary"
              className="!px-5 !py-2.5 !text-xs uppercase tracking-wider border-white/20 hover:border-[#FF3154] hover:shadow-[0_0_20px_rgba(255,49,84,0.3)]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={15} className="text-[#FF3154] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
            aria-label="Open Navigation Menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};
