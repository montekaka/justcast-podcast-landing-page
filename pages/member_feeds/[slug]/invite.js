import Layout from '../../../components/private/Layout'
import { PageHeader } from 'react-podcast-ninja'
import {InviteEmailForm} from "../../../components/custom-form"

const InvitePage = ({podcast_title, artwork_link, slug}) => {  
  return (
    <Layout 
      podcast_title={podcast_title}
      artwork_link={artwork_link}
    >
      <div style={{marginBottom: "40px"}}>
        <PageHeader
          imageSrc={artwork_link}
          title={podcast_title}
          subtitle={`A secret podcast feed just for ${podcast_title} members`}
        />
        <div style={{marginTop: "40px"}}>
        <p style={{textAlign: "center", fontWeight: "bold"}}>Join the Podcast!</p>
          <InviteEmailForm slug={slug}/>
        </div>        
      </div>
    </Layout>
  )
}

export async function getServerSideProps({params: {slug} }) {
  const res = await fetch(`${process.env.RAILS_ENDPOINT}/v1/shows/${slug}`)
  const data = await res.json();

  // const {personal_private_link, private_feed_links, xml_feed, rss_feed, podcast_title, artwork_link, description} = data;
  const {
    podcast_title,
    artwork_link,
  } = data;
 
  return {
    props: {
      podcast_title,
      artwork_link,
      slug
    }, // will be passed to the page component as props
  }
}

export default InvitePage