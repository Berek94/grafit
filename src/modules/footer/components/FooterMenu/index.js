import React from 'react';

import styles from './FooterMenu.css';

export default class FooterMenu extends React.PureComponent {
	render() {
		return (
			<ul className={styles.content}>
				<li>о нас</li>
				<li>&#8226; логотипы фирменные стили</li>
				<li>&#8226; полиграфия</li>
				<li>&#8226; декор</li>
				<li>&#8226; выставочные стенды рекламные конструкции</li>
				<li>&#8226; услуги и цены</li>
				<li>&#8226; контакты</li>
			</ul>
		);
	}
}