import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.primary.main};
  flex: 1;
  justify-content: center;
`;

export const Content = styled.View`
  padding: 0 ${(props) => props.theme.unit * 2}px;
`;

export const Hero = styled.Image`
  width: 100%;
  height: 242px;
  margin-bottom: ${(props) => props.theme.unit * 2}px;
`;

export const ActionsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${(props) => props.theme.unit * 2}px;
`;

export const ButtonContainer = styled.View`
  width: ${(props) => screenWidth / 2 - props.theme.unit * 2.5}px;
`;

export const Connetions = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: ${(props) => props.theme.fontSize.medium}px;
  color: ${(props) => props.theme.colors.title.base};
  max-width: ${(props) => screenWidth / 2 - props.theme.unit * 3}px;
  margin-top: ${(props) => props.theme.unit * 2}px;
`;
