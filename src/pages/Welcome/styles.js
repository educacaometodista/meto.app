import styled from 'styled-components';

import logo from '../../assets/img/logo.png';
import bg from '../../assets/img/background.png';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.Image.attrs({
  source: bg,
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const HeaderWelcome = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const HeaderLogo = styled.Image.attrs({
  source: logo,
  resizeMode: 'center',
})`
  max-width: 200px;
  max-height: 200px;
  margin-bottom: 20px;
`;

export const WelcomeTitle = styled.Text`
  font-size: 28px;
  color: #333;
  letter-spacing: -1px;
`;

export const WelcomeSubtitle = styled.Text`
  font-size: 10px;
  color: #999;
`;

export const ButtonGroup = styled.View`
  margin: 0 auto;
  margin-bottom: 30px;
  min-height: 140px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const AlunoButton = styled.TouchableOpacity`
  width: 80%;
  max-width: 300px;
  background: #fff;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  border-radius: 20px;
`;

export const AlunoText = styled.Text`
  color: #333;
  text-transform: uppercase;
  font-weight: bold;
`;

export const CandidatoButton = styled.TouchableOpacity`
  width: 80%;
  max-width: 300px;
  background: #00000069;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 20px;
`;

export const CandidatoText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
`;

export const OrField = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const OrText = styled.Text`
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
`;

export const Divisor = styled.View`
  height: 2px;
  width: 33%;
  background: #fff;
`;
