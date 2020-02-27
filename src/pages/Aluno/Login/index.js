import React from 'react';
import { StatusBar, View, Text, TouchableOpacity } from 'react-native';

import { Button, Input, Checkbox } from 'galio-framework';
import { Container, HeaderLogo } from './styles';

function Login({ navigation }) {
  return (
    <>
      <Container>
        <View style={{ alignItems: 'center', marginTop: '5%' }}>
          <HeaderLogo />
        </View>
        <StatusBar barStyle="light-content" />
        <Input
          placeholder="E-mail"
          right
          icon="mail"
          family="antdesign"
          iconColor="#105ab3"
          style={{ borderColor: '#105ab3', color: '#105ab3' }}
          email
        />
        <Input
          placeholder="password"
          password
          viewPass
          style={{ borderColor: '#105ab3', color: '#105ab3' }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Checkbox color="#105ab3" label="Permanecer conectado" />
        </View>

        <Button
          onPress={() => navigation.navigate('Home')}
          color="#105ab3"
          style={{ marginVertical: 10 }}
        >
          <Text style={{ color: '#FFF' }}>Entrar</Text>
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate('Subscribe')}>
          <Text>Quero me inscrever</Text>
        </TouchableOpacity>
      </Container>
    </>
  );
}

export default Login;
