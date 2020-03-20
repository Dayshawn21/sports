import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div className="navbar bg-primary">
			<h1>Dayshawn Real Estate</h1>

			<ul>
				<li>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/admin">Admin</Link>
					<Link to="/register">Register</Link>
					<Link to="/login">Login</Link>
				</li>
			</ul>
		</div>
	);
}

export default Navbar;
