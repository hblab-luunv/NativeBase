import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  authLogin: ['phone', 'password', 'onSuccess', 'onError'],
});

export const AuthTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  user: {},
});

/* ------------- Selectors ------------- */

export const AuthSelectors = {};

/* ------------- Reducers ------------- */

export const login = (state, action) => {
  return state;
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_LOGIN]: login,
});
