import React from "react";
import Styles from "./YoutubeVideo.module.css";

export default function YoutubeVideo() {
  return (
    <div className={Styles.container}>
      <h4>Videos</h4>
      <div className={Styles.iframeContainer}>
      <iframe
        width="560"
        height="200"
        src="https://www.youtube.com/embed/NnUY_TTN7zw?start=23"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>
    </div>
  );
}
