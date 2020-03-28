import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { Container, Header, Buttons, Row, Item } from './styles';

import api from '~/services/api';
import history from '~/services/history';

import SaveButton from '~/components/SaveButton';
import GoBackButton from '~/components/GoBackButton';

export default function AddDelivery() {
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
          <Item>
            <Input
              name="name"
              label="Nome"
              placeholder="Digite o nome"
              type="text"
            />
          </Item>
        </Row>
        <Row>
          <Item>
            <Input
              name="email"
              label="Email"
              type="email"
              placeholder="Digite o email"
            />
          </Item>
        </Row>
      </Form>
    </Container>
  );
}
