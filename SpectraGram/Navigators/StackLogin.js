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
      <Stack.Screen component={Screens.Loading} name="loading" />
      <Stack.Screen component={Screens.Login} name="login" />
      <Stack.Screen component={Screens.Dashboard} name="dashboard" />
    </Stack.Navigator>
  );
};

export default StackNavigator;