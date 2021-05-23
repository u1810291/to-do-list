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
    console.log(payload);
    const res = yield services.getAll(payload);
    console.log(res.data.message);
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

function* addTasks({ payload }) {
  try {
    yield put(setLoading(true));
    // eslint-disable-next-line no-console
    const res = yield services.add(payload);
    yield put(setSuccess(res));
    yield put(setError(''));
    yield put(setLoading(false));
    yield put(setSuccess(''));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.toString());
    yield put(setError(error.toString()));
    yield put(setLoading(false));
    yield put(setError(''));
  }
}

export default function* tasksAdd() {
  yield takeLatest(types.FETCH_TASKS, fetchData);
  yield takeLatest(types.ADD_TASKS, addTasks);
}
