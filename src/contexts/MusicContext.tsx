import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';

export interface Track {
  title: string;
  artist: string;
  url: string;
}

const TRACKS: Track[] = [
  { title: 'GLOW', artist: 'Cinematic Score', url: `${import.meta.env.BASE_URL}msc/GLOW.mp3` },
  { title: 'TILT', artist: 'Cinematic Score', url: `${import.meta.env.BASE_URL}msc/TILT.mp3` }
];

interface MusicContextType {
  tracks: Track[];
  currentTrackIndex: number;
  isPlaying: boolean;
  volume: number; // 0 to 1, User slider volume
  isPlayerOpen: boolean;
  progress: number; // 0 to 1
  duration: number; // in seconds
  currentTime: number; // in seconds
  togglePlay: () => void;
  nextTrack: () => void;
  prevTrack: () => void;
  setVolume: (val: number) => void;
  togglePlayer: () => void;
  seek: (time: number) => void;
  hasStarted: boolean;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

const FADE_DURATION = 2000; // 2 seconds crossfade
const DEFAULT_MAX_VOLUME = 0.5; // Cinematic, not too loud

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(DEFAULT_MAX_VOLUME);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  // We use two audio elements to crossfade
  const audioA = useRef<HTMLAudioElement | null>(null);
  const audioB = useRef<HTMLAudioElement | null>(null);
  const activeAudioRef = useRef<'A' | 'B'>('A');
  const fadeIntervalRef = useRef<number | null>(null);
  
  // Animation frame for progress
  const rAFRef = useRef<number>(0);

  useEffect(() => {
    // Initialize audio elements
    audioA.current = new Audio();
    audioB.current = new Audio();
    
    // Pre-load first track
    audioA.current.src = TRACKS[0].url;
    audioA.current.load();
    audioA.current.volume = 0;

    const handleEnded = () => {
      nextTrackRef.current();
    };

    audioA.current.addEventListener('ended', handleEnded);
    audioB.current.addEventListener('ended', handleEnded);

    return () => {
      audioA.current?.removeEventListener('ended', handleEnded);
      audioB.current?.removeEventListener('ended', handleEnded);
      cancelAnimationFrame(rAFRef.current);
    };
  }, []);

  // Update progress bar
  useEffect(() => {
    const updateProgress = () => {
      const activeElement = activeAudioRef.current === 'A' ? audioA.current : audioB.current;
      if (activeElement && !isNaN(activeElement.duration)) {
        setCurrentTime(activeElement.currentTime);
        setDuration(activeElement.duration);
        setProgress(activeElement.currentTime / activeElement.duration);
      }
      if (isPlaying) {
        rAFRef.current = requestAnimationFrame(updateProgress);
      }
    };
    
    if (isPlaying) {
      rAFRef.current = requestAnimationFrame(updateProgress);
    } else {
      cancelAnimationFrame(rAFRef.current);
    }
    
    return () => cancelAnimationFrame(rAFRef.current);
  }, [isPlaying]);

  const crossfadeTo = useCallback((newUrl: string, targetVolume: number, isInitialStart = false) => {
    const prevActive = activeAudioRef.current === 'A' ? audioA.current : audioB.current;
    const newActive = activeAudioRef.current === 'A' ? audioB.current : audioA.current;
    
    if (!prevActive || !newActive) return;

    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);

    // Prepare new audio
    newActive.src = newUrl;
    newActive.currentTime = 0;
    newActive.volume = 0;
    
    const playPromise = newActive.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.warn("Autoplay prevented or interrupted:", error);
        setIsPlaying(false);
      });
    }

    activeAudioRef.current = activeAudioRef.current === 'A' ? 'B' : 'A';
    
    if (!isInitialStart) {
      // Crossfade logic
      const steps = 40;
      const stepTime = FADE_DURATION / steps;
      const prevVolumeStart = prevActive.volume;
      let currentStep = 0;

      fadeIntervalRef.current = window.setInterval(() => {
        currentStep++;
        const ratio = currentStep / steps;
        
        // Exponential-like curve for smoother fade
        const easeOut = Math.sin((ratio * Math.PI) / 2);
        const easeIn = 1 - Math.cos((ratio * Math.PI) / 2);

        if (prevActive) prevActive.volume = Math.max(0, prevVolumeStart * (1 - easeIn));
        if (newActive) newActive.volume = Math.min(targetVolume, targetVolume * easeOut);

        if (currentStep >= steps) {
          if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
          if (prevActive) {
            prevActive.pause();
            prevActive.volume = 0;
          }
          if (newActive) newActive.volume = targetVolume;
        }
      }, stepTime);
    } else {
      // Just fade in
      const steps = 40;
      const stepTime = FADE_DURATION / steps;
      let currentStep = 0;

      fadeIntervalRef.current = window.setInterval(() => {
        currentStep++;
        const ratio = currentStep / steps;
        const easeOut = Math.sin((ratio * Math.PI) / 2);
        
        if (newActive) newActive.volume = Math.min(targetVolume, targetVolume * easeOut);

        if (currentStep >= steps) {
          if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
          if (newActive) newActive.volume = targetVolume;
        }
      }, stepTime);
    }
  }, []);

  const playTrack = useCallback((index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
    crossfadeTo(TRACKS[index].url, volume);
  }, [crossfadeTo, volume]);

  const nextTrackRef = useRef(() => {});
  useEffect(() => {
    nextTrackRef.current = () => {
      const nextIndex = (currentTrackIndex + 1) % TRACKS.length;
      playTrack(nextIndex);
    };
  }, [currentTrackIndex, playTrack]);

  const nextTrack = useCallback(() => {
    nextTrackRef.current();
  }, []);

  const prevTrack = useCallback(() => {
    const prevIndex = (currentTrackIndex - 1 + TRACKS.length) % TRACKS.length;
    playTrack(prevIndex);
  }, [currentTrackIndex, playTrack]);

  const togglePlay = useCallback(() => {
    const activeElement = activeAudioRef.current === 'A' ? audioA.current : audioB.current;
    if (!activeElement) return;

    if (isPlaying) {
      // Fade out to pause
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      const steps = 20;
      const stepTime = 1000 / steps;
      const startVol = activeElement.volume;
      let currentStep = 0;
      
      fadeIntervalRef.current = window.setInterval(() => {
        currentStep++;
        activeElement.volume = Math.max(0, startVol * (1 - (currentStep/steps)));
        if (currentStep >= steps) {
          clearInterval(fadeIntervalRef.current!);
          activeElement.pause();
          setIsPlaying(false);
        }
      }, stepTime);
    } else {
      // Fade in to play
      setIsPlaying(true);
      activeElement.play().catch(e => {
        console.warn("Play interrupted", e);
        setIsPlaying(false);
      });
      if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
      const steps = 20;
      const stepTime = 1000 / steps;
      let currentStep = 0;
      
      fadeIntervalRef.current = window.setInterval(() => {
        currentStep++;
        activeElement.volume = Math.min(volume, volume * (currentStep/steps));
        if (currentStep >= steps) {
          clearInterval(fadeIntervalRef.current!);
          activeElement.volume = volume;
        }
      }, stepTime);
    }
  }, [isPlaying, volume]);

  // Adjust volume dynamically
  const setVolume = useCallback((val: number) => {
    setVolumeState(val);
    const activeElement = activeAudioRef.current === 'A' ? audioA.current : audioB.current;
    if (activeElement && isPlaying) {
      activeElement.volume = val;
    }
  }, [isPlaying]);

  const togglePlayer = useCallback(() => {
    setIsPlayerOpen(prev => !prev);
  }, []);

  const seek = useCallback((time: number) => {
    const activeElement = activeAudioRef.current === 'A' ? audioA.current : audioB.current;
    if (activeElement) {
      activeElement.currentTime = time;
      setCurrentTime(time);
      if (duration) {
        setProgress(time / duration);
      }
    }
  }, [duration]);

  // Handle Initial Autoplay on first interaction
  useEffect(() => {
    const handleInteraction = () => {
      if (!hasStarted) {
        setHasStarted(true);
        setIsPlaying(true);
        // Start track 0 with a fade-in
        crossfadeTo(TRACKS[0].url, volume, true);
      }
    };

    if (!hasStarted) {
      document.addEventListener('click', handleInteraction, { once: true });
      document.addEventListener('keydown', handleInteraction, { once: true });
      document.addEventListener('touchstart', handleInteraction, { once: true });
    }

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, [hasStarted, crossfadeTo, volume]);

  return (
    <MusicContext.Provider value={{
      tracks: TRACKS,
      currentTrackIndex,
      isPlaying,
      volume,
      isPlayerOpen,
      progress,
      duration,
      currentTime,
      togglePlay,
      nextTrack,
      prevTrack,
      setVolume,
      togglePlayer,
      seek,
      hasStarted
    }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
}
