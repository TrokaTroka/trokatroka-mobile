import api from "axios";

const API_URL = "https://trokatroka.com:2096/auth";

const login = (email, password) => {
    return api.post(`${API_URL}`, {email: email, password: password});
}


export default {login};