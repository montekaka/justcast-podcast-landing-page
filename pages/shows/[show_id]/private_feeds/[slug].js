import React from 'react';
import dynamic from "next/dynamic";
const PodcastPlayer = dynamic(() => import('../../../../components/PodcastPlayer'), { ssr: false})
// import {PodcastPlayer} from "../../../../components/"

const Page = ({rssFeed, playerConfigs}) => {
  console.log(rssFeed)
  // "http://localhost:3000/shows/40138/private_feeds/7144ca959131904e8741b1bcd43a30ff6dc1dddd.rss"
  return (
    <PodcastPlayer 
      playerConfigs={playerConfigs}
      rssFeed={rssFeed}
    />
  )
}

export const getServerSideProps = async ({params: {show_id, slug}, query}) => {
  const res = await fetch(`${process.env.RAILS_ENDPOINT}/v1/shows/${show_id}`)
  const data = await res.json();
  const { token } = query;
  const playerConfigs = {
    hidePubDate: data.hide_widget_pub_date,        
    hideMoreInfo: data.hide_more_info_from_widget,
    playlistFullHeight: data.playlist_full_height,
    primaryBackgroundColor: data.widget_primary_background_color ?  data.widget_primary_background_color : "#0c1824",
    primaryButtonColor: data.widget_primary_button_color ?  data.widget_primary_button_color : "#f7f8f9",
    primaryTextColor: data.widget_primary_text_color ?  data.widget_primary_text_color : "#f7f8f9",
    progressBarFilledColor: data.widget_progress_bar_filled_color ?  data.widget_progress_bar_filled_color : "#f7f8f9",
    progressBarBackgroundColor: data.widget_progress_bar_background_color ?  data.widget_progress_bar_background_color : "#8A8175",
    playlistBackgroundColor: data.widget_playlist_background_color ?  data.widget_playlist_background_color : "#30343c",
    playlistTextColor: data.widget_playlist_text_color ?  data.widget_playlist_text_color : "#f7f8f9",
    chapterBackgroundColor: data.widget_chapter_background_color ?  data.widget_chapter_background_color : "#30343c",
    chapterTextColor:  data.widget_chapter_text_color ?  data.widget_chapter_text_color : "#f7f8f9"
  }

  const rssFeed = `${process.env.RAILS_ENDPOINT}/shows/${show_id}/private_feeds/${slug}.rss?token=${token}`  
  return { props: { playerConfigs, rssFeed} }
}

export default Page