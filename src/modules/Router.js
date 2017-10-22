import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from 'src/modules/header';
import Home from 'src/modules/home';
import Projects from 'src/modules/projects'
import Footer from 'src/modules/footer';

export default function Router() {
	return (
		<BrowserRouter>
			<div>
				<Route path="/" component={Header} />
				<Route exact path="/" component={Home} />
				<Route path="/projects" component={Projects} />
				<Route path="/" component={Footer} />
			</div>
		</BrowserRouter>
	)
}