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
          placeholder="Digite seu número de matrícula"
          right
          icon="user"
          family="antdesign"
          iconColor="#105ab3"
          style={{ borderColor: '#105ab3', color: '#105ab3' }}
          email
        />
        <Input
          placeholder="Sua senha secreta"
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
          <Checkbox
            color="#105ab3"
            label="Permanecer conectado"
            style={{ marginVertical: 10, flex: 1 }}
          />
        </View>

        <Button
          onPress={() => navigation.navigate('Home')}
          color="#105ab3"
          style={{ marginVertical: 10 }}
        >
          <Text style={{ color: '#FFF' }}>Entrar</Text>
        </Button>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Subscribe', {
              url: 'https://vestibularmetodista.com.br',
            })
          }
          style={{ marginVertical: 10 }}
        >
          <Text>Quero me inscrever</Text>
        </TouchableOpacity>
      </Container>
    </>
  );
}

export default Login;
