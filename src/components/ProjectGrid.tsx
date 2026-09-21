import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { Send, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { isReducedMotion } from '../utils/animations';

interface ProjectGridProps {
  projects: Project[];
  includeCtaCard?: boolean;
  columns?: 2 | 3;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ 
  projects, 
  includeCtaCard = true,
  columns = 3 
}) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isReducedMotion() || !gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-grid-item',
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.85,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
          },
        }
      );
    }, gridRef);

    return () => ctx.revert();
  }, [projects]);

  return (
    <div ref={gridRef} className={`grid grid-cols-1 md:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''} gap-6 md:gap-8`}>
      {projects.map((project, idx) => (
        <div key={project.id} className="project-grid-item">
          <ProjectCard 
            project={project} 
            index={idx}
          />
        </div>
      ))}

      {/* Special "Have a Project in Mind?" Interactive Card */}
      {includeCtaCard && (
        <div className="project-grid-item relative rounded-card overflow-hidden p-8 md:p-10 flex flex-col justify-between bg-gradient-to-br from-[#FF3154] via-[#FF167D] to-[#8B3DFF] text-white shadow-[0_20px_50px_rgba(255,49,84,0.35)] group min-h-[280px]">
          {/* Animated decorative circles */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-white/10 blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
          
          <div className="space-y-3 relative z-10">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-white/20 backdrop-blur-md">
              START COLLABORATION
            </span>
            <h3 className="text-2xl md:text-3xl font-black leading-tight tracking-tight">
              Have a Project <br />in Mind?
            </h3>
            <p className="text-xs md:text-sm text-white/90 font-medium max-w-xs">
              Let's turn your ideas into something amazing together.
            </p>
          </div>

          <div className="pt-6 relative z-10 flex items-center justify-between">
            <Link
              to="/lets-talk"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#050608] font-bold text-xs uppercase tracking-wider hover:bg-black hover:text-white transition-all shadow-lg hover:shadow-2xl"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={14} />
            </Link>

            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300">
              <Send size={20} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

