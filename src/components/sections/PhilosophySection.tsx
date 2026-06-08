import { motion } from 'framer-motion';

export function PhilosophySection() {
  return (
    <section className="bg-black py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24 font-display"
        >
          Trí tuệ <em className="italic text-white/40">thích nghi &</em> <br className="hidden md:block" />
          Tối ưu hóa.
        </motion.h2>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          
          {/* Left Column: Video */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-3xl overflow-hidden aspect-[4/3] border border-white/10"
          >
            <video
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
            />
          </motion.div>

          {/* Right Column: Text Blocks */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col h-full justify-center md:pt-12"
          >
            {/* Block 1 */}
            <div className="mb-12">
              <div className="text-white/40 text-xs tracking-widest uppercase mb-4">
                Tối ưu hóa nguồn lực
              </div>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Mỗi đột phá ý nghĩa đều bắt nguồn từ sự giao thoa giữa chiến lược kỷ luật và tầm nhìn sáng tạo. Chúng tôi hoạt động tại điểm giao thoa đó, biến tư duy táo bạo thành những kết quả thực tế, giải quyết triệt để rào cản kỹ thuật.
              </p>
            </div>

            <div className="w-full h-px bg-white/10 mb-12" />

            {/* Block 2 */}
            <div>
              <div className="text-white/40 text-xs tracking-widest uppercase mb-4">
                AI & Tự động hóa
              </div>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Chúng tôi tin rằng kết quả vượt trội sẽ xuất hiện khi tư duy logic gặp gỡ sự kiên định. Tận dụng AI như một cánh tay đắc lực để khai phá những cơ hội tiềm ẩn và hiện thực hóa chúng thành các hệ thống tự động hoàn hảo.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
