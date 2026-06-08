import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function ServicesSection() {
  return (
    <section id="services" className="bg-black py-28 md:py-40 px-6 overflow-hidden relative">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight font-display">
            Năng lực cốt lõi
          </h2>
          <div className="hidden md:block text-white/40 text-sm tracking-widest uppercase mb-2">
            Our Services
          </div>
        </motion.div>

        {/* Two-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0 }}
            className="liquid-glass rounded-3xl overflow-hidden group flex flex-col border border-white/5"
          >
            {/* Video Area */}
            <div className="relative aspect-video overflow-hidden">
              <video
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="uppercase tracking-widest text-white/40 text-xs font-semibold">Architecture</span>
                <div className="liquid-glass rounded-full p-2">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-white text-2xl md:text-3xl mb-4 font-display tracking-tight">Hệ thống & Mã nguồn</h3>
              <p className="text-white/50 text-sm md:text-base leading-relaxed mt-auto">
                Phân tích logic luồng dữ liệu sâu sắc, thiết kế kiến trúc hệ thống có khả năng mở rộng cao, và xử lý triệt để các vấn đề nghẽn cổ chai (bottleneck) về hiệu năng.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="liquid-glass rounded-3xl overflow-hidden group flex flex-col border border-white/5"
          >
            {/* Video Area */}
            <div className="relative aspect-video overflow-hidden">
              <video
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="uppercase tracking-widest text-white/40 text-xs font-semibold">Visual Craft</span>
                <div className="liquid-glass rounded-full p-2">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-white text-2xl md:text-3xl mb-4 font-display tracking-tight">Thiết kế Trực quan & Tương tác</h3>
              <p className="text-white/50 text-sm md:text-base leading-relaxed mt-auto">
                Biến các khái niệm kỹ thuật trừu tượng thành những giao diện mượt mà. Ứng dụng hoạt ảnh nâng cao và Typography để mang lại ấn tượng thị giác vượt trội.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
