import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Loader.css';

import GrafitIcon from 'src/data/icons/GrafitIcon';

export default class Loader extends React.PureComponent {
	static propTypes = {
	}

	static defaultProps = {
	}

	state = {
		show: true,
	}
	
	componentDidMount() {
		setTimeout(() => {
			this.setState({show: false});
		}, 5000);
	}

	render() {
		const {children, hidden} = this.props;
		const {show} = this.state;
		const className = classNames(styles.content, {
			[styles.hide]: !show
		});

		return(
			<div className={className}>
				<div className={styles.pulse}>
					<GrafitIcon height={80} width={190} />
				</div>
			</div>
		);
	}
}