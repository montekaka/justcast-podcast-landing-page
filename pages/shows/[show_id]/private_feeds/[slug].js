import React from 'react';
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';

const PodcastPlayer = dynamic(() => import('../../../../components/PodcastPlayer'), { ssr: false})

const Page = () => {
  const { query } = useRouter();  
  const {token, show_id, slug} = query;
  // "http://localhost:3000/shows/40138/private_feeds/7144ca959131904e8741b1bcd43a30ff6dc1dddd.rss"

  return (
    <PodcastPlayer rssFeed={`${process.env.RAILS_ENDPOINT}/shows/${show_id}/private_feeds/${slug}.rss?token=${token}`}/>
  )
}

export default Page