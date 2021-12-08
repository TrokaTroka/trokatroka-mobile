import api from "axios";
import authHeader from "./AuthHeader";
const API_URL = "https://trokatroka.com:2096/book";


const saveBook = (book, {userAuth}) => {
	if (book.id !== undefined) return api.post(API_URL, authHeader(userAuth));
	else return api.put(`${API_URL}`, book, authHeader(userAuth));
};

const getBookById = (id, {userAuth}) => {
	return api.get(`${API_URL}/${id}`, authHeader(userAuth));	
}

const deleteBookById = (id, {userAuth}) => {
	return api.delete(`${API_URL}/${id}`, authHeader(userAuth));
}

const getBooks = ({userAuth}) => {
	return api.get(`${API_URL}/all`, authHeader(userAuth));
}

const getBooksByIdsCategory = (ids, {userAuth}) => {
	return ids.length > 0 ? api.post(`${API_URL}/category/all/`, ids, authHeader(userAuth)) : api.get(`${API_URL}/all`, authHeader(userAuth));
}

export default { saveBook, getBookById, deleteBookById, getBooks, getBooksByIdsCategory };