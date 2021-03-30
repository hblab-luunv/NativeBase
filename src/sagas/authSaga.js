import {put, call} from 'redux-saga/effects';
import AuthActions from '../stores/authRedux';
import api from '../services/api';

export function* login(action) {
  const {phone, password, onSuccess, onError} = action;

  try {
    // make the call to the api
    const response = yield call(api.create().login, phone, password);
    const token = response.data ? response.data.token : null;

    api.setAuthToken(token);

    if (onSuccess) {
      onSuccess(response.data);
    }
  } catch (error) {
    if (onError) {
      onError(error);
    }
  }
}
