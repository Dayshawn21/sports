import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
import ResidenceContext from '../../context/residence/residenceContent';

function Navbar() {
	const authContext = useContext(AuthContext);
	const residenceContext = useContext(ResidenceContext);

	const { isAuthenticated, logout, user } = authContext;
	const { clearResidence } = residenceContext;

	const onLogout = () => {
		logout();
		clearResidence();
	};

	const authLinks = (
		<Fragment>
			<li> Hello {user && user.name}</li>
			<li>
				<a onClick={onLogout} href="/">
					<i className="fas fa-sign-out-alt" /> <span className="hide-sm"> Logout</span>
				</a>
			</li>
		</Fragment>
	);
	const guestLinks = (
		<Fragment>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
			<li>
				<Link to="/register">Register</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
		</Fragment>
	);
	return (
		<div className="navbar bg-primary">
			<h1>Dayshawn Real Estate</h1>

			<ul>{isAuthenticated ? authLinks : guestLinks}</ul>
		</div>
	);
}

export default Navbar;
