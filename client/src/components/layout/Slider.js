import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import slide_1 from './sliderimages/slide_1.jpg';
import slide_2 from './sliderimages/slide_2.jpg';
import slide_3 from './sliderimages/slide_3.jpg';
import { Link } from 'react-router-dom';

const Slider = () => {
	const slides = [
		{
			id: 0,
			url: slide_1,
			styles: 'center-left pt-4 mb-0',
			line1: 'Your Vehicle is',
			line2: 'SAFE IN OUR HANDS',
		},
		{
			id: 1,
			url: slide_2,
			styles: 'center-left pt-4 mb-0',
			line1: 'The Best Car Repair and',
			line2: 'MAINTENANCE AUTO SERVICE',
		},
		{
			id: 2,
			url: slide_3,
			styles: 'center-left pt-4 mb-0',
			line1: 'The Best Car Repair and',
			line2: 'MAINTENANCE SERVICE',
		},
	];
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState(null);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
		setDirection(e.direction);
	};

	return (
		<Carousel
			activeIndex={index}
			direction={direction}
			onSelect={handleSelect}
			indicators={false}
			fade={true}
			interval={7000}
			nextIcon={
				<div className="direction-btn">
					<span className="flaticon-next"></span>
				</div>
			}
			prevIcon={
				<div className="direction-btn-two">
					<span className="flaticon-back"></span>
				</div>
			}
		>
			{slides.map(({ id, url, styles, line1, line2 }) => (
				<Carousel.Item key={id}>
					<img className="d-block w-100" src={url} alt="First slide" />
					<Carousel.Caption className={styles}>
						<h4 className="slider-h4">{line1}</h4>
						<h2 className="slider-h2 mt-4 mb-3">{line2}</h2>
						<div className="slider-main-text mt-3 mb-4">
							We specialize in complete auto care at a low cost and in a <br />{' '}
							<span>professional manner</span>
						</div>
						<span className="pt-4">
							<Link className="btn-style-one theme-btn mb-0" to="/contact">
								Contact us
							</Link>
						</span>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default Slider;
