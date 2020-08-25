import styled, { css } from 'styled-components/native';

interface TitleProps {
  bold?: boolean,
}

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.primary.main};
  flex: 1;
  justify-content: center;
  padding: ${(props) => props.theme.unit * 2}px;
`;

export const Hero = styled.Image`
  width: 100%;
  resizeMode: contain;
  margin-bottom: ${(props) => props.theme.unit * 8}px;
`;

export const Title = styled.Text<TitleProps>`
  color: ${(props) => props.theme.colors.text.constrast};
  font-size: ${(props) => props.theme.fontSize.large}px;
  ${(props) => props.bold && css`
    font-weight: bold
  `}
  
`;