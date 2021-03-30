import {useSelector, useDispatch} from 'react-redux';
import AuthActions from '../stores/authRedux';

const useAuth = () => {
  // const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const login = (email, password, onSuccess, onError) =>
    dispatch(AuthActions.authLogin(email, password, onSuccess, onError));

  return {
    // user,
    login,
  };
};

export {useAuth};
