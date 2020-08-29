import React from 'react';
import { ImageSourcePropType, GestureResponderEvent } from 'react-native';

import { Container, Text, Image } from './styles';

interface Props {
  variants: 'primary' | 'secundary';
  source?: ImageSourcePropType;
  children: string;
  onPress?: (pointerInside: boolean) => void;
}

const Button: React.FC<Props> = (props) => {
  const { variants, children, source, onPress } = props;

  return (
    <Container variants={variants} onPress={onPress}>
      {source && <Image source={source} />}
      <Text>{children}</Text>
    </Container>
  );
};

export default Button;
