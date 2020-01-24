import styled from 'styled-components';

import bg from '../../assets/img/background2.png';

export const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const Background = styled.Image.attrs({
  source: bg,
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export const DocumentContainer = styled.View`
  flex: 1;
  width: 80%;
  margin-top: 50%;
  justify-content: flex-start;
  align-items: center;
`;

export const DocumentTitle = styled.Text`
  font-size: 18px;
`;

export const DocumentInput = styled.TextInput.attrs({
  placeholder: 'Digite seu CPF',
})`
  background: #fff;
  width: 100%;
  max-width: 300px;
  padding: 0px 10px;
  height: 60px;
  margin-top: 10px;
  border-radius: 30px;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 2;
`;

export const ContinueContainer = styled.View`
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ContinueButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: #073a78;
  height: 40px;
  width: 100%;
  max-width: 300px;
  border-radius: 20px;
`;

export const ContinueText = styled.Text`
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;

export const SubscribeContainer = styled.View`
  margin: 0 auto;
  width: 100%;
`;
export const SubscribeButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
`;
export const SubscribeText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
