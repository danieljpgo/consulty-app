import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0 ${(props) => props.theme.unit * 1}px;
  margin-top: ${(props) => -props.theme.unit * 4}px;
`;

export const MessageContainer = styled.View`
  border-radius: ${(props) => props.theme.shapes.borderRadius}px;
  border-color: ${(props) => props.theme.colors.lines.constrast};
  border-width: 1px;
  background-color: ${(props) => props.theme.colors.surface.base};
  padding: ${(props) => props.theme.unit * 1.5}px;
`;
