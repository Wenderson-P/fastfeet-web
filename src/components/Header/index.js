import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Menu, Option, Profile } from './styles';
import logo from '~/assets/fastfeet-logo.png';

export default function Header() {
  return (
    <Container>
      <Menu>
        <img src={logo} alt="FastFeet" />
        <ul>
          <li>
            <NavLink
              to="/deliveries"
              activeStyle={{
                color: '#444444',
              }}
            >
              Encomendas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/deliverymen"
              activeStyle={{
                color: '#444444',
              }}
            >
              Entregadores
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipient"
              activeStyle={{
                color: '#444444',
              }}
            >
              Destinatários
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/problems"
              activeStyle={{
                color: '#444444',
              }}
            >
              Problemas
            </NavLink>
          </li>
        </ul>
      </Menu>
      <Profile>
        <h4>Wenderson Pacheco</h4>
        <button type="button">sair do sistema</button>
      </Profile>
    </Container>
  );
}
