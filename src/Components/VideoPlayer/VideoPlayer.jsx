import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from '../../assets/college-video.mp4'


function VideoPlayer  ({playState,setPlayState}) {
  const player = useRef(null);

  return (
    <div
    ref={player}
     className={`video-player ${playState?'':'hide'} `}>
      <video src={video} autoPlay muted controls></video>
      
    </div>
  )
}

export default VideoPlayer
