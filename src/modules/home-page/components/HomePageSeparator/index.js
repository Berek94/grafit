import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './HomePageSeparator.css';

export default class HomePageSeparator extends React.PureComponent {
	static propTypes = {
		borderColor: PropTypes.string.isRequired
	}

	render() {
		return (
			<div className={styles.content}>
				<span>{this.props.text}</span>
			</div>
		);
	}
}