import React from 'react';
import { format } from 'date-fns'
import ReactGA from 'react-ga';
import dynamic from "next/dynamic";
import { ShowTitle, ShowInfo, ShowNote, HeaderMeta } from '../../components/ShareEpisode'
const SingleEpisodePlayer = dynamic(() => import('../../components/SingleEpisodePlayer'), { ssr: false})

const Post = ({data, playerConfigs}) => {

  if(data?.show?.podcast_title) {
    if(data.show.google_analytics_id) {
      ReactGA.initialize(data.show.google_analytics_id);
      ReactGA.pageview(`landing_page/s/${data.id}`)
    }
    
    return (
      <>
        <HeaderMeta data={data}/>
        <ShowTitle title={data?.show?.podcast_title}/>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="rounded shadow mt-n10 mb-4">
                  <SingleEpisodePlayer
                    episodes={[{
                      title: data?.episode_title,
                      description: data?.description,
                      podcastTitle: data?.show?.podcast_title,
                      artworkUrl: data?.artwork_url,
                      pubDate: data?.audio_date,
                      link: data?.single_page_url,
                      audioUrl: data?.audio_url,
                      chaptersUrl: data?.chapters_url,
                    }]}
                    configs={playerConfigs}
                    playerId="podcast-player"
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
  const res = await fetch(`${process.env.RAILS_ENDPOINT}/v3/audioposts/${slug}/share`)
  const data = await res.json();

  const playerConfigs = {
    hidePubDate: data?.show?.hide_widget_pub_date,        
    hideMoreInfo: data?.show?.hide_more_info_from_widget,
    playlistFullHeight: data?.show?.playlist_full_height,
    primaryBackgroundColor: data?.show?.widget_primary_background_color || "#0c1824",
    primaryButtonColor: data?.show?.widget_primary_button_color || "#f7f8f9",
    primaryTextColor: data?.show?.widget_primary_text_color || "#f7f8f9",
    progressBarFilledColor: data?.show?.widget_progress_bar_filled_color || "#f7f8f9",
    progressBarBackgroundColor: data?.show?.widget_progress_bar_background_color || "#8A8175",
    playlistBackgroundColor: data?.show?.widget_playlist_background_color || "#30343c",
    playlistTextColor: data?.show?.widget_playlist_text_color || "#f7f8f9",
    chapterBackgroundColor: data?.show?.widget_chapter_background_color || "#30343c",
    chapterTextColor:  data?.show?.widget_chapter_text_color || "#f7f8f9"
  }  

  // Pass post data to the page via props
  return { props: { data, playerConfigs } }
}

export default Post