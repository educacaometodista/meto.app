import React from 'react';
import { StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

function Subscribe() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <WebView
        style={{ flex: 1 }}
        source={{ uri: 'https://vestibularmetodista.com.br' }}
      />
    </>
  );
}

export default Subscribe;
