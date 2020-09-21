import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  border-radius: ${(props) => props.theme.shapes.borderRadius}px;
  border-color: ${(props) => props.theme.colors.lines.constrast};
  border-width: 1px;
  overflow: hidden;
  margin-bottom: ${(props) => props.theme.unit}px;
`;

export const Content = styled.View`
  background-color: ${(props) => props.theme.colors.surface.base};
  padding: ${(props) => props.theme.unit * 1.5}px
    ${(props) => props.theme.unit * 1.5}px ${(props) => props.theme.unit}px
    ${(props) => props.theme.unit * 1.5}px;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-bottom: ${(props) => props.theme.unit}px;
`;

export const Avatar = styled.Image`
  height: 64px;
  width: 64px;
  border-radius: 32px;
  background-color: ${(props) => props.theme.colors.lines.constrast};
`;

export const Profile = styled.View`
  flex-direction: column;
  justify-content: center;
  padding: 0 ${(props) => props.theme.unit}px;
`;

export const Footer = styled.View`
  border-color: ${(props) => props.theme.colors.lines.constrast};
  border-top-width: 1px;
  background-color: ${(props) => props.theme.colors.surface.constrast};
  padding: ${(props) => props.theme.unit}px
    ${(props) => props.theme.unit * 1.5}px
    ${(props) => props.theme.unit * 1.5}px
    ${(props) => props.theme.unit * 1.5}px;
`;

export const Price = styled.View`
  justify-content: center;
  padding-bottom: ${(props) => props.theme.unit}px;
  flex-direction: row;
`;

export const Actions = styled.View`
  flex-direction: row;
  width: 100%;
`;

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
