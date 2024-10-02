import axios from 'axios';
const DEPLOYED = 'https://codewithzosh.cyclic.app/'
const LOCALHOST = 'http://fashion.ap-south-1.elasticbeanstalk.com'

export const API_BASE_URL = LOCALHOST;

const api = axios.create({
    baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
