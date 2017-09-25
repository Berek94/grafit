import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './ClickableIcon.css';

export default class ClickableIcon extends React.PureComponent {
	static propTypes = {
		children: PropTypes.node.isRequired,
		onClick: PropTypes.func.isRequired,
		value: PropTypes.any,
		hidden: PropTypes.bool,
	}

	static defaultProps = {
		value: null,
		hidden: false,
	}

	handleClick = event => {
		const {onClick, value} = this.props;
		onClick(event, value);
	}

	render() {
		const {children, hidden} = this.props;
		const className = classNames({
			[styles.hidden]: hidden,
			'g--cursor_pointer': !hidden
		});

		return(
			<div onClick={this.handleClick} className={className}>
				{children}
			</div>
		);
	}
}