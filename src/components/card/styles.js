import styled from 'styled-components';

export const Wrapper = styled.View`
  flex-direction: row;
`;

export const Container = styled.TouchableOpacity`
  width: 30%;
  margin: 0 1.5%;
  height: 130px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  background: #fff;
`;
export const Icon = styled.Image`
  width: 80px;
  height: 80px;
`;
export const Text = styled.Text`
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
  font-size: 12px;
  color: #666;
`;
