import Layout from '../../components/private/Layout'
import Error from 'next/error'
import {AppLink, PageHeader, CollapseCard, QRCard} from 'react-podcast-ninja'
import {getPodcastIconImageSrc} from '../../libs'
import { ExternalLink } from 'react-feather';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState, useEffect } from 'react'
import { isIOS, isMobile, isMacOs, isDesktop } from 'react-device-detect';

const PrivatePage = ({
  instructions_url,
  private_feed_links,
  rss_feed,
  podcast_title,
  artwork_url,
  web_player_url,
  errorCode
}) => {
  if (errorCode) {
    return <Error statusCode={"404"} />
  }
  const [copied, setCopied] = useState(false);
  const [links, setLinks] = useState([]);
  useEffect(() => {
    if(copied === true) {
      setTimeout(() => {
        setCopied(false);
      }, 2000)
    }
  }, [copied])

  useEffect(() => {
    const _links = private_feed_links.filter((view) =>{
      const {is_ios, is_mac, is_mobile, universal} = view;
      if( universal || (isIOS && isIOS === is_ios) || (isMacOs && isMacOs === is_mac) || (isMobile && isMobile === is_mobile)) {
        return view;
      }
    });

    setLinks(_links)
  }, [])

  return (
    <Layout
      podcast_title={podcast_title}
      artwork_link={artwork_url}
    >
      <div style={{marginBottom: "40px"}}>
        <div style={{
            display: 'flex',
            gap: "20px",
            flexDirection: "column",
            alignItems: "center",
        }}>
          {
            artwork_url && <img
              src={artwork_url}
              style={{
                height: "96px",
                width: "96px"
              }}
            />
          }
          <div
            style={{
              display: 'flex',
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px"
            }}
          >
            <p style={{margin: 0, fontSize: "1rem", fontWeight: "700", lineHeight: "1.5", textAlign: "center"}}>{podcast_title}</p>
          </div>
        </div>
      </div>
      {isDesktop && <QRCard
        backgroundColor="white"
        url={instructions_url}
      >
        <div>
          <p>If you're on desktop but would prefer to open this on your phone, use your phone's camera to scan and open this link.</p>
        </div>
      </QRCard>}
      <p style={{textAlign: "center", fontWeight: "bold"}}>Subscribe by selecting your podcast player.</p>
      {
        links.map((linkInfo, idx) => {
          const {title, subtitle, link, id} = linkInfo;
          const imageSrc = getPodcastIconImageSrc(id);
          return <AppLink
            key={idx}
            title={title}
            subtitle={subtitle}
            link={link}
            imageSrc={imageSrc}
            backgroundColor="white"
            titleDirection="column-reverse"
          >
            <ExternalLink/>
          </AppLink>
        })
      }
      <CollapseCard
        title="Youtube Music App"
        subtitle="How it works"
        backgroundColor="white"
        imageSrc={getPodcastIconImageSrc("youtube_music")}
      >
        <ol style={{padding: "2rem 1.25rem 0rem 1.25rem"}}>
          <li>
            <CopyToClipboard text={rss_feed}
              onCopy={() => {
                setCopied(true);
              }}>
              <span style={{
                color: `${copied ? "#2e712a" : "#072F5F"}`,
                cursor: "pointer",
                fontWeight: "bold"
              }}>{ copied ? "Copied to clipboard" : "Click here to copy the RSS feed"}</span>
            </CopyToClipboard>
          </li>
          <li><a href="https://tella.video/how-to-add-a-rss-feed-to-youtube-music-app-1-8wis" target="_blank">Watch a How-to video</a></li>
          <li>From the YouTube Music app, tap Library icon.</li>
          <li>Tap <strong>Podcast</strong> at the top of the screen.</li>
          <li>In the bottom-right corner, select <strong>Add podcast</strong>.</li>
          <li>Select <strong>Add a podcast by RSS feed</strong>.</li>
          <li>When prompted, paste the URL of the RSS feed that you'd like to add to your YouTube Music Library.</li>
          <li>Tap <strong>Add</strong> to save the podcast to your library.</li>
        </ol>
        <p>Most podcasts will be available within minutes, but some may take longer to appear in your library. Podcasts added using an RSS feed URL have a badge  next to the podcast title in your library.</p>
      </CollapseCard>
      <CollapseCard
        title="RSS Feed"
        backgroundColor="white"
        imageSrc={getPodcastIconImageSrc("rss_feed")}
      >
        <ol style={{padding: "2rem 1.25rem 0rem 1.25rem"}}>
          <li>
            <CopyToClipboard text={rss_feed}
              onCopy={() => {
                setCopied(true);
              }}>
              <span style={{
                color: `${copied ? "#2e712a" : "#072F5F"}`,
                cursor: "pointer",
                fontWeight: "bold"
              }}>{ copied ? "Copied to clipboard" : "Click here to copy the RSS feed"}</span>
            </CopyToClipboard>
          </li>
          <li>Open your podcast app</li>
          <li>Paste RSS feed</li>
        </ol>
      </CollapseCard>

      {/* <p style={{textAlign: "center", fontWeight: "bold"}}>Listen on our web player</p> */}
      <AppLink
        title="Our web player"
        subtitle="Listen on"
        link={web_player_url}
        backgroundColor="white"
        titleDirection="column-reverse"
        imageSrc={artwork_url}
      >
        <ExternalLink/>
      </AppLink>
    </Layout>
  )
}

export async function getServerSideProps({params: {slug}}) {
  const res = await fetch(`${process.env.RAILS_ENDPOINT}/v3/private_feeds/${slug}`)
  const data = await res.json();

  if(data.error_code) {
    return {
      props: {
        errorCode: true
      }
    }
  } else {
    const {
      instructions_url,
      private_feed_links,
      rss_feed,
      podcast_title,
      artwork_url,
      web_player_url
    } = data;

    return {
      props: {
        instructions_url,
        private_feed_links,
        rss_feed,
        podcast_title,
        artwork_url,
        web_player_url,
        errorCode: false
      },
    }
  }
}

export default PrivatePage