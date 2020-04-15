import React, { useEffect, useState } from 'react';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Container, Header, Buttons, Row, Item } from './styles';

import api from '~/services/api';
import history from '~/services/history';

import AvatarInput from '../AvatarInput';
import SaveButton from '~/components/SaveButton';
import GoBackButton from '~/components/GoBackButton';

const schema = Yup.object().shape({
  name: Yup.string().required('Insira um nome válido'),
  email: Yup.string()
    .email()
    .required('Insira um email válido'),
  avatar_id: Yup.number().required('Foto é obrigatória'),
});

export default function EditDeliveryman() {
  const [deliveryman, setDeliveryman] = useState({});

  useEffect(() => {
    async function loadDeliveryman() {
      setDeliveryman(history.location.state);
    }
    loadDeliveryman();
  }, []);

  async function handleSubmit({ name, email, avatar_id }) {
    await api.put(`/deliveryman/${deliveryman.id}`, {
      name,
      email,
      avatar_id,
    });
    history.push('/deliverymen');
  }

  return (
    <Container>
      <Header>
        <h2>Cadastro de entregadores</h2>
        <Buttons>
          <GoBackButton />
          <SaveButton onClick={handleSubmit} formId="editDeliveryman" />
        </Buttons>
      </Header>
      <Form
        id="editDeliveryman"
        onSubmit={handleSubmit}
        schema={schema}
        initialData={deliveryman}
      >
        <AvatarInput
          name="avatar_id"
          image={deliveryman.avatar}
          imageId={deliveryman.avatar_id}
        />
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
