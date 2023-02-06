import React from "react";
import SingleAlbum from "../SingleAlbum/SingleAlbumn";
import Vol1Img from "../../assets/images/albums/vol1.jpg";
import Vol2Img from "../../assets/images/albums/vol2.jpg";
import Styles from "./Albums.module.css";

export default function Albums() {
  const Vol1Songs = ["Fabricante de mentiras", "Dame una señal", "En la ciudad de la furia"] 
  const Vol2Songs = ["Lunes por la madrugada", "Seminare", "Lamento boliviano"]
  
  return (
    <div className={Styles.container}>
      <h4>Nuestros álbumes</h4>  
    <div className={Styles.albums}>
      <SingleAlbum
        title="Volumen 1 (2021)"
        image={Vol1Img}
        url={
          "https://open.spotify.com/album/3RTbg6nammKOXbEFgJmBf8?si=XwgZ1hawQqyQ-Ni2AF6kww&nd=1"
        }
        songs={Vol1Songs}
      />

      <SingleAlbum
        title="Volumen 2 (2022)"
        image={Vol2Img}
        url={
          "https://open.spotify.com/album/3RTbg6nammKOXbEFgJmBf8?si=XwgZ1hawQqyQ-Ni2AF6kww&nd=1"
        }
        songs={Vol2Songs}
      />
    </div>
    </div>
  );
}
