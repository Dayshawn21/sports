import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './compents/layout/Nav';
import Home from './compents/pages/Home';
import About from './compents/pages/About';
import Admin from './compents/pages/Admin';
import ResidenceState from './context/residence/residenceState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/alertState';
import Register from './compents/auth/Register';
import Login from './compents/auth/Login';
import Alert from './compents/layout/Alert';
import setAuthToken from './uitles/setAuthToken';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	return (
		<AuthState>
			<ResidenceState>
				<AlertState>
					<Router>
						<Fragment>
							<Nav />
							<Alert />
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/about" component={About} />
								<Route exact path="/admin" component={Admin} />
								<Route exact path="/register" component={Register} />
								<Route exact path="/login" component={Login} />
							</Switch>
						</Fragment>
					</Router>
				</AlertState>
			</ResidenceState>
		</AuthState>
	);
};

export default App;
