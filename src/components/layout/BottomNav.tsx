import { motion } from 'framer-motion';
import { generateMailtoLink } from '../../utils/mail';

export function BottomNav() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 left-1/2 z-[60] flex md:hidden items-center gap-4 bg-black/60 border border-white/10 backdrop-blur-lg rounded-full p-2 shadow-2xl"
    >
      <span className="font-display text-white text-2xl font-semibold pl-4 pr-2">
        D.
      </span>
      <a 
        href={generateMailtoLink()}
        className="btn-premium bg-white text-black rounded-full px-6 py-2.5 text-sm font-medium hover:scale-105 transition-transform whitespace-nowrap"
      >
        Start a chat
      </a>
    </motion.div>
  );
}
