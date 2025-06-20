import { useCallback } from "react";

export default function useSoundEffect(src) {
  const play = useCallback(() => {
    const audio = new Audio(src);
    audio.volume = 0.3; // Adjust volume as needed
    audio.play();
  }, [src]);

  return play;
}
