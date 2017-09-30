import React from 'react';
import classNames from 'classnames';

import styles from './FooterWrapper.css';
import GrafitIcon from 'src/data/icons/GrafitIcon';
import FooterMenu from 'src/modules/footer/components/FooterMenu';
import FooterContactsWrapper from 'src/modules/footer/components/FooterContactsWrapper';

export default class FooterWrapper extends React.PureComponent {
	render() {
		return (
			<div className={styles.content}>
				<GrafitIcon height={60} width={250} />
				<FooterMenu />
				<FooterContactsWrapper />
			</div>
		);
	}
}