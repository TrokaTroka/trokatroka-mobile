import BookService from "../../services/BookService";

export const BOOK_ACTIONS = {
	GET_BOOKS: "GET_BOOKS",
	GET_BOOK_BY_ID: "GET_BOOK_BY_ID",
	SAVE_BOOK: "SAVE_BOOK",
	DELETE_BOOK: "DELETE_BOOK",
	FILTER_BOOK: "FILTER_BOOK",
};

export function getBooks() {
	return (dispatch) => {
		BookService.getBooks().then((response) =>
			dispatch({
				type: BOOK_ACTIONS.GET_BOOKS,
				content: response.data,
			})
		).catch((error) => {
			dispatch({
				type: BOOK_ACTIONS.GET_BOOKS,
				content: [{
					id: 1,
					title: 'Harry Potter',
					author: 'teste',
					description: 'Trocando pq quero outro',
					user: { name: 'Lucas', rating: 4.9 }
				},
				{
					id: 2,
					title: 'Código Limpo',
					author: 'Teste01',
					description: 'Quero ler outros livros',
					user: { name: 'Pedro', rating: 4.6 }
				},
				{
					id: 3,
					title: 'Como fazer amigos e influenciar pessoas',
					author: 'Tchola Souza',
					description: 'Trocando pq já li',
					user: { name: 'Rodrigo', rating: 2.4 }
				}]
			})
		});;
	};
}

export function getBookById(id) {
	return (dispatch) => {
		BookService.getBookById(id).then((response) =>
			dispatch({
				type: BOOK_ACTIONS.GET_BOOK_BY_ID,
				content: response.data,
			})
		);
	};
}

export function saveBook(book) {
    return (dispatch) => {
        BookService.saveBook(book).then((response) =>
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
		content: { field, value },
	};
}
