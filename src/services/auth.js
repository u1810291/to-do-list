import { service } from '.';

export default {
  login: (data) => { console.log(data); service.post('/login', data); }
};
