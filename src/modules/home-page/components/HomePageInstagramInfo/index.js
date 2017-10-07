import React from 'react';
import styles from './HomePageInstagramInfo.css';

export default class HomePageInstagramInfo extends React.PureComponent {
	render() {
		return (
			<div className={styles.content}>
				<span>Новости на instagram <strong>#grafitcompany </strong></span>
			</div>
		);
	}
}