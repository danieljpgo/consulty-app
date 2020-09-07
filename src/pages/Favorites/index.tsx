import React from 'react';

import Card from '../../common/components/Card';
import Header from '../../common/layout/Header';

import { Container } from './styles';

const Favorites: React.FC = () => {
  return (
    <Container>
      <Header />
      <Card />
    </Container>
  );
};

export default Favorites;
