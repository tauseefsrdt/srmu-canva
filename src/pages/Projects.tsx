import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';
import { ProjectFilter } from '../components/ProjectFilter';
import { ProjectCard } from '../components/ProjectCard';
import { CTASection } from '../components/CTASection';
import { projectsData } from '../data/projects';
import { ProjectCategory } from '../types';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All Projects');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Projects') {
      return projectsData;
    }
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage) || 1;
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProjects.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProjects, currentPage]);

  const handleCategoryChange = (category: ProjectCategory) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <div className="w-full pt-32 pb-20">
      {/* 1. Projects Hero Header */}
      <section className="relative py-16 md:py-24 overflow-hidden border-b border-white/10">
        {/* Colorful Abstract Splash / Gradient in top right */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#FF3154]/25 via-[#8B3DFF]/20 to-transparent rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -left-20 bottom-0 w-[400px] h-[400px] bg-[#28D7FF]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 space-y-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-[#9A9DA7]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-[#FF3154]">Projects</span>
          </nav>

          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#FF3154]">
              <Sparkles size={14} />
              OUR PROJECTS
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white">
              Our Projects
            </h1>
            <p className="text-lg md:text-xl text-[#9A9DA7] font-normal">
              Real ideas. Real designs. <span className="text-gradient-brand font-semibold">Real impact.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 2. Filter Bar & Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          {/* Filter Pills */}
          <div className="py-2">
            <ProjectFilter
              activeCategory={activeCategory}
              onSelectCategory={handleCategoryChange}
            />
          </div>

          {/* 2-Column Large Project Cards (Matching Reference 02) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {paginatedProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                layout="featured"
                index={idx}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 pt-12">
              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNum = i + 1;
                const isActive = currentPage === pageNum;
                return (
                  <button
                    key={pageNum}
                    onClick={() => {
                      setCurrentPage(pageNum);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className={`w-11 h-11 rounded-full font-mono text-xs font-bold transition-all ${
                      isActive
                        ? 'bg-[#FF3154] text-white shadow-[0_0_20px_rgba(255,49,84,0.5)]'
                        : 'bg-[#0D1014] text-[#9A9DA7] hover:text-white border border-white/10 hover:border-white/20'
                    }`}
                  >
                    0{pageNum}
                  </button>
                );
              })}
              
              {currentPage < totalPages && (
                <button
                  onClick={() => {
                    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className="w-11 h-11 rounded-full bg-[#0D1014] text-white border border-white/10 hover:border-white/20 flex items-center justify-center transition-all"
                  aria-label="Next Page"
                >
                  <ChevronRight size={16} />
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 3. Bottom CTA */}
      <CTASection />
    </div>
  );
};
