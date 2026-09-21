import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, ArrowUpRight, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { MagneticButton } from './MagneticButton';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 md:py-4 ${isScrolled
            ? 'glass-nav py-2 md:py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)] bg-[#050608]/90 backdrop-blur-xl'
            : 'bg-transparent'
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Left: Brand Logo */}
          <Logo size="md" />

          {/* Center: Exact DOCX 1-to-1 Navigation Menu */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#0D1014]/90 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-xl shadow-lg">

            {/* 1. HOME */}
            <NavLink
              to="/"
              className={({ isActive }) => `
                relative px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 whitespace-nowrap
                ${isActive
                  ? 'text-white font-extrabold bg-[#FF3154]/20 border border-[#FF3154]/50 shadow-[0_0_15px_rgba(255,49,84,0.35)]'
                  : 'text-[#9A9DA7] hover:text-white hover:bg-white/5 border border-transparent'
                }
              `}
            >
              HOME
            </NavLink>

            {/* 2. WHAT WE DO */}
            <NavLink
              to="/what-we-do"
              className={({ isActive }) => `
                relative px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 whitespace-nowrap
                ${isActive
                  ? 'text-white font-extrabold bg-[#FF3154]/20 border border-[#FF3154]/50 shadow-[0_0_15px_rgba(255,49,84,0.35)]'
                  : 'text-[#9A9DA7] hover:text-white hover:bg-white/5 border border-transparent'
                }
              `}
            >
              WHAT WE DO
            </NavLink>

            {/* 3. GET FOUND (Dropdown: SEO, Local SEO, AI Search, AEO) */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('get-found')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavLink
                to="/get-found"
                className={`relative px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 flex items-center gap-1 whitespace-nowrap ${location.pathname === '/get-found'
                    ? 'text-white font-extrabold bg-[#FF3154]/20 border border-[#FF3154]/50 shadow-[0_0_15px_rgba(255,49,84,0.35)]'
                    : 'text-[#9A9DA7] hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
              >
                <span>GET FOUND</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${openDropdown === 'get-found' ? 'rotate-180 text-[#FF3154]' : ''}`} />
              </NavLink>

              {openDropdown === 'get-found' && (
                <div className="absolute top-full left-0 mt-2 w-52 p-2 rounded-2xl bg-[#0D1014]/98 border border-white/15 backdrop-blur-2xl shadow-2xl animate-scale-up space-y-1 z-50">
                  <div className="px-3 py-1.5 text-[10px] font-mono text-[#FF3154] uppercase tracking-widest font-bold border-b border-white/10">
                    Get Found Services
                  </div>
                  <Link to="/get-found" className="block px-3 py-2 rounded-xl text-xs font-bold text-[#9A9DA7] hover:text-white hover:bg-white/10 transition-colors">
                    SEO
                  </Link>
                  <Link to="/get-found" className="block px-3 py-2 rounded-xl text-xs font-bold text-[#9A9DA7] hover:text-white hover:bg-white/10 transition-colors">
                    Local SEO
                  </Link>
                  <Link to="/get-found" className="block px-3 py-2 rounded-xl text-xs font-bold text-[#9A9DA7] hover:text-white hover:bg-white/10 transition-colors">
                    AI Search
                  </Link>
                  <Link to="/get-found" className="block px-3 py-2 rounded-xl text-xs font-bold text-[#9A9DA7] hover:text-white hover:bg-white/10 transition-colors">
                    AEO
                  </Link>
                </div>
              )}
            </div>

            {/* 4. GET CUSTOMERS (Dropdown: Google Ads, Meta Ads, YouTube Ads, Lead Generation, Remarketing) */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('get-customers')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavLink
                to="/get-customers"
                className={`relative px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 flex items-center gap-1 whitespace-nowrap ${location.pathname === '/get-customers'
                    ? 'text-white font-extrabold bg-[#8B3DFF]/20 border border-[#8B3DFF]/50 shadow-[0_0_15px_rgba(139,61,255,0.35)]'
                    : 'text-[#9A9DA7] hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
              >
                <span>GET CUSTOMERS</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${openDropdown === 'get-customers' ? 'rotate-180 text-[#8B3DFF]' : ''}`} />
              </NavLink>

              {openDropdown === 'get-customers' && (
                <div className="absolute top-full left-0 mt-2 w-56 p-2 rounded-2xl bg-[#0D1014]/98 border border-white/15 backdrop-blur-2xl shadow-2xl animate-scale-up space-y-1 z-50">
                  <div className="px-3 py-1.5 text-[10px] font-mono text-[#8B3DFF] uppercase tracking-widest font-bold border-b border-white/10">
                    Get Customers Services
                  </div>
                  <Link to="/get-customers" className="block px-3 py-2 rounded-xl text-xs font-bold text-[#9A9DA7] hover:text-white hover:bg-white/10 transition-colors">
                    Google Ads
                  </Link>
                  <Link to="/get-customers" className="block px-3 py-2 rounded-xl text-xs font-bold text-[#9A9DA7] hover:text-white hover:bg-white/10 transition-colors">
                    Meta Ads
                  </Link>
                  <Link to="/get-customers" className="block px-3 py-2 rounded-xl text-xs font-bold text-[#9A9DA7] hover:text-white hover:bg-white/10 transition-colors">
                    YouTube Ads
                  </Link>
                  <Link to="/get-customers" className="block px-3 py-2 rounded-xl text-xs font-bold text-[#9A9DA7] hover:text-white hover:bg-white/10 transition-colors">
                    Lead Generation
                  </Link>
                  <Link to="/get-customers" className="block px-3 py-2 rounded-xl text-xs font-bold text-[#9A9DA7] hover:text-white hover:bg-white/10 transition-colors">
                    Remarketing
                  </Link>
                </div>
              )}
            </div>

            {/* 5. GET REMEMBERED (Dropdown: Ad Creatives, Landing Pages, Campaign Design, Flyers & Posters) */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('get-remembered')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <NavLink
                to="/get-remembered"
                className={`relative px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 flex items-center gap-1 whitespace-nowrap ${location.pathname === '/get-remembered'
                    ? 'text-white font-extrabold bg-[#28D7FF]/20 border border-[#28D7FF]/50 shadow-[0_0_15px_rgba(40,215,255,0.35)]'
                    : 'text-[#9A9DA7] hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
              >
                <span>GET REMEMBERED</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${openDropdown === 'get-remembered' ? 'rotate-180 text-[#28D7FF]' : ''}`} />
              </NavLink>

              {openDropdown === 'get-remembered' && (
                <div className="absolute top-full left-0 mt-2 w-56 p-2 rounded-2xl bg-[#0D1014]/98 border border-white/15 backdrop-blur-2xl shadow-2xl animate-scale-up space-y-1 z-50">
                  <div className="px-3 py-1.5 text-[10px] font-mono text-[#28D7FF] uppercase tracking-widest font-bold border-b border-white/10">
                    Get Remembered Services
                  </div>
                  <Link to="/get-remembered" className="block px-3 py-2 rounded-xl text-xs font-bold text-[#9A9DA7] hover:text-white hover:bg-white/10 transition-colors">
                    Ad Creatives
                  </Link>
                  <Link to="/get-remembered" className="block px-3 py-2 rounded-xl text-xs font-bold text-[#9A9DA7] hover:text-white hover:bg-white/10 transition-colors">
                    Landing Pages
                  </Link>
                  <Link to="/get-remembered" className="block px-3 py-2 rounded-xl text-xs font-bold text-[#9A9DA7] hover:text-white hover:bg-white/10 transition-colors">
                    Campaign Design
                  </Link>
                  <Link to="/get-remembered" className="block px-3 py-2 rounded-xl text-xs font-bold text-[#9A9DA7] hover:text-white hover:bg-white/10 transition-colors">
                    Flyers & Posters
                  </Link>
                </div>
              )}
            </div>

            {/* 6. WHO WE HELP */}
            <NavLink
              to="/who-we-help"
              className={({ isActive }) => `
                relative px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 whitespace-nowrap
                ${isActive
                  ? 'text-white font-extrabold bg-[#FF3154]/20 border border-[#FF3154]/50 shadow-[0_0_15px_rgba(255,49,84,0.35)]'
                  : 'text-[#9A9DA7] hover:text-white hover:bg-white/5 border border-transparent'
                }
              `}
            >
              WHO WE HELP
            </NavLink>



          </nav>

          {/* Right Action: LET'S TALK CTA Button */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
            <MagneticButton
              to="/lets-talk"
              variant="primary"
              className="!px-5 !py-2.5 !text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(255,49,84,0.4)] whitespace-nowrap"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="xl:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 transition-colors flex-shrink-0"
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
