import React from 'react';
import PropTypes from 'prop-types';

export default function createSVG(Icon, {viewBox} = {viewBox: '0 0 20 20'}) {
	return class SVG extends React.PureComponent {
		static propTypes = {
			fill: PropTypes.string,
			size: PropTypes.number,
		}

		static defaultProps = {
			fill: 'currentColor',
			size: null,
		}

		render() {
			const {fill, size, height, width} = this.props;

			return (
				<svg
					fill={fill}
					height={size || height}
					width={size || width}
					viewBox={viewBox}
				>
					<Icon fill={fill} />
				</svg>
			);
		}
	}
}
