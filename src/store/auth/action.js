export const setOauthProvider = (data) => {
	return (dispatch) => {
		return dispatch({
			type: 'SET_OAUTH_PROVIDER',
			payload: data
		});
	};
};

export const setUser = (data) => {
	return (dispatch) => {
		return dispatch({
			type: 'SET_USER',
			payload: data
		});
	};
};