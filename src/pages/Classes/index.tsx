import React from 'react';
import { Text } from 'react-native';

import backgroundClassesPage from '../../common/assets/images/give-classes-background.png';

import { Container, BackgroundImg } from './styles';

const Classes: React.FC = () => {
  return (
    <Container>
      <BackgroundImg source={backgroundClassesPage}>
        <Text>a</Text>
      </BackgroundImg>
    </Container>
  );
};

export default Classes;
