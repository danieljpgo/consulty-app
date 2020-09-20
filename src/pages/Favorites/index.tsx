import React from 'react';

import Card from '../../common/components/Card';
import Header from '../../common/layout/Header';

import { Container, Content } from './styles';

const Favorites: React.FC = () => {
  return (
    <Container>
      <Header title="Meus proffys favoritos" />
      <Content>
        <Card />
      </Content>
    </Container>
  );
};

export default Favorites;
