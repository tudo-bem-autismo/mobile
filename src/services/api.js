import axios from 'axios';

const api = axios.create({
    baseURL: "http://10.107.144.30:3000"

})


export default api;
