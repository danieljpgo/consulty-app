import styled, { css, useTheme } from 'styled-components/native';
import { Dimensions } from 'react-native';
import Button from '../../common/components/Button/styles';
import { View } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.primary.main};
  flex: 1;
  justify-content: center;
  padding: 0 ${(props) => props.theme.unit * 2}px;
`;

export const Hero = styled.Image`
  width: 100%;
  resizeMode: contain;
  margin-bottom: ${(props) => props.theme.unit * 6}px;
`;

export const ActionsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${(props) => props.theme.unit * 2}px;
`;

export const ButtonContainer = styled.View`
  width: ${(props) => (screenWidth / 2) - props.theme.unit * 3}px;
`;

export const Connetions = styled.Text`
    font-family: 'Poppins_400Regular';
`;