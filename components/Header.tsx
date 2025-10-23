
import React from 'react';
import { FlameIcon, UserCircleIcon } from './icons';

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <FlameIcon className="h-8 w-8 text-red-500" />
          <h1 className="text-2xl font-bold tracking-wider text-white uppercase">
            Sportsbook <span className="text-red-500">Live</span>
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden sm:block text-right">
            <div className="text-sm text-gray-400">Balance</div>
            <div className="text-lg font-semibold text-green-400">$1,234.56</div>
          </div>
          <button className="p-2 rounded-full hover:bg-gray-700 transition-colors">
            <UserCircleIcon className="h-8 w-8 text-gray-300" />
          </button>
        </div>
      </div>
    </header>
  );
};
