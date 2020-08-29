import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary.main};
  justify-content: center;
  padding: ${(props) => props.theme.unit * 2}px;
`;

export const BackgroundImg = styled.ImageBackground`
  flex: 1;
  justify-content: center;
`;
