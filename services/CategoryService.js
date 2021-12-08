import api from "axios";
import authHeader from "./AuthHeader";
const API_URL = "https://trokatroka.com:2096/category";

const persistCategory = (category, {userAuth}) => {
	if (category.id !== undefined) return api.post(API_URL, category, authHeader(userAuth));
	else return api.put(`${API_URL}`, category, authHeader(userAuth));
};

const getCategoryById = (id, {userAuth}) => {
	return api.get(`${API_URL}/${id}`, authHeader(userAuth));	
}

const deleteCategoryById = (id, {userAuth}) => {
	return api.delete(`${API_URL}/delete/${id}`, authHeader(userAuth));
}

const getCategories = ({userAuth}) => {
	return api.get(`${API_URL}/all`, authHeader(userAuth));
}

export default { persistCategory, getCategoryById, deleteCategoryById, getCategories };