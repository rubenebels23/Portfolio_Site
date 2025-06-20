import { useRef, useEffect } from "react";

export default function useLoopingSound(src) {
  const audioRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(src);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;
  }, [src]);

  const start = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play();
    }

    // Reset stop timer
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      stop();
    }, 300); // Stop typing sound after 300ms of no keypress
  };

  const stop = () => {
    if (audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return { start };
}
