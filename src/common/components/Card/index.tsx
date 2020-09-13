import React from 'react';

import Text from '../Text';
import Title from '../Title';
import Button from '../Button';

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

const Card: React.FC = () => {
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
        </Text>
      </Content>
      <Footer>
        <Price>
          <Text color="base" size="medium" fontFamily="Poppins">
            Preço/hora
          </Text>
          <Text color="base" size="medium" fontFamily="Poppins">
            R$ 20,00
          </Text>
        </Price>
        <Actions>
          <Button size="small" variants="primary">
            C
          </Button>
          <Button size="small" variants="secundary">
            Entrar em contato
          </Button>
        </Actions>
      </Footer>
    </Container>
  );
};

export default Card;
