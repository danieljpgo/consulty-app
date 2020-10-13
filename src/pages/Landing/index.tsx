import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Title from '../../common/components/Title';
import Button from '../../common/components/Button';
import heartIcon from '../../common/assets/images/icons/heart.png';
import heroImg from '../../common/assets/images/landing.png';
import studyIcon from '../../common/assets/images/icons/study.png';
import giveClassesIcon from '../../common/assets/images/icons/give-classes.png';
import { Spacing } from '../../common/components/Spacing';
import api from '../../common/services/api';

import {
  Container,
  Hero,
  ActionsContainer,
  Connetions,
  Content,
} from './styles';

const Landing: React.FC = () => {
  const [totalConnection, setTotalConnection] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const getTotalConnection = async () => {
      const { total } = await api
        .get<{ total: number }>('connections/count')
        .then((response) => response.data);
      setTotalConnection(total);
    };

    getTotalConnection();
  }, []);

  function handleNavigatePage(router: string) {
    navigation.navigate(router);
  }

  const labelConnection = `Total de ${totalConnection} conexões já realizadas`;

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
          {labelConnection}
          <Image source={heartIcon} />
        </Connetions>
      </Content>
    </Container>
  );
};

export default Landing;
