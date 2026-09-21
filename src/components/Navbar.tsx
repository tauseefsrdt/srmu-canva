import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, ArrowUpRight, ChevronDown, Search, TrendingUp, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { MagneticButton } from './MagneticButton';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { 
      label: 'What We Do', 
      path: '/what-we-do', 
      hasDropdown: true 
    },
    { label: 'Who We Help', path: '/who-we-help' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 md:py-4 ${
          isScrolled 
            ? 'glass-nav py-2.5 md:py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Left: Brand Logo */}
          <Logo size="md" />

          {/* Center: Desktop Navigation Bar (Clean & Compact Pill) */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#0D1014]/85 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-xl shadow-lg">
            {navLinks.map((item) => {
              const isPillarActive = item.hasDropdown && (location.pathname === '/what-we-do' || location.pathname.startsWith('/get-'));
              const isDirectActive = location.pathname === item.path;
              const isActive = isPillarActive || isDirectActive;

              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.label} 
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <NavLink
                      to={item.path}
                      className={`relative px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap ${
                        isActive
                          ? 'text-white font-extrabold' 
                          : 'text-[#9A9DA7] hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <ChevronDown size={13} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-[#FF3154]' : ''}`} />
                      {isActive && (
                        <span className="absolute inset-0 rounded-full bg-[#FF3154]/20 border border-[#FF3154]/50 shadow-[0_0_15px_rgba(255,49,84,0.35)] animate-fade-in" />
                      )}
                    </NavLink>

                    {/* What We Do Dropdown Menu */}
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-72 p-2.5 rounded-2xl bg-[#0D1014]/95 border border-white/15 backdrop-blur-2xl shadow-2xl animate-scale-up space-y-1 z-50">
                        <Link
                          to="/get-found"
                          className="p-2.5 rounded-xl hover:bg-white/10 flex items-start gap-3 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#FF3154]/15 text-[#FF3154] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Search size={16} />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-[#FF3154] transition-colors">
                              Get Found
                            </div>
                            <p className="text-[10px] text-[#9A9DA7] leading-tight mt-0.5">
                              SEO, Local SEO, AI Search & AEO
                            </p>
                          </div>
                        </Link>

                        <Link
                          to="/get-customers"
                          className="p-2.5 rounded-xl hover:bg-white/10 flex items-start gap-3 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#8B3DFF]/15 text-[#8B3DFF] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <TrendingUp size={16} />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-[#8B3DFF] transition-colors">
                              Get Customers
                            </div>
                            <p className="text-[10px] text-[#9A9DA7] leading-tight mt-0.5">
                              Google Ads, Meta Ads & Lead Gen
                            </p>
                          </div>
                        </Link>

                        <Link
                          to="/get-remembered"
                          className="p-2.5 rounded-xl hover:bg-white/10 flex items-start gap-3 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#28D7FF]/15 text-[#28D7FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Sparkles size={16} />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-[#28D7FF] transition-colors">
                              Get Remembered
                            </div>
                            <p className="text-[10px] text-[#9A9DA7] leading-tight mt-0.5">
                              Ad Creatives, Landing Pages & Design
                            </p>
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive: active }) => `
                    relative px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 whitespace-nowrap
                    ${active
                      ? 'text-white font-extrabold' 
                      : 'text-[#9A9DA7] hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  {({ isActive: active }) => (
                    <>
                      <span className="relative z-10">{item.label}</span>
                      {active && (
                        <span 
                          className="absolute inset-0 rounded-full bg-[#FF3154]/20 border border-[#FF3154]/50 shadow-[0_0_15px_rgba(255,49,84,0.35)] animate-fade-in"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action: Let's Talk CTA */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            <MagneticButton 
              to="/lets-talk" 
              variant="primary"
              className="!px-5 !py-2.5 !text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,49,84,0.4)] whitespace-nowrap"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 transition-colors flex-shrink-0"
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
