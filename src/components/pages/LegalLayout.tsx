import { useEffect } from 'react';
import { Navigation } from '../layout/Navigation';
import { Footer } from '../layout/Footer';

interface LegalLayoutProps {
  htmlContent: string;
}

export function LegalLayout({ htmlContent }: LegalLayoutProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [htmlContent]);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-primary/30 selection:text-white">
      <Navigation />
      
      <main className="pt-40 pb-24 px-6 md:px-12 max-w-4xl mx-auto min-h-[70vh]">
        <article 
          className="prose prose-invert prose-p:text-white/70 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-headings:font-display prose-headings:font-medium prose-h1:text-4xl md:prose-h1:text-5xl prose-h2:text-2xl max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }} 
        />
      </main>

      <Footer />
    </div>
  );
}
