import React from 'react';

import { Teacher } from '../types';
import Text from '../../../common/components/Text';

import { Container, MessageContainer } from './styles';

interface Props {
  teachers: Teacher[] | undefined;
  isError: boolean;
  isLoading: boolean;
}

const List: React.FC<Props> = (props) => {
  const { teachers, isError, isLoading, children } = props;

  return (
    <Container>
      {children}
      {isLoading && (
        <MessageContainer>
          <Text
            bold
            size="large"
            color="base"
            fontFamily="Archivo"
            style={{ textAlign: 'center' }}
          >
            Buscando seus consultores...
          </Text>
        </MessageContainer>
      )}
      {isError && (
        <MessageContainer>
          <Text
            bold
            size="large"
            color="base"
            fontFamily="Archivo"
            style={{ textAlign: 'center' }}
          >
            Error ao buscar os dados dos consultores, tentar novamente mais
            tarde
          </Text>
        </MessageContainer>
      )}
      {!isError && !teachers && !isLoading && (
        <MessageContainer>
          <Text
            bold
            size="large"
            color="base"
            fontFamily="Archivo"
            style={{ textAlign: 'center' }}
          >
            Preencha o filtro para encontrar um consultor a sua cara {':)'}
          </Text>
        </MessageContainer>
      )}
      {!isError && teachers?.length === 0 && (
        <MessageContainer>
          <Text
            bold
            size="large"
            color="base"
            fontFamily="Archivo"
            style={{ textAlign: 'center' }}
          >
            Nenhum consultor foi encontrado para sua busca {':('}
          </Text>
        </MessageContainer>
      )}
    </Container>
  );
};

export default List;
