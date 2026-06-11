import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export function CourseSection() {
  const { language } = useLanguage();
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  
  const basePath = import.meta.env.BASE_URL;

  return (
    <section ref={container} className="relative w-full py-32 md:py-48 bg-black overflow-hidden flex items-center justify-center min-h-screen">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src={`${basePath}assets/images/courses/course-3.webp`} 
          alt={language === 'vi' ? 'Đánh Thức Sự Giàu Có Event' : 'Awaken Your Wealth Event'}
          className="object-cover w-full h-full opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-5xl flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A3A3A3]">Continuous Growth</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tight uppercase"
        >
          {language === 'vi' ? 'Đánh Thức' : 'Awaken'}<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E5E5E5] to-[#737373]">{language === 'vi' ? 'Sự Giàu Có' : 'Your Wealth'}</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-16 h-px bg-white/20 mb-10 origin-center"
        />

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl lg:text-2xl text-[#A3A3A3] font-light max-w-3xl leading-relaxed mb-20"
        >
          {language === 'vi' ? (
            <>Ngày 11 tháng 06 năm 2026, tôi đã tham gia chương trình huấn luyện đặc biệt cùng diễn giả <strong className="text-white font-medium">Phạm Thành Long</strong>. Một trải nghiệm bứt phá tư duy, đánh thức tiềm năng vô hạn và kiến tạo nền móng vững chắc cho thành công đột phá.</>
          ) : (
            <>On June 11, 2026, I joined an exclusive training program led by speaker <strong className="text-white font-medium">Pham Thanh Long</strong> — a mindset-shifting experience that awakened limitless potential and laid a rock-solid foundation for breakthrough success.</>
          )}
        </motion.p>

        {/* Masonry Gallery */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 w-full max-w-7xl mt-4 space-y-4 md:space-y-6"
        >
          {[1, 2, 4, 5, 6, 7, 8, 9].map((num) => (
            <div key={num} className="relative rounded-2xl overflow-hidden border border-white/10 group shadow-2xl break-inside-avoid">
               <img src={`${basePath}assets/images/courses/course-${num}.webp`} alt={`Event Highlights ${num}`} className="object-cover w-full transition-transform duration-1000 group-hover:scale-110" />
               <div className="absolute inset-0 bg-black/40 transition-colors duration-700 group-hover:bg-black/10" />
               <div className="absolute inset-0 border border-white/5 rounded-2xl z-10 pointer-events-none" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
