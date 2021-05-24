import types from '../../../constants/action-types';

export const setToken = (payload) => ({ type: types.AUTH_SET_TOKEN, payload });
export const logout = () => ({ type: types.AUTH_LOGOUT });
export const setError = (payload) => ({ type: types.AUTH_ERROR, payload });
export const setSuccess = (payload) => ({ type: types.AUTH_SUCCESS, payload });
export const login = (payload, success) => ({ type: types.AUTH_LOGIN, payload, success });
