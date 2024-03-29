import React from 'react'
import {NinjaPlayer} from 'react-podcast-ninja'

export default function PodcastPlayer({episodes, playerConfigs}) {  
  return (
    <NinjaPlayer
      episodes={episodes}
      configs={playerConfigs}
      playerId="podcast-player"
      themeName="retro"
    />
  )
}
