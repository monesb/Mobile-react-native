import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './StackNavigation/screens/HomeScreen.jsx';
import PageA from './StackNavigation/screens/PageA.jsx';
import PageB from './StackNavigation/screens/PageB.jsx';
import PageC from './StackNavigation/screens/PageC.jsx';

const Stack = createStackNavigator();

export default function Myapp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PageA" component={PageA} />
        <Stack.Screen name="PageB" component={PageB} />
        <Stack.Screen name="PageC" component={PageC} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}