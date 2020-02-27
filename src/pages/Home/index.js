import React from 'react';
import { View } from 'react-native';

import { Card } from 'galio-framework';
// import { Container } from './styles';

export default function Home() {
  return (
    <Card
      flex
      style={{ width: '100%', height: 100, paddingHorizontal: 20 }}
      // borderlass
      title="Teste"
      caption="139"
      avatar="http://i.pravatar.cc/100?id=skater"
      imageStyle={{ borderRadius: 30 }}
      location="Los Angeles, CA"
      imageBlockStyle={{ padding: 20 / 2 }}
      image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
    />
  );
}
