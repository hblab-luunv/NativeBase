import React, {FunctionComponent} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

const LoginScreen: FunctionComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>LoginScreen</Text>
    </SafeAreaView>
  );
};

export default LoginScreen;
