import React, { useState, useContext, useEffect } from 'react';
import ResidenceContext from '../../context/residence/residenceContent';

const ResidenceForm = () => {
	const residenceContext = useContext(ResidenceContext);
	const { addResidence, updateResidence, clearCurrent, current } = residenceContext;
	useEffect(
		() => {
			if (current !== null) {
				setResidence(current);
			}
			else {
				setResidence({
					type        : 'Rent',
					title       : '',
					price       : '',
					bedrooms    : '',
					bathrooms   : '',
					sqft        : '',
					location    : '',
					description : ''
				});
			}
		},
		[
			residenceContext,
			current
		]
	);

	const [
		residence,
		setResidence
	] = useState({
		type        : 'Rent',
		title       : '',
		price       : '',
		bedrooms    : '',
		bathrooms   : '',
		sqft        : '',
		location    : '',
		description : ''
	});

	const { type, title, price, bedrooms, bathrooms, sqft, location, description } = residence;

	const onChange = (e) => setResidence({ ...residence, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		if (current === null) {
			addResidence(residence);
		}
		else {
			updateResidence(residence);
		}
		clearAll();
	};
	const clearAll = () => {
		clearCurrent();
	};
	return (
		<form onSubmit={onSubmit}>
			<h1>Add Your Property</h1>
			<input type="text" placeholder="Title" name="title" value={title} onChange={onChange} />
			<input type="text" placeholder="Price" name="price" value={price} onChange={onChange} />
			<input type="text" placeholder="Bedrooms" name="bedrooms" value={bedrooms} onChange={onChange} />
			<input type="text" placeholder="Bathrooms" name="bathrooms" value={bathrooms} onChange={onChange} />
			<input type="text" placeholder="SqFt" name="sqft" value={sqft} onChange={onChange} />
			<input type="text" placeholder="Location" name="location" value={location} onChange={onChange} />
			<input type="radio" name="type" value="rent" checked={type === 'rent'} onChange={onChange} /> Rent {' '}
			<input type="radio" name="type" value="sell" checked={type === 'sell'} onChange={onChange} /> Sell {' '}
			<textarea
				name="description"
				placeholder="Description"
				value={description}
				onChange={onChange}
				cols="20"
				rows="5"
			/>
			<div>
				<input
					type="submit"
					value={current ? 'Update Residence' : 'Add Residence'}
					className="btn btn-primary btn-block"
				/>
			</div>
			{current && (
				<div>
					<button className="btn btn-light btn-block" onClick={clearAll}>
						{' '}
						Clear
					</button>
				</div>
			)}
		</form>
	);
};

export default ResidenceForm;
