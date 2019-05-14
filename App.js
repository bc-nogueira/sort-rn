import Home from './src/screens/Home';
import Sort from './src/screens/Sort';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const App = createStackNavigator({
  Home: { screen: Home },
  Sort: { screen: Sort }
});

export default createAppContainer(App);