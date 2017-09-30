import React from 'react';
import classNames from 'classnames';

import styles from './HomePageHeader.css';
import GrafitIcon from 'src/data/icons/GrafitIcon';
import HomePageMenu from 'src/modules/home-page/components/HomePageMenu';

export default class HomePageHeader extends React.PureComponent {
	render() {
		const className = classNames(
			'g--display_flex g--align-items_center g--justify-content_space-between',
			styles.header
		);

		return (
			<div className={className}>
				<GrafitIcon height={80} width={190} />
				<HomePageMenu />
			</div>
		);
	}
}
