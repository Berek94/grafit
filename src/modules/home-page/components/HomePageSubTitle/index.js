import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './HomePageSubTitle.css';

export default class HomePageSubTitle extends React.PureComponent {
	static propTypes = {
		text: PropTypes.string.isRequired
	}

	render() {
		return (
			<div className={styles.content}>
				<span>{this.props.text}</span>
			</div>
		);
	}
}
