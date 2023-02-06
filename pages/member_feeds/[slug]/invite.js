import Layout from '../../../components/private/Layout'
import { PageHeader } from 'react-podcast-ninja'
import {InviteEmailForm} from "../../../components/custom-form"

const InvitePage = ({podcast_title, artwork_url, slug, requires_full_name}) => {  
  return (
    <Layout 
      podcast_title={podcast_title}
      artwork_link={artwork_url}
    >
      <div style={{marginBottom: "40px"}}>
        <PageHeader
          imageSrc={artwork_url}
          title={podcast_title}
          subtitle="A private, members-only podcast feed"
        />
        <div style={{marginTop: "40px"}}>
        <p style={{textAlign: "center", fontWeight: "bold"}}>Request access below</p>
          <InviteEmailForm slug={slug} requiresFullName={requires_full_name}/>
        </div>        
      </div>
    </Layout>
  )
}

export async function getServerSideProps({params: {slug} }) {
  const res = await fetch(`${process.env.RAILS_ENDPOINT}/v3/shows/${slug}`)
  const data = await res.json();

  // const {personal_private_link, private_feed_links, xml_feed, rss_feed, podcast_title, artwork_link, description} = data;
  const {
    podcast_title,
    artwork_url,
    requires_full_name
  } = data;
 
  return {
    props: {
      podcast_title,
      artwork_url,
      slug,
      requires_full_name
    }, // will be passed to the page component as props
  }
}

export default InvitePage