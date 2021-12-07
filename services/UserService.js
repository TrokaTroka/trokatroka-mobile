import api from "axios";

const API_URL = "https://trokatroka.com:2096/user";

const persistUser = (user) => {
	if (user.id !== undefined) return api.post(API_URL, user);
	else return api.put(`${API_URL}`, user);
};

const getUserById = (id) => {
	return api.get(`${API_URL}/${id}`);	
}

const deleteUserById = (id) => {
	return api.delete(`${API_URL}/delete/${id}`);
}

const getUsers = () => {
	return api.get(`${API_URL}/all`);
}

export default { persistUser, getUserById, deleteUserById, getUsers };