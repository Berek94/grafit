import React, {PureComponent} from 'react';
import styles from 'src/app.css';

export default class Main extends PureComponent {

	handleClick = (event) => this.props.getUsers()

	render () {
		const {users} = this.props;

		return (
			<div>
				<div>
					<button onClick={this.handleClick}>Нажми</button>
				</div>
				{users.map((item, index) =>
					<div key={index} className={styles.item}>{item.name}</div>
				)}
			</div>
		);
	}
}
