import React from "react";
import ReactPlayer from 'react-player'
import FullPlayer from './FullPlayer'

const WidgetPlayer = ({
  progressBarIdName,
  minimize, 
  audio_date, 
  artwork, 
  name, 
  description,
  url, 
  embedUrl,
  shareUrl,
  duration, 
  playedSeconds, 
  played, 
  playing, 
  handleDuration, 
  handleProgress, 
  handlPlayPauseClick, 
  handleSliderChange, 
  handleSeekMouseDown, 
  handleSeekMouseUp, 
  handlePlayerRef, 
  section,
  handleSectionChange,
  shareOnTwitter,
  shareOnFacebook,
  apple_podcast,
  google_podcast,
  overcast,
  spotify,
  pocket_casts,
  breaker,
  castro,
  radio_public,
  castbox,
  tune_in,
  stitcher,
  rssFeed,
  facebook_page,
  twitter_handle,
  playerControlSquare,
  hideWidgetPubDate,
  menuItems
}) => {
  return (
    <>
      <FullPlayer 
      widgetPlayer={true}
      progressBarIdName={progressBarIdName} 
      minimize={minimize} 
      audio_date={audio_date} 
      description={description}
      embedUrl={embedUrl}
      shareUrl={shareUrl}
      artwork={artwork} name={name} url={url} duration={duration}       
      playedSeconds={playedSeconds} played={played} playing={playing} 
      handleDuration={handleDuration} handleProgress={handleProgress} 
      handlPlayPauseClick={handlPlayPauseClick} handleSliderChange={handleSliderChange} 
      handleSeekMouseDown={handleSeekMouseDown} handleSeekMouseUp={handleSeekMouseUp} 
      handlePlayerRef={handlePlayerRef}
      section={section}
      handleSectionChange={handleSectionChange}
      shareOnTwitter={shareOnTwitter}
      shareOnFacebook={shareOnFacebook}
      facebook_page={facebook_page}
      twitter_handle={twitter_handle}
      apple_podcast={apple_podcast}
      google_podcast={google_podcast}
      overcast={overcast}
      spotify={spotify}
      pocket_casts={pocket_casts}
      breaker={breaker}
      castro={castro}
      radio_public={radio_public}
      castbox={castbox}
      tune_in={tune_in}
      stitcher={stitcher}
      rssFeed={rssFeed}  
      playerControlSquare={playerControlSquare}
      hideWidgetPubDate={hideWidgetPubDate}
      menuItems={menuItems}
      />
      <ReactPlayer url={url}
          className='react-player'
          width='0%'
          height='0%'
          ref={handlePlayerRef}
          onDuration={handleDuration}
          onProgress={handleProgress}
          playing={playing}
        />      
    </>
  )
}

export default WidgetPlayer;