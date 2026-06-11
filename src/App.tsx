import { useEffect, Suspense, lazy } from 'react';
import Lenis from 'lenis';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CustomCursor } from './components/ui/CustomCursor';
import { Preloader } from './components/ui/Preloader';
import { TerminalEasterEgg } from './components/features/TerminalEasterEgg';
import { MusicProvider } from './contexts/MusicContext';
import { MusicPlayer } from './components/features/MusicPlayer';
import { LanguageProvider } from './contexts/LanguageContext';

import { HomePage } from './components/pages/HomePage';
const LegalLayout = lazy(() => import('./components/pages/LegalLayout').then(module => ({ default: module.LegalLayout })));

const getPrivacyHtml = () => import('./legal/Privacy Policy.html?raw').then(m => m.default);
const getTermsHtml = () => import('./legal/Terms of Service.html?raw').then(m => m.default);
const getCookiesHtml = () => import('./legal/Cookies Policy.html?raw').then(m => m.default);
const getDisclaimerHtml = () => import('./legal/Disclaimer.html?raw').then(m => m.default);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
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
    <HelmetProvider>
      <LanguageProvider>
        <MusicProvider>
          <HashRouter>
            <div className="relative min-h-screen w-full bg-background overflow-x-clip flex flex-col font-body text-foreground">
              <CustomCursor />
              <Preloader />
              <TerminalEasterEgg />
              <MusicPlayer />
              
              <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/privacy-policy" element={<LegalLayout getHtmlContent={getPrivacyHtml} />} />
                  <Route path="/terms-of-service" element={<LegalLayout getHtmlContent={getTermsHtml} />} />
                  <Route path="/cookies-policy" element={<LegalLayout getHtmlContent={getCookiesHtml} />} />
                  <Route path="/disclaimer" element={<LegalLayout getHtmlContent={getDisclaimerHtml} />} />
                </Routes>
              </Suspense>
            </div>
          </HashRouter>
        </MusicProvider>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
