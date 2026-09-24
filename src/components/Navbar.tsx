import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, ArrowUpRight, ChevronDown, Sparkles, Search, Users, Eye } from 'lucide-react';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { MagneticButton } from './MagneticButton';
import { navItems } from '../data/navigation';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const getPillarIcon = (label: string) => {
    switch (label) {
      case 'Get Found':
        return <Search size={14} className="text-[#FF3154]" />;
      case 'Get Customers':
        return <Users size={14} className="text-[#E5B362]" />;
      case 'Get Remembered':
        return <Eye size={14} className="text-[#FF3154]" />;
      default:
        return <Sparkles size={14} className="text-[#9A9DA7]" />;
    }
  };

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

          {/* Center: Desktop Navigation Bar */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#0D1014]/90 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-xl shadow-lg">
            {navItems.map((item) => {
              const isItemActive = location.pathname === item.path || 
                (item.children && item.children.some(c => location.pathname === c.path.split('#')[0]));

              if (item.hasDropdown && item.children) {
                const isOpen = activeDropdown === item.label;
                return (
                  <div 
                    key={item.label} 
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavLink
                      to={item.path}
                      className={`relative px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap ${
                        isItemActive
                          ? 'text-white font-extrabold bg-[#FF3154]/20 border border-[#FF3154]/50 shadow-[0_0_12px_rgba(255,49,84,0.3)]' 
                          : 'text-[#9A9DA7] hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={12} className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#FF3154]' : ''}`} />
                    </NavLink>

                    {/* Submenu Dropdown with invisible hover bridge wrapper */}
                    {isOpen && (
                      <div 
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-80 z-[100]"
                        onMouseEnter={() => handleMouseEnter(item.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="p-2.5 rounded-2xl bg-[#12151D] border border-white/25 shadow-[0_25px_60px_rgba(0,0,0,0.98)] animate-fade-in space-y-1.5">
                          {item.children.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.path}
                              onClick={() => setActiveDropdown(null)}
                              className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.12] border border-white/5 hover:border-[#FF3154]/40 flex items-start gap-3 transition-all group cursor-pointer"
                            >
                              <div className="w-8 h-8 rounded-lg bg-white/10 text-[#FF3154] group-hover:bg-[#FF3154] group-hover:text-white flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors">
                                {getPillarIcon(item.label)}
                              </div>
                              <div className="flex-grow">
                                <div className="text-sm font-bold text-white group-hover:text-[#FF3154] transition-colors">
                                  {sub.label}
                                </div>
                                {sub.description && (
                                  <p className="text-xs text-[#B0B4BE] leading-relaxed mt-0.5 group-hover:text-white transition-colors">
                                    {sub.description}
                                  </p>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-3.5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'text-white font-extrabold bg-[#FF3154]/20 border border-[#FF3154]/50 shadow-[0_0_12px_rgba(255,49,84,0.3)]'
                        : 'text-[#9A9DA7] hover:text-white hover:bg-white/5'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/lets-talk?intent=audit"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full border border-white/20 text-white hover:border-[#FF3154] hover:bg-[#FF3154]/10 transition-all duration-300 whitespace-nowrap"
            >
              Get a Free Audit
            </Link>

            <MagneticButton
              href="/lets-talk"
              variant="primary"
              size="sm"
              className="shadow-[0_0_20px_rgba(255,49,84,0.4)]"
            >
              <span className="flex items-center gap-1.5">
                Let's Talk
                <ArrowUpRight size={14} />
              </span>
            </MagneticButton>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/lets-talk?intent=audit"
              className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full bg-[#FF3154]/20 border border-[#FF3154]/50 text-white"
            >
              Free Audit
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
