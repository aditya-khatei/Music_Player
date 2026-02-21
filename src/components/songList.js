import React from "react";

function SongList({ songs, currentSong, setCurrentSong }) {
    return (
        <div className="song-list">
            {songs.map((song) => (
                <div
                    key={song.id}
                    className={`song-item ${song.id === currentSong.id ? "active" : ""}`}
                    onClick={() => setCurrentSong(song)}
                >
                    <div>
                        <strong>{song.title}</strong> <span>- {song.artist}</span>
                    </div>
                    <span>{song.duration}</span>
                </div>
            ))}
        </div>
    );
}

export default SongList;
