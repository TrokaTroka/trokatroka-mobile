import api from "axios";

const API_URL = "https://trokatroka.com:2096/book";
const config = ({type, token}) => ({headers: { Authorization: `${type} ${token}` }});

const saveBook = (book, auth) => {
	if (book.id !== undefined) return api.post(API_URL, book);
	else return api.put(`${API_URL}`, book, config(auth));
};

const getBookById = (id, auth) => {
	return api.get(`${API_URL}/${id}`, config(auth));	
}

const deleteBookById = (id, auth) => {
	return api.delete(`${API_URL}/${id}`, config(auth));
}

const getBooks = (auth) => {
	return api.get(`${API_URL}/all`, config(auth));
}

export default { saveBook, getBookById, deleteBookById, getBooks };