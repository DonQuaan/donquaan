import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/features/Hero';
import { InfiniteMarquee } from './components/ui/InfiniteMarquee';
import { AboutSection } from './components/sections/AboutSection';
import { FeaturedVideoSection } from './components/sections/FeaturedVideoSection';
import { PhilosophySection } from './components/sections/PhilosophySection';
import { ServicesSection } from './components/sections/ServicesSection';
import { Projects } from './components/features/Projects';
import { PricingSection } from './components/sections/PricingSection';
import { TestimonialCarousel } from './components/features/TestimonialCarousel';
import { FAQSection } from './components/sections/FAQSection';
import { PartnerCTASection } from './components/sections/PartnerCTASection';
import { BottomNav } from './components/layout/BottomNav';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { Preloader } from './components/ui/Preloader';
import { TerminalEasterEgg } from './components/features/TerminalEasterEgg';
import { MorphingDivider } from './components/ui/MorphingDivider';

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
    <div className="relative min-h-screen w-full bg-background overflow-x-hidden flex flex-col font-body text-foreground">
      <CustomCursor />
      <Preloader />
      <TerminalEasterEgg />
      
      <Navigation />
      <BottomNav />
      
      <main>
        <Hero />
        <InfiniteMarquee />
        
        <MorphingDivider />
        <AboutSection />
        
        <MorphingDivider />
        <FeaturedVideoSection />
        <PhilosophySection />
        
        <MorphingDivider />
        <ServicesSection />
        <Projects />
        
        <MorphingDivider />
        <PricingSection />
        <TestimonialCarousel />
        <FAQSection />
        <PartnerCTASection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
