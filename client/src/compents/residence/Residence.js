import React, { useContext, Fragment } from 'react';
import ResidenceContext from '../../context/residence/residenceContent';
import ResidenceItem from './ResidenceItem';

const Residence = () => {
	const residenceContext = useContext(ResidenceContext);

	const { residences } = residenceContext;
	if (residences.length === 0) {
		return <h4>Please Enter a Residence </h4>;
	}
	return (
		<Fragment>
			{residences.map((residence) => <ResidenceItem key={residence._id} residence={residence} />)}
		</Fragment>
	);
};

export default Residence;
