import React from 'react'
import Styles from './SingleAlbumn.module.css'


export default function SingleAlbumn({image, url, songs ,title}) {
  return (
    <div className={Styles.container}>
      <a href={url} target="_blank" rel="noreferrer"><img src={image} alt="albumn"/></a>
      
      <div className={Styles.albumData}>
      <p>{title}</p>
      {songs.map((song, index) => {
        return (
          <ul>
            <li key={index}>{index+1}. {song}</li>
          </ul> 
        )
      })}
      
      </div>
    </div>
  )
}

