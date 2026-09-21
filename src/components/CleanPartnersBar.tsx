import React from 'react';

const clientLogos = [
  { name: 'SRMU University', tag: 'Higher Education' },
  { name: 'Medanta Clinics', tag: 'Healthcare' },
  { name: 'Apex Residency', tag: 'Real Estate' },
  { name: 'Nirvana Hospitality', tag: 'Luxury Hotels' },
  { name: 'Vanguard Legal', tag: 'Corporate Law' },
  { name: 'Precision Auto Tech', tag: 'B2B Industrial' },
  { name: 'Aegis Diagnostics', tag: 'Healthcare Tech' },
  { name: 'Skyline Ventures', tag: 'Commercial Spaces' },
];

export const CleanPartnersBar: React.FC = () => {
  return (
    <div className="border-y border-white/10 bg-[#080A0E] py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-[0.2em] text-[#9A9DA7] uppercase">
          <span className="w-2 h-2 rounded-full bg-[#FF3154]" />
          <span>TRUSTED BY INDUSTRY LEADERS ACROSS SECTORS</span>
        </div>
        <div className="text-xs font-mono text-[#28D7FF] font-semibold">
          100+ HIGH-IMPACT CAMPAIGNS EXECUTED
        </div>
      </div>

      {/* Infinite Smooth Flowing Marquee */}
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex items-center gap-8 md:gap-12 w-max animate-scroll">
          {/* Double track for smooth seamless looping */}
          {[...clientLogos, ...clientLogos, ...clientLogos].map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="px-6 py-3.5 rounded-2xl bg-[#0D1014] border border-white/10 hover:border-white/25 flex items-center gap-3.5 transition-all duration-300 group cursor-default shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-[#FF3154]/60 group-hover:bg-[#FF3154] group-hover:scale-125 transition-all" />
              <div>
                <div className="text-sm font-black text-white/90 group-hover:text-white transition-colors tracking-tight whitespace-nowrap">
                  {client.name}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#9A9DA7] group-hover:text-[#28D7FF] transition-colors">
                  {client.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
