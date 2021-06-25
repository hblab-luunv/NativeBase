import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNavigator from './BottomTabNavigator';
import AuthNavigator from './AuthNavigator';
import SplashScreen from '../scenes/splash';
import { navigationRef } from '../services/navigationService';


const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer
      ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="AuthStack" component={AuthNavigator} />
        <Stack.Screen name="BottomTabStack" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
