/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
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
  const access_token = sessionStorage.getItem('access_token');
  config.headers.Authorization = `Bearer ${access_token}`;
  return config;
});

export { service };
