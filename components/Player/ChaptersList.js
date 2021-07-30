import React from "react";

const ChaptersList = ({chapters}) => {
  if(chapters && chapters.length > 0) {
    return (
      <div className="widget-playlist">
        <div className="playlist-items">
          {
            chapters.map((chapter, idx) => {
              return (
                <div key={(idx+1).toString()} className="widget-playlist-item">
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