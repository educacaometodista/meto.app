import React from 'react';
import { View, ScrollView } from 'react-native';

import { Button } from 'galio-framework';

export default function Card() {
  return (
    <ScrollView horizontal style={{ width: '100%', paddingVertical: 20 }}>
      <Button
        onlyIcon
        icon="tags"
        iconFamily="antdesign"
        iconSize={30}
        size="large"
        shadowless
        color="warning"
        iconColor="#fff"
        style={{
          width: 40,
          height: 40,
          alignItems: 'center',
          marginHorizontal: 2.5,
        }}
      >
        warning
      </Button>
    </ScrollView>
  );
}
