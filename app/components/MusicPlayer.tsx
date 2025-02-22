'use client';

import { useMusic } from '../context/MusicContext';

export default function MusicPlayer() {
  const { isPlaying } = useMusic();

  return (
    <audio 
      src="/nop/music.mp3" 
      autoPlay={isPlaying} 
      loop 
      muted={!isPlaying}
    />
  );
} 