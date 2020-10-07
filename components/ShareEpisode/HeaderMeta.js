import React from "react";
import Head from 'next/head'
import {strippedString} from '../../libs'

const HeaderMeta = ({data}) => {
  if(data.show.is_private_show) {
    return (
      <Head>
        <meta key="robots" name="robots" content="noindex,follow" />
        <meta key="googlebot" name="googlebot" content="noindex,follow" />
      </Head>
    )    
  }
  
  return (
    <Head>
      <title>{data.show.name} | {data.name}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {data.show.keywords ? <meta content={data.show.keywords} name="keywords"/> : null}
      {data.description ? <meta content={strippedString(data.description)} name="description"/> : null}
      <meta content='player' name='twitter:card' />
      {data.show.twitter_connection_screen_name ? <meta content={`@${data.show.twitter_connection_screen_name}`} name='twitter:site'/> : null}
      <meta content={`${data.name} | ${data.show.name}`} name="twitter:description"/>
      <meta content={data.embedded_player} name="twitter:player"/>
      <meta content='500' name='twitter:player:width'/>
      <meta content='180' name='twitter:player:height'/>
      <meta content={data.artwork_url ? data.artwork_url : data.show.artwork_url_256} name='twitter:image'/>
      <meta content={`${data.name} | ${data.show.name}`} name='twitter:image:alt'/>
      <meta content={data.audio_url} name='twitter:player:stream'/>
      <meta content='audio/mpeg' name='twitter:player:stream:content_type'/>
      <meta content={data.artwork_url ? data.artwork_url : data.show.artwork_url_256} property='og:image'/>
      <meta content='800' property='og:image:height'/>
      <meta content='800' property='og:image:width'/>
      <link rel="shortcut icon" type="image/x-icon" href={data.artwork_url ? data.artwork_url : data.show.artwork_url_32} />
    </Head>
  )
}

export default HeaderMeta