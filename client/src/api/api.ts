import { Response } from "express";
import axios, { AxiosError } from "axios";

const API_URL = "http://localhost:8000/api";

interface AxiosResponseDataMessage {

	message: string;

}

export const getUserDetails = async (token: string) => {
	//try {
		const response = await axios.get(`${API_URL}/users/profile`, {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	//} catch (err) {
	//	console.log(err);
	//}
};

export const updateUserDetails = async (userDetails: any) => {

	const response = await axios.put(`${API_URL}/users/profile`, userDetails, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${userDetails.token}`,
		},
	});
	return response.data;

};

export const signup = async (user: any) => {
	// try {
		const response = await axios.post(`${API_URL}/auth/signup`, user);
		return response.data;
	// } catch (err) {
	// 	const axiosErr = err as AxiosError;

	// 	if (axiosErr.response) {
	// 		if (axiosErr.response.status === 409) {
	// 			throw new Error("Email already exists.");
	// 		}
	// 	}
	// }
};

export const login = async (user: any) => {
	//try {
		const response = await axios.post(`${API_URL}/auth/login`, user);
		return response.data;
	// } catch (err) {
	// 	const axiosErr = err as AxiosError;

	// 	if (axiosErr.response) {
			
	// 		if (axiosErr.response.data) {
	// 			const errMessage:AxiosResponseDataMessage = axiosErr.response.data as AxiosResponseDataMessage;
	// 			throw new Error(errMessage.message);
	// 		}
	// 	}
	// }
};

export const verify = async (token: string) => {
	//try {
		const response = await axios.get(`${API_URL}/auth/verify/${token}`);
		return response.data;
	// } catch (err) {
	// 	const axiosErr = err as AxiosError;

	// 	if (axiosErr.response) {
	// 		if (axiosErr.response.status === 401) {
	// 			throw new Error("Invalid token. Please try again.");
	// 		}
	// 	}
	// }
};

export const api = {

	login,
	signup,
	verify,
	getUserDetails,
	updateUserDetails

}