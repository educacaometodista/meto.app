import axios from 'axios';

const api = axios.create({
  baseURL: 'http://167.172.246.172:3334',
});

export default api;
