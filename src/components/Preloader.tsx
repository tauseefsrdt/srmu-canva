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
      current += Math.floor(Math.random() * 8) + 5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setCount(100);

        gsap.to('.preloader-container', {
          yPercent: -100,
          duration: 0.7,
          ease: 'power4.inOut',
          delay: 0.15,
          onComplete: () => {
            onComplete();
          }
        });
      } else {
        setCount(current);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="preloader-container fixed inset-0 z-[99999] bg-[#050608] flex flex-col justify-between p-8 md:p-14 select-none overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#FF3154]/20 via-[#E5B362]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex justify-between items-center text-xs tracking-widest text-[#9A9DA7] uppercase font-semibold">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF3154] animate-ping" />
          REDCANVASS
        </span>
        <span>DIGITAL &amp; AI SEARCH</span>
      </div>

      {/* Center Logo and Title */}
      <div className="flex flex-col items-center justify-center text-center relative z-10">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-gradient-to-br from-[#FF3154] to-[#E5B362] p-[2px] mb-6 shadow-[0_0_30px_rgba(255,49,84,0.4)]">
          <div className="w-full h-full bg-[#0D1014] rounded-[22px] flex items-center justify-center">
            <span className="text-3xl font-black text-[#FF3154]">R</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-2">
          Red<span className="text-[#FF3154]">canvass</span>
        </h1>
        <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#9A9DA7]">
          Get Found. Get Customers. Get Remembered.
        </p>
      </div>

      {/* Bottom Progress Bar & Percentage */}
      <div className="w-full max-w-xl mx-auto space-y-3">
        <div className="flex justify-between items-baseline text-sm font-mono text-[#9A9DA7]">
          <span>LOADING EXPERIENCE</span>
          <span className="text-xl md:text-2xl font-bold text-white tracking-tighter">
            {count}%
          </span>
        </div>
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#FF3154] via-[#FF167D] to-[#E5B362] transition-all duration-75 ease-out rounded-full"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>
    </div>
  );
};
