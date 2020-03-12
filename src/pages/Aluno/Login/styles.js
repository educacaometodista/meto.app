import styled from 'styled-components';

import bg from '../../../assets/img/background.png';
import logo from '../../../assets/img/logo.png';

export const HeaderLogo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  max-width: 200px;
  max-height: 200px;
  margin-bottom: 40px;
`;

export const Container = styled.View`
  height: 100%;
  flex: 1;
  padding: 0 5%;
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
