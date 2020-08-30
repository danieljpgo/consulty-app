import styled, { css } from 'styled-components/native';

interface TextProps {
  fontFamily: 'Poppins' | 'Archivo';
}

const fontFamily = {
  Poppins: css`
    font-family: 'Poppins_400Regular';
  `,
  Archivo: css`
    font-family: 'Archivo_400Regular';
  `,
};

const Text = styled.Text<TextProps>`
  color: ${(props) => props.theme.colors.text.light};
  font-size: ${(props) => props.theme.fontSize.medium}px;
  ${(props) => fontFamily[props.fontFamily]};
`;

export default Text;
