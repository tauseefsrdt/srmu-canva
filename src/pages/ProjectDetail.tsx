import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, ArrowUpRight, CheckCircle2, Quote, ArrowRight, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { CTASection } from '../components/CTASection';
import { MagneticButton } from '../components/MagneticButton';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = projectsData.find((p) => p.slug === slug) || projectsData[0];

  if (!project && slug) {
    return <Navigate to="/projects" replace />;
  }

  const moreProjects = projectsData
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <div className="w-full pt-32 pb-20">
      {/* 1. Project Detail Hero */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        {/* Ambient background glow */}
        <div 
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full blur-[140px] pointer-events-none opacity-20"
          style={{ backgroundColor: project.accentColor || '#FF3154' }}
        />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 space-y-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-[#9A9DA7]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/30" />
            <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-[#FF3154]">{project.title}</span>
          </nav>

          {/* Heading & Subtitle */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase">
              {project.title}
            </h1>
            <p className="text-lg md:text-2xl text-[#9A9DA7] max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Hero Composition: Large Mockup + Side Project Metadata */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
            {/* Mockup Canvas (8 cols) */}
            <div className="lg:col-span-8 relative rounded-2xl bg-[#0D1014] border border-white/15 p-4 sm:p-6 shadow-2xl overflow-hidden group">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Side Info Box (4 cols) */}
            <div className="lg:col-span-4 p-8 rounded-2xl bg-[#0D1014] border border-white/10 space-y-6 shadow-card">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9A9DA7] block mb-1">
                  CLIENT
                </span>
                <p className="text-base font-bold text-white">
                  {project.client}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-y border-white/10 py-5">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#9A9DA7] block mb-1">
                    CATEGORY
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {project.categoryLabel || project.category}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#9A9DA7] block mb-1">
                    YEAR
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {project.year}
                  </p>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#9A9DA7] block mb-2">
                  SERVICES
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((srv) => (
                    <span
                      key={srv}
                      className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white/90"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              {project.liveUrl && (
                <div className="pt-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FF3154] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#ff1640] shadow-[0_0_25px_rgba(255,49,84,0.4)] transition-all"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Horizontal Gallery of Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {project.screenshots.map((shot, idx) => (
                <div key={idx} className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group">
                  <img
                    src={shot}
                    alt={`Screenshot ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 2. Project Overview & Key Features */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Overview Story (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF3154]">
                PROJECT OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                Engineering a Transformative Digital Campus
              </h2>
              <p className="text-base text-[#9A9DA7] leading-relaxed">
                {project.overview || project.description}
              </p>

              {project.challenge && (
                <div className="pt-4 space-y-2">
                  <h3 className="text-lg font-bold text-white">The Challenge</h3>
                  <p className="text-sm text-[#9A9DA7] leading-relaxed">{project.challenge}</p>
                </div>
              )}

              {project.solution && (
                <div className="pt-2 space-y-2">
                  <h3 className="text-lg font-bold text-white">The Solution</h3>
                  <p className="text-sm text-[#9A9DA7] leading-relaxed">{project.solution}</p>
                </div>
              )}
            </div>

            {/* Right: Key Features (5 cols) */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-[#0D1014] border border-white/10 space-y-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                Key Features
              </h3>
              <ul className="space-y-4">
                {(project.features || [
                  'Modern & Clean UI/UX Architecture',
                  'Fully Responsive Multi-Device Support',
                  'Program Search & Instant Filtering',
                  'SEO Optimization & Core Web Vitals',
                  'Blazing-Fast 99+ Performance Score',
                  'Easy Content Management System'
                ]).map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-[#9A9DA7]">
                    <CheckCircle2 size={18} className="text-[#FF3154] flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Testimonial Quote */}
          <div className="mt-16 p-8 md:p-12 rounded-3xl bg-[#0D1014]/70 border border-white/10 relative">
            <Quote size={40} className="text-[#FF3154]/30 absolute top-6 left-6" />
            <blockquote className="text-lg md:text-2xl font-bold text-white max-w-3xl mx-auto text-center leading-relaxed relative z-10">
              “The new digital experience has completely modernized our brand identity, streamlined admissions inquiries, and received glowing praise from students and faculty alike.”
            </blockquote>
            <p className="text-xs font-mono text-center text-[#FF3154] uppercase tracking-widest mt-4">
              — {project.client} Leadership
            </p>
          </div>

          {/* Metrics Results Banner */}
          {project.metrics && (
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="p-8 rounded-2xl bg-[#0D1014] border border-white/10 text-center space-y-2">
                  <div className="text-4xl md:text-5xl font-black font-mono text-gradient-brand">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#9A9DA7]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. More Projects Section */}
      <section className="py-16 md:py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase">
              More Projects
            </h2>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-[#FF3154] hover:text-white transition-colors"
            >
              <span>View All</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {moreProjects.map((p, idx) => (
              <ProjectCard key={p.id} project={p} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <CTASection />
    </div>
  );
};
