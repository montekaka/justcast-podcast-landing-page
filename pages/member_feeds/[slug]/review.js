import { useState, useEffect } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router'
import Layout from '../../../components/private/Layout'
import { Alert } from 'reactstrap';

const Review = () => {
  const [message, setMessage] = useState(null);

  const router = useRouter();
  const { slug, status, token } = router.query;
  const url = `${process.env.RAILS_ENDPOINT}/v1/private_feeds/${slug}/review?status=${status}&token=${token}`;

  useEffect(() => {
    if(slug && status && token) {
      axios.get(url)
      .then((res) => {
        setMessage(res.data.message)
      })
      .catch((err) => {
        setMessage(err.response.data.error)
      })
    }
  }, [slug, status, token]);

  return (
    <Layout podcast_title="Member feed review">
      {message && <Alert color="light">
        <h4 className="alert-heading">Updated</h4>
        <p>{message}</p>
      </Alert>}
    </Layout>    
  )
}

export default Review