import React from 'react';
import Router from 'src/Router';
import Loader from 'src/common-components/Loader';

export default class App extends React.PureComponent {
	render() {
		return (
			<div>
				<Router />
				<Loader />
			</div>
		);
	}
}
