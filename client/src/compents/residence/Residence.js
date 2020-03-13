import { React, useContext } from 'react';
import ResidenceItem from './ResidenceItem';
import ResidenceContext from '../../context/residence/residenceContent';

function Residence() {
	const residenceContent = useContext(ResidenceContext);

	const { residences, filtered } = residenceContent;

	if (residences.lenght === 0) {
		return <h4>Enter a Residence</h4>;
	}
	return <div>{residences.map((residence) => <h1>{residence.title}</h1>)}</div>;
}

export default Residence;
