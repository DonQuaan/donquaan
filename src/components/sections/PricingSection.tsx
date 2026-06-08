import { useState } from 'react';
import { motion } from 'framer-motion';
import { generateMailtoLink } from '../../utils/mail';

export function PricingSection() {
  const [customPrice, setCustomPrice] = useState<number>(2500);

  return (
    <section className="w-full py-24 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6">Investment & Value</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Transparent pricing for world-class standards. Choose the partnership model that best fits your immediate or long-term goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Weekly Plan */}
          <div className="rounded-[40px] px-8 py-10 flex flex-col bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.02)] transition-colors hover:bg-white/10">
            <h3 className="text-2xl font-medium text-white mb-2">Weekly Partnership</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Fast execution for urgent tasks. <br />
              High priority delivery within 7 days.
            </p>
            
            <div className="mt-auto mb-8">
              <span className="text-white/40 text-lg line-through mr-3">$1,500</span>
              <span className="text-4xl text-white font-display tracking-tight">$99</span>
              <span className="text-white/40 text-sm ml-2">/ Week</span>
            </div>

            <a 
              href={generateMailtoLink("Weekly")}
              className="btn-premium bg-white text-black rounded-full px-7 py-3.5 text-sm font-medium text-center hover:scale-105 transition-transform"
            >
              Select Weekly Plan
            </a>
          </div>

          {/* Monthly Plan */}
          <div className="liquid-glass rounded-[40px] px-8 py-10 flex flex-col border border-primary/50 relative transform lg:-translate-y-4 shadow-[0_0_50px_rgba(236,72,153,0.15)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              Most Popular
            </div>
            <h3 className="text-2xl font-medium text-white mb-2">Monthly Partnership</h3>
            <p className="text-white/90 text-sm leading-relaxed mb-8">
              A dedicated creative design team. <br />
              You work directly with DonQuaan.
            </p>
            
            <div className="mt-auto mb-8">
              <span className="text-white/40 text-lg line-through mr-3">$5,000</span>
              <span className="text-5xl text-white font-display tracking-tight">$199</span>
              <span className="text-white/60 text-sm ml-2">/ Monthly</span>
            </div>

            <a 
              href={generateMailtoLink("Monthly")}
              className="bg-primary text-primary-foreground rounded-full px-7 py-3.5 text-sm font-bold text-center hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(236,72,153,0.4)]"
            >
              Select Monthly Plan
            </a>
          </div>

          {/* Custom Project */}
          <div className="rounded-[40px] px-8 py-10 flex flex-col bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.02)] transition-colors hover:bg-white/10">
            <h3 className="text-2xl font-medium text-white mb-2">Custom Project</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Fixed scope, fixed timeline. <br />
              Tailored specifically to your vision.
            </p>
            
            <div className="mt-auto mb-8">
              <div className="flex items-end mb-4">
                <span className="text-4xl text-white font-display tracking-tight">${customPrice.toLocaleString()}</span>
                <span className="text-white/40 text-sm ml-2 mb-1">Budget</span>
              </div>
              <input 
                type="range" 
                min="19" 
                max="4999" 
                step="10"
                value={customPrice} 
                onChange={(e) => setCustomPrice(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-white/30 mt-2">
                <span>$19</span>
                <span>$4,999</span>
              </div>
            </div>

            <a 
              href={generateMailtoLink(`Custom ($${customPrice})`)}
              className="btn-premium bg-white text-black rounded-full px-7 py-3.5 text-sm font-medium text-center hover:scale-105 transition-transform"
            >
              Propose Project
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
