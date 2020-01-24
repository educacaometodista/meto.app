import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Welcome from './pages/Welcome';

const Routes = createAppContainer(
  createStackNavigator({
    Welcome,
  })
);

export default Routes;
