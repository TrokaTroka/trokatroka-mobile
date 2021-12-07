import authService from "../../services/AuthService";

export const AUTH_ACTIONS = {
	LOGIN_SUCESSFUL: "LOGIN_SUCESSFUL",
    LOGIN_FAILED: "LOGIN_FAILED",
};

export function login(email, password) {
	return (dispatch) => {
        return new Promise((resolve, reject) => {
            authService.login(email, password).then((response) => {
                if(response.status === 200) {
                    dispatch({
                        type: AUTH_ACTIONS.LOGIN_SUCESSFUL,
                        content: response.data,
                        isAuthenticated: true
                    });
                    resolve();
                } else {
                    dispatch({
                        type: AUTH_ACTIONS.LOGIN_FAILED,
                        content: response.data,
                        isAuthenticated: false
                    });
                    reject();
                }
            })
        })
	};
}
