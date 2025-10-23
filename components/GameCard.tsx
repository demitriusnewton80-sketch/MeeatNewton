
import React from 'react';
import type { Game } from '../types';
import { PlayIcon } from './icons';

interface GameCardProps {
  game: Game;
  onSelectGame: (game: Game) => void;
  onAddBet: (game: Game, betType: string, odds: number, teamName?: string) => void;
}

const formatOdds = (odds: number) => (odds > 0 ? `+${odds}` : odds);

export const GameCard: React.FC<GameCardProps> = ({ game, onSelectGame, onAddBet }) => {
    const { teamA, teamB, score, time, odds, sport } = game;
    
    return (
        <div className="bg-gray-700/50 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-red-500/30 hover:ring-1 hover:ring-red-500">
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-semibold text-gray-400 uppercase">{sport}</span>
                    <div className="text-center">
                        <span className="font-mono text-red-400 text-lg">{`${time.quarter}`}</span>
                        <span className="block font-mono text-xs text-gray-300">{`${String(time.minute).padStart(2, '0')}:${String(time.second).padStart(2, '0')}`}</span>
                    </div>
                </div>
                
                <div className="flex items-center justify-between space-x-2">
                    {/* Team A */}
                    <div className="flex-1 flex flex-col items-center text-center">
                        <img src={teamA.logo} alt={teamA.name} className="h-16 w-16 object-contain mb-2"/>
                        <span className="font-bold text-lg">{teamA.name}</span>
                    </div>
                    
                    {/* Score */}
                    <div className="flex items-center space-x-3">
                        <span className="text-4xl font-black">{score.teamA}</span>
                        <span className="text-2xl font-light text-gray-400">-</span>
                        <span className="text-4xl font-black">{score.teamB}</span>
                    </div>

                    {/* Team B */}
                    <div className="flex-1 flex flex-col items-center text-center">
                        <img src={teamB.logo} alt={teamB.name} className="h-16 w-16 object-contain mb-2"/>
                        <span className="font-bold text-lg">{teamB.name}</span>
                    </div>
                </div>
            </div>
            
            <div className="bg-gray-800/60 p-3 grid grid-cols-3 gap-2 text-center">
                <button onClick={() => onAddBet(game, 'Moneyline', odds.moneyline.teamA, teamA.name)} className="bg-gray-700 hover:bg-red-600 transition-colors p-2 rounded-md">
                    <span className="text-xs text-gray-400">{teamA.name} ML</span>
                    <span className="block font-bold text-green-400">{formatOdds(odds.moneyline.teamA)}</span>
                </button>
                 <button onClick={() => onAddBet(game, 'Total Over', odds.total.over, `Over ${odds.total.points}`)} className="bg-gray-700 hover:bg-red-600 transition-colors p-2 rounded-md">
                    <span className="text-xs text-gray-400">O/U {odds.total.points}</span>
                    <span className="block font-bold text-green-400">{formatOdds(odds.total.over)}</span>
                </button>
                <button onClick={() => onAddBet(game, 'Moneyline', odds.moneyline.teamB, teamB.name)} className="bg-gray-700 hover:bg-red-600 transition-colors p-2 rounded-md">
                    <span className="text-xs text-gray-400">{teamB.name} ML</span>
                    <span className="block font-bold text-green-400">{formatOdds(odds.moneyline.teamB)}</span>
                </button>
                <button onClick={() => onAddBet(game, 'Spread', odds.spread.points, teamA.name)} className="bg-gray-700 hover:bg-red-600 transition-colors p-2 rounded-md">
                    <span className="text-xs text-gray-400">{teamA.name} {formatOdds(odds.spread.teamA)}</span>
                    <span className="block font-bold text-green-400">{formatOdds(odds.spread.points)}</span>
                </button>
                <button onClick={() => onSelectGame(game)} className="bg-red-600 hover:bg-red-700 transition-colors p-2 rounded-md flex items-center justify-center space-x-2 col-span-1">
                    <PlayIcon className="h-5 w-5"/>
                    <span className="font-bold">WATCH</span>
                </button>
                <button onClick={() => onAddBet(game, 'Spread', odds.spread.points, teamB.name)} className="bg-gray-700 hover:bg-red-600 transition-colors p-2 rounded-md">
                    <span className="text-xs text-gray-400">{teamB.name} +{odds.spread.teamB}</span>
                    <span className="block font-bold text-green-400">{formatOdds(odds.spread.points)}</span>
                </button>
            </div>
        </div>
    );
};
