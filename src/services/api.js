import axios from 'axios';

const api = axios.create({
    baseURL: "http://10.107.134.26:3000"

});

export default api;