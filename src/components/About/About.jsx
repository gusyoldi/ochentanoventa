import React from "react";
import Styles from "./About.module.css";
import Slider from "../Slider/Slider";
// import IMG_1 from "../../assets/images/sliderImages/img1.jpg";
// import IMG_2 from "../../assets/images/sliderImages/img2.jpg";
// import IMG_3 from "../../assets/images/sliderImages/img3.jpg";
// import IMG_4 from "../../assets/images/sliderImages/img4.jpg";
import IMG_1 from "../../assets/images/sliderImages2/img1.jpg";
import IMG_2 from "../../assets/images/sliderImages2/img2.jpg";
import IMG_3 from "../../assets/images/sliderImages2/img3.jpg";
import IMG_4 from "../../assets/images/sliderImages2/img4.jpg";

export default function About() {
  const SliderImages = [IMG_1, IMG_2, IMG_3, IMG_4];

  return (
    <div id="home" className={Styles.container}>
      <div className={Styles.description}>
        <h5>Clásicos del rock nacional Argentino, en versiones distintas</h5>
        <p>
          Somos una banda de Buenos Aires que versiona canciones de rock
          nacional en formato country, blues y rock and roll para traer a la
          actualidad canciones que nos marcaron en los años ochenta y noventa.
        </p>
      </div>
      <div className={Styles.slider}>
        <h4>Galería de imágenes</h4>
      <Slider images={SliderImages} />
      </div>
    </div>
  );
}
