import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { Container, Image, Text } from './styles';

interface Props {
  variants: 'primary' | 'secundary' | 'error';
  size: 'large' | 'small';
  align?: 'center';
  source?: ImageSourcePropType;
  children?: string;
  flexDirection?: 'row';
  flex?: number;
  onPress?: (pointerInside: boolean) => void;
}

const Button: React.FC<Props> = (props) => {
  const {
    variants,
    children,
    source,
    align,
    size,
    flex,
    flexDirection,
    onPress,
  } = props;

  return (
    <Container
      variants={variants}
      onPress={onPress}
      align={align}
      size={size}
      flex={flex}
      flexDirection={flexDirection}
    >
      {source && <Image spacing={!!flexDirection} source={source} />}
      {children && <Text>{children}</Text>}
    </Container>
  );
};

export default Button;
