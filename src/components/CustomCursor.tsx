import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const checkHoverElements = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const projectCard = target.closest('[data-cursor="project"]');
      const interactiveEl = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]');

      if (projectCard) {
        setIsHovered(true);
        setCursorText('VIEW PROJECT');
      } else if (interactiveEl) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    // Smooth lerp for follower cursor
    const render = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', checkHoverElements);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', checkHoverElements);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  // Don't render on mobile/touch screen
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <div className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Center dot cursor */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2.5 h-2.5 -ml-1.25 -mt-1.25 bg-[#FF3154] rounded-full shadow-[0_0_10px_#FF3154] pointer-events-none transition-transform duration-75 ease-out"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />

      {/* Trailing follower circle / Project hover badge */}
      <div 
        ref={followerRef} 
        className={`fixed top-0 left-0 -ml-5 -mt-5 rounded-full pointer-events-none flex items-center justify-center text-center font-bold transition-all duration-300 ease-out border ${
          cursorText
            ? 'w-24 h-24 -ml-12 -mt-12 bg-[#FF3154] text-white border-transparent text-[10px] tracking-wider leading-tight shadow-[0_0_30px_rgba(255,49,84,0.6)] scale-100'
            : isHovered
            ? 'w-12 h-12 -ml-6 -mt-6 bg-[#FF3154]/20 border-[#FF3154]/60 backdrop-blur-[2px] scale-125'
            : isClicking
            ? 'w-8 h-8 -ml-4 -mt-4 bg-white/20 border-white/40 scale-90'
            : 'w-10 h-10 border-white/25 bg-transparent'
        }`}
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        {cursorText && (
          <span className="px-2 animate-fade-in font-extrabold uppercase select-none">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};
