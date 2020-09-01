import styled, { css } from 'styled-components/native';

interface TextProps {
  fontFamily: 'Poppins' | 'Archivo';
  size: 'large' | 'medium' | 'small';
}

const fontFamily = {
  Poppins: css`
    font-family: 'Poppins_400Regular';
  `,
  Archivo: css`
    font-family: 'Archivo_400Regular';
  `,
};

const size = {
  large: css`
    font-size: ${(props) => props.theme.fontSize.large}px;
  `,
  medium: css`
    font-size: ${(props) => props.theme.fontSize.medium}px;
  `,
  small: css`
    font-size: ${(props) => props.theme.fontSize.small}px;
  `,
};

const Text = styled.Text<TextProps>`
  color: ${(props) => props.theme.colors.text.light};
  ${(props) => fontFamily[props.fontFamily]};
  ${(props) => size[props.size]};
`;

export default Text;
