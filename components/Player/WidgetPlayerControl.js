import React from "react";
import { format } from 'date-fns'
import { playtimeFormat } from '../../libs'
import { CustomInput, Progress } from 'reactstrap';
import WidgetPlayerPlayPauseButton from './WidgetPlayerPlayPauseButton'
import WidgetPlayerMenu from './WidgetPlayerMenu';

// const menuItems = [
//   {key: 'subscribe', label: 'Subscribe'},
//   {key: 'share', label: 'share'},
//   {key: 'more_info', label: 'More info'}
// ]

const WidgetPlayerControl = ({
    date, name, playing, handlPlayPauseClick,
    progressBarIdName, playedSeconds, duration,
    handleSeekMouseDown, handleSeekMouseUp, handleSliderChange,
    section, handleSectionChange, menuItems,hideWidgetPubDate
  }) => {
  if(section === 'control') {
    return (
      <>
        <section className="podcast-name">
          {hideWidgetPubDate ? null : format(new Date(date),'MMMM dd, yyyy')}        
        </section>
        <section className="episode-name">
          {name}
        </section>
        <section className="controls">
          <div className="play-button">
            <WidgetPlayerPlayPauseButton playing={playing} handlPlayPauseClick={handlPlayPauseClick} loading={duration ? false : true}/>              
          </div>
          <div className="miscellaneous">
            <div className="player-progress-bar">                
              <CustomInput
                id={progressBarIdName} //"footer-player-progressbar"
                className="input-progress" 
                type="range" 
                value={playedSeconds}
                min={0}
                max={duration}
                step='any'
                onMouseDown={handleSeekMouseDown}
                onMouseUp={handleSeekMouseUp}
                onChange={handleSliderChange}
              />
              <Progress max={duration} value={playedSeconds} />
            </div>          
            <div className="buttons">
              <section className="time">
                <span>{playedSeconds > 1 ? playtimeFormat(playedSeconds) : "00:00"}</span>
                <span>|</span>
                <span>{playtimeFormat(duration)}</span>              
              </section>
            </div>
          </div>
        </section>
        <section className="menu">
          <WidgetPlayerMenu handleSectionChange={handleSectionChange} menuItems={menuItems}/>
        </section>    
      </>
    )
  } 
  return null;
}

export default WidgetPlayerControl