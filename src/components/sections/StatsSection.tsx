import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ from, to, duration = 2, suffix = "" }: { from: number, to: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function (easeOutExpo)
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(from + (to - from) * easeOut));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [inView, from, to, duration]);

  return (
    <span ref={nodeRef} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export function StatsSection() {
  const stats = [
    {
      label: "YouTube Subscribers (Live)",
      url: "https://mixerno.space/embed-count/youtube-channel-counter/UC3NPuQGUQ8HDPL2LtWPlHeA",
      description: "Cựu CEO Server Discord hỗ trợ trực tiếp cộng đồng của kênh Sangtraan",
      type: "iframe"
    },
    {
      label: "Discord Members (Live)",
      url: "https://livecounts.xyz/embed/dark/discord-live-member-count/sangtraan",
      description: "Vai trò: Senior Chief Executive Officer, Systems Tester & Developer, Community Administrator",
      type: "iframe"
    },
    {
      label: "Facebook Followers",
      value: 130000,
      suffix: "+",
      description: "Quản trị Fanpage tích xanh Coach Nguyễn Tú Oanh",
      type: "counter"
    }
  ];

  return (
    <section className="relative w-full py-24 bg-black overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-black to-black opacity-50" />
      
      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center pt-8 md:pt-0 px-4 group"
            >
              {stat.type === 'counter' ? (
                <div className="text-5xl lg:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-4 transition-transform duration-500 group-hover:scale-110">
                  <AnimatedCounter from={0} to={stat.value as number} duration={2.5} suffix={stat.suffix} />
                </div>
              ) : (
                <div className="mb-4 w-full flex justify-center h-[120px] overflow-hidden opacity-90 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-500 rounded-xl">
                  <iframe 
                    src={stat.url} 
                    className="w-full max-w-[320px] h-full border-none pointer-events-none rounded-xl" 
                    scrolling="no" 
                  />
                </div>
              )}
              
              <h3 className="text-xl font-medium text-white/90 mb-2 tracking-wide uppercase text-sm lg:text-base mt-4">
                {stat.label}
              </h3>
              <p className="text-[#A3A3A3] font-light max-w-xs text-sm lg:text-base">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
