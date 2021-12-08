import bookService from "../../services/BookService";

export const BOOK_ACTIONS = {
	GET_BOOKS: "GET_BOOKS",
	GET_BOOKS_BY_IDS_CATEGORY: "GET_BOOKS_BY_IDS_CATEGORY",
	GET_BOOK_BY_ID: "GET_BOOK_BY_ID",
	SAVE_BOOK: "SAVE_BOOK",
	DELETE_BOOK: "DELETE_BOOK",
	FILTER_BOOK: "FILTER_BOOK",
};

export function getBooks() {
	return (dispatch, getState) => {
		bookService.getBooks(getState().userState).then((response) =>
			dispatch({
				type: BOOK_ACTIONS.GET_BOOKS,
				content: response.data.result,
			})
		);
	};
}

export function getBooksByIdsCategory() {
	return (dispatch, getState) => {
		bookService.getBooksByIdsCategory(getState().categoryState.categoriesSelected,getState().userState).then((response) =>
			dispatch({
				type: BOOK_ACTIONS.GET_BOOKS_BY_IDS_CATEGORY,
				content: response.data.result,
			})
		);
	};
}

export function getBookById(id) {
	return (dispatch, getState) => {
		bookService.getBookById(id, getState().userState).then((response) =>
			dispatch({
				type: BOOK_ACTIONS.GET_BOOK_BY_ID,
				content: response.data.result.shift(),
			})
		);
	};
}

export function saveBook(book) {
    return (dispatch, getState) => {
        bookService.saveBook(book, getState().userState).then((response) =>
            dispatch({
                type: BOOK_ACTIONS.SAVE_BOOK,
                content: response.data,
            })
        );
    };
}

export function filterBook(field, value) {
	return {
		type: BOOK_ACTIONS.FILTER_BOOK,
		content: { field: field, value: value},
	};
}
