import { USER_ACTIONS } from "../actions/UserAction";

const userState = {
	userList: [],
	userItem: {},
	userAuth: null,
	isLoading: false,
};

export default function userReducer(state = userState, dispatch) {
	switch (dispatch.type) {
		case USER_ACTIONS.GET_USERS:
			return {
				...state,
				userList: dispatch.content,
				isLoading: false,
			};
		case USER_ACTIONS.GET_USER_BY_ID:
			return {
				...state,
				userItem: dispatch.content,
				isLoading: false,
			};
		case USER_ACTIONS.PERSIST_USER:
			return {
				...state,
				userList: [...state.userList, dispatch.content],
				isLoading: false,
			};
		case USER_ACTIONS.DELETE_USER:
			return {
				...state,
				userList: state.userList.filter(
					(user) => user.id !== dispatch.content.id
				),
				isLoading: false,
			};
		case USER_ACTIONS.LOGIN_SUCESS:
			return {
				...state,
				userAuth: dispatch.content,
				isLoading: false,
			};
		case USER_ACTIONS.LOGIN_FAILURE:
			return {
				...state,
				userAuth: dispatch.content,
				isLoading: false
			};
		case USER_ACTIONS.SET_LOADING:
			return {
				...state,
				isLoading: dispatch.content,
			};
		default:
			return state;
	}
}
