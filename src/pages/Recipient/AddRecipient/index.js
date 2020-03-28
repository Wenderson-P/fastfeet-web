import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { Container, Header, Buttons, Row } from './styles';

import api from '~/services/api';
import history from '~/services/history';

import SaveButton from '~/components/SaveButton';
import GoBackButton from '~/components/GoBackButton';

export default function AddRecipient() {
  function handleSubmit({ name, email }) {
    // api.post('/delivery', {
    //   name,
    //   email,
    // });
  }
  return (
    <Container>
      <Header>
        <h2>Cadastro de entregadores</h2>
        <Buttons>
          <GoBackButton />
          <SaveButton onClick={handleSubmit} formId="addDeliveryMan" />
        </Buttons>
      </Header>
      <Form id="addDeliveryMan" onSubmit={handleSubmit}>
        <Row>
          <Input
            name="name"
            label="Nome"
            placeholder="Digite o nome"
            type="text"
          />
        </Row>
        <Row column={3}>
          <Input
            name="street"
            label="Rua"
            type="text"
            placeholder="Digite a rua"
          />
          <Input
            name="number"
            label="Número"
            type="number"
            placeholder="Digite o número"
          />
          <Input
            name="complement"
            label="Complemento"
            type="complement"
            placeholder="Digite o complemento"
          />
        </Row>
        <Row column={3}>
          <Input
            name="city"
            label="Cidade"
            type="text"
            placeholder="Digite a cidade"
          />
          <Input
            name="state"
            label="Estado"
            type="text"
            placeholder="Digite o estado"
          />
          <Input name="cep" label="CEP" type="number" placeholder="64000000" />
        </Row>
      </Form>
    </Container>
  );
}
