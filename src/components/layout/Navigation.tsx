import { motion } from 'framer-motion';
import logoSvg from '/logo.svg?url';
import { generateMailtoLink } from '../../utils/mail';
import { Volume2, VolumeX, Disc } from 'lucide-react';
import { useState, useEffect } from 'react';
import { soundManager } from '../../utils/sound';
import { Magnetic } from '../ui/Magnetic';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMusic } from '../../contexts/MusicContext';

export function Navigation() {
  const [isMuted, setIsMuted] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { isPlaying, togglePlayer } = useMusic();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    soundManager.playHover();
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setIsMuted(soundManager.getMutedState());
  }, []);

  const toggleSound = () => {
    const muted = soundManager.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      soundManager.playClick();
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-6 w-full pointer-events-none grid grid-cols-2 lg:grid-cols-3 items-center gap-4">
      {/* Left side: Logo */}
      <motion.a 
        onClick={(e) => {
          e.preventDefault();
          if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        href="#"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 cursor-pointer pointer-events-auto justify-self-start"
      >
        <img src={logoSvg} alt="DonQuaan Logo" className="w-6 h-6 brightness-0 invert" />
        <span className="text-white font-semibold text-xl tracking-tight font-display">DonQuaan.</span>
      </motion.a>

      {/* Center: Links Pill */}
      <div className="hidden lg:flex justify-self-center">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-8 liquid-glass rounded-full px-8 py-3 pointer-events-auto border border-white/10"
        >
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} onMouseEnter={() => soundManager.playHover()} className="text-sm font-medium text-white/70 hover:text-white transition-colors">About</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} onMouseEnter={() => soundManager.playHover()} className="text-sm font-medium text-white/70 hover:text-white transition-colors">Services</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} onMouseEnter={() => soundManager.playHover()} className="text-sm font-medium text-white/70 hover:text-white transition-colors">Projects</a>
        </motion.nav>
      </div>

      {/* Right side: Connect Button & Sound */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex items-center gap-4 xl:gap-6 justify-self-end"
      >
        <button 
          onClick={togglePlayer}
          className="text-white/70 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 shrink-0"
          aria-label="Toggle music player"
        >
          <Disc size={18} style={{ animation: isPlaying ? 'spin 4s linear infinite' : 'none' }} />
        </button>
        <button 
          onClick={toggleSound}
          className="text-white/70 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 shrink-0"
          aria-label="Toggle sound"
        >
          {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </button>
        <a 
          href={generateMailtoLink()}
          onMouseEnter={() => soundManager.playHover()}
          className="hidden md:block text-sm font-medium text-white/70 hover:text-white transition-colors shrink-0"
        >
          Connect
        </a>
        <Magnetic>
          <a 
            href={generateMailtoLink()}
            onMouseEnter={() => soundManager.playHover()}
            className="btn-premium bg-white text-black rounded-full px-6 py-2.5 text-sm font-medium hover:scale-105 transition-transform hidden sm:block shrink-0"
          >
            Initiate Collaboration
          </a>
        </Magnetic>
      </motion.div>
    </div>
  );
}
