import {takeLatest, takeEvery, all} from 'redux-saga/effects';

/* ------------- Types ------------- */

import {AuthTypes} from '../stores/authRedux';
/* ------------- Sagas ------------- */

import {login} from './authSaga';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    // some sagas receive extra parameters in addition to an action

    // auth
    takeLatest(AuthTypes.AUTH_LOGIN, login),
  ]);
}
