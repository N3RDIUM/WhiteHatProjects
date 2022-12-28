import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Screens from '../screens/index';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={StackNavigator} />
      <Drawer.Screen name="profile" component={Screens.profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
