import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../scenes/auth/login';
import RegisterScreen from '../scenes/auth/register';

const MainStack = createStackNavigator();

const AuthStack = () => (
  <MainStack.Navigator headerMode={'none'}>
    <MainStack.Screen name="LoginScreen" component={LoginScreen} />
    <MainStack.Screen name="RegisterScreen" component={RegisterScreen} />
  </MainStack.Navigator>
);

export default AuthStack;
