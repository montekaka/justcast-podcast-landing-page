import React, {useState} from "react";
import { Rss } from 'react-feather';
import styles from './PodcastNetworkButton.module.css'

const PodcastNetworkButton = ({iconName, title, subtitle, url}) => {
  const onClickHander = () => {
    window.open(url, "_blank");
  }

  if(url) {
    return (
      <div className={styles.button} onClick={onClickHander}>
        {title === "RSS Feed" ? <Rss/> : <img src={iconName} alt={title}/>}
        <div className={styles.label}>
          <div className={styles.subtitle}>{subtitle}</div>
          <div className={styles.title}>{title}</div>
        </div>
      </div>
    )
  }

  return null;
}

export default PodcastNetworkButton;