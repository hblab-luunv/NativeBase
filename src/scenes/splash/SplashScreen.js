import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';

const SplashScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Splash screen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SplashScreen;
