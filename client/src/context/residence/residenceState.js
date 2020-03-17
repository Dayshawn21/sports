import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ResidenceContext from './residenceContent';
import residenceReducer from './residenceReducer';
import {
	ADD_RESIDENCE,
	DELETE_RESIDENCE,
	UPDATE_RESIDENCE,
	SET_CURRENT,
	CLEAR_FILTER,
	CLEAR_CURRENT,
	FILTER_RESIDENCE
} from '../type';

const ResidenceState = (props) => {
	const initialState = {
		residences : [
			{
				id          : 1,
				title       : 'Beauty Residence',
				price       : '$1000',
				bedrooms    : '2',
				bathrooms   : '1',
				sqft        : '920sqft',
				location    : 'Houston',
				type        : 'Rent',
				description : 'dsdsfsdfsd jkdsfdsh fdsjkfkdslsfhs fsfsdfsd'
			}
		],
		current  : null,
		filtered : null
		
	};

	const [
		state,
		dispatch
	] = useReducer(residenceReducer, initialState);

	const addResidence = (residence) => {
		residence.id = uuidv4();
		dispatch({ type: ADD_RESIDENCE, payload: residence });
	};

	const deleteResidence = (id) => {
		dispatch({ type: DELETE_RESIDENCE, payload: id });
	};
	const setCurrent = (residence) => {
		dispatch({ type: SET_CURRENT, payload: residence });
	};

	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

	const updateResidence = (residence) => {
		dispatch({ type: UPDATE_RESIDENCE, payload: residence });
	};

	const filterResidence = (text) => {
		dispatch({ type: FILTER_RESIDENCE, payload: text });
	};

	// Clear Filter

	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER });
	};

	return (
		<ResidenceContext.Provider
			value={{
				residences       : state.residences,
				current         : state.current,
				filtered        : state.filtered,
				addResidence,
				deleteResidence,
				updateResidence,
				clearCurrent,
				clearFilter,
				setCurrent,
				filterResidence
			}}
		>
			{props.children}
		</ResidenceContext.Provider>
	);
};

export default ResidenceState;
