import axios from 'axios';

const api = axios.create({
    // baseURL: "http://192.168.2.104:3000"
    baseURL: "https://back-tudo-bem-autismo.azurewebsites.net"
});

export default api;