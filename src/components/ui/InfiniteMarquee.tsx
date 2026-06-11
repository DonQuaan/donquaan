import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Self-hosted H.264 clips (hardware-decoded) — replaced ~93MB of external
// animated GIFs that were CPU-decoded and the page's biggest jank source.
const BASE = import.meta.env.BASE_URL;
const videos = [
  `${BASE}media/marquee-space-voyage.mp4`,
  `${BASE}media/marquee-portfolio-cosmic.mp4`,
  `${BASE}media/marquee-velorah.mp4`,
  `${BASE}media/marquee-asme.mp4`,
  `${BASE}media/marquee-transform-data.mp4`,
  `${BASE}media/marquee-aethera.mp4`,
  `${BASE}media/marquee-orbit-web3.mp4`,
  `${BASE}media/marquee-nexora.mp4`
];

// Duplicate for seamless loop
const scrollContent = [...videos, ...videos];

export function InfiniteMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  // React doesn't reliably reflect muted/autoPlay to the DOM before the
  // browser's autoplay check runs — kick playback off explicitly.
  useEffect(() => {
    const els = trackRef.current?.querySelectorAll('video');
    if (!els) return;
    els.forEach((v) => {
      v.muted = true;
      const tryPlay = () => { v.play().catch(() => {}); };
      if (v.readyState >= 2) tryPlay();
      else v.addEventListener('loadeddata', tryPlay, { once: true });
    });
  }, []);

  return (
    <section className="w-full mt-16 md:mt-20 mb-16 overflow-hidden bg-black py-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="flex"
      >
        <div ref={trackRef} className="flex animate-marquee w-max">
          {scrollContent.map((src, idx) => (
            <video
              key={idx}
              src={src}
              aria-label="Project preview"
              className="h-[280px] md:h-[400px] lg:h-[500px] w-auto aspect-[4/3] md:aspect-video object-cover mx-3 rounded-2xl shadow-lg border border-white/5"
              muted
              autoPlay
              loop
              playsInline
              preload="metadata"
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
