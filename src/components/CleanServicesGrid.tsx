import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ServicePractice {
  id: string;
  pillarNum: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  link: string;
  accentColor: string;
  accentBorder: string;
  accentGlow: string;
  accentBadgeBg: string;
}

const practices: ServicePractice[] = [
  {
    id: 'get-found',
    pillarNum: 'PRACTICE 01',
    badge: 'Search & Generative Intelligence',
    title: 'Get Found',
    tagline: 'Dominate traditional search engines and emerging AI answer engines.',
    description:
      'We engineer your digital infrastructure so high-intent buyers discover your brand at the exact moment they need your services.',
    capabilities: [
      'Technical & On-Page SEO',
      'Local SEO & Google Map Pack',
      'AI Search & AEO Optimization',
      'Authority & Schema Architecture',
      'High-Intent Keyword Capture',
      'Entity-First Search Strategy'
    ],
    link: '/get-found',
    accentColor: '#FF3154',
    accentBorder: 'hover:border-[#FF3154]/50',
    accentGlow: 'hover:shadow-[0_20px_60px_-15px_rgba(255,49,84,0.25)]',
    accentBadgeBg: 'bg-[#FF3154]/10 text-[#FF3154] border-[#FF3154]/25',
  },
  {
    id: 'get-customers',
    pillarNum: 'PRACTICE 02',
    badge: 'Performance & Paid Media',
    title: 'Get Customers',
    tagline: 'High-intent acquisition campaigns built for predictable business growth.',
    description:
      'Turn digital demand into commercial inquiries through surgically targeted paid media campaigns optimized for genuine pipeline and ROI.',
    capabilities: [
      'Google Search & Performance Max',
      'Meta (Instagram & Facebook) Ads',
      'YouTube Video & Action Ads',
      'High-Intent Lead Funnels',
      'Algorithmic Bidding Strategy',
      'Conversion Rate Optimization (CRO)'
    ],
    link: '/get-customers',
    accentColor: '#8B3DFF',
    accentBorder: 'hover:border-[#8B3DFF]/50',
    accentGlow: 'hover:shadow-[0_20px_60px_-15px_rgba(139,61,255,0.25)]',
    accentBadgeBg: 'bg-[#8B3DFF]/10 text-[#8B3DFF] border-[#8B3DFF]/25',
  },
  {
    id: 'get-remembered',
    pillarNum: 'PRACTICE 03',
    badge: 'Creative & Conversion Design',
    title: 'Get Remembered',
    tagline: 'Memorable brand identity and conversion assets that convert traffic.',
    description:
      'Arm your acquisition campaigns with high-impact advertising assets, landing pages, and visual systems that build lasting credibility.',
    capabilities: [
      'Conversion Landing Pages',
      'High-CTR Ad Creatives',
      'Brand Identity & Positioning',
      'Motion & Video Assets',
      'Corporate Pitch & Collateral',
      'Interactive Design Systems'
    ],
    link: '/get-remembered',
    accentColor: '#28D7FF',
    accentBorder: 'hover:border-[#28D7FF]/50',
    accentGlow: 'hover:shadow-[0_20px_60px_-15px_rgba(40,215,255,0.25)]',
    accentBadgeBg: 'bg-[#28D7FF]/10 text-[#28D7FF] border-[#28D7FF]/25',
  }
];

export const CleanServicesGrid: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative bg-[#050608] border-t border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#FF3154]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-[#8B3DFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold tracking-[0.2em] text-[#FF3154] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FF3154] animate-ping" />
              <span>CORE PRACTICES & CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.08]">
              Designed for Speed. <br />
              <span className="text-gradient-brand">Engineered for Results.</span>
            </h2>
          </div>
          
          <p className="text-sm md:text-base text-[#9A9DA7] max-w-md leading-relaxed">
            We don't deliver fragmented tactics. We build connected growth engines across search, performance advertising, and high-converting creative design.
          </p>
        </div>

        {/* Clean 3-Column Structured Practice Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {practices.map((practice) => (
            <div
              key={practice.id}
              className={`group relative rounded-3xl bg-[#0D1014] border border-white/10 p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 ${practice.accentBorder} ${practice.accentGlow}`}
            >
              {/* Top Meta */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-widest text-[#9A9DA7] uppercase">
                    {practice.pillarNum}
                  </span>
                  <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${practice.accentBadgeBg}`}>
                    {practice.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-black text-white group-hover:text-white transition-colors">
                    {practice.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#9A9DA7]">
                    {practice.tagline}
                  </p>
                </div>

                <p className="text-sm text-[#9A9DA7] leading-relaxed">
                  {practice.description}
                </p>

                {/* Capabilities Capsule Tags (BrandBee style pill tags) */}
                <div className="pt-2">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-widest text-white/50 mb-3">
                    Key Capabilities:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {practice.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.04] border border-white/10 text-white/80 group-hover:border-white/20 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: practice.accentColor }} />
                        <span>{cap}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between">
                <Link
                  to={practice.link}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-[#FF3154] transition-colors group/link"
                >
                  <span>Explore Practice</span>
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/60 group-hover:border-white group-hover:text-white transition-all">
                  <ArrowRight size={14} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
