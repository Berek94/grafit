import React from 'react';
import classNames from 'classnames';
import styles from './HomePageImagesPanel.css';

import image1 from 'src/data/images/image1.jpg';
import image2 from 'src/data/images/image2.jpg';
import image3 from 'src/data/images/image3.jpg';
import image4 from 'src/data/images/image1.jpg';
import image5 from 'src/data/images/image2.jpg';
import image6 from 'src/data/images/image3.jpg';

export default class HomePageImagesPanel extends React.PureComponent {
	static images = [{
		image: image1,
		text: 'графический дизайн',
	}, {
		image: image2,
		text: 'графический дизайн',
	}, {
		image: image3,
		text: 'графический дизайн',
	}, {
		image: image4,
		text: 'графический дизайн',
	}, {
		image: image5,
		text: 'графический дизайн',
	}, {
		image: image6,
		text: 'графический дизайн',
	}]

	render() {
		const contentClassName = classNames('g--justify-content_space-between', styles.content);
		const contentItemClassName = classNames(
			'g--align_center',
			styles.contentItem
		)
		return (
			<div className={contentClassName}>
				{this.constructor.images.map((item, index) =>
					<div className={contentItemClassName} key={index}>
						<img src={item.image} />
						<span>{item.text}</span>
					</div>
				)}
			</div>
		);
	}
}