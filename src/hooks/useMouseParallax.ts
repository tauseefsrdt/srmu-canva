import { useState, useEffect, RefObject } from 'react';

interface ParallaxOffset {
  x: number;
  y: number;
}

export function useMouseParallax(containerRef?: RefObject<HTMLElement | null>, strength: number = 20): ParallaxOffset {
  const [offset, setOffset] = useState<ParallaxOffset>({ x: 0, y: 0 });

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      let clientX = e.clientX;
      let clientY = e.clientY;
      let width = window.innerWidth;
      let height = window.innerHeight;

      if (containerRef && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        clientX = e.clientX - rect.left;
        clientY = e.clientY - rect.top;
        width = rect.width;
        height = rect.height;
      }

      const normalizedX = (clientX / width - 0.5) * 2;
      const normalizedY = (clientY / height - 0.5) * 2;

      setOffset({
        x: normalizedX * strength,
        y: normalizedY * strength,
      });
    };

    const target = containerRef?.current || window;
    target.addEventListener('mousemove', handleMouseMove as EventListener);

    return () => {
      target.removeEventListener('mousemove', handleMouseMove as EventListener);
    };
  }, [containerRef, strength]);

  return offset;
}
