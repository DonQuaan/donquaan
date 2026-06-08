import { useState, useEffect } from 'react';
import { Youtube } from 'lucide-react';

export function LiveSubscriberCount() {
  const [subs, setSubs] = useState<string>("Loading...");

  useEffect(() => {
    async function fetchSubs() {
      try {
        const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://youtube.com/@sangtraan')}`);
        const data = await res.json();
        const html = data.contents;
        
        // Try to match subscriber count from YouTube's initialData JSON embedded in HTML
        const match = html.match(/"subscriberCountText":\{"accessibility":\{"accessibilityData":\{"label":"([^"]+)"\}\}/) 
                      || html.match(/"subscriberCountText":\{"simpleText":"([^"]+)"\}/);
                      
        if (match && match[1]) {
          // Extracted text might be "1.23M subscribers" or Vietnamese "1,23 Tr người đăng ký"
          const fullText = match[1];
          const numberPart = fullText.split(' ')[0]; 
          setSubs(numberPart);
        } else {
          setSubs("100K+"); // Fallback if YouTube DOM changes
        }
      } catch (e) {
        setSubs("100K+");
      }
    }
    
    fetchSubs();
    
    const interval = setInterval(fetchSubs, 60000); // refresh every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <a 
      href="https://youtube.com/@sangtraan" 
      target="_blank" 
      rel="noreferrer"
      className="flex items-center gap-3 bg-[#0a0a0a] border border-white/10 rounded-full px-4 py-2 w-fit mt-3 shadow-[0_0_15px_rgba(255,0,0,0.15)] hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all duration-300 group cursor-pointer"
    >
      <Youtube className="text-red-600 group-hover:scale-110 transition-transform" size={18} />
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
        </span>
        <span className="font-mono text-sm font-bold text-white tracking-wider">
          {subs}
        </span>
        <span className="text-white/40 text-[10px] uppercase tracking-widest ml-1 hidden sm:inline-block">Subscribers</span>
      </div>
    </a>
  );
}
