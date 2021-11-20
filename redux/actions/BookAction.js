import BookService from "../../services/BookService";

export const BOOK_ACTIONS = {
	GET_BOOKS: "GET_BOOKS",
	GET_BOOK_BY_ID: "GET_BOOK_BY_ID",
	SAVE_BOOK: "SAVE_BOOK",
	DELETE_BOOK: "DELETE_BOOK",
};

export function getBooks() {
	return (dispatch) => {
		BookService.getBooks().then((response) =>
			dispatch({
				type: BOOK_ACTIONS.GET_BOOKS,
				content: response,
			})
		);
	};
}

export function getBookById(id) {
	return (dispatch) => {
		BookService.getBookById(id).then((response) =>
			dispatch({
				type: BOOK_ACTIONS.GET_BOOK_BY_ID,
				content: response,
			})
		);
	};
}

export function saveBook(book) {
    return (dispatch) => {
        BookService.saveBook(book).then((response) =>
            dispatch({
                type: BOOK_ACTIONS.SAVE_BOOK,
                content: response,
            })
        );
    };
}
