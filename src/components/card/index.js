import React from 'react';
import { StyleSheet } from 'react-native';
import { Wrapper, Container, Icon, Text } from './styles';

import elearning from '../../assets/img/icons/digital-learning/elearning.png';
import cap from '../../assets/img/icons/digital-learning/graduation-cap.png';
import library from '../../assets/img/icons/digital-learning/online-library.png';

export default function Card() {
  return (
    <Wrapper>
      <Container style={styles.shadow}>
        <Icon resizeMode="cover" source={elearning} />
        <Text>Moodle</Text>
      </Container>
      <Container style={styles.shadow}>
        <Icon resizeMode="cover" source={cap} />
        <Text>Portal do Aluno</Text>
      </Container>
      <Container style={styles.shadow}>
        <Icon resizeMode="cover" source={library} />
        <Text>SIGA</Text>
      </Container>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.38,
    shadowRadius: 16.0,

    elevation: 24,
  },
});
