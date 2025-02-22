import './styles.css';
import Link from 'next/link';

export default function CheatDetails() {
  return (
    <div className="min-h-screen p-8 cheat-bg text-secondary-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="cheat-image">
          <img 
            src="/nop/cheat.png" 
            alt="FiveM Cheat" 
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Features Section */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold cheat-title">
            FiveM Cheat Features
          </h1>

          {/* Core Features */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Core Features</h2>
            <div className="grid grid-cols-1 gap-3">
              <div className="feature-item">
                <span className="font-medium text-primary-400">Aimbot</span> - 
                Advanced target locking with customizable FOV and smoothness
              </div>
              <div className="feature-item">
                <span className="font-medium text-primary-400">ESP</span> - 
                Player, vehicle, and object visualization with distance tracking
              </div>
              <div className="feature-item">
                <span className="font-medium text-primary-400">No Recoil</span> - 
                Perfect accuracy with adjustable intensity
              </div>
              <div className="feature-item">
                <span className="font-medium text-primary-400">Triggerbot</span> - 
                Automatic shooting when crosshair is on target
              </div>
              <div className="feature-item">
                <span className="font-medium text-primary-400">Radar</span> - 
                Mini-map enhancement showing all players and vehicles
              </div>
            </div>
          </div>

          {/* Back Button */}
          <Link href="/" className="inline-block back-button">
            <span className="button-content">
              <span className="button-text">Back to Home</span>
              <span className="button-icon">←</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}