import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import Card from '../../common/components/Card';
import Header from '../../common/layout/Header';
import light from '../../styles/themes/light';
import api from '../../common/services/api';

import { Container, Content, FilterButton } from './styles';
import Filter from './Filter';
import { Form, Teacher } from './types';

const Teachers: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>();

  const [isFilterVisible, setIsFilterVisible] = useState(true);

  async function getTeachers(filter: Form): Promise<Teacher[]> {
    const { daysOfWeek, time, subject } = filter;

    // const teacherList = await api
    //   .get<Teacher[]>('classes', {
    //     params: {
    //       ...(daysOfWeek && { daysOfWeek }),
    //       ...(time && { time }),
    //       ...(subject && { subject }),
    //     },
    //   })
    //   .then((response) => response.data)
    //   .catch((error) => console.log(error));

    // if (teachers) {
    //   return teacherList;
    // } throw Error.
  }

  function handleToggleFilter() {
    setIsFilterVisible((prev) => !prev);
  }

  async function handleSubmit(form: Form) {
    console.log(form);
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
        {teachers && teachers.map((teacher) => <Card teacher={teacher} />)}
      </Content>
    </Container>
  );
};

export default Teachers;
