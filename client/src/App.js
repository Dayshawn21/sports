import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './compents/layout/Nav';
import Home from './compents/pages/Home';
import ResidenceState from './context/residence/residenceState';

const App = () => {
	return (
		<Router>
			<Fragment>
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</Fragment>
		</Router>
	);
};

export default App;
