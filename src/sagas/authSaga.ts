/* eslint-disable @typescript-eslint/no-unused-vars */
import {put, call} from 'redux-saga/effects';
import AuthActions from '../stores/authRedux';
import api from '../services/api';
import {AnyAction} from 'redux';

export function* login(action: AnyAction) {
  const {userName, password, onSuccess, onError} = action;

  try {
    // make the call to the api

    if (onSuccess) {
      // onSuccess(response.data);
    }
  } catch (error) {
    if (onError) {
      onError(error);
    }
  }
}
