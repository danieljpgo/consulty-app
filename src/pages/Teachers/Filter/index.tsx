import React, { useState } from 'react';

import searchIcon from '../../../common/assets/images/icons/search.png';
import TextInputField from '../../../common/components/TextInputField';
import { Spacing } from '../../../common/components/Spacing';
import Button from '../../../common/components/Button';
import { Form } from '../types';

import { Container, Wrapper } from './styles';

interface Props {
  onSubmit: (form: Form) => void;
}

const Filter: React.FC<Props> = (props) => {
  const [subject, setSubject] = useState('');
  const [daysOfWeek, setDaysOfWeek] = useState('');
  const [time, setTime] = useState('');

  const { onSubmit } = props;

  function handleSubmit(form: Form) {
    onSubmit(form);
  }

  function handleDaysOfWeek(value: string) {
    setDaysOfWeek(value);
  }

  function handleSubjectChange(value: string) {
    setSubject(value);
  }

  function handleTimeChange(value: string) {
    setTime(value);
  }

  return (
    <Container>
      <TextInputField
        flex={0}
        label="Tema"
        placeholder="Qual o tema?"
        value={subject}
        onChangeText={(text) => handleSubjectChange(text)}
      />
      <Wrapper>
        <TextInputField
          flex={4}
          label="Dia da semana"
          placeholder="Dia desejado?"
          value={daysOfWeek}
          onChangeText={(text) => handleDaysOfWeek(text)}
        />
        <Spacing width={1.5} />
        <TextInputField
          label="Horário"
          flex={3}
          placeholder="Horário"
          value={time}
          onChangeText={(text) => handleTimeChange(text)}
        />
        <Spacing width={1.5} />
        <Button
          size="xsmall"
          variants="secundary"
          align="center"
          flex={0.5}
          source={searchIcon}
          onPress={() =>
            handleSubmit({
              daysOfWeek: daysOfWeek,
              subject: subject,
              time: time,
            })
          }
        />
      </Wrapper>
    </Container>
  );
};

export default Filter;
