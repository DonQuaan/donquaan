import { useEffect, Suspense, lazy } from 'react';
import Lenis from 'lenis';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { CustomCursor } from './components/ui/CustomCursor';
import { Preloader } from './components/ui/Preloader';
import { TerminalEasterEgg } from './components/features/TerminalEasterEgg';
import { MusicProvider } from './contexts/MusicContext';
import { MusicPlayer } from './components/features/MusicPlayer';

const HomePage = lazy(() => import('./components/pages/HomePage').then(module => ({ default: module.HomePage })));
const LegalLayout = lazy(() => import('./components/pages/LegalLayout').then(module => ({ default: module.LegalLayout })));

const getPrivacyHtml = () => import('../Privacy Policy.html?raw').then(m => m.default);
const getTermsHtml = () => import('../Terms of Service.html?raw').then(m => m.default);
const getCookiesHtml = () => import('../Cookies Policy.html?raw').then(m => m.default);
const getDisclaimerHtml = () => import('../Disclaimer.html?raw').then(m => m.default);

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
  );
}

export default App;
