import React from 'react';

import Text from '../Text';
import Title from '../Title';
import Button from '../Button';
import heartIcon from '../../assets/images/icons/heart-outline.png';
import unfavorite from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import { Spacing } from '../Spacing';

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
}

const Card: React.FC<Props> = (props) => {
  const { liked } = props;

  return (
    <Container>
      <Content>
        <Header>
          <Avatar
            source={{
              uri:
                'https://avatars0.githubusercontent.com/u/37938090?s=460&u=139da297b51ea25e70597485f65d346cc86ec2a5&v=4',
            }}
          />
          <Profile>
            <Title color="base" size="large" fontFamily="Archivo" bold>
              Daniel Jorge
            </Title>
            <Text color="base" size="small" fontFamily="Poppins">
              Xyz
            </Text>
          </Profile>
        </Header>
        <Text color="base" size="medium" fontFamily="Poppins">
          As vezes não sei nem onde eu tô, mas consigo me localizar facilmente
          em qualquer lugar. Tenho memória fotográfica e nunca fico perdido.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aut
          consequatur quia repudiandae praesentium totam corrupti, a ratione,
          reprehenderit rem tempora ipsam perferendis officia soluta, ipsa eius
          nostrum reiciendis dignissimos?
        </Text>
      </Content>
      <Footer>
        <Price>
          <Text color="base" size="medium" fontFamily="Poppins">
            Preço/hora
          </Text>
          <Spacing width={0.5} />
          <Text color="primary" size="medium" fontFamily="Poppins" bold>
            R$ 20,00
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
          >
            Entrar em contato
          </Button>
        </Actions>
      </Footer>
    </Container>
  );
};

export default Card;
