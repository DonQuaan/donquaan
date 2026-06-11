import { Suspense, lazy } from 'react';
import { Hero } from '../features/Hero';
import { InfiniteMarquee } from '../ui/InfiniteMarquee';
import { AboutSection } from '../sections/AboutSection';
import { RecognitionsMarquee } from '../features/RecognitionsMarquee';
import { BottomNav } from '../layout/BottomNav';
import { MorphingDivider } from '../ui/MorphingDivider';
import { Navigation } from '../layout/Navigation';
import { Footer } from '../layout/Footer';
import { DeferredRender } from '../ui/DeferredRender';

// Lazy loaded sections
const FeaturedVideoSection = lazy(() => import('../sections/FeaturedVideoSection').then(m => ({ default: m.FeaturedVideoSection })));
const PhilosophySection = lazy(() => import('../sections/PhilosophySection').then(m => ({ default: m.PhilosophySection })));
const CourseSection = lazy(() => import('../sections/CourseSection').then(m => ({ default: m.CourseSection })));
const ExperienceSection = lazy(() => import('../sections/ExperienceSection').then(m => ({ default: m.ExperienceSection })));
const StatsSection = lazy(() => import('../sections/StatsSection').then(m => ({ default: m.StatsSection })));
const ServicesSection = lazy(() => import('../sections/ServicesSection').then(m => ({ default: m.ServicesSection })));
const Projects = lazy(() => import('../features/Projects').then(m => ({ default: m.Projects })));
const PricingSection = lazy(() => import('../sections/PricingSection').then(m => ({ default: m.PricingSection })));
const TestimonialCarousel = lazy(() => import('../features/TestimonialCarousel').then(m => ({ default: m.TestimonialCarousel })));
const FAQSection = lazy(() => import('../sections/FAQSection').then(m => ({ default: m.FAQSection })));
const ContactSection = lazy(() => import('../sections/ContactSection').then(m => ({ default: m.ContactSection })));
const InsightsSection = lazy(() => import('../sections/InsightsSection').then(m => ({ default: m.InsightsSection })));

const Fallback = () => <div className="min-h-[50vh] w-full bg-black"></div>;

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
          
          <RecognitionsMarquee />
          
          <Suspense fallback={<Fallback />}>
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
            
            <InsightsSection />
            
            <FAQSection />
            <ContactSection />
          </Suspense>
        </DeferredRender>
      </main>
      
      <Footer />
    </>
  );
}
