import React, { useState, useEffect } from 'react';
import './VideoControls.module.css';

const VideoControls = ({ videoRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleFullScreen = () => {
    const video = videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    const handlePlayPause = () => {
      setIsPlaying(!video.paused);
    };
    video.addEventListener('play', handlePlayPause);
    video.addEventListener('pause', handlePlayPause);

    return () => {
      video.removeEventListener('play', handlePlayPause);
      video.removeEventListener('pause', handlePlayPause);
    };
  }, [videoRef]);

  return (
    <div className="video-controls">
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <button onClick={handleFullScreen}>Full Screen</button>
    </div>
  );
};

export default VideoControls;
