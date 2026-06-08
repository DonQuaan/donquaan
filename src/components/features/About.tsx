import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Globe } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="w-6 h-6 mb-4 text-primary" />,
    title: "Kiến trúc Hệ thống (Code & Architecture)",
    description: "Tự phát triển giải pháp toàn trình. Sử dụng VS Code làm môi trường phát triển chính, kết hợp các công nghệ Web hiện đại để xử lý logic."
  },
  {
    icon: <Palette className="w-6 h-6 mb-4 text-primary" />,
    title: "Thiết kế Trực quan (Design & Visual)",
    description: "Làm chủ hệ sinh thái Adobe Suite (Photoshop, Premiere, After Effects) và Canva để tạo ra các trải nghiệm UI/UX sắc nét."
  },
  {
    icon: <Zap className="w-6 h-6 mb-4 text-primary" />,
    title: "Tích hợp AI & Tự động hóa",
    description: "Dùng Claude AI và tự động hóa làm đòn bẩy tư duy để cắt giảm thao tác thủ công, tập trung tối đa vào chiến lược."
  },
  {
    icon: <Globe className="w-6 h-6 mb-4 text-primary" />,
    title: "Nghiên cứu & Tiến hóa (R&D)",
    description: "Reverse engineer mọi bài toán. Không ngừng phá vỡ giới hạn, học hỏi và áp dụng công nghệ để giải quyết bài toán đa ngành."
  }
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 bg-background z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-6xl font-display text-foreground mb-8">
              Trí tuệ thích nghi & <br/><em className="not-italic text-muted-foreground">Tối ưu hóa nguồn lực.</em>
            </h2>
            <div className="space-y-6 text-muted-foreground font-body leading-relaxed text-lg">
              <p>
                Tôi tiếp cận một công nghệ mới bằng cách bóc tách ngược (reverse engineer) các hệ thống đang chạy, tìm ra nguyên lý gốc của nó, và tái lắp ráp lại theo cách tối ưu hơn.
              </p>
              <p>
                Thay vì dùng nguồn lực khổng lồ, tôi dùng AI làm cánh tay phải, biến mã nguồn mở thành bệ phóng. Tập trung tài nguyên não bộ để kiến tạo giá trị cực đại với chi phí vận hành cận không ($0 Budget Philosophy).
              </p>
            </div>
          </motion.div>

          {/* Right Column: Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="liquid-glass p-8 rounded-2xl border border-white/5 hover:bg-white/5 transition-colors duration-300"
              >
                {skill.icon}
                <h3 className="text-xl font-medium text-foreground mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
