import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface Button {
  variants: 'primary' | 'secundary' | 'error';
  size: 'large' | 'small';
  align?: 'center';
  flex?: number;
  flexDirection?: 'row';
}

interface Image {
  spacing: boolean;
}

const variants = {
  primary: css`
    background-color: ${(props) => props.theme.colors.primary.lighter};
  `,
  secundary: css`
    background-color: ${(props) => props.theme.colors.secundary.main};
  `,
  error: css`
    background-color: ${(props) => props.theme.colors.warning};
  `,
};

const size = {
  large: css`
    height: ${(props) => props.theme.unit * 10}px;
    padding: ${(props) => props.theme.unit * 1.5}px;
  `,
  small: css`
    height: ${(props) => props.theme.unit * 4}px;
    padding: ${(props) => props.theme.unit * 1}px;
  `,
};

const align = {
  center: css`
    align-items: center;
    justify-content: center;
  `,
};

const flexDirection = {
  row: css`
    flex-direction: row;
  `,
};

// eslint-disable-next-line prettier/prettier
export const Container = styled(RectButton) <Button>`
  justify-content: space-between;
  border-radius: ${(props) => props.theme.shapes.borderRadius}px;
  ${(props) =>
    props.flex &&
    css`
      flex: ${props.flex};
    `};
  ${(props) => size[props.size]};
  ${(props) => variants[props.variants]};
  ${(props) => props.align && align[props.align]};
  ${(props) => props.flexDirection && flexDirection[props.flexDirection]};
`;

export const Text = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: ${(props) => props.theme.fontSize.large}px;
  color: ${(props) => props.theme.colors.text.constrast};
`;

export const Image = styled.Image<Image>`
  ${(props) =>
    props.spacing &&
    css`
      margin-right: ${props.theme.unit}px;
    `}
`;
