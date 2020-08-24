import React from "react";

const Podcast = ({data}) => {
  const {id, name, link, author, email} = data;
  return (<div>{name}</div>)
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
  const res = await fetch(`https://feed.justcast.com/v1/shows/${slug}`)
  const data = await res.json()

  // Pass post data to the page via props
  return { props: { data } }
}

export default Podcast;