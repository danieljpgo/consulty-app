import React from 'react';
import { Linking } from 'react-native';

import Text from '../Text';
import Title from '../Title';
import Button from '../Button';
import heartIcon from '../../assets/images/icons/heart-outline.png';
import unfavorite from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
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
  liked?: boolean;
  teacher: Teacher;
}

const Card: React.FC<Props> = (props) => {
  const { liked, teacher } = props;
  const { avatar, bio, cost, name, subject, user_id, whatsapp } = teacher;

  function handleLinkToWhatsapp(whatsappNumber: string) {
    Linking.openURL(`whatsapp://send?phone=${whatsappNumber}`);
  }

  return (
    <Container>
      <Content>
        <Header>
          <Avatar
            source={{
              uri: avatar,
            }}
          />
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
            variants={liked ? 'error' : 'primary'}
            source={liked ? unfavorite : heartIcon}
          />
          <Spacing width={1} />
          <Button
            flex={1}
            size="small"
            align="center"
            flexDirection="row"
            variants="secundary"
            source={whatsappIcon}
            onPress={() => handleLinkToWhatsapp(whatsapp)}
          >
            Entrar em contato
          </Button>
        </Actions>
      </Footer>
    </Container>
  );
};

export default Card;
