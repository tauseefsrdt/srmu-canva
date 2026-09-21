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
    md: { icon: 34, text: 'text-base font-extrabold tracking-widest' },
    lg: { icon: 44, text: 'text-xl font-black tracking-widest' },
  };

  return (
    <Link 
      to="/" 
      className={`inline-flex items-center gap-3 group transition-transform duration-300 hover:scale-105 flex-shrink-0 ${className}`}
      aria-label="SRMUCANVAS Home"
    >
      <div className="relative flex items-center justify-center flex-shrink-0">
        {/* Lion emblem in gold outline / SVG */}
        <svg 
          width={sizeMap[size].icon} 
          height={sizeMap[size].icon} 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#E5B362] filter drop-shadow-[0_0_8px_rgba(229,179,98,0.35)] transition-transform duration-500 group-hover:rotate-3"
        >
          <path 
            d="M50 12C38 12 28 20 25 30C22 28 17 30 17 35C17 40 22 42 24 45C22 50 22 58 27 65C25 70 23 78 28 84C34 90 44 92 52 90C62 88 70 82 74 74C78 66 79 56 76 48C79 44 82 38 80 32C78 26 71 25 68 28C64 18 56 12 50 12ZM48 24C54 24 59 28 61 34C58 35 55 37 53 40C49 37 43 38 41 42C38 38 34 38 32 42C31 34 38 24 48 24ZM38 50C40 50 42 52 42 54C42 56 40 58 38 58C36 58 34 56 34 54C34 52 36 50 38 50ZM60 50C62 50 64 52 64 54C64 56 62 58 60 58C58 58 56 56 56 54C56 52 58 50 60 50ZM49 60C53 60 56 63 56 67C56 71 52 74 49 74C46 74 42 71 42 67C42 63 45 60 49 60Z" 
            fill="currentColor"
          />
        </svg>
        <span className="absolute -inset-1 bg-[#E5B362]/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`text-white font-black uppercase font-sans whitespace-nowrap ${sizeMap[size].text}`}>
            SRMUCANVAS
          </span>
          <span className="text-[9px] uppercase tracking-[0.22em] text-[#9A9DA7] font-semibold -mt-1 group-hover:text-[#FF3154] transition-colors whitespace-nowrap">
            CREATIVE STUDIO
          </span>
        </div>
      )}
    </Link>
  );
};
