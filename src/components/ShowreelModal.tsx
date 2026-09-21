import React from 'react';
import { X, Play, Volume2, Sparkles } from 'lucide-react';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-xl animate-fade-in">
      <div 
        className="relative w-full max-w-5xl bg-[#0D1014] border border-white/15 rounded-3xl overflow-hidden shadow-2xl animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#151920]/80">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#FF3154] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-white">REDCANVASS 2026 SHOWREEL</span>
          </div>
          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Showreel"
          >
            <X size={18} />
          </button>
        </div>

        {/* Video simulation / Cinematic Interactive Showcase */}
        <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center group">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop" 
            alt="REDCANVASS Showreel Visuals"
            className="w-full h-full object-cover opacity-60 transform scale-105 group-hover:scale-100 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          {/* Central Play Badge */}
          <div className="absolute flex flex-col items-center gap-4 z-10">
            <div className="w-20 h-20 rounded-full bg-[#FF3154] text-white flex items-center justify-center shadow-[0_0_50px_rgba(255,49,84,0.8)] animate-pulse cursor-pointer">
              <Play size={32} className="ml-1 fill-white" />
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-white tracking-wide">Agency Showreel 2026</p>
              <p className="text-xs text-[#9A9DA7] tracking-wider uppercase">4K HDR • Design, 3D, Web & Campaigns</p>
            </div>
          </div>

          {/* Bottom Video Controls Bar */}
          <div className="absolute bottom-0 inset-x-0 p-4 md:p-6 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between text-xs text-white/80">
            <div className="flex items-center gap-3">
              <Sparkles size={16} className="text-[#FF3154]" />
              <span>Full Showreel Streaming • 60 FPS</span>
            </div>
            <div className="flex items-center gap-3">
              <Volume2 size={16} />
              <span>Dolby Spatial Audio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
