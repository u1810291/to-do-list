/* eslint-disable no-param-reassign */
/* eslint-disable no-alert */
import axios from 'axios';

const baseURL = process.env.REACT_APP_SERVICE_URL;
const service = axios.create({ baseURL });

service.interceptors.response.use(
  (res) => res,
  (error) => {
    const status = error.response ? error.response.status : null;
    if (parseInt(status, 10) === 401) {
      alert('Login or password is incorrect');
    }
    return Promise.reject(error);
  }
);

service.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (typeof token === 'string' && config.method === 'post') config.headers.Authorization = `Bearer ${token}`;
  return config;
});
export { service };
