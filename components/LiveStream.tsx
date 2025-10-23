
import React from 'react';
import type { Game } from '../types';
import { XIcon } from './icons';

interface LiveStreamProps {
  game: Game;
  onClose: () => void;
}

export const LiveStream: React.FC<LiveStreamProps> = ({ game, onClose }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-2xl p-4 relative">
      <button 
        onClick={onClose}
        className="absolute top-3 right-3 bg-gray-900/50 hover:bg-red-600 rounded-full p-2 transition-colors z-20"
        aria-label="Close stream"
      >
        <XIcon className="h-6 w-6" />
      </button>

      <h2 className="text-2xl font-bold mb-4 border-b-2 border-red-500 pb-2">
        Live Stream: {game.teamA.name} vs {game.teamB.name}
      </h2>
      
      <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
        <img 
          src={`https://picsum.photos/seed/${game.id}/1280/720`} 
          alt="Live sports action" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm font-bold rounded-md flex items-center gap-2">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            LIVE
          </div>
          <div className="absolute bottom-4 w-full px-4 text-white">
            <div className="flex justify-between items-center bg-black/50 p-3 rounded-md">
                <div className="flex items-center gap-2">
                    <img src={game.teamA.logo} alt={game.teamA.name} className="h-8 w-8 object-contain" />
                    <span className="font-semibold text-lg">{game.teamA.name}</span>
                </div>
                <div className="font-black text-3xl">{game.score.teamA} - {game.score.teamB}</div>
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-lg">{game.teamB.name}</span>
                    <img src={game.teamB.logo} alt={game.teamB.name} className="h-8 w-8 object-contain" />
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Game Details</h3>
        <p className="text-gray-400">Broadcasting live from the arena. The atmosphere is electric!</p>
      </div>
    </div>
  );
};
