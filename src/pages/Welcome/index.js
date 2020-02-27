import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'galio-framework';
import {
  Container,
  Background,
  HeaderWelcome,
  HeaderLogo,
  WelcomeTitle,
  WelcomeSubtitle,
  ButtonGroup,
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
          <Button
            color="#FFF"
            onPress={() => navigation.navigate('Login')}
            style={{
              marginBottom: 15,
            }}
          >
            <AlunoText>Sou Aluno</AlunoText>
          </Button>
          <Button color="#FFF" onPress={() => navigation.navigate('Candidato')}>
            <AlunoText>Sou Candidato</AlunoText>
          </Button>
          <OrField>
            <Divisor style={{ marginRight: 10 }} />
            <OrText>Ou</OrText>
            <Divisor style={{ marginLeft: 10 }} />
          </OrField>
          <Button
            color="#00000069"
            onPress={() => navigation.navigate('Subscribe')}
          >
            <CandidatoText>Quero me Inscrever</CandidatoText>
          </Button>
        </ButtonGroup>
      </Container>
    </>
  );
}

Welcome.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Welcome;
