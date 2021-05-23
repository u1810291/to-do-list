import { service } from '.';

export default {
  getAll: (payload) => service.get('tasks', payload)
};
