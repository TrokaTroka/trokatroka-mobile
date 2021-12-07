import { USER_ACTIONS } from "../actions/UserAction";

const userState = {
	userList: [],
	userItem: {},
};

export default function userReducer(state = userState, dispatch) {
	switch (dispatch.type) {
		case USER_ACTIONS.GET_USERS:
			return {
				...state,
				userList: dispatch.content,
			};
		case USER_ACTIONS.GET_USER_BY_ID:
			return {
				...state,
				userItem: dispatch.content,
			};
		case USER_ACTIONS.PERSIST_USER:
			return {
				...state,
				userList: [...state.userList, dispatch.content],
			};
		case USER_ACTIONS.DELETE_USER:
			return {
				...state,
				userList: state.userList.filter(
					(user) => user.id !== dispatch.content.id
				),
			};
		default:
			return state;
	}
}
