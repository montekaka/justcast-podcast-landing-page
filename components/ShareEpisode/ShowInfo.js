import React from 'react';

const ShowInfo = ({publishDate, authorName, websiteUrl, rssFeed, applePodcastUrl, twitter}) => {
  if(publishDate) {
    return (
      <>
        <div className="card shadow-light-lg">
          <div className="card-body">
            <div className="h6 text-uppercase mb-0 ml-auto">{publishDate}</div>
            {
              authorName ? <>
              <hr/>
              <div className="font-size-sm text-gray-800 mb-5">
                by {authorName}
              </div></> : null              
            }
            { websiteUrl ? <a href={websiteUrl}>Visit Website</a> : null }    
          </div>
        </div>
      </>
    )
  }

  return null;
}

export default ShowInfo;