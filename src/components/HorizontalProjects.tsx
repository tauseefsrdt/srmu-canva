import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../data/projects';
import { useTilt } from '../hooks/useTilt';
import { isReducedMotion } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

// Horizontal Card with 3D Tilt
const HorizontalCardItem: React.FC<{ project: typeof projectsData[0]; index: number }> = ({ project, index }) => {
  const { ref, handleMouseMove, handleMouseLeave, tiltStyle } = useTilt<HTMLAnchorElement>(6);

  return (
    <Link
      to={`/projects/${project.slug}`}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      data-cursor="project"
      className="group relative flex-shrink-0 w-[340px] sm:w-[440px] md:w-[540px] rounded-3xl overflow-hidden bg-[#0D1014] border border-white/10 hover:border-white/30 transition-all duration-500 shadow-2xl block"
    >
      {/* Background radial glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 30%, ${project.accentColor || '#FF3154'}25, transparent 70%)`
        }}
      />

      {/* Image container */}
      <div className="relative h-64 sm:h-80 md:h-[380px] w-full overflow-hidden bg-[#151920]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1014] via-[#0D1014]/20 to-transparent" />

        {/* Index Number */}
        <div className="absolute top-5 left-5 z-10">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/15">
            0{index + 1} / {project.categoryLabel || project.category}
          </span>
        </div>

        {/* Year Badge */}
        <div className="absolute top-5 right-5 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-[#FF3154] text-white font-bold shadow-[0_0_15px_#FF3154]">
            {project.year}
          </span>
        </div>
      </div>

      {/* Card Info Footer */}
      <div className="p-6 sm:p-8 relative z-10 flex items-end justify-between gap-4">
        <div className="space-y-1 transform transition-transform duration-300 group-hover:-translate-y-1">
          <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-gradient-brand transition-all">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#9A9DA7] font-medium line-clamp-1">
            {project.description}
          </p>
        </div>

        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-[#FF3154] group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(255,49,84,0.6)] transition-all duration-300">
          <ArrowUpRight size={20} className="transform transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" />
        </div>
      </div>
    </Link>
  );
};

export const HorizontalProjects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isReducedMotion() || !sectionRef.current || !trackRef.current) return;

    // Only apply pinned horizontal scroll on medium & large screens (width > 768px)
    if (window.innerWidth < 768) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 120);

      gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${track.scrollWidth - window.innerWidth + 200}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-20 md:py-32 overflow-hidden border-t border-white/10 bg-[#06080B]"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF3154]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#8B3DFF]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#FF3154]">
            <Sparkles size={14} />
            CINEMATIC SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            Featured <span className="text-gradient-brand">Excellence</span>
          </h2>
          <p className="text-sm md:text-base text-[#9A9DA7] max-w-xl">
            Explore our curated selection of high-impact brand transformations and conversion systems.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-2 font-mono text-xs text-[#9A9DA7]">
          <span>SCROLL DOWN TO EXPLORE</span>
          <span className="text-[#FF3154]">→</span>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div className="w-full overflow-x-auto md:overflow-hidden no-scrollbar px-6 md:px-10">
        <div 
          ref={trackRef} 
          className="flex items-center gap-8 md:gap-12 w-max pb-6"
        >
          {projectsData.slice(0, 5).map((project, idx) => (
            <HorizontalCardItem 
              key={project.id} 
              project={project} 
              index={idx} 
            />
          ))}

          {/* End CTA Card */}
          <div className="flex-shrink-0 w-[300px] sm:w-[380px] p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#FF3154] via-[#FF167D] to-[#8B3DFF] text-white flex flex-col justify-between shadow-2xl h-64 sm:h-80 md:h-[380px]">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-white/20 backdrop-blur-md">
                READY FOR GROWTH?
              </span>
              <h3 className="text-2xl sm:text-4xl font-black leading-tight">
                Let's Build Your Story Next.
              </h3>
            </div>
            <Link
              to="/lets-talk"
              className="inline-flex items-center justify-between w-full px-6 py-3.5 rounded-full bg-white text-[#050608] font-bold text-xs uppercase tracking-wider hover:bg-black hover:text-white transition-all shadow-xl"
            >
              <span>Start Project</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
