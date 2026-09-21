import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Sparkles, 
  Globe, 
  Layers, 
  TrendingUp, 
  PenTool, 
  Camera, 
  ShoppingBag, 
  ShieldCheck, 
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';
import { servicesData } from '../data/services';
import { MagneticButton } from '../components/MagneticButton';
import { CTASection } from '../components/CTASection';
import { useTilt } from '../hooks/useTilt';

// Icon mapper
const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Globe': return Globe;
    case 'Sparkles': return Sparkles;
    case 'Layers': return Layers;
    case 'TrendingUp': return TrendingUp;
    case 'PenTool': return PenTool;
    case 'Camera': return Camera;
    case 'ShoppingBag': return ShoppingBag;
    case 'ShieldCheck': return ShieldCheck;
    default: return Sparkles;
  }
};

const ServiceCardItem: React.FC<{ service: typeof servicesData[0] }> = ({ service }) => {
  const { ref, handleMouseMove, handleMouseLeave, tiltStyle } = useTilt<HTMLAnchorElement>(4);
  const Icon = getServiceIcon(service.icon);

  return (
    <Link
      to={`/services/${service.slug}`}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className="group relative p-8 rounded-card bg-[#0D1014] border border-white/10 hover:border-white/30 transition-all duration-400 space-y-6 flex flex-col justify-between shadow-card hover:shadow-[0_20px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(255,49,84,0.2)]"
      data-cursor="pointer"
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF3154]/5 via-transparent to-[#8B3DFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-card pointer-events-none" />

      <div className="space-y-6 relative z-10">
        <div className="flex items-center justify-between">
          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF3154] group-hover:bg-[#FF3154] group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-md">
            <Icon size={24} />
          </div>
          <span className="font-mono text-sm font-black text-[#9A9DA7] group-hover:text-white transition-colors">
            {service.number}
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-black text-white group-hover:text-gradient-brand transition-all">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#9A9DA7] leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
        <span className="text-xs font-mono uppercase tracking-wider text-[#9A9DA7] group-hover:text-white transition-colors">
          Explore Service
        </span>
        <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#FF3154] group-hover:border-transparent transition-all">
          <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
        </div>
      </div>
    </Link>
  );
};

export const Services: React.FC = () => {
  return (
    <div className="w-full pt-32 pb-20">
      {/* 1. Services Header */}
      <section className="relative py-12 md:py-20 overflow-hidden border-b border-white/10">
        <div className="absolute -top-10 right-0 w-[500px] h-[500px] bg-gradient-to-l from-[#FF3154]/20 via-[#8B3DFF]/20 to-transparent rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 space-y-6">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#9A9DA7]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-[#FF3154]">Services</span>
          </nav>

          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#FF3154]">
              <Sparkles size={14} />
              OUR CAPABILITIES
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-[#9A9DA7]">
              Creative solutions for your <span className="text-gradient-brand font-bold">digital and brand growth.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 2. Services Grid (8 Cards) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <ServiceCardItem key={service.id} service={service} />
            ))}
          </div>

          {/* Banner: "Let's Discuss Your Project" */}
          <div className="relative rounded-3xl p-8 md:p-12 bg-gradient-to-r from-[#151920] via-[#0D1014] to-[#151920] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Let's Discuss Your Project
              </h3>
              <p className="text-sm text-[#9A9DA7]">
                Get in touch and let's create something incredible together.
              </p>
            </div>
            <MagneticButton to="/contact" variant="primary" className="!px-7 !py-3.5 !text-xs uppercase tracking-wider flex-shrink-0">
              <span>Start a Project</span>
              <ArrowRight size={16} />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 3. Bottom CTA */}
      <CTASection />
    </div>
  );
};
