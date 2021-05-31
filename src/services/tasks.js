import { service } from '.';

export default {
  getAll: (payload) => service.get(`?developer=test${payload}`),
  add: (payload) => service.post('/create/?developer=test', payload),
  edit: (id, payload) => service.post(`/edit/${id}?developer=test`, payload)
};
