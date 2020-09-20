import styled, { css } from 'styled-components/native';

interface TextProps {
  fontFamily: 'Poppins' | 'Archivo';
  size: 'large' | 'medium' | 'small';
  color: 'light' | 'base' | 'primary';
  bold?: boolean;
}

const fontFamily = (key: 'Poppins' | 'Archivo', bold?: boolean) => {
  const fonts = {
    Poppins: css`
      font-family: ${bold ? 'Poppins_600SemiBold' : 'Poppins_400Regular'};
    `,
    Archivo: css`
      font-family: ${bold ? 'Archivo_700Bold' : 'Archivo_400Regular'};
    `,
  };
  return fonts[key];
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

const colors = {
  light: css`
    color: ${(props) => props.theme.colors.text.light};
  `,
  base: css`
    color: ${(props) => props.theme.colors.text.base};
  `,
  primary: css`
    color: ${(props) => props.theme.colors.primary.main};
  `,
};

const Text = styled.Text<TextProps>`
  ${(props) => colors[props.color]};
  ${(props) => fontFamily(props.fontFamily, props.bold)};
  ${(props) => size[props.size]};
`;

export default Text;
