
import React, { useState, useMemo } from 'react';
import type { Bet } from '../types';
import { TrashIcon } from './icons';

interface BettingSlipProps {
  bets: Bet[];
  onRemoveBet: (betId: string) => void;
}

const formatOdds = (odds: number) => (odds > 0 ? `+${odds}` : odds);

export const BettingSlip: React.FC<BettingSlipProps> = ({ bets, onRemoveBet }) => {
  const [wager, setWager] = useState<string>('10.00');

  const potentialWinnings = useMemo(() => {
    const wagerAmount = parseFloat(wager) || 0;
    if (wagerAmount <= 0 || bets.length === 0) return '0.00';

    const totalOdds = bets.reduce((acc, bet) => {
        if(bet.odds > 0){
            return acc * (bet.odds / 100 + 1);
        } else {
            return acc * (100 / Math.abs(bet.odds) + 1);
        }
    }, 1);

    return (wagerAmount * totalOdds - wagerAmount).toFixed(2);
  }, [wager, bets]);

  return (
    <div className="bg-gray-800 rounded-lg shadow-2xl sticky top-20">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-2xl font-bold">Bet Slip</h2>
      </div>
      <div className="p-4 max-h-[40vh] overflow-y-auto">
        {bets.length === 0 ? (
          <p className="text-gray-400 text-center py-8">Your bet slip is empty. Click on odds to add a bet.</p>
        ) : (
          <div className="space-y-3">
            {bets.map(bet => (
              <div key={bet.id} className="bg-gray-700 p-3 rounded-lg flex justify-between items-start">
                <div>
                  <p className="font-bold text-sm">{bet.teamName ? `${bet.betType} - ${bet.teamName}`: bet.betType}</p>
                  <p className="text-xs text-gray-400">{bet.gameName}</p>
                </div>
                <div className="text-right">
                    <p className="font-bold text-green-400">{formatOdds(bet.odds)}</p>
                    <button onClick={() => onRemoveBet(bet.id)} className="text-gray-500 hover:text-red-500 mt-1">
                        <TrashIcon className="h-4 w-4"/>
                    </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {bets.length > 0 && (
        <div className="p-4 bg-gray-900/50 rounded-b-lg">
          <div className="flex justify-between items-center mb-4">
            <label htmlFor="wager" className="font-semibold">Wager</label>
            <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                <input
                id="wager"
                type="number"
                value={wager}
                onChange={(e) => setWager(e.target.value)}
                className="bg-gray-700 rounded-md w-32 pl-7 pr-3 py-2 text-right font-semibold border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
            </div>
          </div>
          <div className="flex justify-between items-center mb-4 text-lg">
            <span className="font-semibold">Potential Winnings</span>
            <span className="font-bold text-green-400">${potentialWinnings}</span>
          </div>
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors text-lg">
            Place Bet
          </button>
        </div>
      )}
    </div>
  );
};
