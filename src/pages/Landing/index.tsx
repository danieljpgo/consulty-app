import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Title from '../../common/components/Title';
import Button from '../../common/components/Button';
import heartIcon from '../../common/assets/images/icons/heart.png';
import heroImg from '../../common/assets/images/landing.png';
import studyIcon from '../../common/assets/images/icons/study.png';
import giveClassesIcon from '../../common/assets/images/icons/give-classes.png';
import { Spacing } from '../../common/components/Spacing';

import {
  Container,
  Hero,
  ActionsContainer,
  Connetions,
  Content,
} from './styles';

const Landing: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigatePage(router: string) {
    navigation.navigate(router);
  }

  return (
    <Container>
      <Hero source={heroImg} style={{ resizeMode: 'contain' }} />

      <Content>
        <Title color="constrast" fontFamily="Poppins" size="large">
          Seja bem-vindo
        </Title>
        <Title color="constrast" fontFamily="Poppins" size="large" bold>
          O que deseja fazer?
        </Title>

        <ActionsContainer>
          <Button
            flex={1}
            size="large"
            variants="primary"
            source={studyIcon}
            onPress={() => handleNavigatePage('Tabs')}
          >
            Estudar
          </Button>
          <Spacing width={1} />
          <Button
            flex={1}
            size="large"
            variants="secundary"
            source={giveClassesIcon}
            onPress={() => handleNavigatePage('Classes')}
          >
            Dar Aulas
          </Button>
        </ActionsContainer>

        <Connetions fontFamily="Poppins" size="small" color="light">
          Total de 385 conexões já realizadas <Image source={heartIcon} />
        </Connetions>
      </Content>
    </Container>
  );
};

export default Landing;
