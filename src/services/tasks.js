import { service } from '.';

export default {
  getAll: (payload) => service.get('tasks', payload),
  add: (payload) => { console.log(payload); service.post('tasks', payload); }
};
