import { setUser } from "./action";

const initialState = {
	oauthProvider: null,
	user: null,
};

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case "SET_OAUTH_PROVIDER":
			return { ...state, oauthProvider: action.payload };
		case "SET_USER":
			return { ...state, user: action.payload };
		default:
			return state;
	}
}

export const registerAsync = (data) => async (dispatch) => {
	try {
		const sendToApi = await fetch(`${ process.env.API }/auth/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		const jsonResponse = await sendToApi.json();
		if (jsonResponse?.message == 'Successfully registered') {
			localStorage.setItem('authType', 'login');
		}
	} catch (error) {

	}
};

export const loginAsync = (data) => async (dispatch) => {
	try {
		const sendToApi = await fetch(`${ process.env.API }/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		const jsonResponse = await sendToApi.json();
		if (jsonResponse?.message == 'api.auth.login.success') {
			localStorage.setItem('user', JSON.stringify(jsonResponse.data.user));
			dispatch(setUser(jsonResponse.data.user));
			localStorage.setItem('token', JSON.stringify(jsonResponse.data.token));
			localStorage.setItem('user', JSON.stringify(jsonResponse.data.user));
		}
	} catch (error) {

	}
};

export const registerOauthAsync = (data) => async (dispatch) => {
	try {
		const provider = localStorage.getItem('provider');
		const sendToApi = await fetch(`${ process.env.API }/auth/oauth/${ provider }/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		const jsonResponse = await sendToApi.json();
		if (jsonResponse?.message == 'Successfully registered') {
			localStorage.setItem('authType', 'login');
		}
	} catch (error) {

	}
};

export const loginOauthAsync = (data) => async (dispatch) => {
	try {
		const provider = localStorage.getItem('provider');
		const sendToApi = await fetch(`${ process.env.API }/auth/oauth/${ provider }/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		const jsonResponse = await sendToApi.json();
		if (jsonResponse?.message == 'api.auth.oauth.success') {
			dispatch(setUser(jsonResponse.data.user));
			localStorage.setItem('token', JSON.stringify(jsonResponse.data.token));
			localStorage.setItem('user', JSON.stringify(jsonResponse.data.user));
		}
	} catch (error) {

	}
};
