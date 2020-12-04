import React from 'react';

import Text from '../Text';
import Title from '../Title';
import Button from '../Button';
import heartIcon from '../../assets/images/icons/heart-outline.png';
import unfavorite from '../../assets/images/icons/unfavorite.png';
// import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import { Spacing } from '../Spacing';
import { Teacher } from '../../../pages/Teachers/types';

import {
  Container,
  Content,
  Header,
  Footer,
  Avatar,
  Profile,
  Price,
  Actions,
} from './styles';

interface Props {
  teacher: Teacher;
  favorited?: boolean;
  onFavorite: (teacher: Teacher, userId: number) => void;
  onLinkToWhatsapp: (whatsapp: string, userId: number) => void;
}

const Card = (props: Props) => {
  const { favorited, teacher, onFavorite, onLinkToWhatsapp } = props;
  const { avatar, bio, cost, name, subject, user_id, whatsapp } = teacher;

  function handleLinkToWhatsapp(whatsappNumber: string, userId: number) {
    onLinkToWhatsapp(whatsappNumber, userId);
  }

  function handleToggleFavorite(favoriteTeacher: Teacher, userId: number) {
    onFavorite(favoriteTeacher, userId);
  }

  return (
    <Container>
      <Content>
        <Header>
          <Avatar source={{ uri: avatar }} />
          <Profile>
            <Title color="base" size="large" fontFamily="Archivo" bold>
              {name}
            </Title>
            <Text color="base" size="small" fontFamily="Poppins">
              {subject}
            </Text>
          </Profile>
        </Header>
        <Text color="base" size="medium" fontFamily="Poppins">
          {bio}
        </Text>
      </Content>
      <Footer>
        <Price>
          <Text color="base" size="medium" fontFamily="Poppins">
            Preço/hora
          </Text>
          <Spacing width={0.5} />
          <Text color="primary" size="medium" fontFamily="Poppins" bold>
            R$ {cost}
          </Text>
        </Price>
        <Actions>
          <Button
            size="small"
            align="center"
            variants={favorited ? 'error' : 'primary'}
            source={favorited ? unfavorite : heartIcon}
            onPress={() => handleToggleFavorite(teacher, user_id)}
          />
          <Spacing width={1} />
          <Button
            flex={1}
            size="small"
            align="center"
            flexDirection="row"
            variants="secundary"
            // source={whatsappIcon}
            onPress={() => handleLinkToWhatsapp(whatsapp, user_id)}
          >
            Entrar em contato
          </Button>
        </Actions>
      </Footer>
    </Container>
  );
};

export default Card;
