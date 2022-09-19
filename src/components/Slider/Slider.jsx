import React, { useState } from "react";
import Styles from "./Slider.module.css";
import leftArrow from "../../assets/images/sliderImages/leftArrow.png";
import rightArrow from "../../assets/images/sliderImages/rightArrow.png";

export default function Slider({ images }) {
  const [currentImg, setImg] = useState(0);
  const quantity = images?.length;

  /* Ésta funcion corrobora que el valor que se pasa es un array y no este vacio */
  if (!Array.isArray(images) || quantity === 0) return;

  /* Defino las funciones de los botones de next y previous image */
  const nextImage = () => {
    setImg(currentImg === quantity - 1 ? 0 : currentImg + 1);
  }
  const previousImage = () => {
    setImg(currentImg === 0 ? quantity - 1 : currentImg - 1);
  }

  return (
    <div className={Styles.container}>
      <button onClick={previousImage}>
        <img src={leftArrow} className={Styles.leftArrow} alt="leftArrow" />
      </button>
      {images.map((image, index) => {
        return (
          <div>
            {currentImg === index && (
              <img key={index} src={image} alt="pic" className={Styles.image} />
            )}
          </div>
        );
      })}
      <button onClick={nextImage}>
        <img src={rightArrow} className={Styles.rightArrow} alt="rightArrow" />
      </button>
    </div>
  );
}
