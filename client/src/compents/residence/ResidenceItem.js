import React, { useContext } from 'react';
import ResidenceContext from '../../context/residence/residenceContent';

const ResidenceItem = ({ residence }) => {
	const residenceContext = useContext(ResidenceContext);
	const { deleteResidence, setCurrent, clearCurrent } = residenceContext;

	const { _id, title, bedrooms, bathrooms, sqft, type, description, location, price } = residence;

	const onDelete = () => {
		deleteResidence(_id);
		clearCurrent();
	};
	return (
		<div className="card bg-light">
			<h1>{title}</h1>
			<h1>{price}</h1>
			<h1>{bedrooms}</h1>
			<h1>{bathrooms}</h1>
			<h1>{sqft}</h1>
			<h1>{location}</h1>

			<h1>{type}</h1>
			<h1>{description}</h1>

			<p>
				<button className="btn btn-dark btn-sm" onClick={() => setCurrent(residence)}>
					Edit{' '}
				</button>
				<button className="btn btn-danger btn-sm" onClick={onDelete}>
					Delete{' '}
				</button>
			</p>
		</div>
	);
};

export default ResidenceItem;
