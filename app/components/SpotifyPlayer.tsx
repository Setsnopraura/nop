'use client';

export default function SpotifyPlayer() {
  return (
    <div className="relative bg-secondary-800/50 backdrop-blur-sm p-4 rounded-xl border border-secondary-700">
      <iframe 
        src="https://open.spotify.com/embed/track/29CqjSgueQYgqG227LyQ87?utm_source=generator&theme=0" 
        width="100%" 
        height="80" 
        frameBorder="0" 
        allow="encrypted-media"
        className="rounded-lg relative z-10"
      />
      <div className="absolute inset-0 bg-primary-500/10 rounded-lg z-20 pointer-events-none" />
    </div>
  );
} 