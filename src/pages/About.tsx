import React, { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { teamMembers, agencyValues } from '../data/team';
import { MagneticButton } from '../components/MagneticButton';
import { CTASection } from '../components/CTASection';
import { useTilt } from '../hooks/useTilt';
import { LinkedinIcon, TwitterXIcon, DribbbleIcon } from '../components/SocialIcons';
import { isReducedMotion, revealImage } from '../utils/animations';

// Team Card Subcomponent with 3D Tilt
const TeamCardItem: React.FC<{ member: typeof teamMembers[0] }> = ({ member }) => {
  const { ref, handleMouseMove, handleMouseLeave, tiltStyle } = useTilt<HTMLDivElement>(6);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className="team-card group relative rounded-card overflow-hidden bg-[#0D1014] border border-white/10 hover:border-white/25 transition-all duration-400 p-4 space-y-4 shadow-card"
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#151920]">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex items-center gap-2">
            {member.socials.linkedin && (
              <a href={member.socials.linkedin} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#FF3154] transition-colors">
                <LinkedinIcon size={14} />
              </a>
            )}
            {member.socials.twitter && (
              <a href={member.socials.twitter} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#FF3154] transition-colors">
                <TwitterXIcon size={14} />
              </a>
            )}
            {member.socials.dribbble && (
              <a href={member.socials.dribbble} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#FF3154] transition-colors">
                <DribbbleIcon size={14} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="px-2 pb-2">
        <h3 className="text-xl font-bold text-white group-hover:text-gradient-brand transition-all">
          {member.name}
        </h3>
        <p className="text-xs font-mono text-[#9A9DA7] uppercase tracking-wider mt-0.5">
          {member.role}
        </p>
      </div>
    </div>
  );
};

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isReducedMotion() || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Header text reveal
      gsap.fromTo(
        '.about-header-text',
        { opacity: 0, y: 35, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, ease: 'power3.out', clearProps: 'all' }
      );

      // Story image mask reveal
      revealImage('.about-story-img', {
        trigger: '.about-story-section',
        direction: 'up',
      });

      // Values cards stagger
      gsap.fromTo(
        '.value-card',
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '.values-section',
            start: 'top 85%',
          },
        }
      );

      // Team cards stagger
      gsap.fromTo(
        '.team-card',
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.85,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: '#team',
            start: 'top 85%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full pt-32 pb-20">
      {/* 1. Header Banner */}
      <section className="relative py-12 md:py-20 overflow-hidden border-b border-white/10">
        <div className="absolute -top-10 left-1/4 w-[500px] h-[500px] bg-[#8B3DFF]/15 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 space-y-6">
          <nav className="flex items-center gap-2 text-xs font-mono text-[#9A9DA7]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-[#FF3154]">About Us</span>
          </nav>

          <div className="about-header-text space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#FF3154]">
              <Sparkles size={14} />
              ABOUT SRMUCANVAS
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white">
              About SRMUCANVAS
            </h1>
            <p className="text-lg md:text-xl text-[#9A9DA7]">
              A creative performance team turning ideas into <span className="text-gradient-brand font-bold">impactful business results.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="about-story-section py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF3154]">
                OUR STORY
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                Designing a <br />
                <span className="text-gradient-brand">Brighter Tomorrow</span>
              </h2>
              <p className="text-base md:text-lg text-[#9A9DA7] leading-relaxed">
                SRMUCANVAS is a digital marketing, search visibility and creative performance agency with a deep passion for crafting meaningful digital experiences. We believe in the power of design and targeted acquisition to inspire, engage, and create lasting business impact.
              </p>
              <p className="text-sm text-[#9A9DA7] leading-relaxed">
                Founded with the premise of "Good Design. Better Business.", we combine human-centric UX, bold graphic direction, and performance engineering to help fast-growing businesses lead their industries.
              </p>

              <div className="pt-2">
                <MagneticButton to="/lets-talk" variant="primary" className="!px-7 !py-3.5 !text-xs uppercase tracking-wider">
                  <span>Let's Work Together</span>
                  <ArrowRight size={16} />
                </MagneticButton>
              </div>
            </div>

            {/* Right Story Graphic */}
            <div className="lg:col-span-6 relative">
              <div className="about-story-img relative rounded-3xl overflow-hidden bg-[#0D1014] border border-white/15 p-3 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="SRMUCANVAS Studio Collaboration"
                  className="w-full aspect-[4/3] object-cover rounded-2xl"
                />
                {/* Floating handwritten badge */}
                <div className="absolute -bottom-4 -left-4 p-6 rounded-2xl bg-[#FF3154] text-white shadow-2xl transform -rotate-3">
                  <div className="font-handwriting text-2xl leading-none">Good Design Better Business</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 md:p-12 rounded-3xl bg-[#0D1014] border border-white/10">
            <div>
              <div className="text-3xl sm:text-5xl font-black font-mono text-white">100+</div>
              <div className="text-xs uppercase font-semibold tracking-wider text-[#9A9DA7] mt-1">Growth Campaigns</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-black font-mono text-white">50+</div>
              <div className="text-xs uppercase font-semibold tracking-wider text-[#9A9DA7] mt-1">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-black font-mono text-white">6+</div>
              <div className="text-xs uppercase font-semibold tracking-wider text-[#9A9DA7] mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl sm:text-5xl font-black font-mono text-[#FF3154]">100%</div>
              <div className="text-xs uppercase font-semibold tracking-wider text-[#9A9DA7] mt-1">Client Dedication</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR VALUES */}
      <section className="values-section py-20 md:py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF3154]">
              OUR VALUES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              Principles That Drive Us
            </h2>
            <p className="text-sm md:text-base text-[#9A9DA7]">
              The core tenets that guide every concept, line of code, and relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agencyValues.map((val) => (
              <div
                key={val.id}
                className="value-card p-8 rounded-card bg-[#0D1014] border border-white/10 hover:border-white/25 transition-all duration-300 hover:-translate-y-2 space-y-4 shadow-card"
              >
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white"
                  style={{ backgroundColor: `${val.accent}25`, border: `1px solid ${val.accent}60` }}
                >
                  <Sparkles size={22} style={{ color: val.accent }} />
                </div>
                <h3 className="text-xl font-bold text-white">{val.title}</h3>
                <p className="text-xs font-mono text-[#FF3154] font-semibold">{val.tagline}</p>
                <p className="text-xs text-[#9A9DA7] leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MEET OUR TEAM */}
      <section id="team" className="py-20 md:py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#FF3154]">
                MEET OUR TEAM
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white">
                The Minds Behind the Magic
              </h2>
              <p className="text-sm text-[#9A9DA7]">
                A passionate group of designers, developers, and strategists.
              </p>
            </div>
            <div className="font-handwriting text-2xl text-white/90">
              Great people make great work.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <TeamCardItem key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <CTASection />
    </div>
  );
};

