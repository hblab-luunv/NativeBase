/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, FunctionComponent} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './styles';
import api from '../../services/api';
import navigationService from '../../services/navigationService';

const SplashScreen: FunctionComponent = () => {
  const userToken = useSelector((state: any) => state?.auth?.user?.token);
  useEffect(() => {
    if (!userToken) {
      api.setAuthToken(userToken);
      setTimeout(
        () => navigationService.navigateAndReset('BottomTabStack'),
        1000,
      );
    } else {
      setTimeout(() => navigationService.navigateAndReset('AuthStack'), 1000);
    }
  }, []);

  return <View style={styles.container} />;
};

export default SplashScreen;
