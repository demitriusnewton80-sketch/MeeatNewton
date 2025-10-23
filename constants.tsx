
import type { Game } from './types';

export const MOCK_GAMES: Game[] = [
  {
    id: 1,
    sport: 'Basketball',
    teamA: { name: 'LA Lakers', logo: 'https://cdn.freebiesupply.com/images/large/2x/los-angeles-lakers-logo-transparent.png' },
    teamB: { name: 'GS Warriors', logo: 'https://cdn.freebiesupply.com/images/large/2x/golden-state-warriors-logo-transparent.png' },
    score: { teamA: 102, teamB: 98 },
    time: { quarter: 'Q4', minute: 2, second: 34 },
    odds: {
      moneyline: { teamA: -150, teamB: 130 },
      spread: { teamA: -2.5, teamB: 2.5, points: -110 },
      total: { over: -110, under: -110, points: 220.5 },
    },
  },
  {
    id: 2,
    sport: 'Football',
    teamA: { name: 'KC Chiefs', logo: 'https://cdn.freebiesupply.com/images/large/2x/kansas-city-chiefs-logo-transparent.png' },
    teamB: { name: 'SF 49ers', logo: 'https://cdn.freebiesupply.com/images/large/2x/san-francisco-49ers-logo-transparent.png' },
    score: { teamA: 21, teamB: 17 },
    time: { quarter: 'Q3', minute: 8, second: 12 },
    odds: {
      moneyline: { teamA: -200, teamB: 170 },
      spread: { teamA: -3.5, teamB: 3.5, points: -110 },
      total: { over: -110, under: -110, points: 48.5 },
    },
  },
  {
    id: 3,
    sport: 'Soccer',
    teamA: { name: 'Real Madrid', logo: 'https://cdn.freebiesupply.com/images/large/2x/real-madrid-logo-transparent.png' },
    teamB: { name: 'Barcelona', logo: 'https://cdn.freebiesupply.com/images/large/2x/barcelona-logo-transparent.png' },
    score: { teamA: 1, teamB: 1 },
    time: { quarter: '2H', minute: 78, second: 55 },
    odds: {
      moneyline: { teamA: 120, teamB: 150 },
      spread: { teamA: -0.5, teamB: 0.5, points: -110 },
      total: { over: -110, under: -110, points: 2.5 },
    },
  },
   {
    id: 4,
    sport: 'Hockey',
    teamA: { name: 'BOS Bruins', logo: 'https://cdn.freebiesupply.com/images/large/2x/boston-bruins-logo-transparent.png' },
    teamB: { name: 'TOR Maple Leafs', logo: 'https://cdn.freebiesupply.com/images/large/2x/toronto-maple-leafs-logo-transparent.png' },
    score: { teamA: 3, teamB: 2 },
    time: { quarter: 'P3', minute: 5, second: 19 },
    odds: {
      moneyline: { teamA: -135, teamB: 115 },
      spread: { teamA: -1.5, teamB: 1.5, points: 150 },
      total: { over: -110, under: -110, points: 5.5 },
    },
  },
];
