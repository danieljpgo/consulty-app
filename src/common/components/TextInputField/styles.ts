import styled, { css } from 'styled-components/native';
import { TextInput as Input } from 'react-native-gesture-handler';

interface Container {
  flex?: number;
}

export const Container = styled.View<Container>`
  ${(props) =>
    props.flex &&
    css`
      flex: ${props.flex};
    `};
`;

export const TextInput = styled(Input)`
  border-radius: ${(props) => props.theme.shapes.borderRadius}px;
  padding: 0 ${(props) => props.theme.unit}px;
  margin-top: ${(props) => props.theme.unit / 4}px;
  background-color: ${(props) => props.theme.colors.surface.base};
  font-size: ${(props) => props.theme.fontSize.medium}px;

  height: ${(props) => props.theme.unit * 3}px;
`;
