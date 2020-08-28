import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { Container, Text, Image } from './styles';

interface Props {
  variants: 'primary' | 'secundary';
  source?: ImageSourcePropType;
  children: string;
}

const Button: React.FC<Props> = (props) => {
  const { variants, children, source } = props;

  return (
    <Container variants={variants}>
      {source && <Image source={source} />}
      <Text>{children}</Text>
    </Container>
  );
};

export default Button;
