import React, { useState } from "react";
import Styles from "./Slider.module.css";
import leftArrow from "../../assets/images/sliderImages/leftArrow.svg";
import rightArrow from "../../assets/images/sliderImages/rightArrow.svg";

export default function Slider({ images }) {
  const [currentImg, setImg] = useState(0);
  const quantity = images?.length;

  if (!Array.isArray(images) || quantity === 0) return;

  const nextImage = () => {
    setImg(currentImg === quantity - 1 ? 0 : currentImg + 1);
  };
  const previousImage = () => {
    setImg(currentImg === 0 ? quantity - 1 : currentImg - 1);
  };

  if (images.length) {
    return (
      <div className={Styles.container}>
        <div className={`${Styles.photos} ${Styles.active}`}>
          <div className={Styles.leftArrow} onClick={previousImage}>
            <img src={leftArrow} alt="leftArrow" />
          </div>
          <img
            className={Styles.singlePhoto}
            key={images[currentImg]}
            src={images[currentImg]}
            alt="pic"
          />
          <div className={Styles.rightArrow} onClick={nextImage}>
            <img src={rightArrow} alt="rightArrow" />
          </div>
        </div>
      </div>
    );
  }
}
