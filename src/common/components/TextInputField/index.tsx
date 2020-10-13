import React from 'react';

import Text from '../Text';
import light from '../../../styles/themes/light';

import { Container, TextInput } from './styles';

interface Props {
  label: string;
  placeholder: string;
  flex: number;
  value?: string;
  onChangeText?: (text: string) => void;
}

const TextInputField: React.FC<Props> = (props) => {
  const { value, label, placeholder, flex, onChangeText } = props;

  return (
    <Container flex={flex}>
      <Text fontFamily="Poppins" size="small" color="light">
        {label}
      </Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor={light.colors.surface.placeholder}
        onChangeText={(text) => onChangeText && onChangeText(text)}
      />
    </Container>
  );
};

export default TextInputField;
