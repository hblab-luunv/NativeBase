import {combineReducers, AnyAction} from 'redux';
import configureStore from './createStore';
import rootSaga from '../sagas';
import {reducer as AuthReducer, AuthTypes} from './authRedux';

export default () => {
  const allReducers = combineReducers({
    auth: AuthReducer,
  });

  const rootReducer = (state: any, action: AnyAction) => {
    let mState = state;
    if (action.type === AuthTypes.AUTH_CLEAR_ALL_DATA) {
      mState = undefined;
    }
    return allReducers(mState, action);
  };

  return configureStore(rootReducer, rootSaga);
};
