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
    const reverseToken = payload.token.split('').reverse().join('');
    localStorage.setItem('token', reverseToken);
    return {
      ...state,
      token: payload
    };
  }
};

// eslint-disable-next-line max-len
export default (state = defaultState, action) => (map[action.type] && map[action.type](state, action)) || state;
