import React, {useState, useEffect} from "react";
import ReactGA from 'react-ga';
import Head from 'next/head'
import dynamic from 'next/dynamic'

// const RightSideCoverImage = dynamic(
//   () => import('../components/RightSideCoverImage'),
//   { ssr: false}
// )

const HeaderCoverImage = dynamic(
  () => import('../components/HeaderCoverImage'),
  { ssr: false}
)

const SelectLinks = dynamic(
  () => import('../components/SelectLinks'),
  { ssr: false}
)

const SocialNetworkButtons = dynamic(
  () => import('../components/SocialNetworkButtons'),
  { ssr: false}
)

const SupportUs = dynamic(() => import('../components/SupportUs'), { ssr: false})
const Tipjar = dynamic(() => import('../components/Tipjar/Tipjar'), { ssr: false})
const EmailSignup = dynamic(() => import('../components/EmailSignup/EmailSignup'), { ssr: false})

const Podcast = ({data}) => {
  const {
    id, name, link, author, email, description, artwork_url_256, slug,
    rss_feed, player_page_link, hide_home_page_button_from_landing_page,
    facebook_page, twitter_handle, instagram_profile, google_analytics_id, 
    prices, stripe_user_id, mailchimp_button_title_message, 
    mailchimp_show_form, mailchimp_button_text, podcast_title, patreon_support_link
  } = data;

  // const {prices, stripe_user_id} = tipjarData;

  if(google_analytics_id) {
    ReactGA.initialize(google_analytics_id);
    ReactGA.pageview(`landing_page/${slug}`)
  }

  return (
    <>      
      <HeaderMeta data={data}/>
      <section style={{backgroundColor: "#F1F4F8"}}>
        <div className="container d-flex flex-column">
          <div className="row align-items-center justify-content-between no-gutters min-vh-100">
            <HeaderCoverImage imageURL={artwork_url_256}/>
            <div className="col-12 col-md-6 py-8 py-md-11">
              <h2 className="font-weight-bold text-center mb-2">{podcast_title}</h2>
              <p className="font-size-lg text-center text-muted mb-0">
                Add our content to your favorite podcast player by clicking the button below.                
              </p>              
              {
                hide_home_page_button_from_landing_page ? <></> : <><br/><a className="btn btn-secondary btn-block lift" href={link ? link : player_page_link}>Visit our Home Page</a></>
              }
              <EmailSignup
                show_id={id}
                show_form={mailchimp_show_form}
                button_text={mailchimp_button_text}
                button_title_message={mailchimp_button_title_message}
              />
              <hr className="hr-sm my-6 my-md-8 border-gray-300"/>                            
              <SocialNetworkButtons
                facebook_page={facebook_page}
                twitter_handle={twitter_handle}
                instagram_profile={instagram_profile}
              />
              <Tipjar slug={slug} prices={prices} stripe_user_id={stripe_user_id} email={email} name={name}/>
              <SupportUs patreon_support_link={patreon_support_link}/>
              <SelectLinks id={id} data={data}/>
            </div>                        
          </div>        
        </div>

      </section>      
    </>
  )
}

const HeaderMeta = ({data}) => {
  const {
    id, name, link, author, email, description, title, keywords, 
    artwork_url_16, artwork_url_32, artwork_url_64, artwork_url_256,
    rss_feed, page_link, twitter_handle, is_private_show, podcast_title
  } = data;

  if(is_private_show) {
    return (
      <Head>
        <meta key="robots" name="robots" content="noindex,follow" />
        <meta key="googlebot" name="googlebot" content="noindex,follow" />        
        <link rel="icon" href={artwork_url_16 ? artwork_url_16 : "https://justcast.sfo2.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png"} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />        
        <link rel="apple-touch-icon" href={artwork_url_16 ? artwork_url_16 : "https://justcast.sfo2.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-v1-gradient-color-icon.png"} />

        <link rel="shortcut icon" type="image/png" href={artwork_url_16 ? artwork_url_16 : "https://justcast.sfo2.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png"} sizes="16x16" />
        <link rel="shortcut icon" type="image/png" href={artwork_url_32 ? artwork_url_32 : "https://justcast.sfo2.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png"} sizes="32X32" />
        <link rel="shortcut icon" type="image/png" href={artwork_url_64 ? artwork_url_64 : "https://justcast.sfo2.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png"} sizes="64X64" />
        <link rel="shortcut icon" type="image/png" href={artwork_url_256 ? artwork_url_256 : "https://justcast.sfo2.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png"} sizes="256X256" />        
      </Head>
    )
  }
  return (
    <Head>
      <title>{podcast_title}</title>
      <link rel="icon" href={artwork_url_16 ? artwork_url_16 : "https://justcast.sfo2.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png"} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="keywords" content={keywords ? keywords : ""} />
      <meta name="description" content={description ? description : name} key="description" />      
      <link rel="apple-touch-icon" href={artwork_url_16 ? artwork_url_16 : "https://justcast.sfo2.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-v1-gradient-color-icon.png"} />

      <link rel="shortcut icon" type="image/png" href={artwork_url_16 ? artwork_url_16 : "https://justcast.sfo2.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png"} sizes="16x16" />
      <link rel="shortcut icon" type="image/png" href={artwork_url_32 ? artwork_url_32 : "https://justcast.sfo2.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png"} sizes="32X32" />
      <link rel="shortcut icon" type="image/png" href={artwork_url_64 ? artwork_url_64 : "https://justcast.sfo2.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png"} sizes="64X64" />
      <link rel="shortcut icon" type="image/png" href={artwork_url_256 ? artwork_url_256 : "https://justcast.sfo2.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png"} sizes="256X256" />

      <link type="application/rss+xml" rel="alternate" title={podcast_title} href={rss_feed}/>

      <meta property="og:title" content={podcast_title} key="title" />
      <meta property="og:type" content="website"/>
      <meta property="og:site_name" content={podcast_title}/>
      <meta property="og:description" content={description ? description : podcast_title} />    
      <meta property="og:url" content={link ? link : page_link} />
      <meta property="og:image" content={artwork_url_256 ? artwork_url_256 : "https://justcast.sfo2.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png"} />      

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter_handle ? twitter_handle : ""} />
      <meta name="twitter:title" content={podcast_title} />
      <meta name="twitter:description" content={description ? description : podcast_title} />
      <meta name="twitter:image" content={artwork_url_256 ? artwork_url_256 : "https://justcast.sfo2.digitaloceanspaces.com/LandingPageAssets/Imgs/JustCast-logo192.png"} />      

      <meta content="$ITUNES_APP_ID" name="apple-itunes-app"/>      
    </Head>
  )
}

// export const getStaticPaths = async () => {
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://.../posts')
//   const podcasts = await res.json()
  
//   // Get the paths we want to pre-render based on posts
//   const paths = podcasts.map((podcast) => `/${podcast.slug}`)

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

// export const getStaticProps = async ({params: {slug}}) => {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const res = await fetch(`https://.../posts/${params.id}`)
//   const podcast = await res.json()

//   // Pass post data to the page via props
//   return { props: { podcast } }
// }

export const getServerSideProps = async ({params: {slug}}) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1

  const res = await fetch(`${process.env.RAILS_ENDPOINT}/v1/shows/${slug}`)
  const tipjarRes = await fetch(`${process.env.RAILS_ENDPOINT}/v1/shows/${slug}/tip_jar_prices_public`)
  
  const showData = await res.json();
  const tipData = await tipjarRes.json();

  const data = {...showData, ...tipData}
  // console.log(tipData)
  
  // Pass post data to the page via props
  return { props: { data } }
}

export default Podcast;