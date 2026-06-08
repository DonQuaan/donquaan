import { Mail, Twitch, Music } from 'lucide-react';
import { RobloxIcon, CurseforgeIcon } from '../ui/icons';
import { Link } from 'react-router-dom';

import facebookIcon from '../../assets/social-icons/facebook.svg?url';
import xIcon from '../../assets/social-icons/x.svg?url';
import youtubeIcon from '../../assets/social-icons/youtube.svg?url';
import githubIcon from '../../assets/social-icons/github.svg?url';

export function Footer() {
  return (
    <footer id="contact" className="relative py-20 px-6 bg-background z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        
        {/* Left Side: Contact Info */}
        <div className="flex flex-col items-center lg:items-start flex-1">
          <div className="text-3xl tracking-tight text-foreground font-display mb-4">
            DonQuaan<span className="text-primary text-xl">.</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm text-center lg:text-left mb-6">
            Tối ưu hóa nguồn lực. Tự động hóa quy trình. Kiến tạo sự khác biệt.
          </p>
          
          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            <div className="flex flex-col gap-2">
              <a href="mailto:contact.donquaan@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2 justify-center lg:justify-start">
                <Mail className="w-4 h-4" /> contact.donquaan@gmail.com (Hợp tác)
              </a>
              <a href="mailto:donquaan.x@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2 justify-center lg:justify-start">
                <Mail className="w-4 h-4" /> donquaan.x@gmail.com (Phụ)
              </a>
            </div>

            {/* Zalo Contact Block */}
            <div className="flex items-center gap-4 mt-2 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit mx-auto lg:mx-0 hover:bg-white/10 transition-colors">
              <div className="bg-white p-1.5 rounded-xl shrink-0">
                <img src="https://i.postimg.cc/rsCCQQRn/qr-zalo.jpg" alt="Zalo QR Code" className="w-16 h-16 object-contain rounded-lg" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-primary mb-1 font-bold">Zalo Contact</span>
                <span className="font-medium text-white tracking-wide">(+84) 0931 902 475</span>
                <span className="text-xs text-white/50 mt-0.5">Scan or search phone number</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Social Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-4 md:gap-6 lg:max-w-md w-full justify-items-center lg:justify-items-end lg:mt-0 mt-8">
          <a href="https://www.facebook.com/NguyenDonQuaan" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-3.5 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-1 flex items-center justify-center">
            <img src={facebookIcon} alt="Facebook" className="w-6 h-6 object-contain" />
          </a>
          <a href="https://www.twitch.tv/donquaan_tkz" target="_blank" rel="noopener noreferrer" aria-label="Twitch" className="p-3.5 w-12 h-12 rounded-full bg-white/5 hover:bg-[#9146FF] text-foreground transition-all hover:-translate-y-1 flex items-center justify-center">
            <Twitch className="w-5 h-5" />
          </a>
          <a href="https://x.com/DonquaanN74404" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="p-3.5 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-1 flex items-center justify-center">
            <img src={xIcon} alt="X (Twitter)" className="w-5 h-5 object-contain" />
          </a>
          <a href="https://open.spotify.com/user/31xr7kgwysteud3urdhzrv5ixc2q?si=504e28691ba349ee" target="_blank" rel="noopener noreferrer" aria-label="Spotify" className="p-3.5 w-12 h-12 rounded-full bg-white/5 hover:bg-[#1DB954] text-foreground transition-all hover:-translate-y-1 flex items-center justify-center">
            <Music className="w-5 h-5" />
          </a>
          <a href="https://www.youtube.com/channel/UCvqlcKf1nm9i2LeH9hFQQYA" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="p-3.5 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-1 flex items-center justify-center">
            <img src={youtubeIcon} alt="YouTube" className="w-6 h-6 object-contain" />
          </a>
          <a href="https://roblox.com/users/3947663158/profile" target="_blank" rel="noopener noreferrer" aria-label="Roblox" className="p-3.5 w-12 h-12 rounded-full bg-white/5 hover:bg-white/20 text-foreground transition-all hover:-translate-y-1 flex items-center justify-center">
            <RobloxIcon className="w-5 h-5" />
          </a>
          <a href="https://www.curseforge.com/members/yangdawn" target="_blank" rel="noopener noreferrer" aria-label="CurseForge" className="p-3.5 w-12 h-12 rounded-full bg-white/5 hover:bg-[#F16436] text-foreground transition-all hover:-translate-y-1 flex items-center justify-center">
            <CurseforgeIcon className="w-5 h-5" />
          </a>
          <a href="https://github.com/DonQuaan" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-3.5 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-1 flex items-center justify-center">
            <img src={githubIcon} alt="GitHub" className="w-6 h-6 object-contain" />
          </a>
        </div>
      </div>
      
      {/* Bottom Bar: Legal */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <p className="text-center lg:text-left">&copy; {new Date().getFullYear()} DonQuaan. All rights reserved.</p>
        <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-3">
          <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
          <Link to="/cookies-policy" className="hover:text-foreground transition-colors">Cookies Policy</Link>
          <Link to="/disclaimer" className="hover:text-foreground transition-colors">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
}
