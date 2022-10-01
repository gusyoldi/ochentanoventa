import React from "react";
import Styles from "./SpotifyIframe.module.css";

export default function SpotifyIframe() {
  return (
    <div className={Styles.container}>
      <iframe title="SpotifyIframe" src="https://open.spotify.com/embed/album/3RTbg6nammKOXbEFgJmBf8?utm_source=generator&theme=0" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  );
}
