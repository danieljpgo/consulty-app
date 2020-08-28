import styled, { css } from 'styled-components/native';

interface TitleProps {
  bold?: boolean;
}

const Title = styled.Text<TitleProps>`
  color: ${(props) => props.theme.colors.text.constrast};
  font-family: 'Poppins_400Regular';
  font-size: ${(props) => props.theme.fontSize.large}px;

  ${(props) =>
    props.bold &&
    css`
      font-family: 'Poppins_600SemiBold';
    `}
`;

export default Title;
