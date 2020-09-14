import React  from "react";
import { Facebook, Twitter, Instagram } from 'react-feather';

const SocialNetworkButtons = ({facebook_page, twitter_handle, instagram_profile}) => {

  return (
    <div className="btn-group d-flex" role="group" aria-label="Social networks">
      {
        facebook_page ? <a className="btn btn-primary btn-sm" href={facebook_page} target="_blank"><Facebook/></a> : null
      }
      {
        twitter_handle ? <a className="btn btn-secondary btn-sm" href={twitter_handle} target="_blank"><Twitter/></a> : null
      }
      {
        instagram_profile ? <a className="btn btn-warning btn-sm" href={instagram_profile} target="_blank"><Instagram/></a> : null
      }
    </div>
  )
}

export default SocialNetworkButtons;