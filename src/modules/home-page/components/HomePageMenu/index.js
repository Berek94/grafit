import React from 'react';
import classNames from 'classnames';

import styles from './HomePageMenu.css';

export default class HomePageMenu extends React.PureComponent {
	render() {
		const className = classNames(
			'g--display_flex g--justify-content_center g--align-items_center',
			styles.menu
		);

		return (
			<ul className={className}>
				<li className={styles.menuItem}>о нас</li>
				<li className={styles.menuItem}>логотипы<br />фирменные стили</li>
				<li className={styles.menuItem}>полиграфия</li>
				<li className={styles.menuItem}>декор</li>
				<li className={styles.menuItem}>выставочные стенды<br />рекламные конструкции</li>
				<li className={styles.menuItem}>услуги и цены</li>
				<li className={styles.menuItem}>контакты</li>
			</ul>
		);
	}
}