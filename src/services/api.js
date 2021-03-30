import axios from 'axios';
import _ from 'lodash';
import Config from 'react-native-config';
import Toast from 'react-native-simple-toast';
import navigationService from '../services/navigationService';

let authToken = null;
const setAuthToken = token => {
  authToken = token;
};

const create = () => {
  const api = axios.create({
    baseURL: Config.API_URL,
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  api.interceptors.request.use(request => {
    console.log('Starting Request', request);
    if (authToken) {
      request.headers.common.Authorization = `Bearer ${authToken}`;
    }
    return request;
  });

  api.interceptors.response.use(
    response => {
      console.log('Response_', response);
      // handle api status code
      const status = _.get(response, 'data.status', 200);
      if (status === 200) {
        return response;
      }
      return Promise.reject(response);
    },
    error => {
      const response = _.get(error, 'response');
      console.log('Response_', response);
      const message = _.get(error, 'message');
      if (!response) {
        // network error
        if (message === 'Network Error') {
          // do some thing
        }
        return Promise.reject();
      }
      // handle http status code
      else if (
        response.status === 401 &&
        response.config.url !== 'user/login' &&
        navigationService.getCurrentRoute() !== 'LoginScreen'
      ) {
        navigationService.navigateAndReset('LoginScreen');
      } else if (response.status === 500) {
        // do something
        return Promise.reject();
      }

      return Promise.reject(response);
    },
  );

  const login = (phone, password) => {
    return api.post('user/login', {
      phone: phone,
      password: password,
    });
  };

  return {
    // auth
    login,
  };
};

export default {
  create,
  setAuthToken,
};
