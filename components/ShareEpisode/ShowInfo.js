import React from 'react';
import PodcastNetworkButton from './PodcastNetworkButton'
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

const ShowInfo = ({publishDate, authorName, websiteUrl, rssFeed, apple_podcast, google_podcast, overcast, spotify, twitter}) => {
  if(publishDate) {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <div className="h6 text-uppercase mb-0 ml-auto">{publishDate}</div>
            {
              authorName ? <>
              <hr/>
              <div className="font-size-sm text-gray-800">
                by {authorName}
              </div></> : null              
            }
            { websiteUrl ? <a href={websiteUrl}>Visit Website</a> : null }
            <div style={{marginTop: "30px"}}>
              <PodcastNetworkButton
                iconName={applePodcastSrc}
                title="Apple Podcasts"
                subtitle="LISTEN IN"
                url={apple_podcast}
              /> 
              <PodcastNetworkButton
                iconName={googlePodcastSrc}
                title="Google Podcast"
                subtitle="LISTEN IN"
                url={google_podcast}
              /> 
              <PodcastNetworkButton
                iconName={overcastSrc}
                title="Overcast"
                subtitle="LISTEN IN"
                url={overcast}
              /> 
              <PodcastNetworkButton
                iconName={spotifySrc}
                title="Spotify"
                subtitle="LISTEN IN"
                url={spotify}
              />  
              <PodcastNetworkButton
                title="RSS Feed"
                subtitle="SUBSCRIBE"
                url={rssFeed}
              />                                                           
            </div>         
          </div>
        </div>
      </>
    )
  }

  return null;
}

export default ShowInfo;