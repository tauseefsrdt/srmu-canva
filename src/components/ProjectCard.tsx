import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { useTilt } from '../hooks/useTilt';

interface ProjectCardProps {
  project: Project;
  layout?: 'grid' | 'featured' | 'compact';
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  layout = 'grid',
}) => {
  const { ref, handleMouseMove, handleMouseLeave, tiltStyle } = useTilt<HTMLAnchorElement>(5);

  return (
    <Link
      to={`/projects/${project.slug}`}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      data-cursor="project"
      className="group relative block rounded-card overflow-hidden bg-[#0D1014] border border-white/10 hover:border-white/25 transition-all duration-500 shadow-card"
    >
      {/* Background radial glow on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 30%, ${project.accentColor || '#FF3154'}22, transparent 70%)`
        }}
      />

      {/* Image Container */}
      <div className={`relative w-full overflow-hidden bg-[#151920] ${layout === 'featured' ? 'h-80 md:h-[420px]' : 'h-64 md:h-72'}`}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108 group-hover:filter group-hover:brightness-105"
        />
        
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1014] via-[#0D1014]/20 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/15">
            {project.categoryLabel || project.category}
          </span>
        </div>

        {/* Top Right Floating Year/Client */}
        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#FF3154] text-white font-bold shadow-[0_0_15px_#FF3154]">
            {project.year}
          </span>
        </div>
      </div>

      {/* Card Content Footer */}
      <div className="p-6 relative z-10 flex items-end justify-between gap-4">
        <div className="space-y-1 transform transition-transform duration-300 group-hover:-translate-y-1">
          <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-gradient-brand transition-all">
            {project.title}
          </h3>
          <p className="text-xs md:text-sm text-[#9A9DA7] line-clamp-1 font-medium">
            {project.description}
          </p>
        </div>

        {/* Circular Arrow Button */}
        <div className="w-11 h-11 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-[#FF3154] group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(255,49,84,0.6)] transition-all duration-300">
          <ArrowUpRight 
            size={18} 
            className="transform transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110" 
          />
        </div>
      </div>
    </Link>
  );
};
