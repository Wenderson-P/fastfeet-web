import React from 'react';

import logo from '~/assets/fastfeet-logo.png';
import { Container, Form } from './styles';

export default function SignIn() {
  return (
    <Container>
      <img src={logo} alt="FastFeet" />
      <Form>
        <label htmlFor="email">Seu e-mail</label>
        <input type="email" id="email" placeholder="exemplo@email.com" />

        <label htmlFor="password">Sua senha</label>
        <input type="password" id="password" placeholder="*************" />
        <button type="submit">Entrar no sistema</button>
      </Form>
    </Container>
  );
}
