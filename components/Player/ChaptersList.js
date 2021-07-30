import React from "react";
import {getSecondsFromHHMMSS} from '../../libs'

const ChaptersList = ({chapters, handleChapterClick}) => {
  if(chapters && chapters.length > 0) {
    return (
      <div className="widget-playlist">
        <div className="playlist-items">
          {
            chapters.map((chapter, idx) => {
              return (
                <div 
                  key={(idx+1).toString()} 
                  className="widget-playlist-item"
                  onClick={() => {
                    const seconds = getSecondsFromHHMMSS(chapter.startTime)
                    handleChapterClick(seconds)
                  }}
                >
                  <div className="title">{chapter.name}</div>         
                  <div className="duration">{chapter.startTime}</div>         
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

  return null;
}

export default ChaptersList