import categoryService from "../../services/CategoryService";

export const CATEGORY_ACTIONS = {
	GET_CATEGORIES: "GET_CATEGORIES",
	GET_CATEGORY_BY_ID: "GET_CATEGORY_BY_ID",
	PERSIST_CATEGORY: "PERSIST_CATEGORY",
	DELETE_CATEGORY: "DELETE_CATEGORY",
    TOGGLE_CATEGORY: "TOGGLE_CATEGORY",
};

export function getCategories() {
	return (dispatch) => {
		categoryService.getCategories().then((response) =>
			dispatch({
				type: CATEGORY_ACTIONS.GET_CATEGORIES,
				content: response.data.result,
			})
		).catch(dispatch({ type: CATEGORY_ACTIONS.GET_CATEGORIES, content: [{id: 1, name: "Comedy", description: "Teste"}, {id: 2, name: "Horror", description: "Teste"}, {id: 3, name: "Teste", description: "Teste"}] }));
	};
}

export function getCategoryById(id) {
	return (dispatch) => {
		categoryService.getCategoryById(id).then((response) =>
			dispatch({
				type: CATEGORY_ACTIONS.GET_CATEGORY_BY_ID,
				content: response.data.result.shift(),
			})
		);
	};
}

export function persistCategory(category) {
    return (dispatch) => {
        categoryService.persistCategory(category).then((response) =>
            dispatch({
                type: CATEGORY_ACTIONS.PERSIST_CATEGORY,
                content: response.data.result.shift(),
            })
        );
    };
}

export function toggleCategory(category) {
    return (dispatch) => {
        dispatch({
            type: CATEGORY_ACTIONS.TOGGLE_CATEGORY,
            content: category,
        });
    };
}
