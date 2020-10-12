import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import Card from '../../common/components/Card';
import Header from '../../common/layout/Header';
import light from '../../styles/themes/light';

import { Container, Content, FilterButton } from './styles';
import Filter from './Filter';

const Teachers: React.FC = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  function handleToggleFilter() {
    setIsFilterVisible((prev) => !prev);
  }

  function handleSubmit() {
    setIsFilterVisible(false);
  }

  return (
    <Container>
      <Header
        title="Proffys disponíveis"
        action={
          <FilterButton onPress={() => handleToggleFilter()}>
            <Feather
              name="filter"
              size={25}
              color={light.colors.surface.base}
            />
          </FilterButton>
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
