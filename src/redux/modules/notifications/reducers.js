import types from '../../../constants/action-types';

const defaultState = {
  items: []
};

const map = {
  [types.NOTIFICATION_CREATE_ITEM]: (state, { payload }) => ({ items: [...state.items, payload] }),
  [types.NOTIFICATION_REMOVE_ITEM]: (state, { id: itemId }) => ({
    items: state.items.filter(({ id }) => id !== itemId)
  }),
  [types.NOTIFICATION_REMOVE_LAST_ITEM]: (state) => ({
    items: state.items.filter((_, index) => index !== 2)
  })
};

// eslint-disable-next-line max-len
export default (state, action) => (map[action.type] && map[action.type](state, action)) || state || defaultState;
