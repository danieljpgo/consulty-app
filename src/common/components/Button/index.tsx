import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { Container, Image, Text } from './styles';

interface Props {
  variants: 'primary' | 'secundary';
  size: 'large' | 'small';
  align?: 'center';
  source?: ImageSourcePropType;
  children: string;
  onPress?: (pointerInside: boolean) => void;
}

const Button: React.FC<Props> = (props) => {
  const { variants, children, source, align, size, onPress } = props;

  return (
    <Container variants={variants} onPress={onPress} align={align} size={size}>
      {source && <Image source={source} />}
      <Text>{children}</Text>
    </Container>
  );
};

export default Button;
