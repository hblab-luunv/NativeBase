import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import { AnyAction } from 'redux';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  authLogin: ['userName', 'password', 'onSuccess', 'onError'],
});

export const AuthTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  user: {
    token: null,
  },
});

/* ------------- Selectors ------------- */

export const AuthSelectors = {};

/* ------------- Reducers ------------- */

export const login = (state: any, action: AnyAction) => {
  return state;
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_LOGIN]: login,
});
