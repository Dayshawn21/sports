import React, { useContext, Fragment, useEffect } from 'react';
import ResidenceContext from '../../context/residence/residenceContent';
import ResidenceItem from './ResidenceItem';
import Spinner from '../layout/Spinner';

const Residence = () => {
	const residenceContext = useContext(ResidenceContext);

	const { residences, getResidence, loading } = residenceContext;
	useEffect(() => {
		getResidence();
		// eslint-disable-next-line
	}, []);

	if (residences !== null && residences.length === 0 && !loading) {
		return <h4>Please Enter a Residence </h4>;
	}
	return (
		<Fragment>
			{residences !== null && !loading ? (
				<div>{residences.map((residence) => <ResidenceItem key={residence._id} residence={residence} />)}</div>
			) : (
				<Spinner />
			)}
		</Fragment>
	);
};

export default Residence;
