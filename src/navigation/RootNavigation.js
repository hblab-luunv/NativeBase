import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import NavigationService from '../services/navigationService';
import SplashScreen from '../scenes/splash/SplashScreen';
import LoginScreen from '../scenes/login/LoginScreen';
import {SPLASH, LOGIN} from './Routes';
// auth

const Stack = createStackNavigator();

const RootNavigation = ({initialRoute, initialParams}) => {
  return (
    <NavigationContainer
      // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
        initialRouteName={initialRoute}>
        <Stack.Screen name={LOGIN} component={LoginScreen} />
        <Stack.Screen name={SPLASH} component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
