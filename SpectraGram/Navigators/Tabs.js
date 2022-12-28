import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Screens from '../screens/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';

const Tabs = createMaterialBottomTabNavigator();
const BottomTabNavigator = () => {
  return(
    <Tabs.Navigator
    labeled={false}
    shifting
      screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
          let iconName;
          if(route.name==='feeds'){
            iconName = focused?'book':'book-outline'
          }
          else if(route.name === 'posts'){
            iconName = focused?'create':'create-outline'
          }
          return <Ionicons name={iconName} size={RFValue(20)} color={color} />
        }
      })}
      tabBarOptions={{
        activeTintColor:'tomato',
        inactiveTintColor:'gray',
        
      }}
    >
      <Tabs.Screen name='feeds' component={Screens.Feeds} navigationOptions = {{tabBarColor: 'green'}} />
      <Tabs.Screen name='posts' component={Screens.Posts} navigationOptions = {{tabBarColor: 'green'}} />
    </Tabs.Navigator>
  )
}

export default BottomTabNavigator