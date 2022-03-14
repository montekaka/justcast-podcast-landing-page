import React from 'react'
import {NinjaPodcastPlayer} from 'react-podcast-ninja'

export default function PodcastPlayer({rssFeed}) {
  return (
    <NinjaPodcastPlayer
      rssFeedUrl={rssFeed}
      playerId="podcast-player"
    />
  )
}
