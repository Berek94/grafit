import React from 'react';
import classNames from 'classnames';

import styles from './HomePageDescription.css';

export default class HomePageDescription extends React.PureComponent {
	render() {
		const className = classNames(
			'g--display_flex g--justify-content_center g--align-items_center',
			styles.content
		);

		return (
			<div className={className}>
				<div>
					<p>Дизайн-студия «GRAFIT» - это команда профессионалов влюбленных в свое дело!</p> 
					<p>Мы любим решать  сложные задачи, создавая яркий и неповторимый продукт.</p>
				</div> 
			</div>
		);
	}
}