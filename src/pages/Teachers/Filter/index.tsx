import React from 'react';

import TextInputField from '../../../common/components/TextInputField';
import { Spacing } from '../../../common/components/Spacing';

import { Container, Wrapper } from './styles';

interface Props { }

const Filter: React.FC<Props> = (props) => {
  const { } = props;

  return (
    <Container>
      <TextInputField flex={0} label="Matéria" placeholder="Qual a matéria?" />
      <Wrapper>
        <TextInputField
          flex={4}
          label="Dia da semana"
          placeholder="Qual o dia desejado?"
        />
        <Spacing width={1.5} />
        <TextInputField label="Horário" flex={3} placeholder="Qual o horário" />
      </Wrapper>
    </Container>
  );
};

export default Filter;
