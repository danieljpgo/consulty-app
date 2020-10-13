import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import Card from '../../common/components/Card';
import Header from '../../common/layout/Header';
import light from '../../styles/themes/light';
import api from '../../common/services/api';
import Text from '../../common/components/Text';

import { Container, Content, FilterButton } from './styles';
import Filter from './Filter';
import { Form, Teacher } from './types';

const Teachers: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>();
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  async function getTeachers(filter: Form): Promise<Teacher[]> {
    const { daysOfWeek, time, subject } = filter;

    const params = {
      ...(daysOfWeek && { week_day: daysOfWeek }),
      ...(time && { time }),
      ...(subject && { subject }),
    };

    const list = await api
      .get<Teacher[]>('classes', { params })
      .then((response) => response.data);

    return list;
  }

  function handleToggleFilter() {
    setIsFilterVisible((prev) => !prev);
  }

  async function handleSubmit(form: Form) {
    const list = await getTeachers(form);

    setTeachers(list);
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
        {isFilterVisible && <Filter onSubmit={(form) => handleSubmit(form)} />}
      </Header>
      <Content>
        {teachers &&
          teachers.map((teacher) => (
            <Card key={teacher.id} teacher={teacher} />
          ))}
        {teachers?.length === 0 && (
          <Text color="base" fontFamily="Archivo" size="small">
            Nenhum proffy foi encontrado para sua busca
          </Text>
        )}
        {!teachers && (
          <Text color="light" fontFamily="Poppins" size="medium">
            Preencha as informações para encontrar um proffy
          </Text>
        )}
      </Content>
    </Container>
  );
};

export default Teachers;
