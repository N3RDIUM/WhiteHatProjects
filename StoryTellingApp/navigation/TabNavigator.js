import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Screens from '../screens/index';
import {RFValue} from 'react-native-responsive-fontsize'

const Tab = createMaterialBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      labeled={false}
      barStyle={styles.bottomTabStyle}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'feed') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'createstory') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }
          return (
            <Ionicons
              name={iconName}
              size={30}
              style={styles.icon}
              color={color}
            />
          );
        },
      })}
      activeColor={'#ee8249'}
      inactiveColor={'grey'}>
      <Tab.Screen name="feed" component={Screens.feed} />
      <Tab.Screen name="createstory" component={Screens.createStory} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: '#28345d',
    height: '8%',
    brederTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'contain',
    position: 'absolute',
  },
  icon:{
    width:RFValue(30),
    height:RFValue(30),
  }
});
