import { service } from '.';

export default {
  getAll: (payload) => service.get('tasks', payload),
  add: (payload) => service.post('tasks', payload)
};
