
import React, { useState, useRef } from 'react';
import { PlayIcon, PauseIcon, VolumeUpIcon } from './icons';

export const RadioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800/80 backdrop-blur-sm border-t border-gray-700 z-50">
      <div className="container mx-auto p-2 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-red-500 text-white rounded-md p-2 font-bold text-sm">
            RADIO
          </div>
          <div>
            <p className="font-semibold">The Final Whistle</p>
            <p className="text-xs text-gray-400">Live: Post-Game Analysis</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button onClick={togglePlayPause} className="bg-red-600 hover:bg-red-700 p-3 rounded-full text-white transition-colors">
            {isPlaying ? <PauseIcon className="h-5 w-5" /> : <PlayIcon className="h-5 w-5" />}
          </button>
          <VolumeUpIcon className="h-6 w-6 text-gray-400 hidden sm:block"/>
        </div>
        <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" loop />
      </div>
    </div>
  );
};
