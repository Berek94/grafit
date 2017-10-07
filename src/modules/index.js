import React from 'react';
import Router from './Router';
import Loader from 'src/common/components/Loader';

export default class App extends React.PureComponent {
	render() {
		return [
			<Router key="router" />,
			<Loader key="loader" />
		];
	}
}
