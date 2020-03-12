import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

import Chat from './src/pages/Chat';

// const Tab = createBottomTabNavigator();

YellowBox.ignoreWarnings([
  'Expected style "shadowRadius: 2"',
  'Node of type rule not supported as an inline style',
]);

function App() {
  return (
    <NavigationContainer>
      <>
        <StatusBar barStyle="dark-content" />
        <Routes />
      </>
    </NavigationContainer>
  );
}

export default App;
