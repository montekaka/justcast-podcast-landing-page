import Layout from '../../components/private/Layout'
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
  artwork_link, 
  web_player_url,
}) => {
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
      if(isIOS === is_ios || isMacOs === is_mac || isMobile === is_mobile || universal) {
        return view;
      }
    });

    setLinks(_links)
  }, [])

  return (
    <Layout 
      podcast_title={podcast_title}
      artwork_link={artwork_link}
    >
      <div style={{marginBottom: "40px"}}>
        <PageHeader
          imageSrc={artwork_link}
          title={podcast_title}
          // subtitle={description}
        />
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
      <p style={{textAlign: "center", fontWeight: "bold"}}>Listen on our web player</p>
      <AppLink 
        title="Open web player"
        link={web_player_url}
        backgroundColor="white"
        titleDirection="column-reverse"
      >
        <ExternalLink/>
      </AppLink>      
    </Layout>
  )
}

export async function getServerSideProps({params: {slug}}) {
  const res = await fetch(`${process.env.RAILS_ENDPOINT}/v1/private_feeds/${slug}`)
  const data = await res.json();

  const {
    instructions_url,
    private_feed_links, 
    rss_feed, 
    podcast_title, 
    artwork_link, 
    web_player_url,
  } = data;
 
  return {
    props: {
      instructions_url,
      private_feed_links, 
      rss_feed, 
      podcast_title, 
      artwork_link, 
      web_player_url,
    }, // will be passed to the page component as props
  }
}

export default PrivatePage