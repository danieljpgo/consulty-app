import React from 'react';
import { Image, Text, View } from 'react-native';
import { Container, Hero, ButtonContainer, ActionsContainer, Connetions } from './styles';
import Title from '../../common/components/Title';
import Button from '../../common/components/Button';
import heroImg from '../../common/assets/images/landing.png';
import studyIcon from '../../common/assets/images/icons/study.png';
import giveClassesIcon from '../../common/assets/images/icons/give-classes.png';


const Landing: React.FC = () => {
  return (
    <Container>
      <Hero source={heroImg} />

      <Title>Seja bem-vindo</Title>
      <Title bold>O que deseja fazer?</Title>

      <ActionsContainer>
        <ButtonContainer>
          <Button
            variants="primary"
            source={studyIcon}
          >
            Estudar
          </Button>
        </ButtonContainer>

        <ButtonContainer>
          <Button
            variants="secundary"
            source={giveClassesIcon}
          >
            Dar Aulas
          </Button>
        </ButtonContainer>
      </ActionsContainer>

      <Connetions>
        Teste
      </Connetions>
    </Container>
  );
};

export default Landing;
