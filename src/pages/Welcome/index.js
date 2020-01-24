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
  HelpButton,
  HelpText,
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
          <AlunoButton>
            <AlunoText>Sou Aluno</AlunoText>
          </AlunoButton>
          <CandidatoButton onPress={() => navigation.navigate('Candidato')}>
            <CandidatoText>Sou Candidato</CandidatoText>
          </CandidatoButton>
          <HelpButton>
            <HelpText>
              Precisa de ajuda? <Bold>Entre em contato.</Bold>
            </HelpText>
          </HelpButton>
        </ButtonGroup>
      </Container>
    </>
  );
}

export default Welcome;
