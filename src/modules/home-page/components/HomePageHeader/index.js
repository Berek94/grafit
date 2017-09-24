import React from 'react';
import classNames from 'classnames';

import styles from './HomePageHeader.css';
import GrafitIcon from 'src/data/icons/GrafitIcon';

export default class HomePageHeader extends React.PureComponent {
	render() {
		const className = classNames(
			'g--display_flex g--justify-content_center g--align-items_center',
			styles.header
		);

		return (
			<div className={className}>
				<GrafitIcon height={100} width={300} />
			</div>
		);
	}
}
