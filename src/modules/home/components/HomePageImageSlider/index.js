import React from 'react';
import classNames from 'classnames';
import Slider from 'react-slick';

import image1 from 'src/data/images/image1.jpg';
import image2 from 'src/data/images/image2.jpg';
import image3 from 'src/data/images/image3.jpg';
import styles from './HomePageImageSlider.css';
import helpers from 'src/common/styles/helpers.css';

export default class HomePageImageSlider extends React.PureComponent {
	static images = [image1, image2, image3]

	static slidersSettings = {
		infinite: true,
		adaptiveHeight: true,
		arrows: false,
		nextArrow: false,
		prevArrow: false,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1,
		className: helpers.overflowHidden,
		pauseOnHover: false,
		waitForAnimate: false,
	}

	render() {
		return (
			<div className={styles.content}>
				<Slider {...this.constructor.slidersSettings}>
					{this.constructor.images.map(image =>
						<img src={image} key={image} />
					)}
				</Slider>
			</div>
		);
	}
}