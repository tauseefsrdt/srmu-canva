import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop } from '../hooks/useLenis';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Immediately reset scroll position to 0 on new page entrance
    scrollToTop(true);
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="w-full animate-fade-in">
      {children}
    </div>
  );
};


