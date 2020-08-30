import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
  variants: 'primary' | 'secundary';
  size: 'large' | 'small';
  align?: 'center';
}

const variants = {
  primary: css`
    background-color: ${(props) => props.theme.colors.primary.lighter};
  `,
  secundary: css`
    background-color: ${(props) => props.theme.colors.secundary.main};
  `,
};

const size = {
  large: css`
    height: 150px;
    padding: ${(props) => props.theme.unit * 1.5}px;
  `,
  small: css`
    height: 58px;
    padding: ${(props) => props.theme.unit}px;
  `,
};

const align = {
  center: css`
    align-items: center;
    justify-content: center;
  `,
};

// eslint-disable-next-line prettier/prettier
export const Container = styled(RectButton) <ButtonProps>`
  justify-content: space-between;
  border-radius: ${(props) => props.theme.shapes.borderRadius}px;

  ${(props) => size[props.size]};
  ${(props) => variants[props.variants]};
  ${(props) => props.align && align[props.align]};
`;

export const Text = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: ${(props) => props.theme.fontSize.large}px;
  color: ${(props) => props.theme.colors.text.constrast};
`;

export const Image = styled.Image``;
