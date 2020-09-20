import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const Content = styled.ScrollView`
  flex: 1;
  padding: 0 ${(props) => props.theme.unit}px;
  margin-top: ${(props) => -props.theme.unit * 4}px;
`;
