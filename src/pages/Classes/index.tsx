import React from 'react';
import { useNavigation } from '@react-navigation/native';

import backgroundClassesPage from '../../common/assets/images/give-classes-background.png';
import Button from '../../common/components/Button';

import { Container, BackgroundImg, Description, PageTitle } from './styles';

const Classes: React.FC = () => {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <Container>
      <BackgroundImg resizeMode="contain" source={backgroundClassesPage}>
        <PageTitle fontFamily="Archivo" size="xlarge" color="constrast" bold>
          Quer ser um proffy?
        </PageTitle>
        <Description fontFamily="Poppins" size="medium" color="light">
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web
        </Description>
      </BackgroundImg>

      <Button
        onPress={() => handleNavigateBack()}
        variants="secundary"
        size="small"
        align="center"
      >
        ok
      </Button>
    </Container>
  );
};

export default Classes;
