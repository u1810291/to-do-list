import types from '../../../constants/action-types';

export const setTotal = (payload) => ({ type: types.SET_TASKS_TOTAL, payload });
export const setError = (payload) => ({ type: types.SET_TASKS_ERROR, payload });
export const setLoading = (payload) => ({ type: types.SET_TASKS_LOADING, payload });
export const setData = (payload) => ({ type: types.SET_TASKS_DATA, payload });
export const setSuccess = (payload) => ({ type: types.SET_TASKS_ADD_SUCCESS, payload });

export const fetchData = (payload, success) => ({
  type: types.FETCH_TASKS,
  payload,
  success
});

export const addTask = (payload, success) => ({
  type: types.ADD_TASKS,
  payload,
  success
});

export const editTask = (payload, success) => ({
  type: types.EDIT_TASKS,
  payload,
  success
});
