
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { LiveGames } from './components/LiveGames';
import { BettingSlip } from './components/BettingSlip';
import { RadioPlayer } from './components/RadioPlayer';
import { LiveStream } from './components/LiveStream';
import type { Game, Bet } from './types';
import { MOCK_GAMES } from './constants';

const App: React.FC = () => {
  const [games, setGames] = useState<Game[]>(MOCK_GAMES);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [bets, setBets] = useState<Bet[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGames(prevGames =>
        prevGames.map(game => {
          if (Math.random() > 0.7) { // Randomly update one team's score
            const teamToUpdate = Math.random() > 0.5 ? 'teamA' : 'teamB';
            return {
              ...game,
              score: {
                ...game.score,
                [teamToUpdate]: game.score[teamToUpdate] + (Math.random() > 0.8 ? 3 : 2),
              },
              time: {
                ...game.time,
                minute: Math.floor(Math.random() * 12),
                second: Math.floor(Math.random() * 60)
              }
            };
          }
          return game;
        })
      );
    }, 3000); // Update scores every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleSelectGame = (game: Game) => {
    setSelectedGame(game);
  };

  const handleCloseStream = () => {
    setSelectedGame(null);
  };

  const handleAddBet = (game: Game, betType: string, odds: number, teamName?: string) => {
    const newBet: Bet = {
      id: `${game.id}-${betType}-${teamName || ''}`,
      gameId: game.id,
      gameName: `${game.teamA.name} vs ${game.teamB.name}`,
      betType,
      teamName,
      odds,
    };
    
    setBets(prevBets => {
      // Prevent duplicate bets
      if (prevBets.find(b => b.id === newBet.id)) {
        return prevBets;
      }
      return [...prevBets, newBet];
    });
  };

  const handleRemoveBet = (betId: string) => {
    setBets(prevBets => prevBets.filter(b => b.id !== betId));
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <Header />
      <main className="container mx-auto p-4 lg:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            {selectedGame ? (
              <LiveStream game={selectedGame} onClose={handleCloseStream} />
            ) : (
              <LiveGames games={games} onSelectGame={handleSelectGame} onAddBet={handleAddBet} />
            )}
          </div>
          <div className="lg:col-span-4">
            <BettingSlip bets={bets} onRemoveBet={handleRemoveBet} />
          </div>
        </div>
      </main>
      <RadioPlayer />
    </div>
  );
};

export default App;
