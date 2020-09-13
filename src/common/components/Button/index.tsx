import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { Container, Image, Text } from './styles';

interface Props {
  variants: 'primary' | 'secundary';
  size: 'large' | 'small';
  align?: 'center';
  flexDirection?: 'row';
  source?: ImageSourcePropType;
  children?: string;
  onPress?: (pointerInside: boolean) => void;
}

const Button: React.FC<Props> = (props) => {
  const {
    variants,
    children,
    source,
    align,
    size,
    flexDirection,
    onPress,
  } = props;

  return (
    <Container
      variants={variants}
      onPress={onPress}
      align={align}
      size={size}
      flexDirection={flexDirection}
    >
      {source && <Image spacing={!!flexDirection} source={source} />}
      {children && <Text>{children}</Text>}
    </Container>
  );
};

export default Button;
