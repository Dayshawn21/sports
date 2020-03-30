import React from 'react';

export const ListingItem = ({ listing }) => {
	const { img, type, price, address, city, bedrooms, bathrooms, sqft } = listing;
	return (
		<div className="card">
			<img src={img} alt="" />
			<div className="card-content">{type}</div>
			<div className="container">
				<p>{price}</p>
				<p>
					{address} {city}
				</p>
				<p>{bedrooms}</p>
				<p>{bathrooms}</p>
			</div>
		</div>
	);
};

export default ListingItem;
