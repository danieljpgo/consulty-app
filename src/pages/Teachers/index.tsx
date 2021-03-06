import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { Linking } from 'react-native';

import Card from '../../common/components/Card';
import Header from '../../common/layout/Header';
import light from '../../styles/themes/light';
import api from '../../common/services/api';
import asyncStorage from '../../common/utils/asyncStorage';

import { Container, FilterButton } from './styles';
import Filter from './Filter';
import { Form, Teacher } from './types';
import List from './List';

const Teachers: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>();
  const [favorites, setFavorites] = useState<Teacher[]>([]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getFavoritesTeachers() {
      const favoriteds = await asyncStorage.get<Teacher[]>('favorites');
      if (favoriteds) {
        setFavorites(favoriteds);
      }
    }

    async function getInitialTeachers() {
      setIsLoading(true);
      try {
        await api
          .get<Teacher[]>('classes')
          .then((res) => setTeachers(res.data))
          .then(() => setIsLoading(false));
      } catch (e) {
        setIsError(true);
        setIsLoading(false);
        setTeachers([]);
      }
    }

    getFavoritesTeachers();
    getInitialTeachers();
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

  function handleToggleFilter() {
    setIsFilterVisible((prev) => !prev);
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

  async function handleLinkToWhatsapp(whatsapp: string, user_id: number) {
    try {
      await Linking.openURL(`whatsapp://send?phone=${whatsapp}`);
      api.post('connections', {
        user_id,
      });
    } catch {
      console.log('error');
    }
  }

  function handleToggleFavorite(
    favoritedTeacher: Teacher,
    favoriteds: Teacher[]
  ) {
    const { id } = favoritedTeacher;
    const hasFavorited = Boolean(
      favoriteds.find((teacher) => teacher.id === id)
    );

    if (hasFavorited) {
      setFavorites((prev) => prev.filter((favorite) => favorite.id !== id));
      asyncStorage.set<Teacher[]>(
        'favorites',
        favoriteds.filter((favorite) => favorite.id !== id)
      );
    } else {
      setFavorites((prev) => [...prev, favoritedTeacher]);
      asyncStorage.set<Teacher[]>('favorites', [
        ...favoriteds,
        favoritedTeacher,
      ]);
    }
  }

  return (
    <Container>
      <Header
        title="Consultores disponíveis"
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
      <List teachers={teachers} isError={isError} isLoading={isLoading}>
        {teachers &&
          teachers.map((teacher) => (
            <Card
              key={teacher.id}
              teacher={teacher}
              favorited={Boolean(favorites.find((f) => f.id === teacher.id))}
              onFavorite={(favoritedTeacher) =>
                handleToggleFavorite(favoritedTeacher, favorites)
              }
              onLinkToWhatsapp={(whatsapp, userId) =>
                handleLinkToWhatsapp(whatsapp, userId)
              }
            />
          ))}
      </List>
    </Container>
  );
};

export default Teachers;
