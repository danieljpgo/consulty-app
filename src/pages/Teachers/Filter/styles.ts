import styled from 'styled-components/native';

export const Container = styled.View``;

export const Wrapper = styled.View`
  padding-top: ${(props) => props.theme.unit / 2}px;
  flex-direction: row;
  align-items: flex-end;
`;
