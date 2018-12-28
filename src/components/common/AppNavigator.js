import { createStackNavigator } from 'react-navigation';
import {Home} from '../../screens/Home';
import {Create} from '../../screens/Create';
import { createAppContainer} from 'react-navigation';

const AppNavigator = createStackNavigator ({
    Home: { screen: Home },
    Create: { screen: Create },
});

const AppContainer = createAppContainer(AppNavigator)

export  { AppContainer };