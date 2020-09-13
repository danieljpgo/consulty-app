import React from 'react';

import Card from '../../common/components/Card';
import Header from '../../common/layout/Header';

import { Container, Content } from './styles';

const Teachers: React.FC = () => {
  return (
    <Container>
      <Header title="Proffys disponíveis" />
      <Content>
        <Card />
      </Content>
    </Container>
  );
};

export default Teachers;
