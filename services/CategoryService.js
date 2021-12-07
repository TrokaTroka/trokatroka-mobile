import api from "axios";

const API_URL = "https://trokatroka.com:2096/category";

const persistCategory = (category) => {
	if (category.id !== undefined) return api.post(API_URL, category);
	else return api.put(`${API_URL}`, category);
};

const getCategoryById = (id) => {
	return api.get(`${API_URL}/${id}`);	
}

const deleteCategoryById = (id) => {
	return api.delete(`${API_URL}/delete/${id}`);
}

const getCategories = () => {
	return api.get(`${API_URL}/all`);
}

export default { persistCategory, getCategoryById, deleteCategoryById, getCategories };