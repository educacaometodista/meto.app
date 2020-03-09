import React from 'react';
import { StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

import PropTypes from 'prop-types';

function Subscribe({ navigation }) {
  const url = navigation.getParam('url');

  return (
    <>
      <StatusBar barStyle="light-content" />
      <WebView style={{ flex: 1 }} source={{ uri: url }} />
    </>
  );
}

Subscribe.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }),
};

Subscribe.defaultProps = {
  navigation: {
    getParam: '',
  },
};

export default Subscribe;
