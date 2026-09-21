import React from 'react';
import { Link } from 'react-router-dom';
import { Send, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';

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
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 ${columns === 3 ? 'lg:grid-cols-3' : ''} gap-6 md:gap-8`}>
      {projects.map((project, idx) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          index={idx}
        />
      ))}

      {/* Special "Have a Project in Mind?" Interactive Card (From Reference Design) */}
      {includeCtaCard && (
        <div className="relative rounded-card overflow-hidden p-8 md:p-10 flex flex-col justify-between bg-gradient-to-br from-[#FF3154] via-[#FF167D] to-[#8B3DFF] text-white shadow-[0_20px_50px_rgba(255,49,84,0.35)] group min-h-[280px]">
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
              to="/contact"
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
