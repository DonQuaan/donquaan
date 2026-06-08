import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { generateMailtoLink } from '../../utils/mail';

const gifs = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif",
  "https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif"
];

export function PartnerCTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastSpawnTime = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    // We will keep track of created elements to clean them up properly if component unmounts
    const activeTrails = new Set<HTMLImageElement>();

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastSpawnTime.current < 80) return; // spawn every 80ms max
      lastSpawnTime.current = now;

      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const img = document.createElement('img');
      img.src = gifs[Math.floor(Math.random() * gifs.length)];
      img.className = "absolute pointer-events-none rounded-xl object-cover shadow-2xl transition-all duration-1000 ease-out z-0";
      
      // Initial state
      const size = 120; // 120px size
      const randomRotation = (Math.random() - 0.5) * 20; // -10 to +10
      
      img.style.width = `${size}px`;
      img.style.height = `${size}px`;
      img.style.left = `${x - size / 2}px`;
      img.style.top = `${y - size / 2}px`;
      img.style.transform = `scale(1) rotate(${randomRotation}deg)`;
      img.style.opacity = '0.8';

      container.appendChild(img);
      activeTrails.add(img);

      // Trigger animation next frame
      animationFrameId = requestAnimationFrame(() => {
        img.style.transform = `scale(0.5) rotate(${randomRotation * 2}deg) translateY(20px)`;
        img.style.opacity = '0';
      });

      // Cleanup after 1 second
      setTimeout(() => {
        if (container.contains(img)) {
          container.removeChild(img);
          activeTrails.delete(img);
        }
      }, 1000);
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      activeTrails.forEach(img => {
        if (img.parentNode) img.parentNode.removeChild(img);
      });
    };
  }, []);

  return (
    <section className="w-full py-12 px-6 bg-black flex justify-center">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl py-32 md:py-48 rounded-[40px] border border-white/10 bg-white/5 relative overflow-hidden flex flex-col items-center justify-center text-center cursor-crosshair shadow-[inset_0_0_100px_rgba(255,255,255,0.02)]"
      >
        <h2 className="text-[48px] md:text-[64px] lg:text-[80px] font-display text-white mb-12 relative z-10 pointer-events-none tracking-tight">
          Initiate Collaboration
        </h2>
        
        <a 
          href={generateMailtoLink()}
          className="relative z-10 btn-premium bg-white text-black rounded-full pl-2 pr-6 py-2 flex items-center gap-4 hover:scale-105 transition-transform"
        >
          <img 
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150" 
            alt="DonQuaan avatar" 
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-medium text-sm">Start a chat with DonQuaan</span>
        </a>
      </motion.div>
    </section>
  );
}
