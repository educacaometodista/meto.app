import React from 'react';
import { StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Container,
  Background,
  Student,
  DocumentContainer,
  DocumentTitle,
  DocumentInput,
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
          <DocumentInput />

          <ContinueContainer>
            <ContinueButton>
              <ContinueText>Continuar</ContinueText>
            </ContinueButton>
          </ContinueContainer>
        </DocumentContainer>

        <SubscribeContainer>
          <SubscribeButton>
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
