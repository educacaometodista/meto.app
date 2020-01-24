import React from 'react';
import {
  Container,
  WelcomeTitle,
  AlunoButton,
  AlunoText,
  CandidatoButton,
  CandidatoText,
} from './styles';

function Welcome() {
  return (
    <>
      <Container>
        <WelcomeTitle>Metodista</WelcomeTitle>

        <AlunoButton>
          <AlunoText>Sou Aluno</AlunoText>
        </AlunoButton>
        <CandidatoButton>
          <CandidatoText>Sou Candidato</CandidatoText>
        </CandidatoButton>
      </Container>
    </>
  );
}

export default Welcome;
