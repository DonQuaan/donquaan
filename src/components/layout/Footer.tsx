import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="relative py-20 px-6 bg-background z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex flex-col items-center md:items-start">
          <div className="text-3xl tracking-tight text-foreground font-display mb-4">
            DonQuaan<span className="text-primary text-xl">.</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm text-center md:text-left">
            Tối ưu hóa nguồn lực. Tự động hóa quy trình. Kiến tạo sự khác biệt.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/DonQuaan" target="_blank" rel="noopener noreferrer" aria-label="Visit DonQuaan's GitHub profile" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-foreground hover:text-primary transition-all hover:-translate-y-1">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/donquaan/" target="_blank" rel="noopener noreferrer" aria-label="Visit DonQuaan's LinkedIn profile" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-foreground hover:text-primary transition-all hover:-translate-y-1">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:donquaan.x@gmail.com" aria-label="Send an email to DonQuaan" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-foreground hover:text-primary transition-all hover:-translate-y-1">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} DonQuaan. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
