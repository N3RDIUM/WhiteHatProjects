import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import MainScreen from './screens/MainScreen';
import DoneScreen from './screens/DoneScreen';
import RateScreen from './screens/RateScreen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

localStorage.setItem("someone","something")
 
//NOTE:see readme.md

export default class App extends Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  MainScreen: MainScreen,
  DoneScreen: DoneScreen,
  RateScreen: RateScreen,
});

const AppContainer = createAppContainer(AppNavigator);
