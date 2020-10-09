import styled, { css } from 'styled-components/native';

interface Spacing {
  width?: number;
}

export const Spacing = styled.View<Spacing>`
  ${(props) =>
    props.width &&
    css`
      width: ${props.theme.unit * props.width}px;
    `};
`;
