import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './Tabs';
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
      <Stack.Screen component={Screens.Read} name="readScreen" />
    </Stack.Navigator>
  );
};

export default StackNavigator;