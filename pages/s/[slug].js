import React from 'react';
import { ShowTitle, ShowInfo, ShowNote } from '../../components/ShareEpisode'

const Post = ({data}) => {
  return (
    <>
      <ShowTitle title={data.show.name}/>
      <section className="pt-8 pt-md-11 pb-8 pb-md-14">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <ShowInfo publishDate="SEPTEMBER 29, 2020" authorName="Josh Chen" websiteUrl="abc"/>
            </div>
            <div className="col-12 col-md-8">
              <ShowNote description={data.description}/>
            </div>
          </div>
        </div>
      </section>
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