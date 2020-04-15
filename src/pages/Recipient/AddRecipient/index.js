import React from 'react';
import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';
import { Container, Header, Buttons, Row } from './styles';

import api from '~/services/api';
import history from '~/services/history';

import SaveButton from '~/components/SaveButton';
import GoBackButton from '~/components/GoBackButton';

const schema = Yup.object().shape({
  name: Yup.string().required('Insira um nome'),
  street: Yup.string().required('Insira uma rua'),
  city: Yup.string().required('Insira uma cidade'),
  state: Yup.string().required('Insira um estado'),
  number: Yup.number()
    .required('Insira um número')
    .typeError('Somente números'),
  cep: Yup.string()
    .matches(/^[0-9]{8}$/, 'CEP deve ter 8 números')
    .required('Insira um cep')
    .typeError('Somente números'),
});

export default function AddRecipient() {
  async function handleSubmit({
    name,
    street,
    number,
    complement,
    city,
    state,
    cep,
  }) {
    await api.post('/recipients', {
      name,
      street,
      number,
      complement,
      city,
      state,
      cep,
    });
    history.push('/recipient');
  }
  return (
    <Container>
      <Header>
        <h2>Cadastro de entregadores</h2>
        <Buttons>
          <GoBackButton />
          <SaveButton onClick={handleSubmit} formId="addRecipient" />
        </Buttons>
      </Header>
      <Form id="addRecipient" onSubmit={handleSubmit} schema={schema}>
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
