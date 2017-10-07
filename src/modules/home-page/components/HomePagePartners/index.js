import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './HomePagePartners.css';

export default class HomePagePartners extends React.PureComponent {
	render() {
		return (
			<div className={styles.content}>
				<div className={styles.arrow} />
				<div className={styles.title}>наши партнеры</div>
			</div>
		);
	}
}
