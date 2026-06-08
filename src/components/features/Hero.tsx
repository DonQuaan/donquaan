import { useEffect, useRef } from 'react';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeAnimationRef = useRef<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isFadingOut = false;

    const animateOpacity = (start: number, end: number, duration: number, callback?: () => void) => {
      const startTime = performance.now();
      
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Linear interpolation
        video.style.opacity = (start + (end - start) * progress).toString();

        if (progress < 1) {
          fadeAnimationRef.current = requestAnimationFrame(animate);
        } else if (callback) {
          callback();
        }
      };
      
      if (fadeAnimationRef.current) cancelAnimationFrame(fadeAnimationRef.current);
      fadeAnimationRef.current = requestAnimationFrame(animate);
    };

    const handleCanPlay = () => {
      video.play().catch(e => console.log("Autoplay prevented:", e));
      animateOpacity(0, 1, 500);
    };

    const handleTimeUpdate = () => {
      // If within last 0.55s and not already fading out
      if (video.duration - video.currentTime <= 0.55 && !isFadingOut) {
        isFadingOut = true;
        animateOpacity(1, 0, 500);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(e => console.log("Autoplay prevented:", e));
        isFadingOut = false;
        animateOpacity(0, 1, 500);
      }, 100);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      if (fadeAnimationRef.current) cancelAnimationFrame(fadeAnimationRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col pt-32">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0"
        muted
        playsInline
        preload="auto"
        style={{ opacity: 0 }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
      />

      {/* Video Overlay Gradient (Optional to ensure text readability) */}
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[10%]">
        
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight leading-[1] font-display mb-8">
          Phá vỡ lối mòn rập<br className="hidden md:block" />
          khuôn. Kiến tạo <em className="italic text-white/80">sự khác<br className="hidden md:block" />
          biệt bền vững.</em>
        </h1>

        <p className="text-white/80 text-base md:text-lg leading-relaxed px-4 max-w-2xl mb-12">
          Tôi không vận hành dựa trên các quy trình có sẵn. Tôi giải mã vấn đề từ gốc rễ (First Principles), ứng dụng AI và công nghệ lõi để thiết kế hệ thống với hiệu suất tối đa.
        </p>

        <a href="#projects" className="liquid-glass rounded-full px-10 py-4 text-white text-sm font-medium hover:bg-white/5 transition-all">
          Let's decode complex problems
        </a>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 hidden md:flex">
          <span className="text-xs uppercase tracking-widest text-white/50">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </div>

      {/* Social Footer */}
      <div className="relative z-10 flex justify-center gap-4 pb-12 mt-auto">
        <a href="#" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </a>
        <a href="#" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href="#" className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
        </a>
      </div>
    </section>
  );
}
