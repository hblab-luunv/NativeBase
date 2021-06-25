import React, {FunctionComponent} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

const HomeScreen: FunctionComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
