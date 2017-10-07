import React from 'react';
import classNames from 'classnames';

import styles from './HeaderMenu.css';

export default class HeaderMenu extends React.PureComponent {
	static menuItems = [
		'О студии',
		'Наши проекты',
		'Услуги и цены',
		'Контакты',
	];

	render() {
		const className = classNames(
			styles.menu
		);

		return (
			<ul className={className}>
				{this.constructor.menuItems.map(item =>
					<li className={styles.menuItem} key={item}>{item}</li>
				)}
			</ul>
		);
	}
}