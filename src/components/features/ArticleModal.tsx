import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Article } from '../../data/articles';

interface ArticleModalProps {
  article: Article | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ArticleModal({ article, isOpen, onClose }: ArticleModalProps) {
  const { language } = useLanguage();

  if (!article) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-6"
          >
            <div className="bg-[#0a0a0a] border border-white/10 w-full max-w-4xl h-full max-h-[90vh] rounded-2xl md:rounded-3xl overflow-hidden flex flex-col relative shadow-2xl">
              {/* Header Image */}
              <div className="relative h-64 md:h-80 shrink-0">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/50 to-transparent" />
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors z-10"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content Scroll Area */}
              <div className="flex-1 overflow-y-auto p-6 md:p-12 custom-scrollbar">
                <div className="max-w-3xl mx-auto">
                  <div className="flex items-center gap-4 text-xs font-mono text-white/50 mb-6 uppercase tracking-wider">
                    <span className="flex items-center gap-2">
                      <Calendar size={14} /> {article.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock size={14} /> {article.readTime}
                    </span>
                  </div>
                  
                  <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
                    {article.title}
                  </h1>

                  <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-p:text-[#A3A3A3] prose-p:leading-relaxed prose-li:text-[#A3A3A3] prose-strong:text-white">
                    <ReactMarkdown>
                      {article.content[language]}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
