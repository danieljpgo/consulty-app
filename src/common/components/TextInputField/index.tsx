import React from 'react';

import Text from '../Text';
import light from '../../../styles/themes/light';

import { Container, TextInput } from './styles';

interface Props {
  label: string;
  placeholder: string;
  flex: number;
}

const TextInputField: React.FC<Props> = (props) => {
  const { label, placeholder, flex } = props;

  return (
    <Container flex={flex}>
      <Text fontFamily="Poppins" size="small" color="light">
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={light.colors.surface.placeholder}
      />
    </Container>
  );
};

export default TextInputField;
