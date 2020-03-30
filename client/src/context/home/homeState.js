import React, { useReducer } from 'react';
import HomeContext from './homeContext';
import homeReducer from './homeReducer';
import IMG1 from '../../images/house1.jpg';
import IMG2 from '../../images/house2.jpg';
import IMG3 from '../../images/house3.jpg';
import IMG4 from '../../images/house4.jpg';

const HomeState = (props) => {
	const initialState = {
		lisitings : [
			{
				img       : IMG1,
				type      : 'Rent',
				price     : '$1000',
				address   : '2000 Mark Street',
				city      : 'Houston Texas',
				bedrooms  : '2',
				bathrooms : '1',
				sqft      : '250sqft'
			},
			{
				type      : 'Sell',
				img       : IMG2,
				price     : '$1400',
				address   : '100 Sponner St',
				city      : 'Chicago IL',
				bedrooms  : '3',
				bathrooms : '2',
				sqft      : '250sqft'
			},
			{
				type      : 'Rent',
				img       : IMG3,
				price     : '$2000',
				address   : '123 Fake Street',
				city      : 'Dallas Texas',
				bedrooms  : '3',
				bathrooms : '2',
				sqft      : '250sqft'
			},
			{
				type      : 'Sell',
				img       : IMG4,
				price     : '$1200',
				address   : '4545 Springfriend Rd',
				city      : 'Boston  MA',
				bedrooms  : '2',
				bathrooms : '2',
				sqft      : '1000sqft'
			}
		]
	};
	const [
		state,
		dispatch
	] = useReducer(homeReducer, initialState);

	return <HomeContext.Provider value={{ listings: state.lisitings }}>{props.children}</HomeContext.Provider>;
};

export default HomeState;
