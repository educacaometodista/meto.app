import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { LinearGradient } from 'expo-linear-gradient';

import Welcome from './pages/Welcome';
import Candidato from './pages/Candidato';
import Login from './pages/Aluno/Login';
import Subscribe from './pages/Subscribe';
import Home from './pages/Home';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      headerBackTitleVisible={false}
      headerLayoutPreset="center"
      screenOptions={{
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
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ title: 'Seja bem-vindo!', headerShown: false }}
      />
      <Stack.Screen
        name="Candidato"
        component={Candidato}
        options={{ title: 'Página do Candidato' }}
      />
      {/* <Stack.Screen
        name="Candidato"
        component={Candidato}
        options={{ title: 'Página do Candidato' }}
      /> */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ title: 'Faça o Login' }}
      />
      <Stack.Screen
        name="Subscribe"
        component={Subscribe}
        options={{ title: 'Navegação' }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Universidade Metodista de São Paulo' }}
      />
    </Stack.Navigator>
  );
}
