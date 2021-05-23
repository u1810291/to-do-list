import types from '../../../constants/action-types';

export const setTotal = (payload) => ({ type: types.SET_TASKS_TOTAL, payload });
export const setError = (payload) => ({ type: types.SET_TASKS_ERROR, payload });
export const setLoading = (payload) => ({ type: types.SET_TASKS_LOADING, payload });
export const setData = (payload) => ({ type: types.SET_TASKS_DATA, payload });

export const fetchData = (payload, success) => ({
  type: types.FETCH_TASKS,
  payload,
  success
});
