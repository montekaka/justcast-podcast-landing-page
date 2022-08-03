import Layout from '../../components/private/Layout'
import {AppLink, PageHeader, CollapseCard} from 'react-podcast-ninja'
import {getPodcastIconImageSrc} from '../../libs'
import { ExternalLink } from 'react-feather';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState, useEffect } from 'react'

const PrivatePage = ({
  private_feed_links, rss_feed, podcast_title, artwork_link, description
}) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if(copied === true) {
      setTimeout(() => {
        setCopied(false);
      }, 2000)
    }
  }, [copied])


  return (
    <Layout>
      <div style={{marginBottom: "40px"}}>
        <PageHeader
          imageSrc={artwork_link}
          title={podcast_title}
          subtitle={description}
        />
      </div>
      <p style={{textAlign: "center", fontWeight: "bold"}}>Subscribe by selecting your podcast player.</p>
      <AppLink
        backgroundColor="white"
        titleDirection="column-reverse"
        title={"Click here"}
        subtitle={"if you need help listening."}
        link={"https://help.helloaudio.fm/article/67-listener-faqs"}
      >
        <ExternalLink/>
      </AppLink>
      {
        private_feed_links.map((linkInfo, idx) => {
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
        title="Google Podcast"
        backgroundColor="white"
        imageSrc={getPodcastIconImageSrc("google_podcast")}
      >
        <ol style={{padding: "0.4rem 1.25rem"}}>
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
          <li>
            <a href="https://podcasts.google.com/subscribe-by-rss-feed" target="_blank">Open Google Podcast</a>
          </li>
          <li>Paste RSS feed</li>
        </ol>
      </CollapseCard>      
      <CollapseCard
        title="RSS Feed"
        backgroundColor="white"
        imageSrc={getPodcastIconImageSrc("rss_feed")}
      >
        <ol style={{padding: "0.4rem 1.25rem"}}>
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
    </Layout>    
  )
}

export async function getServerSideProps({params: {slug}}) {
  const res = await fetch(`${process.env.RAILS_ENDPOINT}/v1/shows/${slug}`)
  const data = await res.json();

  const {private_feed_links, rss_feed, podcast_title, artwork_link, description} = data;

  return {
    props: {
      private_feed_links, 
      rss_feed, 
      podcast_title, 
      artwork_link, 
      description
    }, // will be passed to the page component as props
  }
}

export default PrivatePage