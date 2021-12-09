import userService from "../../services/UserService";

export const USER_ACTIONS = {
	GET_USERS: "GET_USERS",
	GET_USER_BY_ID: "GET_USER_BY_ID",
	PERSIST_USER: "PERSIST_USER",
	DELETE_USER: "DELETE_USER",
	LOGIN_SUCESS: "LOGIN_SUCESS",
	LOGIN_FAILURE: "LOGIN_FAILURE",
	SET_LOADING: "SET_LOADING",
};

export function getUsers() {
	return (dispatch, getState) => {
		console.log(getState());
		userService.getUsers().then((response) =>
			dispatch({
				type: USER_ACTIONS.GET_USERS,
				content: response.data.result,
			})
		);
	};
}

export function getUserById(id) {
	return (dispatch) => {
		userService.getUserById(id).then((response) =>
			dispatch({
				type: USER_ACTIONS.GET_USER_BY_ID,
				content: response.data.result.shift(),
			})
		);
	};
}

export function persistUser(user) {
	return (dispatch) => {
		userService.persistUser(user).then((response) =>
			dispatch({
				type: USER_ACTIONS.PERSIST_USER,
				content: response.data.result.shift(),
			})
		);
	};
}

export function login(email, password) {
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {userService.login(email, password).then((response) => {
				if (response.status === 200) {
					dispatch({
						type: USER_ACTIONS.LOGIN_SUCESS,
						content: response.data.result.shift(),
					});
					resolve()
				} else {
					dispatch({
						type: USER_ACTIONS.LOGIN_FAILURE,
						content: {token: '', type:''},
					});
					reject('Login failed')
				}
			})}, 3000);
		});
	};
}

export function setLoading(loading) {
	return (dispatch) => {
		dispatch({ 
			type: USER_ACTIONS.SET_LOADING, 
			content: loading 
		});
	};
}
