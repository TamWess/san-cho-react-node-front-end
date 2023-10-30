import React from "react";
import Slider from "react-slick";
import "./style.scss";

function Slideshow() {

	

	const settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		rows: 1,
		slidesPerRow: 1,
		dots: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
				},
				breakpoint: 390,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2,
				}
			},
		],
	};



	return (
		<>
			<Slider className="slider" {...settings}>
				<img src="/img/Burger_Le_Gros_San_Cho.jpg"></img>
				<img src="/img/Burger_El_Justo.jpg"></img>
				<img src="/img/Burger_La_Muerte.jpg"></img>
				<img src="/img/Burger_Le_Che.jpg"></img>
				<img src="/img/Burger_Le_Gros_San_Cho.jpg"></img>
				<img src="/img/Burger_El_Justo.jpg"></img>
				<img src="/img/Burger_Le_Che.jpg"></img>
				<img src="/img/Burger_La_Muerte.jpg"></img>
			</Slider>
		</>
	);
}

export default Slideshow;
