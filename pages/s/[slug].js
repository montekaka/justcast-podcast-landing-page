import React from 'react';
import { format } from 'date-fns'
import { ShowTitle, ShowInfo, ShowNote } from '../../components/ShareEpisode'
import { AudioPlayer } from '../../components/EpisodePlayer'

const Post = ({data}) => {

  if(data && data.show) {
    const menus = [];
    if(data.show.hide_widget_subscribe !== true) {
      menus.push({key: 'subscribe', label: 'subscribe'})
    }
    if(data.show.hide_widget_share !== true) {
      menus.push({key: 'share', label: 'share'})
    }
    menus.push({key: 'more_info', label: 'more info'})

    return (
      <>
        <ShowTitle title={data.show.name}/>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="rounded shadow mt-n10 mb-4">
                  <AudioPlayer
                    id={data.id}
                    showId={data.show.showId}
                    show={data.show}
                    playerControlSquare={true}
                    audiopostData={data}
                    menuItems={menus}                
                  />
                </div>
              </div>
            </div>
            <div className="row pt-8 pt-md-11 pb-8 pb-md-14">
              <div className="col-12 col-md-4">
                <ShowInfo 
                  publishDate={format(new Date(data.audio_date), 'MMMM dd, yyyy')} 
                  authorName={data.author ? data.author : data.show.author}
                  websiteUrl={data.show.link ? data.show.link : data.show.landing_page_url}
                  rssFeed={data.show.rss_feed}
                  overcast={data.show.overcast}
                  google_podcast={data.show.google_podcast}
                  apple_podcast={data.show.apple_podcast}
                  spotify={data.show.spotify}
                />                  
              </div>
              <div className="col-12 col-md-8">
                <ShowNote description={data.description}/>
              </div>
            </div>
          </div>
        </section>
      </>  
    )
  }
  return <p>This page does not exist.</p>;
}

export const getServerSideProps = async ({params: {slug}}) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`${process.env.RAILS_ENDPOINT}/v1/audioposts/${slug}/share`)
  
  const data = await res.json()  
  // Pass post data to the page via props
  return { props: { data } }
}

export default Post