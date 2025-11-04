
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Catalogue3 from './Catalogue';
import Panier from './panierScreen';

const Stack = createNativeStackNavigator();

const MyApp3 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Produits" component={Catalogue3} />
        <Stack.Screen name="Panier" component={Panier} options={{ title: 'Mon Panier' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyApp3;