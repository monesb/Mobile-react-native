import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accueil from './screenes/accueil';
import PanierScreen from './screenes/panierScreene';
import Connexion from './screenes/connection';
import Inscription from './screenes/inscriptiones';

const Stack = createNativeStackNavigator();

const Myapp2 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen 
          name="Accueil" 
          component={Accueil}
          options={{ title: 'Accueil' }}
        />
        <Stack.Screen 
          name="Panier" 
          component={PanierScreen}
          options={{ title: 'Mon Panier' }}
        />
        <Stack.Screen 
          name="Connexion" 
          component={Connexion}
          options={{ title: 'Connexion' }}
        />
        <Stack.Screen 
          name="Inscription" 
          component={Inscription}
          options={{ title: 'Inscription' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Myapp2;