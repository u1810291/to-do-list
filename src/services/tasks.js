import { service } from '.';

export default {
  getAll: (payload) => service.get(`?developer=test${payload}`),
  add: (payload) => service.post('tasks', payload)
};
