import styled from 'styled-components/native';

import Text from '../../common/components/Text';
import Title from '../../common/components/Title';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary.main};
  justify-content: center;
  padding: ${(props) => props.theme.unit * 2}px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.unit * 2}px;
`;

export const PageTitle = styled(Title)`
  max-width: ${(props) => props.theme.unit * 15}px;
`;

export const Description = styled(Text)`
  margin-top: ${(props) => props.theme.unit}px;
  max-width: ${(props) => props.theme.unit * 15}px;
`;
