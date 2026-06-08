import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, X } from 'lucide-react';
import { useMusic } from '../../contexts/MusicContext';

export function MusicPlayer() {
  const { 
    tracks, currentTrackIndex, isPlaying, volume, 
    isPlayerOpen, progress, duration, currentTime,
    togglePlay, nextTrack, prevTrack, setVolume, togglePlayer, seek 
  } = useMusic();

  const track = tracks[currentTrackIndex];

  // Format time (e.g., 65 -> "1:05")
  const formatTime = (timeInSeconds: number) => {
    if (!timeInSeconds || isNaN(timeInSeconds)) return "0:00";
    const m = Math.floor(timeInSeconds / 60);
    const s = Math.floor(timeInSeconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseFloat(e.target.value);
    seek(newProgress * duration);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <AnimatePresence>
      {isPlayerOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 w-80 rounded-2xl liquid-glass border border-white/10 p-5 overflow-hidden backdrop-blur-2xl bg-black/40 shadow-2xl"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-medium text-white/50 tracking-widest uppercase font-display">Now Playing</span>
            <button 
              onClick={togglePlayer}
              className="text-white/50 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Cover & Info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border border-white/10 bg-black/50 flex items-center justify-center">
              {/* Spinning Vinyl Effect */}
              <motion.div 
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-full h-full rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #111, #333, #111, #333, #111)',
                  boxShadow: 'inset 0 0 10px rgba(0,0,0,0.8)'
                }}
              />
              {/* Vinyl center label */}
              <div className="absolute w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-black" />
              </div>
            </div>
            <div className="overflow-hidden">
              <motion.h3 
                key={track.title}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-white font-medium text-lg truncate font-display"
              >
                {track.title}
              </motion.h3>
              <p className="text-white/50 text-sm truncate">{track.artist}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="relative w-full h-1 bg-white/10 rounded-full mb-2 cursor-pointer group">
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.001" 
                value={progress || 0}
                onChange={handleProgressChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <motion.div 
                className="absolute left-0 top-0 bottom-0 bg-primary rounded-full"
                style={{ width: `${(progress || 0) * 100}%` }}
                layout
              />
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ left: `calc(${(progress || 0) * 100}% - 6px)` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-white/40 font-mono">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            {/* Volume Control */}
            <div className="flex items-center gap-2 group w-1/4">
              <button onClick={() => setVolume(volume === 0 ? 0.5 : 0)} className="text-white/50 hover:text-white transition-colors">
                {volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
              <div className="relative w-full h-1 bg-white/10 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.01" 
                  value={volume}
                  onChange={handleVolumeChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div 
                  className="absolute left-0 top-0 bottom-0 bg-white"
                  style={{ width: `${volume * 100}%` }}
                />
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center gap-4">
              <button 
                onClick={prevTrack}
                className="text-white/70 hover:text-white transition-colors"
              >
                <SkipBack size={20} />
              </button>
              <button 
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform"
              >
                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
              </button>
              <button 
                onClick={nextTrack}
                className="text-white/70 hover:text-white transition-colors"
              >
                <SkipForward size={20} />
              </button>
            </div>
            
            <div className="w-1/4" /> {/* Spacer for balance */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
