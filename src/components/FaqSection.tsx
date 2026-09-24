import React, { useState, useRef, useLayoutEffect } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { isReducedMotion } from '../utils/animations';

export interface FaqItem {
  question: string;
  answer: string;
  source?: string;
}

interface FaqSectionProps {
  title?: string;
  subtitle?: string;
  tagline?: string;
  faqs?: FaqItem[];
  items?: FaqItem[];
  showCta?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  title,
  subtitle,
  tagline,
  faqs,
  items,
  showCta = false,
  ctaText = "Not sure what your business needs? Get a Free Audit",
  ctaLink = "/lets-talk"
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const faqList = items || faqs || [];

  useLayoutEffect(() => {
    if (isReducedMotion() || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-accordion-item',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: 'power3.out',
          clearProps: 'all',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [faqList]);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={sectionRef} className="w-full relative space-y-4">
      {title && (
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
          {tagline && (
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#FF3154]">
              <HelpCircle size={14} />
              {tagline}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm md:text-base text-[#9A9DA7]">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Accordion list */}
      <div className="space-y-4">
        {faqList.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`faq-accordion-item rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-[#0D1014] border-[#FF3154]/40 shadow-[0_10px_30px_rgba(255,49,84,0.15)]'
                  : 'bg-[#0D1014]/60 border-white/10 hover:border-white/20'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 select-none cursor-pointer"
                aria-expanded={isOpen}
              >
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {faq.question}
                </h3>
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'bg-[#FF3154] text-white rotate-180' : 'bg-white/5 text-[#9A9DA7]'
                  }`}
                >
                  <ChevronDown size={18} />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 border-t border-white/5 animate-fade-in space-y-2">
                  <p className="text-sm md:text-base text-[#9A9DA7] leading-relaxed">
                    {faq.answer}
                  </p>
                  {faq.source && (
                    <p className="text-xs font-mono text-[#28D7FF]">
                      Source: {faq.source}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      {showCta && (
        <div className="text-center pt-6">
          <Link
            to={ctaLink}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#FF3154] hover:text-white hover:underline transition-colors"
          >
            <span>{ctaText}</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </div>
  );
};
