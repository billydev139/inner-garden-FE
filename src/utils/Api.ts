import axios from 'axios';
import { config } from './helpers/EndPoints';

const api = axios.create({
    baseURL: config.BASE_URL,
});
api.interceptors.request.use(config => {
    const accessToken = window.localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
});
export default api;