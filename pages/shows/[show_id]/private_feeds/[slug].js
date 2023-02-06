import React from 'react';
import Error from 'next/error'
import dynamic from "next/dynamic";
const PodcastPlayer = dynamic(() => import('../../../../components/PodcastPlayer'), { ssr: false})
const WidgetLayout = dynamic(() => import('../../../../components/private/WidgetLayout'), { ssr: false})
// import {PodcastPlayer} from "../../../../components/"

const Page = ({audioposts, podcast_title, artwork_url, playerConfigs, error_code}) => {
  // "http://localhost:3000/shows/40138/private_feeds/7144ca959131904e8741b1bcd43a30ff6dc1dddd.rss"
  if (error_code) {
    return <Error statusCode={"404"} />
  }
  return (
    <WidgetLayout podcast_title={podcast_title} artwork_link={artwork_url}>
      <PodcastPlayer 
        playerConfigs={playerConfigs}
        episodes={audioposts}
      />
    </WidgetLayout>
  )
}

export const getServerSideProps = async ({params: {slug}, query}) => {
  const { token } = query;
  try {
    const res = await fetch(`${process.env.RAILS_ENDPOINT}/v3/private_feeds/${slug}/widget?review_token=${token}`)
    const data = await res.json();    
    const { podcast_title, artwork_url, audioposts, error_code} = data;
    if(error_code) {
      return { props: { error_code} }
    }
    const playerConfigs = {
      hidePubDate: data?.hide_widget_pub_date,        
      hideMoreInfo: data?.hide_more_info_from_widget,
      playlistFullHeight: data?.playlist_full_height,
      primaryBackgroundColor: data?.widget_primary_background_color || "#0c1824",
      primaryButtonColor: data?.widget_primary_button_color || "#f7f8f9",
      primaryTextColor: data?.widget_primary_text_color || "#f7f8f9",
      progressBarFilledColor: data?.widget_progress_bar_filled_color || "#f7f8f9",
      progressBarBackgroundColor: data?.widget_progress_bar_background_color || "#8A8175",
      playlistBackgroundColor: data?.widget_playlist_background_color || "#30343c",
      playlistTextColor: data?.widget_playlist_text_color || "#f7f8f9",
      chapterBackgroundColor: data?.widget_chapter_background_color || "#30343c",
      chapterTextColor:  data?.widget_chapter_text_color || "#f7f8f9"
    }    
    return { props: {audioposts, podcast_title, artwork_url, playerConfigs} }
  } catch(err) {
    return { props: { error_code:  "404"} }
  }

}

export default Page