import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const progress = useMotionValue(0);
  const progressText = useTransform(progress, (latest) => Math.floor(latest) + '%');

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: 1.5,
      ease: "easeInOut",
      onComplete: () => {
        setTimeout(() => setIsLoading(false), 300);
      }
    });
    return controls.stop;
  }, [progress]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
        >
          {/* Logo Animation */}
          <div className="relative w-24 h-24 mb-8">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id="loader-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A855F7" />
                  <stop offset="50%" stopColor="#EC4899" />
                  <stop offset="100%" stopColor="#F97316" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 50 0 C 50 40, 60 50, 100 50 C 60 50, 50 60, 50 100 C 50 60, 40 50, 0 50 C 40 50, 50 40, 50 0 Z"
                fill="transparent"
                stroke="url(#loader-grad)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M 50 0 C 50 40, 60 50, 100 50 C 60 50, 50 60, 50 100 C 50 60, 40 50, 0 50 C 40 50, 50 40, 50 0 Z"
                fill="url(#loader-grad)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              />
            </svg>
          </div>

          {/* Progress Number */}
          <motion.div className="font-display text-4xl text-foreground">
            {progressText}
          </motion.div>
          
          <div className="text-muted-foreground text-xs uppercase tracking-[0.3em] mt-4">
            System Initialization
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
