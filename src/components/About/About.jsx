import React from "react";
import Styles from "./About.module.css";
import Slider from "../Slider/Slider";
import SliderImg1 from "../../assets/images/sliderImages/img1.jpg";
import SliderImg2 from "../../assets/images/sliderImages/img2.jpg";
import SliderImg3 from "../../assets/images/sliderImages/img3.jpg";
import SliderImg4 from "../../assets/images/sliderImages/img4.jpg";

export default function About() {
  const SliderImages = [SliderImg1, SliderImg2, SliderImg3, SliderImg4];

  return (
    <div className={Styles.container}>
      <div className={Styles.description}>
        <h2>Clásicos del rock nacional Argentino en versiones distintas.</h2>
        <p>
          Somos una banda de Buenos Aires que versiona canciones de rock
          nacional en formato country, blues y rock and roll para traer a la
          actualidad canciones que nos marcaron en los años achenta y noventa.
        </p>
      </div>
      <Slider images={SliderImages} />
    </div>
  );
}
