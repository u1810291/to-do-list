import types from '../../../constants/action-types';

const removeLast = () => ({
  type: types.NOTIFICATION_REMOVE_LAST_ITEM
});

const addNotify = (payload) => ({
  type: types.NOTIFICATION_CREATE_ITEM, payload
});

export const closeNotify = (id) => ({
  type: types.NOTIFICATION_REMOVE_ITEM, id
});

export const notify = (data) => (dispatch, getState) => {
  const { notificationsReducer: { items } } = getState();
  const payload = { id: (new Date()).getTime(), ...data };
  if (items.length === 3) {
    dispatch(removeLast());
    dispatch(addNotify(payload));
  } else {
    dispatch(addNotify(payload));
  }
  setTimeout(() => {
    dispatch(closeNotify(payload.id));
  }, 3000);
};

export const notifyMultiple = (dataArray) => (dispatch) => {
  const data = dataArray.reverse().splice(0, 3);
  data.forEach((item, index) => setTimeout(() => { dispatch(notify(item)); }, (index + 1) * 1000));
};
