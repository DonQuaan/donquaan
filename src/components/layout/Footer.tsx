import { Mail } from 'lucide-react';
import {
  SiFacebook, SiTwitch, SiX, SiSpotify,
  SiYoutube, SiRoblox, SiCurseforge, SiGithub
} from 'react-icons/si';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/NguyenDonQuaan', Icon: SiFacebook },
  { label: 'Twitch', href: 'https://www.twitch.tv/donquaan_tkz', Icon: SiTwitch },
  { label: 'X (Twitter)', href: 'https://x.com/DonquaanN74404', Icon: SiX },
  { label: 'Spotify', href: 'https://open.spotify.com/user/31xr7kgwysteud3urdhzrv5ixc2q?si=504e28691ba349ee', Icon: SiSpotify },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCvqlcKf1nm9i2LeH9hFQQYA', Icon: SiYoutube },
  { label: 'Roblox', href: 'https://roblox.com/users/3947663158/profile', Icon: SiRoblox },
  { label: 'CurseForge', href: 'https://www.curseforge.com/members/yangdawn', Icon: SiCurseforge },
  { label: 'GitHub', href: 'https://github.com/DonQuaan', Icon: SiGithub }
];

export function Footer() {
  const { language } = useLanguage();
  return (
    <footer id="contact" className="relative py-20 px-6 bg-background z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        
        {/* Left Side: Contact Info */}
        <div className="flex flex-col items-center lg:items-start flex-1">
          <div className="text-3xl tracking-tight text-foreground font-display mb-4">
            DonQuaan<span className="text-primary text-xl">.</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm text-center lg:text-left mb-6">
            {language === 'vi'
              ? 'Tối ưu hóa nguồn lực. Tự động hóa quy trình. Kiến tạo sự khác biệt.'
              : 'Optimize resources. Automate workflows. Make the difference.'}
          </p>
          
          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            <div className="flex flex-col gap-2">
              <a href="mailto:contact.donquaan@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2 justify-center lg:justify-start">
                <Mail className="w-4 h-4" /> contact.donquaan@gmail.com {language === 'vi' ? '(Hợp tác)' : '(Business)'}
              </a>
              <a href="mailto:donquaan.x@gmail.com" className="hover:text-primary transition-colors flex items-center gap-2 justify-center lg:justify-start">
                <Mail className="w-4 h-4" /> donquaan.x@gmail.com {language === 'vi' ? '(Phụ)' : '(Secondary)'}
              </a>
            </div>

            {/* Zalo Contact Block */}
            <div className="flex items-center gap-4 mt-2 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit mx-auto lg:mx-0 hover:bg-white/10 transition-colors">
              <div className="bg-white p-1.5 rounded-xl shrink-0">
                <img src="https://i.postimg.cc/rsCCQQRn/qr-zalo.jpg" alt="Zalo QR Code" loading="lazy" decoding="async" className="w-16 h-16 object-contain rounded-lg" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-primary mb-1 font-bold">{language === 'vi' ? 'Liên Hệ Zalo' : 'Contact via Zalo'}</span>
                <span className="font-medium text-white tracking-wide">(+84) 0931 902 475</span>
                <span className="text-xs text-white/50 mt-0.5">{language === 'vi' ? 'Quét mã hoặc tìm số điện thoại' : 'Scan the QR code or look up the phone number'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Social Grid — uniform monochrome icons */}
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-4 md:gap-6 lg:max-w-md w-full justify-items-center lg:justify-items-end lg:mt-0 mt-8">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3.5 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 text-white transition-all hover:-translate-y-1 flex items-center justify-center"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
      
      {/* Bottom Bar: Legal */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
        <p className="text-center lg:text-left">&copy; {new Date().getFullYear()} DonQuaan. {language === 'vi' ? 'Bản quyền đã được bảo hộ.' : 'All rights reserved.'}</p>
        <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-3">
          <Link to="/privacy-policy" className="hover:text-foreground transition-colors">{language === 'vi' ? 'Chính Sách Bảo Mật' : 'Privacy Policy'}</Link>
          <Link to="/terms-of-service" className="hover:text-foreground transition-colors">{language === 'vi' ? 'Điều Khoản Dịch Vụ' : 'Terms of Service'}</Link>
          <Link to="/cookies-policy" className="hover:text-foreground transition-colors">{language === 'vi' ? 'Chính Sách Cookie' : 'Cookies Policy'}</Link>
          <Link to="/disclaimer" className="hover:text-foreground transition-colors">{language === 'vi' ? 'Miễn Trừ Trách Nhiệm' : 'Disclaimer'}</Link>
        </div>
      </div>
    </footer>
  );
}
