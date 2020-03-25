import {
	ADD_RESIDENCE,
	GET_RESIDENCE,
	DELETE_RESIDENCE,
	UPDATE_RESIDENCE,
	SET_CURRENT,
	CLEAR_FILTER,
	CLEAR_CURRENT,
	FILTER_RESIDENCE,
	RESIDENCE_ERROR,
	CLEAR_RESIDENCE
} from '../type';

export default (state, action) => {
	switch (action.type) {
		case GET_RESIDENCE:
			return {
				...state,
				residences : action.payload,
				loading    : false
			};
		case ADD_RESIDENCE:
			return {
				...state,
				residences : [
					...state.residences,
					action.payload
				],
				loading    : false
			};
		case UPDATE_RESIDENCE:
			return {
				...state,
				residences : state.residences.map(
					(residence) => (residence._id === action.payload._id ? action.payload : residence)
				),
				loading    : false
			};
		case DELETE_RESIDENCE:
			return {
				...state,
				residences : state.residences.filter((residence) => residence._id !== action.payload),
				loading    : false
			};
		case CLEAR_RESIDENCE:
			return {
				...state,
				residences : null,
				error      : null,
				filtered   : null,
				current    : null
			};
		case SET_CURRENT:
			return {
				...state,
				current : action.payload
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current : null
			};
		case FILTER_RESIDENCE:
			return {
				...state,
				filtered : state.contacts.filter((residence) => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return residence.name.match(regex) || residence.email.match(regex);
				})
			};
		case CLEAR_FILTER:
			return {
				...state,
				filtered : null
			};
		case RESIDENCE_ERROR:
			return {
				...state,
				error : action.payload
			};

		default:
			return state;
	}
};
