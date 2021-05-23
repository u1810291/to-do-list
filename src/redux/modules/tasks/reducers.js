import types from '../../../constants/action-types';

const defaultState = {
  data: [],
  error: '',
  loading: false,
  total: undefined,
  success: ''
};

const map = {
  [types.SET_TASKS_DATA]: (state, { payload }) => ({
    ...state,
    data: payload
  }),
  [types.SET_TASKS_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload
  }),
  [types.SET_TASKS_LOADING]: (state, { payload }) => ({
    ...state,
    loading: payload
  }),
  [types.SET_TASKS_ADD_SUCCESS]: (state, { payload }) => ({
    ...state,
    success: payload
  }),
  [types.SET_TASKS_TOTAL]: (state, { payload }) => ({
    ...state,
    total: payload
  })
};

// eslint-disable-next-line max-len
export default (state, action) => (map[action.type] && map[action.type](state, action)) || state || defaultState;
