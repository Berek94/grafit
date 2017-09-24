import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import HomePage from 'src/modules/home-page';

export default function Router() {
	return (
		<BrowserRouter>
			<Route exact path="/" component={HomePage}/>
		</BrowserRouter>
	)
}