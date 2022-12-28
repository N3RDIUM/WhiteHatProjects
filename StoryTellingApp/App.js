import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './navigation/DrawerNavigation';
import LoginStack from './navigation/LoginNav';
import Screens from './screens/index';

// I've made the app work!
// WARNING: login works only on phones.

import firebase from 'firebase';
import {firebaseConfig} from './config.js'; 

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
else{
  firebase.app()
}

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="init"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={AppStack} name="home" />
      <Stack.Screen component={LoginStack} name="init" /> 
    </Stack.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
