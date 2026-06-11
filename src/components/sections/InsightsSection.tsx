import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const articles = [
  {
    id: 1,
    title: "Tương lai của AI tạo sinh trong doanh nghiệp 2026",
    category: "Artificial Intelligence",
    date: "10 Jun 2026",
    readTime: "5 min read",
    excerpt: "Làm thế nào các mô hình ngôn ngữ lớn (LLMs) đang thay đổi hoàn toàn cách doanh nghiệp SME tiếp cận việc tự động hóa chăm sóc khách hàng và bán hàng.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Tối ưu hóa quy trình Data Pipeline với Modern Stack",
    category: "Data Engineering",
    date: "28 May 2026",
    readTime: "8 min read",
    excerpt: "Một góc nhìn thực tế về việc chuyển đổi từ legacy data warehouse sang modern data stack, những khó khăn thường gặp và cách khắc phục.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Giải mã Machine Learning Explainability (XAI)",
    category: "Machine Learning",
    date: "15 Apr 2026",
    readTime: "6 min read",
    excerpt: "Tại sao các mô hình AI không còn là một hộp đen, và làm thế nào để ứng dụng SHAP và LIME trong các quyết định tài chính rủi ro cao.",
    image: "https://images.unsplash.com/photo-1620825937374-87fc1d6aaf63?q=80&w=1000&auto=format&fit=crop"
  }
];

export function InsightsSection() {
  const { t } = useLanguage();

  return (
    <section id="insights" className="relative w-full py-32 bg-black overflow-hidden border-t border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-black to-black opacity-60" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <span className="text-primary text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-mono block flex items-center gap-2 justify-center md:justify-start">
              <BookOpen size={16} /> {t('insights.subtitle')}
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tight mb-6">
              {t('insights.title')}
            </h2>
            <p className="text-[#A3A3A3] text-lg font-light leading-relaxed">
              {t('insights.desc')}
            </p>
          </div>
          
          <div className="hidden md:block pb-2">
            <a href="#" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-mono uppercase tracking-wider text-sm transition-colors group">
              View All Insights 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.a
              href="#"
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative block rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-colors"
            >
              {/* Image Container with Hover Blur effect */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-100 filter blur-sm group-hover:blur-0 transition-all duration-700 ease-out"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-mono text-white/90 border border-white/10 uppercase tracking-wider">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                <div className="flex items-center gap-4 text-xs font-mono text-[#A3A3A3] mb-4">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-display font-medium text-white mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-white/60 font-light line-clamp-3 mb-6 text-sm md:text-base">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                  Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-mono uppercase tracking-wider text-sm transition-colors group">
            View All Insights 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
