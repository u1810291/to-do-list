/* eslint-disable no-console */
import { takeLatest, put } from 'redux-saga/effects';
import types from '../../../constants/action-types';
import service from '../../../services/auth';

import {
  setToken, setError
} from './actions';

function* login({ payload, success }) {
  try {
    const { data } = yield service.getToken(payload);
    yield put(setToken(payload.token));
    success(data.access_token, data.refresh_token);
  } catch (error) {
    yield put(setError(error.response ? error.response.data.error_message : error));
  }
}
export default function* authSaga() {
  yield takeLatest(types.AUTH_LOGIN, login);
}
