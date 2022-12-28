import React from 'react';
import Screens from '../screens/index';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Stack from './Stack';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component = {Stack} />
      <Drawer.Screen name='Profile' component = {Screens.Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation