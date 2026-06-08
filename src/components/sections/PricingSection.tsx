import { motion } from 'framer-motion';

export function PricingSection() {
  return (
    <section className="w-full py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:justify-end md:max-w-4xl ml-auto"
        >
          {/* Card 1 */}
          <div className="liquid-glass rounded-[40px] px-10 md:pr-24 pt-12 pb-12 flex flex-col border border-white/5">
            <h3 className="text-[22px] font-medium text-white mb-2">Monthly Partnership</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-12">
              A dedicated creative design team. <br />
              You work directly with DonQuaan.
            </p>
            
            <div className="mt-auto mb-8">
              <span className="text-3xl text-white font-display tracking-tight">$5,000</span>
              <span className="text-white/40 text-sm ml-2">/ Monthly</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-premium bg-white text-black rounded-full px-7 py-3 text-sm font-medium text-center hover:scale-105 transition-transform">
                Start a chat
              </a>
              <a href="#about" className="rounded-full px-7 py-3 text-sm font-medium text-white text-center hover:bg-white/5 transition-colors border border-transparent">
                How it works
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-[40px] px-10 md:pr-24 pt-12 pb-12 flex flex-col bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.03)]">
            <h3 className="text-[22px] font-medium text-white mb-2">Custom Project</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-12">
              Fixed scope, fixed timeline. <br />
              Same team, same standards.
            </p>
            
            <div className="mt-auto mb-8">
              <span className="text-3xl text-white font-display tracking-tight">$5,000</span>
              <span className="text-white/40 text-sm ml-2">/ Minimum</span>
            </div>

            <div className="flex gap-4">
              <a href="#contact" className="liquid-glass rounded-full px-7 py-3 text-sm font-medium text-white text-center hover:bg-white/10 transition-colors w-full sm:w-auto">
                Start a chat
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
