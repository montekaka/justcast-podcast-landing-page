import React from 'react'
import {NinjaPodcastPlayer} from 'react-podcast-ninja'

export default function PodcastPlayer({rssFeed, playerConfigs}) {  
  return (
    <NinjaPodcastPlayer
      rssFeedUrl={rssFeed}
      configs={playerConfigs}
      playerId="podcast-player"
    />
  )
}
