import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect } from 'react';

function AnimatedCounter({ end, duration = 2, prefix = '', suffix = '' }: { end: number; duration?: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const springCount = useSpring(count, {
    damping: 30,
    stiffness: 100,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (isInView) {
      count.set(end);
    }
  }, [isInView, end, count]);

  useEffect(() => {
    return springCount.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${Math.floor(latest).toLocaleString()}${suffix}`;
      }
    });
  }, [springCount, prefix, suffix]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}

const stats = [
  {
    value: 1000,
    suffix: "+",
    label: "Lượt tải Promethium"
  },
  {
    value: 0,
    prefix: "$",
    label: "Ngân sách khởi tạo"
  },
  {
    value: 100,
    suffix: "%",
    label: "Automation Workflow"
  }
];

export function Metrics() {
  return (
    <section className="py-24 px-6 bg-background relative z-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex flex-col items-center justify-center pt-8 md:pt-0"
            >
              <div className="text-5xl md:text-7xl font-display text-primary mb-4 flex items-center">
                <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-sm uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
