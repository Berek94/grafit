import React from 'react';
import classNames from 'classnames';

import styles from './FooterContactsWrapper.css';

export default class FooterContactsWrapper extends React.PureComponent {
	render() {
		const className = classNames('g--align_center', styles.content);

		return (
			<div className={className} />
		);
	}
}
