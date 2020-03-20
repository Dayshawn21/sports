import React, { useContext, useEffect } from 'react';
import Residence from '../residence/Residence';
import ResidenceForm from '../residence/ResidenceForm';
import AuthContext from '../../context/auth/AuthContext';

const Admin = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);
	return (
		<div className="grid-2">
			<div>
				<ResidenceForm />
			</div>
			<div>
				<Residence />
			</div>
		</div>
	);
};

export default Admin;
