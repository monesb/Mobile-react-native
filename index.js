import { registerRootComponent } from 'expo';
import Myapp2 from './projecte/StartProjecte/Myapp2';
import Catalogue from './FlatLIst/Myapp3';
import MyApp3 from './FlatLIst/Myapp3';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
// Démarrer l'app avec la navigation (page Home en premier)
registerRootComponent(Myapp2);


