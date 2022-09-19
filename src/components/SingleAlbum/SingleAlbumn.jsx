import React from 'react'

export default function SingleAlbumn({image, url}) {
  return (
    <div>
      <a href={url}><img src={image} alt="albumn"/></a>
    </div>
  )
}
