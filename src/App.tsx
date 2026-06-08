import { useEffect } from 'react';
import Lenis from 'lenis';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { CustomCursor } from './components/ui/CustomCursor';
import { Preloader } from './components/ui/Preloader';
import { TerminalEasterEgg } from './components/features/TerminalEasterEgg';

import { HomePage } from './components/pages/HomePage';
import { LegalLayout } from './components/pages/LegalLayout';

import privacyHtml from '../Privacy Policy.html?raw';
import termsHtml from '../Terms of Service.html?raw';
import cookiesHtml from '../Cookies Policy.html?raw';
import disclaimerHtml from '../Disclaimer.html?raw';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      syncTouch: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HashRouter>
      <div className="relative min-h-screen w-full bg-background overflow-x-hidden flex flex-col font-body text-foreground">
        <CustomCursor />
        <Preloader />
        <TerminalEasterEgg />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<LegalLayout htmlContent={privacyHtml} />} />
          <Route path="/terms-of-service" element={<LegalLayout htmlContent={termsHtml} />} />
          <Route path="/cookies-policy" element={<LegalLayout htmlContent={cookiesHtml} />} />
          <Route path="/disclaimer" element={<LegalLayout htmlContent={disclaimerHtml} />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
