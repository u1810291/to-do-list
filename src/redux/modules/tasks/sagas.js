import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import services from '../../../services/tasks';
import {
  setData, setError, setLoading, setSuccess, setTotal
} from './actions';

import { dataSelector } from './selectors';

function* fetchData({ payload }) {
  try {
    yield put(setLoading(true));
    const res = yield services.getAll(payload);
    if (res.data.status === 'error') {
      yield put(setError(Object.entries(res.data.message).join('\n')));
      yield put(setLoading(false));
      yield put(setError(''));
    } else {
      const { data, total } = dataSelector(res.data.message);
      yield put(setData(data));
      yield put(setTotal(total));
      yield put(setError(''));
      yield put(setLoading(false));
    }
  } catch (error) {
    yield put(setError(error));
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

function* addTasks({ payload, success }) {
  try {
    const res = yield services.add(payload);
    if (res.data.status === 'error') {
      yield put(setError(Object.entries(res.data.message).join('\n')));
      yield put(setError(''));
    } else {
      yield put(setSuccess(res.data.status));
      yield put(setSuccess(''));
      success(res);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.toString());
    yield put(setError(error.toString()));
    yield put(setError(''));
  }
}

function* editTask({ payload, success }) {
  try {
    const res = yield services.edit(payload.id, payload.data);
    if (res.data.status === 'error') {
      yield put(setError(Object.entries(res.data.message).join('\n')));
      yield put(setError(''));
    } else {
      yield put(setSuccess(res.data.status));
      yield put(setSuccess(''));
      success(res);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.toString());
    yield put(setError(error.toString()));
    yield put(setError(''));
  }
}

export default function* tasksAdd() {
  yield takeLatest(types.FETCH_TASKS, fetchData);
  yield takeLatest(types.ADD_TASKS, addTasks);
  yield takeLatest(types.EDIT_TASKS, editTask);
}
