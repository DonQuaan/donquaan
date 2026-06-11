import { motion } from 'framer-motion';
import { Send, Calendar, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState } from 'react';

const CONTACT_EMAIL = 'contact.donquaan@gmail.com';

export function ContactSection() {
  const { t, language } = useLanguage();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim();

    const subject = language === 'vi'
      ? `[Website] Yêu cầu tư vấn từ ${name}`
      : `[Website] Consultation request from ${name}`;
    const body = language === 'vi'
      ? `Họ tên: ${name}\nEmail: ${email}\n\n${message}`
      : `Full name: ${name}\nEmail: ${email}\n\n${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const win = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    if (!win) {
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="relative w-full py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-black to-black opacity-40" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left: Copy & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="text-primary text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-mono block flex items-center gap-2">
              <Calendar size={16} /> {t('contact.subtitle')}
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tight mb-6 leading-tight">
              {t('contact.title')}
            </h2>
            <p className="text-[#A3A3A3] text-lg font-light leading-relaxed mb-12">
              {t('contact.desc')}
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-mono text-white/40 mb-1">Email</p>
                  <a href="mailto:contact.donquaan@gmail.com" className="text-lg font-medium">contact.donquaan@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-mono text-white/40 mb-1">{t('contact.location.label')}</p>
                  <p className="text-lg font-medium">{t('contact.location.value')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <div className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-mono text-white/60 uppercase tracking-wider">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/5 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-mono text-white/60 uppercase tracking-wider">{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/5 transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-mono text-white/60 uppercase tracking-wider">{t('contact.form.message')}</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/5 transition-all resize-none"
                    placeholder="We are looking to implement AI into our workflow..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSuccess}
                  className={`group relative w-full flex items-center justify-center gap-3 py-4 rounded-xl font-medium text-lg transition-all duration-300 overflow-hidden ${
                    isSuccess
                      ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                      : 'bg-white text-black hover:bg-gray-200 hover:scale-[1.02]'
                  }`}
                >
                  {isSuccess ? (
                    t('contact.form.opened')
                  ) : (
                    <>
                      <span>{t('contact.form.submit')}</span>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-opacity duration-300 pointer-events-none" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
