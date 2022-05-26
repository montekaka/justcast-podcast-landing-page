import React  from "react";
import { Facebook, Twitter, Instagram } from 'react-feather';

const mastodonImg = '/assets/img/icons/social/mastodon.svg'
const matrixImg = '/assets/img/icons/social/matrix.svg'

const SocialNetworkButtons = ({facebook_page, twitter_handle, instagram_profile, mastodon, matrix}) => {

  return (
    <>
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
      {
        mastodon ? <a className="btn btn-warning btn-sm" href={mastodon} target="_blank">
          <img src={mastodonImg} className="list-social-icon" alt="mastodon"/>
        </a> : null
      }
      {
        matrix ? <a className="btn btn-warning btn-sm" href={matrix} target="_blank">
          <img src={matrixImg} className="list-social-icon" alt="matrix"/>
        </a> : null
      }            
    </div>
      {
        (facebook_page || twitter_handle ||  instagram_profile || matrix || mastodon) ? <hr/> : null
      }
    </>
  )
}

export default SocialNetworkButtons;