import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './compents/layout/Nav';
import Home from './compents/pages/Home';
import Admin from './compents/pages/Admin';
import ResidenceState from './context/residence/residenceState';
import AuthState from './context/auth/AuthState';

const App = () => {
	return (
		<AuthState>
		<ResidenceState>
		<Router>
			<Fragment>
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/admin" component={Admin} />
				</Switch>
			</Fragment>
		</Router>
		</ResidenceState>
		</AuthState>
	);
};

export default App;
