import React from 'react';
import { Search, Compass, Palette, Rocket } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Understand your goals & audience.',
      icon: Search,
      accent: '#FF3154',
    },
    {
      num: '02',
      title: 'Plan',
      desc: 'Strategy, wireframing & concept.',
      icon: Compass,
      accent: '#FF167D',
    },
    {
      num: '03',
      title: 'Design',
      desc: 'Bring ideas to life with craft.',
      icon: Palette,
      accent: '#8B3DFF',
    },
    {
      num: '04',
      title: 'Deliver',
      desc: 'Launch with measurable impact.',
      icon: Rocket,
      accent: '#28D7FF',
    },
  ];

  return (
    <section className="py-20 md:py-28 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold font-mono uppercase tracking-widest text-[#FF3154]">
            OUR PROCESS
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            From Idea to Impact
          </h2>
          <p className="text-sm md:text-base text-[#9A9DA7]">
            A simple and collaborative process to bring your boldest vision to life with precision and speed.
          </p>
        </div>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="group relative p-8 rounded-card bg-[#0D1014] border border-white/10 hover:border-white/25 transition-all duration-400 hover:-translate-y-2 shadow-card"
              >
                {/* Glow pill behind step */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-card pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${step.accent}18, transparent 70%)`
                  }}
                />

                <div className="flex items-center justify-between mb-8">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 shadow-lg"
                    style={{ backgroundColor: `${step.accent}25`, border: `1px solid ${step.accent}60` }}
                  >
                    <Icon size={22} style={{ color: step.accent }} />
                  </div>
                  <span className="font-mono text-xs font-black tracking-widest text-[#9A9DA7] group-hover:text-white transition-colors">
                    {step.num}
                  </span>
                </div>

                <div className="space-y-2 relative z-10">
                  <h3 className="text-xl font-extrabold text-white group-hover:text-gradient-brand transition-all">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#9A9DA7] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Progress line connector for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-white/15 z-20 pointer-events-none" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
