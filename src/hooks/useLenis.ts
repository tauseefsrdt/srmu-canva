import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Global reference for immediate route scroll resetting
declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function useLenis() {
  useEffect(() => {
    // Force browser to always restore scroll at the very top on reload
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    window.__lenis = lenis;

    // Immediately reset Lenis to top on load
    lenis.scrollTo(0, { immediate: true });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger once DOM layout finishes
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);
}

export function scrollToTop(immediate: boolean = true) {
  if (window.__lenis) {
    window.__lenis.scrollTo(0, { immediate });
  }
  window.scrollTo({ top: 0, left: 0, behavior: immediate ? 'instant' : 'smooth' });
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
}
