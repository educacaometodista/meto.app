import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LinearGradient } from 'expo-linear-gradient';

import Welcome from './pages/Welcome';
import Candidato from './pages/Candidato';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Welcome: {
        screen: Welcome,
        navigationOptions: {
          title: 'Seja bem-vindo!',
          headerShown: false,
        },
      },
      Candidato: {
        screen: Candidato,
        navigationOptions: {
          title: 'Página do Candidato',
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerTintColor: '#FFF',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#33CBD4',
        },
        headerBackground: () => (
          <LinearGradient
            colors={['#153C77', '#1e4e96', '#153C77']}
            style={{ flex: 1 }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        ),
        headerTitleAlign: 'center',
      },
    }
  )
);

export default Routes;
