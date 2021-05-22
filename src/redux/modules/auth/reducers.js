/* eslint-disable camelcase */
import types from '../../../constants/action-types';

const defaultState = {
  token: localStorage.getItem('token'),
  error: ''
};

const map = {
  [types.AUTH_LOGOUT]: (state) => {
    localStorage.setItem('token', '');
    return {
      ...state, token: ''
    };
  },
  [types.AUTH_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload
  }),
  [types.AUTH_SET_TOKEN]: (state, { payload }) => {
    localStorage.setItem('token', payload);
    return {
      ...state,
      token: payload

    };
  }
};

// eslint-disable-next-line max-len
export default (state = defaultState, action) => (map[action.type] && map[action.type](state, action)) || state;
