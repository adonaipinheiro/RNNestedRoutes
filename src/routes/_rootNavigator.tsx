import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Routes
import PublicNavigator from './public/publicNavigator';
import PrivateNavigator from './private/privateNavigator';

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PublicNavigator" component={PublicNavigator} />
      <Stack.Screen name="PrivateNavigator" component={PrivateNavigator} />
    </Stack.Navigator>
  );
}

export default RootNavigator;