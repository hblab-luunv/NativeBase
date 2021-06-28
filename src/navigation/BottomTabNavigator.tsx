import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../scenes/home/home';
import MyPageScreen from '../scenes/myPage/myPage';
import {Icon} from '../components/atoms';
import {images, colors} from '../themes';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none" screenOptions={{}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const MyPageStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none" screenOptions={{}}>
      <Stack.Screen name="MyPageScreen" component={MyPageScreen} />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.primary,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({}) => (
            <Icon source={images.icUser} />
          ),
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPageStack}
        options={{
          tabBarLabel: 'MyPage',
          tabBarIcon: ({}) => (
            <Icon source={images.icUser} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
