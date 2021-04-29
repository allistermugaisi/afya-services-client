import axios from 'axios';
import {
	AUTH_USER,
	LOGIN_SUCCESS,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	VALIDATE_USER,
} from '../constants/types';
import { USER_AUTH, USERS_AUTH, USERS_SERVER } from './config';

// Setup config headers and token

export const tokenConfig = () => {
	// Get token from localStorage
	const token = localStorage.getItem('token');
	// console.log(token);

	// Headers
	const config = {
		headers: {
			'content-Type': 'application/json',
		},
	};

	// if token, add to headers
	if (token) {
		config.headers['Authorization'] = `Bearer ${token}`;
	}

	return config;
};

// Check token and Auth user

export const auth = async () => {
	const response = await axios.get(`${USER_AUTH}`, tokenConfig());
	const data = await response.data;

	return {
		type: AUTH_USER,
		payload: data,
	};
};

// Register User

export const registerUser = async ({
	email,
	password,
	password_confirmation,
}) => {
	const body = {
		email,
		password,
		password_confirmation,
	};

	const response = await axios.post(`${USERS_SERVER}`, body);
	const data = await response.data;

	return {
		type: REGISTER_SUCCESS,
		payload: data,
	};
};

// Login User

export const loginUser = async ({ login_id, password }) => {
	const body = { login_id, password };

	const response = await axios.post(`${USERS_AUTH}`, body);

	const data = await response.data;

	return {
		type: LOGIN_SUCCESS,
		payload: data,
	};
};

// Logout User
export const logOut = () => {
	return {
		type: LOGOUT_SUCCESS,
	};
};
