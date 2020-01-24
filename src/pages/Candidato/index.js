import React from 'react';

import {
  Container,
  Background,
  DocumentContainer,
  DocumentTitle,
  DocumentInput,
  SubscribeContainer,
  SubscribeButton,
  SubscribeText,
} from './styles';

function Candidato({ navigation }) {
  return (
    <Container>
      <Background />
      <DocumentContainer>
        <DocumentTitle>Verifique a sua situação</DocumentTitle>
        <DocumentInput />
        <SubscribeContainer>
          <SubscribeButton>
            <SubscribeText>Inscreva-se no vestibular</SubscribeText>
          </SubscribeButton>
        </SubscribeContainer>
      </DocumentContainer>
    </Container>
  );
}

export default Candidato;
