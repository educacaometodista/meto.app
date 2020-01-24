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
} from './styles';
import { Bold } from '../../styles/global';

function Welcome() {
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
          <AlunoButton>
            <AlunoText>Sou Aluno</AlunoText>
          </AlunoButton>
          <CandidatoButton>
            <CandidatoText>Sou Candidato</CandidatoText>
          </CandidatoButton>
        </ButtonGroup>
      </Container>
    </>
  );
}

export default Welcome;
