import React, { useState, useMemo } from 'react';
import { Hero } from '../components/Hero';
import { ProjectFilter } from '../components/ProjectFilter';
import { ProjectGrid } from '../components/ProjectGrid';
import { ProcessSection } from '../components/ProcessSection';
import { QuoteSection } from '../components/QuoteSection';
import { CTASection } from '../components/CTASection';
import { projectsData } from '../data/projects';
import { ProjectCategory } from '../types';

export const Home: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All Projects');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All Projects') {
      return projectsData.slice(0, 8);
    }
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="w-full">
      {/* 1. Cinematic Hero */}
      <Hero />

      {/* 2. Projects Filter & Portfolio Showcase */}
      <section id="project-filter-section" className="py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          
          {/* Sticky Category Filter */}
          <div className="sticky top-20 z-30 py-4 bg-[#050608]/80 backdrop-blur-md border-y border-white/5">
            <ProjectFilter 
              activeCategory={activeCategory} 
              onSelectCategory={setActiveCategory} 
            />
          </div>

          {/* Asymmetric Responsive Project Grid */}
          <ProjectGrid 
            projects={filteredProjects} 
            includeCtaCard={true}
            columns={3}
          />
        </div>
      </section>

      {/* 3. Process Section */}
      <ProcessSection />

      {/* 4. Editorial Steve Jobs Quote */}
      <QuoteSection />

      {/* 5. Cinematic Bottom CTA */}
      <CTASection />
    </div>
  );
};
