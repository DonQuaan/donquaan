import { Hero } from '../features/Hero';
import { InfiniteMarquee } from '../ui/InfiniteMarquee';
import { AboutSection } from '../sections/AboutSection';
import { FeaturedVideoSection } from '../sections/FeaturedVideoSection';
import { PhilosophySection } from '../sections/PhilosophySection';
import { CourseSection } from '../sections/CourseSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { StatsSection } from '../sections/StatsSection';
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

import { DeferredRender } from '../ui/DeferredRender';

export function HomePage() {
  return (
    <>
      <Navigation />
      <BottomNav />
      
      <main>
        <Hero />
        
        <DeferredRender>
          <InfiniteMarquee />
          
          <MorphingDivider />
          <AboutSection />
          
          <StatsSection />
          <ExperienceSection />
          
          <MorphingDivider />
          <FeaturedVideoSection />
          <PhilosophySection />
          
          <CourseSection />

          <ServicesSection />
          <Projects />
          
          <PricingSection />
          <TestimonialCarousel />
          <FAQSection />
          <PartnerCTASection />
        </DeferredRender>
      </main>
      
      <Footer />
    </>
  );
}
