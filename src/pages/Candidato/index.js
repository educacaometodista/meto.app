import React from 'react';
import { StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Input } from 'galio-framework';
import {
  Container,
  Background,
  DocumentContainer,
  DocumentTitle,
  ContinueContainer,
  ContinueButton,
  ContinueText,
  SubscribeContainer,
  SubscribeButton,
  SubscribeText,
} from './styles';

function Candidato({ navigation }) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Container>
        <Background />

        <DocumentContainer>
          <DocumentTitle>Verifique a sua situação</DocumentTitle>
          <Input
            rounded
            placeholder="Digite o seu CPF"
            placeholderTextColor="#105ab3"
            style={{ borderColor: '#105ab3' }}
          />

          <ContinueContainer>
            <Button round color="#105ab3">
              <ContinueText>Continuar</ContinueText>
            </Button>
          </ContinueContainer>
        </DocumentContainer>

        <SubscribeContainer>
          <SubscribeButton onPress={() => navigation.navigate('Subscribe')}>
            <LinearGradient
              colors={['#073a78', '#105ab3', '#073a78']}
              style={{
                flex: 1,
                width: '100%',
                bottom: 0,
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <SubscribeText>
                Novo por aqui? Inscreva-se no vestibular
              </SubscribeText>
            </LinearGradient>
          </SubscribeButton>
        </SubscribeContainer>
      </Container>
    </>
  );
}

export default Candidato;
