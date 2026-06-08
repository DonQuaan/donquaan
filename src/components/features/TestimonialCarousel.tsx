import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    text: "Tư duy hệ thống sắc bén, giải quyết triệt để rào cản kỹ thuật từ những bước đầu tiên. Một đối tác đáng tin cậy.",
    name: "Marcus Anderson",
    role: "CEO",
    company: "Data.storage",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    text: "DonQuaan led the creation of our best architectural framework to date! Khả năng tối ưu mã nguồn thật sự ấn tượng.",
    name: "Alex Wu",
    role: "Founder",
    company: "Nexgate",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    text: "Working with this studio transformed our product vision. Sự tỉ mỉ trong từng pixel và logic flow cực kỳ hoàn hảo.",
    name: "James Mitchell",
    role: "VP Product",
    company: "LaunchPad",
    avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="w-full py-20 bg-black overflow-hidden px-6 content-defer">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h2 className="text-4xl md:text-5xl font-display text-white tracking-tight">
            Lời <em className="italic text-white/60">khách hàng</em>
          </h2>
          <div className="flex items-center gap-2 text-white">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-white text-white" />
              ))}
            </div>
            <span className="text-sm tracking-widest uppercase ml-2 text-white/60">Clutch 5/5</span>
          </div>
        </div>

        {/* Carousel Content */}
        <div 
          className="relative max-w-4xl ml-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative h-[300px] md:h-[280px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 liquid-glass rounded-[32px] md:rounded-[40px] px-8 md:pl-10 md:pr-24 py-10 flex flex-col justify-between border border-white/5"
              >
                {/* SVG Quote mark */}
                <svg className="w-8 h-8 text-white/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8 flex-1">
                  {testimonials[currentIndex].text}
                </p>

                <div className="flex items-center gap-4">
                  <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} loading="lazy" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-white text-sm">{testimonials[currentIndex].name}</div>
                    <div className="text-white/50 text-sm flex items-center gap-1">
                      <span className="text-primary">↗</span> {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-4 mt-8 justify-end">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors" aria-label="Previous testimonial">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors" aria-label="Next testimonial">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
