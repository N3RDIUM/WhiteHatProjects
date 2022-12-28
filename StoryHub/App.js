import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SearchScreen from './components/SearchScreen';
import WriteScreen from './components/WriteScreen';
import Login from './components/LoginScreen';
import Signup from './components/Signup';
import Read from './components/ReadScreen';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Write: { screen: WriteScreen },
    Read: { screen: SearchScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName === 'Write') {
          return (
            <Image
              source={require('./assets/write.png')}
              style={{ alignSelf: 'center', width: 30, height: 30 }}
            />
          );
        } else if (routeName === 'Read') {
          return (
            <Image
              source={require('./assets/read.png')}
              style={{ alignSelf: 'center', width: 30, height: 30 }}
            />
          );
        }
      },
    }),
  }
);

const main_nav = createSwitchNavigator({
  LoginScreen:{screen:Login},
  SignupScreen:{screen:Signup},
  ReadScreen:{screen:Read},
  Tabs:{screen:TabNavigator},
})

const AppContainer = createAppContainer(main_nav);
