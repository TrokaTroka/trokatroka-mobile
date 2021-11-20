import api from "axios";

const API_URL = "http://localhost:3004/book";

const saveBook = (book) => {
	if (book.id !== undefined) return api.post(API_URL, book);
	else return api.put(`${API_URL}`, book);
};

const getBookById = (id) => {
	return api.get(`${API_URL}/${id}`);	
}

const deleteBookById = (id) => {
	return api.delete(`${API_URL}/${id}`);
}

const getBooks = () => {
	return api.get(API_URL);
}

export default { saveBook, getBookById, deleteBookById, getBooks };