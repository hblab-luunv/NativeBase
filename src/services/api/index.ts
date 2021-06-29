import axios from 'axios';
import _ from 'lodash';
import Config from 'react-native-config';
import Toast from 'react-native-simple-toast';
import navigationService from '../navigationService';

let authToken: string = '';
const setAuthToken = (token: string) => {
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
    console.log(
      '%c Starting Request ',
      'background: #FFA813; color: #fff',
      request,
    );
    if (authToken) {
      request.headers.common.Authorization = `Bearer ${authToken}`;
    }
    return request;
  });

  api.interceptors.response.use(
    response => {
      console.log('%c Response ', 'background: #69CA6D; color: #fff', response);
      const status = _.get(response, 'data.status', 200);
      if (status === 200) {
        return response;
      }
      return Promise.reject(response);
    },
    error => {
      const response = _.get(error, 'response');
      console.log('%c Response ', 'background: #E41F00; color: #fff', response);
      const message = _.get(error, 'message');
      if (!response) {
        // network error
        if (message === 'Network Error') {
          Toast.show('NetworkError', Toast.LONG);
        }
        return Promise.reject();
      }
      // handle http status code
      else if (
        response.status === 401 &&
        response.config.url !== 'user/login' &&
        navigationService.getCurrentRoute() !== 'LoginScreen'
      ) {
        navigationService.navigateAndReset('AuthStack', {});
      } else if (response.status === 500) {
        Toast.show('ServerError', Toast.LONG);
        return Promise.reject();
      }

      return Promise.reject(response);
    },
  );
};

export default {
  create,
  setAuthToken,
};
