import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, CheckCircle2, ArrowRight, Sparkles, Layers, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/services';
import { projectsData } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { CTASection } from '../components/CTASection';
import { MagneticButton } from '../components/MagneticButton';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = servicesData.find((s) => s.slug === slug) || servicesData[0];

  if (!service && slug) {
    return <Navigate to="/services" replace />;
  }

  const relatedProjects = projectsData.filter((p) => 
    service.featuredProjects.includes(p.id) || p.categoryLabel.toLowerCase().includes(service.title.toLowerCase().split(' ')[0])
  ).slice(0, 2);

  return (
    <div className="w-full pt-32 pb-20">
      {/* 1. Service Hero */}
      <section className="relative py-12 md:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FF3154]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 space-y-8">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#9A9DA7]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/30" />
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-[#FF3154]">{service.title}</span>
          </nav>

          <div className="space-y-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#FF3154]">
              <Sparkles size={14} />
              SERVICE • {service.number}
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white">
              {service.title}
            </h1>
            <p className="text-lg md:text-2xl text-[#9A9DA7] leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <MagneticButton to="/contact" variant="primary" className="!px-7 !py-3.5 !text-xs uppercase tracking-wider">
              <span>Request Quote for {service.title}</span>
              <ArrowRight size={16} />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 2. Deliverables & Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Deliverables */}
            <div className="p-8 md:p-12 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 shadow-card">
              <div className="flex items-center gap-3">
                <Layers size={22} className="text-[#FF3154]" />
                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">What We Deliver</h2>
              </div>
              <ul className="space-y-4">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#9A9DA7]">
                    <CheckCircle2 size={18} className="text-[#FF3154] flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Advantages / Benefits */}
            <div className="p-8 md:p-12 rounded-3xl bg-[#0D1014] border border-white/10 space-y-6 shadow-card">
              <div className="flex items-center gap-3">
                <ShieldCheck size={22} className="text-[#28D7FF]" />
                <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Business Impact</h2>
              </div>
              <ul className="space-y-4">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-[#9A9DA7]">
                    <div className="w-2 h-2 rounded-full bg-[#28D7FF] mt-2 flex-shrink-0" />
                    <span className="text-white font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Step-by-Step Workflow */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF3154]">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              How We Execute
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div key={step.step} className="p-8 rounded-2xl bg-[#0D1014] border border-white/10 space-y-3">
                <span className="font-mono text-xs font-bold text-[#FF3154]">{step.step}</span>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="text-xs text-[#9A9DA7] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Work for this service */}
      {relatedProjects.length > 0 && (
        <section className="py-20 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase">
                Featured Work in {service.title}
              </h2>
              <Link to="/projects" className="text-xs font-mono font-bold uppercase text-[#FF3154] hover:text-white transition-colors">
                View All Projects →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((proj, idx) => (
                <ProjectCard key={proj.id} project={proj} layout="featured" index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Bottom CTA */}
      <CTASection />
    </div>
  );
};
