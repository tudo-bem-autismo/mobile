import axios from 'axios';

const api = axios.create({
    baseURL: "https://back-tudo-bem-autismo.azurewebsites.net"
});

export default api;