import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.ScrollView`
  flex: 1;
  padding: 0 ${(props) => props.theme.unit * 1}px;
  margin-top: ${(props) => -props.theme.unit * 4}px;
`;

export const FilterButton = styled(BorderlessButton)`
  padding: ${(props) => props.theme.unit / 2}px;
  margin-right: -${(props) => props.theme.unit / 2}px;
`;
