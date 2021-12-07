import bookService from "../../services/BookService";

export const BOOK_ACTIONS = {
	GET_BOOKS: "GET_BOOKS",
	GET_BOOK_BY_ID: "GET_BOOK_BY_ID",
	SAVE_BOOK: "SAVE_BOOK",
	DELETE_BOOK: "DELETE_BOOK",
	FILTER_BOOK: "FILTER_BOOK",
};

export function getBooks(auth) {
	return (dispatch) => {
		bookService.getBooks(auth).then((response) =>
			dispatch({
				type: BOOK_ACTIONS.GET_BOOKS,
				content: response.data.result,
			})
		);
	};
}

export function getBookById(id, auth) {
	return (dispatch) => {
		bookService.getBookById(id, auth).then((response) =>
			dispatch({
				type: BOOK_ACTIONS.GET_BOOK_BY_ID,
				content: response.data.result.shift(),
			})
		);
	};
}

export function saveBook(book, auth) {
    return (dispatch) => {
        bookService.saveBook(book, auth).then((response) =>
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
