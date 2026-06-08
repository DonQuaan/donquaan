import { Hero } from '../features/Hero';
import { InfiniteMarquee } from '../ui/InfiniteMarquee';
import { AboutSection } from '../sections/AboutSection';
import { FeaturedVideoSection } from '../sections/FeaturedVideoSection';
import { PhilosophySection } from '../sections/PhilosophySection';
import { ServicesSection } from '../sections/ServicesSection';
import { Projects } from '../features/Projects';
import { PricingSection } from '../sections/PricingSection';
import { TestimonialCarousel } from '../features/TestimonialCarousel';
import { FAQSection } from '../sections/FAQSection';
import { PartnerCTASection } from '../sections/PartnerCTASection';
import { BottomNav } from '../layout/BottomNav';
import { MorphingDivider } from '../ui/MorphingDivider';
import { Navigation } from '../layout/Navigation';
import { Footer } from '../layout/Footer';

export function HomePage() {
  return (
    <>
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
    </>
  );
}
