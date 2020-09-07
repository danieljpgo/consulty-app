import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import { Container, Navbar, BackButton } from './styles';

const Header: React.FC = () => {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <Container>
      <Navbar>
        <BackButton onPress={() => handleNavigateBack()}>
          <Image source={backIcon} resizeMode="contain" />
        </BackButton>

        <Image source={logoImg} resizeMode="contain" />
      </Navbar>
    </Container>
  );
};

export default Header;
