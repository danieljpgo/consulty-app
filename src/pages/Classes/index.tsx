import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Button from '../../common/components/Button';

import { Container, Content, Description, PageTitle } from './styles';

const Classes: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Content>
        <PageTitle fontFamily="Archivo" size="xlarge" color="constrast" bold>
          Quer ser um consultor?
        </PageTitle>
        <Description fontFamily="Poppins" size="large" color="light">
          Para começar, você precisa se cadastrar como um em nossa plataforma
          web
        </Description>
      </Content>

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
