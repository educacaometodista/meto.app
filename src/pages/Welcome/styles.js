import styled from 'styled-components';
import { darken, lighten } from 'polished';

import bg from '../../assets/img/bg.jpg';

export const Container = styled.View`
  flex: 1;
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
  z-index: -5;
  transform: rotate(180deg);
`;

export const HeaderWelcome = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const HeaderLogo = styled.Image.attrs({})``;

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
  flex: 1;
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
  font-weight: bold;
`;

export const CandidatoButton = styled.TouchableOpacity`
  width: 80%;
  max-width: 300px;
  background: #00000069;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 20px;
`;

export const CandidatoText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
