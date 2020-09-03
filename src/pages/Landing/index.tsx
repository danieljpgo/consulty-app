import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Title from '../../common/components/Title';
import Button from '../../common/components/Button';
import heartIcon from '../../common/assets/images/icons/heart.png';
import heroImg from '../../common/assets/images/landing.png';
import studyIcon from '../../common/assets/images/icons/study.png';
import giveClassesIcon from '../../common/assets/images/icons/give-classes.png';
import Text from '../../common/components/Text';

import {
  Container,
  Hero,
  ButtonContainer,
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
        <Title fontFamily="Poppins" size="large">
          Seja bem-vindo
        </Title>
        <Title fontFamily="Poppins" size="large" bold>
          O que deseja fazer?
        </Title>

        <ActionsContainer>
          <ButtonContainer>
            <Button size="large" variants="primary" source={studyIcon}>
              Estudar
            </Button>
          </ButtonContainer>

          <ButtonContainer>
            <Button
              size="large"
              variants="secundary"
              source={giveClassesIcon}
              onPress={() => handleNavigatePage('Classes')}
            >
              Dar Aulas
            </Button>
          </ButtonContainer>
        </ActionsContainer>

        <Connetions>
          Total de 385 conexões já realizadas <Image source={heartIcon} />
        </Connetions>
        <Text fontFamily="Poppins" size="small" color="light">
          Total de 385 conexões já realizadas <Image source={heartIcon} />
        </Text>
      </Content>
    </Container>
  );
};

export default Landing;
