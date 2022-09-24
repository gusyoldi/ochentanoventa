import React from "react";
import SingleAlbum from "../SingleAlbum/SingleAlbumn";
import Vol1Img from "../../assets/images/albums/vol1.jpg";
import Vol2Img from "../../assets/images/albums/vol2.jpg";
import Styles from "./Albums.module.css";

export default function Albums() {
  return (
    <div id="albums" className={Styles.container}>
      <div className={Styles.title}>
      <h4>Nuestros álbumes</h4>
      </div>
      
    <div className={Styles.albums}>
      <SingleAlbum
        title="Volumen 1"
        image={Vol1Img}
        url={
          "https://open.spotify.com/album/3RTbg6nammKOXbEFgJmBf8?si=XwgZ1hawQqyQ-Ni2AF6kww&nd=1"
        }
      />

      <SingleAlbum
        title="Volumen 2"
        image={Vol2Img}
        url={
          "https://open.spotify.com/album/3RTbg6nammKOXbEFgJmBf8?si=XwgZ1hawQqyQ-Ni2AF6kww&nd=1"
        }
      />
    </div>
    </div>
  );
}
