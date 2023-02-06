import React from 'react'
import {NinjaPlayer} from 'react-podcast-ninja'

export default function SingleEpisodePlayer({episodes, playerConfigs, playerId}) {  
  return (
    <NinjaPlayer
      episodes={episodes}
      configs={playerConfigs}
      playerId={playerId}
      themeName="retro"
      singleEpisode={true}
    />
  )
}
