import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import services from '../../../services/tasks';
import { setData, setError, setLoading } from './actions';

function* fetchData({ payload }) {
  try {
    yield put(setLoading(true));
    const res = services.getAll(payload);
    yield put(setData(res));
    yield put(setError(''));
    yield put(setLoading(false));
  } catch (error) {
    yield put(setError(error));
    // eslint-disable-next-line no-console
    console.log(error);
    yield put(setLoading(false));
  }
}

function* addTasks({ payload, success }) {
  try {
    yield put(setLoading(true));
    const res = services.add(payload);
    // eslint-disable-next-line no-console
    console.log(res);
    success(res);
    yield put(setError(''));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
    yield put(setError(error));
    yield put(setLoading(false));
  }
}

export default function* tasksAdd() {
  yield takeLatest(types.FETCH_TASKS, fetchData);
  yield takeLatest(types.ADD_TASKS, addTasks);
}
