import styled, { css } from 'styled-components/native';

interface ButtonProps {
  variants: 'primary' | 'secundary',
}

const variants = {
  primary: css`
    background-color: ${(props) => props.theme.colors.primary.lighter};
  `,
  secundary: css`
    background-color: ${(props) => props.theme.colors.secundary.main};
  `,
};

export const Container = styled.TouchableOpacity<ButtonProps>`
  justify-content: space-between;
  height: 150px;
  border-radius: ${(props) => props.theme.shapes.borderRadius}px;
  padding: ${(props) => props.theme.unit * 1.5}px;
  ${(props) => variants[props.variants]};
`;

export const Text = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: ${(props) => props.theme.fontSize.large}px;
  color: ${(props) => props.theme.colors.text.constrast};
`;

export const Image = styled.Image`

`;