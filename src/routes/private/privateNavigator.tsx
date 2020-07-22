import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import Dashboard from '../../screens/private/Dashboard';
import Profile from '../../screens/private/Profile';

const Drawer = createDrawerNavigator();

function PrivateNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export default PrivateNavigator;