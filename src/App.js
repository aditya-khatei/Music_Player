import React, { useState } from 'react';
import Player from './components/player'
import SongList from './components/songList'
import './App.css';

const songsData = [
  { id: 1, title: "Vibe", artist: "Axel", duration: "3:20", audio: "/music/vibe.mp3" },
  { id: 2, title: "DreamScape", artist: "Nova", duration: "4:05", audio: "/music/DreamScape.mp3" },
  { id: 3, title: "Ocean Drive", artist: "Leo", duration: "2:58", audio: "music/OceanDrive.mp3" },
];

function App() {

  const [songs] = useState(songsData);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => setIsPlaying(!isPlaying);
  const handleNext = () => {
    const currentIndex = songs.findIndex((s) => s.id === currentSong.id);
    const nextSong = songs[(currentIndex + 1) % songs.length];
    setCurrentSong(nextSong);
  };

  const handlePrev = () => {
    const currentIndex = songs.findIndex((s) => s.id === currentSong.id);
    const prevSong = songs[(currentIndex - 1 + songs.length) % songs.length];
    setCurrentSong(prevSong)
  }
  return (
    <div className="music-app">
      <header>🎶 My Music Player</header>
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onPrev={handlePrev}
      ></Player>
      <SongList songs={songs} currentSong={currentSong} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
