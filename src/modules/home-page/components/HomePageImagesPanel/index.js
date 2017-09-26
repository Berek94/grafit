import React from 'react';
import classNames from 'classnames';
import styles from './HomePageImagesPanel.css';

export default class HomePageImagesPanel extends React.PureComponent {
	render() {
		const contentClassName = classNames('g--align_center', styles.content);
		const contentItemClassName = classNames(
			'g--align_center',
			styles.contentItem
		)
		return (
			<div className={contentClassName}>
				<div className={contentItemClassName}>
					<div />
					<span>графический дизайн</span>
					<hr size="1px" width="150px" color="black" className="g--align_center" />
					<p className="g--align_center">
						логотип &#8226; фирменый стиль<br />
						упаковка &#8226; этикетка &#8226; афиша<br />
						полиграфическая продукция
					</p>
				</div>
				<div className={contentItemClassName}>
					<div />
					<span>выставочные и рекламные конструкции</span>
					<hr size="1px" width="150px" color="black" className="g--align_center" />
					<p className="g--align_center">
						выставочный стенд<br />
						вывеска &#8226; баннер<br />
						рекламная стойка
					</p>
				</div>
				<div className={contentItemClassName}>
					<div />
					<span>декор и оформление</span>
					<hr size="1px" width="150px" color="black" className="g--align_center" />
					<p className="g--align_center">
						дизайн-проект оформления<br />
						пространства &#8226; фотозона<br />
						пригласительная открытка<br />
						кенди-бар &#8226; свадебный декор
					</p>
				</div>
			</div>
		);
	}
}