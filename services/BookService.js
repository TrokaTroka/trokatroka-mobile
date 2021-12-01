import api from "axios";

const API_URL = "https://trokatroka.com:2096/book";

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
	return api.get(`${API_URL}/all`);
}

export default { saveBook, getBookById, deleteBookById, getBooks };