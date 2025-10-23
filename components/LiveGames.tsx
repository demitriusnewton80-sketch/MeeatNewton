
import React from 'react';
import { GameCard } from './GameCard';
import type { Game } from '../types';

interface LiveGamesProps {
  games: Game[];
  onSelectGame: (game: Game) => void;
  onAddBet: (game: Game, betType: string, odds: number, teamName?: string) => void;
}

export const LiveGames: React.FC<LiveGamesProps> = ({ games, onSelectGame, onAddBet }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-2xl p-4">
      <h2 className="text-2xl font-bold mb-4 border-b-2 border-red-500 pb-2 flex items-center">
        <span className="relative flex h-3 w-3 mr-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        Live Now
      </h2>
      <div className="space-y-4">
        {games.map(game => (
          <GameCard key={game.id} game={game} onSelectGame={onSelectGame} onAddBet={onAddBet} />
        ))}
      </div>
    </div>
  );
};
