import React, { useState, useEffect } from 'react';
//import VideoControls from '../VideoControls/VideoControls';
import './MediaPlayer.module.css';
// import VideoControls from '../VideoControls/VideoControls'


const MediaPlayer = ({ src, playlistlinks }) => {
  //const videoRef = useRef();
  const [currentSrc, setCurrentSrc] = useState(src);
  useEffect(() => {if 
    (playlistlinks && playlistlinks.length > 0)
    {
      setCurrentSrc(
        playlistlinks[0]
        );
    }
  }, [playlistlinks]);

  return (
    <video controls src={currentSrc} />
  );
};

export default MediaPlayer;
 
