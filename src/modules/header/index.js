import React from 'react';
import classNames from 'classnames';

import styles from './Header.css';
import GrafitIcon from 'src/data/icons/GrafitIcon';
import HeaderMenu from 'src/modules/header/components/HeaderMenu';

export default class Header extends React.PureComponent {
	render() {
		const className = classNames(
			'g--display_flex g--align-items_center g--justify-content_space-between',
			styles.header
		);

		return (
			<div className={className}>
				<GrafitIcon height={80} width={190} />
				<HeaderMenu />
			</div>
		);
	}
}
