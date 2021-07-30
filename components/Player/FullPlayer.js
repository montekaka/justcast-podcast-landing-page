import React from "react";
import MinimizePlayerButton from './MinimizePlayerButton'
import WidgetPlayerControl from './WidgetPlayerControl'
import WidgetPlayerMoreInfo from './WidgetPlayerMoreInfo'
const applePodcastSrc  = '/assets/img/icons/podcasts/apple_podcast.svg'
const googlePodcastSrc  = '/assets/img/icons/podcasts/google_podcast.svg'
const overcastSrc  = '/assets/img/icons/podcasts/overcast.svg'
const spotifySrc  = '/assets/img/icons/podcasts/spotify.svg'
const pocketCastsSrc  = '/assets/img/icons/podcasts/pocketcast.svg'
const breakerSrc  = '/assets/img/icons/podcasts/breaker.svg'
const castroSrc  = '/assets/img/icons/podcasts/castro.svg'
const radioPublicSrc  = '/assets/img/icons/podcasts/radiopublic.svg'
const castboxSrc  = '/assets/img/icons/podcasts/castbox.svg'
const tuneinSrc  = '/assets/img/icons/podcasts/tunein.svg'
const stitcherSrc  = '/assets/img/icons/podcasts/stitcher.svg'

const FullPlayer = ({
  audio_date, 
  artwork, 
  name, 
  description, 
  duration, 
  playedSeconds, 
  playing, 
  handlPlayPauseClick, 
  handleSliderChange, 
  handleSeekMouseDown, 
  handleSeekMouseUp, 
  handleMinimizePlayer, 
  progressBarIdName,
  section, 
  handleSectionChange, 
  embedUrl, 
  shareUrl, 
  shareOnFacebook, 
  shareOnTwitter,
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
  menuItems,
  playerClassName
}) => {
  const date = hideWidgetPubDate === true ? '' : audio_date
  const embedCode = `<iframe src='${embedUrl}' width='100%' height='180' frameborder='0' scrolling='no' seamless='true' style='width:100%; height:180px;'></iframe>`
  const podcastApps = [
    apple_podcast ? {label: "Apple Podcasts", iconName: applePodcastSrc, url: apple_podcast, buttonImg: true} : null,
    google_podcast ? {label: "Google Podcasts", iconName: googlePodcastSrc, url: google_podcast, buttonImg: true} : null,
    overcast ? {label: "Overcast", iconName: overcastSrc, url: overcast, buttonImg: true} : null,
    spotify ? {label: "Spotify", iconName: spotifySrc, url: spotify, buttonImg: true} : null,
    pocket_casts ? {label: "Pocket Casts", iconName: pocketCastsSrc, url: pocket_casts, buttonImg: true} : null,
    breaker ? {label: "Breaker", iconName: breakerSrc, url: breaker, buttonImg: true} : null,
    castro ? {label: "Castro", iconName: castroSrc, url: castro, buttonImg: true} : null,
    radio_public ? {label: "Radio Public", iconName: radioPublicSrc, url: radio_public, buttonImg: true} : null,
    castbox ? {label: "Castbo", iconName: castboxSrc, url: castbox, buttonImg: true} : null,
    tune_in ? {label: "Tune In", iconName: tuneinSrc, url: tune_in, buttonImg: true} : null,
    stitcher ? {label: "Stitcher", iconName: stitcherSrc, url: stitcher, buttonImg: true} : null,
  ]

  const playerControlClass = playerControlSquare ? 'widget-player-app' : 'widget-player-app widget-player-app-rounded';

  return (
    <div className={`widget-player-container dark-html-widget-player ${playerClassName}`}>
      <section className={playerControlClass}>
        <div className="artwork">
          <img src={artwork ? artwork : "https://justcast.herokuapp.com/images/default_thumb_show_image.png"} />
        </div>
        <div className="main">
          <WidgetPlayerControl
            date={date} name={name} playing={playing} handlPlayPauseClick={handlPlayPauseClick}
            progressBarIdName={progressBarIdName} playedSeconds={playedSeconds} duration={duration}
            handleSeekMouseDown={handleSeekMouseDown} handleSeekMouseUp={handleSeekMouseUp} 
            handleSliderChange={handleSliderChange} section={section}
            handleSectionChange={handleSectionChange}
            menuItems={menuItems}          
          />
          <WidgetPlayerMoreInfo section={section === 'subscribe'} 
            title='Subscribe' 
            shareInputs={[{'label':"RSS", 'url': rssFeed}]}
            shareIconWithLabels={podcastApps}
          />
          <WidgetPlayerMoreInfo section={section === 'share'} 
            title='Share' 
            shareInputs={[{'label':"Embed", 'url': embedCode}, {'label':"Share", 'url':shareUrl}]}
            shareIconWithLabels={[{'label': "Facebook", url: shareOnFacebook, iconName:"fe fe-facebook"}, {'label': "Twitter", url: shareOnTwitter, iconName:"fe fe-twitter"}]}
            />            
          <WidgetPlayerMoreInfo 
            section={section === 'more_info'} 
            title={name} 
            description={description}
            shareIconWithLabels={[{'label': "Facebook", url: facebook_page, iconName:"fe fe-facebook"}, {'label': "Twitter", url: twitter_handle, iconName:"fe fe-twitter"}]}
          />
        </div>       
        <div className="minimize-button">
          <MinimizePlayerButton handleMinimizePlayer={handleMinimizePlayer} handleSectionChange={handleSectionChange} section={section}/>
        </div>
      </section>
    </div>    
  )
}

export default FullPlayer;