import React from 'react';
import classNames from 'classnames';
import Link from 'src/common/components/Link';
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
					<Link path="/projects" key={item}>{item}</Link>
				)}
			</ul>
		);
	}
}