import React from 'react';
import { Container, Hero, ButtonContainer, ActionsContainer, Connetions, Content } from './styles';
import Title from '../../common/components/Title';
import Button from '../../common/components/Button';
import heroImg from '../../common/assets/images/landing.png';
import studyIcon from '../../common/assets/images/icons/study.png';
import giveClassesIcon from '../../common/assets/images/icons/give-classes.png';


const Landing: React.FC = () => {
  return (
    <Container>
      <Hero source={heroImg} />

      <Content>
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
          Total de 385 conexões já realizadas
        </Connetions>
      </Content>
    </Container>
  );
};

export default Landing;
