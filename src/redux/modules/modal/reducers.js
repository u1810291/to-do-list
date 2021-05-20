/* eslint-disable max-len */
import types from '../../../constants/action-types';

const defaultState = {
  blured: {
    show: false
  },
  fullScreen: {
    stack: []
  }
};

const map = {
  [types.APPLICATION_SHOW_MODAL]: (state, { payload }) => ({
    ...state,
    blured: { show: true, ...payload }
  }),
  [types.APPLICATION_HIDE_MODAL]: (state) => ({ ...state, blured: { show: false } }),
  // [types.APPLICATION_SHOW_FULLSCREEN_MODAL]: (state, { payload }) => ({ ...state, fullScreen: { show: true, ...payload } }),
  // [types.APPLICATION_HIDE_FULLSCREEN_MODAL]: (state) => ({ ...state, fullScreen: { show: false } }),
  [types.APPLICATION_PUSH_STACK_FULLSCREEN_MODAL]: (state, { payload }) => ({
    ...state, fullScreen: { stack: [...state.fullScreen.stack, payload] }
  }),
  [types.APPLICATION_POP_STACK_FULLSCREEN_MODAL]: (state) => ({
    ...state, fullScreen: { stack: state.fullScreen.stack.filter((_, index) => index !== (state.fullScreen.stack.length - 1)) }
  })
};

// eslint-disable-next-line max-len
export default (state, action) => (map[action.type] && map[action.type](state, action)) || state || defaultState;
