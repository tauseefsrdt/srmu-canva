import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLenis } from './hooks/useLenis';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';
import { ScrollProgressBar } from './components/ScrollProgressBar';

// Core Pages mapped strictly to DOCX
import { Home } from './pages/Home';
import { WhatWeDo } from './pages/WhatWeDo';
import { GetFound } from './pages/GetFound';
import { GetCustomers } from './pages/GetCustomers';
import { GetRemembered } from './pages/GetRemembered';
import { WhoWeHelp } from './pages/WhoWeHelp';
import { LetsTalk } from './pages/LetsTalk';

export const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize Lenis smooth scrolling
  useLenis();

  return (
    <Router>
      {/* Intro Preloader */}
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}

      {/* Interactive Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Global Scroll Progress Bar */}
      <ScrollProgressBar />

      <div className="min-h-screen flex flex-col bg-[#050608] text-white selection:bg-[#FF3154] selection:text-white relative">
        {/* Persistent Floating Navbar */}
        <Navbar />

        {/* Dynamic Route Pages with PageTransition */}
        <main className="flex-grow">
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/what-we-do" element={<WhatWeDo />} />
              <Route path="/get-found" element={<GetFound />} />
              <Route path="/get-customers" element={<GetCustomers />} />
              <Route path="/get-remembered" element={<GetRemembered />} />
              <Route path="/who-we-help" element={<WhoWeHelp />} />
              <Route path="/lets-talk" element={<LetsTalk />} />
              {/* Common alias fallbacks */}
              <Route path="/contact" element={<LetsTalk />} />
              <Route path="/services" element={<WhatWeDo />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </PageTransition>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
};
