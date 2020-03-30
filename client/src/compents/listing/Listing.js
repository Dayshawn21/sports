import React, { Fragment, useContext } from 'react';
import ListingItem from './ListingItem';
import HomeContext from '../../context/home/homeContext';

const Listing = () => {
	const homeContext = useContext(HomeContext);

	const { listings } = homeContext;

	return <div className="grid-3 container">{listings.map((listing) => <ListingItem listing={listing} />)}</div>;
};

export default Listing;
