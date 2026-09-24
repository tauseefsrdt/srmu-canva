import React, { useRef, useState, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface MagneticButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'glass' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  strength?: number;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  to,
  href,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  strength = 15,
  type = 'button',
  disabled = false,
}) => {
  const buttonRef = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (!buttonRef.current) return;

    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);

    setPosition({
      x: (x / (width / 2)) * strength,
      y: (y / (height / 2)) * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs font-bold uppercase tracking-wider',
    md: 'px-7 py-3.5 text-sm font-bold tracking-wide',
    lg: 'px-8 py-4 text-sm font-bold uppercase tracking-wider',
  };

  const baseStyles = `relative inline-flex items-center justify-center rounded-full transition-all duration-300 select-none group cursor-pointer overflow-hidden ${sizeStyles[size]}`;
  
  const variantStyles = {
    primary: 'bg-[#FF3154] text-white hover:bg-[#ff1b43] shadow-[0_0_25px_rgba(255,49,84,0.4)] hover:shadow-[0_0_35px_rgba(255,49,84,0.7)]',
    secondary: 'bg-[#151920] text-white border border-white/10 hover:border-white/30 hover:bg-[#1E232D]',
    glass: 'bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/15 hover:border-white/25 shadow-glass',
    outline: 'border border-[#FF3154] text-white hover:bg-[#FF3154] hover:shadow-[0_0_25px_rgba(255,49,84,0.5)]',
    ghost: 'text-white hover:text-[#FF3154] bg-transparent',
  };

  const combinedClass = `${baseStyles} ${variantStyles[variant]} ${className}`;
  const transformStyle = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
    transition: position.x === 0 && position.y === 0 ? 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)' : 'transform 0.1s ease-out',
  };

  // If internal link
  const targetPath = to || (href && href.startsWith('/') ? href : undefined);

  if (targetPath) {
    return (
      <Link
        to={targetPath}
        ref={buttonRef as any}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={combinedClass}
        style={transformStyle}
        data-cursor="pointer"
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        ref={buttonRef as any}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={combinedClass}
        style={transformStyle}
        data-cursor="pointer"
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      ref={buttonRef as any}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${combinedClass} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      style={transformStyle}
      data-cursor="pointer"
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};
