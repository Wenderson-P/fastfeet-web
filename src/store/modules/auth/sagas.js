import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;
  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  api.defaults.headers.Authorization = `Beader ${token}`;

  yield put(signInSuccess(token, user));

  history.push('/dashboard');
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;
  api.defaults.headers.Authorization = `Beader ${token}`;
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
