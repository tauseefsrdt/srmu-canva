import React from 'react';
import { Target, Search, Users, BarChart3, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DifferencePoint {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
  icon: React.ElementType;
}

const differencePoints: DifferencePoint[] = [
  {
    num: '01',
    title: 'Performance First',
    subtitle: 'Measurable Commercial Outcomes',
    description:
      'We reject vanity metrics. Every campaign strategy, keyword target, and budget allocation is geared toward generated qualified enquiries, customer acquisition, and ROI.',
    accent: '#FF3154',
    icon: Target,
  },
  {
    num: '02',
    title: 'Search & AI Ready',
    subtitle: 'Future-Proof Search Dominance',
    description:
      'From traditional Google search algorithms to Generative AI Answer Engines (AEO), we position your business where modern customers actively seek recommendations.',
    accent: '#8B3DFF',
    icon: Search,
  },
  {
    num: '03',
    title: 'Human-Led Strategy',
    subtitle: 'Dedicated Senior Execution',
    description:
      'Your growth is guided by experienced strategists, performance copywriters, and developers who deeply understand your market, margins, and sales cycles.',
    accent: '#28D7FF',
    icon: Users,
  },
  {
    num: '04',
    title: 'Full Journey Integration',
    subtitle: 'End-to-End Funnel Architecture',
    description:
      'From first impression on search or ads to interactive landing pages and CRM lead handoff, we optimize the entire friction-free customer conversion journey.',
    accent: '#FF7A18',
    icon: BarChart3,
  },
];

export const CleanDifferentiation: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative bg-[#080A0E] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold tracking-[0.2em] text-[#FF3154] uppercase">
              WHY SRMUCANVAS
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.08]">
              Different by Design. <br />
              <span className="text-gradient-brand">Built for Growth.</span>
            </h2>
          </div>
          
          <p className="text-sm md:text-base text-[#9A9DA7] max-w-md leading-relaxed">
            Most agencies sell disconnected outputs. We build coordinated performance engines designed to predictably scale your business pipeline.
          </p>
        </div>

        {/* 4-Card Clean Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differencePoints.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="group relative rounded-3xl bg-[#0D1014] border border-white/10 p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/25 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <div className="space-y-6">
                  {/* Top Num + Icon */}
                  <div className="flex items-center justify-between">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300"
                      style={{ backgroundColor: `${item.accent}15`, color: item.accent }}
                    >
                      <Icon size={22} />
                    </div>
                    <span className="font-mono text-2xl font-black text-white/15 group-hover:text-white/30 transition-colors">
                      {item.num}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-xl font-black text-white group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#9A9DA7]">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-[#9A9DA7] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono font-bold uppercase text-white/50 group-hover:text-white transition-colors">
                  <span>SRMUCANVAS STANDARD</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
