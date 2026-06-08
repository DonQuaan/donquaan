import { useState, useEffect } from 'react';
import { Youtube } from 'lucide-react';

export function LiveSubscriberCount() {
  // Start with a highly specific baseline number (745,420)
  const [subs, setSubs] = useState<number>(745420);

  useEffect(() => {
    // Simulate real-time subscriber growth
    // Adds a random number of subs (0 to 3) every 2 to 8 seconds
    const simulateGrowth = () => {
      setSubs(prev => prev + Math.floor(Math.random() * 3));
      
      const nextUpdateIn = Math.floor(Math.random() * 6000) + 2000;
      setTimeout(simulateGrowth, nextUpdateIn);
    };
    
    const timer = setTimeout(simulateGrowth, 3000);
    return () => clearTimeout(timer);
  }, []);

  const formatSubs = (num: number) => {
    // Format as 745,420
    return new Intl.NumberFormat('en-US').format(num);
  };

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
          {formatSubs(subs)}
        </span>
        <span className="text-white/40 text-[10px] uppercase tracking-widest ml-1 hidden sm:inline-block">Subscribers</span>
      </div>
    </a>
  );
}
