import React from 'react';

import backgroundClassesPage from '../../common/assets/images/give-classes-background.png';
import Title from '../../common/components/Title';
import Text from '../../common/components/Text';
import Button from '../../common/components/Button';

import { Container, BackgroundImg } from './styles';

const Classes: React.FC = () => {
  return (
    <Container>
      <BackgroundImg resizeMode="contain" source={backgroundClassesPage}>
        <Title fontFamily="Archivo" size="xlarge" bold>
          Quer ser um proffy?
        </Title>
        <Text fontFamily="Poppins">
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web
        </Text>
      </BackgroundImg>

      <Button variants="secundary" align="center">
        ok
      </Button>
    </Container>
  );
};

export default Classes;
