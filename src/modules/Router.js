import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from 'src/modules/header';
import Home from 'src/modules/home';
import Footer from 'src/modules/footer';

export default function Router() {
	return (
		<BrowserRouter>
			<div>
				<Route path="/" component={Header} />
				<Route path="/" component={Home} />
				<Route path="/" component={Footer} />
			</div>
		</BrowserRouter>
	)
}