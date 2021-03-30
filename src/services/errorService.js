import _ from 'lodash';
import {Alert} from 'react-native';

export const AUTHORIZE_ERROR_CODE = 401;
export const MAINTAIN_ERROR_CODE = 503;
const VALIDATE_ERRROR_CODE = 422;
export const NOTFOUND_ERROR_CODE = 404;

const isNetworkError = errorMessage => {
  return errorMessage === 'Network Error';
};

export const handleApiError = (
  error,
  onNetworkError,
  onErrorNull,
  onValidateError,
) => {
  const errorResponse = _.get(error, 'response');
  const messageError = _.get(error, 'message');

  if (isNetworkError(messageError)) {
    setTimeout(() => {
      Alert.alert('Error', 'Network Error');
    }, 1000);

    onNetworkError();
    return;
  }
  if (!errorResponse) {
    // Error null or undefined
    onErrorNull(errorResponse);
    setTimeout(() => {
      Alert.alert('Error', 'Server Error');
    }, 1000);
    return;
  }
  // handle http status code
  if (errorResponse?.status === AUTHORIZE_ERROR_CODE) {
  } else if (errorResponse?.status === MAINTAIN_ERROR_CODE) {
    // maintain
  } else if (errorResponse?.status === VALIDATE_ERRROR_CODE) {
    // validate error
    onValidateError(errorResponse);
  } else {
    // Any error
    setTimeout(() => {
      Alert.alert('Error', 'Server Error');
    }, 1000);
  }
};
