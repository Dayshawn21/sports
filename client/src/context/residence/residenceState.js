import React, { useReducer } from 'react';
import axios from 'axios';
import ResidenceContext from './residenceContent';
import residenceReducer from './residenceReducer';
import {
	ADD_RESIDENCE,
	GET_RESIDENCE,
	CLEAR_RESIDENCE,
	DELETE_RESIDENCE,
	UPDATE_RESIDENCE,
	SET_CURRENT,
	CLEAR_FILTER,
	CLEAR_CURRENT,
	FILTER_RESIDENCE,
	RESIDENCE_ERROR
} from '../type';

const ResidenceState = (props) => {
	const initialState = {
		residences : null,
		current    : null,
		filtered   : null,
		error      : null
	};

	const [
		state,
		dispatch
	] = useReducer(residenceReducer, initialState);

	const getResidence = async () => {
		try {
			const res = await axios.get('/api/contact');
			dispatch({ type: GET_RESIDENCE, payload: res.data });
		} catch (err) {
			dispatch({
				type    : RESIDENCE_ERROR,
				payload : err.response.msg
			});
		}
	};

	const addResidence = async (residence) => {
		const config = {
			headers : {
				'Content-Type' : 'application/json'
			}
		};
		try {
			const res = await axios.post('/api/contact', residence, config);
			dispatch({ type: ADD_RESIDENCE, payload: res.data });
		} catch (err) {
			dispatch({
				type    : RESIDENCE_ERROR,
				payload : err.response.msg
			});
		}
	};

	const deleteResidence = async (id) => {
		try {
			await axios.delete(`/api/contact/${id}`);
			dispatch({ type: DELETE_RESIDENCE, payload: id });
		} catch (err) {
			dispatch({
				type    : RESIDENCE_ERROR,
				payload : err.response.msg
			});
		}
	};
	const updateResidence = async (residence) => {
		const config = {
			headers : {
				'Content-Type' : 'application/json'
			}
		};
		try {
			const res = await axios.put(`/api/contact/${residence._id}`, residence, config);
			dispatch({ type: UPDATE_RESIDENCE, payload: res.data });
		} catch (err) {
			dispatch({
				type    : RESIDENCE_ERROR,
				payload : err.response.msg
			});
		}
	};

	const clearResidence = () => {
		dispatch({ type: CLEAR_RESIDENCE });
	};
	const setCurrent = (residence) => {
		dispatch({ type: SET_CURRENT, payload: residence });
	};

	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
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
				residences      : state.residences,
				current         : state.current,
				filtered        : state.filtered,
				error           : state.error,
				addResidence,
				deleteResidence,
				updateResidence,
				clearCurrent,
				clearFilter,
				setCurrent,
				filterResidence,
				getResidence,
				clearResidence
			}}
		>
			{props.children}
		</ResidenceContext.Provider>
	);
};

export default ResidenceState;
