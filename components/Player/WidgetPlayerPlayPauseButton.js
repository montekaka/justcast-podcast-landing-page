import React from "react";
import { Pause, Play } from 'react-feather';

const WidgetPlayerPlayPauseButton = ({playing, handlPlayPauseClick, loading}) => {
  if(loading) {
    return (
      <div className="play-control-button"> 
        <div className="spinner-border" role="loading">
          <span className="sr-only">Loading...</span>
        </div>  
      </div> 
    )
  } else {
    if(playing === true) {
      return (
        <div className="play-control-button"
          onClick={handlPlayPauseClick}
        >
          <Pause/>
        </div> 
      )
    }
  
    return (
      <div className="play-control-button" 
        onClick={handlPlayPauseClick}
      >
        <Play/>
      </div>
    )
  }
}

export default WidgetPlayerPlayPauseButton;