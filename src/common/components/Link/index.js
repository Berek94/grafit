import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Link.css';

export default class Loader extends React.PureComponent {
	static propTypes = {
		path: PropTypes.string.isRequired,
		children: PropTypes.oneOfType([
			PropTypes.node,
			PropTypes.string,
		]),
	}

	render() {
		const {children, path} = this.props;

		return (
			<Link to={path} className={styles.menuItem}>{children}</Link>
		)
	}
}