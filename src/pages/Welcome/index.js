import React from 'react';
import PropTypes from 'prop-types';
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
          <AlunoButton onPress={() => navigation.navigate('Login')}>
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
          <CandidatoButton onPress={() => navigation.navigate('Subscribe')}>
            <CandidatoText>Quero me Inscrever</CandidatoText>
          </CandidatoButton>
        </ButtonGroup>
      </Container>
    </>
  );
}

// Welcome.navigationOptions = {

// }

Welcome.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Welcome;
