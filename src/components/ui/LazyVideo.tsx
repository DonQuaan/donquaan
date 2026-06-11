import { useEffect, useRef } from 'react';

// Defers fetching the video until it scrolls near the viewport, then autoplays muted.
// Keeps multi-MB media off the critical loading path.
export function LazyVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src) {
            video.src = src;
            video.play().catch(() => {});
          }
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return <video ref={ref} className={className} muted loop playsInline preload="none" />;
}
