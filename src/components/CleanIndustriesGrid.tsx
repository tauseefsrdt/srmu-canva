import React from 'react';
import { 
  GraduationCap, 
  Stethoscope, 
  Building2, 
  Briefcase, 
  Hotel, 
  Factory, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface IndustryCard {
  id: string;
  name: string;
  category: string;
  description: string;
  outcome: string;
  icon: React.ElementType;
  href: string;
  accent: string;
}

const industries: IndustryCard[] = [
  {
    id: 'education',
    name: 'Education & Universities',
    category: 'High-Value Admissions',
    description: 'Drive qualified student enrolments, program admissions, and campus visits through localized Search, AEO, and targeted Meta Ads.',
    outcome: 'Lower Cost Per Enrolled Student',
    icon: GraduationCap,
    href: '/who-we-help#education',
    accent: '#FF3154',
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinics',
    category: 'Patient Appointments',
    description: 'Connect with patients searching for trusted doctors, clinics, and specialized medical procedures across Google Map Pack and local search.',
    outcome: 'Direct High-Intent Bookings',
    icon: Stethoscope,
    href: '/who-we-help#healthcare',
    accent: '#28D7FF',
  },
  {
    id: 'real-estate',
    name: 'Real Estate & Builders',
    category: 'Buyer Lead Generation',
    description: 'Generate verified property buyer enquiries, site visits, and project sales for luxury residences and commercial developments.',
    outcome: 'Verified Buyer Conversions',
    icon: Building2,
    href: '/who-we-help#real-estate',
    accent: '#8B3DFF',
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    category: 'Corporate Client Acquisition',
    description: 'Establish authority for legal, financial, and consulting firms to attract high-retainer commercial clients seeking expert advice.',
    outcome: 'High-Value Retainer Leads',
    icon: Briefcase,
    href: '/who-we-help#professional-services',
    accent: '#FF7A18',
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Luxury',
    category: 'Direct Bookings & Events',
    description: 'Boost direct guest reservations, banquet hall inquiries, and premium dining bookings with engaging visual creatives and search positioning.',
    outcome: 'Increased Direct Bookings',
    icon: Hotel,
    href: '/who-we-help#hospitality',
    accent: '#FF167D',
  },
  {
    id: 'b2b',
    name: 'B2B & Industrial',
    category: 'Commercial Contracts',
    description: 'Capture decision-makers and enterprise procurement heads searching for manufacturing, logistics, and B2B technology partnerships.',
    outcome: 'Enterprise RFP & Contracts',
    icon: Factory,
    href: '/who-we-help#b2b',
    accent: '#267BFF',
  },
];

export const CleanIndustriesGrid: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative bg-[#050608] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold tracking-[0.2em] text-[#FF3154] uppercase">
              <Sparkles size={13} />
              <span>INDUSTRY EXPERTISE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.08]">
              Built for Businesses That Need <br />
              <span className="text-gradient-brand">Real Inquiries & Growth.</span>
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-sm md:text-base text-[#9A9DA7] max-w-md leading-relaxed">
              We specialize in businesses where digital visibility directly triggers conversations, admissions, site visits, and commercial contracts.
            </p>
            <Link
              to="/who-we-help"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF3154] hover:text-white transition-colors"
            >
              <span>Explore All 6 Industry Sectors</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* 6-Card Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <Link
                key={ind.id}
                to={ind.href}
                className="group relative rounded-3xl bg-[#0D1014] border border-white/10 p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/25 hover:-translate-y-1.5 hover:shadow-2xl"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                      style={{ backgroundColor: `${ind.accent}15`, color: ind.accent }}
                    >
                      <Icon size={24} />
                    </div>
                    <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-[#9A9DA7]">
                      {ind.category}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-white group-hover:text-white transition-colors">
                      {ind.name}
                    </h3>
                  </div>

                  <p className="text-sm text-[#9A9DA7] leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold" style={{ color: ind.accent }}>
                    {ind.outcome}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/50 group-hover:border-white group-hover:text-white transition-all">
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
