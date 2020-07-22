import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import LogIn from '../../screens/public/LogIn';
import Register from '../../screens/public/Register';

const Stack = createStackNavigator();

function PublicNavigator() {
  return (
    <Stack.Navigator initialRouteName="LogIn">
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export default PublicNavigator;