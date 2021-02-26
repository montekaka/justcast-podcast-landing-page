import React, {useEffect, useState} from "react";
import {useSpring, animated} from 'react-spring'
import QRCode from "react-qr-code";
import Select from 'react-select';
import ScaleLoader from "react-spinners/ScaleLoader";

const SelectLinks = ({id, data}) => {
  
  const [loading, setLoading] = useState(true);
  const [qrCode, setQRCode] = useState({})
  const [rssFeed, setRssFeed] = useState('')
  const [links, setLinks] = useState([]);
  const [copyFeedLink, setCopyFeedLink] = useState('Copy Feed Link')
  const props = useSpring({config: { duration: 2000 }, opacity: loading ? 0 : 1, from: {opacity: 0}})

  const copyToClipboard = () => {
    const copyText = document.querySelector('#text-rss-feed');
    copyText.select();
    document.execCommand("Copy");
    setCopyFeedLink('Copied!');
    setTimeout(() => {
      setCopyFeedLink('Copy Feed Link');      
    }, 5000)     
  }

  useEffect(() => {
    const _links = [
      {value: data.apple_podcast ? data.apple_podcast : data.rss_feed, name: "Apple Podcasts", label: "RSS feed / Apple Podcasts",  id: "apple_podcast"},
      // {value: res.data.private_feed.overcast_url, name: "Overcast", label: "Overcast", id: "overcast"},        
      // {value: res.data.private_feed.pocketcast_url, name: "Pocket Casts", label: "Pocket Casts", id: "pocketcasts"},
      // {value: res.data.private_feed.downcast_url, name: "Downcast", label: "Downcast", id: "downcast"},
      // {value: res.data.private_feed.breaker_url, name: "Breaker", label: "Breaker", id: "breaker"},
    ]

    if(data.spotify) {
      _links.push({value: data.spotify, name: 'Spotify', label: "Spotify", id: "spotify"})
    }

    if(data.google_podcast) {
      _links.push({value: data.google_podcast, name: 'Google Podcast', label: "Google Podcast", id: "google_podcast"})
    } 

    if(data.overcast) {
      _links.push({value: data.overcast, name: 'Overcast', label: "Overcast", id: "overcast"})
    }      

    if(data.pocket_casts) {
      _links.push({value: data.pocket_casts, name: 'Pocket Casts', label: "Pocket Casts", id: "pocket_casts"})
    }

    if(data.breaker) {
      _links.push({value: data.breaker, name: 'Breaker', label: "Breaker", id: "breaker"})
    }

    if(data.castro) {
      _links.push({value: data.castro, name: 'Castro', label: "Castro", id: "castro"})
    }

    if(data.radio_public) {
      _links.push({value: data.radio_public, name: 'Radio Public', label: "Radio Public", id: "radio_public"})
    }

    if(data.castbox) {
      _links.push({value: data.castbox, name: 'Castbox', label: "Castbox", id: "castbox"})
    } 
    
    if(data.tune_in) {
      _links.push({value: data.tune_in, name: 'Tune In', label: "Tune In", id: "tune_in"})
    }

    if(data.stitcher) {
      _links.push({value: data.stitcher, name: 'Stitcher', label: "Stitcher", id: "stitcher"})
    }

    setLinks(_links);
    setRssFeed(data.rss_feed)
    setQRCode(_links[0])    
    if(id) {
      setTimeout(() => {
        setLoading(false);
      }, 500)
    }
  }, [id])
  // return <animated.div style={props}>i will fade</animated.div>

  return (
    loading ? 
    <>
      <div style={{display: "flex", justifyContent: "center"}}>
        <ScaleLoader
          size={150}
          color={"#123abc"}
          loading={loading}
        />
      </div>    
    </> :
    <animated.div style={props}>
      {
        links.map((link) => {
          return (
            <a className="btn btn-secondary btn-block lift"
              href={link.value}
              key={link.id}>{link.name}</a>
          )}
        )
      }                  
      <hr/>
      <div onClick={copyToClipboard} className="btn btn-secondary btn-block lift">{copyFeedLink}</div>   
      <input defaultValue={rssFeed} id="text-rss-feed" style={{position: "absolute", left: '-9999px'}}/> 
      <hr/>
      <Select value={qrCode} options={links} onChange={setQRCode}/>
      <div style={{paddingTop: "40px", display: "flex", justifyContent: "center"}}>
        <QRCode value={qrCode.value ? qrCode.value : ""} size={200}/>
      </div>  
      <hr/>      
    </animated.div>
  )
}

export default SelectLinks;