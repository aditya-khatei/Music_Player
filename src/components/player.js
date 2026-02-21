import React, { useEffect, useRef } from "react";

function Player({ currentSong, isPlaying, onPlayPause, onNext, onPrev }) {

    const audioRef = useRef(null);
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        }
        else {
            audioRef.current.pause();
        }
    },
        [isPlaying, currentSong])

    return (
        <div className="player">
            <h2>{currentSong.title}</h2>
            <p>{currentSong.artist}</p>
            <audio ref={audioRef} src={currentSong.audio} />
            <div className="controls">
                <button onClick={onPrev}>⏮</button>
                <button onClick={onPlayPause}>{isPlaying ? "⏸" : "▶️"}</button>
                <button onClick={onNext}>⏭</button>
            </div>
        </div>
    );
}

export default Player;
