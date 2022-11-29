import axios from 'axios';

const api = axios.create({
    baseURL: "https://back-tudo-bem-autismo.azurewebsites.net:3000"
});

export default api;