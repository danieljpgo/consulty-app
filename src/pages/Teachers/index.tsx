import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';

import Card from '../../common/components/Card';
import Header from '../../common/layout/Header';
import light from '../../styles/themes/light';
import api from '../../common/services/api';
import Text from '../../common/components/Text';
import asyncStorage from '../../common/utils/asyncStorage';

import { Container, Content, FilterButton, MessageContainer } from './styles';
import Filter from './Filter';
import { Form, Teacher } from './types';

const Teachers: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>();
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getFavoritesTeachers() {
      const favoriteds = await asyncStorage.get<string[]>('favorites');
      if (favoriteds) {
        setFavorites(favoriteds);
      }
    }

    getFavoritesTeachers();
  }, []);

  async function getTeachers(filter: Form): Promise<Teacher[]> {
    const { daysOfWeek, time, subject } = filter;

    const params = {
      ...(daysOfWeek && { week_day: daysOfWeek }),
      ...(time && { time }),
      ...(subject && { subject }),
    };

    const response = await api
      .get<Teacher[]>('classes', { params })
      .then((res) => res.data);

    return response;
  }

  async function handleSubmit(form: Form) {
    try {
      const list = await getTeachers(form);
      setTeachers(list);
      setIsError(false);
    } catch {
      setIsError(true);
    }

    setIsFilterVisible(false);
  }

  function handleToggleFilter() {
    setIsFilterVisible((prev) => !prev);
  }

  function handleFavorite(id: string, favoriteds: string[]) {
    if (favorites.includes(id.toString())) {
      setFavorites((prev) => prev.filter((favorite) => favorite !== id));
      asyncStorage.set<string[]>(
        'favorites',
        favoriteds.filter((favorite) => favorite !== id)
      );
    } else {
      setFavorites((prev) => [...prev, id]);
      asyncStorage.set<string[]>('favorites', [...favoriteds, id]);
    }
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
            <Card
              key={teacher.id}
              teacher={teacher}
              liked={favorites.includes(teacher.id.toString())}
              onFavorite={(id) => handleFavorite(id, favorites)}
            />
          ))}
        {!teachers && (
          <MessageContainer>
            <Text
              bold
              size="large"
              color="base"
              fontFamily="Archivo"
              style={{ textAlign: 'center' }}
            >
              Preencha o filtro para encontrar um proffy a sua cara {':)'}
            </Text>
          </MessageContainer>
        )}
        {teachers?.length === 0 && (
          <MessageContainer>
            <Text
              bold
              size="large"
              color="base"
              fontFamily="Archivo"
              style={{ textAlign: 'center' }}
            >
              Nenhum proffy foi encontrado para sua busca {':('}
            </Text>
          </MessageContainer>
        )}
        {/* {isError && (
          <MessageContainer>
            <Text
              bold
              size="large"
              color="base"
              fontFamily="Archivo"
              style={{ textAlign: 'center' }}
            >
              Error ao buscar os dados dos proffys, tentar novamente mais tarde
            </Text>
          </MessageContainer>
        )} */}
      </Content>
    </Container>
  );
};

export default Teachers;
