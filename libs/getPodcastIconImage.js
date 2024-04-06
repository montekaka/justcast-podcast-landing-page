
const apple =  '/assets/img/podcasts/apple_podcast.svg'
const google =  '/assets/img/podcasts/google_podcast.svg'
const breaker = '/assets/img/podcasts/breaker.svg'
const castbox = '/assets/img/podcasts/castbox.svg'
const castro = '/assets/img/podcasts/castro.svg'
const overcast = '/assets/img/podcasts/overcast.svg'
const pocketcast = '/assets/img/podcasts/pocketcast.svg'
const radiopublic = '/assets/img/podcasts/radiopublic.svg'
const spotify = '/assets/img/podcasts/spotify.svg'
const stitcher = '/assets/img/podcasts/stitcher.svg'
const tunein = '/assets/img/podcasts/tunein.svg'
const kkbox = '/assets/img/podcasts/kkbox.svg'
const rss = '/assets/img/podcasts/rss.svg'
const iHeart = '/assets/img/podcasts/iHeart.svg'
const sonnet = '/assets/img/podcasts/sonnet.svg'
const podcast_republic = '/assets/img/podcasts/podcast_republic.svg'
const pod_hero = '/assets/img/podcasts/podhero.svg'
const pod_friend = '/assets/img/podcasts/podfriend.svg'
const podcast_addict = '/assets/img/podcasts/podcastaddict.svg'
const player_fm = '/assets/img/podcasts/player_fm.svg'
const amazon_music = '/assets/img/podcasts/amazon_music.svg'
const youtube_music = '/assets/img/podcasts/youtube_music.svg'

const getPodcastIconImageSrc = (id) => {
  switch(id) {
    case 'apple_podcast':
      return apple;
    case 'google_podcast':
      return google;
    case 'overcast':
      return overcast;
    case 'pocket_cast':
      return pocketcast;
    case 'youtube_music':
      return youtube_music
    default:
      return rss
  }
}

export default getPodcastIconImageSrc;