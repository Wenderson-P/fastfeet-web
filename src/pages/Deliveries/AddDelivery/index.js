import React from 'react';

import { Container, Header, Buttons } from './styles';

import SaveButton from '~/components/SaveButton';
import GoBackButton from '~/components/GoBackButton';

export default function AddDelivery() {
  return (
    <Container>
      <Header>
        <h2>Cadastro de encomendas</h2>
        <Buttons>
          <SaveButton />
          <GoBackButton />
        </Buttons>
      </Header>
    </Container>
  );
}
