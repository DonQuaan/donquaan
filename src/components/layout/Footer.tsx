import { Github, Mail, Facebook, Twitch, Twitter, Youtube, Music, Gamepad2, Box } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="relative py-20 px-6 bg-background z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="flex flex-col items-center md:items-start flex-1">
          <div className="text-3xl tracking-tight text-foreground font-display mb-4">
            DonQuaan<span className="text-primary text-xl">.</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm text-center md:text-left mb-6">
            Tối ưu hóa nguồn lực. Tự động hóa quy trình. Kiến tạo sự khác biệt.
          </p>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="mailto:contact.donquaan@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" /> contact.donquaan@gmail.com (Hợp tác)
            </a>
            <a href="mailto:donquaan.x@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" /> donquaan.x@gmail.com (Phụ)
            </a>
          </div>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 md:gap-6 flex-1 max-w-xl">
          <a href="https://www.facebook.com/NguyenDonQuaan" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-3 rounded-full bg-white/5 hover:bg-[#1877F2] text-foreground transition-all hover:-translate-y-1 flex items-center justify-center">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://www.twitch.tv/donquaan_tkz" target="_blank" rel="noopener noreferrer" aria-label="Twitch" className="p-3 rounded-full bg-white/5 hover:bg-[#9146FF] text-foreground transition-all hover:-translate-y-1 flex items-center justify-center">
            <Twitch className="w-5 h-5" />
          </a>
          <a href="https://x.com/DonquaanN74404" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="p-3 rounded-full bg-white/5 hover:bg-white/20 text-foreground transition-all hover:-translate-y-1 flex items-center justify-center">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://open.spotify.com/user/31xr7kgwysteud3urdhzrv5ixc2q?si=504e28691ba349ee" target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="p-3 rounded-full bg-white/5 hover:bg-[#1DB954] text-foreground transition-all hover:-translate-y-1 flex items-center justify-center">
            <Music className="w-5 h-5" />
          </a>
          <a href="https://www.youtube.com/channel/UCvqlcKf1nm9i2LeH9hFQQYA" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-3 rounded-full bg-white/5 hover:bg-[#FF0000] text-foreground transition-all hover:-translate-y-1 flex items-center justify-center">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="https://roblox.com/users/3947663158/profile" target="_blank" rel="noopener noreferrer" aria-label="Roblox" className="p-3 rounded-full bg-white/5 hover:bg-white/20 text-foreground transition-all hover:-translate-y-1 flex items-center justify-center">
            <Gamepad2 className="w-5 h-5" />
          </a>
          <a href="https://www.curseforge.com/members/yangdawn" target="_blank" rel="noopener noreferrer" aria-label="CurseForge" className="p-3 rounded-full bg-white/5 hover:bg-[#F16436] text-foreground transition-all hover:-translate-y-1 flex items-center justify-center">
            <Box className="w-5 h-5" />
          </a>
          <a href="https://zaloapp.com/qr/p/1hpfdhwwzk979" target="_blank" rel="noopener noreferrer" aria-label="Zalo" className="p-3 rounded-full bg-white/5 hover:bg-[#0068FF] text-foreground transition-all hover:-translate-y-1 flex items-center justify-center font-bold text-xs">
            Zalo
          </a>
          <a href="https://github.com/DonQuaan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3 rounded-full bg-white/5 hover:bg-white/20 text-foreground transition-all hover:-translate-y-1 flex items-center justify-center">
            <Github className="w-5 h-5" />
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
