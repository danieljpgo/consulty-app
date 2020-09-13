import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import { Container, Navbar, BackButton, Title } from './styles';

interface Props {
  title: string;
}

const Header: React.FC<Props> = (props) => {
  const { title } = props;

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

        <Image source={logoImg} resizeMode="contain" />
      </Navbar>

      <Title color="constrast" fontFamily="Archivo" size="xlarge" bold>
        {title}
      </Title>
    </Container>
  );
};

export default Header;
