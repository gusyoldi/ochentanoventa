import React from "react";
import Styles from "./About.module.css";

import ControlledCarousel from "../Slider/ControlledCarousel";

export default function About() {

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
      
      <ControlledCarousel />
      </div>
    </div>
  );
}
