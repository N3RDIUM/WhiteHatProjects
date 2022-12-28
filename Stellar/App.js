import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Screens from './screens/index';
import { Header } from 'react-native-elements';
import Audio from 'expo-av'

//NOTE: see on phone for transition effect!

//but I dont know why it does not show background image in the phone.
//some research on this problem:
//  https://stackoverflow.com/questions/49882743/react-native-not-displaying-background-image
//  https://stackoverflow.com/questions/61583877/react-native-imagebackground-on-android-does-not-render-image
//  https://github.com/facebook/react-native/issues/28819
// Issue solved!!!!!!!!!!!!!!!!!!!!

const Transition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.FadeInFromBottomAndroidSpec,
    close: TransitionSpecs.FadeOutToBottomAndroidSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
};

const Stack = createStackNavigator();

export default class App extends Component {
  async componentDidMount(){
      await Audio.Sound.createAsync({
        uri: require('./assets/bgm.mp3'),
      },
      { shouldPlay: true }
    );
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="homescreen"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="homescreen"
            component={Screens.home}
            options={{ ...Transition }}
          />
          <Stack.Screen
            name="dailypic"
            component={Screens.dailypic}
            options={{ ...Transition }}
          />
          <Stack.Screen
            name="spacecraft"
            component={Screens.spacecraft}
            options={{ ...Transition }}
          />
          <Stack.Screen
            name="starmap"
            component={Screens.starmap}
            options={{ ...Transition }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
