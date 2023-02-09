import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import IMG_1 from "../../assets/images/sliderImages2/img1.jpg";
import IMG_2 from "../../assets/images/sliderImages2/img2.jpg";
import IMG_3 from "../../assets/images/sliderImages2/img3.jpg";
import IMG_4 from "../../assets/images/sliderImages2/img4.jpg";

function ControlledCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item>
				<img className="d-block w-100" src={IMG_1} alt="First slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={IMG_2} alt="Second slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={IMG_3} alt="Third slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={IMG_4} alt="Third slide" />
			</Carousel.Item>
		</Carousel>
	);
}

export default ControlledCarousel;
