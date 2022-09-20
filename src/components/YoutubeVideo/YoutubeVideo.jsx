import React from 'react'
import Styles from './YoutubeVideo.module.css'

export default function YoutubeVideo() {
  return (
    <div className={Styles.container}>
      <h2>Videos</h2>
      <div>
      <iframe src="https://www.youtube.com/embed/NnUY_TTN7zw?start=23" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  )
}
