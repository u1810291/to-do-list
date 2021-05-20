import types from '../../../constants/action-types';

export const show = (payload) => ({
  type: types.APPLICATION_SHOW_MODAL,
  payload
});
export const hide = () => ({ type: types.APPLICATION_HIDE_MODAL });
// eslint-disable-next-line max-len
export const showFullScreen = (payload) => ({
  type: types.APPLICATION_SHOW_FULLSCREEN_MODAL,
  payload
});
export const hideFullScreen = () => ({
  type: types.APPLICATION_HIDE_FULLSCREEN_MODAL
});

// eslint-disable-next-line max-len
export const pushFullScreen = (payload) => ({
  type: types.APPLICATION_PUSH_STACK_FULLSCREEN_MODAL,
  payload
});
export const popFullScreen = () => ({
  type: types.APPLICATION_POP_STACK_FULLSCREEN_MODAL
});
