/* eslint-disable camelcase */
import types from '../../../constants/action-types';

const defaultState = {
  token: localStorage.getItem('token'),
  error: '',
  success: ''
};

const map = {
  [types.AUTH_LOGOUT]: (state) => {
    localStorage.removeItem('token');
    return {
      ...state,
      token: ''
    };
  },
  [types.AUTH_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload
  }),
  [types.AUTH_SUCCESS]: (state, { payload }) => ({
    ...state,
    success: payload
  }),
  [types.AUTH_SET_TOKEN]: (state, { payload }) => {
    localStorage.setItem('token', payload.token);
    return {
      ...state,
      token: payload
    };
  }
};

// eslint-disable-next-line max-len
export default (state = defaultState, action) => (map[action.type] && map[action.type](state, action)) || state;
