import React, { useState, useEffect } from 'react';

import { Container, Table, Avatar, Division, AddButton } from './styles';

import api from '~/services/api';

import SearchBar from '~/components/SearchBar';

export default function Deliveries() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('delivery');
      setDeliveries(response.data);
    }
    loadDeliveries();
  });

  return (
    <Container>
      <h3>Gerenciando encomendas</h3>
      <Division>
        <SearchBar />
        <AddButton>Cadastrar</AddButton>
      </Division>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map(delivery => (
            <tr>
              <td>{delivery.id}</td>
              <td>{delivery.recipient.name}</td>
              <td>
                <Avatar>{delivery.deliveryman.avatar_id}</Avatar>
                {delivery.deliveryman.name}
              </td>
              <td>{delivery.recipient.city}</td>
              <td>{delivery.recipient.state}</td>
              <td>Pendente</td>
              <td>Ações</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
