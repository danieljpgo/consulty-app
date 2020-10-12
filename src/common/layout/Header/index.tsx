import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import { Container, Navbar, BackButton, Title, Content } from './styles';

interface Props {
  title: string;
  action?: React.ReactNode;
}

const Header: React.FC<Props> = (props) => {
  const { title, children, action } = props;

  const { navigate } = useNavigation();

  function handleNavigateBack() {
    navigate('Landing');
  }

  return (
    <Container>
      <Navbar>
        <BackButton onPress={() => handleNavigateBack()}>
          <Image source={backIcon} resizeMode="contain" />
        </BackButton>

        <BackButton onPress={() => handleNavigateBack()}>
          <Image source={logoImg} resizeMode="contain" />
        </BackButton>
      </Navbar>

      <Content>
        <Title color="constrast" fontFamily="Archivo" size="xlarge" bold>
          {title}
        </Title>
        {action}
      </Content>

      {children}
    </Container>
  );
};

export default Header;
