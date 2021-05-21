import { service } from '.';

export default {
  login: (data) => service.post('login', data)
};
