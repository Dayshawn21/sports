import React, { useContext, useState } from 'react';
import ResidenceContext from '../../context/residence/residenceContent';
import HomeFormStyle from './homeform.module.scss';

const HomeForm = () => {
	const residenceContext = useContext(ResidenceContext);

	const [
		residence,
		setResidence
	] = useState({
		type      : 'Rent',
		price     : ' ',
		bedrooms  : ' ',
		bathrooms : '',
		location  : ''
	});

	const { type, price, bedrooms, bathrooms, location } = residence;

	const onChange = (e) => setResidence({ ...residence, [e.target.name]: e.target.value });
	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={onSubmit} className={HomeFormStyle.card}>
			<h1>Search Your Property</h1>
			<select name="type" id="type">
				<option name="rent" id="rent" value={type}>
					Rent
				</option>
				<option name="sell" id="sell" value={type}>
					Sell
				</option>
			</select>
			<input type="text" placeholder="Price" name="price" value={price} onChange={onChange} />
			<input type="text" placeholder="Bedrooms" name="bedrooms" value={bedrooms} onChange={onChange} />
			<input type="text" placeholder="Bathrooms" name="bathrooms" value={bathrooms} onChange={onChange} />
			<input type="text" placeholder="Location" name="location" value={location} onChange={onChange} />
			<input type="submit" value="Search" className="btn btn-primary btn-block" />
		</form>
	);
};

export default HomeForm;
