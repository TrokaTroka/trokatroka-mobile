import { AUTH_ACTIONS } from "../actions/AuthAction";

const authState = {
	auth: {
		type: '',
		token: '',
        isAuthenticated: false
	},
};

export default function authReducer(state = authState, dispatch) {
	switch (dispatch.type) {
		case AUTH_ACTIONS.LOGIN_SUCESSFUL:
			return {
                ...state,
				auth: {
					type: dispatch.content.type,
					token: dispatch.content.token,
                    isAuthenticated: true
				},
			};
        case AUTH_ACTIONS.LOGIN_FAILED:
            return {
                ...state,
                auth: {
                    type: '',
                    token: '',
                    isAuthenticated: false
                }
            };
		default:
			return state;
	}
}
