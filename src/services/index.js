/* eslint-disable no-alert */
import axios from 'axios';

const baseURL = process.env.TO_DO_LIST_API_BASE_URL;
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

service.interceptors.request.use((config) => config);
// const token = sessionStorage.getItem('token');
// config.headers.Authorization = `Bearer ${token}`;
export { service };
