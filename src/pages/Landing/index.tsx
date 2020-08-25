import React from 'react';
import { Container, Hero, Title } from './styles';

import heroImg from '../../assets/images/landing.png'

const Landing: React.FC = () => {
  return (
    <Container>
      <Hero source={heroImg} />
      <Title>Seja bem-vindo</Title>
      <Title bold>O que deseja fazer?</Title>
    </Container>
  );
}

export default Landing;
