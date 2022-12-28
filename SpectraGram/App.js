import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './Navigators/Drawer';
import LoginStack from './Navigators/StackLogin';
import Screens from './screens/index';

//console.log(firebaseConfig)

const init = async () => {
  //console.log('loading default asyncstorage db');
  //AsyncStorage.setItem('loggedIn', 'false');
  //AsyncStorage.setItem('fname', '...');
  //AsyncStorage.setItem('lname', '...');
  //AsyncStorage.setItem('profile', '...');
  //console.log('testing...');
  //console.log(await AsyncStorage.getItem('loggedIn'));
};

init();

// I've made the app work!
// WARNING: login works only on phones.
// logout is in profile screen!

import firebase from 'firebase';
import { firebaseConfig } from './config.js';

const _test_ = async () => {
  //console.log('iuewgfiuwehi');
  await firebase.database().ref('_test').set(1);
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
  _test_();
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
