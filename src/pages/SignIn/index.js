import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/fastfeet-logo.png';
import { Container } from './styles';

export default function SignIn() {
  function handleSubmit(data) { }

  return (
    <Container>
      <img src={logo} alt="FastFeet" />
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">Seu e-mail</label>
        <Input type="email" name="email" placeholder="exemplo@email.com" />

        <label htmlFor="password">Sua senha</label>
        <Input type="password" name="password" placeholder="*************" />
        <button type="submit">Entrar no sistema</button>
      </Form>
    </Container>
  );
}
