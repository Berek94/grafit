import React from 'react';
import Link from 'src/common/components/Link';

import styles from './ProjectsMenu.css';
import image1 from 'src/data/images/image1.jpg';
import image2 from 'src/data/images/image2.jpg';

export default class ProjectsMenu extends React.PureComponent {
	static items = [
		'логотип',
		'фирменный стиль',
		'выставочные стенды',
		'декор и оформление',
		'сувенирная продукция',
	]

	render() {
		return (
			<div className={styles.wrapper}>
				<ul className={styles.content}>
					{this.constructor.items.map((item) =>
						<div className={styles.menuItem} key={item}>
							<Link path="/lol">{item}</Link>
						</div>
					)}
				</ul>
				<div className={styles.images}>
					<div>
						<img src={image1} />
					</div>
					<div>
						<img src={image2} />
					</div>
					<div>
						<img src={image1} />
					</div>
				</div>
			</div>
		);
	}
}
