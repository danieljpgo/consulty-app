import React from 'react';

import searchIcon from '../../../common/assets/images/icons/search.png';
import TextInputField from '../../../common/components/TextInputField';
import { Spacing } from '../../../common/components/Spacing';
import Button from '../../../common/components/Button';

import { Container, Wrapper } from './styles';

interface Props {
  onSubmit: () => void;
}

const Filter: React.FC<Props> = (props) => {
  const { onSubmit } = props;

  function handleSubmit() {
    onSubmit();
  }

  return (
    <Container>
      <TextInputField flex={0} label="Matéria" placeholder="Qual a matéria?" />
      <Wrapper>
        <TextInputField
          flex={4}
          label="Dia da semana"
          placeholder="Dia desejado?"
        />
        <Spacing width={1.5} />
        <TextInputField label="Horário" flex={3} placeholder="Horário" />
        <Spacing width={1.5} />
        <Button
          size="xsmall"
          variants="secundary"
          align="center"
          flex={0.5}
          source={searchIcon}
          onPress={() => handleSubmit()}
        />
      </Wrapper>
    </Container>
  );
};

export default Filter;
