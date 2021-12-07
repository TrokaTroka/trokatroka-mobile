import {CATEGORY_ACTIONS} from '../actions/CategoryAction';

const categoryState = {
    categoryList: [],
    categoryItem: {},
    categoriesSelected: [],
}

export default function categoryReducer(state = categoryState, dispatch) {
    switch (dispatch.type) {
        case CATEGORY_ACTIONS.GET_CATEGORIES:
            return {
                ...state,
                categoryList: dispatch.content,
            };
        case CATEGORY_ACTIONS.GET_CATEGORY_BY_ID:
            return {
                ...state,
                categoryItem:  dispatch.content,
            };
        case CATEGORY_ACTIONS.TOGGLE_CATEGORY:
            return {
                ...state,
                categoriesSelected: state.categoriesSelected ? state.categoriesSelected.includes(dispatch.content) ? state.categoriesSelected.filter((category) => category != dispatch.content) : [...state.categoriesSelected, dispatch.content] : [dispatch.content],
            };
        default:
            return state;
    }
}