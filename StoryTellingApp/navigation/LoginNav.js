import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../screens/index';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="load"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={Screens.loading} name="load" />
      <Stack.Screen component={Screens.login} name="login" />
      <Stack.Screen component={Screens.dashboard} name="dashboard" />
    </Stack.Navigator>
  );
};

export default StackNavigator;
