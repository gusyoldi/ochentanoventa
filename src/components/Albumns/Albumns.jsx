import React from "react";
import Vol1Img from "../../assets/images/albumns/vol1.jpg";
import Vol2Img from "../../assets/images/albumns/vol2.jpg";
import Styles from "./Albumns.module.css";

export default function Albums() {
  const Vol1Songs = ["Fabricante de mentiras", "Dame una señal", "En la ciudad de la furia"] 
  const Vol2Songs = ["Lunes por la madrugada", "Seminare", "Lamento boliviano"]
  
  return (
    <div className={Styles.container}>
      <h4>Nuestros álbumes</h4>  
    <div className={Styles.albumns}>
      <SingleAlbumn
        title="Volumen 1 (2021)"
        image={Vol1Img}
        url={
          "https://open.spotify.com/album/3RTbg6nammKOXbEFgJmBf8?si=XwgZ1hawQqyQ-Ni2AF6kww&nd=1"
        }
        songs={Vol1Songs}
      />

      <SingleAlbumn
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


function SingleAlbumn({image, url, songs ,title}) {
  return (
    <div className={Styles.albumn}>
      <a href={url} target="_blank" rel="noreferrer"><img src={image} alt="albumn"/></a>
      <div className={Styles.albumnData}>
      <p>{title}</p>
      {songs.map((song, index) => {
        return (
          <ul key={index}>
            <li>{index+1}. {song}</li>
          </ul> 
        )
      })} 
      </div>
    </div>
  )
}
