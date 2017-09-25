import React from 'react';
import classNames from 'classnames';

import styles from './HomePageImageSlider.css';
import ImageSlider from 'src/common-components/ImageSlider';
import image1 from 'src/data/images/873.jpg';
import image2 from 'src/data/images/OCERD70.jpg';
import image3 from 'src/data/images/spring15.jpeg';

const images = [image1, image2, image3];

export default class HomePageImageSlider extends React.PureComponent {
	render() {
		const className = classNames(
			'g--display_flex g--justify-content_center g--align-items_center',
			styles.container
		);

		return (
			<div className={className}>
				<div className={styles.sliderWrapper}>
					<ImageSlider images={images}/>
				</div>
			</div>
		);
	}
}