import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { LiveSubscriberCount } from '../features/LiveSubscriberCount';
import { CertificatesMarquee } from '../features/CertificatesMarquee';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="about" 
      className="bg-black pt-32 md:pt-44 pb-20 px-6 overflow-hidden relative content-defer"
      ref={ref}
    >
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-white/40 text-sm tracking-widest uppercase mb-12"
        >
          Về Nguyễn Vũ Đông Quân
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight max-w-4xl font-display mb-20"
        >
          <em className="italic text-white/60">Reverse engineer</em> mọi bài toán, <br className="hidden md:block" />
          tìm ra <em className="italic text-white/60">nguyên lý gốc</em>, và tái lắp ráp lại <br className="hidden md:block" />
          theo cách <em className="italic text-white/60">tối ưu hơn.</em>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 text-left"
        >
          {/* Profile Column */}
          <div className="lg:col-span-5 liquid-glass p-8 md:p-10 rounded-3xl border border-white/5 space-y-8 hover:border-white/10 transition-colors">
            <div>
              <h3 className="text-3xl text-white font-display mb-2">Nguyễn Vũ Đông Quân</h3>
              <p className="text-primary text-sm md:text-base font-medium tracking-wide">Gemini Certified Faculty | Google AI Specialist</p>
              <p className="text-white/40 text-sm mt-2">Đà Nẵng, Da Nang City, Vietnam</p>
            </div>
            
            <div className="w-full h-[1px] bg-white/5" />
            
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4">Năng Lực Cốt Lõi</h4>
              <ul className="text-white/80 space-y-3 text-sm md:text-base">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Digital Design & Dev: Roblox and Minecraft</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white/40" /> Senior Chief Executive Officer</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white/40" /> Community Administrator</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white/40" /> Systems Tester & Developer</li>
              </ul>
            </div>
          </div>

          {/* Experience & Ed Column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="liquid-glass p-8 md:p-10 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/30 mb-6">Kinh Nghiệm Thực Chiến</h4>
              <div className="space-y-2">
                <a href="https://discord.gg/sangtraan" target="_blank" rel="noreferrer" className="text-2xl text-white hover:text-primary transition-colors font-display block">Discord sangtraan</a>
                <p className="text-white/90 text-base font-medium">Chief Executive Officer</p>
                <p className="text-white/40 text-sm">April 2025 - September 2025</p>
                <p className="text-white/60 text-sm mt-3 leading-relaxed">
                  Network Ambassador, Systems Tester & Developer, Community Administrator.
                </p>
                <LiveSubscriberCount />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="liquid-glass p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
                <h4 className="text-xs uppercase tracking-[0.2em] text-white/30 mb-5">Học Vấn</h4>
                <div className="space-y-2">
                  <a href="https://arena.fpt.edu.vn/" target="_blank" rel="noreferrer" className="text-xl text-white hover:text-primary transition-colors font-display block leading-snug">FPT Arena</a>
                  <p className="text-white/80 text-sm leading-relaxed">Advanced Diploma In Multimedia, Web Page, Digital/Multimedia and Information Resources Design</p>
                  <p className="text-white/40 text-xs mt-2">Feb 2025 - Feb 2028</p>
                </div>
              </div>

              <div className="liquid-glass p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors flex flex-col h-full">
                <h4 className="text-xs uppercase tracking-[0.2em] text-white/30 mb-5">Chứng Chỉ Nổi Bật</h4>
                <div className="flex-1 flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center p-2">
                    <img src="https://pdf.ms.credential.net/badge/image?env=production&credential=ztofjtke" alt="Gemini Certified Faculty Badge" className="w-full h-full object-contain" />
                  </div>
                  <div className="space-y-3">
                    <div>
                      <a href="https://edu.google.accredible.com/529911e4-a7fb-42b6-9c9f-50d29e633430#acc.Fovqh654" target="_blank" rel="noreferrer" className="text-xl text-white hover:text-primary transition-colors font-display block leading-snug">Gemini Certified Faculty</a>
                      <p className="text-white/60 text-sm mt-1">Google for Education • Valid until 2029</p>
                    </div>
                    <p className="text-white/50 text-xs leading-relaxed hidden md:block">
                      A Google Certified Gemini Faculty member can articulate and demonstrate foundational knowledge of generative AI concepts and the core features and capabilities of Gemini within the educational context.
                    </p>
                    <a href={`${import.meta.env.BASE_URL}assets/certificates/Gemini_Certified_Faculty.pdf`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary hover:text-white transition-colors mt-2">
                      <span>Xem Bản PDF</span>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Kaggle Certificates Marquee */}
        <CertificatesMarquee />
      </div>
    </section>
  );
}
