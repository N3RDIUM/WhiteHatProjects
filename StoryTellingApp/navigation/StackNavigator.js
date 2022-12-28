import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import Screens from '../screens/index';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={TabNavigator} name="home" />
      <Stack.Screen component={Screens.story} name="storyScreen" />
    </Stack.Navigator>
  );
};

export default StackNavigator;
