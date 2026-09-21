import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 4;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setCount(100);

        gsap.to('.preloader-container', {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut',
          delay: 0.2,
          onComplete: () => {
            onComplete();
          }
        });
      } else {
        setCount(current);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="preloader-container fixed inset-0 z-[99999] bg-[#050608] flex flex-col justify-between p-8 md:p-14 select-none overflow-hidden">
      {/* Background glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#FF3154]/20 via-[#8B3DFF]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex justify-between items-center text-xs tracking-widest text-[#9A9DA7] uppercase font-semibold">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF3154] animate-ping" />
          SRMUCANVAS STUDIO
        </span>
        <span>EXPERIENCE 2026</span>
      </div>

      {/* Center Lion Logo and Title */}
      <div className="flex flex-col items-center justify-center text-center relative z-10">
        <div className="w-16 h-16 md:w-24 md:h-24 mb-6 relative flex items-center justify-center">
          <svg 
            viewBox="0 0 100 100" 
            className="w-full h-full text-[#E5B362] animate-pulse"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M50 12C38 12 28 20 25 30C22 28 17 30 17 35C17 40 22 42 24 45C22 50 22 58 27 65C25 70 23 78 28 84C34 90 44 92 52 90C62 88 70 82 74 74C78 66 79 56 76 48C79 44 82 38 80 32C78 26 71 25 68 28C64 18 56 12 50 12ZM48 24C54 24 59 28 61 34C58 35 55 37 53 40C49 37 43 38 41 42C38 38 34 38 32 42C31 34 38 24 48 24ZM38 50C40 50 42 52 42 54C42 56 40 58 38 58C36 58 34 56 34 54C34 52 36 50 38 50ZM60 50C62 50 64 52 64 54C64 56 62 58 60 58C58 58 56 56 56 54C56 52 58 50 60 50ZM49 60C53 60 56 63 56 67C56 71 52 74 49 74C46 74 42 71 42 67C42 63 45 60 49 60Z" 
              fill="currentColor"
            />
          </svg>
        </div>

        <h1 className="text-3xl md:text-5xl font-black tracking-widest uppercase text-white mb-2">
          SRMUCANVAS
        </h1>
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#9A9DA7]">
          Good Design. Better Business.
        </p>
      </div>

      {/* Bottom Progress Bar & Percentage */}
      <div className="w-full max-w-xl mx-auto space-y-3">
        <div className="flex justify-between items-baseline text-sm font-mono text-[#9A9DA7]">
          <span>INITIALIZING DIGITAL ENGINE</span>
          <span className="text-xl md:text-2xl font-bold text-white tracking-tighter">
            {count}%
          </span>
        </div>
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#FF3154] via-[#FF167D] to-[#8B3DFF] transition-all duration-75 ease-out rounded-full"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>
    </div>
  );
};
