import React from 'react';
import classNames from 'classnames';
import styles from './Loader.css';
import animation from 'src/common/styles/animations.css';

import GrafitIcon from 'src/data/icons/GrafitIcon';

export default class Loader extends React.PureComponent {
	state = {
		show: true
	}
	
	componentDidMount() {
		setTimeout(() => {
			this.setState({show: false});
		}, 2000);
	}

	render() {
		const {children, hidden} = this.props;
		const {show} = this.state;
		const className = classNames(styles.content, {
			[styles.hide]: !show
		});

		return(
			<div className={className}>
				<div className={animation.pulse}>
					<GrafitIcon height={80} width={190} />
				</div>
			</div>
		);
	}
}