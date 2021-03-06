import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import TitleComp from '../../components/Title';

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.primary.main};
  padding: ${(props) => props.theme.unit * 2.5}px
    ${(props) => props.theme.unit * 2}px ${(props) => props.theme.unit * 5.75}px
    ${(props) => props.theme.unit * 2}px;
`;

export const Navbar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled(BorderlessButton)`
  padding: ${(props) => props.theme.unit / 2}px;
  margin-left: -${(props) => props.theme.unit / 2}px;
  margin-right: -${(props) => props.theme.unit / 2}px;
`;

export const Content = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(TitleComp)`
  padding: ${(props) => props.theme.unit * 2}px 0
    ${(props) => props.theme.unit * 1.25}px 0;

  width: 70%;
`;
