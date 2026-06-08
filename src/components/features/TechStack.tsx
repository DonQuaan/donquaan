import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const technologies = [
  "Adobe Photoshop", "Adobe Premiere", "Adobe After Effects", "Adobe Illustrator",
  "React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion",
  "Claude AI", "VS Code", "Git", "Canva", "Node.js", "Java (Modding)"
];

export function TechStack() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <section ref={containerRef} className="py-24 overflow-hidden relative z-20 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-display text-foreground mb-4">Vũ trụ Công nghệ</h2>
        <p className="text-muted-foreground">Không tôn sùng công cụ. Chỉ quan tâm đến hiệu năng giải quyết vấn đề.</p>
      </div>

      <div className="flex flex-col gap-6 w-[150vw] -ml-[25vw]">
        <motion.div style={{ x: x1 }} className="flex gap-4 items-center justify-center">
          {technologies.slice(0, 8).map((tech, i) => (
            <div key={i} className="px-8 py-4 rounded-full border border-white/10 bg-white/5 whitespace-nowrap text-foreground font-medium hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 cursor-default">
              {tech}
            </div>
          ))}
        </motion.div>
        
        <motion.div style={{ x: x2 }} className="flex gap-4 items-center justify-center">
          {technologies.slice(8).map((tech, i) => (
            <div key={i} className="px-8 py-4 rounded-full border border-white/10 bg-white/5 whitespace-nowrap text-foreground font-medium hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 cursor-default">
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
