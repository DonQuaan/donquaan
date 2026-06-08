import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export function ContactTerminal() {
  const [input, setInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setSubmitted(true);
      // In a real app, send this to an API
      setTimeout(() => {
        setInput('');
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-32 px-6 bg-background relative z-20 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="liquid-glass rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="mx-auto text-xs text-muted-foreground uppercase tracking-widest font-mono flex items-center gap-2">
              <Terminal className="w-3 h-3" /> system.exe
            </div>
          </div>
          
          <div className="mt-8 font-mono">
            <h2 className="text-2xl md:text-4xl font-display text-foreground mb-6">Initiate Collaboration</h2>
            <p className="text-muted-foreground mb-8 text-sm md:text-base">
              {">"} Cảnh báo: Hệ thống chỉ tiếp nhận những bài toán khó và các ý tưởng đột phá. <br/>
              {">"} Hãy nhập dự án hoặc vấn đề của bạn vào bên dưới:
            </p>

            <form onSubmit={handleSubmit} className="relative">
              <div className="flex items-start">
                <span className="text-primary mr-4 mt-1">{">"}</span>
                <textarea 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  aria-label="Nhập thông số dự án hoặc mô tả vấn đề của bạn"
                  className="w-full bg-transparent border-none outline-none resize-none text-foreground placeholder:text-white/20 h-32 focus:ring-0"
                  placeholder="Nhập thông số dự án tại đây..."
                  spellCheck="false"
                  disabled={submitted}
                />
              </div>
              <div className="flex justify-end mt-4">
                <button 
                  type="submit"
                  disabled={submitted || !input.trim()}
                  className="px-6 py-2 bg-primary/20 text-primary hover:bg-primary/40 transition-colors rounded border border-primary/30 uppercase tracking-widest text-xs disabled:opacity-50"
                >
                  {submitted ? 'Đang gửi...' : 'Thực thi lệnh'}
                </button>
              </div>
            </form>
            
            <div aria-live="polite" aria-atomic="true">
              {submitted && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="mt-4 text-green-400 text-sm"
                  role="status"
                >
                  [System] Dữ liệu đã được mã hóa và gửi thành công tới DonQuaan. Phản hồi sẽ diễn ra trong 24h.
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
