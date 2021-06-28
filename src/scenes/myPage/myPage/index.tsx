import React, {FunctionComponent} from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

const MyPage: FunctionComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MyPage</Text>
    </SafeAreaView>
  );
};

export default MyPage;
