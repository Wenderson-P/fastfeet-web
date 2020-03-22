import React from 'react';

import { Container, Menu, Option, Profile } from './styles';
import logo from '~/assets/fastfeet-logo.png';

export default function Header() {
  return (
    <Container>
      <Menu>
        <img src={logo} alt="FastFeet" />
        <Option>Encomendas</Option>
        <Option>Entregadores</Option>
        <Option>Destinatários</Option>
        <Option>Problemas</Option>
      </Menu>
      <Profile>
        <h4>Wenderson Pacheco</h4>
        <button type="button">sair do sistema</button>
      </Profile>
    </Container>
  );
}
