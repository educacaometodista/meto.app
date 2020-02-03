import React from 'react';
import {
  Container,
  Background,
  HeaderWelcome,
  HeaderLogo,
  WelcomeTitle,
  WelcomeSubtitle,
  ButtonGroup,
  AlunoButton,
  AlunoText,
  CandidatoButton,
  CandidatoText,
  OrField,
  OrText,
  Divisor,
} from './styles';
import { Bold } from '../../styles/global';

function Welcome({ navigation }) {
  return (
    <>
      <Container>
        <Background />
        <HeaderWelcome>
          <HeaderLogo />
          <WelcomeTitle>
            Metô<Bold>App</Bold>
          </WelcomeTitle>
          <WelcomeSubtitle>Lorem ipsum dolor sit amet.</WelcomeSubtitle>
        </HeaderWelcome>
        <ButtonGroup>
          <AlunoButton onPress={() => {}}>
            <AlunoText>Sou Aluno</AlunoText>
          </AlunoButton>
          <CandidatoButton onPress={() => navigation.navigate('Candidato')}>
            <CandidatoText>Sou Candidato</CandidatoText>
          </CandidatoButton>
          <OrField>
            <Divisor style={{ marginRight: 10 }} />
            <OrText>Ou</OrText>
            <Divisor style={{ marginLeft: 10 }} />
          </OrField>
          <CandidatoButton onPress={() => {}}>
            <CandidatoText>Quero me Inscrever</CandidatoText>
          </CandidatoButton>
        </ButtonGroup>
      </Container>
    </>
  );
}

export default Welcome;
