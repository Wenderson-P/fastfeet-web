import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Menu, Profile } from './styles';
import logo from '~/assets/fastfeet-logo.png';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }
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
        <button type="button" onClick={handleLogout}>
          sair do sistema
        </button>
      </Profile>
    </Container>
  );
}
