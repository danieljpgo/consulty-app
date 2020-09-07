import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import TitleComp from '../../components/Title';

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.primary.main};
  padding: ${(props) => props.theme.unit * 2}px
    ${(props) => props.theme.unit * 2}px ${(props) => props.theme.unit}px
    ${(props) => props.theme.unit * 2}px;
`;

export const Navbar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled(BorderlessButton)``;

export const Title = styled(TitleComp)`
  padding: ${(props) => props.theme.unit * 4}px 0;
`;
