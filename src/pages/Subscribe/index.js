import React from 'react';
import { StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

function Subscribe({ navigation }) {
  const url = navigation.getParam('url');

  return (
    <>
      <StatusBar barStyle="light-content" />
      <WebView style={{ flex: 1 }} source={{ uri: url }} />
    </>
  );
}

export default Subscribe;
