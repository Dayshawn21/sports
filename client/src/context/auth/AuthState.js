import React, { useReducer } from 'react';
import axios from 'axios';
import setAuthToken from '../../uitles/setAuthToken';

import AuthContext from './AuthContext';
import authReducer from './AuthReducer';
import {
	REGISTER_SUCCESS,
	REGISTER_FAILED,
	USER_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	CLEAR_ERROR
} from '../type';

const AuthState = (props) => {
	const initialState = {
		token           : localStorage.getItem('token'),
		isAuthenticated : null,
		loading         : true,
		user            : null,
		error           : null
	};

	const [
		state,
		dispatch
	] = useReducer(authReducer, initialState);

	// Load User
	const loadUser = async () => {
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}

		try {
			const res = await axios.get('./api/auth');

			dispatch({ type: USER_LOADED, payload: res.data });
		} catch (err) {
			dispatch({ type: AUTH_ERROR });
		}
	};

	// Register User
	const register = async (formData) => {
		const config = {
			header : {
				'Content-Type' : 'application/json'
			}
		};

		try {
			const res = await axios.post('/api/user', formData, config);

			dispatch({
				type    : REGISTER_SUCCESS,
				payload : res.data
			});

			loadUser();
		} catch (err) {
			dispatch({
				type    : REGISTER_FAILED,
				payload : err.response.data.msg
			});
		}
	};

	// login User
	const login = async (formData) => {
		const config = {
			header : {
				'Content-Type' : 'application/json'
			}
		};

		try {
			const res = await axios.post('/api/auth', formData, config);

			dispatch({
				type    : LOGIN_SUCCESS,
				payload : res.data
			});

			loadUser();
		} catch (err) {
			dispatch({
				type    : LOGIN_FAIL,
				payload : err.response.data.msg
			});
		}
	};

	// logout
	const logout = () => console.log('logout ');
	// clear error
	const clearError = () =>
		dispatch({
			type : CLEAR_ERROR
		});

	return (
		<AuthContext.Provider
			value={{
				token           : state.token,
				isAuthenticated : state.isAuthenticated,
				loading         : state.loading,
				user            : state.user,
				error           : state.error,
				register,
				login,
				logout,
				clearError,
				loadUser
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthState;
