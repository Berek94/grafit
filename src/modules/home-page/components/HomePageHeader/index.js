import React from 'react';
import classNames from 'classnames';

import Flex from 'src/common-styles/Flex.css';
import styles from './styles.css';
import GrafitIcon from 'src/data/icons/GrafitIcon';

export default class HomePageHeader extends React.PureComponent {
	render() {
		const className = classNames(
			Flex.displayFlex,
			Flex.justifyContentCenter,
			Flex.alignItemsCenter,
			styles.header
		);

		return (
			<div className={className}>
				<GrafitIcon height={100} width={300} />
			</div>
		);
	}
}
