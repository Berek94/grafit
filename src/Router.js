import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import HomePage from 'src/modules/home-page';
import Footer from 'src/modules/footer';

export default function Router() {
	return (
		<BrowserRouter>
			<div>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/" component={Footer} />
			</div>
		</BrowserRouter>
	)
}