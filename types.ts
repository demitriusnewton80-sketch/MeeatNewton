
export interface Team {
  name: string;
  logo: string;
}

export interface Game {
  id: number;
  sport: string;
  teamA: Team;
  teamB: Team;
  score: {
    teamA: number;
    teamB: number;
  };
  time: {
    quarter: string;
    minute: number;
    second: number;
  };
  odds: {
    moneyline: { teamA: number; teamB: number };
    spread: { teamA: number; teamB: number; points: number };
    total: { over: number; under: number; points: number };
  };
}

export interface Bet {
  id: string;
  gameId: number;
  gameName: string;
  betType: string;
  teamName?: string;
  odds: number;
}
