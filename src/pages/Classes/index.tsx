import React from 'react';
import { useNavigation } from '@react-navigation/native';

import backgroundClassesPage from '../../common/assets/images/give-classes-background.png';
import Button from '../../common/components/Button';

import { Container, BackgroundImg, Description, PageTitle } from './styles';

const Classes: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
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
        size="small"
        align="center"
        variants="secundary"
        onPress={() => handleNavigateBack()}
      >
        Ok
      </Button>
    </Container>
  );
};

export default Classes;
