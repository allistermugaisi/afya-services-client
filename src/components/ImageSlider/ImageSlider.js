import React, { useState, useEffect } from 'react';
import { SliderData } from './SliderData';
import { Container } from '@material-ui/core';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
// import { SuspenseImg } from '../SuspenseImage';

import './ImageSlider.css';

const ImageSlider = ({ slides }) => {
	const [current, setCurrent] = useState(0);

	const length = slides.length;

	const nextSlide = React.useCallback(() => {
		setCurrent(current === length - 1 ? 0 : current + 1);
		// eslint-disable-next-line
	}, [current]);

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	useEffect(() => {
		const handleAutoplay = setInterval(nextSlide, 3000);
		return () => clearInterval(handleAutoplay);
	}, [nextSlide]);

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	}

	return (
		<section className="slider">
			<FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
			<FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
			{SliderData.map((slide, index) => {
				return (
					<div
						className={index === current ? 'slide active' : 'slide'}
						key={index}
					>
						{index === current && (
							<Container maxWidth="md">
								<img src={slide.image} alt="" className="image" />

								{/* <SuspenseImg alt="" src={slide.image} className="image" /> */}
							</Container>
						)}
					</div>
				);
			})}
		</section>
	);
};

export default ImageSlider;
