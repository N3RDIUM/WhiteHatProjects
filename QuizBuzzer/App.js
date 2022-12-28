import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import BuzzerScreen from './screens/BuzzerScreen'
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View> 
    );
  } 
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  BuzzerScreen:BuzzerScreen
})

const AppContainer = createAppContainer(AppNavigator)
