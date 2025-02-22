'use client';

import { useMusic } from '../context/MusicContext';

export default function MusicControl() {
  const { isPlaying, toggleMusic } = useMusic();

  return (
    <button 
      onClick={toggleMusic}
      className="fixed bottom-4 right-4 p-3 bg-secondary-800/50 backdrop-blur-sm rounded-full hover:bg-secondary-700/70 transition-all"
    >
      {isPlaying ? '🔊' : '🔇'}
    </button>
  );
} 