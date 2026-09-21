import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', showText = true, size = 'md' }) => {
  const sizeMap = {
    sm: { icon: 26, text: 'text-sm tracking-wider' },
    md: { icon: 32, text: 'text-base font-black tracking-wider' },
    lg: { icon: 42, text: 'text-xl font-black tracking-wider' },
  };

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-3 group transition-transform duration-300 hover:scale-105 flex-shrink-0 ${className}`}
      aria-label="Redcanvass Home"
    >
      <div className="relative flex items-center justify-center flex-shrink-0">
        {/* Dynamic Redcanvass geometric emblem */}
        <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl bg-gradient-to-br from-[#FF3154] via-[#FF167D] to-[#8B3DFF] flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,49,84,0.4)] group-hover:shadow-[0_0_25px_rgba(255,49,84,0.7)] transition-all">
          <span className="font-black font-mono text-base md:text-lg">R</span>
        </div>
        <span className="absolute -inset-1 bg-[#FF3154]/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`text-white font-black tracking-tight font-sans whitespace-nowrap ${sizeMap[size].text}`}>
            Redcanvass<span className="text-[#FF3154]">.</span>
          </span>
          <span className="text-[8.5px] uppercase tracking-[0.2em] text-[#9A9DA7] font-semibold -mt-1 group-hover:text-[#FF3154] transition-colors whitespace-nowrap">
            DIGITAL & AI SEARCH
          </span>
        </div>
      )}
    </Link>
  );
};
