import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', showText = true, size = 'md' }) => {
  const sizeMap = {
    sm: { icon: 24, text: 'text-sm tracking-tight' },
    md: { icon: 30, text: 'text-lg font-black tracking-tight' },
    lg: { icon: 38, text: 'text-2xl font-black tracking-tight' },
  };

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-2.5 group transition-transform duration-300 hover:scale-105 flex-shrink-0 ${className}`}
      aria-label="Redcanvass Home"
    >
      <div className="relative flex items-center justify-center flex-shrink-0">
        <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-gradient-to-br from-[#FF3154] to-[#E5B362] p-[1.5px] shadow-[0_0_15px_rgba(255,49,84,0.4)] group-hover:shadow-[0_0_22px_rgba(255,49,84,0.7)] transition-all">
          <div className="w-full h-full bg-[#0D1014] rounded-[10px] flex items-center justify-center">
            <span className="font-black text-[#FF3154] text-base md:text-lg group-hover:text-white transition-colors">
              R
            </span>
          </div>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`text-white font-black font-sans leading-none whitespace-nowrap ${sizeMap[size].text}`}>
            Red<span className="text-[#FF3154]">canvass</span>
          </span>
          <span className="text-[9px] uppercase tracking-[0.22em] text-[#9A9DA7] font-semibold mt-0.5 group-hover:text-white transition-colors whitespace-nowrap">
            Digital &amp; AI Search
          </span>
        </div>
      )}
    </Link>
  );
};
