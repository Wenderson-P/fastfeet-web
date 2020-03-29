import React, { useState, useEffect } from 'react';

import { Container, Table, Division } from './styles';

import api from '~/services/api';

import SearchBar from '~/components/SearchBar';
import AddButton from '~/components/AddButton';
import ActionMenu from '~/components/ActionMenu';

export default function Deliveries() {
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients');

      setRecipients(response.data);
    }
    loadRecipients();
  }, []);

  return (
    <Container>
      <h2>Gerenciando destinatários</h2>
      <Division>
        <SearchBar placeholder="Buscar por destinatários" />
        <AddButton url="/recipient/add-recipient" />
      </Division>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {recipients.map(recipient => (
            <tr>
              <td>#{recipient.id}</td>
              <td>{recipient.name}</td>
              <td>
                {recipient.street}, {recipient.number}, {recipient.city} -{' '}
                {recipient.state}
              </td>
              <td>
                <ActionMenu edit erase />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
