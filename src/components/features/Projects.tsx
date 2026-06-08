import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useRef } from 'react';

const projects = [
  {
    title: "Promethium Modpack",
    category: "Minecraft Ecosystem",
    challenge: "Hệ thống bị sụp đổ do xung đột logic chéo giữa hàng trăm bản mod, dẫn đến rò rỉ bộ nhớ nghiêm trọng.",
    solution: "Bóc tách từng mã lỗi, tái cấu trúc toàn bộ tệp config và thiết lập lại điểm cân bằng tài nguyên.",
    result: "Đạt mốc 1,000+ lượt tải tự nhiên trên CurseForge, giải phóng 30% hiệu năng cho phần cứng tầm trung.",
    year: "2023",
    link: "https://www.curseforge.com/minecraft/modpacks/promethium",
    github: "#",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Yangdawn's Hub",
    category: "Game Dev & Modding",
    challenge: "Cộng đồng thiếu hụt các bộ modpack chất lượng cao được tối ưu hóa sẵn cho mọi cấu hình máy tính.",
    solution: "Nghiên cứu, sàng lọc và đóng gói hàng loạt hệ thống modpack dựa trên nhu cầu thực chiến của cộng đồng.",
    result: "Xây dựng định vị thương hiệu cá nhân uy tín, loại bỏ hoàn toàn rào cản kỹ thuật cho hàng ngàn người chơi mới.",
    year: "2022",
    link: "https://www.curseforge.com/members/yangdawn/projects",
    github: "#",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop"
  }
];

export function Projects() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative py-32 px-6 bg-background z-20 border-t border-white/5 overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 opacity-20 pointer-events-none" />
      
      {/* Floating Image removed as per user request */}
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-display text-foreground mb-6">Masterpiece Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Không chỉ là sản phẩm, đây là các case study thực chứng cho tư duy giải quyết vấn đề bằng công nghệ lõi.
          </p>
        </motion.div>

        <div className="relative space-y-12 md:space-y-32">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[20px] md:left-[33.333333%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative flex flex-col md:flex-row items-start"
            >
              {/* Timeline Node */}
              <div className="hidden md:block absolute left-[33.333333%] top-12 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 shadow-[0_0_15px_rgba(236,72,153,0.5)] group-hover:scale-150 group-hover:bg-primary transition-all duration-500" />

              {/* Title Section */}
              <div className="w-full md:w-1/3 flex-shrink-0 text-left md:text-right relative pt-2 md:pr-12 lg:pr-16 mb-8 md:mb-0 pl-12 md:pl-0">
                {/* Mobile timeline node */}
                <div className="md:hidden absolute left-[20px] top-4 -translate-x-1/2 w-3 h-3 rounded-full bg-background border-2 border-primary z-10 shadow-[0_0_15px_rgba(236,72,153,0.5)]" />
                {/* Mobile timeline line */}
                <div className="md:hidden absolute left-[20px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent -z-10" />

                <span className="text-sm font-medium tracking-widest text-primary uppercase mb-4 block">
                  {project.year} — {project.category}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4 group-hover:text-primary transition-colors duration-500">
                  {project.title}
                </h3>
                <div className="flex gap-4 md:justify-end mt-8 relative z-20">
                  <a href={project.github} aria-label={`View ${project.title} source code on GitHub`} className="p-3 rounded-full border border-white/10 hover:border-primary hover:bg-primary/10 text-foreground transition-all duration-300">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.link} aria-label={`View ${project.title} live project`} className="p-3 rounded-full border border-white/10 hover:border-primary hover:bg-primary/10 text-foreground transition-all duration-300">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              {/* Case Study Details */}
              <div className="w-full md:w-2/3 md:pl-12 lg:pl-16 relative z-20">
                <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/5 group-hover:border-white/10 transition-colors duration-500">
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">01. Cốt lõi vấn đề (Challenge)</h4>
                      <p className="text-foreground/90 leading-relaxed text-sm md:text-base">
                        {project.challenge}
                      </p>
                    </div>
                    <div className="w-full h-[1px] bg-white/5" />
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">02. Giải pháp kỹ thuật (Solution)</h4>
                      <p className="text-foreground/90 leading-relaxed text-sm md:text-base">
                        {project.solution}
                      </p>
                    </div>
                    <div className="w-full h-[1px] bg-white/5" />
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] text-primary mb-3">03. Kết quả đạt được (Result)</h4>
                      <p className="text-foreground/90 leading-relaxed text-sm md:text-base">
                        {project.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
