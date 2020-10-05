import React from 'react';
import { ShowTitle } from '../../components/ShareEpisode'

const Post = ({data}) => {
  return (
    <>
      <ShowTitle title={data.show.name}/>
    </>

  )
}

export const getServerSideProps = async ({params: {slug}}) => {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`${process.env.RAILS_ENDPOINT}/v1/audioposts/${slug}/share`)
  
  const data = await res.json()  
  // Pass post data to the page via props
  return { props: { data } }
}

export default Post