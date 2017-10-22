import React from 'react';
import classNames from 'classnames';
import {Carousel} from 'react-responsive-carousel';

import image1 from 'src/data/images/image1.jpg';
import image2 from 'src/data/images/image2.jpg';
import image3 from 'src/data/images/image3.jpg';
import styles from './HomePageImageSlider.css';

export default class HomePageImageSlider extends React.PureComponent {
	static images = [image1, image2, image3]

	render() {
		return (
			<div className={styles.content}>
				<Carousel
					showThumbs={false}
					infiniteLoop
					autoPlay
					showIndicators={false}
					showStatus={false}
					transitionTime={500}
					interval={5000}
				>
					{this.constructor.images.map((item) =>
						<img src={item} key={item} />
					)}
				</Carousel>
			</div>
		);
	}
}