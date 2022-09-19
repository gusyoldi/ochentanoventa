import React from "react";
import SingleAlbum from '../SingleAlbum/SingleAlbumn'
import Vol1Img from "../../assets/images/albums/vol1.jpg";
import Vol2Img from "../../assets/images/albums/vol2.jpg";
import Styles from "./Albums.module.css";

export default function Albums() {
  return (
    <div className={Styles.container}>
      <SingleAlbum
        image={Vol1Img}
        url={
          "https://open.spotify.com/album/3RTbg6nammKOXbEFgJmBf8?si=XwgZ1hawQqyQ-Ni2AF6kww"
        }
      />

      <SingleAlbum
        image={Vol2Img}
        url={
          "https://open.spotify.com/album/3RTbg6nammKOXbEFgJmBf8?si=XwgZ1hawQqyQ-Ni2AF6kww"
        }
      />
    </div>
  );
}
