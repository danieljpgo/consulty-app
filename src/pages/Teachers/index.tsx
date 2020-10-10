import React, { useState } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import Card from '../../common/components/Card';
import Header from '../../common/layout/Header';
import light from '../../styles/themes/light';

import { Container, Content } from './styles';
import Filter from './Filter';

const Teachers: React.FC = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  function handleToggleFilter() {
    setIsFilterVisible((prev) => !prev);
  }

  function handleSubmit() {
    console.log('ai papai');
    setIsFilterVisible(false);
  }

  return (
    <Container>
      <Header
        title="Proffys disponíveis"
        action={
          <BorderlessButton onPress={() => handleToggleFilter()}>
            <Feather
              name="filter"
              size={25}
              color={light.colors.surface.base}
            />
          </BorderlessButton>
        }
      >
        {isFilterVisible && <Filter onSubmit={() => handleSubmit()} />}
      </Header>
      <Content>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Content>
    </Container>
  );
};

export default Teachers;
