import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './ImageSlider.css';
import LeftIcon from 'src/data/icons/LeftIcon';
import RightIcon from 'src/data/icons/RightIcon';
import ClickableIcon from 'src/common-components/ClickableIcon';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ImageSlider extends React.PureComponent {
	static propTypes = {
		images: PropTypes.arrayOf(PropTypes.string).isRequired,
	}

	state = {
		selectedImageIndex: 0,
	}

	handleChangeSlideClick = (event, value) => {
		const {images} = this.props;
		const {selectedImage} = this.state;

		if (value === 'left') {
			this.setState(state => ({
				selectedImageIndex: state.selectedImageIndex - 1
			}));
		} else {
			this.setState(state => ({
				selectedImageIndex: state.selectedImageIndex + 1
			}))
		}
	}

	render() {
		const {selectedImageIndex} = this.state;
		const {images} = this.props;
		const className = classNames(
			'g--display_flex g--justify-content_center g--align-items_center',
			styles.slider
		);
		const needShowLeftIcon = selectedImageIndex > 0;
		const needShowRightIcon = selectedImageIndex < images.length - 1;
		const renderImage = images[selectedImageIndex];

		return (
			<div className={className}>
				<ClickableIcon onClick={this.handleChangeSlideClick} value="left" hidden={!needShowLeftIcon}>
					<LeftIcon size={40} />
				</ClickableIcon>
				<ReactCSSTransitionGroup
					component="div"
					className={styles.carouselSlide}
					transitionName="carousel"
					transitionAppearTimeout={1000}
					transitionEnterTimeout={1000}
					transitionLeaveTimeout={1000}
				>
					<div style={{backgroundImage: `url(${renderImage})`}} key={renderImage} />
				</ReactCSSTransitionGroup>
				<ClickableIcon onClick={this.handleChangeSlideClick} value="right" hidden={!needShowRightIcon}>
					<RightIcon size={40} />
				</ClickableIcon>
			</div>
		);
	}
}