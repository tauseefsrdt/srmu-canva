import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Utility to check reduced motion preference
export const isReducedMotion = (): boolean => {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Split text reveal: animates words or elements with upward motion, blur-to-sharp and stagger
 */
export const revealText = (
  targets: gsap.DOMTarget,
  options: {
    trigger?: gsap.DOMTarget;
    start?: string;
    delay?: number;
    stagger?: number;
    duration?: number;
    yOffset?: number;
    blur?: number;
    ease?: string;
  } = {}
) => {
  if (isReducedMotion()) {
    gsap.set(targets, { opacity: 1, y: 0, filter: 'none' });
    return;
  }

  const {
    trigger,
    start = 'top 85%',
    delay = 0,
    stagger = 0.08,
    duration = 1.0,
    yOffset = 40,
    blur = 8,
    ease = 'power3.out',
  } = options;

  const vars: gsap.TweenVars = {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    duration,
    stagger,
    delay,
    ease,
  };

  if (trigger) {
    vars.scrollTrigger = {
      trigger,
      start,
      toggleActions: 'play none none none',
    };
  }

  gsap.fromTo(
    targets,
    {
      opacity: 0,
      y: yOffset,
      filter: `blur(${blur}px)`,
    },
    vars
  );
};

/**
 * Cinematic Image Reveal: clip-path wipe + smooth scale down from 1.15 to 1
 */
export const revealImage = (
  target: gsap.DOMTarget,
  options: {
    trigger?: gsap.DOMTarget;
    start?: string;
    duration?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    scaleFrom?: number;
    ease?: string;
  } = {}
) => {
  if (isReducedMotion()) {
    gsap.set(target, { opacity: 1, clipPath: 'inset(0 0 0% 0)', scale: 1 });
    return;
  }

  const {
    trigger = target,
    start = 'top 85%',
    duration = 1.3,
    direction = 'up',
    scaleFrom = 1.15,
    ease = 'power4.out',
  } = options;

  let initialClip = 'inset(0 0 100% 0)';
  if (direction === 'down') initialClip = 'inset(100% 0 0 0)';
  if (direction === 'left') initialClip = 'inset(0 100% 0 0)';
  if (direction === 'right') initialClip = 'inset(0 0 0 100%)';

  gsap.fromTo(
    target,
    {
      clipPath: initialClip,
      scale: scaleFrom,
      opacity: 0.2,
    },
    {
      clipPath: 'inset(0 0 0% 0)',
      scale: 1,
      opacity: 1,
      duration,
      ease,
      scrollTrigger: {
        trigger,
        start,
        toggleActions: 'play none none none',
      },
    }
  );
};

/**
 * Scrubbed Parallax Effect for depth and background motion
 */
export const createParallax = (
  target: gsap.DOMTarget,
  trigger: gsap.DOMTarget,
  options: {
    yPercent?: number;
    xPercent?: number;
    start?: string;
    end?: string;
    scrub?: number | boolean;
  } = {}
) => {
  if (isReducedMotion()) return;

  const {
    yPercent = -15,
    xPercent = 0,
    start = 'top bottom',
    end = 'bottom top',
    scrub = 1,
  } = options;

  gsap.to(target, {
    yPercent,
    xPercent,
    ease: 'none',
    scrollTrigger: {
      trigger,
      start,
      end,
      scrub,
    },
  });
};

/**
 * Premium Smooth GSAP Background Parallax on scroll
 * Moves background layers/images at 10–20% speed relative to the section
 * with subtle scale + translateY to ensure no gaps or overflows occur.
 */
export const createBackgroundParallax = (
  target: gsap.DOMTarget,
  trigger: gsap.DOMTarget,
  options: {
    speed?: number; // 0.1 to 0.25 (default: 0.15 = 15% parallax)
    scale?: number; // default 1.15 to avoid edge gaps
    direction?: 'up' | 'down';
    scrub?: number | boolean;
    start?: string;
    end?: string;
  } = {}
) => {
  if (isReducedMotion()) return;

  const {
    speed = 0.15,
    scale = 1.15,
    direction = 'up',
    scrub = 1.2,
    start = 'top bottom',
    end = 'bottom top',
  } = options;

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const effectiveSpeed = isMobile ? speed * 0.4 : speed;
  const yPercentDistance = effectiveSpeed * 100;
  const yFrom = direction === 'up' ? yPercentDistance * 0.5 : -yPercentDistance * 0.5;
  const yTo = direction === 'up' ? -yPercentDistance * 0.5 : yPercentDistance * 0.5;

  gsap.fromTo(
    target,
    {
      yPercent: yFrom,
      scale: scale,
      transformOrigin: 'center center',
      force3D: true,
    },
    {
      yPercent: yTo,
      scale: scale,
      ease: 'none',
      scrollTrigger: {
        trigger,
        start,
        end,
        scrub,
        invalidateOnRefresh: true,
      },
    }
  );
};

/**
 * Continuous organic float micro-animation
 */
export const createFloating = (
  target: gsap.DOMTarget,
  options: {
    yOffset?: number;
    xOffset?: number;
    rotation?: number;
    duration?: number;
    delay?: number;
  } = {}
) => {
  if (isReducedMotion()) return null;

  const {
    yOffset = -12,
    xOffset = 0,
    rotation = 2,
    duration = 3.5,
    delay = 0,
  } = options;

  return gsap.to(target, {
    y: yOffset,
    x: xOffset,
    rotation,
    duration,
    delay,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};

/**
 * Staggered cards reveal with attractive smooth easing and clearProps
 */
export const revealCards = (
  cards: gsap.DOMTarget,
  trigger: gsap.DOMTarget,
  options: {
    stagger?: number;
    yOffset?: number;
    scaleFrom?: number;
    duration?: number;
    start?: string;
  } = {}
) => {
  if (isReducedMotion()) {
    gsap.set(cards, { opacity: 1, y: 0, scale: 1 });
    return;
  }

  const {
    stagger = 0.1,
    yOffset = 40,
    scaleFrom = 0.94,
    duration = 0.85,
    start = 'top 85%',
  } = options;

  gsap.fromTo(
    cards,
    {
      opacity: 0,
      y: yOffset,
      scale: scaleFrom,
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration,
      stagger,
      ease: 'back.out(1.2)',
      clearProps: 'all',
      scrollTrigger: {
        trigger,
        start,
        toggleActions: 'play none none none',
      },
    }
  );
};

/**
 * Section Header entrance animation with eyebrow badge, h2 and description
 */
export const animateSectionHeader = (
  headerContainer: gsap.DOMTarget,
  options: { start?: string } = {}
) => {
  if (isReducedMotion()) return;

  const { start = 'top 88%' } = options;

  gsap.fromTo(
    headerContainer,
    { opacity: 0, y: 30, filter: 'blur(6px)' },
    {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.8,
      ease: 'power3.out',
      clearProps: 'all',
      scrollTrigger: {
        trigger: headerContainer,
        start,
        toggleActions: 'play none none none',
      },
    }
  );
};
