import styled, { css } from 'styled-components/native';

interface TitleProps {
  bold?: boolean;
  size: 'xlarge' | 'large';
  fontFamily: 'Poppins' | 'Archivo';
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

const sizes = {
  xlarge: css`
    font-size: ${(props) => props.theme.fontSize.xlarge}px;
  `,
  large: css`
    font-size: ${(props) => props.theme.fontSize.large}px;
  `,
};

const Title = styled.Text<TitleProps>`
  color: ${(props) => props.theme.colors.text.constrast};
  ${(props) => sizes[props.size]};
  ${(props) => fontFamily(props.fontFamily, props.bold)};
`;

export default Title;
