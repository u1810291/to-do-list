/* eslint-disable no-console */
import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/auth';

import {
  setError, setSuccess, setToken
} from './actions';

function* login({ payload, success }) {
  try {
    const { data } = yield service.login(payload);
    if (data.status === 'error') {
      yield put(setError(Object.entries(data.message).join('\n')));
      yield put(setError(''));
    } else {
      yield put(setSuccess(data.status));
      yield put(setToken({ token: data.message.token }));
      success(data);
    }
  } catch (error) {
    console.log(error);
    yield put(setError(error));
  }
}
export default function* authSaga() {
  yield takeLatest(types.AUTH_LOGIN, login);
}
